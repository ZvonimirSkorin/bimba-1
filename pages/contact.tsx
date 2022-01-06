import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import ContactFormRetro from "../components/Contact/ContactFormRetro";
import { ContactHeader } from "../components/Contact/ContactHeader";
import ContactInfo from "../components/Contact/ContactInfo";
import { Picture } from "../components/SharedComponents/Image";
import styles from "./../styles/Contact.module.scss";
const Contact: NextPage = () => {
  const Map = dynamic(
    () => import("../components/Leaflet/Map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  return (
    <div style={{background:"#EAF6FF"}}>
      <Head>
        <title>Kontakt | Bimba</title>
        <link rel="shortcut icon" href="/bimba.svg" />
      </Head>
      <ContactHeader />

      <div style={{width:"80%",margin:"auto"}}>
        <section className={styles.ContentWrapper} style={{ backgroundColor: "#EAF6FF" }}>
          <ContactFormRetro title="Imate pitanje?" />
          <ContactInfo />
        </section>

        <section className={styles.MapWrapper}>
          <Map ZoomIn={17} open={"Bimba"} zIndex={true} koordinate={[{ city: "Bimba", lat: 45.803276648111506, lng: 15.9024145 }]} />
          <Picture src="/BimbaShop.jpg" style={styles.Image} />
        </section>
      </div>
    </div>
  );
};

export default Contact;
