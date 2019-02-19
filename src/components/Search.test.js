import React from 'react';
import { render } from 'react-testing-library';
import Search from './Search';

it('renders search button', () => {
  const { getByText } = render(<Search />);
  expect(getByText('Search')).toBeInTheDocument();
});
