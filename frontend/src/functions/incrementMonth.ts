import { monthNames } from '../constants/namesList';
import { ONE } from '../constants/numbers';

const incrementMonth = (month: string, year: number) => {
  const position = monthNames.indexOf(month) + ONE;
  const newPosition = position % monthNames.length;
  const newMonth = monthNames[newPosition];
  const newYear = !newPosition ? year + ONE : year;
  return { newMonth, newYear };
};

export default incrementMonth;
