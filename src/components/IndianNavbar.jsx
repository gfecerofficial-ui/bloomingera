import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower2, Phone, Sparkles, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

export default function IndianNavbar({ currentPage, onNavigate, onOpenTourModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'assessment', label: 'Assessment' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    if (id === 'programmes') {
      if (currentPage === 'home') {
        const el = document.getElementById('programmes-india');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        onNavigate('home');
        setTimeout(() => {
          const el = document.getElementById('programmes-india');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
      return;
    }
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Ribbon */}
      <div className="bg-[#091E3A] text-white text-xs py-2 px-3 sm:px-6 border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#8ed727] text-[#091E3A] font-extrabold text-[11px] shadow-sm">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center will-change-transform"
              >
                <Flower2 className="w-3.5 h-3.5 text-[#091E3A]" />
              </motion.span>
              THE FUTURE BLOOMS HERE
            </span>
            <span className="text-white/90 font-semibold hidden sm:inline">
              Proudly Indian, Powerfully Global Preschool
            </span>
            <span className="hidden lg:inline text-[#60C8D4] font-medium">
              • Futuristic by Design. Childhood First.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919647974093"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#8ed727] font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#60C8D4]" />
              <span>+91 96479 74093</span>
            </a>
            <span className="text-white/25 hidden sm:inline">|</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('franchise')}
              className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#8ed727]/20 hover:bg-[#8ed727]/35 text-[#8ed727] font-bold text-[11px] border border-[#8ed727]/40 transition-all shadow-xs"
            >
              <span>Franchise Opportunity</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Sticky Glass Navigation Header */}
      <header className="sticky top-1 sm:top-1.5 z-40 px-3 sm:px-6 mt-2.5 sm:mt-3">
        <div
          className="max-w-7xl mx-auto rounded-full py-2 px-4 sm:px-6 border-2 border-white shadow-[0_20px_50px_rgba(9,30,58,0.12)] backdrop-blur-2xl transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(226,249,184,0.48) 25%, rgba(208,244,249,0.48) 50%, rgba(255,246,196,0.45) 75%, rgba(255,255,255,0.94) 100%)',
            backgroundSize: '250% 250%',
            animation: 'flowyColorDrift 12s ease-in-out infinite',
          }}
        >
          <div className="flex items-center justify-between gap-3">
            
            {/* Logo & Brand */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 sm:gap-3 text-left group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#8ed727] shadow-md bg-white p-0.5 group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform flex-shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="Blooming Era Preschools"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center gap-[3px]">
                <span className="font-extrabold text-base sm:text-lg text-[#091E3A] tracking-tight whitespace-nowrap leading-none">
                  Blooming Era
                </span>
                <div className="flex items-center">
                  <span className="px-1.5 py-[2px] text-[8px] sm:text-[9px] font-black uppercase tracking-wider bg-[#8ed727] text-[#091E3A] rounded-full leading-none inline-block shadow-xs">
                    Preschools
                  </span>
                </div>
                <p className="text-[9px] sm:text-[9.5px] font-bold text-[#091E3A]/85 leading-none whitespace-nowrap">
                  Proudly Indian • Powerfully Global
                </p>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ease-out inline-flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#091E3A] text-white shadow-md'
                        : 'text-[#091E3A]/85 hover:text-[#091E3A] hover:bg-[#8ed727]/25'
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#8ed727]" />}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Actions & Mobile Hamburger */}
            <div className="flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                href="#franchise"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('franchise');
                }}
                className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full text-xs font-extrabold text-[#091E3A] bg-[#60C8D4]/20 hover:bg-[#60C8D4]/35 border border-[#60C8D4]/50 transition-colors"
              >
                Franchise
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenTourModal}
                className="btn-lime px-3 sm:px-4 py-2 rounded-full text-xs font-black flex items-center gap-1.5 border-2 border-white shadow-md"
              >
                <span>Book Visit</span>
                <Sparkles className="w-3.5 h-3.5 text-[#091E3A]" />
              </motion.button>

              {/* Hamburger Button on Tablet & Mobile */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-9 h-9 rounded-full bg-[#091E3A] text-white flex items-center justify-center shadow-md"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </motion.button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden mt-2 max-w-7xl mx-auto rounded-3xl card-flow-multi backdrop-blur-2xl border-2 shadow-2xl p-5"
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold text-left transition-all ${
                      currentPage === item.id
                        ? 'bg-[#091E3A] text-white font-black shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-[#60C8D4]/20 hover:text-[#091E3A]'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col gap-2">
                <a
                  href="tel:+919647974093"
                  className="px-4 py-2 rounded-xl bg-[#60C8D4]/20 text-[#091E3A] text-xs font-extrabold flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call +91 96479 74093</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
