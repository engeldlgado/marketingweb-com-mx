import { ReplyIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from '../components/svg/Logo'

const Custom404 = () => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme')
      if (theme) {
        setTheme(theme)
      } else {
        localStorage.setItem('theme', 'light')
        setTheme('light')
      }
    }
  }, [])

  useEffect(() => {
    if (theme !== '' && typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', theme)
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme', theme)
      } else {
        document.documentElement.setAttribute('data-theme', theme)
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', theme)
      }
    }
  }, [theme])
  return (
    <>
      <Head>
        <title>404 - Página no encontrada</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='La página que estás buscando no existe.' />
        <meta property='og:title' content='404 - Página no encontrada' />
        <meta property='og:description' content='La página que estás buscando no existe.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://marketingweb.com.mx/404' />
        <meta property='og:image' content='/images/logo.jpg' />
        <meta property='og:site_name' content='Marketing Web' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@wwwmarketingweb' />
        <meta name='twitter:creator' content='@wwwmarketingweb' />
        <meta name='twitter:title' content='404 - Página no encontrada' />
        <meta name='twitter:description' content='La página que estás buscando no existe.' />
        <meta name='twitter:image' content='/images/logo.jpg' />
        <meta name='twitter:image:alt' content='404 - Página no encontrada' />
        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />
        {/* Google Fonts */}
      </Head>
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <main className='flex flex-col items-center justify-center w-5/6 text-center max-w-'>
          <Logo className='w-44' primary='fill-secondary dark:fill-secondary' secondary='fill-teal-900' />
          <h1 className='text-4xl font-bold md:text-6xl'>
            404 - Página no encontrada
          </h1>
          <p className='mt-3 text-2xl'>
            La página que estás buscando no existe.
          </p>
          {/* Check our blog post */}
          <div className='flex flex-col items-center justify-center w-full mt-12'>
            <Link href='/'>
              <h2 className='text-2xl font-bold transition-all duration-500 text-primary dark:text-primary hover:text-orange-700 dark:hover:text-indigo-700'>
                <ReplyIcon className='inline-block w-6 h-6 mr-2 -mt-3' />Volver al Inicio
              </h2>
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}

export default Custom404
