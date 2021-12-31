import { monthNames } from '../constants/namesList';
import { ONE } from '../constants/numbers';

const decrementMonth = (month: string, year:number) => {
  const position = monthNames.indexOf(month);
  const newPosition = !position ? monthNames.length - ONE : position - ONE;
  const newMonth = monthNames[newPosition];
  const newYear = !position ? year - ONE : year;

  return { newMonth, newYear };
};

export default decrementMonth;
