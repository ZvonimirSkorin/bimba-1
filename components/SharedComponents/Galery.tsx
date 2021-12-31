import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import styles from "./Galery.module.scss";
import { useWindowWidth } from "@react-hook/window-size";
import { LightBoxGalery } from "./LightBoxGalery";

const Galery: React.FC<{ size: number; data: string[] }> = (props) => {
  const { ref, inView } = useInView();
  const [inV, inView2] = useInView();
  const [openLight, setOpenLight] = useState(false);
  const [indexPosition, setIndexPosition] = useState(-1);
  const width = useWindowWidth();

  let beenThere = useRef(false);
  useEffect(() => {
    if ((!inView || beenThere.current === true) && width > 1000) return;
    if ((!inView2 || beenThere.current) && width < 1000) return;
    beenThere.current = true;
    for (let i = 1; i <= 13; i++) {
      let el = document.getElementById(`card${i}`);
      el?.animate(
        [
          // keyframes
          { opacity: 0, transform: "scale(0.3)", filter: "hue-rotate(180deg)" },
          { opacity: 1, transform: "scale(1)", filter: "hue-rotate(0deg)" },
        ],
        {
          // timing options
          duration: 700,
          delay: i * 110,
        }
      );
    }

    for (let i = 1; i <= 13; i++) {
      let el = document.getElementById(`card${i}`);
      setTimeout(() => {
        el?.style.setProperty("opacity", "1");
      }, i * 110 + 700);
    }
  }, [inView, inView2]);
  return (
    <section ref={inV} style={{ marginTop: `${props.size}px` }} className={styles.CardWrapper}>
      {props.data.map((v, index) => {
        if (width < 1000 && index > 3) return;
        return (
          <div
            onClick={() => {
              open_light(index);
            }}
            ref={index === 8 ? ref : null}
            id={`card${index + 1}`}
            className={styles.card}
          >
            <img className={styles.CardGaleryImg} src={props.data[index]} />
          </div>
        );
      })}

      <LightBoxGalery images={props.data} start_position={indexPosition} start={openLight} />
    </section>
  );
  function open_light(position: number) {
    setIndexPosition(position);
    setOpenLight(!openLight);
  }
};

export default Galery;
