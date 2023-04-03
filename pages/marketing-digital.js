import ServicesHero from '@/components/hero/ServicesHero'
import Layout from '@/components/layout/MainLayout'
import Pricing from '@/components/sections/Pricing'
import {
  ChartBarIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  MailIcon,
  SearchIcon,
  SupportIcon
} from '@heroicons/react/outline'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const features = [
  {
    name: 'Publicidad en redes sociales',
    description: 'Creamos estrategias de publicidad efectivas en redes sociales para llegar a tu audiencia objetivo y aumentar tu alcance.',
    icon: GlobeAltIcon
  },
  {
    name: 'Optimización de motores de búsqueda',
    description: 'Analizamos y optimizamos tu sitio web y contenido para mejorar tu posicionamiento en los resultados de búsqueda y aumentar el tráfico orgánico.',
    icon: SearchIcon
  },
  {
    name: 'Diseño de campañas de email marketing',
    description: 'Diseñamos campañas de email marketing atractivas y efectivas para fidelizar a tus clientes y aumentar tus conversiones.',
    icon: MailIcon
  },
  {
    name: 'Creación de contenido de calidad',
    description: 'Creamos contenido de calidad y relevante para tu sitio web y redes sociales para atraer a tu audiencia y mejorar tu presencia en línea.',
    icon: DocumentTextIcon
  },
  {
    name: 'Análisis de datos y estadísticas',
    description: 'Realizamos un análisis detallado de los datos y estadísticas de tus campañas de marketing digital para medir su efectividad y hacer ajustes necesarios.',
    icon: ChartBarIcon
  },
  {
    name: 'Mantenimiento y soporte',
    description: 'Proporcionamos mantenimiento y soporte continuo para garantizar que tus campañas de marketing digital funcionen sin problemas y estén actualizadas.',
    icon: SupportIcon
  }
]

const tiers = [
  { name: 'Básico', href: '#', priceMonthly: 2000, description: 'Plan básico con servicios de marketing digital esenciales.' },
  {
    name: 'Esencial',
    href: '#',
    priceMonthly: 4100,
    description: 'Plan avanzado con servicios de marketing digital más completos y funcionalidades adicionales.'
  },
  {
    name: 'Premium',
    href: '#',
    priceMonthly: 8600,
    description: 'Plan personalizado con servicios de marketing digital avanzados y funcionalidades especiales.'
  }
]

const sections = [
  {
    name: 'Características',
    features: [
      { name: 'Optimización para SEO y diseño web responsivo.', tiers: { Básico: true, Esencial: true, Premium: true } },
      { name: 'Generación de contenido para redes sociales y blogs.', tiers: { Esencial: true, Premium: true } },
      { name: 'Auditorías y mejoras en el rendimiento del sitio web.', tiers: { Esencial: true, Premium: true } },
      { name: 'Análisis y seguimiento del rendimiento del sitio web.', tiers: { Esencial: true, Premium: true } }
    ]
  },
  {
    name: 'Funcionalidades adicionales',
    features: [
      { name: 'Campañas publicitarias en redes sociales.', tiers: { Esencial: true, Premium: true } },
      { name: 'Automatización de correo electrónico y chatbot.', tiers: { Esencial: true, Premium: true } },
      { name: 'Configuración de Google Analytics y Google Tag Manager.', tiers: { Esencial: true, Premium: true } },
      { name: 'Publicidad en motores de búsqueda (SEM).', tiers: { Premium: true } },
      { name: 'Diseño y desarrollo de aplicaciones móviles.', tiers: { Premium: true } }
    ]
  },
  {
    name: 'Soporte',
    features: [
      { name: 'Soporte técnico especializado en marketing digital.', tiers: { Básico: true, Esencial: true, Premium: true } },
      { name: 'Asesoramiento en la implementación de funcionalidades adicionales.', tiers: { Esencial: true, Premium: true } },
      { name: 'Soporte y monitoreo continuo del sitio web y redes sociales.', tiers: { Esencial: true, Premium: true } },
      { name: 'Soporte telefónico y por correo electrónico.', tiers: { Premium: true } }
    ]
  }
]

