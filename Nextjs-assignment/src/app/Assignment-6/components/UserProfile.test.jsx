import React from 'react';
import { render } from '@testing-library/react';
import UserProfile from './UserProfile';

test('renders user profile information', () => {
  const mockUser = {
    name: 'Manoj Kumar',
    email: 'manoj@example.com',
    phone: '123-456-7890'
  };

  const { getByTestId } = render(<UserProfile {...mockUser} />);

  expect(getByTestId('name').textContent).toBe(mockUser.name);
  expect(getByTestId('email').textContent).toBe(mockUser.email);
  expect(getByTestId('phone').textContent).toBe(mockUser.phone);
});
