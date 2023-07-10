import ServicesHero from '@/components/hero/ServicesHero'
import Layout from '@/components/layout/MainLayout'
import Pricing from '@/components/sections/Pricing'
import {
  CameraIcon,
  ChartBarIcon,
  ChatAlt2Icon,
  EyeIcon,
  GlobeAltIcon,
  SupportIcon
} from '@heroicons/react/outline'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const features = [
  {
    name: 'Gestión de redes sociales',
    description: 'Gestionamos tus redes sociales para crear contenido atractivo y aumentar la interacción con tus seguidores, lo que ayuda a aumentar el alcance y la visibilidad de tu marca.',
    icon: ChatAlt2Icon
  },
  {
    name: 'Publicidad en redes sociales',
    description: 'Creamos estrategias de publicidad efectivas en redes sociales para llegar a tu audiencia objetivo y aumentar tu alcance y conversión.',
    icon: GlobeAltIcon
  },
  {
    name: 'Monitoreo de la competencia',
    description: 'Analizamos a tu competencia y te damos recomendaciones para mejorar tus estrategias en las redes sociales y mantenerte al frente del mercado.',
    icon: EyeIcon
  },
  {
    name: 'Creación de contenido atractivo',
    description: 'Diseñamos y creamos contenido visualmente atractivo para tus redes sociales, lo que aumenta la participación y el compromiso de tus seguidores.',
    icon: CameraIcon
  },
  {
    name: 'Análisis de datos y estadísticas',
    description: 'Realizamos un análisis detallado de los datos y estadísticas de tus redes sociales para medir su efectividad y hacer ajustes necesarios para alcanzar tus objetivos.',
    icon: ChartBarIcon
  },
  {
    name: 'Mantenimiento y soporte',
    description: 'Proporcionamos mantenimiento y soporte continuo para garantizar que tus redes sociales funcionen sin problemas y estén actualizadas.',
    icon: SupportIcon
  }
]

const tiers = [
  { name: 'Básico', href: '#', priceMonthly: 6500, description: 'Plan básico con servicios de manejo de redes sociales esenciales.' },
  {
    name: 'Esencial',
    href: '#',
    priceMonthly: 8300,
    description: 'Plan avanzado con servicios de manejo de redes sociales más completos y funcionalidades adicionales.'
  },
  {
    name: 'Premium',
    href: '#',
    priceMonthly: 17000,
    description: 'Plan personalizado con servicios de manejo de redes sociales avanzados y funcionalidades especiales.'
  }
]

const sections = [
  {
    name: 'Características',
    features: [
      { name: 'Publicación de contenido en redes sociales.', tiers: { Básico: true, Esencial: true, Premium: true } },
      { name: 'Análisis y seguimiento de métricas de redes sociales.', tiers: { Esencial: true, Premium: true } },
      { name: 'Creación de contenido para redes sociales.', tiers: { Esencial: true, Premium: true } },
      { name: 'Gestión de la comunidad de redes sociales.', tiers: { Esencial: true, Premium: true } }
    ]
  },
  {
    name: 'Funcionalidades adicionales',
    features: [
      { name: 'Campañas publicitarias en redes sociales.', tiers: { Esencial: true, Premium: true } },
      { name: 'Automatización de publicaciones en redes sociales.', tiers: { Esencial: true, Premium: true } },
      { name: 'Análisis de la competencia en redes sociales.', tiers: { Esencial: true, Premium: true } },
      { name: 'Configuración de Google Analytics y Google Tag Manager.', tiers: { Esencial: true, Premium: true } },
      { name: 'Publicidad en motores de búsqueda (SEM).', tiers: { Premium: true } },
      { name: 'Desarrollo de estrategias de influencer marketing.', tiers: { Premium: 'Cotización Especial' } }
    ]
  },
  {
    name: 'Soporte',
    features: [
      { name: 'Soporte técnico especializado en manejo de redes sociales.', tiers: { Básico: true, Esencial: true, Premium: true } },
      { name: 'Asesoramiento en la implementación de funcionalidades adicionales.', tiers: { Esencial: true, Premium: true } },
      { name: 'Soporte y monitoreo continuo de redes sociales.', tiers: { Esencial: true, Premium: true } },
      { name: 'Soporte telefónico y por correo electrónico.', tiers: { Premium: true } }
    ]
  }
]

const faqs = [
  {
    id: 1,
    question: '¿Por qué es importante tener una estrategia de redes sociales?',
    answer: 'Permite llegar a tu audiencia en línea, mejorar la visibilidad de tu marca y aumentar el tráfico a tu sitio web. Además, ayuda a comprender a tu público objetivo y adaptar tu mensaje de marketing a través de las redes sociales.'
  },
  {
    id: 2,
    question: '¿Cómo puedo mejorar mi estrategia de redes sociales?',
    answer: 'Puedes utilizar técnicas como la segmentación de audiencia, la creación de contenido relevante y valioso, la optimización para motores de búsqueda y la integración de herramientas de análisis y seguimiento para evaluar y ajustar tus campañas de redes sociales.'
  },
  {
    id: 3,
    question: '¿Qué herramientas adicionales puedo utilizar en mi estrategia de redes sociales?',
    answer: 'Incluyen publicidad en redes sociales, marketing de influencers, promociones y sorteos en línea. Ayudan a llegar a tu público objetivo y a convertir a los seguidores en clientes potenciales.'
  },
  {
    id: 4,
    question: '¿Qué es la segmentación de audiencia en redes sociales?',
    answer: 'Consiste en dividir a tu audiencia en grupos más pequeños y específicos en función de sus características, intereses y comportamientos en las redes sociales. Esto permite crear contenido y mensajes de marketing más relevantes y aumentar la efectividad de tus campañas de redes sociales.'
  },
  {
    id: 5,
    question: '¿Por qué es importante la optimización para motores de búsqueda en una estrategia de redes sociales?',
    answer: 'Ayuda a que tus perfiles y publicaciones sean más visibles en los resultados de búsqueda, aumenta el tráfico a tus perfiles y mejora la visibilidad de tu marca en línea. Además, mejora la calidad del contenido de tus perfiles y aumenta la relevancia de tus mensajes de marketing para tu público objetivo.'
  },
  {
    id: 6,
    question: '¿Cómo puedo asegurarme de que mi estrategia de redes sociales sea efectiva para todas las personas?',
    answer: 'Debes seguir pautas de accesibilidad en tus publicaciones y perfiles, proporcionar descripciones alternativas para las imágenes y videos, asegurarte de que tus perfiles sean fáciles de navegar y mantener un tono inclusivo y diverso en tus mensajes de marketing. Además, tu contenido debe ser relevante y valioso para todas las personas en tu público objetivo, independientemente de su edad, género o habilidades en línea.'
  }
]

