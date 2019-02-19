import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

it('renders title', () => {
  const { getByText } = render(<App />);
  expect(getByText('Github search')).toBeInTheDocument();
});
