import {
  CodeIcon, DesktopComputerIcon, FastForwardIcon, GlobeIcon, RefreshIcon, SupportIcon
} from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../svg/Logo'
// import MainBlog from '../blog/MainBlog'
import dynamic from 'next/dynamic'
// import FeatureCard from '../cards/FeatureCard'
import { useEffect, useState } from 'react'
import FlowerLogo from '../svg/LogoFlowers'

const features = [
  {
    name: 'Diseño web personalizado',
    description: 'Nuestro equipo de diseñadores web creará un sitio web personalizado y atractivo para tu negocio. Adaptamos cada diseño a las necesidades específicas de tu marca.',
    icon: GlobeIcon
  },
  {
    name: 'Diseño responsivo',
    description: 'Nos aseguramos de que tu sitio web se adapte a diferentes dispositivos y tamaños de pantalla, para garantizar una experiencia óptima para el usuario.',
    icon: DesktopComputerIcon
  },
  {
    name: 'SEO Efectivo',
    description: 'Implementamos técnicas de SEO probadas y efectivas para mejorar el posicionamiento de tu sitio web en los motores de búsqueda y atraer tráfico orgánico.',
    icon: FastForwardIcon
  },
  {
    name: 'Gestión de Redes Sociales',
    description: 'Creamos y gestionamos perfiles en redes sociales para aumentar la visibilidad de tu marca y atraer a nuevos clientes.',
    icon: RefreshIcon
  },
  {
    name: 'Contenido de Calidad',
    description: 'Creamos contenido de calidad y relevante para tu sitio web y redes sociales, para atraer a tu audiencia y aumentar el engagement.',
    icon: SupportIcon
  },
  {
    name: 'Análisis y Optimización',
    description: 'Analizamos y optimizamos tu sitio web para mejorar la experiencia del usuario y aumentar la tasa de conversión de tu sitio web.',
    icon: CodeIcon
  }
]

