import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Context providers
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

// Layout components
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';

// Page components
import Home from './components/pages/Home';
import Guidelines from './components/pages/Guidelines';
import Punishments from './components/pages/Punishments';
import ModerationGuide from './components/pages/ModerationGuide';
import TestingGuide from './components/pages/TestingGuide';
import Commands from './components/pages/Commands';
import StaffList from './components/pages/StaffList';
import FAQ from './components/pages/FAQ';

// For page transitions
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary">
            {/* Main content area with sidebar */}
            <div className="flex flex-1">
              <Sidebar />
              
              {/* Main content */}
              <main className="flex-1 p-4 md:p-8">
                <div className="container mx-auto max-w-7xl">
                  <AnimatePresence mode="wait">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/guidelines" element={<Guidelines />} />
                      <Route path="/punishments" element={<Punishments />} />
                      <Route path="/moderation" element={<ModerationGuide />} />
                      <Route path="/testing" element={<TestingGuide />} />
                      <Route path="/commands" element={<Commands />} />
                      <Route path="/staff" element={<StaffList />} />
                      <Route path="/faq" element={<FAQ />} />
                    </Routes>
                  </AnimatePresence>
                </div>
              </main>
            </div>
            
            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;