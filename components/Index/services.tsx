import styles from "./services.module.scss"
import Image from "next/image"
import Link from "next/link";

function Services() {

    
  
    
  
    return(
        <div className={styles.servicesBg}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Što nudimo</h1>
                <h2 className={styles.h2}>Naše usluge</h2>
                <div className={styles.servicesWrapper}>
                    {new Array(6).fill(0).map((v) => {
                    return <div className={styles.serviceBox}><h2 key={v}>Lorem ipsum sincor venetur</h2><p>We can offer pet house visits. If you would like to arrange for one of our vets to make a house call please phone us to talk to the nurses & we will do our best to arrange a mutually suitable consultation time.</p></div>
                    ;})}
                </div>
            </div>

            <svg className={styles.svg} width="100%" viewBox="0 0 644 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M643.5 51C385.999 66.8958 245.041 57.4658 1.00001 1L1 69H643.5V51Z" fill="#EAF6FF" stroke="#EAF6FF" />
            </svg>
        </div>
        
        
        
    );
}

export default Services;