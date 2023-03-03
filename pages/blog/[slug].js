import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton, RedditIcon,
  RedditShareButton, TelegramIcon,
  TelegramShareButton, TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share'
import Post from '../../components/blog/Post'
import MainLayout from '../../components/layout/MainLayout'
import { getAllPostsFromAPI, getPostContentFromAPI } from '../../utils/functions'

// const HOST = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
export const url = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` || 'http://localhost:3000'
// The page for each post
export default function SinglePost ({ content, slug }) {
  // Destructure the content object from WordPress
  const {
    title,
    excerpt,
    content: postContent,
    date,
    tags,
    author_name: author,
    author_avatar: avatar,
    featured_image_src: bannerImage,
    slug: postSlug
    // reading_time
  } = content

  const heading = {
    title: title.rendered,
    excerpt: excerpt.rendered.replace(/<\/?[^>]+>/gi, '').substring(0, 200) + '...',
    date,
    author,
    avatar,
    bannerImage
    // reading_time
  }

  // // Prism for code highlighting

  // // date ISO 8601

  // const dateFormated = date.split('-')
  // const dateISO = `${dateFormated[2]}-${dateFormated[1]}-${dateFormated[0]}T00:00:00-04:00`

  // // tags converted to a single line string
  const tagsToHashtags = () => {
    if (tags && tags.length > 0) {
      return tags.map((tag) => `#${tag.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`).join(' ').toLowerCase()
    }
    return ''
  }

  // // tags converted to a array of strings
  const tagsToHashtagsArray = (tags) => {
    if (tags && tags.length > 0) {
      return tags.map((tag) => `${tag.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '')}`).join(' ').toLowerCase().split(' ')
    }
    return []
  }

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
      <Post heading={heading}>
        {/* remove all styles and classes and div from text */}
        <article className='mx-auto prose prose-img:rounded-md prose-img:shadow-md prose-img:mx-auto prose-code:break-words lg:prose-lg dark:prose-dark prose-h1:text-3xl' dangerouslySetInnerHTML={{ __html: postContent.rendered.replace(/style="[^"]*"/g, '').replace(/class="[^"]*"/g, '').replace(/<div[^>]*>/g, '').replace(/<\/div>/g, '') }} />
        {/* hashtags */}
        <div className='flex flex-wrap justify-center mt-10'>
          {tags && tags.map((tag, index) => (
            <div key={index} className='mr-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:underline'>
              #{tag.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').toLowerCase()}
            </div>
          ))}

        </div>
        {/* share title */}
        <div className='flex flex-wrap justify-center mt-10'>
          <div className='mr-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'>
            Comparte este artículo con tus amigos en las redes sociales
          </div>
        </div>
        <div className='flex flex-wrap justify-center mt-10'>
          <div className='mr-2 text-sm duration-300 rounded-full hover:shadow-md hover:scale-110'>
            <FacebookShareButton url={`${url}/blog/${postSlug}`} quote={title.rendered} hashtag={tagsToHashtags} className='flex items-center'>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div className='mr-2 text-sm duration-300 rounded-full hover:shadow-md hover:scale-110'>
            <TwitterShareButton url={`${url}/blog/${postSlug}`} title={title.rendered} hashtags={tagsToHashtagsArray(tags)} className='flex items-center'>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div className='mr-2 text-sm duration-300 rounded-full hover:shadow-md hover:scale-110'>
            <LinkedinShareButton url={`${url}/blog/${postSlug}`} title={title.rendered} summary={heading.excerpt} source='https://marketingweb.com.mx' className='flex items-center'>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
          <div className='mr-2 text-sm duration-300 rounded-full hover:shadow-md hover:scale-110 md:hidden'>
            <WhatsappShareButton url={`${url}/blog/${postSlug}`} title={title.rendered} separator=':: ' className='flex items-center'>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
          <div className='mr-2 text-sm duration-300 rounded-full hover:shadow-md hover:scale-110'>
            <TelegramShareButton url={`${url}/blog/${postSlug}`} title={title.rendered} className='flex items-center'>
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </div>
          <div className='mr-2 text-sm duration-300 rounded-full hover:shadow-md hover:scale-110'>
            <RedditShareButton url={`${url}/blog/${postSlug}`} title={title.rendered} windowWidth={800} windowHeight={600} className='flex items-center'>
              <RedditIcon size={32} round />
            </RedditShareButton>
          </div>
        </div>

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
    },
    revalidate: 10
  }
}
