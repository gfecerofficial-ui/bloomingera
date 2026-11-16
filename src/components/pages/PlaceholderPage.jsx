import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft } from 'lucide-react';
import { FlowyWaveDivider, PageHeader } from './shared';

/**
 * Reusable placeholder page for upcoming sections (e.g., Gallery, Blog).
 */
export default function PlaceholderPage({ badge, title, subtitle, onNavigate }) {
  return (
    <div className="overflow-hidden bg-[#F4F9FB]">
      <PageHeader badge={badge} title={title} subtitle={subtitle} />
      <FlowyWaveDivider fill="#F4F9FB" accentColor="#ADF802" />

      <section className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-[32px] bg-white border-2 border-[#60C8D4]/30 shadow-xl p-10 sm:p-14 text-center space-y-5"
          >
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#ADF802]/25 border border-[#ADF802]/50 flex items-center justify-center text-[#091E3A]">
              <Clock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#091E3A] tracking-tight">
              Yet to be updated
            </h2>
            <p className="text-sm sm:text-base text-[#091E3A]/70 font-medium">
              We are curating this section. Please check back soon.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('home')}
                className="btn-lime px-6 py-2.5 rounded-full text-xs font-black inline-flex items-center gap-2 border-2 border-white shadow-md"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
