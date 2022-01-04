import styles from "./facebook.module.scss";
import Image from "next/image"

function Facebook() {
  return (
    <div className={styles.wrapperBg}>
      <div className={styles.gradient}/>
      <section className={styles.container}>
      <div className={styles.fbWrapper}>
                <h1>Naša Facebook stranica</h1>
                <div className={styles.iframe}><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbimbagrooming&tabs=timeline&width=300&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="700" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
            </div>
        
      </section>
        <svg className={styles.svg} width="100%" viewBox="0 0 644 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M643.5 51C385.999 66.8958 245.041 57.4658 1.00001 1L1 69H643.5V51Z" fill="#EAF6FF" stroke="#EAF6FF" />
        </svg>
    </div>
  );
}

export default Facebook;