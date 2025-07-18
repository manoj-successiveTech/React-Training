'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('auth', 'true'); // simulate login
    router.push('/question'); // go to protected page
  }, []);

  return <h1>Logging in...</h1>;
};

export default LoginPage;
