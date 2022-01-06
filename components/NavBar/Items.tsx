import Hamburger from "hamburger-react";
import { useState } from "react";
import { Drawer } from "./Drawer";
import styles from "./Items.module.scss";

const Items: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ItemsList = [
    { link: "/", label: "Početna" },
    { link: "/about", label: "O nama" },
    { link: "/services", label: "Usluge" },
    { link: "/contact", label: "Kontakt" },
    { link: "/reserve", label: "Rezerviraj" },
  ];

  return (
    <div className={styles.Items}>
      <div style={{ position: "absolute", right: "1rem" }}>
        <Hamburger
          toggled={open}
          toggle={() => {
            setOpen(!open);
          }}
          color="black"
        />
      </div>

      <Drawer
        items={ItemsList}
        open={open}
        setOpen={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default Items;
