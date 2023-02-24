
const FeatureCard = ({ feature }) => {
  const onMouseMove = (event) => {
    const x = (window.innerWidth / 2 - event.clientX) / 50
    const y = (window.innerHeight / 2 - event.clientY) / 50
    const rotateX = y
    const rotateY = -x
    const translateY = -y * 0.2
    const translateX = -x * 0.2
    const scale = 1.05

    // Modificar el estilo de la tarjeta con los valores calculados
    event.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale}) translateX(${translateX}px) translateY(${translateY}px)`
  }

  const onMouseLeave = (event) => {
    // Restablecer el estilo de la tarjeta al valor original
    event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateX(0) translateY(0)'
  }

  return (
    <div key={feature.name} className='pt-6 framer' style={{ perspective: 500 }}>
      {/* 3d card hover effect framer motion */}
      <div
        className='flow-root px-6 pb-8 rounded-lg bg-gray-50 dark:bg-gray-900'
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.2s linear'
        }}

      >
        <div className='-mt-6 pointer-events-none'>
          <div>
            <span className='inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r dark:from-primary dark:to-indigo-400 from-secondary to-orange-300'>
              <feature.icon className='w-6 h-6 text-white' aria-hidden='true' />
            </span>
          </div>
          <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-indigo-500'>{feature.name}</h3>
          <p className='mt-5 text-base text-gray-500 dark:text-gray-50'>{feature.description}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
