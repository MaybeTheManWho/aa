import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGamepad, 
  faClipboardList, 
  faTrophy, 
  faExclamationTriangle,
  faStepForward,
  faUserCheck,
  faUser,
  faUserTag,
  faFolder,
  faFolderOpen,
  faFileAlt,
  faBug
} from '@fortawesome/free-solid-svg-icons';

// Components
import Alert from '../common/Alert';

const TestingGuide = () => {
  const [activeSection, setActiveSection] = useState('important');
  
  // Toggle active section
  const toggleSection = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };
  
  // Testing process steps with new content
  const testingSteps = [
    {
      step: 1,
      instruction: 'In #staff-commands, type /Start',
      details: 'All commands will go in this channel'
    },
    {
      step: 2,
      instruction: 'Wait a few minutes for users to join the queue',
      details: 'Wait a few minutes for people to receive the @here notification and join the queue.'
    },
    {
      step: 3,
      instruction: 'Type /Next',
      details: 'This command opens a ticket with the first person in the queue. The bot lists their region, preferred server IP, and previous tier. PLEASE OPEN ONLY 1 TICKET AT A TIME. OPENING MULTIPLE TICKETS WILL BREAK THE BOT.'
    },
    {
      step: 4,
      instruction: 'Greet user and ask if ready',
      details: 'If the player does not respond within 5 minutes of you opening the ticket, type /Skip. The bot pings both you and the user, so they will be notified when the ticket is opened.'
    },
    {
      step: 5,
      instruction: 'Fight the player',
      details: 'First person to 10 kills wins.'
    },
    {
      step: 6,
      instruction: 'Return to discord',
      details: 'Let the user know what tier they earned and type /Close. When closing the ticket, ensure to click the tier in the options, do not write the tier.'
    },
    {
      step: 7,
      instruction: 'Repeat steps #2-5',
      details: 'Continue testing other players in the queue.'
    },
    {
      step: 8,
      instruction: 'When finished testing, Type /Stop',
      details: 'This will close the queue.'
    }
  ];

  // Special scenarios for your bugs section
  const specialScenarios = [
    {
      title: 'User not in ticket',
      description: 'When waiting for user to respond, check the ticket and see if they are added to the ticket or not. This can be done by simply attempting to ping them inside of the ticket. If they are not present in the ticket, add them to the ticket using /add.'
    },
    {
      title: 'Ticket has nothing inside',
      description: 'If a ticket does not have any contents inside (No messages nor embeds), ping A Regulator who will /forcetest the user.'
    },
    {
      title: 'Unable to identify channel as ticket',
      description: 'When presented with the error message "Unable to identify channel as ticket.", ping a Moderator and ask them to pin the "Test Commenced" message. If there are no available Moderators, exempt the ticket until someone is available.'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
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

  const folderVariants = {
    closed: { 
      height: 64,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { 
      height: "auto",
      transition: { duration: 0.5, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.05 }
    }
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
          Testing Guide
        </h1>
        <p className="text-text-secondary mb-6">
          This guide outlines the process for testing players and assigning appropriate tiers based on their skill level. Following these procedures ensures fair and consistent tier assignments.
        </p>
      </motion.div>
      
      {/* Folder structure */}
      <div className="space-y-6 mb-10">
        {/* Important Information Section */}
        <motion.div 
          className="overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
          variants={folderVariants}
          animate={activeSection === 'important' ? "open" : "closed"}
        >
          <div 
            className="p-4 flex items-center justify-between cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            onClick={() => toggleSection('important')}
          >
            <div className="flex items-center">
              <FontAwesomeIcon 
                icon={activeSection === 'important' ? faFolderOpen : faFolder} 
                className="text-primary text-xl mr-3" 
              />
              <h2 className="text-xl font-semibold">Important Information</h2>
            </div>
            <FontAwesomeIcon 
              icon={activeSection === 'important' ? faFileAlt : faFileAlt} 
              className="text-gray-500 dark:text-gray-400" 
            />
          </div>
          
          <AnimatePresence>
            {activeSection === 'important' && (
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Alert type="warning" title="Important Information">
                  <div className="space-y-2">
                    <p>• This will be a step by step guide on how to tier test players in FFA Sword. If you have any questions please contact Obsessivebf on discord. Tier list bot commands will be in commands section within this website</p>
                    <p>• Never assume anything. Ask questions when you don't understand something and ask questions when you do. The tier list admins are here to help.</p>
                    <p>• Always make sure the bot recognizes your command.</p>
                    <p>• You are responsible of keeping the score of the test. The format is First to 10 kills. Have a notepad near you or type the score in chat as you go.</p>
                    <p>• You are representing the [1.9+] network when you are testing, please be respectful to every user you fight. if you feel disrespected or unsafe testing someone, feel free to skip the ticket.</p>
                    <p>• You are only required to test on servers listed in #Servers. These are verified servers that are safe to log on. If someone lists an IP that you are not familiar with, you can still fight them there, but please know that you are doing so at your own risk</p>
                    <p>• Evaluation testers are top HT3 testers. They are responsible for being the HT3 fight in a LT2 test, confirming the tier of new testers, and eval testing new HT3s. If you are interested, contact Weqy</p>
                    <p>• If you wish to get tested yourself, please tag Weqy who will forcetest a ticket for you. Please do not enter the waitlist with the members.</p>
                    <p>• You must do 20 tests each month or else you will be demoted. You will not have to do quota if you are in your first month as tester and the first day of the month has passed when you were added as tester. if you are unable to meet the quota, reach out to ObsessiveBf for a quota exemption.</p>
                  </div>
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Process Section */}
        <motion.div 
          className="overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
          variants={folderVariants}
          animate={activeSection === 'process' ? "open" : "closed"}
        >
          <div 
            className="p-4 flex items-center justify-between cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            onClick={() => toggleSection('process')}
          >
            <div className="flex items-center">
              <FontAwesomeIcon 
                icon={activeSection === 'process' ? faFolderOpen : faFolder} 
                className="text-green-500 text-xl mr-3" 
              />
              <h2 className="text-xl font-semibold">Process</h2>
            </div>
            <FontAwesomeIcon 
              icon={activeSection === 'process' ? faFileAlt : faFileAlt} 
              className="text-gray-500 dark:text-gray-400" 
            />
          </div>
          
          <AnimatePresence>
            {activeSection === 'process' && (
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <FontAwesomeIcon icon={faClipboardList} className="text-green-500 mr-3" />
                    Testing Process
                  </h3>
                  
                  <div className="space-y-6">
                    {testingSteps.map((step) => (
                      <div key={step.step} className="flex">
                        <div className="mr-4 pt-1 flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                            {step.step}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{step.instruction}</h4>
                          <p className="text-text-secondary">{step.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Tier Descriptions Section */}
        <motion.div 
          className="overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
          variants={folderVariants}
          animate={activeSection === 'tiers' ? "open" : "closed"}
        >
          <div 
            className="p-4 flex items-center justify-between cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            onClick={() => toggleSection('tiers')}
          >
            <div className="flex items-center">
              <FontAwesomeIcon 
                icon={activeSection === 'tiers' ? faFolderOpen : faFolder} 
                className="text-yellow-500 text-xl mr-3" 
              />
              <h2 className="text-xl font-semibold">Tier Descriptions</h2>
            </div>
            <FontAwesomeIcon 
              icon={activeSection === 'tiers' ? faFileAlt : faFileAlt} 
              className="text-gray-500 dark:text-gray-400" 
            />
          </div>
          
          <AnimatePresence>
            {activeSection === 'tiers' && (
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="space-y-6">
                  {/* For HT3 Testers */}
                  <div className="bg-bg-card rounded-lg p-5 shadow border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-4">For HT3 Testers:</h3>
                    <h4 className="text-lg font-semibold mb-2">Tier 3</h4>
                    
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faUserTag} className="text-success mr-2" />
                        <h5 className="font-semibold">High:</h5>
                      </div>
                      <ul className="pl-6 space-y-1">
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mt-2 mr-2"></span>
                          <span>The player must show a variety of techniques that work effectively against your playstyle. They must be able to adapt and counter you frequently. Fighting this player should present a challenge. Fights should be close and they should be able to hold their ground for a good amount of time. The aim, spacing, and other key techniques should be precise, with minimal errors. HT3s should NOT be given out without an evaluation test. If you believe someone is HT3 skill, /exempt the ticket and ping a Regulator or above. Wait for further instruction.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mt-2 mr-2"></span>
                          <span>(Minimum score 7-10)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faUser} className="text-warning mr-2" />
                        <h5 className="font-semibold">Low:</h5>
                      </div>
                      <ul className="pl-6 space-y-1">
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-warning mt-2 mr-2"></span>
                          <span>The player must show an average to good amount of gamesense and skill. Their mechanics should be solid with some slight issues. They should be able to adapt to your playstyle but not extremely well. Overall, they should be able to hold their own round until you adapt to their playstyle.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-warning mt-2 mr-2"></span>
                          <span>(Minimum Score 10-3)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* For LT3 Testers */}
                  <div className="bg-bg-card rounded-lg p-5 shadow border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-4">For LT3 Testers:</h3>
                    
                    <h4 className="text-lg font-semibold mb-2">Tier 3</h4>
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faUserTag} className="text-success mr-2" />
                        <h5 className="font-semibold">High:</h5>
                      </div>
                      <ul className="pl-6 space-y-1">
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mt-2 mr-2"></span>
                          <span>If you are a LT3 tester, NEVER give out this tier. If a user beats you in the FT10, ping a Regulator, exempt the ticket, and wait for further instruction.</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faUser} className="text-warning mr-2" />
                        <h5 className="font-semibold">Low:</h5>
                      </div>
                      <ul className="pl-6 space-y-1">
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-warning mt-2 mr-2"></span>
                          <span>The player must show an average to good amount of gamesense and skill. Their mechanics should be solid with some slight issues. They should be able to adapt to your playstyle but not extremely well. Overall, they should be able to hold their own round until you adapt to their playstyle.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-warning mt-2 mr-2"></span>
                          <span>(Minimum Score 10-7)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2">Tier 4</h4>
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faUserTag} className="text-success mr-2" />
                        <h5 className="font-semibold">High:</h5>
                      </div>
                      <ul className="pl-6 space-y-1">
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mt-2 mr-2"></span>
                          <span>The player should have an average level of mechanics and a decent amount of gamesense. They can only get 1 or 2 rounds off on you but still get you decently low. Knows how to crit and not only mindlessly hold combos.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mt-2 mr-2"></span>
                          <span>(For LT3 testers, Minimum score 3-10)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faUser} className="text-warning mr-2" />
                        <h5 className="font-semibold">Low:</h5>
                      </div>
                      <ul className="pl-6 space-y-1">
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-warning mt-2 mr-2"></span>
                          <span>The player has little to no gamesense and a low amount of skill. They cannot get more than 1 round on you. They should be able to sprint reset consistently</span>
                        </li>
                      </ul>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2">Tier 5</h4>
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faUserTag} className="text-success mr-2" />
                        <h5 className="font-semibold">High:</h5>
                      </div>
                      <ul className="pl-6 space-y-1">
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mt-2 mr-2"></span>
                          <span>The player is somewhat new to the gamemode. You should be able to consistently beat them with above 7 hearts. They have no gamesense and a very low amount of skill: Doesn't know how to crit consistently or sprint reset.</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faUser} className="text-warning mr-2" />
                        <h5 className="font-semibold">Low:</h5>
                      </div>
                      <ul className="pl-6 space-y-1">
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-warning mt-2 mr-2"></span>
                          <span>Player does not know a thing about 1.9 combat You should be winning easily in every duel. Do not be afraid to give this tier out. It's okay!</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Special Scenarios & Bugs Section */}
        <motion.div 
          className="overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
          variants={folderVariants}
          animate={activeSection === 'scenarios' ? "open" : "closed"}
        >
          <div 
            className="p-4 flex items-center justify-between cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            onClick={() => toggleSection('scenarios')}
          >
            <div className="flex items-center">
              <FontAwesomeIcon 
                icon={activeSection === 'scenarios' ? faFolderOpen : faFolder} 
                className="text-red-500 text-xl mr-3" 
              />
              <h2 className="text-xl font-semibold">Special Scenarios & Bugs</h2>
            </div>
            <FontAwesomeIcon 
              icon={activeSection === 'scenarios' ? faFileAlt : faFileAlt} 
              className="text-gray-500 dark:text-gray-400" 
            />
          </div>
          
          <AnimatePresence>
            {activeSection === 'scenarios' && (
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="space-y-6">
                  {specialScenarios.map((scenario, index) => (
                    <div key={index} className="bg-bg-card rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start">
                        <FontAwesomeIcon icon={faBug} className="text-red-500 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold mb-1">{scenario.title}</h4>
                          <p className="text-text-secondary">{scenario.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-600 dark:text-yellow-400 mt-1 mr-3" />
                    <p>If there are other bugs and issues or any questions, do not hesitate to contact A Regulator</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestingGuide;