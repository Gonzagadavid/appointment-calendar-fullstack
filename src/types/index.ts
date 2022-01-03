import {
  ReactNode, SetStateAction, Dispatch, FormEvent,
} from 'react';

export type ArrayParam = Array<number|string|boolean>

export type DefaultState = {
  year: number,
  month: string,
  setDate: (_state: ArrayParam) => ArrayParam,
  selectedDay: number,
  selectedMonth: string,
  selectedYear: number,
  setSelectedDate: (_state: ArrayParam) => ArrayParam,
  connected: boolean,
  setconnected: Dispatch<SetStateAction<boolean>>,
  message: string,
  setMessage: Dispatch<SetStateAction<string>>,
}

export type CalendarState = {
  calendarBoard: number[][]
}

export type UserState = {
  name: string,
  lastname: string,
  email: string,
  password: string,
  confirm: string,
  setName: (_event: FormEvent<Element>) => void,
  setLastname: (_event: FormEvent<Element>) => void,
  setEmail: (_event: FormEvent<Element>) => void,
  setPassword: (_event: FormEvent<Element>)=> void,
  setConfirm: (_event: FormEvent<Element>)=> void,
  sendNewUser: () => void
  keepConnect: boolean,
  setKeepConnect: Dispatch<SetStateAction<boolean>>,
  sendLogin: () => void,
};

export type TaskItem = {
  id: string,
  title: string,
  date: string,
}

export type TaskDetailsType = {
  _id: string,
  userId: string,
  email: string,
  title: string,
  description: string,
  status: string,
  date: string,
  updated: string,
}

export type TaskState = {
  allTasks: TaskItem[],
  tasksSelected: TaskItem[],
  setIdSelected: Dispatch<SetStateAction<string>>,
  taskDetails: TaskDetailsType,
}

export type User = {
  name: string,
  lastname: string,
  email: string,
  password: string,
}

export type PropsCondition = {
  children: ReactNode,
  condition: boolean,
  className: string
}

export type UserLogin = {
  email: string,
  password: string,
}

export type HandlerFunction = (
  _element: EventTarget, _callback:Dispatch<SetStateAction<string>>
  ) => void

type CallbackEvent = (_event: FormEvent) => void

export type useInputResult = Array<string|number|CallbackEvent>

export type UserInfo = { token: string, userName: string }

export type TaksSelectedDate = {
  selectedYear: number, selectedMonth: string, selectedDay: number
}
