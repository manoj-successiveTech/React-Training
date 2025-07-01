
// 'use client'
// import React, { createContext, useState } from 'react';
// import '@/context/LanguageContext'


// export const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState('en');

//   const toggleLanguage = () => {
//     setLanguage(language === 'en' ? 'es' : 'en');
//   };

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

 'use client'
 
import React, { createContext, useState } from 'react';
import '@/context/LanguageContext'

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};