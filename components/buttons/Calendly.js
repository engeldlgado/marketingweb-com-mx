import { useEffect, useRef, useState } from 'react'
// import { PopupButton } from 'react-calendly'
import dynamic from 'next/dynamic'

const PopupButton = dynamic(() => import('react-calendly').then(mod => mod.PopupButton), { ssr: false })

export default function Calendly ({ text, className }) {
  const calendlyRef = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    calendlyRef.current = document.getElementById('contact')
    setMounted(true)
  }, [])

  return mounted
    ? (

      <PopupButton
        url='https://calendly.com/marketingweb/tienes-dudas-para-emprender-tu-nuevo-proyecto-te-ayudamos'
        text={text}
        className={className}
        rootElement={calendlyRef.current}
      />

      )
    : null
}
