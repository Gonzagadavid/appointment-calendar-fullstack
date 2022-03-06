import { FormEvent, useState } from 'react';
import {
  FIVE, FOUR, ONE, SIX, ZERO,
} from '../constants/numbers';

const useCode = () => {
  const [code, setCode] = useState('');
  const [codeInput, setInput] = useState('');
  const [auth, setAuth] = useState(false);

  const setCodeInput = (event: FormEvent<Element>) => {
    const { value } = event.target as HTMLInputElement;

    if (!value) setInput('');

    if (!/[\w-]/g.test(value) || value.length > SIX) return null;

    const text = value.slice(ZERO, FOUR).toUpperCase();
    const digit = value.slice(-ONE);
    const formatText = `${text}-${digit}`;

    if (value.length === FIVE && /\d/.test(digit)) setInput(formatText);

    const check = formatText === code;

    setAuth(check);

    return setInput(text);
  };

  return {
    setCode, setCodeInput, auth, codeInput,
  };
};

export default useCode;
