import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * PeekingChildFigure
 * A large, clean, adorable preschool stick-figure child holding onto a hanging
 * rope with their left hand on the left edge of the screen and occasionally
 * waving at the user with their right hand (with a locked zero-gap elbow pivot).
 */
export default function PeekingChildFigure() {
  const [isWaving, setIsWaving] = useState(false);

  // Soft translucent tint for limbs & joints so they stay gently in the background
  // and never conflict with or distract from the bold hero heading typography
  const LIMB_STROKE = 'rgba(9, 30, 58, 0.20)';
  const LIMB_FILL = 'rgba(255, 255, 255, 0.50)';
  const BODY_STROKE = 'rgba(9, 30, 58, 0.36)';

  useEffect(() => {
    // First friendly wave shortly after appearing
    const startWave = setTimeout(() => setIsWaving(true), 1200);
    const endWave = setTimeout(() => setIsWaving(false), 3800);

    // Occasional wave cycle every 7.5 seconds
    const interval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 2500);
    }, 7500);

    return () => {
      clearTimeout(startWave);
      clearTimeout(endWave);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="hidden md:block pointer-events-none select-none absolute left-0 lg:-left-1 top-[52%] -translate-y-1/2 z-[2]"
    >
      <motion.div
        initial={{ x: -180, rotate: -6, opacity: 0 }}
        animate={{
          x: 0,
          rotate: isWaving ? [2, 5, 2] : [0, 2.5, 0],
          opacity: 0.86,
        }}
        transition={{
          x: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.65 },
          rotate: {
            duration: isWaving ? 2.4 : 4.8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        style={{ transformOrigin: '14% 0%' }}
        className="relative w-[260px] h-[420px] lg:w-[320px] lg:h-[515px] xl:w-[355px] xl:h-[570px]"
      >
        {/* Subtle "Hi!" pill that pops up while waving (snug above child's head, clear of heading text) */}
        <AnimatePresence>
          {isWaving && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 6 }}
              transition={{ duration: 0.26, ease: 'backOut' }}
              className="absolute top-0 left-20 lg:left-24 px-3.5 py-1 rounded-full bg-white/90 border-2 border-[#8ed727]/80 shadow-md text-xs lg:text-sm font-black text-[#091E3A]/85 whitespace-nowrap"
            >
              Hi! 👋
            </motion.div>
          )}
        </AnimatePresence>

        <svg
          viewBox="0 0 135 215"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible drop-shadow-[0_12px_26px_rgba(9,30,58,0.10)]"
        >
          {/* Soft pastel aura behind the child */}
          <circle cx="56" cy="82" r="44" fill="#8ed727" fillOpacity="0.11" />
          <circle cx="66" cy="108" r="38" fill="#60C8D4" fillOpacity="0.11" />

          {/* ================= HANGING PLAYGROUND ROPE (Left Side) ================= */}
          <g>
            {/* Main Braided Rope Body hanging from top of viewport down to knot */}
            <path
              d="M 18 -320 L 18 174"
              stroke="#091E3A"
              strokeWidth="6.2"
              strokeLinecap="round"
            />
            <path
              d="M 18 -320 L 18 174"
              stroke="#E5A95C"
              strokeWidth="3.4"
              strokeLinecap="round"
            />
            {/* Diagonal Rope Twist Texture Marks */}
            {[-300, -280, -260, -240, -220, -200, -180, -160, -140, -120, -100, -80, -60, -40, -20, 0, 20, 40, 60, 80, 100, 120, 140, 160].map((yPos) => (
              <line
                key={yPos}
                x1="15.5"
                y1={yPos}
                x2="20.5"
                y2={yPos + 5}
                stroke="#091E3A"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            ))}

            {/* Rope Bottom Knot (Positioned right under the child's left foot) */}
            <ellipse
              cx="18"
              cy="176"
              rx="5.5"
              ry="4.2"
              fill="#E5A95C"
              stroke="#091E3A"
              strokeWidth="2.4"
            />
            {/* Frayed Rope Tassel at Bottom */}
            <path
              d="M 16 180 L 13 190 M 18 180 L 18 191 M 20 180 L 23 190"
              stroke="#091E3A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* ================= LEGS (Centered inside each shorts cuff) ================= */}
          {/* Left Leg: emerges from center of left shorts cuff down to rope knot */}
          <path
            d="M 35 125 L 27 149 L 20 168"
            stroke={LIMB_STROKE}
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left Sneaker resting on the rope knot */}
          <ellipse
            cx="20"
            cy="170"
            rx="7"
            ry="4"
            transform="rotate(-8 20 170)"
            fill="rgba(142, 215, 39, 0.65)"
            stroke={LIMB_STROKE}
            strokeWidth="2.0"
          />

          {/* Right Leg: emerges from center of right shorts cuff hanging naturally down */}
          <path
            d="M 48 127 L 46 152 L 44 172"
            stroke={LIMB_STROKE}
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Sneaker */}
          <ellipse
            cx="46"
            cy="174"
            rx="7.5"
            ry="4.2"
            transform="rotate(6 46 174)"
            fill="rgba(96, 200, 212, 0.65)"
            stroke={LIMB_STROKE}
            strokeWidth="2.0"
          />

          {/* ================= LEFT ARM (Reaching up & holding the rope!) ================= */}
          {/* Arm from Left Shoulder (38, 80) up to Rope Grip at (18, 56) */}
          <path
            d="M 38 80 L 26 68 L 18 56"
            stroke={LIMB_STROKE}
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* ================= TORSO / PRESCHOOL OUTFIT ================= */}
          {/* Stick Spine */}
          <path
            d="M 52 76 L 42 128"
            stroke={LIMB_STROKE}
            strokeWidth="3.4"
            strokeLinecap="round"
          />

          {/* Blooming Era Preschool Tee */}
          <path
            d="M 37 78 L 65 82 L 58 120 L 29 116 Z"
            fill="#8ed727"
            stroke={BODY_STROKE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Gold Collar Accent */}
          <path
            d="M 43 79 Q 51 86 59 81"
            fill="#fece13"
            stroke={BODY_STROKE}
            strokeWidth="2.0"
            strokeLinecap="round"
          />
          {/* Cyan Shorts (overlaps top of both legs cleanly) */}
          <path
            d="M 30 116 L 57 120 L 53 136 L 42 134 L 41 126 L 39 134 L 28 132 Z"
            fill="#60C8D4"
            stroke={BODY_STROKE}
            strokeWidth="2.4"
            strokeLinejoin="round"
          />

          {/* Left Hand Wrapped Front-Over the Rope at (18, 56) */}
          <g>
            <ellipse
              cx="18"
              cy="56"
              rx="6"
              ry="5"
              fill={LIMB_FILL}
              stroke={LIMB_STROKE}
              strokeWidth="2.0"
            />
            {/* Gripping Knuckles / Fingers wrapped around rope */}
            <line x1="14" y1="54" x2="21" y2="54" stroke={LIMB_STROKE} strokeWidth="1.6" strokeLinecap="round" />
            <line x1="14" y1="57" x2="21" y2="57" stroke={LIMB_STROKE} strokeWidth="1.6" strokeLinecap="round" />
          </g>

          {/* ================= RIGHT ARM (Waving Arm — Soft Translucent Limb) ================= */}
          <g>
            {/* Upper Arm from Right Shoulder (63, 83) to Elbow (82, 76) */}
            <line
              x1="63"
              y1="83"
              x2="82"
              y2="76"
              stroke={LIMB_STROKE}
              strokeWidth="3.4"
              strokeLinecap="round"
            />

            {/* Elbow Pivot Joint locked at exact coordinate (82, 76) */}
            <g transform="translate(82, 76)">
              {/* Seamless Elbow Joint Cap so line never shows a gap */}
              <circle cx="0" cy="0" r="1.7" fill={LIMB_STROKE} />

              {/* Forearm & Hand rotating strictly around (0, 0) */}
              <g className={isWaving ? 'animate-child-elbow-wave' : 'animate-child-elbow-idle'}>
                {/* Forearm starting at exact (0, 0) up to Wrist (16, -28) */}
                <line
                  x1="0"
                  y1="0"
                  x2="16"
                  y2="-28"
                  stroke={LIMB_STROKE}
                  strokeWidth="3.4"
                  strokeLinecap="round"
                />

                {/* Waving Palm at (18, -31) */}
                <circle
                  cx="18"
                  cy="-31"
                  r="6"
                  fill={LIMB_FILL}
                  stroke={LIMB_STROKE}
                  strokeWidth="2.0"
                />

                {/* Cute Spread Waving Fingers */}
                <line x1="16" y1="-37" x2="14" y2="-44" stroke={LIMB_STROKE} strokeWidth="2.0" strokeLinecap="round" />
                <line x1="20" y1="-37" x2="22" y2="-44" stroke={LIMB_STROKE} strokeWidth="2.0" strokeLinecap="round" />
                <line x1="23" y1="-34" x2="29" y2="-39" stroke={LIMB_STROKE} strokeWidth="2.0" strokeLinecap="round" />
                <line x1="13" y1="-33" x2="7" y2="-37" stroke={LIMB_STROKE} strokeWidth="2.0" strokeLinecap="round" />

                {/* Waving Motion Lines */}
                {isWaving && (
                  <g>
                    <path
                      d="M 30 -45 Q 37 -38 34 -29"
                      stroke="rgba(142, 215, 39, 0.45)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 5 -47 Q -2 -41 0 -32"
                      stroke="rgba(96, 200, 212, 0.45)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </g>
                )}
              </g>
            </g>
          </g>

          {/* ================= CHEERFUL CHILD HEAD ================= */}
          <g transform="translate(56, 46) rotate(8)">
            {/* Ears */}
            <circle
              cx="-25"
              cy="2"
              r="5"
              fill="#FFFDF5"
              stroke={BODY_STROKE}
              strokeWidth="2.2"
            />
            <circle
              cx="25"
              cy="2"
              r="5"
              fill="#FFFDF5"
              stroke={BODY_STROKE}
              strokeWidth="2.2"
            />

            {/* Main Round Head */}
            <circle
              cx="0"
              cy="0"
              r="25"
              fill="#FFFDF5"
              stroke={BODY_STROKE}
              strokeWidth="2.8"
            />

            {/* Bouncy Hair Curls on Top */}
            <path
              d="M -10 -24 C -8 -34, 2 -34, 4 -25 C 8 -33, 18 -30, 14 -21"
              stroke={BODY_STROKE}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Hair Pin in Brand Gold */}
            <circle
              cx="-12"
              cy="-21"
              r="4.5"
              fill="#fece13"
              stroke={BODY_STROKE}
              strokeWidth="1.8"
            />

            {/* Expressive Blinking Eyes */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                times: [0, 0.46, 0.5, 0.54, 1],
              }}
            >
              <circle cx="-9" cy="-3" r="3.4" fill="#091E3A" />
              <circle cx="-10" cy="-4.2" r="1.1" fill="#FFFFFF" />

              <circle cx="9" cy="-3" r="3.4" fill="#091E3A" />
              <circle cx="8" cy="-4.2" r="1.1" fill="#FFFFFF" />
            </motion.g>

            {/* Rosy Cheeks */}
            <ellipse cx="-14" cy="4" rx="4.2" ry="2.6" fill="#FF6B8B" opacity="0.65" />
            <ellipse cx="14" cy="4" rx="4.2" ry="2.6" fill="#FF6B8B" opacity="0.65" />

            {/* Big Joyful Smile */}
            <path
              d="M -8 7 Q 0 16 8 7"
              stroke="rgba(9, 30, 58, 0.55)"
              strokeWidth="2.6"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
