import React from 'react';
import { motion } from 'framer-motion';

// Visually verified: strictly preschool children / learning materials — zero adults
export const CHILD_PHOTOS = {
  classroomDrawing: "https://images.unsplash.com/photo-1727473704274-3fbad0dbbd60?auto=format&fit=crop&w=1600&q=90",
  toddlerLaughingBook: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1600&q=90",
  fingerPaintingGirl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=90",
  toddlerBeadMaze: "https://images.unsplash.com/photo-1485460535564-844461f37f77?auto=format&fit=crop&w=1600&q=90",
  toddlerAmazedBook: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=1200&q=90",
  natureExplorerChild: "https://images.unsplash.com/photo-1471342051519-9621d25323fc?auto=format&fit=crop&w=1200&q=90",
  woodenBlocksChild: "https://images.unsplash.com/photo-1489850846882-35ef10a4b480?auto=format&fit=crop&w=1200&q=90",
  playgroupFloorToddler: "https://images.unsplash.com/photo-1477511614005-61bd8b91d218?auto=format&fit=crop&w=1200&q=90",
  seniorKgFocusedChild: "https://images.unsplash.com/photo-1488254491307-10ca8fa174c8?auto=format&fit=crop&w=1200&q=90",
  woodenCameraToddler: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=90",
  outdoorBallPlayKids: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=90",
  woodenTrainSet: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=90",
  coloredPencilsCraft: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=90",
};

