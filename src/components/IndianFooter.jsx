import React from 'react';
import { Phone, Mail } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    name: 'YouTube',
    href: 'https://youtube.com/@bloomingera-vk6oj?si=0jL2hqLQGZ4lYHvw',
    hoverClass: 'hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/104654231/admin/dashboard/',
    hoverClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/bloomingera2019/',
    hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/bloomingerapreschools/',
    hoverClass: 'hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

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
            <div className="flex items-center gap-2.5 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Blooming Era on ${social.name}`}
                  title={social.name}
                  className={`w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/85 transition-all duration-200 ${social.hoverClass}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
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
