import MainHero from '@/components/hero/MainHero'
import Layout from '@/components/layout/MainLayout'
import { LogoSection } from '@/components/sections/LogoSection'
import MidSection from '@/components/sections/MidSection'
import Stats from '@/components/sections/Stats'
import { getLatestPostsFromAPI } from '@/utils/functions'

export default function Home ({ posts }) {
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
  const BlogURL = process.env.NEXT_PUBLIC_WORDPRESS_URL
  const posts = await getLatestPostsFromAPI(BlogURL)

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}
