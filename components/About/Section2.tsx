import styles from "./Section2.module.scss";
import Image from "next/image";
export const Section2: React.FC = () => {
  return (
    <div id="Usluge" className={styles.Wrapper}>
      <section className={styles.ImgWrapper}>
        <Image alt="" src="/Cat.jpg" layout="fill" objectFit="cover" />
      </section>

      <section className={styles.Box}>
        <h2 className={styles.h2}>Što mi radimo</h2>
        <h1 className={styles.h3}>Popularne usluge</h1>
        <div className={styles.ServiceBox}>
          <h3 style={{ color: "#333" }}>Potpuna njega</h3>
          <ul>
            {new Array(20).fill(0).map((v) => {
              return <li key={v}>Lorem ipsum sincor venetur</li>;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};
