import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import LogIn from '../../components/LogIn';
import renderWithAllProviders from '../helpers/renderWithAllProviders';

const userState = {
  email: '',
  setEmail: jest.fn(),
  password: '',
  setPassword: jest.fn(),
  setKeepConnect: jest.fn(),
  keepConnect: false,
  sendLogin: jest.fn(),
};

const appState = {
  renderLogin: true,
  setRenderLogin: jest.fn(),
  setRenderSignup: jest.fn(),
};

describe('verifica a renderização e o funcionamento do componente LogIn', () => {
  it('verifica a renderização dos componentes', () => {
    renderWithAllProviders(<LogIn />, appState, {}, userState, {}, {});

    const title = screen.getByRole('heading', { name: 'Log In' });
    const email = screen.getByPlaceholderText('example@email.com');
    const password = screen.getByPlaceholderText('password');
    const keepConnect = screen.getByLabelText('keep permanently connected');
    const btnEnter = screen.getByText('Enter');
    const btnSignup = screen.getByText('Sign Up');
    const btnCancel = screen.getByText('Cancel');

    expect(title).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(keepConnect).toBeInTheDocument();
    expect(btnEnter).toBeInTheDocument();
    expect(btnSignup).toBeInTheDocument();
    expect(btnCancel).toBeInTheDocument();
  });

  it('verfica o funcionamento dos inputs', () => {
    renderWithAllProviders(<LogIn />, appState, {}, userState, {}, {});

    const email = screen.getByPlaceholderText('example@email.com');
    const password = screen.getByPlaceholderText('password');
    const keepConnect = screen.getByLabelText('keep permanently connected');

    userEvent.type(email, 'example');

    expect(userState.setEmail).toBeCalledTimes(7);

    userEvent.type(password, 'example');

    expect(userState.setEmail).toBeCalledTimes(7);

    userEvent.click(keepConnect);

    expect(userState.setKeepConnect).toHaveBeenCalled();
  });

  it('verifica a funcionalidade dos botões', () => {
    renderWithAllProviders(
      <LogIn />,
      appState,
      {},
      { ...userState, email: 'example@email.com', password: '111111' },
      {},
      {},
    );

    const btnEnter = screen.getByText('Enter');
    const btnSignup = screen.getByText('Sign Up');
    const btnCancel = screen.getByText('Cancel');

    expect(btnEnter).toBeEnabled();
    userEvent.click(btnEnter);

    expect(userState.sendLogin).toBeCalled();

    userEvent.click(btnSignup);

    expect(appState.setRenderLogin).toBeCalledWith(false);
    expect(appState.setRenderSignup).toBeCalledWith(true);

    userEvent.click(btnCancel);

    expect(appState.setRenderLogin).toBeCalledWith(false);
  });
});
