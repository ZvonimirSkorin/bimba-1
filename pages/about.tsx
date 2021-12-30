import type { NextPage } from "next";
import Head from "next/head";

import { AboutHeader } from "../components/About/header";
import { Section1 } from "../components/About/Section1";
import { Section2 } from "../components/About/Section2";
import { Section3 } from "../components/About/Section3";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bimba | Početna</title>
        <link rel="shortcut icon" href="/bimba.svg" />
      </Head>

      <AboutHeader />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
};

export default Home;
