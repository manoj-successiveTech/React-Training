// app/layout.jsx

'use client';
import { AuthProvider } from '@/context/AuthContext';

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <AuthProvider> {/* Already wrapping the entire app */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
