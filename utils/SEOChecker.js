const cheerio = require('cheerio')
const puppeteer = require('puppeteer')

function checkContentQuality (content, key) {
  const keyword = key.toLowerCase()
  const keywordDensity = (content.match(new RegExp(keyword, 'gi')) || []).length / content.split(' ').length
  console.log('keywordDensity', (content.match(new RegExp(keyword, 'gi')) || []).length)

  let score = 0

  if (content.length >= 500) {
    score += 10
  }

  if (keywordDensity > 0 && keywordDensity <= 0.02) {
    score += 25
  } else if (keywordDensity > 0.02 && keywordDensity <= 0.03) {
    score += 60
  } else if (keywordDensity > 0.03) {
    score += 10
  }

  const headings = content.match(/<h[1-6]>.*?<\/h[1-6]>/gi)
  if (headings && headings.length > 0) {
    const h1Count = (content.match(/<h1>.*?<\/h1>/gi) || []).length
    if (h1Count === 1) {
      score += 10
    }
    const h2Count = (content.match(/<h2>.*?<\/h2>/gi) || []).length
    if (h2Count >= 1 && h2Count <= 3) {
      score += 15
    }
    const h3Count = (content.match(/<h3>.*?<\/h3>/gi) || []).length
    if (h3Count >= 1 && h3Count <= 5) {
      score += 15
    }
  }

  if (new Set(content.split(' ')).size > content.split(' ').length * 0.9) {
    score += 10
  }

  const fleschScore = 206.835 - (1.015 * (content.split(' ').length / (content.split('.').length + content.split('?').length + content.split('!').length))) - (84.6 * (content.match(/[,:;"()[\]{}<>@#$%^&*+=_`~]/g) || []).length / content.split(' ').length)
  if (fleschScore >= 60) {
    score += 15
  }

  return Math.round((score / 100) * 100)
}

function optimizeTitleAndMeta (title, metaDescription, key) {
  let score = 0

  if (title.length >= 60 && title.length <= 70) {
    score += 20
  } else if (title.length > 70) {
    score += 30
  }

  const keyword = key.toLowerCase()
  if (title.toLowerCase().includes(keyword)) {
    score += 20
  }

  if (metaDescription.length >= 120 && metaDescription.length <= 155) {
    score += 20
  } else if (metaDescription.length > 155) {
    score += 30
  }

  if (metaDescription.toLowerCase().includes(keyword)) {
    score += 20
  }

  if (score > 100) {
    score = 100
  }

  // Devolvemos un objeto con el título y la descripción meta optimizados, junto con su puntaje:
  return {
    title: title.slice(0, 70),
    metaDescription: metaDescription.slice(0, 155),
    score
  }
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
      score += 10
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
      score += 5 * (index + 1)
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
          const imgTag = `<${tag}> ${alt ? `ALT: ${alt}, ` : ''}img SRC: ${imgName}` // Usar el nombre de la imagen en lugar de la ruta completa
          feedback.headerAndHTMLtagsObject.tips[1].currentTags.push(imgTag)
        } else {
          const text = $(el)
            .text()
            .replace(/(\r\n|\n|\r)/gm, ' ')
            .replace(/<[^>]*>/g, '')
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
      score -= 5 * (index + 1)
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

    const title = html.match(/<title>(.*?)<\/title>/i)[1]
    const metaDescription = html.match(/<meta name="description" content="([^"]*)"/i)[1]

    // remove all unnecessary tags and code attributes, only keep the text from h1 to h6, p, li, ul, and remove all classes and ids, even if they are not in the tags to be removed (to avoid false positives)
    const content = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]*>/gi, ' ').replace(/class="[^"]*"/gi, '')
      .replace(/id="[^"]*"/gi, '').replace(/&nbsp;/gi, '')
      // Remove all the spaces that are repeated more than once
      .replace(/\s+/g, ' ')

    const contentQuality = checkContentQuality(content, keyword)
    const optimizedTitleAndMeta = optimizeTitleAndMeta(title, metaDescription, keyword)
    const headersAndHTMLTags = checkHeadersAndHTMLTags(html)

    const result = {
      url,
      keyword,
      contentQuality,
      optimizedTitleAndMeta,
      headersAndHTMLTags: headersAndHTMLTags.headerAndHTMLtagsObject.tips.map((tip) => tip)
    }

    const finalScore =
      (contentQuality + optimizedTitleAndMeta.score + headersAndHTMLTags.headerAndHTMLtagsObject.score) / 3
    result.finalScore = finalScore
    console.log('finalScore', result)

    return result
  } catch (error) {
    console.error(error)
  }
}

analyzeContent('https://marketingweb.com.mx', 'marketing digital')
