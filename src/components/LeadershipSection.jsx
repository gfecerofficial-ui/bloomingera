import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Quote, ShieldCheck, Sparkles } from 'lucide-react';
import { LEADERSHIP } from '../data/websiteContent';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#F4F9FA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-turquoise/20 border border-brand-turquoise/40 text-brand-navy font-bold text-xs mb-3 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-brand-turquoise-dark" />
            <span>Academic Stewardship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-display mb-4">
            Founded by Educators, Not Marketers
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            Blooming Era was conceived by veteran early childhood neuro-researchers determined to rescue 
            India's toddlers from rote memorization and industrial-era school pressure.
          </p>
        </ScrollReveal>

        {/* Founder Spotlight Card with Scroll Scale-In */}
        <ScrollReveal variant="scaleUp" delay={0.1}>
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border-white/95 shadow-2xl bg-white/90 max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Founder Avatar / Portrait Tile */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-br from-brand-lime to-brand-turquoise p-1 shadow-xl flex items-center justify-center overflow-hidden"
                >
                  <div className="w-full h-full bg-white rounded-[22px] overflow-hidden relative">
                    <img
                      src={LEADERSHIP[0].photo || "/leadership/masuda-yasmin.jpeg"}
                      alt={LEADERSHIP[0].name}
                      className="w-full h-full object-cover object-top"
                    />
                    <span className="absolute bottom-1.5 inset-x-2 px-2 py-0.5 rounded-full bg-brand-navy/90 text-[9px] font-bold text-brand-lime uppercase tracking-wider text-center backdrop-blur-xs">
                      Founder
                    </span>
                  </div>
                </motion.div>

                <div className="mt-4">
                  <h3 className="text-xl font-extrabold text-brand-navy">{LEADERSHIP[0].name}</h3>
                  <p className="text-xs font-bold text-brand-turquoise-dark">{LEADERSHIP[0].role}</p>
                  <p className="text-[10px] text-brand-navy/60 mt-0.5">{LEADERSHIP[0].qualifications}</p>
                </div>
              </div>

              {/* Founder Bio & Quote */}
              <div className="lg:col-span-8 space-y-4">
                <div className="p-4 rounded-2xl bg-brand-lime/20 border border-brand-lime/40 text-brand-navy relative">
                  <Quote className="w-8 h-8 text-brand-lime-dark/40 absolute top-3 right-3 pointer-events-none" />
                  <p className="text-sm sm:text-base font-semibold italic text-brand-navy leading-relaxed pr-6">
                    "{LEADERSHIP[0].quote}"
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed">
                  {LEADERSHIP[0].bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                    <ShieldCheck className="w-4 h-4 text-brand-turquoise-dark" />
                    <span>20+ Years Early Childhood Research</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                    <Sparkles className="w-4 h-4 text-brand-lime-dark" />
                    <span>Key Contributor to NCF-FS Play Framework</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Executive Board Cards with Staggered Entrance */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {LEADERSHIP.slice(1).map((leader, idx) => (
            <StaggerItem key={idx}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-panel p-6 rounded-3xl border border-white/90 shadow-md bg-white/75 hover:bg-white/95 transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-brand-turquoise/40 shadow-md mb-4 bg-white flex-shrink-0">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h4 className="text-base font-extrabold text-brand-navy">{leader.name}</h4>
                  <p className="text-xs font-bold text-brand-turquoise-dark mb-1">{leader.role}</p>
                  <p className="text-[10px] text-brand-navy/60 mb-3">{leader.qualifications}</p>
                  <p className="text-xs text-brand-navy/75 leading-relaxed mb-4">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-navy/10 text-[11px] italic text-brand-navy/80">
                  "{leader.quote}"
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
