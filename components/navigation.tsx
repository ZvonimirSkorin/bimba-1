import Link from "next/link";
import styles from "./nav.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Loader from "../components/NavBar/Loader";
import Items from "./NavBar/Items";
import { Drawer } from "./NavBar/Drawer";
import { useWindowWidth } from "@react-hook/window-size";
import { useMemo } from "react";

const links = [
  { link: "/", label: "Početna" },
  { link: "/about", label: "O nama" },
  { link: "/services", label: "Usluge" },
  { link: "/contact", label: "Kontakt" },
  { link: "/reserve", label: "Rezervacije" },
];

function Navigation() {
  const [activateScroll, setActivateScroll] = useState(false);

  const [iconSize, setIconSize] = useState({ height: 0, width: 0 });
  const listenerFunction = useCallback(() => {
    if (window.scrollY > 100) {
      if (!activateScroll) setActivateScroll(true);
    } else setActivateScroll(false);
  }, []);
  const resizeListener = useCallback((e) => {
    let width = window.innerWidth;
    setIconSize({ width: 50 + width / 30, height: 50 + width / 30 });
  }, []);
  useEffect(() => {
    setIconSize({ width: 50 + window.innerWidth / 30, height: 50 + window.innerWidth / 30 });
    window.addEventListener("resize", resizeListener);
    window.addEventListener("scroll", listenerFunction);
    return () => {
      window.removeEventListener("scroll", listenerFunction);
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  const router = useRouter();

  return (
    <nav style={activateScroll ? { backgroundColor: "rgb(213 237 255)", transition: "0.5s" } : { transition: "0.5s" }} className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <div
            onClick={() => {
              router.push("/");
            }}
            className={styles.img}
            style={
              activateScroll ? { height: iconSize.height, width: iconSize.width } : { height: iconSize.height * 1.6, width: iconSize.width * 1.6 }
            }
          >
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
          <Items />
        </div>
      </div>
      <Loader />
    </nav>
  );
}

export default Navigation;
