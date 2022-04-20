import { screen } from '@testing-library/react';
import React from 'react';
import TaskDate from '../../components/TaskDate';
import renderWithAppProvider from '../helpers/renderWithAppProvider';

describe('verifica a renderização e o funcionamento do componente TaskDate', () => {
  const providerProps = {
    selectedYear: 2022,
    selectedMonth: 'April',
    selectedDay: 14,
  };
  it('verifica a renderização das opções de anos anteriores e posteriores ao ano selecionado', () => {
    renderWithAppProvider(<TaskDate />, { providerProps });

    const date = screen.getByRole('heading', { level: 2 });

    expect(date).toBeInTheDocument();
    expect(date).toHaveTextContent('Task List April 14, 2022');
  });
});
