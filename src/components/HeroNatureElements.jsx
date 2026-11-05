import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Single animated flapping bird SVG
 */
function FlappingBird({ scale = 1, delay = 0, flapDuration = 0.55, className = '' }) {
  const STROKE_COLOR = 'rgba(9, 30, 58, 0.48)';

  return (
    <motion.div
      style={{ scale }}
      animate={{
        y: [0, -6, 1, -4, 0],
        rotate: [-2, 3, -1, 2, -2],
      }}
      transition={{
        duration: flapDuration * 3,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      <svg
        width="50"
        height="28"
        viewBox="-26 -18 52 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Left Wing flapping around center body (0, 0) */}
        <motion.path
          d="M 0 0 Q -10 -14 -22 -5"
          stroke={STROKE_COLOR}
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
          style={{ transformOrigin: '0px 0px' }}
          animate={{ rotate: [-22, 24, -22] }}
          transition={{
            duration: flapDuration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Right Wing flapping symmetrically around center body (0, 0) */}
        <motion.path
          d="M 0 0 Q 10 -14 22 -5"
          stroke={STROKE_COLOR}
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
          style={{ transformOrigin: '0px 0px' }}
          animate={{ rotate: [22, -24, 22] }}
          transition={{
            duration: flapDuration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Subtle center bird body */}
        <circle cx="0" cy="0" r="1.8" fill={STROKE_COLOR} />
      </svg>
    </motion.div>
  );
}

/**
 * HeroNatureElements
 * 1. Glowing Sun in the top-right corner of the hero section (rises first once page is loaded).
 * 2. Flock of birds appearing from the far left of the screen and disappearing into the right.
 * 3. Blooming plant/flower in the bottom-right corner that grows and blooms once the page is loaded and the sun is up.
 */
export default function HeroNatureElements({ isPageLoaded = true }) {
  const [sunIsUp, setSunIsUp] = useState(false);

  useEffect(() => {
    if (!isPageLoaded) {
      setSunIsUp(false);
      return;
    }
    // Sun finishes rising ~0.8s after page load; trigger plant bloom right after
    const timer = setTimeout(() => {
      setSunIsUp(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [isPageLoaded]);

  const LINE_STROKE = 'rgba(9, 30, 58, 0.38)';
  const SUN_STROKE = 'rgba(9, 30, 58, 0.26)';

  // 5 sunbeams radiating from the top-right quarter sun (matching the sketch angles)
  const sunRays = [
    { angle: 194, innerR: 98, outerR: 152, delay: 0.2 },
    { angle: 211, innerR: 98, outerR: 168, delay: 0.3 },
    { angle: 228, innerR: 98, outerR: 174, delay: 0.4 },
    { angle: 245, innerR: 98, outerR: 164, delay: 0.5 },
    { angle: 261, innerR: 98, outerR: 148, delay: 0.6 },
  ];

  // 5 flower petals arranged radially around the flower center (0, 0)
  const petalAngles = [0, 72, 144, 216, 288];

  return (
    <div aria-hidden="true" className="pointer-events-none select-none inset-0 absolute overflow-hidden z-[2]">
      {/* =================================================================== */}
      {/* 1. TOP-RIGHT GLOWING SUN                                            */}
      {/* =================================================================== */}
      <div className="absolute top-[36px] right-0 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]">
        {/* Outer Diffused Warm Sun Glow Aura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isPageLoaded
              ? {
                  opacity: [0.7, 1, 0.7],
                  scale: [0.96, 1.1, 0.96],
                }
              : { opacity: 0, scale: 0.5 }
          }
          transition={{
            opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute -top-24 -right-24 w-[400px] h-[400px] sm:w-[480px] sm:h-[480px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(254, 206, 19, 0.50) 0%, rgba(255, 184, 0, 0.26) 36%, rgba(254, 206, 19, 0.09) 64%, transparent 80%)',
            filter: 'blur(14px)',
          }}
        />

        {/* Inner Golden Core Shimmer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={
            isPageLoaded
              ? {
                  opacity: [0.8, 1, 0.8],
                  scale: [0.95, 1.06, 0.95],
                }
              : { opacity: 0, scale: 0.4 }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-12 -right-12 w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 248, 185, 0.90) 0%, rgba(254, 206, 19, 0.48) 50%, transparent 78%)',
            filter: 'blur(6px)',
          }}
        />

        {/* Quarter-Sun Illustration & Radiant Sunbeams */}
        <motion.svg
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, x: 45, y: -45, scale: 0.7 }}
          animate={
            isPageLoaded
              ? { opacity: 1, x: 0, y: 0, scale: 1 }
              : { opacity: 0, x: 45, y: -45, scale: 0.7 }
          }
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full overflow-visible"
        >
          <defs>
            <radialGradient id="heroCornerSunGrad" cx="88%" cy="8%" r="75%">
              <stop offset="0%" stopColor="#FFF9C4" stopOpacity="0.92" />
              <stop offset="55%" stopColor="#fece13" stopOpacity="0.62" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.35" />
            </radialGradient>
          </defs>

          {/* Main Corner Sun Disc centered near top-right corner (226, 12) */}
          <circle
            cx="226"
            cy="12"
            r="90"
            fill="url(#heroCornerSunGrad)"
            stroke={SUN_STROKE}
            strokeWidth="2.6"
          />

          {/* Soft inner warm ring */}
          <circle
            cx="226"
            cy="12"
            r="74"
            stroke="rgba(254, 206, 19, 0.5)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />

          {/* Animated Sunbeams extending outward from the quarter-sun arc */}
          {sunRays.map((ray, idx) => {
            const rad = (ray.angle * Math.PI) / 180;
            const cx = 226;
            const cy = 12;
            const x1 = cx + Math.cos(rad) * ray.innerR;
            const y1 = cy - Math.sin(rad) * ray.innerR;
            const x2 = cx + Math.cos(rad) * ray.outerR;
            const y2 = cy - Math.sin(rad) * ray.outerR;

            return (
              <g key={idx}>
                {/* Soft golden glow behind each ray */}
                <motion.line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(254, 206, 19, 0.6)"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isPageLoaded
                      ? {
                          pathLength: 1,
                          opacity: [0.45, 0.9, 0.45],
                        }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{
                    pathLength: { duration: 0.55, delay: ray.delay, ease: 'easeOut' },
                    opacity: {
                      duration: 2.8,
                      delay: ray.delay + 0.55,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                />
                {/* Crisp sketch ray line */}
                <motion.line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={SUN_STROKE}
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isPageLoaded
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.55, delay: ray.delay, ease: 'easeOut' }}
                />
              </g>
            );
          })}
        </motion.svg>
      </div>

      {/* =================================================================== */}
      {/* 2. FLOCK OF BIRDS FLYING FROM LEFT OF SCREEN TO RIGHT               */}
      {/* =================================================================== */}
      {isPageLoaded && (
        <div className="absolute top-[192px] sm:top-[202px] lg:top-[212px] inset-x-0 h-[90px] overflow-hidden">
          <motion.div
            initial={{ x: '-12vw', y: 6, opacity: 0 }}
            animate={{
              x: ['-12vw', '106vw'],
              y: [6, -8, 5, -9, 3, -3],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              x: {
                duration: 12,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: 'linear',
              },
              y: {
                duration: 12,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: 'easeInOut',
              },
              opacity: {
                duration: 12,
                times: [0, 0.04, 0.5, 0.95, 1],
                repeat: Infinity,
                repeatDelay: 0.5,
              },
            }}
            className="relative w-[180px] h-[75px]"
          >
            {/* Bird 1 (Trailing left, middle height) */}
            <div className="absolute left-0 top-5">
              <FlappingBird scale={0.96} delay={0} flapDuration={0.54} />
            </div>

            {/* Bird 2 (Middle, slightly higher — matches sketch formation) */}
            <div className="absolute left-16 top-0">
              <FlappingBird scale={1.12} delay={0.18} flapDuration={0.5} />
            </div>

            {/* Bird 3 (Lead bird on the right, slightly lower) */}
            <div className="absolute left-32 top-7">
              <FlappingBird scale={0.88} delay={0.34} flapDuration={0.58} />
            </div>
          </motion.div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 3. BOTTOM-RIGHT BLOOMING PLANT (Blooms once page loaded & sun is up)*/}
      {/* =================================================================== */}
      <div className="hidden md:block absolute bottom-[128px] lg:bottom-[142px] right-0 w-[185px] h-[235px] lg:w-[210px] lg:h-[265px]">
        <svg
          viewBox="0 0 190 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Soft ambient pastel glow behind the blooming flower */}
          <motion.circle
            cx="144"
            cy="84"
            r="46"
            fill="#8ed727"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={
              sunIsUp
                ? { opacity: 0.14, scale: [0.95, 1.08, 0.95] }
                : { opacity: 0, scale: 0.4 }
            }
            transition={{
              opacity: { duration: 0.7, delay: 0.5 },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          {/* Ground Mound Curve at the bottom right (matches sketch base line) */}
          <motion.path
            d="M 20 228 Q 92 216 144 220 Q 170 222 190 215"
            stroke={LINE_STROKE}
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              sunIsUp
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />

          {/* Subtle grassy highlight under the ground line */}
          <motion.path
            d="M 48 232 Q 112 223 176 227"
            stroke="rgba(142, 215, 39, 0.42)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              sunIsUp
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' }}
          />

          {/* Swaying Plant Group anchored at the soil root (138, 220) */}
          <motion.g
            style={{ transformOrigin: '138px 220px' }}
            animate={
              sunIsUp
                ? { rotate: [-1.8, 2.2, -1.8] }
                : { rotate: 0 }
            }
            transition={{
              duration: 5,
              delay: 1.0,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Main Curved Green Stem growing upward */}
            <motion.path
              d="M 138 220 C 132 184, 152 142, 144 86"
              stroke="rgba(142, 215, 39, 0.65)"
              strokeWidth="5.2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                sunIsUp
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
            />
            <motion.path
              d="M 138 220 C 132 184, 152 142, 144 86"
              stroke={LINE_STROKE}
              strokeWidth="2.6"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                sunIsUp
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
            />

            {/* Left Leaf unfurling from stem at (137, 168) */}
            <motion.g
              style={{ transformOrigin: '137px 168px' }}
              initial={{ scale: 0, opacity: 0, rotate: -35 }}
              animate={
                sunIsUp
                  ? { scale: 1, opacity: 1, rotate: 0 }
                  : { scale: 0, opacity: 0, rotate: -35 }
              }
              transition={{
                type: 'spring',
                stiffness: 230,
                damping: 14,
                delay: 0.42,
              }}
            >
              <path
                d="M 137 168 C 112 166, 100 146, 116 136 C 128 128, 139 150, 137 168 Z"
                fill="rgba(142, 215, 39, 0.52)"
                stroke={LINE_STROKE}
                strokeWidth="2.3"
                strokeLinejoin="round"
              />
              <path
                d="M 135 165 Q 122 153 116 142"
                stroke={LINE_STROKE}
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </motion.g>

            {/* Right Leaf unfurling from stem at (145, 144) */}
            <motion.g
              style={{ transformOrigin: '145px 144px' }}
              initial={{ scale: 0, opacity: 0, rotate: 35 }}
              animate={
                sunIsUp
                  ? { scale: 1, opacity: 1, rotate: 0 }
                  : { scale: 0, opacity: 0, rotate: 35 }
              }
              transition={{
                type: 'spring',
                stiffness: 230,
                damping: 14,
                delay: 0.54,
              }}
            >
              <path
                d="M 145 144 C 170 142, 180 122, 166 112 C 154 104, 143 126, 145 144 Z"
                fill="rgba(142, 215, 39, 0.52)"
                stroke={LINE_STROKE}
                strokeWidth="2.3"
                strokeLinejoin="round"
              />
              <path
                d="M 147 141 Q 158 129 165 118"
                stroke={LINE_STROKE}
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </motion.g>

            {/* ================= BLOOMING FLOWER HEAD AT (144, 80) ================= */}
            <g transform="translate(144, 80)">
              {/* 5 Large Rounded Petals unfolding one by one */}
              {petalAngles.map((angle, idx) => (
                <g key={angle} transform={`rotate(${angle})`}>
                  <motion.path
                    d="M 0 -7 C -17 -16, -21 -42, 0 -44 C 21 -42, 17 -16, 0 -7 Z"
                    fill={idx % 2 === 0 ? 'rgba(255, 107, 139, 0.45)' : 'rgba(255, 148, 172, 0.40)'}
                    stroke={LINE_STROKE}
                    strokeWidth="2.4"
                    strokeLinejoin="round"
                    style={{ transformOrigin: '0px -5px' }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      sunIsUp
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{
                      type: 'spring',
                      stiffness: 220,
                      damping: 13,
                      delay: 0.65 + idx * 0.1,
                    }}
                  />
                  {/* Delicate inner petal crease line */}
                  <motion.path
                    d="M 0 -13 L 0 -29"
                    stroke="rgba(255, 107, 139, 0.48)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      sunIsUp
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: 0.8 + idx * 0.1,
                    }}
                  />
                </g>
              ))}

              {/* Central Golden Flower Core with Spiral / Bud detail (matching sketch) */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  sunIsUp
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 15,
                  delay: 0.6,
                }}
              >
                <circle
                  cx="0"
                  cy="0"
                  r="14"
                  fill="rgba(254, 206, 19, 0.82)"
                  stroke={LINE_STROKE}
                  strokeWidth="2.4"
                />
                {/* Inner botanical swirl matching the user's flower center sketch */}
                <path
                  d="M -4.5 -2.5 C -2 -8, 6.5 -6.5, 5.5 1 C 4.5 6.5, -3.5 7.5, -6.5 2"
                  stroke={LINE_STROKE}
                  strokeWidth="2.0"
                  strokeLinecap="round"
                  fill="none"
                />
              </motion.g>

              {/* Subtle Blooming Pollen / Sunlight Sparkles rising once flower opens */}
              {sunIsUp && (
                <g>
                  {[
                    { cx: -30, cy: -38, color: '#fece13', delay: 1.25 },
                    { cx: 30, cy: -34, color: '#8ed727', delay: 1.45 },
                    { cx: 0, cy: -52, color: '#60C8D4', delay: 1.65 },
                  ].map((sp, i) => (
                    <motion.circle
                      key={i}
                      cx={sp.cx}
                      cy={sp.cy}
                      r="2.8"
                      fill={sp.color}
                      initial={{ opacity: 0, scale: 0, y: 8 }}
                      animate={{
                        opacity: [0, 0.85, 0],
                        scale: [0.4, 1.15, 0.5],
                        y: [8, -10, -18],
                      }}
                      transition={{
                        duration: 2.8,
                        delay: sp.delay,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                        ease: 'easeOut',
                      }}
                    />
                  ))}
                </g>
              )}
            </g>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
