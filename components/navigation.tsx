import Link from "next/link";
import styles from "./nav.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";

const links = [
  { link: "/", label: "Pocetna" },
  { link: "/about", label: "O nama" },
  { link: "/services", label: "Usluge" },
];

function Navigation() {
  const [activateScroll, setActivateScroll] = useState(false);
  const listenerFunction = useCallback(() => {
    if (window.scrollY > 100) {
      if (!activateScroll) setActivateScroll(true);
    } else setActivateScroll(false);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", listenerFunction);
    return () => {
      window.removeEventListener("scroll", listenerFunction);
    };
  }, []);
  const router = useRouter();

  return (
    <nav style={activateScroll ? { boxShadow: "0px 0px 15px 0px black", color: "black", backgroundColor: "#EAF6FF" } : {}} className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <div className={styles.img} style={activateScroll ? { height: 100, width: 100 } : { height: 150, width: 150 }}>
            <Image src="/Bimba.svg" alt="" layout="fill" objectFit="contain" />
          </div>

          <div className={styles.navLinks}>
            {links.map((v, index) => {
              return (
                <Link key={index} href={v.link}>
                  <a className={router.pathname === v.link ? styles.active : ""}>{v.label} </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
