import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import React from 'react'
import TsDoc from '@/component/tsdoc/tsdoc'

export default function Home() {

  return (
    <>
      <Head>
        <title>Documenting JavaScript</title>
        <meta name="description" content="Documenting JavaScript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className={styles.codeDocumenting}>Code Documenting</div>
        <TsDoc />
      </body>
    </>
  )
}
