import styles from "./Iskustva.module.scss";
import { Komentari } from "../Data/Komentari";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Repeter } from "../SharedComponents/Repeter";

export const Iskustva: React.FC = () => {
  return (
    <div id="ONama" className={styles.MainWrapper}>
      <h1 className={styles.h1}>Iskustva</h1>
      <h2 className={styles.h2}>Komentari naših klijenata</h2>
      <div className={styles.Wrapper}>
        {Komentari.map((v, index) => {
          return <Comment key={index} ime={v.ime} komentar={v.komentar} />;
        })}
      </div>
    </div>
  );
};

const Comment: React.FC<{ ime: string; komentar: string }> = ({ ime, komentar }) => {
  return (
    <div>
      <section className={styles.KomentarWrapper}>
        <p className={styles.Komentar}>
          <Repeter numOfRepetition={5}>
            <FontAwesomeIcon width={18} height={18} color="orange" icon={faStar} />
          </Repeter>
          {komentar}
          <FontAwesomeIcon
            style={{ position: "absolute", top: "2rem", left: "0.4rem" }}
            width="20px"
            height={20}
            color="#777777"
            icon={faQuoteRight}
          />
        </p>
        <svg className={styles.SVG} width="50px" viewBox="0 0 144 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_63_52)">
            <path d="M138 0.5H4.5V125L138 0.5Z" fill="white" />
            <path d="M138 0.5H4.5V125L138 0.5Z" stroke="white" />
          </g>
          <defs>
            <filter id="filter0_d_63_52" x="0" y="0" width="143.269" height="134.15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_63_52" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_63_52" result="shape" />
            </filter>
          </defs>
        </svg>
      </section>
      <section className={styles.Person}>
        <p>{ime[0]}</p>
        <span>{ime}</span>
      </section>
    </div>
  );
};
