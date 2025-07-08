// app/layout.jsx

'use client';
import { AuthProvider } from '@/context/AuthContext';
import Styles from "@/app/styles/welcome3.css"

const RootLayout = ({ children }) => {
  return (
  
    
        <AuthProvider> {/* Already wrapping the entire app */}
          {children}
        </AuthProvider>
    
   
  );
};

export default RootLayout;
