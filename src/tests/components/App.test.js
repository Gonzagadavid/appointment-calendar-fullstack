import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('verifica a renderização da aplicação', () => {
  it('verifica se o titulo da aplicação é renderizado', () => {
    render(<App />);
    const appTitle = screen.getByRole('heading', { level: 1 });
    expect(appTitle).toBeInTheDocument();
    expect(appTitle).toHaveTextContent('APP’ointment Calendar');
  });
});