const RedesSociales = () => {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Layout
      title='Manejo de redes sociales, Campañas en Facebook Instagram Twitter y TikTok '
      description='Nuestra agencia ofrece servicios personalizados de manejo de redes sociales y campañas en Facebook, Instagram, Twitter y TikTok. Contáctanos ahora mismo!.'
      canonical='https://marketingweb.com.mx/redes-sociales'
    >
      <ServicesHero
        title='Manejo de Redes Sociales'
        subtitle='Mejora tu presencia en línea con nuestros servicios de manejo de redes sociales. Agencia especializada en diseño y estrategias digitales para redes sociales. Diseño de contenido y mucho más.'
        image='/images/manejo-redes-sociales.jpg'
        subImage='/images/redes-sociales.png'
      />

      <div id='social' className='relative bg-white dark:bg-base-100'>
        <div className=' lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>

          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            <div className='pt-6'>
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Manejo de Redes Sociales para Impulsar tu Negocio</p>
              <h1 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Manejo de redes sociales
              </h1>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Ofrecemos soluciones de manejo de redes sociales adaptadas a las necesidades y objetivos de cada cliente. Nuestros servicios incluyen diseño de contenido, estrategias de publicación, análisis de métricas, entre otros.
                </p>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Nuestro equipo de expertos en manejo de redes sociales está actualizado en las últimas tendencias y tecnologías para garantizar que su negocio tenga una presencia en línea efectiva y atractiva para su audiencia en las redes sociales más relevantes para su negocio.
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
                  src='/images/social-media-revolution.jpg'
                  alt='Servicios de Manejo de Redes Sociales'
                  width={1152}
                  height={768}
                  itemProp='image' itemScope itemType='https://schema.org/ImageObject'
                />
                {/* <div className='absolute inset-0 bg-primary mix-blend-multiply' /> */}
                <div className='absolute inset-0 opacity-80 bg-gradient-to-t from-black to-transparent' />
                <div className='absolute px-8 bottom-10'>
                  <blockquote className='h-full mt-8'>
                    <footer className='mt-4 text-lg font-medium text-white md:flex-grow'>
                      <p className=' drop-shadow-sm'>
                        Ofrecemos servicios de manejo de redes sociales para negocios, que incluyen la creación y gestión de perfiles, publicación de contenido y análisis de estadísticas. Con nuestro equipo de expertos en redes sociales, puedes mejorar tu presencia en línea y aumentar la interacción con tus seguidores.
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='social-media-management' className='relative bg-white dark:bg-base-100'>
        <div className=' lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>
          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            <div className='pt-6'>
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Campañas de Calidad</p>
              <h2 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Campañas en las redes sociales
              </h2>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Creamos y ejecutamos campañas de redes sociales en diversas plataformas, incluyendo Facebook, Instagram, Twitter y TikTok, que se adapten a tus objetivos de negocio y te ayuden a conectarte con tus seguidores y potenciales clientes.
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
                  src='/images/manejo-redes-sociales-empresas.jpg'
                  alt='Gestión Profesional de tus Redes Sociales'
                  width={1152}
                  height={768}
                  itemProp='image' itemScope itemType='https://schema.org/ImageObject'
                />
                <div className='absolute inset-0 opacity-80 bg-gradient-to-t from-black to-transparent' />
                <div className='absolute px-8 bottom-10'>
                  <blockquote className='h-full mt-8'>
                    <footer className='mt-4 text-lg font-medium text-white md:flex-grow'>
                      <p className='drop-shadow-sm'>
                        En nuestro servicio de manejo de redes sociales, nuestro equipo de expertos en redes sociales te ayudará a llegar a tu audiencia de manera efectiva y aumentar la interacción con tus seguidores a través de una gestión profesional de tus perfiles y la publicación de contenido estratégico en tus redes sociales.
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
          <p className='text-base font-semibold tracking-wider uppercase dark:text-white text-primary'>Precios Competitivos</p>
          <h3 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
            Precio Manejo de redes sociales
          </h3>
          <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            Nuestros precios de manejo de redes sociales varían según la cantidad de plataformas que se manejen y la cantidad de publicaciones que se programen. Contáctanos para obtener más información sobre nuestros paquetes de precios.
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

          <h4 className='mt-20 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-3xl'>
            Manejo de redes sociales paquetes
          </h4>

          <p className='py-16 mx-auto text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            Ofrecemos paquetes de manejo de redes sociales personalizados para satisfacer las necesidades de tu negocio. Ya sea que necesites ayuda para una o varias plataformas, tenemos un paquete que se adapta a ti.
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

export default RedesSociales
