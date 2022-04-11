import React from 'react';
import Calendar from '../Calendar';
import SelectDate from '../SelectDate';
import Tasks from '../Tasks';
import './style.css';

function Content() {
  return (
    <div className="Content">
      <SelectDate />
      <Calendar />
      <Tasks />
    </div>
  );
}

export default Content;
