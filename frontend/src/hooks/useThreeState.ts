import { useState } from 'react';
import { ArrayParam } from '../types';

const useThreeState = (initialStates: ArrayParam) => {
  const [initialOne, initialTwo, initialThree] = initialStates;
  const [stateOne, setStateOne] = useState(initialOne);
  const [stateTwo, setStateTwo] = useState(initialTwo);
  const [stateThree, setStateThree] = useState(initialThree);

  const setStates = (newStates: ArrayParam) => {
    const [newStateOne, newStateTwo, newStateThree] = newStates;
    setStateOne(newStateOne);
    setStateTwo(newStateTwo);
    setStateThree(newStateThree);
  };

  return [stateOne, stateTwo, stateThree, setStates];
};

export default useThreeState;
