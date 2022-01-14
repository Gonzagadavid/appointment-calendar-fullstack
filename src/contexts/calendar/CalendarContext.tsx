import { createContext } from 'react';
import { CalendarState } from '../../types';

const CalendarContext = createContext<CalendarState>({} as CalendarState);

export default CalendarContext;
