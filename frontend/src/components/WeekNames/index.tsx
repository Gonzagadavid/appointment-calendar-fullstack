import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dayNames } from '../../constants/namesList';
import './style.css';

function WeekNames() {
  return (
    <div className="WeekNames">
      {dayNames.map((dayName) => (
        <div key={uuidv4()} className="name">{dayName}</div>
      ))}
    </div>
  );
}

export default WeekNames;
