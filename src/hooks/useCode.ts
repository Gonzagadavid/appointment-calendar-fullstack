import { FormEvent, useState } from 'react';
import { FOUR, ZERO } from '../constants/numbers';
import { EMPTY, HIFEN } from '../constants/strings';

const useCode = () => {
  const initCode: string[] = [];
  const [code, setCode] = useState(EMPTY);
  const [codeInput, setInput] = useState(initCode);
  const [auth, setAuth] = useState(false);
  const [indexCode, setIndex] = useState(ZERO);

  const setCodeInput = (event: FormEvent<Element>) => {
    const { value } = event.target as HTMLInputElement;

    const regexp = indexCode === FOUR ? /\D/ : /[^a-zA-Z]/;
    if (regexp.test(value)) return;

    const arrCode = [...codeInput, value.toUpperCase()];

    setIndex(arrCode.length);
    setInput(arrCode);

    const check = arrCode.join(EMPTY) === code.replace(HIFEN, EMPTY);

    setAuth(check);
  };

  const resetCode = () => {
    setCode(EMPTY);
    setInput(initCode);
    setAuth(false);
    setIndex(ZERO);
  };

  return {
    setCode, setCodeInput, auth, codeInput, indexCode, resetCode,
  };
};

export default useCode;
