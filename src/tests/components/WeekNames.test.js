import { render, screen } from '@testing-library/react';
import React from 'react';
import WeekNames from '../../components/WeekNames';
import { dayNames } from '../../constants/namesList';

describe('Verifica o funcionamento e a renderização do componente WeekNames', () => {
  it('Verifica se todos os nomes dos dias da semana são renderizados', () => {
    render(<WeekNames />);

    dayNames.forEach((dayName) => {
      expect(screen.getByText(dayName)).toBeInTheDocument();
    });
  });
});
