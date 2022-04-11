import {
  NINE, SIXTY_FIVE, TWENTY_FIVE, ZERO,
} from '../../constants/numbers';
import { EMPTY } from '../../constants/strings';

const generateCode = (length: number) => {
  const code = Array(length)
    .fill(ZERO)
    .map(() => (String.fromCharCode(Math.round(Math.random() * TWENTY_FIVE + SIXTY_FIVE))))
    .join(EMPTY);
  const digit = Math.round(Math.random() * NINE);

  return `${code}-${digit}`;
};

export default generateCode;
