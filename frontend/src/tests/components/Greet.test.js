import { screen } from '@testing-library/react';
import React from 'react';
import Greet from '../../components/Greet';
import renderWithAppProvider from '../helpers/renderWithAppProvider';

describe('verifica a renderização e o funcionamento do componente Greet', () => {
  let connected = true;
  const providerProps = { setconnected: (bool) => { connected = bool; } };
  it('Se não ter userName salvo no local storage o estado de conectado é setado para falso', () => {
    renderWithAppProvider(<Greet />, { providerProps });
    const userName = localStorage.getItem('calendar');
    expect(userName).toBeNull();
    expect(connected).toBeFalsy();
  });
  it('Se ter userName salvo no local storage o componente renderiza uma saudação com o nome', () => {
    localStorage.setItem('calendar', JSON.stringify({ userName: 'Fulano' }));
    renderWithAppProvider(<Greet />, { providerProps });
    const { userName } = JSON.parse(localStorage.getItem('calendar'));
    expect(userName).toBe('Fulano');
    expect(screen.getByText('Welcome, Fulano!'));
  });
});
