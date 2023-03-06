/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mlrsjyafnwfj.i.optimole.com', 'secure.gravatar.com']
  },
  env: {
    NEXT_PUBLIC_WORDPRESS_URL: process.env.NEXT_PUBLIC_WORDPRESS_URL
  }

}

module.exports = nextConfig
