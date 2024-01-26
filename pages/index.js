import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
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
        <p>{getStaticProps}</p>
      </main>
      <Footer />
    </div>
  )
}
  
export const getStaticProps = async () => {
  const res=await fetch("http://api.jugemkey.jp/api/horoscope/free/2024/01/25")
  const data=await res.json()
  
  return {
    props:{data}
  }
}
