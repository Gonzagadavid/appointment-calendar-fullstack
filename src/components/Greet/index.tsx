import React from 'react';
import useStorage from '../../hooks/useStorage';

function Greet() {
  const { userName } = useStorage('calendar');
  const greetText = `Welcome, ${userName}!`;

  return (
    <p>{greetText}</p>
  );
}

export default Greet;
