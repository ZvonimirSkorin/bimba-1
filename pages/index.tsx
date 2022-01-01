import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Article from "../components/article";
import { WalkingLoader } from "../components/SharedComponents/WalkingLoader";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bimba | Početna</title>
        <link rel="shortcut icon" href="/bimba.svg" />
      </Head>

      <Header />

      <Article />
    </>
  );
};

export default Home;
