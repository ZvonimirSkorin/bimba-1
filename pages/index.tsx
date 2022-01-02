import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Article from "../components/article";
import Facebook from "../components/facebook";
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
    </>
  );
};

export default Home;
