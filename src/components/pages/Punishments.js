import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faExclamationTriangle, 
  faFilter,
  faInfo,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

// Components
import Alert from '../common/Alert';

// Punishment data
const punishmentData = [
  {
    id: 1,
    offense: "Incorrectly using channels",
    firstOffense: "Warn",
    secondOffense: "1 Hour Mute",
    thirdOffense: "1 Day Mute",
    fourthOffense: "",
    fifthOffense: "",
    category: "chat",
    note: "After each offence continue muting for higher a duration"
  },
  {
    id: 2,
    offense: "Begging Staff to Check a Ticket",
    firstOffense: "Warn",
    secondOffense: "30 Mins Mute",
    thirdOffense: "2 Hours Mute",
    fourthOffense: "5 Hours Mute",
    fifthOffense: "10 Hours Mute",
    category: "chat",
    note: "After each offence continue muting for higher a duration"
  },
  {
    id: 3,
    offense: "Begging for Premium Account or Cosmetics",
    firstOffense: "Warn",
    secondOffense: "1 Hour Mute",
    thirdOffense: "1 Day Mute",
    fourthOffense: "5 Day Mute",
    fifthOffense: "",
    category: "chat",
    note: "After each offence continue muting for higher a duration"
  },
  {
    id: 4,
    offense: "Discussing Cheats",
    firstOffense: "3 Hours Mute",
    secondOffense: "6 Hours Mute",
    thirdOffense: "12 Hours Mute",
    fourthOffense: "1 Day Mute",
    fifthOffense: "Perm Mute",
    category: "conduct"
  },
  {
    id: 5,
    offense: "Inappropriate Messages",
    firstOffense: "1 Day Mute",
    secondOffense: "5 Day Mute",
    thirdOffense: "Ban",
    fourthOffense: "",
    fifthOffense: "",
    category: "conduct"
  },
  {
    id: 6,
    offense: "Toxicity",
    firstOffense: "1 Hour Mute",
    secondOffense: "12 Hours Mute",
    thirdOffense: "1 Day Mute",
    fourthOffense: "7 Day Mute",
    fifthOffense: "",
    category: "conduct",
    note: "After each offence continue muting for higher a duration"
  },
  {
    id: 7,
    offense: "Sending Copy-Pastes or flooding chat",
    firstOffense: "1 Hour Mute",
    secondOffense: "1 Day Mute",
    thirdOffense: "5 Day Mute",
    fourthOffense: "7 Day Mute",
    fifthOffense: "Perm Mute",
    category: "chat",
    note: "After each offence continue muting for higher a duration"
  },
  {
    id: 8,
    offense: "Pinging staff",
    firstOffense: "Warning",
    secondOffense: "1 Hour Mute",
    thirdOffense: "1 Day Mute",
    fourthOffense: "7 Day Mute",
    fifthOffense: "",
    category: "chat",
    note: "Mutes are at the discretion of the staff member who was pinged. However if they are pinging to check tickets or are pinging 3+ staff at once allows any staff member to take action against the player."
  },
  {
    id: 9,
    offense: "Not Speaking English",
    firstOffense: "Warning",
    secondOffense: "1 Hour Mute",
    thirdOffense: "",
    fourthOffense: "1 Day Mute",
    fifthOffense: "",
    category: "chat",
    note: "After each offence continue muting for higher a duration"
  },
  {
    id: 10,
    offense: "Racism",
    firstOffense: "1 Day Mute",
    secondOffense: "5 Day Mute",
    thirdOffense: "",
    fourthOffense: "",
    fifthOffense: "",
    category: "serious",
    note: "After each offence continue muting for higher a duration"
  },
  {
    id: 11,
    offense: "Homophobia",
    firstOffense: "14 Day Mute",
    secondOffense: "Permanent Mute",
    thirdOffense: "",
    fourthOffense: "",
    fifthOffense: "",
    category: "serious"
  },
  {
    id: 12,
    offense: "Suicide Encouragement / Death Threats",
    firstOffense: "1 Day Mute",
    secondOffense: "5 Day Mute",
    thirdOffense: "",
    fourthOffense: "",
    fifthOffense: "",
    category: "serious",
    note: "After each offence continue muting for higher a duration"
  },
  {
    id: 13,
    offense: "Sensitive Subject Abuse",
    firstOffense: "1 Day Mute",
    secondOffense: "5 Day Mute",
    thirdOffense: "",
    fourthOffense: "",
    fifthOffense: "",
    category: "serious",
    note: "After each offence continue muting for higher a duration"
  },
  {
    id: 14,
    offense: "Sending nsfw media",
    firstOffense: "1 Day Mute",
    secondOffense: "Ban",
    thirdOffense: "",
    fourthOffense: "",
    fifthOffense: "",
    category: "serious"
  },
  {
    id: 15,
    offense: "Discrimination through media(i.e. homophobia, racism, etc.)",
    firstOffense: "1 Day Mute",
    secondOffense: "7 Day Mute",
    thirdOffense: "Ban",
    fourthOffense: "",
    fifthOffense: "",
    category: "serious"
  },
  {
    id: 16,
    offense: "Advertising",
    firstOffense: "Warning",
    secondOffense: "1 Day Mute",
    thirdOffense: "5 Day Mute",
    fourthOffense: "14 Day Mute",
    fifthOffense: "",
    category: "chat",
    note: "If the link is being spammed or being sent by a bot, you may perm mute on the 1st offence."
  }
];