// Flowy Wave SVG Divider Component with Subtle Continuous Flowing Animation
export function FlowyWaveDivider({ flip = false, fill = "#FFFFFF", accentColor = "#60C8D4" }) {
  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none relative ${flip ? 'rotate-180' : ''}`}>
      <div className="relative w-full h-12 sm:h-20 lg:h-24 overflow-hidden">
        
        {/* Layer 1: Ambient Accent Drift Wave */}
        <svg
          className="absolute top-0 left-0 w-[200%] h-full animate-wave-slow will-change-transform"
          viewBox="0 0 2880 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C360,110 720,-10 1080,55 C1260,90 1350,20 1440,45 C1800,110 2160,-10 2520,55 C2700,90 2790,20 2880,45 L2880,120 L0,120 Z"
            fill={accentColor}
            fillOpacity="0.14"
          />
        </svg>

        {/* Layer 2: Counter-Flowing Delicate Shimmer Wave */}
        <svg
          className="absolute top-0 left-0 w-[200%] h-full animate-wave-reverse will-change-transform"
          viewBox="0 0 2880 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,35 C280,5 560,95 840,30 C1120,-15 1280,65 1440,35 C1720,5 2000,95 2280,30 C2560,-15 2720,65 2880,35 L2880,120 L0,120 Z"
            fill={accentColor}
            fillOpacity="0.20"
          />
        </svg>

        {/* Layer 3: Main Foreground Fill Wave */}
        <svg
          className="absolute top-0 left-0 w-[200%] h-full animate-wave-main will-change-transform"
          viewBox="0 0 2880 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,65 C320,125 640,15 960,75 C1180,115 1320,40 1440,65 C1760,125 2080,15 2400,75 C2620,115 2760,40 2880,65 L2880,120 L0,120 Z"
            fill={fill}
          />
        </svg>

      </div>
    </div>
  );
}

export function PageHeader({ badge, title, subtitle }) {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#091E3A] via-[#0D2342] to-[#122B4E] text-white overflow-hidden">
      {/* Silky Floating Ambient Glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="ambient-orb w-96 h-96 top-0 left-10 blur-3xl pointer-events-none"
        style={{ background: '#60C8D4' }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="ambient-orb w-96 h-96 bottom-0 right-10 blur-3xl pointer-events-none"
        style={{ background: '#ADF802' }}
      />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest mb-4 shadow-md">
            {badge}
          </span>
        )}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 font-jakarta">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-xl text-white/85 max-w-3xl mx-auto font-medium leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

/**
 * Flowing-sand palette themes matching "Big Thinking for Little Learners" on the Home page.
 */
export const SAND_THEMES = {
  lime: {
    bgGradient: 'linear-gradient(135deg, #ADF802 0%, #9fe000 50%, #bbf926 100%)',
    waveColor1: 'rgba(255, 255, 255, 0.32)',
    waveColor2: 'rgba(105, 175, 18, 0.28)',
    waveColor3: 'rgba(255, 255, 255, 0.20)',
    sandShimmer: 'rgba(235, 255, 190, 0.45)',
    borderColor: 'rgba(255, 255, 255, 0.65)',
    shadow: '0 22px 55px rgba(173, 248, 2, 0.35)',
    textColor: '#091E3A',
    subTextColor: 'rgba(9, 30, 58, 0.84)',
    mutedTextColor: 'rgba(9, 30, 58, 0.65)',
    accentBarColor: '#091E3A',
    iconColor: '#091E3A',
  },
  cyan: {
    bgGradient: 'linear-gradient(135deg, #02c9fe 0%, #05b8e9 50%, #36d6fe 100%)',
    waveColor1: 'rgba(255, 255, 255, 0.34)',
    waveColor2: 'rgba(2, 130, 195, 0.26)',
    waveColor3: 'rgba(255, 255, 255, 0.20)',
    sandShimmer: 'rgba(210, 248, 255, 0.45)',
    borderColor: 'rgba(255, 255, 255, 0.65)',
    shadow: '0 22px 55px rgba(2, 201, 254, 0.35)',
    textColor: '#091E3A',
    subTextColor: 'rgba(9, 30, 58, 0.84)',
    mutedTextColor: 'rgba(9, 30, 58, 0.65)',
    accentBarColor: '#091E3A',
    iconColor: '#091E3A',
  },
  yellow: {
    bgGradient: 'linear-gradient(135deg, #fece13 0%, #f7be0b 50%, #fedd46 100%)',
    waveColor1: 'rgba(255, 255, 255, 0.35)',
    waveColor2: 'rgba(215, 150, 0, 0.24)',
    waveColor3: 'rgba(255, 255, 255, 0.22)',
    sandShimmer: 'rgba(255, 252, 215, 0.50)',
    borderColor: 'rgba(255, 255, 255, 0.65)',
    shadow: '0 22px 55px rgba(254, 206, 19, 0.35)',
    textColor: '#091E3A',
    subTextColor: 'rgba(9, 30, 58, 0.84)',
    mutedTextColor: 'rgba(9, 30, 58, 0.65)',
    accentBarColor: '#091E3A',
    iconColor: '#091E3A',
  },
  rose: {
    bgGradient: 'linear-gradient(135deg, #fa0672 0%, #e20063 50%, #fc3c91 100%)',
    waveColor1: 'rgba(255, 255, 255, 0.28)',
    waveColor2: 'rgba(160, 0, 68, 0.26)',
    waveColor3: 'rgba(255, 255, 255, 0.18)',
    sandShimmer: 'rgba(255, 220, 238, 0.45)',
    borderColor: 'rgba(255, 255, 255, 0.55)',
    shadow: '0 22px 55px rgba(250, 6, 114, 0.35)',
    textColor: '#FFFFFF',
    subTextColor: 'rgba(255, 255, 255, 0.90)',
    mutedTextColor: 'rgba(255, 255, 255, 0.78)',
    accentBarColor: '#FFFFFF',
    iconColor: '#FFFFFF',
  },
};

/**
 * Animated sand-dune wave layers, shimmer, and micro-grain overlay for themed cards.
 */
export function FlowingSandWaves({ theme }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[30px]">
      <div
        className="absolute -inset-10 animate-sand-shimmer pointer-events-none"
        style={{
          background: `radial-gradient(circle at 35% 25%, ${theme.sandShimmer} 0%, transparent 60%)`,
        }}
      />
      <svg
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
        className="absolute -bottom-2 left-0 w-[200%] h-36 animate-sand-forward pointer-events-none"
        style={{ fill: theme.waveColor1 }}
      >
        <path d="M 0,140 Q 125,60 250,140 T 500,140 Q 625,60 750,140 T 1000,140 L 1000,300 L 0,300 Z" />
      </svg>
      <svg
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
        className="absolute -bottom-4 left-0 w-[200%] h-44 animate-sand-reverse pointer-events-none"
        style={{ fill: theme.waveColor2 }}
      >
        <path d="M 0,180 Q 150,230 300,170 T 500,180 Q 650,230 800,170 T 1000,180 L 1000,300 L 0,300 Z" />
      </svg>
      <svg
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
        className="absolute -bottom-6 left-0 w-[200%] h-28 animate-sand-drift pointer-events-none"
        style={{ fill: theme.waveColor3 }}
      >
        <path d="M 0,110 C 100,70 180,150 250,110 C 320,70 400,150 500,110 C 600,70 680,150 750,110 C 820,70 900,150 1000,110 L 1000,300 L 0,300 Z" />
      </svg>
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.85) 1px, transparent 1px), radial-gradient(circle at 20% 30%, rgba(0,0,0,0.45) 1px, transparent 1px)`,
          backgroundSize: '12px 12px, 16px 16px',
        }}
      />
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

