import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Logout from '../../components/Logout';
import renderWithAppProvider from '../helpers/renderWithAppProvider';

describe('verifica a renderização e o funcionamento do componente Logout', () => {
  let connected = true;
  const providerProps = {
    setconnected: (bool) => { connected = bool; },
  };

  it('verifica a renderização do botão', () => {
    renderWithAppProvider(<Logout />, { providerProps });

    const logoutBtn = screen.getByText('Logout');
    expect(logoutBtn).toBeInTheDocument();
    expect(logoutBtn.tagName).toBe('BUTTON');
  });

  it('verifica a renderização do botão', () => {
    localStorage.setItem('calendar', JSON.stringify({ userName: 'Fulano' }));
    renderWithAppProvider(<Logout />, { providerProps });

    const logoutBtn = screen.getByText('Logout');
    expect(connected).toBeTruthy();

    userEvent.click(logoutBtn);

    expect(connected).toBeFalsy();
    expect(localStorage.getItem('calendar')).toBeNull();
  });
});
