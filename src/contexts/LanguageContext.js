'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('tr');

  // Local storage'dan dil tercihini oku
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Dil değiştiğinde local storage'a kaydet
  useEffect(() => {
    localStorage.setItem('preferred-language', currentLanguage);
    
    // HTML'in dir attribute'unu güncelle (RTL desteği için)
    if (currentLanguage === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = currentLanguage;
    }
  }, [currentLanguage]);

  const changeLanguage = (languageCode) => {
    if (translations[languageCode]) {
      setCurrentLanguage(languageCode);
    }
  };

  const t = (key) => {
    return translations[currentLanguage]?.[key] || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages: [
      { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'ar', name: 'العربية', flag: '🇸🇦' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 