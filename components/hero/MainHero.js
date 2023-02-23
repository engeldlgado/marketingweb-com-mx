import { ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function MainHero () {
  return (
    <div id='home' className='lg:pb-14 lg:overflow-hidden'>

      <div className='z-10 mx-auto max-w-7xl lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
            <div className='pt-32 lg:pt-56 lg:pb-24'>
              <Link
                href='#work'
                className='inline-flex items-center p-1 pr-2 text-white bg-black rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
                scroll={false}
              >
                <span className='px-3 py-0.5 dark:text-white text-black text-xs font-semibold leading-5 uppercase tracking-wide dark:bg-primary bg-secondary rounded-full'>
                  +10 Años de experiencia
                </span>
                <span className='ml-4 text-sm'>Explora mi trabajo</span>
                <ChevronRightIcon className='w-5 h-5 ml-2 text-gray-500' aria-hidden='true' />
              </Link>
              <h2 className='mt-4 text-4xl font-extrabold tracking-tight transition-colors duration-500 dark:text-white text-neutral sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                <span className='block'>Soluciones de</span>
                <span className='block text-secondary dark:text-primary'>desarrollo web y marketing</span>
              </h2>
              <p className='mt-3 text-base dark:text-gray-300 text-neutral sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                Mi experiencia en diseño web y marketing te ayudará a destacar en el mercado y atraer a más clientes potenciales. ¡Echa un vistazo a mi trabajo y contáctame para saber más sobre cómo puedo ayudarte!
              </p>
              <div className='mt-10 sm:mt-12'>
                <p className='mt-3 text-sm dark:text-gray-300 text-neutral sm:mt-4'>
                  ¡Déjame ayudarte a mejorar tu presencia en línea con mi enfoque innovador y llamativo en diseño web y marketing! No dudes en ponerte en contacto conmigo a través de <a href='#' className='font-medium dark:text-white'>mi correo electrónico</a> para obtener más información sobre cómo puedo ayudarte a alcanzar tus metas.
                </p>
              </div>
              <div className='min-h-fit' />
            </div>
          </div>

          <div className='z-0 mt-12 -mb-0 sm:-mb-0 lg:m-0 lg:mt-16 lg:relative'>
            <div className='max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}

            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-0 w-full h-full bg-gradient-to-br from-secondary via-white to-white dark:from-primary dark:via-black dark:to-black -z-10'>
        <video autoPlay loop muted playsInline className='absolute top-0 right-0 transform lg:h-full -z-10 -scale-x-100 mix-blend-difference filter hue-rotate-0 dark:hue-rotate-0'>
          <source src='/videos/mw.mp4' type='video/mp4' />
        </video>
      </div>
    </div>
  )
}
