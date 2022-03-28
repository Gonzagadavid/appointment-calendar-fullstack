import { screen } from '@testing-library/react';
import React from 'react';
import Header from '../../components/Header';
import renderWithAppProvider from '../helpers/renderWithAppProvider';

describe('verifica a renderização e o funcionamento do componente Header', () => {
  it('verifica se o titulo é renderizado', () => {
    localStorage.setItem('calendar', JSON.stringify({ userName: 'Fulano' }));
    const providerProps = { connected: true };
    renderWithAppProvider(<Header />, { providerProps });

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('APP’ointment Calendar');
  });
  it('se o estado connected for false, renderiza os botões Login e Signup', () => {
    const providerProps = { connected: false };
    renderWithAppProvider(<Header />, { providerProps });

    expect(screen.getByText('Log In')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
  it('se o estado connected for true, é exibido uma saudação e o logout ', () => {
    localStorage.setItem('calendar', JSON.stringify({ userName: 'Fulano' }));
    const providerProps = { connected: true };
    renderWithAppProvider(<Header />, { providerProps });

    expect(screen.getByText('Welcome, Fulano!'));
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
});
