/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects () {
    return [
      {
        source: '/seo-wordpress.html',
        destination: '/posicionamiento-web',
        permanent: true
      },
      {
        source: '/posicionamiento-web.html',
        destination: '/posicionamiento-web',
        permanent: true
      },
      {
        source: '/seo-drupal.html',
        destination: '/posicionamiento-web',
        permanent: true
      },
      {
        source: '/seo-joomla.html',
        destination: '/posicionamiento-web',
        permanent: true
      },
      {
        source: '/diseno-web-wordpress.html',
        destination: '/diseno-web',
        permanent: true
      },
      {
        source: '/diseno-web.html',
        destination: '/diseno-web',
        permanent: true
      },
      {
        source: '/migraciones-de-drupal-a-wordpress.html',
        destination: '/diseno-web',
        permanent: true
      },
      {
        source: '/migraciones-de-joomla-a-wordpress.html',
        destination: '/diseno-web',
        permanent: true
      },
      {
        source: '/sistemas-de-reservaciones.html',
        destination: '/diseno-web',
        permanent: true
      },
      {
        source: '/redes-sociales.html',
        destination: '/redes-sociales',
        permanent: true
      },
      {
        source: '/marketing-digital.html',
        destination: '/marketing-digital',
        permanent: true
      },
      {
        source: '/google-shoping.html',
        destination: '/marketing-digital',
        permanent: true
      },
      {
        source: '/google-my-business.html',
        destination: '/marketing-digital',
        permanent: true
      },
      {
        source: '/pagina-negocios-facebook.html',
        destination: '/marketing-digital',
        permanent: true
      }
    ]
  },
  images: {
    domains: ['mlrsjyafnwfj.i.optimole.com', 'secure.gravatar.com', 'res.cloudinary.com']
  },
  env: {
    NEXT_PUBLIC_WORDPRESS_URL: process.env.NEXT_PUBLIC_WORDPRESS_URL
  }

}

module.exports = nextConfig
