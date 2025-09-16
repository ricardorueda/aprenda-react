import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app components correctly', () => {
  const { getByText } = render(<App />);
  
  // Verifica se os títulos das seções estão sendo renderizados
  const flexboxTitle = getByText(/section flexbox/i);
  const grid1Title = getByText(/section grid 1/i);
  const grid2Title = getByText(/section grid 2/i);
  const grid3Title = getByText(/section grid 3/i);
  
  expect(flexboxTitle).toBeInTheDocument();
  expect(grid1Title).toBeInTheDocument();
  expect(grid2Title).toBeInTheDocument();
  expect(grid3Title).toBeInTheDocument();
});
