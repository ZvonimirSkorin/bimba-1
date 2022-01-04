import Link from "next/link";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.bgimg} />
      <svg className={styles.BottomShape} width="110%" viewBox="0 0 663 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M662 1.5C581.167 22.8333 335.7 66 0.5 68H662V1.5Z" stroke="white" fill="white" />
      </svg>
      <div className={styles.headerText}>
        <h1>Brinemo o vašim ljubimcima.</h1>

        <p className={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <button className={styles.callButton}>Rezervirajte termin</button>
      </div>
    </header>
  );
}

export default Header;
