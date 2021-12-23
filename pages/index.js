import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Did Randy Win The League Yet?"</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Did Randy Win The League Yet?" />
        <p className="description">
          <H1>NO</H1>
        </p>
      </main>

      <Footer />
    </div>
  )
}
