export const AddDate = (num: number, distance: number) => {
  let retunVal = num + distance;
  if (retunVal % 100 === 60) {
    return (retunVal += 40);
  }
  return retunVal;
};

export const AddTime = (num: number, distance: number) => {
  let minutes = (num + distance) % 100;
  let hours = Math.floor(num / 100);
  return (hours + Math.floor(minutes / 60)) * 100 + (minutes % 60);
};

export const NumberToDateString = (num: number) => {
  let minutes = num % 100;
  let hours = Math.floor(num / 100);
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

export const CalculateAllPossibleAppointments = (map: Map<any, any>) => {
  let possible = [];
  /* { start: 1030, duration: 30 },
        { start: 1130, duration: 20 },
        { start: 1230, duration: 30 }, */
  let wanted = 30;
  let suma = 0;
  let current = 800;

  for (let i = 810; i < 1600; i = AddDate(i, 10)) {
    let duration = map.get(i);
    suma += 10;
    if (duration) {
      if (suma >= wanted) {
        possible.push(current);
      }
      suma = 0;
      current = AddTime(i, duration);
      i = current;
    }
    if (suma >= wanted) {
      possible.push(current);
      suma -= 10;
      current = AddDate(current, 10);
    }
  }
  return possible;
};
