import Pagination from '@/components/buttons/Pagination'
import { useEffect, useState } from 'react'
import MainBlog from '../components/blog/MainBlog'
import BlogHero from '../components/hero/BlogHero'
import MainLayout from '../components/layout/MainLayout'
import { getPostsFromAPI, getPostsFromSearchAPI } from '../utils/functions'

const BlogURL = process.env.NEXT_PUBLIC_WORDPRESS_URL

export default function Blog ({ posts, totalPages, totalPosts }) {
  const [currentPage, setCurrentPage] = useState(0)
  // const [query, setQuery] = useState('')
  const [postList, setPostList] = useState({
    posts,
    totalPages,
    totalPosts
  })

  useEffect(() => {
    getPostsFromAPI(BlogURL, 12, currentPage + 1).then((data) => {
      setPostList(data)
    })
  }, [currentPage])

  useEffect(() => {
    // check if there query string in the url for search
    const urlParams = new URLSearchParams(window.location.search)
    const search = urlParams.get('search')
    if (search) {
      getPostsFromSearchAPI(BlogURL, 12, 1, search).then((data) => {
        setPostList(data)
      })
    }
  }, [])

  const structureData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Agencia de Posicionamiento Web y SEO para el Marketing Web Digital',
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
      name: 'Agencia de Posicionamiento Web y SEO para el Marketing Web Digital',
      description: 'Mejora tu posicionamiento en línea con nuestros servicios de SEO y optimización de sitios web. Agencia Marketing Web y digital. SEO Google.',
      publisher: {
        '@type': 'Organization',
        name: 'Agencia de Posicionamiento Web y SEO para el Marketing Web Digital',
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
    <MainLayout
      title='Blog | Agencia de Posicionamiento Web y SEO para el Marketing Web Digital'
      description='Mejora tu posicionamiento en línea con nuestros servicios de SEO y optimización de sitios web. Agencia Marketing Web y digital. SEO Google.'
      ogType='website'
      ogImage='https://marketingweb.com.mx/images/logo.jpg' // TODO: add image
      ogUrl='https://marketingweb.com.mx/blog'
      ogDescription='Mejora tu posicionamiento en línea con nuestros servicios de SEO y optimización de sitios web. Agencia Marketing Web y digital. SEO Google.'
      schemaObject={structureData}
    >
      <BlogHero />
      <div className='relative py-16 bg-gray-50 dark:bg-base-100 sm:py-24 lg:py-24'>
        <div className='relative max-w-[90%] mx-auto'>
          <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
            <p className='text-base font-semibold tracking-wider uppercase dark:text-primary text-secondary'>¡Crece cada día!</p>
            <h1 className='max-w-2xl mx-auto mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
              Nuestro blog
            </h1>
            <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
              Encuentra consejos y estrategias en nuestro blog de marketing digital
            </p>
          </div>
          <Pagination
            totalItems={postList.totalPosts}
            itemsPerPage={12}
            currentPage={currentPage}
            totalPages={postList.totalPages}
            setCurrentPage={setCurrentPage}
          >
            <MainBlog posts={postList.posts} />
          </Pagination>
        </div>
      </div>
    </MainLayout>
  )
}

// export async function getStaticProps () {
//   const posts = await getPostsFromAPI(BlogURL, 12, 1)
//   return {
//     props: {
//       posts: posts.posts,
//       totalPages: posts.totalPages,
//       totalPosts: posts.totalPosts
//     },
//     revalidate: 10
//   }
// }
