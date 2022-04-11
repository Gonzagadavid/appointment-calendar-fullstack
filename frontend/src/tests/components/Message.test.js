import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Message from '../../components/Menssage';
import renderWithAppProvider from '../helpers/renderWithAppProvider';

describe('verifica a renderização e o funcionamento do componente Message', () => {
  let message = 'Mensagem de teste';
  const providerProps = {
    message,
    setMessage: (bool) => { message = bool; },
  };

  afterEach(cleanup);

  it('verifica a renderização da mensagem que esta no estado', () => {
    renderWithAppProvider(<Message />, { providerProps });

    const renderizedMessage = screen.getByRole('heading', { level: 2 });

    expect(renderizedMessage).toHaveTextContent(message);
  });

  it('verifica a renderização e o funcionamento do botão OK', () => {
    renderWithAppProvider(<Message />, { providerProps });

    const renderizedMessage = screen.queryByRole('heading', { level: 2 });
    const btnOK = screen.getByRole('button', { name: 'OK' });

    expect(renderizedMessage).toBeInTheDocument();
    expect(btnOK).toBeInTheDocument();

    userEvent.click(btnOK);

    expect(message).toBeFalsy();
  });
});
