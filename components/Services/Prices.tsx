import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

import styles from "./Prices.module.scss";

export const Prices: React.FC<{ openBasket: Function }> = ({ openBasket }) => {
  const [showPics, setShowPics] = useState(false);
  const initialRender = useRef(false);
  useEffect(() => {
    if (initialRender.current === false) {
      initialRender.current = true;
      return;
    }
    openBasket();
  }, [showPics]);
  return (
    <div className={styles.container}>
      <MainCard
        setShowPics={() => {
          setShowPics((prev) => !prev);
        }}
      />

      {new Array(3).fill(0).map((v, index) => {
        return <PriceCard index={index} move={false} key={index} />;
      })}
    </div>
  );
};

const PriceCard: React.FC<{ index: number; move: boolean }> = ({ index, move }) => {
  return (
    <div
      style={move ? { transform: `translateX(-${250 * index + index * 32}px)`, opacity: 1 } : { transform: "translateX(0)" }}
      className={styles.Card}
    >
      <div className={styles.TablePrice}>
        <svg
          enableBackground="new 0 0 800 800"
          height="150px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 800 800"
          width="150px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <path d="M525.4,589.907H213.663c-9.932,0-17.985,8.044-17.985,17.985c0,9.923,8.053,17.984,17.985,17.984H525.4   c9.94,0,17.985-8.062,17.985-17.984C543.386,597.951,535.341,589.907,525.4,589.907z" />
            <path d="M647.063,282.877c3.319-41.837,4.751-82.286,5.005-90.189c0.158-4.865-1.659-9.59-5.049-13.085   c-3.381-3.513-8.054-5.48-12.918-5.48H82.165c-4.883,0-9.537,1.967-12.927,5.48c-3.39,3.495-5.217,8.22-5.059,13.085   c0.492,15,5.199,147.569,19.091,183.821c26.978,70.431,93.536,188.581,236.091,188.581h77.543   c96.564,0,158.213-54.22,196.361-111.091c14.376,9.133,31.378,14.508,49.635,14.508c51.242,0,92.93-41.679,92.93-92.929   C735.83,325.75,696.364,285.072,647.063,282.877z M605.771,332.494c-1.914,13.963-4.049,25.081-6.376,31.141   c-3.372,8.817-7.166,17.827-11.399,26.854c-6.041,12.944-12.996,25.941-20.997,38.517   c-34.328,53.938-87.756,100.113-170.094,100.113h-77.543c-114.972,0-173.582-89.996-202.509-165.484   c-7.886-20.585-13.604-98.445-16-153.542h514.562c-1.055,24.062-2.74,52.445-4.953,78.527   C609.091,304.673,607.519,319.761,605.771,332.494z M642.9,432.536c-11.504,0-22.218-3.46-31.176-9.36   c8.853-16.58,15.869-32.582,21.271-46.667c4.461-11.68,7.974-33.336,10.714-57.837c31.035,0.439,56.15,25.784,56.15,56.906   C699.859,406.981,674.305,432.536,642.9,432.536z" />
          </g>
        </svg>
        <div className={styles.PicItem}></div>
        <div className={styles.description}>
          <h1 className={styles.title}>Mali psi</h1>
          <span className={styles.price}>50HRK</span>
        </div>
      </div>
    </div>
  );
};

const MainCard: React.FC<{ setShowPics: Function }> = ({ setShowPics }) => {
  return (
    <div onClick={() => setShowPics()} className={styles.MainCard}>
      <div className={styles.Card}>
        <div className={styles.TablePrice}>
          <svg
            enableBackground="new 0 0 800 800"
            height="150px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 800 800"
            width="150px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path d="M525.4,589.907H213.663c-9.932,0-17.985,8.044-17.985,17.985c0,9.923,8.053,17.984,17.985,17.984H525.4   c9.94,0,17.985-8.062,17.985-17.984C543.386,597.951,535.341,589.907,525.4,589.907z" />
              <path d="M647.063,282.877c3.319-41.837,4.751-82.286,5.005-90.189c0.158-4.865-1.659-9.59-5.049-13.085   c-3.381-3.513-8.054-5.48-12.918-5.48H82.165c-4.883,0-9.537,1.967-12.927,5.48c-3.39,3.495-5.217,8.22-5.059,13.085   c0.492,15,5.199,147.569,19.091,183.821c26.978,70.431,93.536,188.581,236.091,188.581h77.543   c96.564,0,158.213-54.22,196.361-111.091c14.376,9.133,31.378,14.508,49.635,14.508c51.242,0,92.93-41.679,92.93-92.929   C735.83,325.75,696.364,285.072,647.063,282.877z M605.771,332.494c-1.914,13.963-4.049,25.081-6.376,31.141   c-3.372,8.817-7.166,17.827-11.399,26.854c-6.041,12.944-12.996,25.941-20.997,38.517   c-34.328,53.938-87.756,100.113-170.094,100.113h-77.543c-114.972,0-173.582-89.996-202.509-165.484   c-7.886-20.585-13.604-98.445-16-153.542h514.562c-1.055,24.062-2.74,52.445-4.953,78.527   C609.091,304.673,607.519,319.761,605.771,332.494z M642.9,432.536c-11.504,0-22.218-3.46-31.176-9.36   c8.853-16.58,15.869-32.582,21.271-46.667c4.461-11.68,7.974-33.336,10.714-57.837c31.035,0.439,56.15,25.784,56.15,56.906   C699.859,406.981,674.305,432.536,642.9,432.536z" />
            </g>
          </svg>
          <div className={styles.PicItem}></div>
          <div className={styles.description2}>
            <h1 className={styles.title}>Šišanje</h1>
          </div>
        </div>
      </div>
      <section className={styles.Pointer} style={{ fontSize: "4rem", width: "80px" }}>
        <FontAwesomeIcon color="orange" icon={faArrowAltCircleRight} />
      </section>
    </div>
  );
};

/* */
