import { screen } from '@testing-library/react';
import React from 'react';
import CalendarBoard from '../../components/CalendarBoard';
import renderWithAllProviders from '../helpers/renderWithAllProviders';
import calendarBoard from '../mocks/calendarBoard';

const appState = {
  year: 2021,
  month: 'November',
  setSelectedDate: jest.fn(),
  selectedDay: 20,
  selectedMonth: 'November',
  selectedYear: 2021,
};

describe('verifica a renderização e o comportamento do componente CalendarBoard', () => {
  it('verifica se todos os dias são renderizados no calendário', () => {
    renderWithAllProviders(
      <CalendarBoard />,
      appState,
      { calendarBoard },
      {},
      { allTasks: [] },
    );

    calendarBoard.forEach((week) => {
      week.forEach((day) => {
        if (!day) return;
        expect(screen.getByText(day)).toBeInTheDocument();
      });
    });
  });
});
