import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import MonthButton from '../../components/MonthButton';
import renderWithAppProvider from '../helpers/renderWithAppProvider';

describe('verifica a renderização e o funcionamento do componente MonthButton', () => {
  let month = 'January';
  let year = 2022;
  const providerProps = {
    month,
    year,
    setDate: (newDate) => { [year, month] = newDate; },
  };

  it(`verifica se ao passar increment, 
  renderiza o botão que seta o estado para o mes posterior`, () => {
    renderWithAppProvider(
      <MonthButton text="increment" />,
      { providerProps },
    );

    const incButton = screen.getByRole('button');

    expect(incButton).toBeInTheDocument();

    userEvent.click(incButton);

    expect(month).toBe('February');
  });

  it(`verifica se ao passar increment, no ultimo mês do ano
  renderiza o botão que seta o estado para o mes e ano posterior`, () => {
    providerProps.month = 'December';
    renderWithAppProvider(
      <MonthButton text="increment" />,
      { providerProps },
    );

    const incButton = screen.getByRole('button');

    expect(incButton).toBeInTheDocument();

    userEvent.click(incButton);

    expect(month).toBe('January');
    expect(year).toBe(2023);
  });

  it(`verifica se ao passar decrement, 
  renderiza o botão que seta o estado para o mes anterior`, () => {
    providerProps.month = 'July';
    renderWithAppProvider(
      <MonthButton text="decrement" />,
      { providerProps },
    );

    const incButton = screen.getByRole('button');

    expect(incButton).toBeInTheDocument();

    userEvent.click(incButton);

    expect(month).toBe('June');
  });

  it(`verifica se ao passar decrement, no primeiro mes do ano 
  renderiza o botão que seta o estado para o mes e ano anterior`, () => {
    providerProps.month = 'January';
    renderWithAppProvider(
      <MonthButton text="decrement" />,
      { providerProps },
    );

    const incButton = screen.getByRole('button');

    expect(incButton).toBeInTheDocument();

    userEvent.click(incButton);

    expect(month).toBe('December');
    expect(year).toBe(2021);
  });
});
