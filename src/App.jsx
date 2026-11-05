import React, { useState, useEffect } from 'react';
import IndianNavbar from './components/IndianNavbar';
import IndianFooter from './components/IndianFooter';
import IndianPreschoolHome from './components/IndianPreschoolHome';
import AboutPage from './components/pages/AboutPage';
import CurriculumPage from './components/pages/CurriculumPage';
import AssessmentPage from './components/pages/AssessmentPage';
import AdmissionsPage from './components/pages/AdmissionsPage';
import FranchisePage from './components/pages/FranchisePage';
import ContactPage from './components/pages/ContactPage';
import TourBookingModal from './components/TourBookingModal';
import ScrollProgressBar from './components/ScrollProgressBar';
import LoadingScreen from './components/LoadingScreen';
import { Sparkles, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Parse initial page from hash (#about, #curriculum, #assessment, #admissions, #franchise, #contact)
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages = ['about', 'curriculum', 'assessment', 'admissions', 'franchise', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  });

  // Listen for hash changes (browser back/forward & anchor links)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['about', 'curriculum', 'assessment', 'admissions', 'franchise', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash || hash === 'home' || hash === 'programmes-india' || hash === 'why-parents') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    if (pageId === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.history.pushState(null, '', `#${pageId}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F9FB] text-[#091E3A] relative selection:bg-[#8ed727] selection:text-[#091E3A] flex flex-col justify-between">
      {/* Orbital Logo Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Unified Indian Preschool Glassmorphic Navigation */}
      <IndianNavbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      {/* Main Page Content Router */}
      <main className={`flex-grow ${currentPage === 'home' ? '-mt-[90px] sm:-mt-[98px]' : ''}`}>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <IndianPreschoolHome
                showHeader={false}
                showFooter={false}
                isPageLoaded={!isLoading}
                onOpenTourModal={() => setIsTourModalOpen(true)}
                onNavigate={navigateTo}
              />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <AboutPage
                onOpenTourModal={() => setIsTourModalOpen(true)}
                onNavigate={navigateTo}
              />
            </motion.div>
          )}

          {currentPage === 'curriculum' && (
            <motion.div
              key="curriculum"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <CurriculumPage
                onOpenTourModal={() => setIsTourModalOpen(true)}
                onNavigate={navigateTo}
              />
            </motion.div>
          )}

          {currentPage === 'assessment' && (
            <motion.div
              key="assessment"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <AssessmentPage
                onOpenTourModal={() => setIsTourModalOpen(true)}
                onNavigate={navigateTo}
              />
            </motion.div>
          )}

          {currentPage === 'admissions' && (
            <motion.div
              key="admissions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <AdmissionsPage
                onOpenTourModal={() => setIsTourModalOpen(true)}
                onNavigate={navigateTo}
              />
            </motion.div>
          )}

          {currentPage === 'franchise' && (
            <motion.div
              key="franchise"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <FranchisePage
                onOpenTourModal={() => setIsTourModalOpen(true)}
                onNavigate={navigateTo}
              />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <ContactPage
                onOpenTourModal={() => setIsTourModalOpen(true)}
                onNavigate={navigateTo}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Unified Indian Preschool Footer */}
      <IndianFooter
        onNavigate={navigateTo}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      {/* Tour Booking Modal */}
      <TourBookingModal 
        isOpen={isTourModalOpen} 
        onClose={() => setIsTourModalOpen(false)} 
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsTourModalOpen(true)}
          className="btn-lime px-4 py-3 rounded-2xl text-xs font-black shadow-2xl flex items-center gap-2 border-2 border-white"
          title="Book Campus Tour"
        >
          <Sparkles className="w-4 h-4 text-brand-navy" />
          <span className="hidden sm:inline">Book Discovery Tour</span>
          <span className="sm:hidden">Book Tour</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-11 h-11 rounded-2xl bg-white/90 border border-brand-navy/15 text-brand-navy flex items-center justify-center shadow-lg hover:bg-white transition-all"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      </div>

    </div>
  );
}
