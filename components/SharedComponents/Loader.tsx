import { faSpider } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Loader.module.scss";

export const Loader: React.FC = () => {
  return (
    <div className={styles.Loader}>
      {new Array(12).fill(0).map((v, index) => {
        return (
          <span
            key={index}
            style={{ transform: `translate(${Math.sin(index * (Math.PI / 6)) * 150}px,${Math.cos(index * (Math.PI / 6)) * 150}px)` }}
            className={styles.Pawn}
          >
            <FontAwesomeIcon icon={faSpider} width={50} height={50} />
          </span>
        );
      })}
    </div>
  );
};

export const HorizontalLoader: React.FC = () => {
  return (
    <div className={styles.Loader}>
      <div className={styles.Path}>
        {new Array(24).fill(0).map((v, index) => {
          return (
            <div key={index} className={styles.PawnH}>
              <FontAwesomeIcon icon={faSpider} width={50} height={50} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
