import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Index/header";
import Article from "../components/Index/article";
import Facebook from "../components/Index/facebook";
import Services from "../components/Index/services";
import Gallery from "../components/Index/gallery";
import { WalkingLoader } from "../components/SharedComponents/WalkingLoader";
import { Loader } from "../components/SharedComponents/Loader";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bimba | Početna</title>
        <link rel="shortcut icon" href="/bimba.svg" />
      </Head>
      

      <Header />

      <Article />

      <Facebook/>

      <Services/>

      <Gallery/>
    </>
  );
};

export default Home;
