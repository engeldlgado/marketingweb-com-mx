import CohereLogo from '../svg/CohereLogo'
import MongoLogo from '../svg/MongoLogo'
import NextLogo from '../svg/NextLogo'
import ReactLogo from '../svg/ReactLogo'
import Vercel from '../svg/Vercel'

export const LogoSection = () => {
  return (
    <div id='tech' className='bg-white dark:bg-base-100'>
      <div className='px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='max-w-md px-4 pb-8 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
          <p className='text-base font-semibold tracking-wider uppercase dark:text-primary text-secondary'>Tecnologías de Vanguardia</p>
          <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
            Innovación y Tecnología en el Marketing Digital
          </p>
          <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            Potenciando la innovación a través de soluciones tecnológicas de vanguardia.
          </p>
        </div>
        <div className='grid grid-cols-2 gap-8 mt-10 md:grid-cols-6 lg:grid-cols-5'>
          <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-1'>
            <NextLogo className='h-12 w-36 dark:fill-gray-400 fill-cyan-800' />
          </div>
          <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-1'>
            <MongoLogo className='h-12 w-36 dark:fill-gray-400 fill-cyan-800' />
          </div>
          <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-1'>
            <CohereLogo className='h-12 w-36 dark:fill-gray-400 fill-cyan-800' />
          </div>
          <div className='flex justify-center col-span-1 md:col-span-3 lg:col-span-1'>
            <ReactLogo className='h-12 w-36 dark:fill-gray-400 fill-cyan-400' />
          </div>
          <div className='flex justify-center col-span-2 md:col-span-3 lg:col-span-1'>
            <Vercel className='h-12 w-36 dark:fill-gray-400 fill-cyan-800' />
          </div>
        </div>
      </div>
    </div>
  )
}
