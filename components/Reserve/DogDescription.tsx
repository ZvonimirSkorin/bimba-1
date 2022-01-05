import { Picture } from "../SharedComponents/Image";
import styles from "./DogDescription.module.scss";

export const DogDescription: React.FC<{ setDogType: Function; dogType: string; hairLength: string; setHairLength: Function }> = ({
  setDogType,
  dogType,
  hairLength,
  setHairLength,
}) => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Koliko je velik vaš ljubimac?</h2>
      <div className={styles.DogDescription}>
        {[
          { size: "mali", src: "" },
          { size: "srednji", src: "" },
          { size: "veliki", src: "" },
        ].map((v, index) => {
          return (
            <span
              key={index}
              onClick={() => {
                setDogType(v.size);
              }}
            >
              <DogCard key={index} src={v.src} size={v.size} colorChange={dogType === v.size} what="pas" />
            </span>
          );
        })}
      </div>
      <h2 style={{ textAlign: "center" }}>Kolika je duljina dlake?</h2>
      <div className={styles.HairLength}>
        {[
          { size: "kratka", src: "" },
          { size: "duga", src: "" },
        ].map((v, index) => {
          return (
            <span
              key={index}
              onClick={() => {
                setHairLength(v.size);
              }}
            >
              <DogCard key={index} src={v.src} size={v.size} colorChange={hairLength === v.size} what="dlaka" />
            </span>
          );
        })}
      </div>
    </>
  );
};

const DogCard: React.FC<{ size: string; src: string; colorChange: boolean; what: string }> = ({ size, src, colorChange, what }) => {
  return (
    <div style={colorChange ? { backgroundColor: "blue", color: "white" } : {}} className={styles.DogCard}>
      <Picture src="/DogSvg.svg" contain={true} style={styles.DogCardImage} />
      {size} {what}
    </div>
  );
};
