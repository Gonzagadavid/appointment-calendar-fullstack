import React from 'react';
import Calendar from '../../components/Calendar';
import SelectDate from '../../components/SelectDate';
import './style.css';

function Home() {
  return (
    <div className="Home">
      <SelectDate />
      <Calendar />
    </div>
  );
}

export default Home;
