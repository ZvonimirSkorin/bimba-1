import type { NextPage } from "next";
import Head from "next/head";
import { useReducer } from "react";
import { CalculateAppointment } from "../components/Reserve/CalculateAppointment";
import { DogDescription } from "../components/Reserve/DogDescription";
import { ReserveHeader } from "../components/Reserve/ReserveHeader";
import { ServiceDescription } from "../components/Reserve/ServiceDescription";

const initialState = { dogType: null, hairLength: null, service: null, services: [] };

function reducer(state: any, action: any) {
  switch (action.type) {
    case "set_dog_type":
      return { ...state, dogType: action.payload };
    case "set_hair_length":
      return { ...state, hairLength: action.payload };

    case "add_service":
      return { ...state, services: [...state.services, action.payload] };
    case "remove_service":
      return {
        ...state,
        services: [
          ...state.services.filter((v: any) => {
            if (JSON.stringify(v) !== JSON.stringify(action.payload)) return v;
          }),
        ],
      };
    default:
      throw new Error();
  }
}
const Home: NextPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Head>
        <title>Bimba | Rezervacije</title>
        <link rel="shortcut icon" href="/bimba.svg" />
      </Head>
      <ReserveHeader />

      <DogDescription
        dogType={state.dogType}
        setDogType={(v: string) => {
          dispatch({ type: "set_dog_type", payload: v });
        }}
        hairLength={state.hairLength}
        setHairLength={(v: string) => {
          dispatch({ type: "set_hair_length", payload: v });
        }}
      />
      <ServiceDescription
        removeItem={(v: { duration: number; price: number; name: string }) => {
          dispatch({ type: "remove_service", payload: v });
        }}
        addItem={(v: { duration: number; price: number; name: string }) => {
          dispatch({ type: "add_service", payload: v });
        }}
      />
      <CalculateAppointment state={state} />
    </>
  );
};

export default Home;
