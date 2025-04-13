import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Get current date for last updated information
  const formatDate = () => {
    const date = new Date();
    return new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 mt-10">
      <div className="container mx-auto px-4">
        {/* Logo and info */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4 md:mb-0">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center overflow-hidden mr-3">
              <img 
                src="/assets/images/logo.png" 
                alt="Sword Tierlist Logo" 
                className="h-10 w-10 object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Sword Tierlist</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Staff Handbook & Resources
              </p>
            </div>
          </div>
          
          {/* Last updated info */}
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            <p>
              Last Updated: {formatDate()}
            </p>
          </div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-gray-500 dark:text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>
            &copy; {currentYear} Sword Tierlist. All Rights Reserved
          </p>
          <p className="mt-2 text-xs font-semibold text-red-500">
            All information contained in this guide is strictly confidential and for staff eyes only.
            Sharing this information will result in immediate demotion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;