const faqs = [
  {
    id: 1,
    question: '¿Por qué es importante tener una estrategia de marketing digital?',
    answer: 'Permite alcanzar a tu audiencia en línea, mejorar la visibilidad de tu marca y aumentar el tráfico a tu sitio web. Además, ayuda a comprender a tu público objetivo y adaptar tu mensaje de marketing.'
  },
  {
    id: 2,
    question: '¿Cómo puedo mejorar mi estrategia de marketing digital?',
    answer: 'Puedes utilizar técnicas como la segmentación de audiencia, la creación de contenido relevante y valioso, la optimización para motores de búsqueda y la integración de redes sociales y herramientas de análisis y seguimiento.'
  },
  {
    id: 3,
    question: '¿Qué son las herramientas adicionales en una estrategia de marketing digital?',
    answer: 'Incluyen publicidad en línea, correo electrónico marketing, marketing de contenidos y optimización para la conversión. Ayudan a llegar a tu público objetivo y a convertir a los visitantes en clientes potenciales.'
  },
  {
    id: 4,
    question: '¿Qué es la segmentación de audiencia?',
    answer: 'Consiste en dividir a tu audiencia en grupos más pequeños y específicos en función de sus características, intereses y comportamientos. Esto permite crear contenido y mensajes de marketing más relevantes y aumentar la efectividad de tus campañas de marketing digital.'
  },
  {
    id: 5,
    question: '¿Por qué es importante la optimización para motores de búsqueda en una estrategia de marketing digital?',
    answer: 'Ayuda a que tu sitio web sea más visible en los resultados de búsqueda, aumenta el tráfico a tu sitio web y mejora la visibilidad de tu marca en línea. Además, mejora la calidad del contenido de tu sitio web y aumenta la relevancia de tus mensajes de marketing para tu público objetivo.'
  },
  {
    id: 6,
    question: '¿Cómo puedo asegurarme de que mi estrategia de marketing digital sea efectiva para todas las personas?',
    answer: 'Debes seguir pautas de accesibilidad web, proporcionar alternativas de texto para las imágenes, asegurarte de que tu sitio web sea navegable por teclado y mantener un contraste adecuado entre el texto y el fondo. Además, tu contenido debe ser relevante y valioso para todas las personas en tu público objetivo, independientemente de su edad, género o habilidades en línea.'
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
      title='Servicios de Marketing Digital para Mejorar tu Presencia en Línea'
      description='Mejora tu presencia en línea con nuestros servicios de marketing digital. Agencia especializada en diseño y estrategias digitales. Diseño web profesional y mucho más.'
      canonical='https://marketingweb.com.mx/marketing-digital'
    >
      <ServicesHero
        title='Estrategias de Marketing Digital'
        subtitle='Mejora tu presencia en línea con nuestros servicios de marketing digital. Agencia especializada en diseño y estrategias digitales. Diseño web profesional y mucho más.'
        image='/images/invertir-en-marketing-digital.jpg'
        subImage='/images/marketing-estrategico.png'
      />

      <div id='social' className='relative bg-white dark:bg-base-100'>
        <div className=' lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>

          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            <div className='pt-6'>
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Estrategias de Marketing Digital para Impulsar tu Negocio</p>
              <h2 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Servicios de Marketing Digital
              </h2>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Ofrecemos soluciones de marketing digital adaptadas a las necesidades y objetivos de cada cliente. Nuestros servicios incluyen estrategias de SEO, publicidad en redes sociales, email marketing, entre otros.
                </p>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Nuestro equipo de expertos en marketing digital está actualizado en las últimas tendencias y tecnologías para garantizar que su negocio tenga una presencia en línea efectiva y atractiva para su audiencia.
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
                  src='/images/marketing-digital.jpg'
                  alt='Servicios de Marketing Digital'
                  width={1152}
                  height={768}
                />
                {/* <div className='absolute inset-0 bg-primary mix-blend-multiply' /> */}
                <div className='absolute inset-0 opacity-80 bg-gradient-to-t from-black to-transparent' />
                <div className='absolute px-8 bottom-10'>

                  <blockquote className='h-full mt-8'>

                    <footer className='mt-4 text-lg font-medium text-white md:flex-grow'>
                      <p className=' drop-shadow-sm'>
                        En el mundo digital actual, es esencial contar con una estrategia de marketing efectiva para impulsar tu negocio. Con nuestros servicios de marketing digital, podrás llegar a tu audiencia de manera más efectiva y aumentar tus ventas y conversiones.
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
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Marketing Digital</p>
              <h2 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Creación de Estrategias de Marketing en Línea
              </h2>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  En nuestra agencia de marketing digital, creamos estrategias de marketing en línea personalizadas que se ajustan a las necesidades de su negocio y a las expectativas de sus clientes. Nos enfocamos en la experiencia de usuario, la optimización para motores de búsqueda y las redes sociales para asegurar que su sitio web sea fácil de encontrar y promover en línea.
                </p>
              </div>
            </div>
          </div>

          <div className='relative order-first py-16 md:order-first lg:py-16'>
            <div className='relative max-w-md px-4 pb-20 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none'>
              {/* Testimonial card */}
              <div className='relative pt-64 pb-10 overflow-hidden duration-500 transform shadow-xl rounded-2xl hover:scale-105 min-h-[550px]'>
                <Image
                  className='absolute inset-0 object-cover w-full h-full'
                  src='/images/marketing-digital-calidad.jpg'
                  alt='Creación de Estrategias de Marketing en Línea'
                  width={1152}
                  height={768}
                />
                {/* <div className='absolute inset-0 bg-primary mix-blend-multiply' /> */}
                <div className='absolute inset-0 opacity-60 bg-gradient-to-t from-black to-transparent' />
                <div className='absolute px-8 bottom-10'>
                  <blockquote className='h-full mt-8'>
                    <footer className='mt-4 text-lg font-medium text-white md:flex-grow'>
                      <p className='drop-shadow-sm'>
                        En nuestro enfoque de marketing digital, nos esforzamos por crear estrategias de marketing en línea personalizadas y optimizadas para la mejor experiencia de usuario posible. Desde la optimización de motores de búsqueda hasta la promoción en redes sociales, nos aseguramos de que cada detalle se ajuste a sus necesidades y objetivos.
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
          <h2 className='text-base font-semibold tracking-wider uppercase dark:text-white text-primary'>Marketing Digital Personalizado para Atraer Más Clientes</h2>
          <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
            Haz que tu marca destaque con nuestras soluciones de marketing digital.
          </p>
          <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            En nuestra agencia de marketing digital, creamos estrategias personalizadas que atraen a tu público objetivo y mejoran la experiencia del usuario. Optimizamos la usabilidad y experiencia para aumentar la tasa de conversión y la visibilidad en línea de tu negocio. Haz que tu marca sea la cara de tu negocio en línea.
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
            Además de nuestros servicios de marketing digital, también ofrecemos servicios de gestión de redes sociales para ayudarte a aumentar tu presencia en línea. Desde la creación de contenido hasta la implementación de campañas publicitarias en las redes sociales, nuestro equipo de expertos te ayudará a destacar en el mundo digital. Contáctanos ahora para conocer más sobre cómo podemos ayudarte a crecer en línea.
          </p>
        </div>
      </div>
      <Pricing
        tiers={tiers}
        sections={sections}
        faqs={faqs}
      />
    </Layout>
  )
}

export default PosicionamientoWeb
