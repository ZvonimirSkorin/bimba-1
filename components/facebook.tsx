import styles from "./facebook.module.scss";

function Facebook() {
  return (
    <div className={styles.fbbg}>
        <div className={styles.container}>
            <div className={styles.fbWrapper}>
                <h1>Naša Facebook stranica</h1>
                <div className={styles.iframe}><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbimbagrooming&tabs=timeline&width=300&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="700" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
            </div>
        </div>
    </div>
  );
}

export default Facebook;