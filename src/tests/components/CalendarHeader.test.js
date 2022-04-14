import { screen } from '@testing-library/react';
import React from 'react';
import CalendarHeader from '../../components/CalendarHeader';
import renderWithAppProvider from '../helpers/renderWithAppProvider';

describe('verifica a renderização e o funcionamento do CalendarHeader', () => {
  const providerProps = { year: 2022, month: 'November' };
  it('verifica se o mês e o ano selecionado é renderizado', () => {
    renderWithAppProvider(<CalendarHeader />, { providerProps });
    const monthTitle = screen.getByRole('heading', { level: 2 });

    expect(monthTitle).toBeInTheDocument();
    expect(monthTitle).toHaveTextContent('November 2022');
  });
});
