import ServicesHero from '@/components/hero/ServicesHero'
import Layout from '@/components/layout/MainLayout'
import Pricing from '@/components/sections/Pricing'
import {
  CogIcon,
  DesktopComputerIcon, FastForwardIcon,
  LightningBoltIcon,
  PencilIcon,
  SupportIcon
} from '@heroicons/react/outline'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const features = [
  {
    name: 'Diseño Responsivo',
    description: 'Creamos sitios web que se adaptan a todos los dispositivos y tamaños de pantalla para brindar la mejor experiencia de usuario posible.',
    icon: DesktopComputerIcon
  },
  {
    name: 'Optimización de Conversión',
    description: 'Analizamos y optimizamos tu sitio web para aumentar la tasa de conversión y mejorar la experiencia de usuario.',
    icon: FastForwardIcon
  },
  {
    name: 'Diseño Atractivo',
    description: 'Diseñamos sitios web atractivos y modernos que reflejen la identidad visual de tu marca y generen un impacto positivo en los visitantes.',
    icon: PencilIcon
  },
  {
    name: 'Funcionalidad Personalizada',
    description: 'Desarrollamos sitios web con funcionalidades personalizadas para cumplir con tus necesidades específicas y mejorar la experiencia del usuario.',
    icon: CogIcon
  },
  {
    name: 'Optimización de Velocidad',
    description: 'Optimizamos el rendimiento de tu sitio web para que cargue rápidamente y proporcione una experiencia de usuario más fluida.',
    icon: LightningBoltIcon
  },
  {
    name: 'Mantenimiento y Soporte',
    description: 'Proporcionamos mantenimiento y soporte continuo para garantizar que tu sitio web funcione sin problemas y esté actualizado.',
    icon: SupportIcon
  }
]

const tiers = [
  { name: 'Básico', href: '#', priceMonthly: 2000, description: 'Diseño web básico con hasta 5 interiores.' },
  {
    name: 'Esencial',
    href: '#',
    priceMonthly: 4100,
    description: 'Diseño web avanzado con hasta 10 interiores y funcionalidades adicionales.'
  },
  {
    name: 'Premium',
    href: '#',
    priceMonthly: 8600,
    description: 'Diseño web personalizado con funcionalidades avanzadas y hasta 20 interiores.'
  }
]
const sections = [
  {
    name: 'Características',
    features: [
      { name: 'Diseño web responsivo y optimizado para SEO.', tiers: { Básico: true, Esencial: true, Premium: true } },
      { name: 'Integración de herramientas de análisis y seguimiento.', tiers: { Esencial: true, Premium: true } },
      { name: 'Generación de contenido básico.', tiers: { Esencial: true, Premium: true } },
      { name: 'Auditorías y mejoras en el diseño web.', tiers: { Esencial: true, Premium: true } }
    ]
  },
  {
    name: 'Funcionalidades adicionales',
    features: [
      { name: 'Formulario de contacto y/o registro.', tiers: { Básico: true, Esencial: true, Premium: true } },
      { name: 'Integración de redes sociales.', tiers: { Básico: true, Esencial: true, Premium: true } },
      { name: 'Tienda en línea con carrito de compras.', tiers: { Esencial: true, Premium: true } },
      { name: 'Sistema de reservaciones o citas en línea.', tiers: { Premium: true } }
    ]
  },
  {
    name: 'Soporte',
    features: [
      { name: 'Soporte técnico especializado en diseño web.', tiers: { Básico: true, Esencial: true, Premium: true } },
      { name: 'Asesoramiento en la implementación de funcionalidades adicionales.', tiers: { Esencial: true, Premium: true } },
      { name: 'Soporte y monitoreo continuo del diseño web.', tiers: { Esencial: true, Premium: true } },
      { name: 'Soporte telefónico y por correo electrónico.', tiers: { Premium: true } }
    ]
  }
]
const faqs = [
  {
    id: 1,
    question: '¿Por qué es importante tener un diseño web optimizado?',
    answer:
  'Es importante tener un diseño web optimizado porque mejora la experiencia del usuario y ayuda a atraer más tráfico a tu sitio web. Además, un diseño web optimizado es mejor para el SEO y puede mejorar tu posicionamiento en los resultados de búsqueda.'
  },
  {
    id: 2,
    question: '¿Cómo puedo mejorar mi diseño web?',
    answer:
  'Para mejorar tu diseño web, puedes utilizar técnicas como el diseño responsivo, la optimización para SEO, y la integración de funcionalidades adicionales como un formulario de contacto o una tienda en línea.'
  },
  {
    id: 3,
    question: '¿Qué son las funcionalidades adicionales en un diseño web?',
    answer:
  'Algunas funcionalidades adicionales en un diseño web incluyen un formulario de contacto, una tienda en línea, una sección de comentarios y una sección de preguntas frecuentes para ayudar a los visitantes a encontrar respuestas a sus preguntas comunes.'
  },
  {
    id: 4,
    question: '¿Qué es el diseño responsivo?',
    answer:
'El diseño responsivo es una técnica de diseño web que permite que tu sitio web se adapte al tamaño de la pantalla en la que se está visualizando. Esto significa que tu sitio web se verá bien en cualquier dispositivo, ya sea una computadora de escritorio, una tableta o un teléfono móvil.'
  },
  {
    id: 5,
    question: '¿Por qué es importante la optimización para SEO en el diseño web?',
    answer:
'La optimización para SEO es importante en el diseño web porque ayuda a que tu sitio web sea más visible en los resultados de búsqueda. Esto puede aumentar el tráfico a tu sitio web y mejorar la visibilidad de tu marca en línea.'
  },
  {
    id: 6,
    question: '¿Cómo puedo asegurarme de que mi diseño web sea accesible para todas las personas?',
    answer:
    'Para asegurarte de que tu diseño web sea accesible para todas las personas, debes seguir pautas de accesibilidad web, como las establecidas por el W3C. Esto incluye proporcionar alternativas de texto para las imágenes, asegurarte de que tu sitio web sea navegable por teclado, y mantener un contraste adecuado entre el texto y el fondo.'
  }
]

