const cheerio = require('cheerio')
const puppeteer = require('puppeteer')

function checkContentQuality (content, key) {
  const keyword = key.toLowerCase()
  const cleanContent = content.replace(/<[^>]*>/gi, ' ').replace(/class="[^"]*"/gi, '')
    .replace(/id="[^"]*"/gi, '').replace(/&nbsp;/gi, '')
  // Remove all the spaces that are repeated more than once
    .replace(/\s+/g, ' ')

  const keywordDensity = (cleanContent.match(new RegExp(keyword, 'gi')) || []).length / cleanContent.split(' ').length
  // empieza el conteo de puntos
  let score = 0

  if (cleanContent.length >= 500) {
    score += 10
    console.log('content length +10')
  }

  if (keywordDensity > 0 && keywordDensity <= 0.02) {
    score += 25
    console.log('keyword density < 0.02 +25')
  } else if (keywordDensity > 0.02 && keywordDensity <= 0.03) {
    score += 60
    console.log('keyword density < 0.03 & > 0.02 +60')
  } else if (keywordDensity > 0.03) {
    score += 10
    console.log('keyword density > 0.03 +10')
  }

  const headings = content.match(/<h[1-6][^>]*>.*?<\/h[1-6]>/gi)
  if (headings && headings.length > 0) {
    const h1Count = (content.match(/<h1[^>]*>.*?<\/h1>/gi) || []).length
    if (h1Count === 1) {
      score += 10
      console.log('h1 count +10')
    } else {
      score -= 10
    }
    const h2Count = (content.match(/<h2[^>]*>.*?<\/h2>/gi) || []).length
    if (h2Count >= 1 && h2Count <= 3) {
      score += 15
      console.log('h2 count +15')
    } else {
      score -= 10
      console.log('Tiene más de 3 h2')
    }
    const h3Count = (content.match(/<h3[^>]*>.*?<\/h3>/gi) || []).length
    if (h3Count >= 1 && h3Count <= 5) {
      score += 15
      console.log('h3 count +15')
    } else {
      score -= 10
      console.log('Tiene más de 5 h3')
    }
  }

  if (new Set(content.split(' ')).size > content.split(' ').length * 0.9) {
    score += 10
    console.log('unique words +10')
  }

  // si el contenido es en inglés de acuerdo a la declaracion lang calcular el flesch reading ease

  const lang = content.match(/<html lang=".*?">/gi)

  if (lang && lang[0].includes('en')) {
    const fleschScore = 206.835 - (1.015 * (content.split(' ').length / (content.split('.').length + content.split('?').length + content.split('!').length))) - (84.6 * (content.match(/[,:;"()[\]{}<>@#$%^&*+=_`~]/g) || []).length / content.split(' ').length)
    if (fleschScore >= 60) {
      score += 15
      console.log('flesch score +15')
    }
  }

  return Math.round((score / 100) * 100)
}

function optimizeTitleAndMeta (title, metaDescription, key, metaTags, canonical, structuredData) {
  let score = 0
  const feedback = {
    titleAndMetaObject: {
      title: title.slice(0, 70),
      description: metaDescription.slice(0, 155),
      ogMeta: metaTags?.map((meta) => {
        if (meta.property === 'og:title') {
          return {
            property: meta.property,
            content: meta.content.slice(0, 70)
          }
        } else if (meta.property === 'og:description') {
          return {
            property: meta.property,
            content: meta.content.slice(0, 155)
          }
        } else {
          return meta
        }
      }),
      twitterMeta: metaTags?.map((meta) => {
        if (meta.name === 'twitter:title') {
          return {
            name: meta.name,
            content: meta.content.slice(0, 70)
          }
        } else if (meta.name === 'twitter:description') {
          return {
            name: meta.name,
            content: meta.content.slice(0, 155)
          }
        } else {
          return meta
        }
      }),
      canonical,
      structuredData,
      score: 0,
      sugestions: []
    }
  }

  if (title.length >= 60 && title.length <= 70) {
    score += 20
  } else if (title.length > 70) {
    score -= 10
    feedback.titleAndMetaObject.sugestions.push(
      'El título es demasiado largo. Debería tener entre 60 y 70 caracteres.'
    )
  }

  const keyword = key.toLowerCase()
  if (title.toLowerCase().includes(keyword)) {
    score += 20
  }

  if (metaDescription.length >= 110 && metaDescription.length <= 130) {
    score += 20
    feedback.titleAndMetaObject.sugestions.push(
      'La descripción meta es demasiado corta. Debería tener entre 130 y 155 caracteres.'
    )
  } else if (metaDescription.length > 130 && metaDescription.length <= 155) {
    score += 30
  } else if (metaDescription.length > 155) {
    score -= 10
    feedback.titleAndMetaObject.sugestions.push(
      'La descripción meta es demasiado larga. Debería tener entre 130 y 155 caracteres.'
    )
  }

  if (metaDescription.toLowerCase().includes(keyword)) {
    score += 20
  }

  const ogTitle = metaTags.find((meta) => meta.property === 'og:title')
  if (ogTitle && ogTitle.content) {
    if (ogTitle.content.length >= 60 && ogTitle.content.length <= 70) {
      score += 20
    } else if (ogTitle.content.length > 70) {
      score -= 10
      feedback.titleAndMetaObject.sugestions.push(
        'El título de Open Graph es demasiado largo. Debería tener entre 60 y 70 caracteres.'
      )
    }
  }

  if (ogTitle && ogTitle.content && ogTitle.content.toLowerCase().includes(keyword)) {
    score += 5
  }

  const ogDescription = metaTags.find((meta) => meta.property === 'og:description')
  if (ogDescription && ogDescription.content) {
    if (ogDescription.content.length >= 110 && ogDescription.content.length <= 130) {
      score += 5
    } else if (ogDescription.content.length > 130 && ogDescription.content.length <= 155) {
      score += 10
    } else if (ogDescription.content.length > 155) {
      score -= 10
      feedback.titleAndMetaObject.sugestions.push(
        'La descripción de Open Graph es demasiado larga. Debería tener entre 130 y 155 caracteres.'
      )
    }
  }

  if (ogDescription && ogDescription.content && ogDescription.content.toLowerCase().includes(keyword)) {
    score += 5
  }

  const twitterTitle = metaTags.find((meta) => meta.name === 'twitter:title')
  if (twitterTitle && twitterTitle.content) {
    if (twitterTitle.content.length >= 60 && twitterTitle.content.length <= 70) {
      score += 20
    } else if (twitterTitle.content.length > 70) {
      score -= 10
      feedback.titleAndMetaObject.sugestions.push(
        'El título de Twitter es demasiado largo. Debería tener entre 60 y 70 caracteres.'
      )
    }
  }

  if (twitterTitle && twitterTitle.content && twitterTitle.content.toLowerCase().includes(keyword)) {
    score += 5
  }

  const twitterDescription = metaTags.find((meta) => meta.name === 'twitter:description')
  if (twitterDescription && twitterDescription.content) {
    if (twitterDescription.content.length >= 110 && twitterDescription.content.length <= 130) {
      score += 5
    } else if (twitterDescription.content.length > 130 && twitterDescription.content.length <= 155) {
      score += 10
    } else if (twitterDescription.content.length > 155) {
      score -= 10
      feedback.titleAndMetaObject.sugestions.push(
        'La descripción de Twitter es demasiado larga. Debería tener entre 130 y 155 caracteres.'
      )
    }
  }

  if (twitterDescription && twitterDescription.content && twitterDescription.content.toLowerCase().includes(keyword)) {
    score += 5
  }

  if (canonical) {
    score += 10
  }

  if (structuredData) {
    score += 10
  }

  if (score > 100) {
    score = 100
  }

  feedback.titleAndMetaObject.score = score
  return feedback
}

function checkHeadersAndHTMLTags (html) {
  let score = 0
  const feedback = {
    headerAndHTMLtagsObject: {
      score: 0,
      tips: [
        {
          title: 'Encabezados',
          sugestions: [],
          orderedHeaders: [],
          missingHeaders: [],
          currentHeaders: []
        },
        {
          title: 'Etiquetas HTML de contenido',
          sugestions: [],
          missingTags: [],
          currentTags: []
        },
        {
          title: 'Etiquetas HTML semánticas',
          sugestions: [],
          missingTags: [],
          currentTags: []
        },
        {
          title: 'Etiquetas HTML obsoletas',
          sugestions: {},
          obsoleteTags: []
        }
      ]
    }
  }
  const detectedHeaders = []
  const detectedOrder = []
  const correctOrder = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

  // Comprobamos la inclusión de las etiquetas de encabezado:
  const headerTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  headerTags.forEach((tag, index) => {
    const headerEls = html.match(
      new RegExp(`<${tag}[^>]*>.*?</${tag}>`, 'gi')
    )
    if (headerEls && headerEls.length > 0) {
      score += 10 / headerEls.length
      headerEls.forEach((header) => {
        const text = header
          .replace(new RegExp(`<${tag}[^>]*>`, 'i'), '')
          .replace(new RegExp(`</${tag}>`, 'i'), '')
        detectedHeaders.push({ tag, text })
        detectedOrder.push(tag)
      })
    }
  })

  if (detectedHeaders.length > 0) {
    detectedHeaders.forEach((header) => {
      feedback.headerAndHTMLtagsObject.tips[0].currentHeaders.push(
        `<${header.tag}>: ${header.text}`
      )
      const missingHeaders = []
      // Comprobamos los encabezados fallantes y los incluimos en el objeto de retroalimentación:
      headerTags.forEach((tag, index) => {
        if (!detectedOrder.includes(tag)) {
          missingHeaders.push(tag)
        }
      })
      feedback.headerAndHTMLtagsObject.tips[0].missingHeaders = missingHeaders
    })
  }
  if (feedback.headerAndHTMLtagsObject.tips[0].missingHeaders.length === 0) {
    feedback.headerAndHTMLtagsObject.tips[0].sugestions.push(
      'No se encontraron encabezados faltantes.'
    )
  } else {
    const missingHeaders = feedback.headerAndHTMLtagsObject.tips[0].missingHeaders
    const missingH1toH3 = missingHeaders.filter((header) => header === 'h1' || header === 'h2' || header === 'h3')
    const missingH4toH6 = missingHeaders.filter((header) => header === 'h4' || header === 'h5' || header === 'h6')

    if (missingH1toH3 && missingH1toH3.length > 0) {
      // Mostrar solo las etiquetas faltantes de h1 a h3:
      feedback.headerAndHTMLtagsObject.tips[0].sugestions.push(`Se encontraron encabezados faltantes que son importantes para la estructura de la página: ${missingH1toH3.join(', ')}.`)
      score -= 10
    }
    if (missingH4toH6 && missingH4toH6.length > 0) {
      // Mostrar solo las etiquetas faltantes de h4 a h6:
      feedback.headerAndHTMLtagsObject.tips[0].sugestions.push(`Se encontraron encabezados faltantes, pero no son tan importantes para la estructura de la página: ${missingH4toH6.join(', ')}.`)
    }
  }

  // Comprobamos el orden de los encabezados estén en el orden correcto:
  if (detectedOrder.length > 0) {
    let correctOrderCount = 0
    // eliminamos duplicados:
    const uniqueDetectedOrder = [...new Set(detectedOrder)]

    // Comprobamos si el orden de los encabezados es correcto:
    uniqueDetectedOrder.forEach((tag, index) => {
      if (tag === correctOrder[index]) {
        correctOrderCount++
      }
    })
    if (correctOrderCount === uniqueDetectedOrder.length) {
      feedback.headerAndHTMLtagsObject.tips[0].sugestions.push(
        `El orden de los encabezados es correcto. ${uniqueDetectedOrder.join(', ')}`
      )
      score += 10
    } else {
      feedback.headerAndHTMLtagsObject.tips[0].sugestions.push(
        `El orden de los encabezados no es correcto. ${uniqueDetectedOrder.join(', ')}`
      )
      score -= 10
    }
  }

  // asuma que html es el contenido HTML que desea analizar y manipular
  const $ = cheerio.load(html)

  // Buscar etiquetas importantes
  const importantTags = ['p', 'ul', 'ol', 'li', 'img']
  importantTags.forEach((tag, index) => {
    const importantEls = $(tag)
    if (importantEls.length > 0) {
      importantEls.each((i, el) => {
        if (tag === 'img') {
          // Obtener la última parte de la ruta que representa el nombre de la imagen (por ejemplo, si la ruta es https://www.example.com/images/image.jpg, el nombre de la imagen es image.jpg, si la ruta es /_next/image?url=%2Fimages%2Fdiseno-web.jpg&w=3840&q=75, el nombre de la imagen es diseno-web.jpg)
          const imgSrc = $(el).attr('src')
          const decodedSrc = decodeURIComponent(imgSrc)
          let imgName
          if (decodedSrc.includes('/_next/image?url=') && decodedSrc.includes('&w=') && decodedSrc.includes('&q=')) {
            const img = decodedSrc.match(/\/([^/?#&]+)[^/]*$/)[1]
            imgName = img
          } else {
            const img = imgSrc.match(/\/([^/?#&]+)[^/]*$/)[1]
            imgName = img
          }
          const alt = $(el).attr('alt')
          if (alt) {
            score += 5
          }
          const imgTag = `<${tag}> ${alt ? `ALT: ${alt}, ` : ''}img SRC: ${imgName}` // Usar el nombre de la imagen en lugar de la ruta completa
          feedback.headerAndHTMLtagsObject.tips[1].currentTags.push(imgTag)
        } else {
          const text = $(el)
            .text()
            .replace(/(\r\n|\n|\r)/gm, ' ')
            .replace(/<[^>]*>/g, '')

          if (tag === 'p' && text.length > 20) {
            score += 5
          }
          feedback.headerAndHTMLtagsObject.tips[1].currentTags.push(
            tag === 'p'
              ? `<${tag}>: ${text.replace(/<[^>]*>/g, '').replace(/<style[^>]*>[^<]*<\/style>/gi, '').slice(0, 100)}${text.length > 100 ? '...' : ''}`
              : tag === 'li' || tag === 'ul' || tag === 'ol'
                ? `<${tag}>: ${text}`
                : tag
          )
        }
      })
    } else if (tag !== 'img') {
      feedback.headerAndHTMLtagsObject.tips[1].missingTags.push(tag)
    }
  })

  if (feedback.headerAndHTMLtagsObject.tips[1].missingTags.length === 0) {
    feedback.headerAndHTMLtagsObject.tips[1].sugestions.push(
      'No se encontraron etiquetas importantes faltantes.'
    )
  } else {
    const missingTags = feedback.headerAndHTMLtagsObject.tips[1].missingTags
    const missingImportant = missingTags.filter((tag) => tag === 'p' || tag === 'img')
    const missingList = missingTags.filter((tag) => tag === 'ul' || tag === 'li')
    const missingList2 = missingTags.filter((tag) => tag === 'ol')
    if (missingImportant && missingImportant.length > 0) {
      feedback.headerAndHTMLtagsObject.tips[1].sugestions.push(
        `Se encontraron etiquetas faltantes que son importantes para la estructura de la página: ${missingImportant.join(', ')}.`
      )
      score -= 5 * (missingImportant.length + 1)
    }
    if (missingList && missingList.length > 0) {
      feedback.headerAndHTMLtagsObject.tips[1].sugestions.push(
        `Se encontraron etiquetas faltantes que son importantes para la estructura de la página: ${missingList.join(', ')}.`
      )
      score -= 2 * (missingList.length + 1)
    }
    if (missingList2 && missingList2.length > 0) {
      feedback.headerAndHTMLtagsObject.tips[1].sugestions.push(
        `Se encontraron etiquetas faltantes que son opcionales para la estructura de la página: ${missingList2.join(', ')}.`
      )
    }
  }

  // Comprobamos la inclusión de etiquetas HTML semánticas:
  const semanticTags = ['header', 'main', 'footer', 'nav', 'article', 'section', 'aside', 'figure']

  semanticTags.forEach((tag, index) => {
    const semanticEls = html.match(new RegExp(`<(${tag})(\\s+[^>]+)?>`, 'gi'))
    if (semanticEls && semanticEls.length > 0) {
      score += 5 * (index + 1)
      semanticEls.forEach((semantic) => {
        const tagName = semantic.match(/^<([^\s>]+)/)[1]
        feedback.headerAndHTMLtagsObject.tips[2].currentTags.push(`<${tagName}>`)
      })
    } else {
      score -= 5 * (index + 1)
      feedback.headerAndHTMLtagsObject.tips[2].missingTags.push(tag)
    }
  })

  if (feedback.headerAndHTMLtagsObject.tips[2].missingTags.length === 0) {
    feedback.headerAndHTMLtagsObject.tips[2].sugestions.push(
      'No se encontraron etiquetas HTML semánticas faltantes.'
    )
  } else {
    feedback.headerAndHTMLtagsObject.tips[2].sugestions.push(
      `Se encontraron etiquetas HTML semánticas faltantes que pueden ser importantes para la página: ${feedback.headerAndHTMLtagsObject.tips[2].missingTags.join(', ')}.`
    )
  }

  // Comprobamos la inclusión de etiquetas HTML obsoletas:
  const obsoleteTags = ['center', 'font']
  obsoleteTags.forEach((tag, index) => {
    const obsoleteEls = html.match(new RegExp(`<${tag}[^>]*>`, 'gi'))
    if (obsoleteEls && obsoleteEls.length > 0) {
      score -= 5 * (index + 1)
      feedback.headerAndHTMLtagsObject.tips[3].obsoleteTags.push(tag)
    }
  })

  // Comprobamos el orden de los encabezados:
  const areHeadersOrdered =
    detectedOrder.length === correctOrder.length &&
    detectedOrder.every((tag, index) => tag === correctOrder[index])
  if (areHeadersOrdered) {
    feedback.headerAndHTMLtagsObject.tips[0].orderedHeaders = correctOrder
  }

  if (score > 100) {
    score = 100
  }

  feedback.headerAndHTMLtagsObject.score = score
  return feedback
}

// function evaluateInboundLinks (links) {
//   let score = 0
//   const feedbacks = []

//   // Comprobamos que haya enlaces entrantes:
//   if (links.length > 0) {
//     score += 20
//     feedbacks.push('Hay enlaces entrantes en la página.')
//   } else {
//     feedbacks.push('No hay enlaces entrantes en la página.')
//   }

//   // Comprobamos que los enlaces tengan atributo rel="nofollow":
//   const nofollowLinks = links.filter((link) => link.rel === 'nofollow')
//   if (nofollowLinks.length > 0) {
//     feedbacks.push(`Hay ${nofollowLinks.length} enlaces con atributo rel="nofollow".`)
//   } else {
//     score += 20
//     feedbacks.push('No hay enlaces con atributo rel="nofollow".')
//   }

//   // Comprobamos que los enlaces estén en el mismo idioma que la página:
//   const sameLanguageLinks = links.filter((link) => link.hreflang === document.documentElement.lang)
//   if (sameLanguageLinks.length > 0) {
//     score += 20
//     feedbacks.push(`Hay ${sameLanguageLinks.length} enlaces en el mismo idioma que la página.`)
//   } else {
//     feedbacks.push('No hay enlaces en el mismo idioma que la página.')
//   }

//   // Comprobamos que los enlaces sean relevantes:
//   const relevantLinks = links.filter((link) => {
//     const linkText = link.textContent.toLowerCase()
//     return linkText.includes('contacto') || linkText.includes('servicios')
//   })
//   if (relevantLinks.length > 0) {
//     score += 20
//     feedbacks.push(`Hay ${relevantLinks.length} enlaces relevantes en la página.`)
//   } else {
//     feedbacks.push('No hay enlaces relevantes en la página.')
//   }

//   // Devolvemos un objeto con el puntaje total y un mensaje de retroalimentación:
//   const feedback = feedbacks.join(' ')
//   return {
//     score,
//     feedback
//   }
// }

async function analyzeContent (url, keyword) {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle0' })
    const html = await page.content()
    await browser.close()

    const title = html?.match(/<title>(.*?)<\/title>/i)[1]
    const metaDescription = html?.match(/<meta name="description" content="([^"]*)"/i)[1]
    const metas = html?.match(/<meta name="([^"]*)" content="([^"]*)"/gi)
    const canonical = html?.match(/<link rel="canonical" href="([^"]*)"/i)
    const structuredData = html.match(/<script type="application\/ld\+json">([^<]*)<\/script>/gi)

    // remove all unnecessary tags and code attributes, only keep the text from h1 to h6, p, li, ul, and remove all classes and ids, even if they are not in the tags to be removed (to avoid false positives)
    const content = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')

    const contentQuality = checkContentQuality(content, keyword)
    const optimizedTitleAndMeta = optimizeTitleAndMeta(title, metaDescription, keyword, metas, canonical, structuredData)
    const headersAndHTMLTags = checkHeadersAndHTMLTags(html)

    const result = {
      url,
      keyword,
      contentQuality,
      optimizedTitleAndMeta: optimizedTitleAndMeta.titleAndMetaObject,
      headersAndHTMLTag: {
        score: headersAndHTMLTags.headerAndHTMLtagsObject.score,
        tips: headersAndHTMLTags.headerAndHTMLtagsObject.tips
      }
    }

    const finalScore =
      (contentQuality + optimizedTitleAndMeta.titleAndMetaObject.score + headersAndHTMLTags.headerAndHTMLtagsObject.score) / 3
    result.finalScore = finalScore

    console.log(result.finalScore)
    console.log(result.url)
    console.log(result.keyword)
    console.log(result.contentQuality)
    console.log(result.optimizedTitleAndMeta)
    console.log(result.headersAndHTMLTag.tips)

    return result
  } catch (error) {
    console.error(error)
  }
}

analyzeContent('https://marketingweb.com.mx/diseno-web', 'marketing digital')
