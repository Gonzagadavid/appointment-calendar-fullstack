import { monthNames } from './namesList';

const date = new Date();

const yearCrr = date.getFullYear();

const monthPosition = date.getMonth();

const monthCrr = monthNames[monthPosition];

const dayCrr = date.getDate();

const timeCrr = date.toLocaleTimeString([], { timeStyle: 'short' });

export {
  date, yearCrr, monthCrr, dayCrr, timeCrr,
};
