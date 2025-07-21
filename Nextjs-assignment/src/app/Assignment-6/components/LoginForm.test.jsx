import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from '../components/LoginForm';

test('accepts user input and submits form', () => {
  const handleSubmit = jest.fn();
  const { getByTestId } = render(<LoginForm onSubmit={handleSubmit} />);

  fireEvent.change(getByTestId('username'), { target: { value: 'testuser' } });
  fireEvent.change(getByTestId('password'), { target: { value: 'secret' } });

  fireEvent.click(getByTestId('submit'));

  expect(handleSubmit).toHaveBeenCalledWith({ username: 'testuser', password: 'secret' });
});
