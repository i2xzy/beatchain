import React from 'react';
import { render } from 'react-testing-library';
import User from './User';

const mockData = { name: 'Isaac' };

it('renders more info button', () => {
  const { getByText } = render(<User user={mockData} />);
  expect(getByText('More Info')).toBeInTheDocument();
});

it('renders name from mock data', () => {
  const { getByText } = render(<User user={mockData} />);
  expect(getByText('Isaac')).toBeInTheDocument();
});
