import styles from "./gallery.module.scss";
import Image from "next/image";
import Link from "next/link";

function Gallery() {
  return (
    <div className={styles.container}>
      <div className={styles.galWrapper}>
        <h1 className={styles.h1}>Galerija</h1>
        {new Array(8).fill(0).map((v, index) => {
          return (
            <div key={index} className={styles.imgWrap}>
              <Image src="/Cat.jpg" alt="" width={200} height={200} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
