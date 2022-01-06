import type { NextPage } from "next";
import Head from "next/head";

import { AboutHeader } from "../components/About/header";
import { Iskustva } from "../components/About/Iskustva";
import { Section1 } from "../components/About/Section1";
import { Section2 } from "../components/About/Section2";
import { Section3 } from "../components/About/Section3";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>O nama | Bimba</title>
        
      </Head>

      <AboutHeader />
      <Section1 />
      <Section2 />
      <Section3 />
      <Iskustva />
    </>
  );
};

export default Home;
