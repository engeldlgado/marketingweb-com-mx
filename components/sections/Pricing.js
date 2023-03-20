
import { CheckIcon, MinusIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { Fragment } from 'react'
import Calendly from '../buttons/Calendly'
import { LogoSection } from './LogoSection'

const tiers = [
  { name: 'Básico', href: '#', priceMonthly: 720, description: 'Optimización básica de SEO en tu sitio web.' },
  {
    name: 'Esencial',
    href: '#',
    priceMonthly: 1800,
    description: 'Mejora el posicionamiento en motores de búsqueda con técnicas avanzadas de SEO.'
  },
  {
    name: 'Premium',
    href: '#',
    priceMonthly: 4800,
    description: 'Aumenta tu visibilidad en línea con una estrategia completa de posicionamiento web y SEO.'
  }
]
const sections = [
  {
    name: 'Características',
    features: [
      { name: 'Optimización SEO básica en tu sitio web.', tiers: { Básico: true, Esencial: true, Premium: true } },
      { name: 'Análisis de palabras clave para mejor posicionamiento.', tiers: { Básico: true, Esencial: true, Premium: true } },
      { name: 'Generación de contenido optimizado para SEO.', tiers: { Esencial: true, Premium: true } },
      { name: 'Auditorías de SEO y mejoras en la optimización.', tiers: { Esencial: 'Hasta 20 interiores', Premium: 'Hasta 50 interiores' } }
    ]
  },
  {
    name: 'Reportes',
    features: [
      { name: 'Reportes detallados del posicionamiento web.', tiers: { Básico: true, Esencial: true, Premium: true } },
      { name: 'Análisis de la competencia y recomendaciones.', tiers: { Esencial: true, Premium: true } },
      { name: 'Monitoreo constante del posicionamiento web.', tiers: { Premium: true } },
      { name: 'Integración con herramientas de análisis y seguimiento.', tiers: { Premium: true } }
    ]
  },
  {
    name: 'Soporte',
    features: [
      { name: 'Soporte técnico especializado en SEO y posicionamiento web.', tiers: { Básico: true, Esencial: true, Premium: true } },
      { name: 'Asesoramiento en la implementación de técnicas de SEO.', tiers: { Esencial: true, Premium: true } },
      { name: 'Soporte y monitoreo continuo de la estrategia de SEO.', tiers: { Esencial: true, Premium: true } },
      { name: 'Soporte telefónico y por correo electrónico.', tiers: { Premium: true } }
    ]
  }
]
const faqs = [
  {
    id: 1,
    question: '¿Por qué es importante el SEO para mi sitio web?',
    answer:
  'El SEO es importante porque ayuda a mejorar la visibilidad y el posicionamiento de tu sitio web en los resultados de búsqueda. Esto puede aumentar el tráfico a tu sitio y ayudarte a llegar a tu público objetivo.'
  },
  {
    id: 2,
    question: '¿Cómo puedo mejorar el SEO de mi sitio web?',
    answer:
  'Para mejorar el SEO de tu sitio web, puedes realizar varias acciones como optimizar el contenido, mejorar la velocidad de carga, utilizar palabras clave relevantes y tener un diseño web responsive.'
  },
  {
    id: 3,
    question: '¿Qué son las palabras clave?',
    answer:
  'Las palabras clave son términos que los usuarios utilizan en los motores de búsqueda para encontrar información relacionada con un tema en particular. Es importante incluir palabras clave relevantes en tu sitio web para mejorar su SEO.'
  },
  {
    id: 4,
    question: '¿Cómo puedo medir el éxito de mi estrategia de SEO?',
    answer:
  'Puedes medir el éxito de tu estrategia de SEO mediante la utilización de herramientas de análisis como Google Analytics, que te permiten ver el tráfico a tu sitio web, el rendimiento de las palabras clave y otras métricas importantes.'
  },
  {
    id: 5,
    question: '¿Cuánto tiempo se tarda en ver resultados con una estrategia de SEO?',
    answer:
  'El tiempo que se tarda en ver resultados con una estrategia de SEO depende de varios factores, como la competencia en tu nicho y la calidad de tu contenido. En general, puede tomar varios meses para ver mejoras significativas en tu posicionamiento en los resultados de búsqueda.'
  },
  {
    id: 6,
    question: '¿Por qué es importante el contenido de calidad para el SEO?',
    answer:
  'El contenido de calidad es importante para el SEO porque los motores de búsqueda valoran el contenido que proporciona valor a los usuarios. El contenido de calidad puede mejorar tu posicionamiento en los resultados de búsqueda y atraer a más visitantes a tu sitio web.'
  }
]

// function classNames (...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Pricing () {
  return (
    <div className='bg-white dark:bg-base-100'>

      {/* Comparison table */}
      <div className='max-w-2xl py-16 mx-auto bg-white dark:bg-base-100 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        {/* xs to lg */}
        <div className='space-y-24 lg:hidden'>
          {tiers.map((tier) => (
            <section key={tier.name}>
              <div className='px-4 mb-8'>
                <h2 className='text-lg font-medium leading-6 text-gray-900 dark:text-gray-100'>{tier.name}</h2>
                <p className='mt-4'>
                  <span className='text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100'>${tier.priceMonthly}</span>
                  <span className='text-base font-medium text-gray-500 dark:text-gray-100'>/mes</span>
                </p>
                <p className='mt-4 text-sm text-gray-500 dark:text-gray-100'>{tier.description}</p>
                {/* <a
                  href={tier.href}
                  className='block w-full py-2 mt-6 text-sm font-semibold text-center text-white border border-transparent rounded-md shadow bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600'
                >
                  Comprar {tier.name}
                </a> */}
                <Calendly
                  className='block w-full py-2 mt-6 text-sm font-semibold text-center text-white border border-transparent rounded-md shadow bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600'
                  text={`Comprar ${tier.name}`}
                />
              </div>

              {sections.map((section) => (
                <table key={section.name} className='w-full'>
                  <caption className='px-4 py-3 text-sm font-medium text-left text-gray-900 border-t border-gray-200 bg-gray-50 dark:text-gray-100 dark:bg-gray-900'>
                    {section.name}
                  </caption>
                  <thead>
                    <tr>
                      <th className='sr-only' scope='col'>
                        Características
                      </th>
                      <th className='sr-only' scope='col'>
                        Incluidas
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    {section.features.map((feature) => (
                      <tr key={feature.name} className='border-t border-gray-200'>
                        <th className='px-4 py-5 text-sm font-normal text-left text-gray-500 dark:text-gray-100' scope='row'>
                          {feature.name}
                        </th>
                        <td className='py-5 pr-4'>
                          {typeof feature.tiers[tier.name] === 'string'
                            ? (
                              <span className='block text-sm text-right text-gray-700 dark:text-gray-100'>{feature.tiers[tier.name]}</span>
                              )
                            : (
                              <>
                                {feature.tiers[tier.name] === true
                                  ? (
                                    <CheckIcon className='w-5 h-5 ml-auto text-green-500' aria-hidden='true' />
                                    )
                                  : (
                                    <MinusIcon className='w-5 h-5 ml-auto text-gray-400' aria-hidden='true' />
                                    )}

                                <span className='sr-only'>{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                              </>
                              )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}

              <div className='px-4 pt-5 border-t border-gray-200'>

                <Calendly
                  className='block w-full py-2 mt-6 text-sm font-semibold text-center text-white border border-transparent rounded-md shadow bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600'
                  text={`Comprar ${tier.name}`}
                />
              </div>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className='hidden lg:block'>
          <table className='w-full h-px table-fixed'>
            <caption className='sr-only'>Comparación de Precios</caption>
            <thead>
              <tr>
                <th className='pb-4 pl-6 pr-6 text-sm font-medium text-left text-gray-900 dark:text-gray-100' scope='col'>
                  <span className='sr-only'>Característica por</span>
                  <span>Planes</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className='w-1/4 px-6 pb-4 text-lg font-medium leading-6 text-left text-gray-900 dark:text-gray-100'
                    scope='col'
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='border-t border-gray-200 divide-y divide-gray-200 dark:border-gray-800 dark:divide-gray-800'>
              <tr>
                <th className='py-8 pl-6 pr-6 text-sm font-medium text-left text-gray-900 align-top dark:text-gray-100' scope='row'>
                  Precios
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className='h-full px-6 py-8 align-top'>
                    <div className='flex flex-col justify-between h-full'>
                      <div>
                        <p>
                          <span className='text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300'>${tier.priceMonthly}</span>
                          <span className='text-base font-medium text-gray-500 dark:text-gray-200'>mxn /mes</span>
                        </p>
                        <p className='mt-4 text-sm text-gray-500 dark:text-gray-300'>{tier.description}</p>
                      </div>

                      <Calendly
                        className='block w-full py-2 mt-6 text-sm font-semibold text-center text-white border border-transparent rounded-md shadow bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600'
                        text={`Comprar ${tier.name}`}
                      />
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className='py-3 pl-6 text-sm font-medium text-left text-gray-900 bg-gray-50 dark:bg-base-100 dark:text-gray-200'
                      colSpan={4}
                      scope='colgroup'
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th className='py-5 pl-6 pr-6 text-sm font-normal text-left text-gray-500 dark:text-gray-400' scope='row'>
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className='px-6 py-5'>
                          {typeof feature.tiers[tier.name] === 'string'
                            ? (
                              <span className='block text-sm text-gray-700 dark:text-gray-300'>{feature.tiers[tier.name]}</span>
                              )
                            : (
                              <>
                                {feature.tiers[tier.name] === true
                                  ? (
                                    <CheckIcon className='w-5 h-5 text-green-500' aria-hidden='true' />
                                    )
                                  : (
                                    <MinusIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
                                    )}

                                <span className='sr-only'>
                                  {feature.tiers[tier.name] === true ? 'Incluido' : 'No incluido'} en {tier.name}
                                </span>
                              </>
                              )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className='border-t border-gray-200 dark:border-gray-800'>
                <th className='sr-only' scope='row'>
                  Seleccione su plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className='px-6 pt-5'>

                    <Calendly
                      className='block w-full py-2 mt-6 text-sm font-semibold text-center text-white border border-transparent rounded-md shadow bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600'
                      text={`Comprar ${tier.name}`}
                    />
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Logo cloud */}
      <LogoSection />

      <div className='bg-gray-50 dark:bg-gray-900'>
        {/* FAQ */}
        <div className='px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-gray-100'>Preguntas Frecuentes</h2>
          <div className='mt-12'>
            <dl className='space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3'>
              {faqs.map((faq) => (
                <div key={faq.id} className='space-y-2'>
                  <dt className='text-lg font-medium leading-6 text-gray-900 dark:text-gray-100'>{faq.question}</dt>
                  <dd className='text-base text-gray-500 dark:text-gray-400'>{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Feature section with brand panel */}
      <div className='relative'>
        <div className='absolute inset-0 flex flex-col' aria-hidden='true'>
          <div className='flex-1 bg-gray-50 dark:bg-gray-900' />
          <div className='flex-1' />
        </div>
        <div className='relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:mb-36'>
          <div className='overflow-hidden rounded-lg shadow-xl bg-gradient-to-r from-orange-400 to-pink-500 lg:grid lg:grid-cols-2 lg:gap-4'>
            <div className='px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
              <div className='lg:self-center'>
                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                  <span className='block'>¿Estás listo para sumergirte?</span>
                  <span className='block text-red-900'>Solicita tu cotización gratuita ahora</span>
                </h2>
                <p className='mt-4 text-lg leading-6 text-orange-50'>
                  Solicita tu cotización gratuita ahora y comienza a disfrutar de todos los beneficios que te ofrece Marketing Web
                </p>

                <Calendly
                  className='inline-flex items-center px-6 py-3 mt-8 text-base font-medium text-red-600 bg-orange-100 border border-transparent rounded-md shadow hover:text-red-500'
                  text='Cotización Gratuita'
                />
              </div>
            </div>
            <div className='-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1'>
              <Image
                className='object-cover object-left-top transform translate-x-6 translate-y-6 rounded-md sm:translate-x-16 lg:translate-y-20'
                src='/images/search-console.jpg'
                alt='Página de Google Search Console con un informe de SEO de una página web de nuestro cliente'
                width={1364}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
