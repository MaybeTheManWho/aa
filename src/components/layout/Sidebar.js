import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faBook, 
  faGavel, 
  faShieldAlt, 
  faGamepad,
  faCode, 
  faUsers, 
  faQuestionCircle,
  faChevronLeft,
  faChevronRight,
  faGlobe,
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons';

// Contexts
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';

// Components
import LanguageSelector from '../common/LanguageSelector';

const Sidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  
  // Function to toggle sidebar collapse state
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  
  // Function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Toggle language dropdown
  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };
  
  // Navigation links with icons
  const navLinks = [
    { path: '/', icon: faHome, label: "Home" },
    { path: '/guidelines', icon: faBook, label: "Staff Guidelines" },
    { path: '/punishments', icon: faGavel, label: "Punishments" },
    { path: '/moderation', icon: faShieldAlt, label: "Moderation Guide" },
    { path: '/testing', icon: faGamepad, label: "Testing Guide" },
    { path: '/commands', icon: faCode, label: "Commands" },
    { path: '/staff', icon: faUsers, label: "Staff List" },
    { path: '/faq', icon: faQuestionCircle, label: "FAQ" },
  ];

  // Sidebar variants for animation
  const sidebarVariants = {
    expanded: { width: '240px', transition: { duration: 0.3, ease: 'easeInOut' } },
    collapsed: { width: '80px', transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  // Logo animation variants
  const logoVariants = {
    expanded: { scale: 1, rotate: 0, transition: { duration: 0.3 } },
    collapsed: { scale: 0.8, rotate: 360, transition: { duration: 0.5 } }
  };

  return (
    <motion.aside 
      className="bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen sticky top-0 left-0 z-40 overflow-y-auto shadow-md"
      variants={sidebarVariants}
      initial="expanded"
      animate={collapsed ? "collapsed" : "expanded"}
    >
      <div className="py-6 flex flex-col h-full">
        {/* Logo and Brand at top */}
        <div className={`px-4 mb-8 flex ${collapsed ? 'justify-center' : 'justify-start'} items-center`}>
          <motion.div 
            className="relative"
            variants={logoVariants}
            animate={collapsed ? "collapsed" : "expanded"}
          >
            <Link to="/" className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Sword Tierlist Logo" 
                  className="h-12 w-12 object-cover rounded-full"
                />
              </div>
              
              {!collapsed && (
                <span className="ml-3 font-bold text-lg text-primary">
                  Sword Tierlist
                </span>
              )}
            </Link>
          </motion.div>
        </div>
        
        {/* Navigation links */}
        <nav className="flex-1 px-2">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <motion.li key={link.path} whileHover={{ x: 3 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to={link.path}
                  className={`flex items-center py-3 px-4 rounded-lg transition-colors duration-200 
                    ${isActive(link.path) 
                      ? 'bg-primary text-white' 
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`
                  }
                >
                  <FontAwesomeIcon 
                    icon={link.icon} 
                    className={`${!collapsed ? 'mr-3' : ''} text-lg`} 
                  />
                  {!collapsed && (
                    <span className="whitespace-nowrap">{link.label}</span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        {/* Theme and Language controls */}
        <div className={`mt-6 px-3 ${collapsed ? 'flex flex-col items-center space-y-4' : 'space-y-3'}`}>
          {/* Web Tickets button */}
          <motion.a 
            href="https://tickets.swordtierlist.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center p-3 rounded-lg w-full transition-colors duration-200 bg-green-600 hover:bg-green-700 text-white ${collapsed ? 'justify-center' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon 
              icon={faCode} 
              className="text-lg" 
            />
            {!collapsed && (
              <span className="ml-3 font-medium">
                Web Tickets
              </span>
            )}
          </motion.a>
          
          {/* Theme toggle */}
          <motion.button 
            className={`flex items-center p-3 rounded-lg w-full transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${collapsed ? 'justify-center' : ''}`}
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          >
            <FontAwesomeIcon 
              icon={theme === 'dark' ? faSun : faMoon} 
              className="text-lg text-yellow-500" 
            />
            {!collapsed && (
              <span className="ml-3 text-gray-700 dark:text-gray-200">
                {theme === 'dark' ? "Light Mode" : "Dark Mode"}
              </span>
            )}
          </motion.button>
          
          {/* Language selector */}
          <div className="relative">
            <motion.button 
              className={`flex items-center p-3 rounded-lg w-full transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${collapsed ? 'justify-center' : ''}`}
              onClick={toggleLangDropdown}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Change language"
            >
              <FontAwesomeIcon 
                icon={faGlobe} 
                className="text-lg text-blue-500" 
              />
              {!collapsed && (
                <span className="ml-3 text-gray-700 dark:text-gray-200">
                  Language
                </span>
              )}
            </motion.button>
            
            {/* Language dropdown */}
            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute ${collapsed ? 'left-full ml-2' : 'right-0'} bottom-full mb-2 z-50`}
                >
                  <LanguageSelector 
                    isOpen={isLangDropdownOpen} 
                    onClose={() => setIsLangDropdownOpen(false)} 
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Collapse toggle button */}
        <div className="mt-6 px-3">
          <motion.button
            onClick={toggleCollapse}
            className={`flex items-center p-3 rounded-lg w-full transition-colors duration-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 ${collapsed ? 'justify-center' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <FontAwesomeIcon 
              icon={collapsed ? faChevronRight : faChevronLeft} 
              className="text-gray-500 dark:text-gray-400"
            />
            {!collapsed && (
              <span className="ml-3 text-gray-500 dark:text-gray-400">
                Collapse
              </span>
            )}
          </motion.button>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;