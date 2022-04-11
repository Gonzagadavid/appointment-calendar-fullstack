import { monthNames } from '../constants/namesList';

const getDate = (dateParam: string) => {
  const date = new Date(dateParam);
  const year = date.getFullYear();
  const monthPositon = date.getMonth();
  const month = monthNames[monthPositon];
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return {
    year, month, day, hour, minutes,
  };
};

export default getDate;
