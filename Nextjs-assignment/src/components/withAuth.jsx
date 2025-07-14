'use client';

import { useEffect, useState } from 'react';

const withAuth = (WrappedComponent) => {
  const AuthWrapper = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      // Simulate authentication (can replace with real logic)
      const auth = localStorage.getItem('auth');
      if (auth === 'true') {
        setIsAuthenticated(true);
      } else {
        // Fake login prompt
        const shouldLogin = window.confirm('You are not logged in. Click OK to simulate login.');
        if (shouldLogin) {
          localStorage.setItem('auth', 'true');
          setIsAuthenticated(true);
        }
      }
    }, []);

    if (!isAuthenticated) {
      return <p>Checking authentication...</p>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthWrapper;
};

export default withAuth;
