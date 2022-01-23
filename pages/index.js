import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DeStored home</title>
        <meta name="description" content="A website where you can upload and download files using the decentralized IPFS network." />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a target="_blank" href="https://github.com/lalamiko7/DeStored">DeStored</a>
        </h1>

        <p className={styles.description}>
          A user interface for accessing <a target="_blank" href="https://ipfs.io">IPFS</a> files.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <Image src="http://127.0.0.1:8080/ipfs/QmdDijyxvU5muSP9FCywbvbKbJZFKcw3fYG2zcqDHiWNhR"
                   alt="Test picture of monkey" width={500} height={400}/>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
