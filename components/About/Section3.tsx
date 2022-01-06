import Galery from "../SharedComponents/Galery";
import { Picture } from "../SharedComponents/Image";
import styles from "./Section3.module.scss";

export const Section3: React.FC = () => {
  return (
    <div className={styles.Wrapper}>
      <section className={styles.ImageWrapper}>
        <strong className={styles.BackgroundColor}></strong>
        <Picture
          priority
          src="/puppy.jpg"
          style={styles.Image}
          svg={
            <svg className={styles.SVG} width="100%" viewBox="0 0 644 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M643.5 51C385.999 66.8958 245.041 57.4658 1.00001 1L1 69H643.5V51Z" fill="#EAF6FF" stroke="#EAF6FF" />
            </svg>
          }
        />
      </section>
      <h2 className={styles.h2}>Naši česti prijatelji</h2>
      <h3 className={styles.h3}>Bimba</h3>
      <Galery size={70} data={new Array(13).fill("./puppy.jpg")} />
    </div>
  );
};