export default function MidSection ({ posts }) {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>

      {/* Feature section with grid */}
      <div id='ventas' className='relative py-16 -mt-24 bg-white dark:bg-base-100 sm:pt-10 lg:pt-14 dark:bg-gradient-to-b dark:from-black dark:to-base-100'>
        <p className='max-w-[90%] md:max-w-[30%] mx-auto text-sm  text-center  font-semibold tracking-wider uppercase dark:text-white text-primary'>Soluciones Innovadoras</p>
        <h1 className='max-w-[90%] md:max-w-[30%] mx-auto text-2xl font-extrabold tracking-tight text-center text-gray-900 dark:text-primary sm:text-3xl'>Marketing Web Agencia de Posicionamiento Web y SEO para el Marketing Digital</h1>
        <div className='md:pt-10 lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>

          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            <div className='pt-6'>
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Llega a los primeros lugares</p>
              <h2 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Incrementa tus ventas
              </h2>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  En <b>Marketing Web</b>, estamos orgullosos de ofrecer amplias técnicas de servicio de <b>SEO</b> que brindan a nuestros clientes las herramientas necesarias para mejorar el <b>posicionamiento web</b> de sus sitios web en Google. Un ejemplo de esto es el caso de un vendedor de productos de floristería en la Ciudad de México que quería mejorar sus métricas de búsqueda. Con nuestra ayuda, lograron convertirse en el vendedor de flores mejor clasificado en su región. Nuestras prácticas de <b>SEO</b> tuvieron un papel importante en impulsar su sitio web al primer puesto de los resultados de búsqueda.
                </p>

              </div>
            </div>

          </div>
          <div className='relative order-first py-16 lg:py-0 '>

            <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
              {/* Testimonial card */}
              <div className='relative pt-64 pb-10 overflow-hidden duration-500 transform shadow-xl rounded-2xl hover:scale-105'>
                <Image
                  className='absolute inset-0 object-cover w-full h-full'
                  src='/images/posicionamiento-seo.jpg'
                  alt='Posicionamiento en Google'
                  width={768}
                  height={768}
                />
                {/* <div className='absolute inset-0 bg-primary mix-blend-multiply' /> */}
                <div className='absolute inset-0 opacity-80 bg-gradient-to-t from-primary to-transparent' />
                {/* <div className='absolute inset-0 opacity-30 bg-gradient-to-t from-primary to-accent' /> */}
                <div className='relative px-8'>
                  <div>

                    <FlowerLogo className='h-20' />
                  </div>
                  <blockquote className='mt-8'>
                    <div className='relative text-lg font-medium text-white md:flex-grow'>
                      <svg
                        className='absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-primary'
                        fill='currentColor'
                        viewBox='0 0 32 32'
                        aria-hidden='true'
                      >
                        <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                      </svg>
                      <p className='relative'>
                        <strong>Marketing Web</strong> me ayudó a posicionar mi florería en el primer lugar de búsqueda en mi área. Su experiencia en <strong>Posicionamiento Web y SEO</strong> y enfoque personalizado tuvo un impacto significativo en mi negocio. ¡Los recomiendo altamente!
                      </p>
                    </div>

                    <footer className='mt-4'>
                      <p className='text-base font-semibold text-indigo-200'>Diego Alcantara, CEO de Florerias CDMX</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='social' className='relative bg-white dark:bg-base-100'>
        <div className=' lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>

          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            <div className='pt-6'>
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Destaca entre la competencia con un</p>
              <h2 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Diseño web impactante
              </h2>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Nuestro equipo de expertos en diseño web y <strong>Posicionamiento Web SEO</strong> puede ayudar a crear un sitio web atractivo y fácil de usar que esté optimizado para los motores de búsqueda. Mejore su presencia en línea y aumente sus ventas con nuestro diseño web personalizado.
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
                  src='/images/diseno-web.jpg'
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
                        Diseños Únicos y Personalizados
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
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Código de calidad</p>
              <h2 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Aplicaciones Empresariales
              </h2>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Optimizamos sus aplicaciones empresariales y mejoramos el rendimiento del código para maximizar la eficiencia y la productividad de su negocio. Aproveche al máximo sus aplicaciones y aumente su visibilidad en línea con <strong>Marketing Web</strong>.
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
                  src='/images/aplicaciones-empresariales.jpg'
                  alt='Aplicaciones Empresariales'
                  width={1152}
                  height={768}
                />
                {/* <div className='absolute inset-0 bg-primary mix-blend-multiply' /> */}
                <div className='absolute inset-0 opacity-80 bg-gradient-to-t from-primary to-transparent' />
                <div className='absolute px-8 bottom-10'>

                  <blockquote className='h-full mt-8'>

                    <footer className='mt-4 text-lg font-medium text-white md:flex-grow'>
                      <p className=' drop-shadow-sm'>
                        Aplicaciones Empresariales a la medida
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='code' className='relative bg-white dark:bg-base-100 sm:pt-10 lg:pt-6'>
        <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
          <h2 className='text-base font-semibold tracking-wider uppercase dark:text-white text-primary'>Servicios Garantizado</h2>
          <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
            Soluciones Inmediatas
          </p>
          <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            En <strong>Marketing Web</strong>, solucionamos tus problemas de código empresarial y te ayudamos a destacar en línea con nuestros servicios de <strong>marketing digital</strong>. Agenda una cita ahora con nuestros expertos.
          </p>

          <div className='mt-12'>
            <Image className='rounded-lg shadow-lg' src='/images/codigo.jpg' alt='Estrategias de SEO para el éxito del marketing web' width='1920' height='980' />
            <div className='absolute bottom-0 left-0 z-50 w-full h-72 bg-gradient-to-t from-white via-transparent to-transparent dark:from-base-100' />
          </div>
        </div>
      </div>

      <div id='work' className='relative bg-white dark:bg-base-100 sm:pt-10 lg:pt-24'>
        <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
          <h2 className='text-base font-semibold tracking-wider uppercase dark:text-white text-primary'>Servicios de Marketing Digital para tu Negocio</h2>
          <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
            Destaca en línea con nuestras soluciones personalizadas.
          </p>
          <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            En nuestra agencia de <strong>marketing digital</strong>, nos especializamos en el <strong>diseño web</strong>, <strong>SEO</strong> y gestión de redes sociales. Creamos estrategias innovadoras y efectivas para ayudar a tu negocio a sobresalir en línea y atraer más clientes potenciales.
          </p>

          <div className='mt-12'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {pageLoaded && features.map((feature) => {
                const DynamicFeatures = dynamic(() => import('../cards/FeatureCard'), {
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
            En nuestra agencia de <strong>marketing digital</strong>, te ofrecemos soluciones personalizadas para mejorar la presencia en línea de tu negocio. Contáctanos para obtener más información sobre cómo podemos ayudarte a alcanzar tus objetivos de <strong>marketing digital</strong>.
          </p>
        </div>
      </div>

      {/* Testimonial section */}
      <div className='py-16 pb-12 bg-white dark:bg-base-100 lg:pt-6'>
        <div className='relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pb-12'>
          <div className='relative px-8 py-24 overflow-hidden shadow-2xl bg-primary dark:bg-primary rounded-xl lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8'>
            <div className='absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply'>
              <Image
                className='object-cover lg:h-full lg:w-full'
                src='/images/marketing-digital-seo.jpg'
                alt='Agencia de Marketing Digital expertos en SEO'
                fill
              />
            </div>
            <div className='relative lg:col-span-1'>
              <Logo className='w-auto h-12 fill-white' />
              <blockquote className='mt-6 text-white'>
                <p className='text-xl font-medium sm:text-2xl'>
                  El marketing digital y el SEO son las claves para desbloquear el potencial de tu negocio en línea, mientras que el diseño web cautiva a tus clientes potenciales.
                </p>
                <footer className='mt-6'>
                  <p className='flex flex-col font-medium'>
                    <span>Armando Desentis</span>
                    <sp className='text-sm'>SEO Marketing Expert</sp>
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* TODO:Blog section */}
      <div className='relative py-16 bg-white dark:bg-base-100 sm:py-24 lg:py-24'>
        <div className='relative'>
          <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
            <h3 className='text-base font-semibold tracking-wider uppercase dark:text-primary text-secondary'>Aprende Cada día más</h3>
            <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
              Recursos Útiles
            </p>
            <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
              Descubre las mejores técnicas de marketing digital, SEO y diseño web en nuestro blog y maximiza tu presencia en línea para atraer más clientes potenciales.
            </p>
          </div>
          {/* Dynamic load the post component */}
          {pageLoaded && (function Load () {
            const DynamicBlogPost = dynamic(() => import('../blog/MainBlog'), {
              loading: () => <p>Loading...</p>,
              ssr: false
            })
            return (
              <DynamicBlogPost posts={posts} postLength={3} />
            )
          }())}

        </div>

        <div className='flex justify-center mt-12'>
          <Link href='/blog' className='inline-flex items-center px-6 py-2 text-base font-medium text-white transition-colors duration-500 border border-transparent rounded-md shadow-sm bg-secondary hover:bg-orange-400 dark:bg-primary dark:hover:bg-indigo-800'>
            Ver más
          </Link>
        </div>
      </div>

    </>
  )
}
