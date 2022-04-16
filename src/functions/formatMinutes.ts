import { ONE } from '../constants/numbers';

const formatMinutes = (minutes: number) => (String(minutes).length === ONE
  ? `0${minutes}` : minutes);

export default formatMinutes;
