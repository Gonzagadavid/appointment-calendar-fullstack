import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import LoginAcess from '../../components/LoginAcess';
import renderWithAppProvider from '../helpers/renderWithAppProvider';

describe('verifica a renderização e o funcionamento do componente LoginAcess', () => {
  let renderLogin = false;
  let renderSignup = false;
  const providerProps = {
    setRenderLogin: (bool) => { renderLogin = bool; },
    setRenderSignup: (bool) => { renderSignup = bool; },
  };
  it('verifica a renderização e o funcionamento do botão de login', () => {
    renderWithAppProvider(<LoginAcess />, { providerProps });
    const loginBtn = screen.getByText('Log In');

    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn.tagName).toBe('BUTTON');
    expect(renderLogin).toBeFalsy();

    userEvent.click(loginBtn);

    expect(renderLogin).toBeTruthy();
  });

  it('verifica a renderização e o funcionamento do botão de signup', () => {
    renderWithAppProvider(<LoginAcess />, { providerProps });
    const signBtn = screen.getByText('Sign Up');

    expect(signBtn).toBeInTheDocument();
    expect(signBtn.tagName).toBe('BUTTON');
    expect(renderSignup).toBeFalsy();

    userEvent.click(signBtn);

    expect(renderSignup).toBeTruthy();
  });
});
