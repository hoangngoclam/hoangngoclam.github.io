import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lam's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my <a href="https://hoangngoclam.github.io/">Portfolio</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        Making by Trương Hoàng Ngọc Lâm (2022)
      </footer>
    </div>
  )
}
