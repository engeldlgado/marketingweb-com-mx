import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const MainBlog = ({ posts, postLength }) => {
  const [postData, setPostData] = useState([])

  useEffect(() => {
    if (posts) {
      const postArray = []

      posts.map(post => {
        const postObject = {
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<\/?[^>]+>/gi, '').substring(0, 200) + '...',
          slug: `/blog/${post.slug}`,
          date: post.date,
          featuredImage: post.featured_image_src,
          author: post.author_name,
          avatar: post.author_avatar,
          readTime: post.reading_time
        }
        return postArray.push(postObject)
      })

      setPostData(postArray)
    }
  }, [posts])
  const orderedPosts = postData.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  function limitPosts (posts, limit) {
    return posts.slice(0, limit)
  }
  return (
    <div className='grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl'>
      {limitPosts(orderedPosts, postLength).map((post, index) => {
        return (

          <article key={index} className='flex flex-col overflow-hidden rounded-lg shadow-lg post'>
            <div className='flex-shrink-0'>
              <Link href={post.slug}>
                <Image className='object-cover w-full h-48' src={post.featuredImage} alt={post.title} width={500} height={500} itemProp='image' itemScope itemType='https://schema.org/ImageObject' />
              </Link>
            </div>
            <div className='flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-900'>
              <div className='flex-1'>
                {/* <p className='text-sm font-medium text-secondary dark:text-primary'>
                  {post.category}
                </p> */}
                <Link href={post.slug} className='block mt-2'>
                  <p className='text-xl font-semibold text-gray-900 dark:text-gray-50'>{post.title}</p>
                  <p className='mt-3 text-base text-gray-500 dark:text-gray-200'>{post.excerpt}</p>
                </Link>
              </div>
              <div className='flex items-center mt-6'>
                <div className='flex-shrink-0'>

                  <Image className='w-10 h-10 rounded-full shadow-md' src={post.avatar} alt={post.author} width={500} height={500} itemProp='image' itemScope itemType='https://schema.org/ImageObject' />

                </div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-gray-900 dark:text-gray-50'>

                    {post.author}

                  </p>
                  <div className='flex space-x-1 text-sm text-gray-500'>
                    {/* Date in spanish mexico */}
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    <span aria-hidden='true'>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

        )
      })}
    </div>
  )
}

export default MainBlog
