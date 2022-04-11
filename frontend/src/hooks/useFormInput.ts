import { FormEvent, useState } from 'react';

const useFormInput = (initialState: object) => {
  const [state, setInputState] = useState(initialState);

  const setState = (event: FormEvent<Element>) => {
    const { name, value } = event.target as HTMLInputElement;
    setInputState({ ...state, [name]: value });
  };

  const resetState = (newState = initialState) => setInputState(newState);

  return { state, setState, resetState };
};

export default useFormInput;
