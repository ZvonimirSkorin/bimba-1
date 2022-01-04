import styles from "./article.module.scss"
import Image from "next/image"
import Link from "next/link";

function Article() {

    
  
    
  
    return(
        
        <div className={styles.container}>
            <article className={styles.article}>
                <section className={styles.section}>
                    <h1>O nama</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <Link href="/about"><a className={styles.link}>Više</a></Link>
                </section>

                <aside className={styles.aside}>
                    

                    <h2>Kontakt</h2>
                    <p>Naš broj telefona<br/><a href="tel:091-274-6382">091 274 6382</a></p>

                    <p>Adresa<br/><span>Ivane Brlić Mažuranić 55, 10000, Zagreb</span></p>
                </aside>

            </article>
        </div>
        
        
        
    );
}

export default Article;