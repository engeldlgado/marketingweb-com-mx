import MainHero from '@/components/hero/MainHero'
import Layout from '@/components/layout/MainLayout'
import { LogoSection } from '@/components/sections/LogoSection'
import MidSection from '@/components/sections/MidSection'
import Stats from '@/components/sections/Stats'
import { getLatestPostsFromAPI } from '@/utils/functions'

export default function Home ({ posts }) {
  const structureData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Marketing Web Agencia de Posicionamiento Web y SEO para el Marketing Digital',
      alternateName: 'Marketing Web',
      url: 'https://marketingweb.com.mx',
      logo: 'https://marketingweb.com.mx/images/logo.jpg',
      sameAs: [
        'https://www.twitter.com/wwwmarketingweb/',
        'https://www.instagram.com/mkwagencia/',
        'https://www.facebook.com/marketingweb/'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: 'https://marketingweb.com.mx',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://marketingweb.com.mx/blog?search={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      url: 'https://marketingweb.com.mx',
      name: 'Marketing Web Agencia de Posicionamiento Web y SEO para el Marketing Digital',
      description: 'Con Marketing Web mejora tu posicionamiento web en línea con nuestros servicios de SEO y optimización de sitios web. Agencia Marketing digital. SEO Google.',
      publisher: {
        '@type': 'Organization',
        name: 'Marketing Web Agencia de Posicionamiento Web y SEO para el Marketing Digital',
        logo: {
          '@type': 'ImageObject',
          url: 'https://marketingweb.com.mx/images/logo.jpg'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://marketingweb.com.mx'
      },
      image: {
        '@type': 'ImageObject',
        url: 'https://marketingweb.com.mx/images/logo.jpg'
      }
    }
  ]
  return (
    <Layout
      title='Marketing Web Agencia de Posicionamiento Web, SEO y Marketing Digital'
      description='Con Marketing Web mejora tu posicionamiento web, servicios de SEO y optimización de sitios web, Marketing Digital.'
      ogType='website'
      ogImage='https://marketingweb.com.mx/images/logo.jpg'
      ogUrl='https://marketingweb.com.mx'
      schemaObject={structureData}
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
