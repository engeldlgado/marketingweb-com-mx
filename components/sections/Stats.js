/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
const metricas = [
  { id: 1, valor: '8K+', enfasis: 'empresas', resto: 'utilizan nuestras soluciones de Marketing Digital.' },
  { id: 2, valor: '5+', enfasis: 'países alrededor del mundo', resto: 'confían en nuestros servicios de Diseño Web.' },
  { id: 3, valor: '99%', enfasis: 'satisfacción del cliente', resto: 'es nuestro principal objetivo en cada proyecto de SEO.' },
  { id: 4, valor: '12M+', enfasis: 'problemas resueltos', resto: 'con éxito gracias a nuestra experiencia en Desarrollo de Software.' }
]

export default function Metricas () {
  return (
    <div id='contact' className='relative bg-gray-900 shadow-lg dark:bg-neutral'>
      <div className='relative h-72 bg-primary sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
        <Image
          className='object-cover w-full h-full'
          src='/images/contacto.jpg'
          alt='Contancto con Marketing Web Agencia de Posicionamiento Web y SEO para el Marketing Digital'
          width={927}
          height={504}
          itemProp='image' itemScope itemType='https://schema.org/ImageObject'
        />
        <div
          aria-hidden='true'
          className='absolute inset-0 bg-gradient-to-b from-white to-orange-200 dark:from-white dark:to-primary mix-blend-multiply'
        />
      </div>
      <div className='relative max-w-md px-4 py-8 mx-auto sm:max-w-7xl sm:px-6 sm:py-8 md:py-28 lg:px-8 lg:py-8'>
        <div className='md:ml-auto md:w-1/2 md:pl-10'>
          <div className='relative pt-12 pb-24 sm:pt-24 sm:pb-24 xl:col-start-1 xl:pb-24'>
            <h2 className='text-sm font-semibold tracking-wide uppercase text-primary dark:text-blue-600'>Métricas Valiosas</h2>
            <p className='mt-3 text-3xl font-extrabold text-white'>
              Obtén datos útiles que te ayudarán a hacer crecer tu negocio
            </p>
            <p className='mt-5 text-lg text-gray-300'>
              En <strong>Marketing Web</strong>, nos enfocamos en ofrecer soluciones de calidad en Marketing Digital, Diseño Web y SEO para mejorar la eficiencia y productividad de tu negocio.
            </p>
            <div className='grid grid-cols-1 mt-12 gap-y-12 gap-x-6 sm:grid-cols-2'>
              {metricas.map((item) => (
                <p key={item.id}>
                  <span className='block text-2xl font-bold text-white'>{item.valor}</span>
                  <span className='block mt-1 text-base text-gray-300'>
                    <span className='font-medium text-white'>{item.enfasis}</span> {item.resto}
                  </span>
                </p>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
