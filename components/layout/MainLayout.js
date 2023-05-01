import { useStore } from '@/Context/Store'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import Menu from '../navigation/Menu'
import { Footer } from '../sections/Footer'

const Layout = ({ children, title, description, keywords, ogType, ogUrl, ogImage, ogDescription, schemaObject }) => {
  const { theme, setTheme } = useStore()
  const [pageLoaded, setPageLoaded] = useState(false)
  const whatsappRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleIntersection = (entries) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setPageLoaded(true)
    }
  }

  const observer = useRef(null)

  useEffect(() => {
    if (whatsappRef.current && typeof window !== 'undefined') {
      observer.current = new IntersectionObserver(handleIntersection, {
        rootMargin: '0px',
        threshold: 0.5
      })
      observer.current.observe(whatsappRef.current)
    }
    return () => {
      if (observer.current && whatsappRef.current) {
        observer.current.unobserve(whatsappRef.current)
      }
    }
  }, [whatsappRef])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={description} />
        {keywords && <meta name='keywords' content={keywords} />}
        <meta property='og:title' content={title} />
        <meta property='og:description' content={ogDescription} />
        <meta property='og:type' content={ogType} />
        <meta property='og:url' content={ogUrl} />
        <meta property='og:image' content={ogImage} />
        <meta property='og:site_name' content='Marketing Web' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@wwwmarketingweb' />
        <meta name='twitter:creator' content='@wwwmarketingweb' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={ogImage} />
        <meta name='twitter:image:alt' content={title} />
        {/* Canonical */}
        <link rel='canonical' href={ogUrl} />
        {/* Png Favicon / SVG */}
        <link rel='icon' type='image/png' href='/images/favicon.png' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        <meta name='bingbot' content='index, follow' />
        {schemaObject && (
          schemaObject.map((item, index) => (
            <script
              key={index}
              type='application/ld+json'
              dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
            />
          ))
        )}
      </Head>
      <header>
        <Menu
          theme={theme}
          setTheme={setTheme}
        />
      </header>
      <main>
        <section id='contact' data-theme='light' />
        {children}
      </main>
      {/* Lazy load WhatsApp button */}
      <div id='whatsapp-container' ref={whatsappRef} />
      {pageLoaded && <WhatsApp />}
      <Footer />
    </>
  )
}

const WhatsApp = dynamic(() => import('../buttons/WhatsApp'), {
  ssr: false
})

export default Layout
