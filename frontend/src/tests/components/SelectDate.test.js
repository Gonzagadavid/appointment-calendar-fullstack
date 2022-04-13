import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SelectDate from '../../components/SelectDate';
import { monthNames } from '../../constants/namesList';
import renderWithAppProvider from '../helpers/renderWithAppProvider';

describe('verifica a renderização e o funcionamento do componente SelectDate', () => {
  const providerProps = {
    year: 2022,
    month: 'April',
    setDate: jest.fn(),
  };
  it('verifica a renderização das opções de anos anteriores e posteriores ao ano selecionado', () => {
    renderWithAppProvider(<SelectDate />, { providerProps });
    const options = screen.getAllByRole('option');

    options.forEach((option, index) => {
      expect(option).toHaveTextContent(2018 + index);
    });
  });

  it('verifica a renderização dos meses como botões', () => {
    renderWithAppProvider(<SelectDate />, { providerProps });

    monthNames.forEach((monthName) => {
      expect(screen.getByRole('button', { name: monthName })).toBeInTheDocument();
    });
  });

  it('verifica se o mês selecionado possui a class selected', () => {
    renderWithAppProvider(<SelectDate />, { providerProps });

    const selectedMonth = screen.getByRole('button', { name: 'April' });

    expect(selectedMonth).toHaveProperty('className', 'selectmonth selected');
  });

  it('verifica se o mês selecionado possui a class selected', () => {
    renderWithAppProvider(<SelectDate />, { providerProps });

    const selectMonth = screen.getByRole('button', { name: 'July' });

    expect(selectMonth).toBeInTheDocument();

    userEvent.click(selectMonth);

    expect(providerProps.setDate).toBeCalledWith([2022, 'July']);
  });

  it('verifica se o mês selecionado possui a classe selected', () => {
    renderWithAppProvider(<SelectDate />, { providerProps });

    const selectMonth = screen.getByRole('option', { name: '2023' });

    expect(selectMonth).toBeInTheDocument();

    userEvent.selectOptions(screen.getByRole('combobox'), '2023');

    expect(providerProps.setDate).toBeCalledWith([2023, 'April']);
  });
});
