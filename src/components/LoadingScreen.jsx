import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CHILD_PHOTOS } from './pages/shared';

const ORBIT_IMAGES = [
  {
    src: CHILD_PHOTOS.toddlerBeadMaze,
    label: 'Discovery',
    color: '#8ed727',
    angleDeg: -90,
  },
  {
    src: CHILD_PHOTOS.woodenBlocksChild,
    label: 'Wonder',
    color: '#60C8D4',
    angleDeg: -30,
  },
  {
    src: CHILD_PHOTOS.fingerPaintingGirl,
    label: 'Creativity',
    color: '#fece13',
    angleDeg: 30,
  },
  {
    src: CHILD_PHOTOS.classroomDrawing,
    label: 'Expression',
    color: '#FF6B8B',
    angleDeg: 90,
  },
  {
    src: CHILD_PHOTOS.toddlerLaughingBook,
    label: 'Joy',
    color: '#9B51E0',
    angleDeg: 150,
  },
  {
    src: CHILD_PHOTOS.natureExplorerChild,
    label: 'Nature',
    color: '#02C9FE',
    angleDeg: 210,
  },
];

export default function LoadingScreen({ onComplete }) {
  // Phases: 'init' -> 'revolve' -> 'collapse' -> 'done'
  const [phase, setPhase] = useState('init');

  useEffect(() => {
    let isMounted = true;
    let expandTimer;
    let collapseTimer;
    let finishTimer;

    // Step 1: Emerge the 6 images from behind the logo into orbit
    expandTimer = setTimeout(() => {
      if (isMounted) setPhase('revolve');
    }, 100);

    // Preload & decode every hero asset and satellite image in memory behind loading screen
    const heroAssets = [
      '/hero/slide_1.png',
      '/hero/slide_2.png',
      '/hero/slide_3.png',
      '/logo.jpeg',
      ...ORBIT_IMAGES.map((img) => img.src),
    ];

    const preloadAssetsPromise = Promise.all(
      heroAssets.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          if (img.decode) {
            img.decode().then(resolve).catch(resolve);
          } else {
            img.onload = resolve;
            img.onerror = resolve;
          }
        });
      })
    );

    // Wait for both minimum 3.1s revolve duration, window load, AND all hero assets decoded (capped at 3.5s max)
    const minDurationPromise = new Promise((resolve) => setTimeout(resolve, 3100));
    const pageLoadPromise = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        const onLoad = () => {
          window.removeEventListener('load', onLoad);
          resolve();
        };
        window.addEventListener('load', onLoad);
        // Fallback cap at 3.5s so loading screen never hangs
        setTimeout(() => {
          window.removeEventListener('load', onLoad);
          resolve();
        }, 3500);
      }
    });

    Promise.all([minDurationPromise, pageLoadPromise, preloadAssetsPromise]).then(() => {
      if (!isMounted) return;
      // Step 2: Collapse the 6 images back behind the central circular logo
      setPhase('collapse');

      // Step 3: Fade out loader overlay after images have tucked behind the logo
      collapseTimer = setTimeout(() => {
        if (!isMounted) return;
        setPhase('done');
        finishTimer = setTimeout(() => {
          if (isMounted && onComplete) onComplete();
        }, 450);
      }, 650);
    });

    return () => {
      isMounted = false;
      clearTimeout(expandTimer);
      clearTimeout(collapseTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const isExpanded = phase === 'revolve';
  const isCollapsing = phase === 'collapse' || phase === 'done';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: phase === 'done' ? 0 : 1,
        scale: phase === 'done' ? 1.03 : 1,
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden select-none"
      style={{
        background:
          'radial-gradient(circle at 50% 48%, #ffffff 0%, #f0f9fc 48%, #e4f4f9 100%)',
        pointerEvents: phase === 'done' ? 'none' : 'auto',
      }}
    >
      {/* Ambient Soft Pastel Orbs */}
      <div
        className="absolute w-80 h-80 sm:w-[440px] sm:h-[440px] rounded-full blur-3xl opacity-45 pointer-events-none transition-transform duration-1000"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(142,215,39,0.35), rgba(96,200,212,0.35), rgba(254,206,19,0.35), rgba(255,107,139,0.3), rgba(155,81,224,0.3), rgba(142,215,39,0.35))',
          transform: isExpanded ? 'scale(1.12)' : 'scale(0.65)',
        }}
      />

      {/* Orbital Stage */}
      <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] flex items-center justify-center loader-orbit-stage">
        {/* Subtle Dashed Orbital Track Ring */}
        <div
          className="absolute rounded-full border-2 border-dashed border-[#60C8D4]/45 transition-all duration-700 pointer-events-none"
          style={{
            width: 'calc(var(--orbit-radius) * 2)',
            height: 'calc(var(--orbit-radius) * 2)',
            transform: isExpanded ? 'scale(1)' : 'scale(0.25)',
            opacity: isExpanded ? 0.85 : 0,
          }}
        />

        {/* 6 Revolving Satellite Images (z-10: Behind the z-30 Logo) */}
        <div className="absolute inset-0 flex items-center justify-center z-10 animate-loader-orbit pointer-events-none">
          {ORBIT_IMAGES.map((item, idx) => {
            const rad = (item.angleDeg * Math.PI) / 180;
            const cos = Math.cos(rad).toFixed(4);
            const sin = Math.sin(rad).toFixed(4);

            return (
              <div
                key={item.label}
                className="absolute flex items-center justify-center"
                style={{
                  '--cos': cos,
                  '--sin': sin,
                  transform: isExpanded
                    ? 'translate(calc(var(--cos) * var(--orbit-radius)), calc(var(--sin) * var(--orbit-radius))) scale(1)'
                    : 'translate(0px, 0px) scale(0.15)',
                  opacity: isExpanded ? 1 : 0,
                  transition: isCollapsing
                    ? `transform 0.58s cubic-bezier(0.6, -0.25, 0.7, 0.2) ${idx * 25}ms, opacity 0.48s ease ${idx * 25}ms`
                    : `transform 0.68s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 55}ms, opacity 0.4s ease ${idx * 55}ms`,
                }}
              >
                {/* Counter-rotating wrapper keeps each child photo upright while revolving */}
                <div className="animate-loader-counter-orbit">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white p-1 shadow-xl relative"
                    style={{
                      border: `3px solid ${item.color}`,
                      boxShadow: `0 10px 26px -4px ${item.color}66`,
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover rounded-full"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Circular Logo (z-30: Sits in front so images emerge from & collapse behind it) */}
        <motion.div
          animate={{
            scale: phase === 'collapse' ? [1, 1.1, 1.02] : [1, 1.04, 1],
          }}
          transition={{
            duration: phase === 'collapse' ? 0.55 : 2.2,
            repeat: phase === 'collapse' ? 0 : Infinity,
            ease: 'easeInOut',
          }}
          className="relative z-30 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white p-2 border-4 border-[#8ed727] shadow-[0_16px_48px_rgba(9,30,58,0.18),0_0_36px_rgba(142,215,39,0.45)] flex items-center justify-center"
        >
          {/* Spinning multicolor halo ring on the logo */}
          <div
            className="absolute -inset-1.5 rounded-full opacity-75 pointer-events-none animate-loader-orbit"
            style={{
              background:
                'conic-gradient(from 0deg, #8ed727, #60C8D4, #fece13, #FF6B8B, #9B51E0, #8ed727)',
              WebkitMask:
                'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '3px',
            }}
          />
          <img
            src="/logo.jpeg"
            alt="Blooming Era Preschools"
            className="w-full h-full object-contain rounded-full"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* Brand Tagline & Animated Progress Pill */}
      <div className="relative z-30 mt-3 text-center px-4">
        <p className="text-lg sm:text-xl font-extrabold text-[#091E3A] tracking-tight">
          Blooming Era{' '}
          <span className="px-2 py-0.5 text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#8ed727] text-[#091E3A] rounded-full align-middle ml-1">
            Preschools
          </span>
        </p>
        <p className="text-xs sm:text-sm font-bold text-[#091E3A]/70 mt-1">
          Proudly Indian • Powerfully Global
        </p>

        {/* Smooth Progress Bar */}
        <div className="w-44 sm:w-52 h-1.5 bg-[#091E3A]/10 rounded-full overflow-hidden mx-auto mt-3">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 3.2, ease: 'easeInOut' }}
            className="h-full rounded-full"
            style={{
              background:
                'linear-gradient(90deg, #8ed727 0%, #60C8D4 35%, #fece13 70%, #FF6B8B 100%)',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