const DisenoWeb = () => {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Layout
      title='Servicios de Diseño Web para Mejorar tu Presencia en Línea'
      description='Mejora tu presencia en línea con nuestros servicios de diseño web. Agencia de diseño web y marketing digital. Diseño web profesional.'
      canonical='https://marketingweb.com.mx/diseno-web'
    >
      <ServicesHero
        title='Diseño Web Profesional'
        subtitle='Mejora tu presencia en línea con nuestros servicios de diseño web. Agencia de diseño web y marketing digital. Diseño web profesional.'
        image='/images/diseno-web-calidad.jpg'
        subImage='/images/grafico-diseno-web.png'
      />

      <div id='social' className='relative bg-white dark:bg-base-100'>
        <div className=' lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>

          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            <div className='pt-6'>
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Diseño Web Personalizado y Único</p>
              <h2 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Desarrollo de sitios web
              </h2>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Ofrecemos servicios de diseño y desarrollo de sitios web personalizados y únicos, adaptados a las necesidades y objetivos de cada cliente.
                </p>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Trabajamos con las últimas tecnologías y tendencias en diseño web para garantizar que su sitio web tenga una apariencia moderna y profesional que lo destaque de la competencia.
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
                  src='/images/diseno-web-responsivo.jpg'
                  alt='Diseño Web Personalizado y Único'
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
                        Un sitio web atractivo y profesional es fundamental para mejorar la presencia en línea de su negocio. Con nuestro equipo de diseño y desarrollo de sitios web, puede estar seguro de que su sitio web se destacará entre la multitud y brindará una experiencia de usuario excepcional.
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
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Diseño Web y Experiencia de Usuario</p>
              <h2 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Creación de Sitios Web a Medida
              </h2>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  En nuestra agencia de diseño web, creamos sitios web personalizados que se ajustan a las necesidades de su negocio y a las expectativas de sus clientes. Nos enfocamos en la experiencia de usuario, la accesibilidad y la optimización para motores de búsqueda para asegurar que su sitio web sea fácil de usar, accesible y fácil de encontrar en línea.
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
                  src='/images/diseno-web-medida.jpg'
                  alt='Diseño Web y Experiencia de Usuario'
                  width={1152}
                  height={768}
                  itemProp='image' itemScope itemType='https://schema.org/ImageObject'
                />
                {/* <div className='absolute inset-0 bg-primary mix-blend-multiply' /> */}
                <div className='absolute inset-0 opacity-80 bg-gradient-to-t from-primary to-transparent' />
                <div className='absolute px-8 bottom-10'>
                  <blockquote className='h-full mt-8'>
                    <footer className='mt-4 text-lg font-medium text-white md:flex-grow'>
                      <p className='drop-shadow-sm'>
                        En nuestro enfoque de diseño web, nos esforzamos por crear sitios web personalizados y optimizados para la mejor experiencia de usuario posible. Desde la navegación hasta la estética, nos aseguramos de que cada detalle se ajuste a sus necesidades y objetivos.
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
          <h2 className='text-base font-semibold tracking-wider uppercase dark:text-white text-primary'>Diseño Web Personalizado para Atraer Más Clientes</h2>
          <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
            Haz que tu sitio web destaque con nuestras soluciones de diseño web.
          </p>
          <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            En nuestra agencia de diseño web, creamos sitios personalizados que atraen a tu público objetivo y mejoran la experiencia del usuario. Optimizamos la usabilidad y experiencia para aumentar la tasa de conversión y la visibilidad en línea de tu negocio. Haz que tu sitio web sea la cara de tu marca en línea.
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
            Además de nuestros servicios de diseño web, también ofrecemos un sistema de reservaciones de hoteles y citas en línea para mejorar la presencia de tu negocio. Contáctanos ahora y aumenta tu visibilidad en línea.
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

export default DisenoWeb
