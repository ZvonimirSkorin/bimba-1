import Hamburger from "hamburger-react";
import { useMemo } from "react";
import { Picture } from "../SharedComponents/Image";
import styles from "./Basket.module.scss";
interface recivedProps {
  showPics: boolean;
  close: Function;
}
export const Basket: React.FC<recivedProps> = ({ showPics, close }) => {
  return (
    <>
      <div
        onClick={() => {
          close();
        }}
        className={styles.Closer}
        style={showPics ? { transform: "translateX(0)" } : {}}
      ></div>
      <div className={styles.Drawer} style={showPics ? { transform: "translateX(0)" } : {}}>
        <span
          onClick={() => {
            close();
          }}
          style={{ marginLeft: "auto" }}
        >
          {" "}
          <Hamburger toggled={true} />
        </span>
        <Picture src="/puppy.jpg" style={styles.Image} />
        <h3>Šišanje</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis ante, lobortis sed ultrices scelerisque, auctor et neque. Aliquam nec
          posuere leo. Proin ut laoreet leo. Aenean ac molestie sem. Sed non arcu odio. Morbi malesuada urna ut sapien vehicula pharetra. Nunc at
          turpis pulvinar leo condimentum eleifend. Nulla condimentum rutrum metus a aliquam.
        </p>
      </div>
    </>
  );
};
