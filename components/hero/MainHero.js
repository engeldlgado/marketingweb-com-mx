import { ChevronRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Calendly from '../buttons/Calendly'

export default function MainHero () {
  const videoRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, 3000)
  }, [])
  return (
    <div id='home' className='py-12 lg:py-20 lg:overflow-hidden'>

      <div className=' mx-auto max-w-[80%] lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='z-10 max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
            <div className='pt-20 pb-20 lg:pt-36 lg:pb-36'>
              <Link
                href='#work'
                className='inline-flex items-center p-1 pr-2 text-[0.5rem] text-white bg-black rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
                scroll={false}
              >
                <span className='px-3 py-0.5 dark:text-white text-white text-[0.6rem] md:text-xs font-semibold leading-5 uppercase tracking-wide dark:bg-primary bg-primary rounded-full'>
                  +32 Años de experiencia
                </span>
                <span className='ml-4 md:text-sm text-[0.6rem]'>Explora nuestros servicios</span>
                <ChevronRightIcon className='w-5 h-5 ml-2 text-gray-500' aria-hidden='true' />
              </Link>
              <p className='mt-4 text-4xl font-extrabold tracking-tight text-center text-white transition-colors duration-500 dark:text-white md:text-left sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                <span className='block'>Tu página en el</span>
                <span className='block text-primary dark:text-primary'> Primer Lugar</span>
              </p>
              <p className='mt-3 text-base text-center text-gray-100 md:text-left dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                En nuestra agencia de marketing digital, diseño web y SEO, creemos en el poder de la creatividad y la innovación para llevar a nuestros clientes al éxito en línea. Confía en nuestro equipo de expertos para diseñar estrategias efectivas y personalizadas para tu negocio.
              </p>
              <div className='flex flex-col items-center gap-6 mt-10 text-center duration-700 transform md:flex-row sm:mt-12 hover:scale-110'>
                {/* CTA for sales */}
                <span className='text-4xl tracking-tight text-white'>Desde <span className='text-4xl font-extrabold'>4.000$</span> <small className='font-normal'>MXN</small> al año</span>
                <Calendly text='Agenda una Cita' className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm -z-10 bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:px-10' />

              </div>
              <div className='min-h-fit' />
            </div>
          </div>

          <div className='mt-12 -mb-0 sm:-mb-0 lg:m-0 lg:mt-36 lg:relative'>
            <div className='max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <Image
                src='/images/hero.svg' className='z-0 hidden duration-500 transform md:flex hover:scale-105 ' alt='Agencia de Diseño Web y Marketing Digital' width={800} height={800}
                priority
                itemProp='image' itemScope itemType='https://schema.org/ImageObject'
              />

            </div>
          </div>
        </div>
      </div>
      {/* <div className='absolute top-0 w-full h-full bg-gradient-165 from-primary via-white to-white dark:from-primary dark:via-black dark:to-black -z-10'>
        <video
          autoPlay loop muted playsInline className='absolute top-0 right-0 transform lg:h-full -z-10 -scale-x-100 mix-blend-difference filter hue-rotate-0 dark:hue-rotate-0'
          poster='/videos/mw.jpg'
        >
          <source src='/videos/mw.mp4' type='video/mp4' />
        </video>
      </div> */}
      <div className='absolute top-0 w-full h-full overflow-hidden bg-gradient-165 from-secondary via-black to-black dark:from-primary dark:via-black dark:to-black -z-10'>
        <video
          ref={videoRef}
          loop muted className='absolute top-0 right-0 transform lg:h-full -z-10 mix-blend-multiply dark:right-0 -rotate-6 filter'
        >
          <source src='https://res.cloudinary.com/dxhsmq1pv/video/upload/v1681135207/marketingweb/video/search.mp4' type='video/mp4' />
        </video>

      </div>
      <div className='relative right-0 h-32 -mt-40 -z-10 bg-gradient-to-b from-black via-white to-white dark:from-black dark:to-black md:-mt-40 lg:mt-0' />
    </div>
  )
}
