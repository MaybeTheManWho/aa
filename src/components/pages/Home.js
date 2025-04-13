import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExclamationTriangle, 
  faBook, 
  faGavel, 
  faShieldAlt,
  faGamepad,
  faCode,
  faUsers,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  // Feature cards data
  const features = [
    {
      icon: faBook,
      title: "Staff Guidelines",
      description: "Detailed rules and expectations for all staff members.",
      link: "/guidelines",
      color: "bg-blue-500"
    },
    {
      icon: faGavel,
      title: "Punishments",
      description: "Reference for appropriate punishment durations and escalation.",
      link: "/punishments",
      color: "bg-red-500"
    },
    {
      icon: faShieldAlt,
      title: "Moderation Guide",
      description: "How to handle various moderation situations effectively.",
      link: "/moderation",
      color: "bg-green-500"
    },
    {
      icon: faGamepad,
      title: "Testing Guide",
      description: "Procedures for testing players and assigning tiers.",
      link: "/testing",
      color: "bg-purple-500"
    },
    {
      icon: faCode,
      title: "Commands",
      description: "Essential commands for staff members to perform their duties.",
      link: "/commands",
      color: "bg-yellow-500"
    },
    {
      icon: faUsers,
      title: "Staff List",
      description: "Overview of the staff team and hierarchy.",
      link: "/staff",
      color: "bg-indigo-500"
    },
    {
      icon: faQuestionCircle,
      title: "FAQ",
      description: "Common questions and answers for staff members.",
      link: "/faq",
      color: "bg-orange-500"
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
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
    hover: { 
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Hero section */}
      <motion.section 
        variants={itemVariants}
        className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 px-4 rounded-lg mb-10"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center mb-8">
            <motion.div 
              className="w-24 h-24 rounded-full bg-white p-1 mb-6 md:mb-0 md:mr-6 overflow-hidden flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/assets/images/logo.png" 
                alt="Sword Tierlist Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            <div className="text-center md:text-left">
              <motion.h1 
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Welcome to the Sword Tierlist Staff Team!
              </motion.h1>
              <motion.p 
                className="text-lg mb-0 opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                This guide will present and coach you on your roles and responsibilities as a staff member.
              </motion.p>
            </div>
          </div>
          
          <motion.div 
            className="bg-white bg-opacity-10 p-4 rounded-md border-l-4 border-warning"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-start">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-warning mr-3 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Confidential Information</h3>
                <p>Leaking this document to anyone who is not a staff member will result in an instant Demotion.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Welcome message */}
      <motion.section 
        variants={itemVariants}
        className="mb-10"
      >
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">
            Staff Guide Introduction
          </h2>
          <p className="mb-4">
            Your duty as a staff member is to ensure that all users have the utmost experience possible. If you do have any questions, even in the slightest, feel free to ask for an opinion. Answers may also be found in the F.A.Q. section of this website.
          </p>
          <p className="mb-4">
            Please keep in mind that what you do on other servers/social media platforms further influences your staff position on the network. Breaking any staff rules on any platform will put your position at risk.
          </p>
          <div className="mt-6 bg-danger bg-opacity-10 text-danger p-4 rounded-md flex items-start">
            <FontAwesomeIcon icon={faExclamationTriangle} className="mt-1 mr-3 text-lg flex-shrink-0" />
            <p className="text-sm">
              Management have full access to modify anything mentioned in this website. If anything is altered, you will be notified via staff chat. If you have any suggestions for the staff website, please contact Rio.
            </p>
          </div>
        </div>
      </motion.section>
      
      {/* Features grid */}
      <motion.section className="mb-10">
        <motion.h2 
          variants={itemVariants}
          className="text-2xl font-semibold mb-6"
        >
          Guide Sections
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="card hover:border-primary border-2 border-transparent"
            >
              <div className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}>
                <FontAwesomeIcon icon={feature.icon} className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-secondary mb-4">{feature.description}</p>
              <Link 
                to={feature.link}
                className="btn btn-primary"
              >
                View
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Home;