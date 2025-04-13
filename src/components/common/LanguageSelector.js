import React, { useContext, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../../contexts/LanguageContext';

const LanguageSelector = ({ isOpen, onClose }) => {
  const { language, changeLanguage, availableLanguages } = useContext(LanguageContext);
  const dropdownRef = useRef(null);
  
  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  // Handle language change
  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    onClose();
  };

  return (
    <motion.div
      ref={dropdownRef}
      className="w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 overflow-hidden z-50"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className="py-1">
        {Object.entries(availableLanguages).map(([code, name]) => (
          <motion.button
            key={code}
            className={`w-full text-left px-4 py-2 text-sm ${
              language === code 
                ? 'bg-primary text-white' 
                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
            } transition-colors duration-200`}
            onClick={() => handleLanguageChange(code)}
            whileHover={{ backgroundColor: language === code ? '' : 'rgba(88, 101, 242, 0.1)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="mr-2">{getLanguageFlag(code)}</span>
            {name}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

// Helper function to get flag emoji for each language
const getLanguageFlag = (langCode) => {
  const flags = {
    en: '🇺🇸',
    es: '🇪🇸',
    pt: '🇵🇹',
    ar: '🇸🇦',
    fr: '🇫🇷'
  };
  
  return flags[langCode] || '';
};

export default LanguageSelector;