import React from 'react';
import { render, screen } from '@testing-library/react';
import ConditionComponent from '../../components/ConditionComponent';

describe('verifica renderização e funcionamento do componente ConditionComponent', () => {
  it('verifica se ao receber props condition como true o componente children é renderizado', () => {
    render(<ConditionComponent condition className="class-test"><h1>Teste</h1></ConditionComponent>);
    const h1 = screen.getByRole('heading', { level: 1 });

    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('Teste');
    expect(h1.parentElement).toHaveProperty('className', 'class-test');
  });
  it('verifica se ao receber props condition como false o componente children não é renderizado', () => {
    render(<ConditionComponent condition={false} className="class-test"><h1>Teste</h1></ConditionComponent>);
    const h1 = screen.queryByRole('heading', { level: 1 });

    expect(h1).toBeNull();
  });
});
