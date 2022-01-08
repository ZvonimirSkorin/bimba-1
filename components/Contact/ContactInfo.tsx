import { faEnvelope, faMapPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactInfo.module.scss";

const ContactInfo: React.FC = () => {
  return (
    <div className={styles.ContactInfo}>
      <h1 className={styles.H1}>Kontaktirajte nas</h1>
      <div className={styles.ContentWrapper}>
        <section className={styles.CardWrapper}>
          <Card icon={faMapPin} first="Ul. Dobriše Cesarića 6, 10000, Zagreb" action="Direction" />
          <Card icon={faPhone} first="+345 91-2390-390" action="Call" />
          <Card icon={faEnvelope} first="bimba@gmail.com" action="Send mail" />
        </section>
        <section style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center" }}>
          <div className={styles.ScheduleWrapper}>
            {["Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak"].map((v, index) => {
              return (
                <div className={styles.Day} style={{}} key={index}>
                  {v}: 08-16
                </div>
              );
            })}
            {["Subota", "Nedjelja"].map((v, index) => {
              return (
                <div className={styles.Day} style={{}} key={index}>
                  {v}: ne radimo
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactInfo;

const Card: React.FC<{ icon: any; first: string; action: string; second?: string }> = ({ icon, first, action, second }) => {
  return (
    <div className={styles.Card}>
      <FontAwesomeIcon width="32" icon={icon} />
      <section style={{ marginTop: "1rem" }}>{first}</section>
      <section style={{ marginTop: "1rem" }}>{second}</section>
      <div
        onClick={() => {
          open(action);
        }}
        className={styles.Darkner}
      >
        {action === "Call" ? (
          <a href="tel:+4733378901" className={styles.a}>
            {action}
          </a>
        ) : (
          <></>
        )}
        {action === "Send mail" ? (
          <a href={`mailto:${first}`} className={styles.a}>
            {action}
          </a>
        ) : (
          <></>
        )}
        {action === "Directions" ? <a className={styles.a}>{action}</a> : <></>}
      </div>
    </div>
  );
  function open(action: string) {
    if (action === "Direction") {
      window.open("https://maps.google.com?q=" + 45.803276648111506 + "," + 15.9024145);
    }
  }
};
