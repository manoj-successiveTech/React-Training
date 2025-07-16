// 10.Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.

'use client'
import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import '@/app/styles/welcome2.css';
import '@/context/LanguageContext'


const Page = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const content = {
    en: {
      welcome: 'Welcome to our website!',
      switchLanguage: 'Switch to Spanish',
    },
    es: {
      welcome: '¡Bienvenido a nuestro sitio web!',
      switchLanguage: 'Cambiar a Inglés',
    },
  };

  return (

    <>

    <div className="container">
      <h1>{content[language].welcome}</h1>
      <button onClick={toggleLanguage}>
        {content[language].switchLanguage}
      </button>
    </div>

    </>

  );
};

export default Page;