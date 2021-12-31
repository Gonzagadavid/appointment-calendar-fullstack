import { ONE } from '../constants/numbers';

const yearOptions = (year: number) => {
  const afterYear = Array(5).fill(0).map((_, index) => year + index + ONE);
  const beforeYear = Array(5).fill(0).map((_, index) => year - index).reverse();
  const optionList = [...beforeYear, ...afterYear];

  return optionList;
};

export default yearOptions;
