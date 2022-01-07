import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { SendMail } from "../Services/API";
import styles from "./ContactFormRetro.module.scss";

const ContactFormRetro: React.FC<{ title: string }> = ({ title }) => {
  const sender = useRef("");
  const number = useRef("");
  const mail = useRef("");
  const message = useRef("");
  const router = useRouter();
  const [alert, setAlert] = useState({ type: 0, message: "", num: 0 });
  useEffect(() => {
    if (alert.type === 1) {
      router.push("/contact");
    }
  }, [alert]);
  return (
    <div
      className={styles.Wrapper}
      style={{ width: "100%", overflow: "hidden", backgroundColor: "#EAF6FF", display: "flex", flexDirection: "column" }}
    >
      <h1>{title}</h1>
      <TextField
        id="standard-basic"
        label="Name*"
        variant="standard"
        onChange={(e) => {
          sender.current = e.currentTarget.value;
        }}
        style={{ width: "100%", maxWidth: "700px", fontSize: "2rem", marginTop: "1rem" }}
      />

      <TextField
        id="standard-basic"
        label="Phone number"
        variant="standard"
        onChange={(e) => {
          number.current = e.currentTarget.value;
        }}
        style={{ width: "100%", maxWidth: "700px", fontSize: "2rem", marginTop: "1rem" }}
      />
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        onChange={(e) => {
          mail.current = e.currentTarget.value;
        }}
        style={{ width: "100%", maxWidth: "700px", fontSize: "2rem", marginTop: "1rem" }}
      />

      <textarea
        onChange={(e) => {
          message.current = e.currentTarget.value;
        }}
        placeholder="Message*"
        className={styles.TextArea}
      ></textarea>
      <div
        className={`${styles.buttonFill} ${styles.reverse}`}
        style={{ borderColor: "#242A56", color: "#242A56", marginRight: "auto", marginTop: "2rem", zIndex: 10 }}
        onClick={() => {
          SendMail({ sender: sender.current, mail: mail.current, message: message.current, number: number.current }, setAlert);
        }}
      >
        Send
        <div className={styles.hiddenWave} style={{ backgroundColor: "black", color: "white", marginRight: "auto" }}></div>
      </div>
      <AlertMessage alert={alert} />
    </div>
  );
};

export default ContactFormRetro;
const styleType = ["", styles.Good, styles.Bad, styles.Warning];

const AlertMessage: React.FC<{ alert: { message: string; type: number } }> = ({ alert }) => {
  const [start, setStart] = useState(false);
  useEffect(() => {
    setStart(true);
    let inter = setInterval(() => {
      setStart(false);
      clearInterval(inter);
    }, 8000);
  }, [alert]);
  if (start) return <div className={styleType[alert.type]}>{alert.message}</div>;
  else return <></>;
};
