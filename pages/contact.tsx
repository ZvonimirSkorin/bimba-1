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
    <>
      <Head>
        <title>Kontakt | Bimba</title>
        <link rel="shortcut icon" href="/bimba.svg" />
      </Head>
      
      <div style={{background:"#EAF6FF",position:"relative"}}>
        <ContactHeader />

        <div style={{width:"80%",margin:"auto"}}>

          <section className={styles.ContentWrapper} style={{ backgroundColor: "#EAF6FF" }}>
            <ContactFormRetro title="Imate pitanje?" />

            <ContactInfo />

          </section>
        </div>
        <svg className={styles.BottomShape} width="100%" viewBox="0 0 765 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 82.5V1.5C302.248 103.34 469.591 105.27 764.5 1.5V82.5H0.5Z" fill="white" stroke="white" />
          </svg>
      </div>
         
      <div style={{position:"relative"}}>
        <div style={{width:"80%",margin:"auto"}}>

          <section className={styles.MapWrapper}>
            <Map ZoomIn={17} open={"Bimba"} zIndex={true} koordinate={[{ city: "Bimba", lat: 45.803276648111506, lng: 15.9024145 }]} />
            <Picture src="/BimbaShop.JPG" style={styles.Image} />
          </section>

        </div>
        <svg className={styles.BottomShape} width="100%" viewBox="0 0 765 83" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 82.5V1.5C302.248 103.34 469.591 105.27 764.5 1.5V82.5H0.5Z" fill="#EAF6FF" stroke="#EAF6FF" />
        </svg>
      </div>
      </>
    
  );
};

export default Contact;
