import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from "./tst.module.scss"
import Image from "next/image"
import Link from "next/link";


function Testimonials() {

    
  
    
  
    return(<>
       
        <div className={styles.tstBg}>
        

            <div className={styles.container}>
                <h1 className={styles.h1}>Iskustva klijenata</h1>
                <Carousel className={styles.wrapper}
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={false}
                
                >
                    <div className={styles.tstBox}>
                        <h1>Jakov Roguljic</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                    </div>

                    <div className={styles.tstBox}>
                        <h1>Roga Jakovic</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .</p>
                    </div>

                    <div className={styles.tstBox}>
                        <h1>Rega Regic</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                    </div>

                </Carousel>
            </div>
        </div></>
        
        
        
    );
}

export default Testimonials;