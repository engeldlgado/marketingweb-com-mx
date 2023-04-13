import { memo, useCallback, useRef, useState } from 'react'

const FeatureCard = memo(({ feature }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)
  const updateCardStyle = useCallback((rotateX, rotateY, scale, translateX, translateY, opacity) => {
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale}) translateX(${translateX}px) translateY(${translateY}px)`
    cardRef.current.querySelector('.card-pointer').style.opacity = opacity
  }, [])

  const onMouseMove = useCallback((event) => {
    const cardWidth = cardRef.current.offsetWidth
    const cardHeight = cardRef.current.offsetHeight
    const mouseX = event.clientX - cardRef.current.getBoundingClientRect().left - cardWidth + 100
    const mouseY = event.clientY - cardRef.current.getBoundingClientRect().top - cardHeight - 50
    const x = (window.innerWidth / 2 - event.clientX) / 50
    const y = (window.innerHeight / 2 - event.clientY) / 50
    const rotateX = y
    const rotateY = -x
    const translateY = -y * 0.2
    const translateX = -x * 0.2
    const scale = 1.05

    setMousePosition({ x: mouseX, y: mouseY })
    updateCardStyle(rotateX, rotateY, scale, translateX, translateY, 1)
  }, [updateCardStyle])

  const onMouseLeave = useCallback(() => {
    updateCardStyle(0, 0, 1, 0, 0, 0)
  }, [updateCardStyle])

  return (
    <div
      ref={cardRef}
      key={feature.name}
      className='pt-6'
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
