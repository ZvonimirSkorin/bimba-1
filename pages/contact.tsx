import type { NextPage } from "next";
import Head from "next/head";
import ContactFormRetro from "../components/Contact/ContactFormRetro";
import { ContactHeader } from "../components/Contact/ContactHeader";
import ContactInfo from "../components/Contact/ContactInfo";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bimba | O nama</title>
        <link rel="shortcut icon" href="/bimba.svg" />
      </Head>
      <ContactHeader />
      <ContactFormRetro title="Imate pitanje?" />
      <ContactInfo />
    </>
  );
};

export default Contact;
