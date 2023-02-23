import MainHero from '@/components/hero/MainHero'
import Layout from '@/components/layout/MainLayout'

export default function Home () {
  return (
    <Layout
      title='IA Store | Home'
      description='IA Store is a web application that allows you to buy and sell your products online.'
    >
      <MainHero />

    </Layout>
  )
}
