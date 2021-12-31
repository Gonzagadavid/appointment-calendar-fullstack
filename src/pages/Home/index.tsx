import React from 'react';
import Calendar from '../../components/Calendar';
import SelectDate from '../../components/SelectDate';
import Tasks from '../../components/Tasks';
import './style.css';

function Home() {
  return (
    <div className="Home">
      <SelectDate />
      <Calendar />
      <Tasks />
    </div>
  );
}

export default Home;
