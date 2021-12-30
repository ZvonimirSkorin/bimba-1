import styles from "./Section2.module.scss";
import Image from "next/image";
export const Section2: React.FC = () => {
  return (
    <div className={styles.Wrapper}>
      <section className={styles.ImgWrapper}>
        <Image alt="" src="/Cat.jpg" layout="fill" height={"100%"} width="100%" objectFit="cover" />
      </section>
      <section className={styles.Box}>
        <h2 className={styles.h2}>Što mi radimo</h2>
        <h1 className={styles.h1}>Popularne usluge</h1>
        <div className={styles.ServiceBox}>
          <h3 style={{ color: "black" }}>Potpuna njega</h3>
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
