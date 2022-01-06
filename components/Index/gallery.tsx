import styles from "./gallery.module.scss";
import Image from "next/image";
import Link from "next/link";
import { LightBoxGalery } from "../SharedComponents/LightBoxGalery";
import { useState } from "react";

function Gallery() {
  const slike = ["/aboutbg.jpg", "/Cat.jpg", "/contact.jpg", "/fbbg.jpg", "/homebg.jpg", "/Kitty.jpg", "/puppy.jpg", "/reserve.jpg"];
  const [position, setPosition] = useState<number>(-1);
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.bottomCurve}>
      <div className={styles.container}>
        <div className={styles.galWrapper}>
          <h1 className={styles.h1}>Galerija</h1>
          {new Array(8).fill(0).map((v, index) => {
            return (
              <div
                onClick={() => {
                  setPosition(index);
                  setOpen(!open);
                }}
                key={index}
                className={styles.imgWrap}
              >
                <Image src={slike[index]} alt="" width={200} height={200} />
              </div>
            );
          })}
        </div>
      </div>
      <LightBoxGalery images={slike} start_position={position} start={open} />
      <svg className={styles.svg} width="100%" viewBox="0 0 644 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M643.5 51C385.999 66.8958 245.041 57.4658 1.00001 1L1 69H643.5V51Z" fill="#EAF6FF" stroke="#EAF6FF" />
      </svg>
    </div>
  );
}

export default Gallery;
