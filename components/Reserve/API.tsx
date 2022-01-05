export const getFreeAppointments = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let arr = [
        { start: 830, duration: 30 },
        { start: 930, duration: 30 },
        { start: 1030, duration: 30 },
        { start: 1130, duration: 30 },
      ].sort((a, b) => {
        return a.start - b.start;
      });
      resolve(arr);
    }, 1000);
  });
};

function compare(a: string, b: string) {
  return a.localeCompare(b);
}
