import { FormEvent, useState } from 'react';

const useInput = (initialState: string) => {
  const [state, setInputState] = useState(initialState);

  const setState = (event: FormEvent<Element>) => {
    const { value } = event.target as HTMLInputElement;
    setInputState(value);
  };

  const resetState = (newState = initialState) => setInputState(newState);

  return { state, setState, resetState };
};

export default useInput;
