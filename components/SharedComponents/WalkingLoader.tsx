import { useRef } from "react";
import { useEffect } from "react";
import styles from "./WalkingLoader.module.scss";
import Image from "next/image";

export const WalkingLoader: React.FC = () => {
  const leftLeg = useRef<null | HTMLDivElement>(null);
  const rightLeg = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    let currentScroll = 0;
    let currentLeg = 0;
    let legStatus = { leftLeg: { currentTop: 0 }, rightLeg: { currentTop: 20 } };
    if (rightLeg.current === null) return;
    window.addEventListener("scroll", () => {
      if (window.scrollY - currentScroll > 50) {
        currentScroll = window.scrollY;
        if (currentLeg === 0) {
          currentLeg = 1;
          let leftPosition = legStatus.leftLeg?.currentTop;
          if (leftPosition === 0) legStatus.leftLeg.currentTop = 40;
          else legStatus.leftLeg.currentTop = 0;
          if (leftLeg.current !== null) leftLeg.current.style.top = `${leftPosition}%`;
        } else {
          currentLeg = 0;
          let rightPosition = legStatus.rightLeg?.currentTop;
          console.log("right", rightPosition);
          if (rightPosition === 20) legStatus.rightLeg.currentTop = 60;
          else legStatus.rightLeg.currentTop = 20;
          if (rightLeg.current !== null) rightLeg.current.style.top = `${rightPosition}%`;
        }
      }
    });
  }, []);
  return <div className={styles.Wrapper}></div>;
};
