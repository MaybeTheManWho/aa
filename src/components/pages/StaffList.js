import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie, 
  faUserShield, 
  faCrown, 
  faGavel,
  faUserCog,
  faUserNinja
} from '@fortawesome/free-solid-svg-icons';

// Staff data
import { staffByRole, roleHierarchy } from '../../data/staffMembers';

const StaffList = () => {
  // Get role icon based on role type
  const getRoleIcon = (role) => {
    const icons = {
      'Network Owner': faCrown,
      'Manager': faUserTie,
      'Tierlist Administrator': faUserCog,
      'Regulator': faGavel,
      'Moderator': faUserShield,
      'Senior Tester': faUserNinja
    };
    
    return icons[role] || faUserShield;
  };
  
  // Get role color based on role
  const getRoleColor = (role) => {
    const colors = {
      'Network Owner': 'bg-red-500',
      'Manager': 'bg-orange-500',
      'Tierlist Administrator': 'bg-yellow-500',
      'Regulator': 'bg-green-500',
      'Moderator': 'bg-blue-500',
      'Senior Tester': 'bg-purple-500'
    };
    
    return colors[role] || 'bg-gray-500';
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.3 }
    }
  };
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3 } 
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
      <motion.div
        variants={sectionVariants}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-4">
          Staff List
        </h1>
        <p className="text-text-secondary">
          Below is a list of all current staff members organized by role hierarchy.
        </p>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        className="space-y-12"
      >
        {/* Map through each role in the hierarchy */}
        {roleHierarchy.map((role) => (
          <motion.div 
            key={role}
            variants={sectionVariants}
            className="mb-8"
          >
            <div className="flex items-center mb-6">
              <FontAwesomeIcon 
                icon={getRoleIcon(role)} 
                className={`mr-3 p-2 ${getRoleColor(role)} text-white rounded-full`} 
              />
              <h2 className="text-2xl font-semibold">
                {role}
              </h2>
              <div className="ml-4 h-1 flex-grow bg-primary bg-opacity-20 rounded-full" />
            </div>
            
            {/* Staff grid for this role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {staffByRole[role].map((member, index) => (
                <motion.div
                  key={member.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`bg-bg-card rounded-lg shadow-md overflow-hidden border-t-4 ${getRoleColor(role)}`}
                >
                  <div className="p-6">
                    {/* Minecraft skin display - full body view */}
                    <div className="flex justify-center mb-4">
                      <div className="relative w-32 h-44 overflow-hidden">
                        <img 
                          src={`/assets/images/minecraft-skins/${member.username.toLowerCase()}.png`}
                          alt={`${member.username}'s Minecraft skin`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/assets/images/minecraft-skins/default.png";
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Username */}
                    <h3 className="text-xl font-semibold text-center mb-2">{member.username}</h3>
                    
                    {/* Discord tag */}
                    {member.discord && (
                      <p className="text-text-secondary text-sm text-center mb-3">
                        {member.discord}
                      </p>
                    )}
                    
                    {/* Subroles if any */}
                    {member.subroles && member.subroles.length > 0 && (
                      <div className="mt-3">
                        <div className="text-xs uppercase tracking-wider text-text-secondary mb-2 text-center">
                          Sub-roles
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                          {member.subroles.map((subrole, idx) => (
                            <span 
                              key={idx}
                              className="bg-bg-secondary px-2 py-1 rounded-full text-xs"
                            >
                              {subrole}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default StaffList;