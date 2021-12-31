import { Dispatch, ReactNode, SetStateAction } from 'react';

export type DefaultState = {
  year: number,
  month: string,
  setYear: Dispatch<SetStateAction<number>>,
  setMonth: Dispatch<SetStateAction<string>>,
}

export type CalendarState = {
  calendarBoard: number[][]
}

export type PropsCondition = {
  children: ReactNode,
  condition: boolean,
  className: string
}
