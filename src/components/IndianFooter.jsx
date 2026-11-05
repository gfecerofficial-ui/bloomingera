import React from 'react';
import { Phone, Mail, ArrowRight, Heart } from 'lucide-react';

export default function IndianFooter({ onNavigate, onOpenTourModal }) {
  const handleLink = (pageId, sectionId) => {
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#091E3A] text-white pt-16 pb-12 px-4 sm:px-6 border-t-4 border-[#ADF802] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-md">
                <img src="/logo.jpeg" alt="Blooming Era Preschools" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">Blooming Era Preschools</h3>
                <p className="text-xs font-bold text-[#ADF802]">Proudly Indian, Powerfully Global Preschool.</p>
              </div>
            </div>
            <p className="text-sm text-white/75 leading-relaxed max-w-md">
              Where joyful childhood experiences meet meaningful learning, strong foundations and possibilities for the future.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#ADF802] text-xs font-black tracking-wider border border-white/10">
              <span>🌸 The Future Blooms Here.</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#60C8D4] mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-sm text-white/80 font-medium">
              {[
                { label: "Home", page: "home" },
                { label: "About Us", page: "about" },
                { label: "Curriculum", page: "curriculum" },
                { label: "Assessment", page: "assessment" },
                { label: "Admissions", page: "admissions" },
                { label: "Franchise", page: "franchise" },
                { label: "Contact Us", page: "contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLink(link.page)}
                  className="hover:text-[#ADF802] text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Legal */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#60C8D4] mb-4">
              Connect With Us
            </h4>
            <a href="tel:+919647974093" className="flex items-center gap-2.5 text-sm text-white hover:text-[#ADF802] font-bold">
              <Phone className="w-4 h-4 text-[#ADF802]" />
              <span>+91 96479 74093</span>
            </a>
            <a href="mailto:contact@bloomingera.com" className="flex items-center gap-2.5 text-sm text-white/80 hover:text-[#ADF802]">
              <Mail className="w-4 h-4 text-[#60C8D4]" />
              <span>contact@bloomingera.com</span>
            </a>
            <p className="text-xs text-white/65 pt-2">
              Dr. Masuda Yasmin — Founder & Chairperson
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 Blooming Era Preschools. All rights reserved. • Proudly Indian, Powerfully Global.</p>
          <p className="text-[#ADF802] font-bold">THE FUTURE BLOOMS HERE.</p>
        </div>
      </div>
    </footer>
  );
}
