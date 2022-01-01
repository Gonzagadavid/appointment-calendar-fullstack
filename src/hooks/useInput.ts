import { FormEvent, useState } from 'react';

const useInput = (initialState: string) => {
  const [state, setInputState] = useState(initialState);

  const setState = (event: FormEvent<Element>) => {
    const { value } = event.target as HTMLInputElement;
    setInputState(value);
  };

  return { state, setState };
};

export default useInput;
