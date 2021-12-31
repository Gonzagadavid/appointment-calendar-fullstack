import React from 'react';
import useStorage from '../../hooks/useStorage';

function Greet() {
  const { user } = useStorage();
  const greetText = `Welcome, ${user}!`;

  return (
    <p>{greetText}</p>
  );
}

export default Greet;
