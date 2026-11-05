import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, BookOpenCheck, Compass, HeartHandshake, 
  Leaf, Cpu, ArrowRight, CheckCircle2, Layers 
} from 'lucide-react';
import { KINDERMAGIC_WORLDS } from '../data/websiteContent';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

export default function KindermagicExplorer() {
  const [selectedWorldId, setSelectedWorldId] = useState(KINDERMAGIC_WORLDS[0].id);
  const activeWorld = KINDERMAGIC_WORLDS.find((w) => w.id === selectedWorldId) || KINDERMAGIC_WORLDS[0];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'BookOpenCheck': return <BookOpenCheck className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Leaf': return <Leaf className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="learning-worlds" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header - Concise & Visual */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime/30 border border-brand-lime/50 text-brand-navy font-bold text-xs mb-3 shadow-sm">
            <Layers className="w-4 h-4 text-brand-navy animate-pulse" />
            <span>Kindermagic PrimeX™</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-display mb-3">
            6 Sensory Learning Worlds
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            Click through each world to see how children explore language, math, science, and robotics through hands-on play.
          </p>
        </ScrollReveal>

        {/* 6 Worlds Horizontal Selector Grid with Staggered Scroll Animation */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {KINDERMAGIC_WORLDS.map((world, idx) => {
            const isSelected = world.id === selectedWorldId;
            return (
              <StaggerItem key={world.id}>
                <motion.button
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedWorldId(world.id)}
                  className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 relative flex flex-col justify-between h-full ${
                    isSelected
                      ? 'glass-panel-elevated bg-white border-brand-navy/20 shadow-xl ring-2 ring-brand-navy/15 scale-[1.02]'
                      : 'glass-panel bg-white/70 hover:bg-white/90 border-white/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: `${world.color}25`, color: world.color === '#ADF802' ? '#091E3A' : world.color }}
                    >
                      {getIcon(world.icon)}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-brand-navy/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-extrabold text-brand-navy tracking-tight leading-tight">
                      {world.name}
                    </h4>
                    <p className="text-[10px] text-brand-navy/60 font-semibold truncate mt-0.5">
                      {world.badge}
                    </p>
                  </div>

                  {isSelected && (
                    <motion.div 
                      layoutId="activeWorldIndicator"
                      className="absolute -bottom-1 left-4 right-4 h-1.5 rounded-full"
                      style={{ backgroundColor: world.color === '#ADF802' ? '#ADF802' : world.color }}
                    />
                  )}
                </motion.button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Active World Spotlight Feature Card (Rich Image + Concise Points) */}
        <ScrollReveal variant="scaleUp" delay={0.15}>
          <div className="glass-panel p-5 sm:p-8 border-white/95 shadow-2xl bg-white/90 rounded-3xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Punchy & Visual */}
              <div className="lg:col-span-6 space-y-4 text-left">
                <div className="flex items-center gap-2">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-brand-navy shadow-xs"
                    style={{ backgroundColor: `${activeWorld.color}40`, border: `1px solid ${activeWorld.color}` }}
                  >
                    {activeWorld.badge}
                  </span>
                  <span className="text-xs font-semibold text-brand-navy/60">
                    Station Rotation
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                    {activeWorld.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-brand-turquoise-dark mt-0.5">
                    {activeWorld.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed mt-2 font-medium">
                    {activeWorld.description}
                  </p>
                </div>

                {/* Tactile Materials Chips */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-navy/60">
                    Sensory Materials:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeWorld.materials.map((m, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-brand-navy/10 text-xs font-bold text-brand-navy shadow-2xs">
                        ✨ {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Milestones Checklist */}
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-navy/60 block mb-1.5">
                    Child Outcomes:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {activeWorld.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-brand-navy font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-turquoise-dark flex-shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: High-Resolution Preschool Photo */}
              <div className="lg:col-span-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeWorld.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group"
                  >
                    <img 
                      src={activeWorld.image} 
                      alt={activeWorld.name} 
                      className="w-full h-[280px] sm:h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom Floating Pill */}
                    <div className="absolute bottom-3 left-3 right-3 glass-panel-elevated p-3 rounded-2xl border border-white/90 shadow-lg bg-white/95 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🌟</span>
                        <div>
                          <div className="text-xs font-black text-brand-navy">{activeWorld.name} in Action</div>
                          <div className="text-[10px] text-brand-navy/70">{activeWorld.cycleFocus}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-brand-lime text-brand-navy">
                        Experiential
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
