import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SignUp from '../../components/SignUp';
import renderWithAllProviders from '../helpers/renderWithAllProviders';

const userState = {
  name: '',
  lastname: '',
  email: '',
  confirm: '',
  setEmail: jest.fn(),
  password: '',
  setPassword: jest.fn(),
  setKeepConnect: jest.fn(),
  keepConnect: false,
  sendLogin: jest.fn(),
  setName: jest.fn(),
  sentLastname: jest.fn(),
  sendNewUser: jest.fn(),
  setConfirm: jest.fn(),
};

const appState = {
  renderSignup: true,
  setRenderLogin: jest.fn(),
  setRenderSignup: jest.fn(),
};

describe('verifica a renderização e o funcionamento do componente SignUp', () => {
  it('verifica a renderização dos componentes', () => {
    renderWithAllProviders(<SignUp />, appState, {}, userState, {}, {});

    const title = screen.getByRole('heading', { name: 'Sign up' });
    const name = screen.getByPlaceholderText('Name');
    const lastname = screen.getByPlaceholderText('Lastname');
    const email = screen.getByPlaceholderText('example@email.com');
    const password = screen.getAllByPlaceholderText('password');
    const btnEnter = screen.getByText('Send');
    const btnLogin = screen.getByText('Log In');
    const btnCancel = screen.getByText('Cancel');

    expect(title).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(lastname).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password[0]).toBeInTheDocument();
    expect(password[1]).toBeInTheDocument();
    expect(btnEnter).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();
    expect(btnCancel).toBeInTheDocument();
  });

  it('verfica o funcionamento dos inputs', () => {
    renderWithAllProviders(<SignUp />, appState, {}, userState, {}, {});

    const email = screen.getByPlaceholderText('example@email.com');
    const password = screen.getAllByPlaceholderText('password');

    userEvent.type(email, 'example');

    expect(userState.setEmail).toBeCalledTimes(7);

    userEvent.type(password[0], 'example');

    expect(userState.setEmail).toBeCalledTimes(7);
  });

  it('verifica a funcionalidade dos botões', () => {
    renderWithAllProviders(
      <SignUp />,
      appState,
      {},
      {
        ...userState,
        name: 'Teste',
        lastname: 'teste',
        email: 'example@email.com',
        password: '111111',
        confirm: '111111',
      },
      {},
      {},
    );

    const btnEnter = screen.getByText('Send');
    const btnLogin = screen.getByText('Log In');
    const btnCancel = screen.getByText('Cancel');

    userEvent.click(btnEnter);

    expect(userState.sendNewUser).toBeCalled();

    userEvent.click(btnLogin);

    expect(appState.setRenderLogin).toBeCalledWith(true);
    expect(appState.setRenderSignup).toBeCalledWith(false);

    userEvent.click(btnCancel);

    expect(appState.setRenderSignup).toBeCalledWith(false);
  });
});
