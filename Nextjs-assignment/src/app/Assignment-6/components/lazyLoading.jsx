// layLoading.jsx file  using 'next/dynamic'

'use client';

import dynamic from 'next/dynamic';

const LazyCounter = dynamic(() => import('@/components/Weather'), {
  loading: () => <p>Loading Counter...</p>,

});

export default function CounterPage() {
  return (
    <main>
      <h1>Lazy Loaded Counter Page</h1>
      <LazyCounter />
    </main>
  );
}
