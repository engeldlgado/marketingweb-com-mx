import MainHero from '@/components/hero/MainHero'
import Layout from '@/components/layout/MainLayout'
import { LogoSection } from '@/components/sections/LogoSection'
import MidSection from '@/components/sections/MidSection'
import Stats from '@/components/sections/Stats'

export default function Home ({ posts }) {
  console.log('posts: ', posts)
  return (
    <Layout
      title='Agencia de Posicionamiento Web y SEO para el Marketing Web Digital'
      description='Mejora tu posicionamiento en línea con nuestros servicios de SEO y optimización de sitios web. Agencia Marketing Web y digital. SEO Google.'
    >
      <MainHero />
      <MidSection posts={posts} />
      <LogoSection />
      <Stats />

    </Layout>
  )
}

export async function getStaticProps () {
  const res = await fetch('https://marketingweb.com.mx/blog/wp-json/wp/v2/posts/', {
    // wordpress api cors error

    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
    }
  })

  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}
