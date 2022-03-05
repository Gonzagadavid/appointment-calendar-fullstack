import { useState } from 'react';
import { FOUR, SIX } from '../constants/numbers';

const useCode = () => {
  const [code, setCode] = useState('');
  const [codeInput, setInput] = useState('');
  const [auth, setAuth] = useState(false);

  const setCodeInput = (event: InputEvent) => {
    const { value } = event.target as HTMLInputElement;

    if (!/[\w-]/g.test(value) || value.length > SIX) return null;

    if (value.length === FOUR) return setInput(`${value}-`);
    const check = codeInput === code;
    setAuth(check);

    return setInput(value);
  };

  return { setCode, setCodeInput, auth };
};

export default useCode;
