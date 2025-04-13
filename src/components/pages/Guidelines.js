import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserShield, 
  faBalanceScale, 
  faUserSecret, 
  faBell,
  faExclamationTriangle,
  faHandshake,
  faBook,
  faUserTie,
  faGavel
} from '@fortawesome/free-solid-svg-icons';

// Components
import Alert from '../common/Alert';

const Guidelines = () => {
  const { t } = useTranslation();
  
  // Rules sections data
  const ruleSections = [
    {
      id: 'conduct',
      icon: faUserShield,
      title: "Professional Conduct",
      rules: [
        "Be polite and respectful to all players",
        "Maintain a professional demeanour"
      ]
    },
    {
      id: 'integrity',
      icon: faBalanceScale,
      title: "Integrity and Fairness",
      rules: [
        "Treat all players equally, regardless of relationships or personal opinions",
        "Avoid favoritism, bias, or any form of unfair treatment"
      ]
    },
    {
      id: 'confidentiality',
      icon: faUserSecret,
      title: "Confidentiality",
      rules: [
        "Do not disclose private staff discussions or sensitive information to others",
        "Protect the privacy of players and staff"
      ]
    },
    {
      id: 'responsiveness',
      icon: faBell,
      title: "Responsiveness",
      rules: [
        "Respond to player questions, reports, and concerns promptly",
        "Stay active and available during your assigned duties"
      ]
    },
    {
      id: 'conflict',
      icon: faHandshake,
      title: "Conflict Avoidance",
      rules: [
        "Refrain from engaging in drama or conflicts with players or staff",
        "Report any issues or disputes to higher staff if necessary"
      ]
    },
    {
      id: 'familiarity',
      icon: faBook,
      title: "Rule Familiarity",
      rules: [
        "Know and understand the server's rules and staff guidelines",
        "Stay updated with any changes to rules or procedures"
      ]
    }
  ];
  
  // Additional rules
  const additionalRules = {
    appearance: [
      "Avoid using offensive or unprofessional usernames, nicknames, or profile pictures",
      "Represent the server with pride and professionalism at all times"
    ],
    power: [
      "Do not use your staff permissions for personal gain or to harass others",
      "Avoid actions that may appear as favoritism or abuse"
    ]
  };
  
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
      y: 50,
      transition: { duration: 0.3 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-4">
          Staff Guidelines
        </h1>
        <p className="text-text-secondary mb-6">
        (!) As a staff member, you are required to maintain professionalism and adhere to the guidelines. Treat all players with kindness and respect, regardless of whether they are a fellow staff member, a friend, or someone you don't get along with. This approach minimizes conflicts and helps you avoid receiving staff reports. While it's important to take all staff-related matters seriously, this doesn't mean you can't enjoy yourself; it simply means that your actions reflect on both you and the server. Everything you say or do can have consequences. All staff members are expected to thoroughly read the staff guide and familiarize themselves with the basic rules before beginning their duties.
        </p>
        
        <div className="text-center font-bold mb-4">
          These‌ ‌subsequent‌ ‌rules‌ ‌are‌ ‌to‌ ‌be‌ ‌followed‌ ‌by‌ ‌each‌ ‌and‌ ‌every‌ ‌staff‌ ‌member.‌ (!)
        </div>
        
        <Alert type="warning" title="Important Note">
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
          (!) All punishments are made at the discretion of staff management. (!)
        </Alert>
      </motion.div>

      <h2 className="text-2xl font-bold mb-6">General Staff Rules</h2>
      
      {/* Rules sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {ruleSections.map(section => (
          <motion.div 
            key={section.id}
            variants={itemVariants}
            className="card"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={section.icon} className="text-primary text-xl" />
              </div>
              <h2 className="text-xl font-semibold">➤ {section.title}</h2>
            </div>
            
            <ul className="space-y-2 pl-6">
              {section.rules && section.rules.map((rule, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">➼</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Professional Appearance - same format as others */}
        <motion.div 
          variants={itemVariants}
          className="card"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
              <FontAwesomeIcon icon={faUserTie} className="text-primary text-xl" />
            </div>
            <h2 className="text-xl font-semibold">➤ Professional Appearance</h2>
          </div>
          
          <ul className="space-y-2 pl-6">
            {additionalRules.appearance.map((rule, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">➼</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Abuse of Power - same format as others */}
        <motion.div 
          variants={itemVariants}
          className="card"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
              <FontAwesomeIcon icon={faGavel} className="text-primary text-xl" />
            </div>
            <h2 className="text-xl font-semibold">➤ Abuse Of Power</h2>
          </div>
          
          <ul className="space-y-2 pl-6">
            {additionalRules.power.map((rule, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">➼</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Guidelines;