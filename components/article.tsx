import styles from "./article.module.scss"
import Image from "next/image"

function Article() {

    
  
    
  
    return(
        
        <div className={styles.container}>
            <article className={styles.article}>
                <section className={styles.section}>
                    <h1>Naše usluge</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </section>

                <div className={styles.img}>
                    <Image objectPosition="bottom" alt="" src="/article1.jpg" layout="fill"/>
                </div>

            </article>
        </div>
        
        
        
    );
}

export default Article;