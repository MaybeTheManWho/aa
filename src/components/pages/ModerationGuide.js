import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faUserShield, 
  faLock, 
  faExclamationTriangle, 
  faUserFriends,
  faGavel,
  faHistory,
  faUsers,
  faTicketAlt,
  faFlag,
  faHandshake,
  faBullhorn,
  faServer,
  faUserLock,
  faMailBulk,
  faTv
} from '@fortawesome/free-solid-svg-icons';

// Components
import Alert from '../common/Alert';

const ModerationGuide = () => {
  const [activeGuide, setActiveGuide] = useState('moderation'); // 'moderation' or 'tickets'
  
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
  };

  // Moderation sections
  const moderationSections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: faShieldAlt,
      content: [
        'Welcome to the Moderation Team!',
        'This guide outlines basic guidelines for handling moderation situations on the server.',
        'If you\'re unsure about anything, contact Rio or Linaton.',
        'Moderators enforce rules, maintain order, and can receive sub-roles in the Network Hub to assist with tickets. Inactivity without valid reasoning can lead to demotion.',
        'You are responsible for reading and applying this guide.'
      ]
    },
    {
      id: 'behavior',
      title: 'Staff Behavior',
      icon: faUserShield,
      content: [
        'Moderators should behave maturely, act as role models, and help maintain a fun, fair environment.'
      ],
      subsections: [
        {
          title: 'Security',
          items: [
            'Use strong passwords and enable 2FA.',
            'Do not expose any private staff or user info.',
            'Report any compromise or leak to Regulators.'
          ]
        }
      ]
    },
    {
      id: 'mismoderation',
      title: 'Mismoderation',
      icon: faExclamationTriangle,
      content: [
        'If you make a mistake:'
      ],
      subsections: [
        {
          type: 'ordered',
          items: [
            'Try to resolve it.',
            'Speak with the person calmly.',
            'If needed, escalate it to higher staff.'
          ]
        }
      ]
    },
    {
      id: 'behavior-handling',
      title: 'Behavior Handling',
      icon: faUserFriends,
      content: [
        'Evaluate arguments based on severity and language.',
        'Warn all parties if necessary, escalate if it continues.',
        'For threats or any serious issues — act accordingly.'
      ]
    },
    {
      id: 'repeat-offenses',
      title: 'Repeat Offenses',
      icon: faHistory,
      content: [
        'When a user breaks the rules repeatedly, escalate: Warn → Mute → Kick → Tempban → Ban',
        'Only one moderator should handle a specific infraction chain.'
      ]
    },
    {
      id: 'advertising',
      title: 'Advertising',
      icon: faUsers,
      content: [
        'No Discord links, payment links, or social handles allowed.',
        'Delete and warn on first offense. Escalate further if repeated.'
      ]
    }
  ];

  // Tickets guide sections
  const reportsAppealsItems = [
    {
      title: 'Cheating Reports',
      icon: faFlag,
      content: [
        'Video Evidence Submissions are strictly handled by Weqy, QZ, Rio and Linaton',
        'Ban from a verified testing server, admission etc are handled by Regulators'
      ]
    },
    {
      title: 'Cheating Appeals (Subhuman & TLC)',
      icon: faHandshake,
      content: [
        'These Appeals can be handled by Rio or Linaton'
      ]
    },
    {
      title: 'Tester Reports',
      icon: faUserShield,
      content: [
        'Reporting a tester for giving the wrong tier: Ask for the score, if BY the score they were meant to receive a higher tier then confirm with the tester the score and the reason for the tier (usually they give a lower tier for a reason and nothing else needs to be done, if it seems like the tester is just giving low tiers then give it to a Regulator or Simpily for investigation)'
      ]
    },
    {
      title: 'Staff Reports',
      icon: faUserShield,
      content: [
        'Reports for testers or moderators for their behavior (breaking the rules, etc) can be directed to Regulators.'
      ]
    },
    {
      title: 'Banned from the server',
      icon: faUserLock,
      content: [
        'Ask for Discord ID and check their ban reason in logs',
        'Make sure they aren\'t blacklisted (can be checked in blacklisted-players channel in the main Discord)',
        'Ping either Linaton, Ehqua or Acilic',
        'Banned for account age: Ask if they had an old account and what happened to it, if their old account isn\'t blacklisted then ask a Regulator or Me to unban them',
        'Banned for moderation: Ask Weqy, Linaton, Acilic or Ehqua to handle it'
      ]
    },
    {
      title: 'Blacklist',
      icon: faUserLock,
      content: [
        'Blacklist Appeals can be transfered using the /switchpanel command.',
        'Blacklist Reports are handled by Network Mods+ only. DO NOT ask for the report or evidence in the ticket, when a user wishes to report another user for a blacklist, please inform them that a network staff member will be with them shortly, then /switchpanel the ticket into the blacklist category. If you are having trouble using the /switchpanel command when transferring a ticket to the category, please add a Network Mod as the category may be full.'
      ]
    }
  ];

  const generalSupportItems = [
    {
      title: 'Advertisements',
      icon: faBullhorn,
      content: [
        'Any advertisment purchases can be directed to Rio'
      ]
    },
    {
      title: 'Rank Requests',
      icon: faUsers,
      content: [
        'Requests for the Media Rank can be made towards Regulators, make sure the Individuals meet the requirements.',
        'Poll Requests can be made towards Individuals who have Poll Posting Permissions, make sure the Individuals are Boosters and that they only get 1 Poll per Month.'
      ]
    },
    {
      title: 'Tiers / Accounts',
      icon: faUserShield,
      content: [
        'Anything related to tiers can be handled by Regulators, unless it\'s an issue that needs to be forwarded to Quad. We DO NOT do tier wipes.'
      ]
    },
    {
      title: 'Server Verification',
      icon: faServer,
      content: [
        'If someone wants to get their server verified please ask for:',
        'Name of server:',
        'IP:',
        'Discord Link:',
        'Short description of server:',
        'Activity level:',
        'Regions:',
        'Then ping Rio to verify it, if it\'s verified please send me all of the above information so I can add it to the servers list.'
      ]
    },
    {
      title: 'Ticket Spam',
      icon: faTicketAlt,
      content: [
        'If someone is making Spam Tickets within the Network Hub please blacklist them using the /blacklist command',
        'If someone is making Spam Tickets within the Sword Tierlist please contact a Regulator to Issue them with a Ban'
      ]
    },
    {
      title: 'Other',
      icon: faExclamationTriangle,
      content: [
        'For any Vanilla tickets, attempt to /switchpanel it to VTL, if it responds with a error indicating the category is full tell the user to re-open a ticket at a later time.',
        'If any known or influential T2s are applying and you lack information, contact a Manager as they are knowledgeable on this topic.',
        'Other miscellaneous cases you can just ask any Regulator, Admin if you\'re unsure. Make sure you ping Regulators or Admins and don\'t hesitate.'
      ]
    }
  ];

  // Component for each ticketing section
  const TicketSection = ({title, items, icon}) => (
    <motion.div
      variants={itemVariants}
      className="mb-8"
    >
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={icon} className="text-primary text-xl mr-3" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start mb-2">
              <FontAwesomeIcon icon={item.icon} className="text-primary mt-1 mr-3" />
              <h3 className="font-semibold">{item.title}</h3>
            </div>
            
            <ul className="space-y-2 pl-8">
              {item.content.map((line, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary mr-2">✦</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );

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
          Moderation Guide
        </h1>
        <p className="text-text-secondary mb-6">
          The following guidelines will help you handle moderation situations effectively. As a moderator, you represent the server and are expected to uphold the highest standards of fairness and professionalism.
        </p>
        
        {/* Guide selector buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveGuide('moderation')}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              activeGuide === 'moderation' 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
            Moderation Guide
          </button>
          
          <button
            onClick={() => setActiveGuide('tickets')}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              activeGuide === 'tickets' 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
            Tickets Guide
          </button>
        </div>
        
        <Alert type="info" title="Staff Responsibility">
          <p>Your actions as a moderator directly impact the server community. Always be fair, consistent, and professional.</p>
        </Alert>
      </motion.div>
      
      {/* Main content - switch between guides */}
      <AnimatePresence mode="wait">
        {activeGuide === 'moderation' ? (
          <motion.div
            key="moderation"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Main content sections */}
            <motion.div
              variants={containerVariants}
              className="space-y-8"
            >
              {moderationSections.map((section) => (
                <motion.div
                  key={section.id}
                  variants={itemVariants}
                  className="card"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={section.icon} className="text-primary text-xl" />
                    </div>
                    <h2 className="text-xl font-semibold">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {section.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    
                    {section.subsections && section.subsections.map((subsection, i) => (
                      <div key={i} className="mt-4">
                        {subsection.title && (
                          <h3 className="font-semibold mb-2">{subsection.title}</h3>
                        )}
                        
                        {subsection.type === 'ordered' ? (
                          <ol className="list-decimal pl-5 space-y-1">
                            {subsection.items.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ol>
                        ) : (
                          <ul className="space-y-1 pl-5">
                            {subsection.items.map((item, j) => (
                              <li key={j} className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Final notes */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-bg-card rounded-lg shadow-md border-t-4 border-primary"
            >
              <h3 className="text-xl font-semibold mb-4">
                Key Reminders
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faGavel} className="text-primary mr-3 mt-1" />
                  <span>Always follow the punishment guidelines for consistent moderation.</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faUserShield} className="text-primary mr-3 mt-1" />
                  <span>Your primary goal is to create a safe, fair environment for all users.</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faLock} className="text-primary mr-3 mt-1" />
                  <span>Keep staff discussions and decisions confidential.</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="tickets"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="space-y-8">
              {/* Reports & Appeals */}
              <TicketSection 
                title="Reports & Appeals" 
                items={reportsAppealsItems} 
                icon={faFlag} 
              />
              
              {/* General Support */}
              <TicketSection 
                title="General Support" 
                items={generalSupportItems} 
                icon={faTicketAlt} 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ModerationGuide;