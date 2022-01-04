import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";
import styles from "./Loader.module.scss";

const Loader: React.FC<{ scrollDisable?: boolean }> = ({ scrollDisable }) => {
  const [procentage, setProcentage] = useState(0);
  const [activateScroll, setActivateScroll] = useState(false);
  const lastPosition = useRef<number>(100);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let scroll = window.scrollY;
      if (!activateScroll && scroll > 50) {
        setActivateScroll(true);
      } else if (scroll < 50) {
        setActivateScroll(false);
      }

      if (scrollDisable == null && Math.abs(scroll - lastPosition.current) > 50) {
        lastPosition.current = scroll;
        setProcentage(0.996 - scroll / (document.documentElement.getBoundingClientRect().height - window.innerHeight));
      }
    });
  }, []);
  if (scrollDisable !== undefined) return <></>;
  return (
    <div style={activateScroll ? {} : { opacity: 0 }} className={styles.Loader}>
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        style={{ borderRadius: "50%" }}
        className={styles.Wrapper}
      >
        <svg
          style={{ strokeDashoffset: procentage * 298, backgroundColor: "#ECF4FB", borderRadius: "50%" }}
          className={styles.Svg}
          width="70"
          height="70"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle style={{ strokeWidth: 7 }} id="svg" cx="50" cy="50" r="47.5" stroke="url(#paint0_linear_2:3)" />
          <defs>
            <linearGradient id="paint0_linear_2:3" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
              <stop style={{ stopColor: "#00ADEE" }} />
              <stop offset="1" style={{ stopColor: "#5EA73C", stopOpacity: 0.95 }} />
            </linearGradient>
          </defs>
        </svg>
        <div className={styles.Core}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
