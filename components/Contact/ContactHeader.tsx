import { Scroller } from "../SharedComponents/Scroller";
import styles from "./header.module.scss";

export const ContactHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.bgimg} />

      <svg className={styles.BottomShape} width="100%" viewBox="0 0 765 83" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 82.5V1.5C302.248 103.34 469.591 105.27 764.5 1.5V82.5H0.5Z" fill="#f5f5f5" stroke="#f5f5f5" />
      </svg>
      <section className={styles.Card}>
        <h1>Kontaktirajte nas</h1>
        <p>Jer vaš ljubimac zaslužuje najbolje</p>
        <div className={styles.ButtonWrapper}></div>
      </section>
    </header>
  );
};
