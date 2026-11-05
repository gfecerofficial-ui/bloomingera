import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WavingChildStickFigure({ className = "", darkMode = false, bubbleText = "Yay, No Books! 👋" }) {
  const [isWaved, setIsWaved] = useState(false);
  const strokeColor = darkMode ? "#FFFFFF" : "#091E3A";

  return (
    // STRICTLY HIDDEN ON MOBILE (hidden md:block)
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={`hidden md:block relative select-none pointer-events-auto cursor-pointer ${className}`}
      onClick={() => setIsWaved(!isWaved)}
      title="Click me to wave!"
    >
      {/* Floating Speech Bubble */}
      <motion.div
        initial={{ scale: 0, opacity: 0, y: 10 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ delay: 0.4, duration: 0.4, type: 'spring' }}
        className={`absolute -top-12 -left-16 sm:-left-20 bg-white px-3 py-1.5 rounded-2xl shadow-xl border-2 ${
          darkMode ? 'border-[#ADF802]' : 'border-brand-navy'
        } text-[11px] font-black text-brand-navy whitespace-nowrap z-50 animate-bounce`}
        style={{ animationDuration: '3s' }}
      >
        <span>{bubbleText}</span>
        {/* Little bubble arrow pointing down */}
        <div className={`absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r-2 border-b-2 ${
          darkMode ? 'border-[#ADF802]' : 'border-brand-navy'
        } transform rotate-45`} />
      </motion.div>

      {/* Symmetrically Aligned Stick Figure SVG */}
      <svg
        width="120"
        height="180"
        viewBox="0 0 120 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-xl overflow-visible"
      >
        {/* Head */}
        <circle
          cx="50"
          cy="35"
          r="21"
          stroke={strokeColor}
          strokeWidth="3.8"
          fill="#FFFDE7"
        />

        {/* Playful Hair Tufts */}
        <path
          d="M40 15 C44 8, 50 8, 54 13 C58 7, 64 9, 62 17"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Happy Smiling Eyes ^ _ ^ */}
        <path
          d="M40 32 Q44 26 48 32"
          stroke="#091E3A"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M52 32 Q56 26 60 32"
          stroke="#091E3A"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Rosy Cheeks */}
        <circle cx="36" cy="38" r="3.5" fill="#FF8A80" opacity="0.75" />
        <circle cx="64" cy="38" r="3.5" fill="#FF8A80" opacity="0.75" />

        {/* Happy Smile */}
        <path
          d="M43 42 Q50 51 57 42"
          stroke="#091E3A"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Torso Spine Line */}
        <line
          x1="50"
          y1="56"
          x2="50"
          y2="115"
          stroke={strokeColor}
          strokeWidth="3.8"
          strokeLinecap="round"
        />

        {/* Symmetrical Shoulder Line */}
        <line
          x1="30"
          y1="66"
          x2="70"
          y2="66"
          stroke={strokeColor}
          strokeWidth="3.8"
          strokeLinecap="round"
        />

        {/* Preschool T-Shirt */}
        <path
          d="M32 66 L68 66 L62 96 L38 96 Z"
          fill="#ADF802"
          stroke={strokeColor}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <rect
          x="44"
          y="74"
          width="7"
          height="8"
          rx="2"
          fill="#60C8D4"
          stroke={strokeColor}
          strokeWidth="1.5"
        />

        {/* LEFT ARM: Symmetrically connected at Left Shoulder (30, 66) */}
        <g>
          <path
            d="M30 66 L20 88 L16 108"
            stroke={strokeColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="16" cy="110" r="4.5" fill="#FFFDE7" stroke={strokeColor} strokeWidth="2.5" />
        </g>

        {/* RIGHT ARM: Symmetrically connected at Right Shoulder (70, 66) */}
        <g>
          {/* Fixed Upper Arm from Shoulder (70, 66) to Elbow (84, 54) */}
          <line
            x1="70"
            y1="66"
            x2="84"
            y2="54"
            stroke={strokeColor}
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Forearm & Hand Pivoting at Elbow (84, 54) */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 84 54; 28 84 54; -12 84 54; 30 84 54; 0 84 54"
              dur="1.4s"
              repeatCount="indefinite"
            />

            {/* Forearm from Elbow (84, 54) up to Wrist (96, 26) */}
            <line
              x1="84"
              y1="54"
              x2="96"
              y2="26"
              stroke={strokeColor}
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Waving Hand Palm at (96, 24) */}
            <circle
              cx="96"
              cy="24"
              r="5"
              fill="#FFFDE7"
              stroke={strokeColor}
              strokeWidth="2.5"
            />

            {/* Spread Waving Fingers */}
            <line x1="96" y1="19" x2="96" y2="13" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="100" y1="21" x2="105" y2="16" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="92" y1="21" x2="87" y2="17" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="101" y1="25" x2="107" y2="24" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />

            {/* Sparkle near Waving Hand */}
            <text x="105" y="16" fontSize="16">✨</text>
          </g>
        </g>

        {/* Legs */}
        <path
          d="M50 115 L36 146 L30 168"
          stroke={strokeColor}
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M30 168 C26 168, 18 171, 18 174 L34 174 Z"
          fill="#60C8D4"
          stroke={strokeColor}
          strokeWidth="2.2"
        />

        <path
          d="M50 115 L64 146 L70 168"
          stroke={strokeColor}
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M70 168 C74 168, 82 171, 82 174 L66 174 Z"
          fill="#ADF802"
          stroke={strokeColor}
          strokeWidth="2.2"
        />
      </svg>
    </motion.div>
  );
}