const Punishments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [expandedNotes, setExpandedNotes] = useState({});
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle category filter change
  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };
  
  // Toggle note expansion
  const toggleNote = (id) => {
    setExpandedNotes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Filter punishments
  const filteredPunishments = punishmentData.filter(punishment => {
    // Apply search filter
    const matchesSearch = punishment.offense.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply category filter
    const matchesCategory = filterCategory === 'all' || punishment.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.3 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // Get category name for display
  const getCategoryName = (category) => {
    switch(category) {
      case 'chat':
        return 'Chat Offenses';
      case 'conduct':
        return 'Conduct Offenses';
      case 'serious':
        return 'Serious Offenses';
      default:
        return 'Other Offenses';
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-4">
          Punishments
        </h1>
        <p className="text-text-secondary mb-6">
          Please use the #staff-cmds channel to execute any punishment. Remember to run the /whois [ID] and /modlogs [ID] commands to make sure you're handing out the correct punishment to the correct person.
        </p>
        
        <Alert type="warning" title="Important Note">
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
          If you see someone break a rule that has not been listed here, please reach out to a regulator+ to decide on an appropriate punishment.
        </Alert>
      </motion.div>
      
      {/* Filters and search */}
      <motion.div
        variants={itemVariants}
        className="bg-bg-card rounded-lg shadow-md p-4 mb-6"
      >
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Search */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-text-secondary" />
            </div>
            <input
              type="text"
              placeholder="Search offenses..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-border bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          
          {/* Category filter */}
          <div className="w-full md:w-auto flex items-center space-x-2">
            <FontAwesomeIcon icon={faFilter} className="text-text-secondary" />
            <select
              className="flex-1 md:w-44 py-2 px-3 rounded-md border border-border bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              value={filterCategory}
              onChange={handleFilterChange}
            >
              <option value="all">All Categories</option>
              <option value="chat">Chat Offenses</option>
              <option value="conduct">Conduct Offenses</option>
              <option value="serious">Serious Offenses</option>
            </select>
          </div>
        </div>
      </motion.div>
      
      {/* Group punishments by category and display */}
      {filterCategory === 'all' ? (
        // Show all categories with headers
        Object.entries(
          filteredPunishments.reduce((acc, punishment) => {
            if (!acc[punishment.category]) acc[punishment.category] = [];
            acc[punishment.category].push(punishment);
            return acc;
          }, {})
        ).map(([category, punishments]) => (
          <motion.div
            key={category}
            variants={containerVariants}
            className="mb-10"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-semibold mb-4 flex items-center"
            >
              {getCategoryName(category)}
            </motion.h2>
            
            <motion.div 
              variants={containerVariants}
              className="space-y-4"
            >
              {punishments.map(punishment => (
                <motion.div
                  key={punishment.id}
                  variants={itemVariants}
                  className="bg-bg-card rounded-lg shadow p-5 border-l-4 border-primary"
                >
                  <h3 className="text-xl font-semibold mb-3 text-primary">{punishment.offense}</h3>
                  
                  <div className="space-y-2">
                    {punishment.firstOffense && (
                      <div className="flex items-start">
                        <span className="font-bold min-w-36">1st offense:</span>
                        <span>{punishment.firstOffense}</span>
                      </div>
                    )}
                    
                    {punishment.secondOffense && (
                      <div className="flex items-start">
                        <span className="font-bold min-w-36">2nd offense:</span>
                        <span>{punishment.secondOffense}</span>
                      </div>
                    )}
                    
                    {punishment.thirdOffense && (
                      <div className="flex items-start">
                        <span className="font-bold min-w-36">3rd offense:</span>
                        <span>{punishment.thirdOffense}</span>
                      </div>
                    )}
                    
                    {punishment.fourthOffense && (
                      <div className="flex items-start">
                        <span className="font-bold min-w-36">4th offense:</span>
                        <span>{punishment.fourthOffense}</span>
                      </div>
                    )}
                    
                    {punishment.fifthOffense && (
                      <div className="flex items-start">
                        <span className="font-bold min-w-36">5th offense:</span>
                        <span>{punishment.fifthOffense}</span>
                      </div>
                    )}
                  </div>
                  
                  {punishment.note && (
                    <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 flex items-start">
                      <FontAwesomeIcon icon={faInfoCircle} className="text-primary mr-2 mt-0.5" />
                      <p className="text-sm text-text-secondary">{punishment.note}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))
      ) : (
        // Show filtered category
        <motion.div
          variants={containerVariants}
          className="space-y-4"
        >
          {filteredPunishments.length > 0 ? (
            filteredPunishments.map(punishment => (
              <motion.div
                key={punishment.id}
                variants={itemVariants}
                className="bg-bg-card rounded-lg shadow p-5 border-l-4 border-primary"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">{punishment.offense}</h3>
                
                <div className="space-y-2">
                  {punishment.firstOffense && (
                    <div className="flex items-start">
                      <span className="font-bold min-w-36">1st offense:</span>
                      <span>{punishment.firstOffense}</span>
                    </div>
                  )}
                  
                  {punishment.secondOffense && (
                    <div className="flex items-start">
                      <span className="font-bold min-w-36">2nd offense:</span>
                      <span>{punishment.secondOffense}</span>
                    </div>
                  )}
                  
                  {punishment.thirdOffense && (
                    <div className="flex items-start">
                      <span className="font-bold min-w-36">3rd offense:</span>
                      <span>{punishment.thirdOffense}</span>
                    </div>
                  )}
                  
                  {punishment.fourthOffense && (
                    <div className="flex items-start">
                      <span className="font-bold min-w-36">4th offense:</span>
                      <span>{punishment.fourthOffense}</span>
                    </div>
                  )}
                  
                  {punishment.fifthOffense && (
                    <div className="flex items-start">
                      <span className="font-bold min-w-36">5th offense:</span>
                      <span>{punishment.fifthOffense}</span>
                    </div>
                  )}
                </div>
                
                {punishment.note && (
                  <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 flex items-start">
                    <FontAwesomeIcon icon={faInfoCircle} className="text-primary mr-2 mt-0.5" />
                    <p className="text-sm text-text-secondary">{punishment.note}</p>
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={itemVariants}
              className="text-center py-10 bg-bg-card rounded-lg"
            >
              <FontAwesomeIcon icon={faInfo} className="text-primary text-5xl mb-4 opacity-30" />
              <h3 className="text-xl font-semibold mb-2">No punishments found</h3>
              <p className="text-text-secondary">
                Try adjusting your search or filter settings.
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Punishments;