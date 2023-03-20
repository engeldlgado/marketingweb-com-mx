
import { ChevronRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesHero ({ title, subtitle, image, subImage }) {
  return (
    <div className='relative pt-16'>
      <Image
        src={image}
        className='absolute inset-0 object-cover w-full h-full'
        alt={`${title} de Marketing Web`}
        width={1920}
        height={1080}
      />
      <div className='relative'>
        {/* Overlay gradient opacity */}
        <div className='absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.5)] via-[rgba(199,82,0,0.5)] dark:via-[rgba(13,71,161,0.5)] dark:from-[rgba(0,0,0,0.2)] ' />
        <svg
          className='absolute inset-x-0 text-white -bottom-1 dark:text-base-100'
          viewBox='0 0 1160 163'
        >
          <path
            fill='currentColor'
            d='M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z'
          />
        </svg>
        <div className='relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='flex flex-col items-center justify-between xl:flex-row'>
            <div className='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
              <Link
                href='/'
                className='inline-flex items-center p-1 pr-2 text-[0.5rem] text-white bg-black rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
              >
                <span className='px-3 py-0.5 dark:text-white text-white text-[0.6rem] md:text-xs font-semibold leading-5 uppercase tracking-wide dark:bg-primary bg-primary rounded-full'>
                  Inicio
                </span>
                <span className='ml-4 md:text-sm text-[0.6rem]'>{title}</span>
                <ChevronRightIcon className='w-5 h-5 ml-2 text-gray-500' aria-hidden='true' />
              </Link>
              <h2 className='mt-4 text-4xl font-extrabold tracking-tight text-center text-white transition-colors duration-500 drop-shadow-md dark:text-white md:text-left sm:mt-5 sm:text-5xl lg:mt-6 xl:text-5xl'>
                <span className='block'>{title}</span>
                {/* <span className='block text-primary dark:text-primary'> Marketing Digital</span> */}
              </h2>
              <p className='mt-3 text-base text-center text-gray-100 drop-shadow-md md:text-left dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                {subtitle}
              </p>
            </div>
            <div className='w-full max-w-xl xl:px-8 xl:w-5/6'>
              <Image src={subImage} alt={subtitle} width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
