import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import styles from "./Styles/SocialMedia.module.scss";

const SocialMedia = () => {
  const router = useRouter();
  return (
    <div className={styles.SocialMediaWrapper}>
      <div className={styles.socialMedia}>
        <div
          onClick={() => {
            router.push("https://www.facebook.com/bimbagrooming/");
          }}
          className={styles.hexagonWrapper}
        >
          <div className={styles.hexagon}>
            <div className={styles.FontAwesomeIcon}>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
        </div>
        <div className={styles.hexagonWrapper}>
          <div
            onClick={() => {
              router.push("");
            }}
            className={styles.hexagon}
          >
            <div className={styles.FontAwesomeIcon}>
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
