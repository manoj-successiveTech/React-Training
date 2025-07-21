// lazyLoading.test.jsx
'use client';

import React from 'react';
import { render, screen } from '@testing-library/react';
import CounterPage from '@/app/layLoading';

// Mock the Weather component
jest.mock('@/components/Weather', () => {
  return function MockWeather(props) {
    return <div data-testid="mock-weather">Mocked Weather: {props.temperature}</div>;
  };
});

describe('Lazy Loaded CounterPage', () => {
  it('should render header and lazy-loaded Weather component with temperature prop', () => {
    render(<CounterPage />);

    // Check if main heading is present
    expect(screen.getByText(/Lazy Loaded Counter Page/i)).toBeInTheDocument();

    // Check if mocked Weather component is rendered with correct temperature
    expect(screen.getByTestId('mock-weather')).toHaveTextContent('Mocked Weather: 9');
  });

  it('should show fallback loading text when loading', async () => {
    // Temporarily override the dynamic import to simulate loading fallback
    jest.resetModules(); // Clear previous mocks

    const dynamic = require('next/dynamic');
    const OriginalDynamic = dynamic.default || dynamic;

    jest.mock('next/dynamic', () => ({
      __esModule: true,
      default: (importFn, { loading }) => {
        const FallbackComponent = loading;
        return () => <FallbackComponent />;
      },
    }));

    const CounterPageWithFallback = (await import('@/app/layLoading')).default;

    render(<CounterPageWithFallback />);
    expect(screen.getByText(/Loading Counter/i)).toBeInTheDocument();

    // Restore dynamic
    jest.doMock('next/dynamic', () => OriginalDynamic);
  });
});
