import { Dispatch, SetStateAction } from 'react';

export type DefaultState = {
  year: number,
  month: string,
  setYear: Dispatch<SetStateAction<number>>,
  setMonth: Dispatch<SetStateAction<string>>,
}
