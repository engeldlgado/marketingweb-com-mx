import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsApp () {
  return (
    <FloatingWhatsApp
      phoneNumber='523321214067'
      statusMessage='En un momento te contestamos'
      chatMessage='Hola! 🤝 En qué podemos ayudarte?'
      accountName='Marketing Web'
      avatar='/images/logo.jpg'
      placeholder='Escribe tu mensaje...'
      allowClickAway
    />
  )
}
