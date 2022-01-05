import { useRef } from "react";
import { Picture } from "../SharedComponents/Image";
import styles from "./ServiceDescription.module.scss";

export const ServiceDescription: React.FC<{ removeItem: Function; addItem: Function }> = ({ removeItem, addItem }) => {
  const selected = useRef(new Map());
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Odaberite usluge</h2>
      <div className={styles.ServiceDescription}>
        {[
          { duration: 30, price: 50, name: "Šišanje" },
          { duration: 20, price: 150, name: "Pranje" },
          { duration: 40, price: 200, name: "Feniranje" },
          { duration: 100, price: 500, name: "Minival" },
          { duration: 300, price: 1500, name: "Full" },
        ].map((v, index) => {
          return (
            <span
              key={index}
              onClick={() => {
                if (selected.current.get(index)) {
                  removeItem(v);
                  selected.current.delete(index);
                } else {
                  addItem(v);
                  selected.current.set(index, true);
                }
              }}
            >
              <ServiceCard colored={selected.current.get(index)} label={v.name} src={""} price={v.price} duration={v.duration} />;
            </span>
          );
        })}
      </div>
    </>
  );
};

const ServiceCard: React.FC<{ label: string; src: string; price: number; duration: number; colored: boolean }> = ({
  label,
  src,
  colored,
  price,
  duration,
}) => {
  return (
    <div style={colored ? { backgroundColor: "blue", color: "white" } : {}} className={styles.ServiceCard}>
      <Picture src="/DogSvg.svg" style={styles.Image} contain />
      <h3>{label}</h3>
      <strong>{price} HRK</strong>
      <strong>{minutesToHours(duration)} min</strong>
    </div>
  );
};

function minutesToHours(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours ? `${hours} h` : ""} ${minutes} min`;
}
