import axios from "axios";
interface Data {
  data: {};
  datum: string;
}

export const getFreeAppointments = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/api/GetFreeAppointments")
      .then((result) => {
        const date = result.data.datum;
        const arr: any[] = [];
        result.data.data[date]?.forEach((v: { start: number; duration: number }) => {
          console.log(v);
          arr.push(v);
        });
        console.log(arr);
        resolve(arr);
      })
      .catch((err) => {
        console.log(err);
        resolve(null);
      });
  });
};

function compare(a: string, b: string) {
  return a.localeCompare(b);
}
