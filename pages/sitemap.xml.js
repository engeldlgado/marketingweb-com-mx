import LRUCache from 'lru-cache'
import { getAllPostsFromAPI } from '../utils/functions'

const EXTERNAL_DATA_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const cache = new LRUCache({
  max: 1000,
  maxAge: 1000 * 60 * 60 * 24 // 1 day
})

function generateSiteMap (posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${BASE_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
     </url>
     <url>
        <loc>${`${BASE_URL}/blog`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
     </url>
     <url>
        <loc>${`${BASE_URL}/contacto`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${`${BASE_URL}/posicionamiento-web`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${`${BASE_URL}/diseno-web`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${`${BASE_URL}/marketing-digital`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${`${BASE_URL}/redes-sociales`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>

     ${posts
       .map(({ slug, modified_gmt: modified }) => {
         const isoModified = new Date(modified).toISOString()
         return `
       <url>
           <loc>${`${BASE_URL}/blog/${slug}`}</loc>
           <lastmod>${isoModified}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap () {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps ({ res }) {
  const cacheKey = 'sitemap'

  // Check if the response is already in the cache
  const cachedResponse = cache.get(cacheKey)
  if (cachedResponse) {
    res.setHeader('Content-Type', 'text/xml')
    res.write(cachedResponse)
    res.end()

    return {
      props: {}
    }
  }

  // If the response is not in the cache, make the API call
  const request = await getAllPostsFromAPI({
    url: EXTERNAL_DATA_URL
  })

  // Generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(request)

  // Store the response in the cache
  cache.set(cacheKey, sitemap)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default SiteMap
