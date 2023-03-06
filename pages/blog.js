import Pagination from '@/components/buttons/Pagination'
import { useEffect, useState } from 'react'
import MainBlog from '../components/blog/MainBlog'
import BlogHero from '../components/hero/BlogHero'
import MainLayout from '../components/layout/MainLayout'
import { getPostsFromAPI } from '../utils/functions'

const BlogURL = process.env.NEXT_PUBLIC_WORDPRESS_URL

export default function Blog ({ posts, totalPages, totalPosts }) {
  const [currentPage, setCurrentPage] = useState(0)
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

  const structureData = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      name: 'Blog de soluciones de desarrollo web y marketing | EngelDelgado',
      url: 'https://engeldelgado.com/blog',
      description: 'Aprende a mejorar tu presencia en línea con nuestros artículos de desarrollo web y marketing. Explora nuestras soluciones innovadoras y conviértete en un experto en el tema.',
      image: 'https://engeldelgado.com/imagenes/logo.jpg'
    }
  ]
  return (
    <MainLayout
      title='Blog de soluciones innovadoras de desarrollo web y marketing'
      description='Aprende a mejorar tu presencia en línea con nuestros artículos de desarrollo web y marketing. Explora nuestras soluciones innovadoras y conviértete en un experto en el tema.'
      ogType='website'
      ogUrl='https://engeldelgado.com/blog'
      ogImage='https://engeldelgado.com/imagenes/Imagine-og.jpg'
      ogDescription='Aquí encontrarás contenido actualizado sobre soluciones de desarrollo web y marketing. Explora nuestros artículos y aprende cómo mejorar tu presencia en línea.'
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
