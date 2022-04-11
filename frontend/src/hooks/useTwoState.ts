import { useState } from 'react';
import { ArrayParam } from '../types';

const useTwoState = (initialStates: ArrayParam) => {
  const [initialOne, initialTwo] = initialStates;
  const [stateOne, setStateOne] = useState(initialOne);
  const [stateTwo, setStateTwo] = useState(initialTwo);

  const setStates = (newStates: ArrayParam) => {
    const [newStateOne, newStateTwo] = newStates;
    setStateOne(newStateOne);
    setStateTwo(newStateTwo);
  };

  return [stateOne, stateTwo, setStates];
};

export default useTwoState;
