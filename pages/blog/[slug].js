// import {
//   FacebookIcon,
//   FacebookShareButton,
//   LinkedinIcon,
//   LinkedinShareButton, RedditIcon,
//   RedditShareButton, TelegramIcon,
//   TelegramShareButton, TwitterIcon,
//   TwitterShareButton,
//   WhatsappIcon,
//   WhatsappShareButton
// } from 'react-share'
import Post from '../../components/blog/Post'
import MainLayout from '../../components/layout/MainLayout'
import { getAllPostsFromAPI, getPostContentFromAPI } from '../../utils/functions'

// const HOST = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

// The page for each post
export default function SinglePost ({ content, slug }) {
  // Destructure the content object from WordPress
  const {
    // title,
    // excerpt,
    content: postContent
    // date,
    // tags,
    // author_name,
    // author_avatar,
    // featured_image_src,
    // reading_time
  } = content

  // // Prism for code highlighting

  // // date ISO 8601

  // const dateFormated = date.split('-')
  // const dateISO = `${dateFormated[2]}-${dateFormated[1]}-${dateFormated[0]}T00:00:00-04:00`

  // // tags converted to a single line string
  // const tagsToHashtags = tags.map((tag) => `#${tag.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`).join(' ').toLowerCase()

  // // tags converted to a array of strings
  // const tagsToHashtagsArray = (tags) => tags.map((tag) => `${tag.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '')}`).join(' ').toLowerCase().split(' ')

  // const structureData = [
  //   {
  //     '@context': 'https://schema.org/',
  //     '@type': 'BlogPosting',
  //     mainEntityOfPage: {
  //       '@type': 'WebPage',
  //       '@id': `https://engeldelgado.com/post/${slug}`
  //     },
  //     headline: title,
  //     description: excerpt,
  //     image: {
  //       '@type': 'ImageObject',
  //       url: bannerImage,
  //       width: '1920',
  //       height: '1080'
  //     },
  //     author: {
  //       '@type': 'Person',
  //       name: author,
  //       url: 'https://engeldelgado.com'
  //     },
  //     publisher: {
  //       '@type': 'Organization',
  //       name: 'Engelbert Vizcaya',
  //       logo: {
  //         '@type': 'ImageObject',
  //         url: 'https://engeldelgado.com/imagenes/logo.jpg',
  //         width: '500',
  //         height: '500'
  //       }
  //     },
  //     datePublished: dateISO,
  //     dateModified: dateISO
  //   }
  // ]

  return (
    <MainLayout>
      <Post>
        <article className='mx-auto prose prose-img:rounded-md prose-img:shadow-md prose-code:break-words lg:prose-lg dark:prose-dark' dangerouslySetInnerHTML={{ __html: postContent.rendered }} />
        {/* hashtags */}
        {/* <div className='flex flex-wrap justify-center mt-10'>
          {tags.map((tag, index) => (
            <div key={index} className='mr-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:underline'>
              #{tag.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').toLowerCase()}
            </div>
          ))}
        </div> */}
        {/* share title */}
        <div className='flex flex-wrap justify-center mt-10'>
          <div className='mr-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'>
            Comparte este artículo con tus amigos en las redes sociales
          </div>
        </div>
        {/* <div className='flex flex-wrap justify-center mt-10'>
          <div className='mr-2 text-sm duration-300 rounded-full hover:shadow-md hover:scale-110'>
            <FacebookShareButton url={`https://engeldelgado.com/post/${slug}`} quote={title} hashtag={tagsToHashtags} className='flex items-center'>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div className='mr-2 text-sm duration-300 rounded-full hover:shadow-md hover:scale-110'>
            <TwitterShareButton url={`https://engeldelgado.com/post/${slug}`} title={title} hashtags={tagsToHashtagsArray(tags)} className='flex items-center'>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div className='mr-2 text-sm duration-300 rounded-full hover:shadow-md hover:scale-110'>
            <LinkedinShareButton url={`https://engeldelgado.com/post/${slug}`} title={title} summary={excerpt} source='https://engeldelgado.com' className='flex items-center'>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
          <div className='mr-2 text-sm duration-300 rounded-full hover:shadow-md hover:scale-110 md:hidden'>
            <WhatsappShareButton url={`https://engeldelgado.com/post/${slug}`} title={title} separator=':: ' className='flex items-center'>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
          <div className='mr-2 text-sm duration-300 rounded-full hover:shadow-md hover:scale-110'>
            <TelegramShareButton url={`https://engeldelgado.com/post/${slug}`} title={title} className='flex items-center'>
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </div>
          <div className='mr-2 text-sm duration-300 rounded-full hover:shadow-md hover:scale-110'>
            <RedditShareButton url={`https://engeldelgado.com/post/${slug}`} title={title} windowWidth={800} windowHeight={600} className='flex items-center'>
              <RedditIcon size={32} round />
            </RedditShareButton>
          </div>
        </div> */}

      </Post>
    </MainLayout>
  )
}

// Generating the paths for each post
export async function getStaticPaths () {
  // Get list of all posts from WordPress
  const BlogURL = process.env.NEXT_PUBLIC_WORDPRESS_URL
  const posts = await getAllPostsFromAPI({
    url: BlogURL
  })

  // Create paths with `slug` param
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }))
  return {
    paths,
    fallback: 'blocking'
  }
}

// Fetch necessary data for the blog post using params.slug
export async function getStaticProps ({ params }) {
  // Get list of all posts from WordPress
  const BlogURL = process.env.NEXT_PUBLIC_WORDPRESS_URL

  // Find the current post by slug
  const post = params.slug

  // Get the content of the current post
  const content = await getPostContentFromAPI(BlogURL, post)

  // Return the post content as props
  return {
    props: {
      post,
      content
    }
  }
}
