import { faCross, faTransgenderAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Drawer.module.scss";

interface recivedProps {
  open: boolean;
  setOpen: Function;
  items: { link: string; label: string }[];
}

export const Drawer: React.FC<recivedProps> = ({ open, setOpen, items }) => {
  const router = useRouter();
  return (
    <div style={open ? { transform: "translateX(0)" } : { transform: "translateX(100%)" }} className={styles.Drawer}>
      <section className={styles.close}>
        <span
          onClick={() => {
            setOpen();
          }}
        >
          {" "}
          Close
          <Hamburger toggled={true} />
        </span>
      </section>
      <section className={`${open ? `${styles.ItemsWrapper} ` : styles.ItemsClose} ${styles.ItemsWrapperStandard}`}>
        {items.map((v, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                router.push(v.link);
                setOpen();
              }}
            >
              {v.label}
            </div>
          );
        })}
<<<<<<< HEAD
        <div className={styles.img} style={{ height: 150, width: 150, position: "relative", marginTop: "10%" }}>
          <Image src="/bimba.svg" alt="" layout="fill" objectFit="contain" />
        </div>
=======
        <img src="/Bimba.svg" className={styles.img} style={{ height: 150, width: 150, position: "relative", marginTop: "10%" }} />
>>>>>>> eb4aa9405d4ef5bd37137e6bcc03944ba07a05b0
      </section>
    </div>
  );
};
