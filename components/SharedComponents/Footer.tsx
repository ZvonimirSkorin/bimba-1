import styles from "./footer.module.scss";
import { Picture } from "./Image";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Picture src="/Kitty.jpg" style={styles.Picture} />
      <svg className={styles.SVG} width="110%" viewBox="0 0 643 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M642.5 0.5H0.5V45.5C252.806 46.6096 393.282 35.6918 642.5 0.5Z" fill="#EAF6FF" stroke="#EAF6FF" />
      </svg>
    </footer>
  );
};
