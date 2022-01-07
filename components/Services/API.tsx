import axios from "axios";
interface mail {
  sender: string;
  number: any;
  mail: string;
  message: string;
}

export const SendMail = (obj: mail, setAlert: Function) => {
  if (obj.number.length === 0 && obj.mail.length === 0) {
    setAlert({ type: 3, message: "Niste upisali kontakt podatke" });
    return;
  } else if (obj.message.length === 0) {
    setAlert({ type: 3, message: "Niste napisali poruku" });
    return;
  }
  axios
    .post("http://bimba.vercel.app/api/SendMail", obj)
    .then(() => {
      setAlert({ type: 1, message: "Uspješno poslan mail" });
    })
    .catch((err) => setAlert({ type: 2, message: "Mail nije poslan" }));
};
