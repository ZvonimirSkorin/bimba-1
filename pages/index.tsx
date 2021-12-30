import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/header"
import Article from "../components/article"



const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Bimba | Početna</title>
      <link rel="shortcut icon" href="/bimba.svg" />
    </Head>

    <Header/>

     <Article/>

    



    
    </>
  )
}

export default Home
