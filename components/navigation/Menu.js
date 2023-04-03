/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react'
import {
  CheckCircleIcon,
  CursorClickIcon, MenuIcon, PhoneIcon,
  PlayIcon, SearchIcon, ShieldCheckIcon, ViewGridIcon,
  XIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import Calendly from '../buttons/Calendly'
import Logo from '../svg/Logo'

const solutions = [
  {
    name: 'Optimización SEO',
    description: '¿Quieres estar en los primeros resultados de búsqueda? Optimiza tu página con nosotros.',
    href: '/posicionamiento-web',
    icon: SearchIcon
  },
  {
    name: 'Diseño Web',
    description: 'Diseño web adaptado a tus objetivos de negocio para obtener los mejores resultados',
    href: '/diseno-web',
    icon: CursorClickIcon
  },
  {
    name: 'Marketing Digital',
    description: 'Lleva tu negocio al siguiente nivel con una estrategia de marketing digital efectiva.',
    href: '/marketing-digital',
    icon: ShieldCheckIcon
  },
  {
    name: 'Redes sociales',
    description: 'Haz que tus publicaciones sean atractivas y genera un mayor engagement con tus seguidores.',
    href: '#',
    icon: ViewGridIcon
  }
]
const callsToAction = [
  { name: 'Ver Presentación', href: '#', icon: PlayIcon },
  { name: 'Ver Todas las Soluciones', href: '#', icon: CheckCircleIcon },
  { name: 'Contacta con Ventas', href: '#', icon: PhoneIcon }
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

// change logo color on scroll in tailwind

export default function Menu ({ setTheme, theme }) {
  // change logo color on scroll in tailwind
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    if (window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setScroll(window.scrollY > 0) // change to 100
      })
    }
  }, [])
  return (
    <Popover className='bg-base-100 backdrop-filter backdrop-blur-md bg-opacity-20 z-[150] fixed w-full'>
      <div className='absolute inset-0 z-30 shadow pointer-events-none' aria-hidden='true' />
      <div className='relative z-20'>
        <div className='flex items-center justify-between px-4 py-5 mx-auto max-w-7xl sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10'>
          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center p-2 text-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Abrir menu</span>
              <MenuIcon className='w-6 h-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <div>
            <Link href='/' aria-label='hidden'><Logo
              className='w-20 md:w-24 drop-shadow-sm'
              primary={classNames(
                scroll ? 'fill-secondary dark:fill-white' : 'fill-white'
              )}
              secondary={classNames(
                scroll ? 'fill-teal-900 dark:fill-secondary' : 'fill-secondary'
              )}
                                               />
            </Link>
          </div>

          <div className='hidden md:flex-1 md:flex md:items-center md:justify-center'>
            <Popover.Group as='nav' className='flex space-x-10'>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-white',
                        'group rounded-md inline-flex items-center transition-all duration-300 text-white font-medium hover:text-white drop-shadow-[0px_0px_2px_rgba(0,0,0,1)] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,1)] focus:outline-none focus:ring-0  focus:underline focus:underline-offset-8 dark:focus:text-cyan-500 focus:text-white'
                      )}
                    >
                      <span>Servicios</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-white' : 'text-white',
                          'ml-2 h-5 w-5 group-hover:text-white group-hover:animate-pulse'
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 -translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 -translate-y-1'
                    >
                      <Popover.Panel className='absolute inset-x-0 z-30 hidden transform shadow-lg bg-gradient-to-b from-[rgba(255,255,255,0.5)] via-white to-white dark:from-transparent dark:via-base-100 dark:to-base-100 md:block top-full'>
                        <div className='grid px-4 py-6 mx-auto max-w-7xl gap-y-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16'>
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className='flex flex-col justify-between p-3 -m-3 transition-all duration-500 transform rounded-lg hover:shadow-md hover:bg-gray-50 hover:dark:bg-gray-900 hover:-skew-x-1 hover:-skew-y-1 '
                            >
                              <div className='flex md:h-full lg:flex-col'>
                                <div className='flex-shrink-0'>
                                  <span className='inline-flex items-center justify-center w-10 h-10 text-white rounded-md shadow-md sm:h-12 sm:w-12 bg-gradient-to-r dark:from-primary dark:to-indigo-400 from-secondary to-orange-300'>
                                    <item.icon className='w-6 h-6' aria-hidden='true' />
                                  </span>
                                </div>
                                <div className='ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4'>
                                  <div>
                                    <p className='text-base font-medium text-gray-900 dark:text-white'>{item.name}</p>
                                    <p className='mt-1 text-sm text-gray-500 dark:text-gray-200'>{item.description}</p>
                                  </div>
                                  <p className='mt-2 text-sm font-medium text-primary dark:text-white lg:mt-4'>
                                    Saber más <span aria-hidden='true'>&rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className='bg-white dark:bg-base-100'>
                          <div className='px-4 py-5 mx-auto space-y-6 max-w-7xl sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8'>
                            {callsToAction.map((item) => (
                              <div key={item.name} className='flow-root'>
                                <a
                                  href={item.href}
                                  className='flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-300 rounded-md hover:text-white dark:text-white hover:bg-primary group-hover:text-white'
                                >
                                  <item.icon className='flex-shrink-0 w-6 h-6 text-gray-400 hover:text-white dark:text-white' aria-hidden='true' />
                                  <span className='ml-3'>{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {/* <a href='#' className='text-base transition-all drop-shadow-[0px_0px_2px_rgba(0,0,0,1)] duration-300 text-white font-medium hover:text-white hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,1)] focus:outline-none focus:ring-0  focus:underline focus:underline-offset-8 dark:focus:text-cyan-500 focus:text-white'>
                Precios
              </a> */}
              <Link href='/blog' className='text-base transition-all drop-shadow-[0px_0px_2px_rgba(0,0,0,1)] duration-300 text-white font-medium hover:text-white hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,1)] focus:outline-none focus:ring-0  focus:underline focus:underline-offset-8 dark:focus:text-cyan-500 focus:text-white'>
                Nuestro Blog
              </Link>
              <a href='#' className='text-base transition-all drop-shadow-[0px_0px_2px_rgba(0,0,0,1)] duration-300 text-white font-medium hover:text-white hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,1)] focus:outline-none focus:ring-0  focus:underline focus:underline-offset-8 dark:focus:text-cyan-500 focus:text-white'>
                Contacto
              </a>

            </Popover.Group>

          </div>
          <div className='flex items-center md:ml-12'>

            <Calendly
              text='Agenda una Cita'
              className='items-center justify-center hidden px-4 py-2 ml-8 text-base font-medium text-white transition-all duration-300 border border-transparent rounded-md shadow-sm bg-primary hover:bg-orange-600 md:inline-flex dark:hover:bg-blue-600'
            />
            <label
              className='ml-5 swap swap-rotate'
              aria-label='hidden'
            >

              <input
                type='checkbox'
                name='dark-mode'
                id='dark-mode'
                className='dark-mode'
                onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                checked={theme === 'dark'}
              />

              <svg className='w-8 h-8 fill-white swap-on drop-shadow-[0px_0px_2px_rgba(0,0,0,1)]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' /></svg>

              <svg className='w-8 h-8 fill-white swap-off drop-shadow-[0px_0px_2px_rgba(0,0,0,1)]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' /></svg>

            </label>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 z-[150] p-2 transition origin-top-right transform md:hidden'
        >
          <div className='bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50'>
            <div className='px-5 pt-5 pb-6 sm:pb-8'>
              <div className='flex items-center justify-between'>
                <div>
                  <Logo className='w-auto h-12' primary='fill-secondary dark:fill-secondary' secondary='fill-teal-900' />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Cerrar menu</span>
                    <XIcon className='w-6 h-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6 sm:mt-8'>
                <nav>
                  <div className='grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4'>
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50'
                      >
                        <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary sm:h-12 sm:w-12'>
                          <item.icon className='w-6 h-6' aria-hidden='true' />
                        </div>
                        <div className='ml-4 text-base font-medium text-gray-900'>{item.name}</div>
                      </a>
                    ))}
                  </div>

                </nav>
              </div>
            </div>
            <div className='px-5 py-6'>
              <div className='grid grid-cols-2 gap-4'>
                <a href='#' className='text-base font-medium text-gray-900 rounded-md hover:text-gray-700'>
                  Precios
                </a>

                <a href='#' className='text-base font-medium text-gray-900 rounded-md hover:text-gray-700'>
                  Utilidades
                </a>

                <a href='#' className='text-base font-medium text-gray-900 rounded-md hover:text-gray-700'>
                  Blog
                </a>

                <a href='#' className='text-base font-medium text-gray-900 rounded-md hover:text-gray-700'>
                  Contacto
                </a>

              </div>
              <div className='mt-6'>

                <Calendly
                  text='Agenda una Cita'
                  className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary'
                />

              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
