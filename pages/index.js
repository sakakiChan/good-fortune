import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home(data) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <h1>星座一覧を表示</h1>
      <p>{getStaticProps}</p>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const res=await fetch("http://api.jugemkey.jp/api/horoscope/free/2024/01/25")
  const constellations = await res.json()
     return {
    props: {constellations}
  }
}
