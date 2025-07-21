import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('increments and decrements the counter', () => {
  const { getByTestId } = render(<Counter />);
  const count = getByTestId('count');
  const incrementBtn = getByTestId('increment');
  const decrementBtn = getByTestId('decrement');

  fireEvent.click(incrementBtn);
  expect(count.textContent).toBe('1');

  fireEvent.click(decrementBtn);
  expect(count.textContent).toBe('0');
});
