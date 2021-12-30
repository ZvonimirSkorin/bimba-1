import Link from "next/link"
import styles from "./nav.module.scss"
import Image from "next/image"

function Navigation() {

    
  
    
  
      return(
          <body className={styles.body}>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.navContent}>
                            <div className={styles.img}>
                                <Image src="/Bimba.svg" alt="" width={100}height={100}/>
                            </div>

                            <div className={styles.navLinks}>
                                <Link href="/"><a className={styles.active}>Početna</a></Link>
                                <Link href="/"><a>O nama</a></Link>
                                <Link href="/"><a>Kontakt</a></Link>
                            </div>
                        </div>
                </div>
            </nav>
          </body>
          
          
      );
  }
  
  export default Navigation;