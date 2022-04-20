import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import DayBox from '../../components/DayBox';
import renderWithAllProviders from '../helpers/renderWithAllProviders';

const providerProps = {
  year: 2021,
  month: 'November',
  setSelectedDate: jest.fn(),
  selectedDay: 20,
  selectedMonth: 'November',
  selectedYear: 2021,
};

describe('verifica a renderização e o funcionamento do componente DayBox', () => {
  it('verifica se quando tem tarefa no dia, o icone é renderizado', () => {
    renderWithAllProviders(
      <DayBox day={20} />,
      providerProps,
      {},
      {},
      { allTasks: [{ date: new Date(2021, 10, 20) }] },
    );

    const day = screen.getByText(/20/);

    expect(day).toBeInTheDocument();
    expect(day.tagName).toBe('BUTTON');
    expect(day).toContainHTML('span');
  });

  it('verifica se quando tem tarefa no dia, o icone é renderizado', () => {
    renderWithAllProviders(
      <DayBox day={20} />,
      providerProps,
      {},
      {},
      { allTasks: [{ date: new Date(2021, 10, 21) }] },
    );

    const day = screen.getByText(/20/);

    expect(day).toBeInTheDocument();
    expect(day.tagName).toBe('BUTTON');
    expect(day).not.toContainHTML('span');

    userEvent.click(day);

    expect(providerProps.setSelectedDate).toBeCalledWith([2021, 'November', 20]);
  });
});
