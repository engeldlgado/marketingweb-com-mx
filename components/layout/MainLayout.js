import { useStore } from '@/Context/Store'
import Head from 'next/head'
// import Navigation from '../navigation/Navigation'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import WhatsApp from '../buttons/WhatsApp'
import Menu from '../navigation/Menu'
import { Footer } from '../sections/Footer'

const Layout = ({ children, title, description, ogType, ogUrl, ogImage, ogDescription, schemaObject }) => {
  const { theme, setTheme } = useStore()
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={description} />
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
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-2L6KQG84QD'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', 'G-2L6KQG84QD');
        `}
      </Script>
      <Menu
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        <section id='contact' data-theme='light' />
        {children}
      </main>
      {/* Dynamic import whatsapp and render it */}
      {pageLoaded && <WhatsApp />}

      <Footer />
    </>
  )
}

export default Layout
