import { ReactNode } from 'react';

export type ArrayParam = Array<number|string|boolean>

export type DefaultState = {
  year: number,
  month: string,
  setDate: (_state: ArrayParam) => ArrayParam,
  selectedDay: number,
  selectedMonth: string,
  selectedYear: number,
  setSelectedDate: (_state: ArrayParam) => ArrayParam,
}

export type CalendarState = {
  calendarBoard: number[][]
}

export type PropsCondition = {
  children: ReactNode,
  condition: boolean,
  className: string
}
