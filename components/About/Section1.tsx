import styles from "./Section1.module.scss";

export const Section1: React.FC = () => {
  return (
    <div className={styles.Wrapper}>
      <article>
        <h2>Donosimo iskustvo</h2>
        <h1>Pružamo posebnu njegu za svakog psa</h1>
      </article>
      <article>
        <h2>O nama</h2>
        <p>
          At the North Randwick Veterinary Hospital, our aim is to provide the highest quality care to your pet through every stage of its life. We
          pride ourselves on building trusting relationships with both our clients and patients.
        </p>
      </article>
    </div>
  );
};
