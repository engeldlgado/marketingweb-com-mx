import ServicesHero from '@/components/hero/ServicesHero'
import Layout from '@/components/layout/MainLayout'
import Pricing from '@/components/sections/Pricing'
import {
  CodeIcon, DesktopComputerIcon, FastForwardIcon, GlobeIcon, RefreshIcon, SupportIcon
} from '@heroicons/react/outline'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const features = [
  {
    name: 'Optimización de Motores de Búsqueda',
    description: 'Nuestro equipo de expertos en SEO implementa estrategias personalizadas para mejorar la visibilidad de tu sitio web en los motores de búsqueda y atraer tráfico orgánico de calidad.',
    icon: GlobeIcon
  },
  {
    name: 'Diseño Responsivo',
    description: 'Nos aseguramos de que tu sitio web se adapte a todos los dispositivos y tamaños de pantalla para mejorar la experiencia del usuario y aumentar la tasa de conversión.',
    icon: DesktopComputerIcon
  },
  {
    name: 'Optimización de Conversión',
    description: 'Nuestro equipo de expertos en CRO analiza y optimiza tu sitio web para mejorar la experiencia del usuario y aumentar la tasa de conversión de tu sitio web.',
    icon: FastForwardIcon
  },
  {
    name: 'Gestión de Redes Sociales',
    description: 'Creamos y gestionamos perfiles en redes sociales para aumentar la visibilidad de tu marca y atraer a nuevos clientes.',
    icon: RefreshIcon
  },
  {
    name: 'Producción de Contenido Relevante',
    description: 'Creamos contenido de calidad y relevante para tu sitio web y redes sociales, para atraer a tu audiencia y aumentar el engagement.',
    icon: SupportIcon
  },
  {
    name: 'Análisis de Datos y Reportes',
    description: 'Analizamos y reportamos regularmente el rendimiento de tu sitio web y redes sociales para hacer ajustes y mejoras continuas.',
    icon: CodeIcon
  }
]

const PosicionamientoWeb = () => {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Layout
      title='Agencia de Posicionamiento Web y SEO para el Marketing Web Digital'
      description='Mejora tu posicionamiento en línea con nuestros servicios de SEO y optimización de sitios web. Agencia Marketing Web y digital. SEO Google.'
      canonical='https://marketingweb.com.mx/posicionamiento-web'
    >
      <ServicesHero
        title='Posicionamiento Web'
        subtitle='Mejora tu posicionamiento en línea con nuestros servicios de SEO y optimización de sitios web. Agencia Marketing Web y digital. SEO Google.'
        image='/images/posicionamiento-web.jpg'
        subImage='/images/grafico-seo.png'
      />

      <div id='social' className='relative bg-white dark:bg-base-100'>
        <div className=' lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>

          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            <div className='pt-6'>
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Incrementa tus ventas</p>
              <h2 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Optimización en buscadores
              </h2>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Con una buena optimización en buscadores usted podrá llegar a todos esos clientes potenciales que están en búsqueda de sus productos.
                </p>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Además, al lograr un buen posicionamiento natural sus ventas incrementaran en un 200%. Esto se debe a que los usuarios que buscan en Google, Bing o Yahoo, son personas que están interesadas en sus productos o servicios.
                </p>

              </div>
            </div>

          </div>
          <div className='relative order-first py-16 md:order-last lg:py-0 '>

            <div className='relative max-w-md px-4 pb-20 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none'>
              {/* Testimonial card */}
              <div className='relative pt-64 pb-10 overflow-hidden duration-500 transform shadow-xl rounded-2xl hover:scale-105 min-h-[550px]'>
                <Image
                  className='absolute inset-0 object-cover w-full h-full'
                  src='/images/posicionamiento-web-2.jpg'
                  alt='Diseño Web Personalizado y Único'
                  width={1152}
                  height={768}
                />
                {/* <div className='absolute inset-0 bg-primary mix-blend-multiply' /> */}
                <div className='absolute inset-0 opacity-80 bg-gradient-to-t from-primary to-transparent' />
                <div className='absolute px-8 bottom-10'>

                  <blockquote className='h-full mt-8'>

                    <footer className='mt-4 text-lg font-medium text-white md:flex-grow'>
                      <p className=' drop-shadow-sm'>
                        Haz que tu flujos de ventas aumenten con una buena estrategia de posicionamiento web y SEO en buscadores como Google, Bing y Yahoo para que tus clientes potenciales te encuentren.
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='coding' className='relative bg-white dark:bg-base-100'>
        <div className=' lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>

          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            <div className='pt-6'>
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Posicionamiento Web y SEO</p>
              <h2 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Optimización de Aplicaciones Empresariales
              </h2>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  En Marketing Web, optimizamos sus aplicaciones empresariales y mejoramos el rendimiento del código para maximizar la eficiencia y la productividad de su negocio. Además, nos aseguramos de que su sitio web tenga una estructura optimizada para el SEO y que su contenido esté optimizado para los motores de búsqueda. De esta manera, aumentará la visibilidad en línea de su empresa y atraerá a más clientes potenciales.
                </p>

              </div>
            </div>

          </div>
          <div className='relative order-first py-16 md:order-first lg:py-16 '>

            <div className='relative max-w-md px-4 pb-20 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none'>
              {/* Testimonial card */}
              <div className='relative pt-64 pb-10 overflow-hidden duration-500 transform shadow-xl rounded-2xl hover:scale-105 min-h-[550px]'>
                <Image
                  className='absolute inset-0 object-cover w-full h-full'
                  src='/images/posicionate-en-google.jpg'
                  alt='Posicionamiento Web y SEO'
                  width={1152}
                  height={768}
                />
                {/* <div className='absolute inset-0 bg-primary mix-blend-multiply' /> */}
                <div className='absolute inset-0 opacity-80 bg-gradient-to-t from-primary to-transparent' />
                <div className='absolute px-8 bottom-10'>

                  <blockquote className='h-full mt-8'>

                    <footer className='mt-4 text-lg font-medium text-white md:flex-grow'>
                      <p className=' drop-shadow-sm'>
                        Mejoramos el rendimiento de su código y optimizamos sus aplicaciones empresariales para que su negocio sea más eficiente y productivo.
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='work' className='relative bg-white dark:bg-base-100 sm:pt-10 lg:pt-24'>
        <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
          <h2 className='text-base font-semibold tracking-wider uppercase dark:text-white text-primary'>Servicios de Posicionamiento Web y SEO para tu Negocio</h2>
          <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
            Atrae más clientes con nuestras soluciones personalizadas.
          </p>
          <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            En nuestra agencia de posicionamiento web y SEO, nos especializamos en mejorar el rendimiento y la visibilidad de tu sitio web en los motores de búsqueda. Implementamos técnicas de SEO efectivas para atraer tráfico orgánico y aumentar la tasa de conversión de tu sitio web.
          </p>

          <div className='mt-12'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {pageLoaded && features.map((feature) => {
                const DynamicFeatures = dynamic(() => import('@/components/cards/FeatureCard'), {
                  loading: () => <p>Loading...</p>,
                  ssr: false
                })
                return (
                  <DynamicFeatures
                    key={feature.name}
                    feature={feature}
                  />
                )
              })}
            </div>
          </div>

          <p className='py-16 mx-auto text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            Además, ofrecemos servicios de gestión de redes sociales para mejorar tu presencia en línea y atraer a más clientes potenciales. Contáctanos hoy y mejora el posicionamiento de tu negocio en línea.
          </p>
        </div>
      </div>
      <Pricing />
    </Layout>
  )
}

export default PosicionamientoWeb
