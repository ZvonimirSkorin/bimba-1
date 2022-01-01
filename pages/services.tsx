import type { NextPage } from "next";
import Head from "next/head";
import { Prices } from "../components/Services/Prices";
import styles from "../styles/Service.module.scss";
import { AboutHeader } from "../components/About/header";
import { ServicesHeader } from "../components/Services/header";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bimba | Usluge</title>
        <link rel="shortcut icon" href="/bimba.svg" />
      </Head>
      <ServicesHeader />
      <Prices />
    </>
  );
};

export default Home;
