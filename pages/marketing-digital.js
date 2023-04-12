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
      { name: 'Diseño y desarrollo de aplicaciones móviles.', tiers: { Premium: 'Cotización especial' } }
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

const MarketingDigital = () => {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Layout
      title='Cómo una agencia de publicidad puede mejorar tu campaña de marketing digital'
      description='Descubre cómo una agencia de publicidad puede crear una estrategia de marketing digital efectiva con anuncios, promoción y campañas.'
      canonical='https://marketingweb.com.mx/marketing-digital'
    >
      <ServicesHero
        title='Estrategias de Marketing Digital'
        subtitle='Mejora tu presencia en línea con nuestros servicios de marketing digital. Agencia especializada en diseño y estrategias digitales. Diseño web profesional y mucho más.'
        image='/images/invertir-en-marketing-digital.jpg'
        subImage='/images/marketing-estrategico.png'
      />

      <div id='social' className='relative bg-white dark:bg-base-100'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>

          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            <div className='pt-6'>
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Estrategias de Marketing Digital para Impulsar tu Negocio</p>
              <h1 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                La importancia de trabajar con una agencia de publicidad en tu campaña de marketing digital
              </h1>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Trabajar con una agencia de publicidad es esencial para crear una campaña de marketing digital exitosa. Te ayudarán a definir tu público objetivo, elegir las plataformas publicitarias adecuadas y crear anuncios efectivos. Además, podrán medir los resultados y ajustar la estrategia en función de ellos.
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
                  itemProp='image' itemScope itemType='https://schema.org/ImageObject'
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
                Anuncios publicitarios y su papel en la promoción de tu negocio en línea
              </h2>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Los anuncios publicitarios son esenciales para promocionar tu negocio en línea. Una buena campaña publicitaria puede aumentar la visibilidad de tu marca y atraer a nuevos clientes a tu sitio web. Con una estrategia bien diseñada y la ayuda de una agencia de publicidad, puedes maximizar el potencial de tus anuncios en línea y alcanzar el éxito en tu negocio en línea.
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
                  itemProp='image' itemScope itemType='https://schema.org/ImageObject'
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
      <div id='social' className='relative bg-white dark:bg-base-100'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>

          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            <div className='pt-6'>
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Campañas publicitarias para Impulsar tu Negocio</p>
              <h3 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Creando una campaña publicitaria efectiva con una agencia de marketing digital
              </h3>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Trabaja con nuestra agencia de marketing digital para crear una campaña publicitaria efectiva que se adapte a tus objetivos de negocio. Desde la planificación hasta la ejecución, su experiencia y conocimientos pueden ayudarte a maximizar tus resultados y llegar a tu público objetivo de manera efectiva.
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
                  src='/images/campanas-publicitarias.jpg'
                  alt='Campañas publicitarias para Impulsar tu Negocio'
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
                        Una vez que hayas establecido tus objetivos de negocio, nuestra agencia de marketing digital puede ayudarte a identificar las plataformas publicitarias adecuadas para tu campaña, así como a definir los mensajes y el público objetivo.
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
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Estrategias de Marketing Digital</p>
              <h4 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Cómo una estrategia de marketing sólida puede aumentar el éxito de tu negocio en línea
              </h4>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Una estrategia de marketing sólida es esencial para cualquier negocio en línea. Desde la identificación de tu público objetivo hasta la elección de las plataformas de publicidad adecuadas, una buena estrategia de marketing puede marcar la diferencia en el éxito de tu negocio en línea.
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
                  src='/images/estrategias-marketing-digital.jpg'
                  alt='Creación de Estrategias de Marketing en Línea'
                  width={1152}
                  height={768}
                  itemProp='image' itemScope itemType='https://schema.org/ImageObject'
                />
                {/* <div className='absolute inset-0 bg-primary mix-blend-multiply' /> */}
                <div className='absolute inset-0 opacity-60 bg-gradient-to-t from-black to-transparent' />
                <div className='absolute px-8 bottom-10'>
                  <blockquote className='h-full mt-8'>
                    <footer className='mt-4 text-lg font-medium text-white md:flex-grow'>
                      <p className='drop-shadow-sm'>
                        Al trabajar con nuestra agencia de marketing digital, puedes estar seguro de que tu estrategia de marketing será sólida y efectiva. Los expertos en marketing pueden ayudarte a desarrollar una estrategia personalizada que se adapte a tus necesidades y objetivos comerciales específicos, lo que puede resultar en un mayor éxito para tu negocio en línea.
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
          <p className='text-base font-semibold tracking-wider uppercase dark:text-white text-primary'>Marketing Digital Personalizado para Atraer Más Clientes</p>
          <h5 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
            La importancia de una estrategia de marketing personalizada en tu campaña publicitaria
          </h5>
          <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            Una estrategia de marketing personalizada te permitirá llegar a tu audiencia con un enfoque único y adaptado a sus necesidades y preferencias. Al comprender a tu público objetivo, podrás crear mensajes publicitarios efectivos que generen interés y acción.
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
          <h6 className='mt-20 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-3xl'>
            Trabajando con una agencia de publicidad para crear una estrategia de marketing digital exitosa
          </h6>

          <p className='py-16 mx-auto text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            Trabajar con nuestra agencia de publicidad es fundamental para crear una estrategia de marketing digital exitosa. Desde la planificación hasta la implementación, una agencia de publicidad puede proporcionar experiencia y conocimientos que son esenciales para el éxito.
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

export default MarketingDigital
