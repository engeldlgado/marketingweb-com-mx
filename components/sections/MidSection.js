import {
  CodeIcon, DesktopComputerIcon, FastForwardIcon, GlobeIcon, RefreshIcon, SupportIcon
} from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../svg/Logo'
// import MainBlog from '../blog/MainBlog'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import FeatureCard from '../cards/FeatureCard'

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
  return (
    <>
      {/* Feature section with grid */}
      {/* <div id='about' className='relative py-16 bg-white sm:py-24 dark:bg-gradient-to-b dark:from-black dark:to-base-100'>
        <h1 className='max-w-2xl mx-auto text-2xl font-extrabold tracking-tight text-center text-gray-900 dark:text-indigo-500 sm:text-3xl'>Soluciones de desarrollo web y marketing con 10 años de experiencia</h1>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>

          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            <div className='pt-6'>
              <h2 className='text-base font-semibold tracking-wider uppercase dark:text-white text-secondary'>Acerca de mi</h2>
              <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-indigo-500 sm:text-4xl'>
                El desarrollo web es mi pasión
              </p>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Soy Engelbert Vizcaya, Full Stack Developer con más de 10 años de experiencia en la industria. Mi experiencia incluye el uso de tecnologías como JavaScript, React, NextJS, Node.js, GraphQL, MongoDB y WordPress, así como HTML/CSS. Mi objetivo es entregar soluciones innovadoras y centradas en el cliente que superen las expectativas del negocio y cumplan los objetivos del proyecto. Soy una persona emprendedora y siempre busco entregar proyectos de alta calidad y cumplir con los requerimientos del cliente. Soy un buen colaborador en equipo con excelentes habilidades de comunicación y una pasión por la innovación.
                </p>

              </div>
            </div>

          </div>
          <div className='relative order-first py-16 lg:py-0 '>

            <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
              <Image
                className='inset-0 object-cover w-full h-full'
                src='/imagenes/coding.png'
                alt='Coding'
                width={560}
                height={317}
              />
            </div>
          </div>
        </div>
      </div> */}
      <div id='work' className='relative bg-white dark:bg-base-100 sm:pt-10 lg:pt-24 dark:bg-gradient-to-b dark:from-black dark:to-base-100'>
        <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
          <h1 className='text-base font-semibold tracking-wider uppercase dark:text-white text-secondary'>Servicios de Marketing Digital para tu Negocio</h1>
          <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-indigo-500 sm:text-4xl'>
            Destaca en línea con nuestras soluciones personalizadas.
          </p>
          <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            En nuestra agencia de marketing digital, nos especializamos en el diseño web, SEO y gestión de redes sociales. Creamos estrategias innovadoras y efectivas para ayudar a tu negocio a sobresalir en línea y atraer más clientes potenciales.
          </p>

          <div className='mt-12'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {features.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          </div>

          <p className='py-16 mx-auto text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            En nuestra agencia de marketing digital, te ofrecemos soluciones personalizadas para mejorar la presencia en línea de tu negocio. Contáctanos para obtener más información sobre cómo podemos ayudarte a alcanzar tus objetivos de marketing.
          </p>
        </div>
      </div>

      {/* Testimonial section */}
      <div className='py-16 bg-white dark:bg-base-100 lg:py-12'>
        <div className='relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='relative px-8 py-24 overflow-hidden shadow-2xl bg-secondary dark:bg-primary rounded-xl lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8'>
            <div className='absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply'>
              <Image
                className='object-cover lg:h-full lg:w-full'
                src='/images/marketing-digital-seo.jpg'
                alt='Desbloquea el potencial de tu negocio en línea'
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
              Te mantendré actualizado sobre las últimas tendencias y te guiaré a través de cada paso para convertirte en un experto en el campo. ¡No te pierdas mi información valiosa y únete a mi comunidad de aprendizaje hoy!
            </p>
          </div>
          {/* <MainBlog posts={posts} postLength={3} /> */}
        </div>

        <div className='flex justify-center mt-12'>
          <Link href='/blog' className='inline-flex items-center px-6 py-2 text-base font-medium text-white transition-colors duration-500 border border-transparent rounded-md shadow-sm bg-secondary hover:bg-orange-400 dark:bg-primary dark:hover:bg-indigo-800'>
            Ver más
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div id='contact' className='relative bg-gray-900 dark:bg-neutral'>
        <div className='relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
          <Image
            className='object-cover w-full h-full'
            src='/imagenes/soporte-especializado.jpg'
            alt='Mentoring y soporte especializado'
            width={927}
            height={504}
          />
          <div
            aria-hidden='true'
            className='absolute inset-0 bg-gradient-to-b from-white to-orange-200 dark:from-white dark:to-primary mix-blend-multiply'
          />
        </div>
        <div className='relative max-w-md px-4 py-12 mx-auto sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32'>
          <div className='md:ml-auto md:w-1/2 md:pl-10'>
            <h2 className='text-base font-semibold tracking-wider text-gray-300 uppercase'>
              Mi compromiso contigo
            </h2>
            <p className='mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>Estoy aquí para ayudarte</p>
            <p className='mt-3 text-lg text-gray-300'>
              Mi compromiso contigo es brindarte un soporte excepcional en todo momento. Estoy disponible para ayudarte en cualquier problema o pregunta que puedas tener. ¡No dudes en contactarme!
            </p>
            <div className='mt-8'>
              <div className='inline-flex'>
                {/* <a
                  href='#'
                  className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50'
                >
                  Contacto
                  <ExternalLinkIcon className='w-5 h-5 ml-3 -mr-1 text-gray-400' aria-hidden='true' />
                </a> */}
                {/* Contact Info */}
                <div className='flex justify-center px-5 py-3 font-medium'>
                  <div className='flex items-center mr-1 text-white duration-300 hover:text-primary'>
                    <MailIcon className='w-5 h-5 mr-1 ' aria-hidden='true' />
                    <a href='mailto:hola@engeldelgado.com' itemProp='email'>
                      hola@engeldelgado.com
                    </a>
                  </div>
                  <div className='flex items-center ml-5 text-white duration-300 hover:text-primary'>
                    <PhoneIcon className='w-5 h-5 mr-1' aria-hidden='true' />
                    <a href='tel:+584242081347' itemProp='telephone'>
                      +58 424 208 13 47
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden mt-8' itemScope itemType='http://schema.org/Person'>
              <span itemProp='name'>Engel Delgado</span>
              <div itemProp='jobTitle'>Full Stack Developer</div>
              <div itemProp='description'>El desarrollo web es mi pasión. Soy Engelbert Vizcaya, Full Stack Developer con más de 10 años de experiencia en la industria. Mi experiencia incluye el uso de tecnologías como JavaScript, React, NextJS, Node.js, GraphQL, MongoDB y WordPress, así como HTML/CSS. Mi objetivo es entregar soluciones innovadoras y centradas en el cliente que superen las expectativas del negocio y cumplan los objetivos del proyecto. Soy una persona emprendedora y siempre busco entregar proyectos de alta calidad y cumplir con los requerimientos del cliente. Soy un buen colaborador en equipo con excelentes habilidades de comunicación y una pasión por la innovación.</div>
              <div itemProp='address' itemScope itemType='http://schema.org/PostalAddress'>
                <span itemProp='streetAddress'>Casco central</span>
                <span itemProp='addressLocality'>Los Teques</span>,
                <span itemProp='addressRegion'>Miranda</span>
                <span itemProp='postalCode'>1201</span>
                <span itemProp='addressCountry'>Venezuela</span>
              </div>
              <div>
                Tel: <span itemProp='telephone'>+58 424 208 13 47</span>
                Correo: <span itemProp='email'>hola@engeldelgado.com</span>
              </div>
            </div>
            <div className='hidden' itemScope itemType='http://schema.org/Service'>
              <span itemProp='name'>Servicios de desarrollo web y marketing</span>
              <div itemProp='description'>Ofrezco servicios de diseño web personalizado, diseño adaptable, desarrollo de aplicaciones web de una sola página (SPA) y WebApps, optimización de rendimiento, integraciones fáciles y soporte técnico siempre disponible para mejorar tu presencia en línea y atraer más clientes potenciales. </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
