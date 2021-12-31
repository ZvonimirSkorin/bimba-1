import Link from "next/link";
import styles from "./nav.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCallback } from "react";

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

  return (
    <nav style={activateScroll ? { backgroundColor: "#a9b3d1",transition:"0.5s" } : {transition:"0.5s"}} className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <div className={styles.img}>
            <Image src="/Bimba.svg" alt="" width={100} height={100} />
          </div>

          <div className={styles.navLinks}>
            <Link href="/">
              <a className={styles.active}>Početna</a>
            </Link>
            <Link href="/about">
              <a>O nama</a>
            </Link>
            <Link href="/">
              <a>Kontakt</a>
            </Link>
            <Link href="/">
              <a>Galerija</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
