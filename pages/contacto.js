import ServicesHero from '@/components/hero/ServicesHero'
import Layout from '@/components/layout/MainLayout'
import { LocationMarkerIcon, MailOpenIcon, PhoneIcon } from '@heroicons/react/outline'
import { InlineWidget } from 'react-calendly'

const Contacto = () => {
  return (
    <Layout
      title='Contacta con Nuestra Agencia de Marketing Digital'
      description='Mejora tu presencia en línea con nuestros servicios de manejo de redes sociales. Contacta con nuestra agencia especializada en diseño y estrategias digitales para redes sociales. Diseño de contenido y mucho más.'
      canonical='https://marketingweb.com.mx/contacto'
    >
      <ServicesHero
        title='Contacta con Nuestra Agencia'
        subtitle='Mejora tu presencia en línea con nuestros servicios de manejo de redes sociales. Contacta con nuestra agencia especializada en diseño y estrategias digitales para redes sociales. Diseño de contenido y mucho más.'
        image='/images/contacta-agencia-marketing-web.jpg'
        subImage='/images/digital.png'
      />
      <div id='social-media-management' className='relative bg-white dark:bg-base-100'>
        <div className=' lg:mx-auto lg:max-w-[90%] lg:px-8 lg:gap-14 lg:items-center'>
          <div className='relative max-w-md px-4 mx-auto sm:max-w-[90%] sm:px-6 lg:px-0'>
            <div className='pt-6 text-center'>
              <p className='text-sm font-semibold tracking-wider uppercase dark:text-white text-primary'>Contacta nuestra agencia</p>
              <h2 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-primary sm:text-4xl'>
                Mejora tu presencia en línea
              </h2>
              {/* Contact Information in Rows */}
              <div className='grid grid-cols-1 mt-16 gap-y-10 gap-x-6 sm:grid-cols-3'>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary'>
                    <MailOpenIcon className='w-6 h-6' aria-hidden='true' />
                  </div>
                  <div className='flex flex-col mt-5'>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-white'>Correo</h3>
                    <p className='mt-1 text-base text-gray-500 dark:text-gray-300'>
                      <a href='mailto:info@marketingweb.com.mx' className='text-primary hover:text-primary-dark'> info@marketingweb.com.mx </a>
                    </p>
                  </div>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary'>
                    <PhoneIcon className='w-6 h-6' aria-hidden='true' />
                  </div>
                  <div className='flex flex-col mt-5'>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-white'>Teléfono</h3>
                    <p className='mt-1 text-base text-gray-500 dark:text-gray-300'>
                      Oficina: <a href='tel:+523336364557' className='text-primary hover:text-primary-dark'>+52 33 3636 4557</a><br />
                      WhatsApp: <a href='https://wa.me/523321214067' target='_blank' rel='noopener noreferrer' className='text-primary hover:text-primary-dark'>+52 33 2121 4067</a><br /> Oficina DF: <a href='tel:+525584219643' className='text-primary hover:text-primary-dark'>+52 55 8421 9643</a>
                    </p>
                  </div>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary'>
                    <LocationMarkerIcon className='w-6 h-6' aria-hidden='true' />
                  </div>
                  <div className='flex flex-col mt-5'>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-white'>Dirección</h3>
                    <p className='mt-1 text-base text-gray-500 dark:text-gray-300'>
                      <a href='https://goo.gl/maps/pswUygc7Qw8yb8Bg8' target='_blank' rel='noopener noreferrer' className='text-primary hover:text-primary-dark'>Guadalajara, Jalisco, México</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-6 text-gray-500'>
                <InlineWidget
                  url='https://calendly.com/marketingweb/tienes-dudas-para-emprender-tu-nuevo-proyecto-te-ayudamos'
                  styles={{
                    height: '800px'
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Contacto
