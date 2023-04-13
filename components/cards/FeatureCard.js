import { memo, useCallback, useState } from 'react'

const FeatureCard = memo(({ feature }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const onMouseMove = useCallback((event) => {
    const x = (window.innerWidth / 2 - event.clientX) / 50
    const y = (window.innerHeight / 2 - event.clientY) / 50
    const rotateX = y
    const rotateY = -x
    const translateY = -y * 0.2
    const translateX = -x * 0.2
    const scale = 1.05

    // Guardar la posición del ratón dentro de la tarjeta para usarla en el efecto de la flecha
    setMousePosition({
      x: event.clientX - event.currentTarget.getBoundingClientRect().left - event.currentTarget.offsetWidth + 100,
      y: event.clientY - event.currentTarget.getBoundingClientRect().top - event.currentTarget.offsetHeight - 50
    }
    )

    // Modificar el estilo de la tarjeta con los valores calculados
    event.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale}) translateX(${translateX}px) translateY(${translateY}px)`
    event.currentTarget.querySelector('.card-pointer').style.opacity = 1
  }, [])

  const onMouseLeave = useCallback((event) => {
    // Restablecer el estilo de la tarjeta al valor original
    event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateX(0) translateY(0)'
    event.currentTarget.style.zIndex = 0
    event.currentTarget.querySelector('.card-pointer').style.opacity = 0
  }, [])

  return (
    <div
      key={feature.name} className='pt-6'
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s linear',
        transform: isHovered ? 'perspective(1000px) rotateX(10deg) rotateY(5deg) scale(1.05)' : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
      }}
    >
      {/* 3d card hover effect framer motion */}

      <span className='relative z-20 inline-flex items-center justify-center p-3 -mb-16 rounded-md shadow-lg bg-gradient-to-r dark:from-primary dark:to-indigo-400 from-primary to-orange-300'>
        <feature.icon className='w-6 h-6 text-white' aria-hidden='true' />
      </span>
      <div className='absolute z-10 w-full px-6 pb-8 overflow-hidden bg-gray-100 bg-opacity-25 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm h-fit dark:bg-gray-900 dark:bg-opacity-25'>
        <div className='pt-6 -mt-6 '>

          <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-indigo-300 '>{feature.name}</h3>
          <p className='mt-5 text-base text-gray-500 dark:text-gray-50'>{feature.description}</p>
        </div>
      </div>
      <div
        className='px-6 pb-8 overflow-hidden bg-opacity-0 rounded-lg backdrop-filter backdrop-blur-[1px]'
      >
        <div className='pt-6 -mt-6 '>

          <h3 className='mt-8 text-lg font-medium tracking-tight text-transparent'>{feature.name}</h3>
          <p className='mt-5 text-base text-transparent'>{feature.description}</p>
        </div>
        <div
          className='absolute  bg-gradient-radial from-[rgba(255,255,0,0.25)] dark:from-[rgba(0,255,255,0.5)] dark:via-transparent via-transparent rounded-full opacity-0 pointer-events-none card-pointer w-[500px] h-[500px] -z-10'
          style={{

            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`,
            transition: 'opacity 0.5s linear'
          }}
        />
      </div>

    </div>
  )
})

FeatureCard.displayName = 'FeatureCard'

export default FeatureCard
