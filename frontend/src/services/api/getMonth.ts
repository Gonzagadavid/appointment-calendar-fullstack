import axios from 'axios';

const getMonth = async (month: string, year: number) => {
  const url = `https://calendarjsonapi.herokuapp.com/month/${month}?year=${year}`;
  const { data } = await axios.get(url);
  const board = data[month];
  const monthCurrent = board.length === 6 ? board : [...board, Array(7).fill(0)];
  return monthCurrent;
};

export default getMonth;
