import React, { useState } from "react";
import { useMemo } from "react";
import { getFreeAppointments } from "./API";
import { Bill } from "./Bill";
import styles from "./CalculateAppointment.module.scss";
import { AddDate, AddTime, CalculateAllPossibleAppointments, NumberToDateString } from "./DateFunctions";

export const CalculateAppointment: React.FC<{ state: { dogType: any; hairLength: any; service: any; services: any[] } }> = ({ state }) => {
  const [appointments, setAppointments] = useState<any>(null);

  return (
    <div className={styles.Wrapper}>
      <span>
        <div
          onClick={() => {
            if (state.dogType && state.hairLength && state.services.length !== 0)
              getFreeAppointments().then((v) => {
                setAppointments(v);
              });
            else alert("Nepotpuni podatci");
          }}
          className={`${styles.buttonFill} ${styles.reverse}`}
          style={{ borderColor: "#242A56", color: "#242A56", marginRight: "auto", marginTop: "2rem", zIndex: 10 }}
        >
          Pokaži slobodne termine
          <div className={styles.hiddenWave} style={{ backgroundColor: "black", color: "white", marginRight: "auto" }}></div>
        </div>
      </span>
      <Termini getApp={appointments} />
      <Bill state={state} />
    </div>
  );
};

const Termini: React.FC<{ getApp: any[] | null }> = ({ getApp }) => {
  return (
    <>
      {getApp ? (
        ["05.01.2022"].map((v, index) => {
          return <DateCard key={index} date={v} />;
        })
      ) : (
        <></>
      )}
      {getApp ? <Appointments appointments={getApp} /> : <></>}
    </>
  );
};

const DateCard: React.FC<{ date: string }> = ({ date }) => {
  return (
    <div style={{ display: "flex" }}>
      <strong className={styles.DateCard}>{date}</strong>;<strong className={styles.DateCard}>07.01.2022</strong>;
    </div>
  );
};

const Appointments: React.FC<{ appointments: any[] }> = ({ appointments }) => {
  const allPossible = useMemo(() => {
    const map = new Map(appointments.map((v) => [v.start, v.duration]));
    return CalculateAllPossibleAppointments(map);
  }, [appointments]);
  return (
    <div className={styles.AppointmentBoxes}>
      {allPossible.map((v, index) => {
        return (
          <div className={styles.AppointmentBox} key={index}>
            {NumberToDateString(v)}
          </div>
        );
      })}
    </div>
  );
};
