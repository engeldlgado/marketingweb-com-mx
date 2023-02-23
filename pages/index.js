import MainHero from '@/components/hero/MainHero'
import Layout from '@/components/layout/MainLayout'
import MidSection from '@/components/sections/MidSection'

export default function Home () {
  return (
    <Layout
      title='Agencia de Posicionamiento Web y SEO para el Marketing Web Digital'
      description='Mejora tu posicionamiento en línea con nuestros servicios de SEO y optimización de sitios web. Agencia Marketing Web y digital. SEO Google.'
    >
      <MainHero />
      <MidSection />

    </Layout>
  )
}
