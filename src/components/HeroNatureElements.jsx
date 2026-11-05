import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * RealFlappingBird
 * A recognizable, graceful flying bird silhouette facing right (direction of flight),
 * with a streamlined body, head, beak, fanned tail, and two arched wings that flap smoothly.
 */
function RealFlappingBird({ scale = 1, delay = 0, flapDuration = 0.62, className = '' }) {
  const BODY_FILL = 'rgba(9, 30, 58, 0.46)';
  const WING_FILL = 'rgba(9, 30, 58, 0.34)';
  const STROKE_COLOR = 'rgba(9, 30, 58, 0.52)';

  return (
    <motion.div
      style={{ scale }}
      animate={{
        y: [0, -4, 1, -3, 0],
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
        width="56"
        height="38"
        viewBox="-26 -24 54 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Far (Back) Wing — slightly lighter, flapping with a subtle phase offset */}
        <motion.path
          d="M -2 -2 C -1 -14, 8 -21, 16 -19 C 11 -12, 8 -6, 5 -2 Z"
          fill={WING_FILL}
          stroke={STROKE_COLOR}
          strokeWidth="1.5"
          strokeLinejoin="round"
          style={{ transformOrigin: '2px -2px' }}
          animate={{
            scaleY: [1, 0.25, -0.55, 0.25, 1],
            rotate: [-6, 8, 18, 8, -6],
          }}
          transition={{
            duration: flapDuration,
            delay: delay + 0.05,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Streamlined Bird Body, Head, Beak & Tail (facing right) */}
        <path
          d="M -19 2 L -11 -1 C -5 -4, 4 -4, 10 -3 C 13 -5, 17 -4, 18 -1 L 23 -1 L 18 1 C 16 3, 12 4, 8 3 C 1 5, -6 4, -12 2 L -18 5 L -16 2 Z"
          fill={BODY_FILL}
          stroke={STROKE_COLOR}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />

        {/* Near (Front) Sweeping Gull/Swallow Wing */}
        <motion.path
          d="M -5 -1 C -9 -15, -1 -22, 8 -21 C 4 -12, 3 -5, 3 0 Z"
          fill={BODY_FILL}
          stroke={STROKE_COLOR}
          strokeWidth="1.6"
          strokeLinejoin="round"
          style={{ transformOrigin: '-1px -1px' }}
          animate={{
            scaleY: [1, 0.15, -0.75, 0.15, 1],
            rotate: [-4, 10, 22, 10, -4],
          }}
          transition={{
            duration: flapDuration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </motion.div>
  );
}

/**
 * SoftDriftingCloud
 * Smooth, subtle cumulus cloud drifting slowly from right to left under and behind the header.
 */
function SoftDriftingCloud({
  topClass,
  startRightPercent,
  duration = 56,
  scale = 1,
  opacity = 0.72,
  delay = 0,
}) {
  return (
    <motion.div
      style={{
        right: `${startRightPercent}%`,
        scale,
        opacity,
      }}
      initial={{ x: '0vw' }}
      animate={{ x: ['0vw', '-110vw'] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
      className={`absolute ${topClass} pointer-events-none select-none`}
    >
      <svg
        width="190"
        height="72"
        viewBox="0 0 190 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible drop-shadow-[0_8px_16px_rgba(96,200,212,0.12)]"
      >
        <defs>
          <linearGradient id="softCloudFill" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.92" />
            <stop offset="75%" stopColor="#F2FAFC" stopOpacity="0.68" />
            <stop offset="100%" stopColor="#E4F5F9" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <path
          d="M 28 56 L 160 56 C 174 56, 182 46, 178 35 C 175 26, 165 22, 156 24 C 150 11, 134 4, 118 8 C 108 2, 92 2, 82 10 C 68 6, 52 13, 48 26 C 34 25, 20 34, 20 46 C 20 52, 23 56, 28 56 Z"
          fill="url(#softCloudFill)"
          stroke="rgba(9, 30, 58, 0.10)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

/**
 * HeroNatureElements
 * 1. Subtle smooth clouds behind & under the header moving slowly from right to left (starting near right end of header).
 * 2. Wide-curvature corner sun (~30% of circle visible) actively radiating warm sunlight waves & beams.
 * 3. Realistic birds appearing from the left of the screen and disappearing into the right.
 * 4. Larger, completely static blooming flower in the right whitespace with soil sweeping below the hero slideshow.
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

  const LINE_STROKE = 'rgba(9, 30, 58, 0.36)';
  const SUN_STROKE = 'rgba(9, 30, 58, 0.25)';

  // Sun center is placed outside the top-right corner at (385, -75) with large radius R=220
  // so only ~28% of the circle peeks in with a wide, gentle curvature.
  const sunCx = 385;
  const sunCy = -75;
  const sunR = 220;

  // Primary and secondary sunbeams radiating along the wider arc
  const sunRays = [
    { angle: 199, innerR: 226, outerR: 292, width: 2.6, delay: 0.2 },
    { angle: 206, innerR: 225, outerR: 268, width: 1.8, delay: 0.26, secondary: true },
    { angle: 213, innerR: 226, outerR: 306, width: 2.6, delay: 0.32 },
    { angle: 220, innerR: 225, outerR: 274, width: 1.8, delay: 0.38, secondary: true },
    { angle: 227, innerR: 226, outerR: 312, width: 2.6, delay: 0.44 },
    { angle: 234, innerR: 225, outerR: 272, width: 1.8, delay: 0.5, secondary: true },
    { angle: 241, innerR: 226, outerR: 302, width: 2.6, delay: 0.56 },
    { angle: 248, innerR: 225, outerR: 266, width: 1.8, delay: 0.62, secondary: true },
    { angle: 254, innerR: 226, outerR: 286, width: 2.6, delay: 0.68 },
  ];

  // 5 flower petals arranged radially around the flower center (0, 0)
  const petalAngles = [0, 72, 144, 216, 288];

  return (
    <div aria-hidden="true" className="pointer-events-none select-none inset-0 absolute overflow-hidden z-[2]">
      {/* =================================================================== */}
      {/* 0. SUBTLE SMOOTH CLOUDS UNDER & BEHIND HEADER (Right -> Left)       */}
      {/* =================================================================== */}
      <div className="absolute inset-x-0 top-0 h-[210px] overflow-hidden z-[1]">
        {/* Cloud 1: Starts right at the right end of the header, tucked just under the navbar */}
        <SoftDriftingCloud
          topClass="top-[96px] sm:top-[108px] lg:top-[114px]"
          startRightPercent={6}
          duration={58}
          scale={0.95}
          opacity={0.78}
          delay={0}
        />
        {/* Cloud 2: Partially behind the right-center of the glass navbar */}
        <SoftDriftingCloud
          topClass="top-[52px] sm:top-[58px] lg:top-[62px]"
          startRightPercent={18}
          duration={68}
          scale={0.76}
          opacity={0.62}
          delay={0}
        />
        {/* Cloud 3: Follows from the far right edge under the header */}
        <SoftDriftingCloud
          topClass="top-[112px] sm:top-[122px] lg:top-[128px]"
          startRightPercent={-8}
          duration={58}
          scale={0.85}
          opacity={0.7}
          delay={14}
        />
        {/* Cloud 4: Gentle mid-sky cloud drifting behind header */}
        <SoftDriftingCloud
          topClass="top-[74px] sm:top-[82px] lg:top-[86px]"
          startRightPercent={42}
          duration={64}
          scale={0.7}
          opacity={0.55}
          delay={0}
        />
      </div>

      {/* =================================================================== */}
      {/* 1. TOP-RIGHT RADIATING SUN (~30% visible, wider curvature)          */}
      {/* =================================================================== */}
      <div className="absolute top-[36px] right-0 w-[300px] h-[270px] sm:w-[350px] sm:h-[300px] lg:w-[410px] lg:h-[340px]">
        {/* Deep Ambient Sunlight Atmosphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={
            isPageLoaded
              ? {
                  opacity: [0.75, 1, 0.75],
                  scale: [0.98, 1.08, 0.98],
                }
              : { opacity: 0, scale: 0.6 }
          }
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-28 -right-28 w-[440px] h-[440px] sm:w-[540px] sm:h-[540px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 236, 130, 0.62) 0%, rgba(254, 206, 19, 0.34) 34%, rgba(255, 184, 0, 0.12) 60%, transparent 78%)',
            filter: 'blur(16px)',
          }}
        />

        {/* Wide-Curvature Sun & Actively Radiating Sunlight Waves + Beams */}
        <motion.svg
          viewBox="0 0 320 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, x: 40, y: -40, scale: 0.82 }}
          animate={
            isPageLoaded
              ? { opacity: 1, x: 0, y: 0, scale: 1 }
              : { opacity: 0, x: 40, y: -40, scale: 0.82 }
          }
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full overflow-visible"
        >
          <defs>
            <radialGradient id="heroWideSunGrad" cx="85%" cy="10%" r="80%">
              <stop offset="0%" stopColor="#FFFDE0" stopOpacity="0.96" />
              <stop offset="50%" stopColor="#FEE066" stopOpacity="0.76" />
              <stop offset="85%" stopColor="#fece13" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.35" />
            </radialGradient>

            {/* Volumetric Sunlight Shaft Gradient */}
            <linearGradient id="sunlightShaftGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF59D" stopOpacity="0.42" />
              <stop offset="55%" stopColor="#fece13" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#fece13" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Volumetric Radiating Light Cones / Sun Shafts */}
          {isPageLoaded && (
            <g>
              <motion.polygon
                points="320,0 165,0 45,105 125,185"
                fill="url(#sunlightShaftGrad)"
                animate={{ opacity: [0.45, 0.85, 0.45] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.polygon
                points="320,0 115,155 215,245 320,145"
                fill="url(#sunlightShaftGrad)"
                animate={{ opacity: [0.75, 0.4, 0.75] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </g>
          )}

          {/* Concentric Expanding Sunlight Pulse Rings (Radiating Sunlight Waves) */}
          {isPageLoaded &&
            [0, 1.3, 2.6].map((waveDelay, i) => (
              <motion.circle
                key={i}
                cx={sunCx}
                cy={sunCy}
                r={sunR}
                stroke="rgba(254, 206, 19, 0.45)"
                strokeWidth="3"
                fill="none"
                initial={{ scale: 1, opacity: 0.55 }}
                animate={{
                  scale: [1, 1.38],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 3.9,
                  delay: waveDelay,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                style={{ transformOrigin: `${sunCx}px ${sunCy}px` }}
              />
            ))}

          {/* Main Wide-Curvature Sun Body (only ~30% of the circle is inside the viewport) */}
          <circle
            cx={sunCx}
            cy={sunCy}
            r={sunR}
            fill="url(#heroWideSunGrad)"
            stroke={SUN_STROKE}
            strokeWidth="2.6"
          />

          {/* Inner warm corona arc */}
          <circle
            cx={sunCx}
            cy={sunCy}
            r={sunR - 16}
            stroke="rgba(254, 206, 19, 0.55)"
            strokeWidth="2"
            strokeDasharray="8 6"
          />

          {/* Radiating Sunbeams along the wide arc */}
          {sunRays.map((ray, idx) => {
            const rad = (ray.angle * Math.PI) / 180;
            const x1 = sunCx + Math.cos(rad) * ray.innerR;
            const y1 = sunCy - Math.sin(rad) * ray.innerR;
            const x2 = sunCx + Math.cos(rad) * ray.outerR;
            const y2 = sunCy - Math.sin(rad) * ray.outerR;

            return (
              <g key={idx}>
                {/* Warm radiating golden beam halo */}
                <motion.line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(254, 206, 19, 0.65)"
                  strokeWidth={ray.secondary ? '5' : '7.5'}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isPageLoaded
                      ? {
                          pathLength: [0.75, 1.06, 0.75],
                          opacity: [0.45, 0.95, 0.45],
                        }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{
                    pathLength: {
                      duration: 2.6,
                      delay: ray.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    opacity: {
                      duration: 2.6,
                      delay: ray.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                />
                {/* Crisp ray core line */}
                <motion.line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={ray.secondary ? 'rgba(245, 158, 11, 0.45)' : SUN_STROKE}
                  strokeWidth={ray.width}
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
      {/* 2. REALISTIC BIRDS FLYING FROM LEFT OF SCREEN TO RIGHT              */}
      {/* =================================================================== */}
      {isPageLoaded && (
        <div className="absolute top-[188px] sm:top-[198px] lg:top-[206px] inset-x-0 h-[95px] overflow-hidden">
          <motion.div
            initial={{ x: '-12vw', y: 6, opacity: 0 }}
            animate={{
              x: ['-12vw', '106vw'],
              y: [6, -7, 4, -8, 3, -2],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              x: {
                duration: 13.5,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: 'linear',
              },
              y: {
                duration: 13.5,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: 'easeInOut',
              },
              opacity: {
                duration: 13.5,
                times: [0, 0.04, 0.5, 0.95, 1],
                repeat: Infinity,
                repeatDelay: 0.5,
              },
            }}
            className="relative w-[195px] h-[80px]"
          >
            {/* Bird 1 (Trailing left, middle height) */}
            <div className="absolute left-0 top-6">
              <RealFlappingBird scale={0.92} delay={0} flapDuration={0.58} />
            </div>

            {/* Bird 2 (Middle leader, higher) */}
            <div className="absolute left-16 top-0">
              <RealFlappingBird scale={1.08} delay={0.18} flapDuration={0.54} />
            </div>

            {/* Bird 3 (Front-right bird, slightly lower) */}
            <div className="absolute left-36 top-8">
              <RealFlappingBird scale={0.86} delay={0.34} flapDuration={0.62} />
            </div>
          </motion.div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 3. BOTTOM-RIGHT BLOOMING PLANT (Bigger, Static, in Right Whitespace,*/}
      {/*    with Soil sweeping below the Hero Image Slideshow)               */}
      {/* =================================================================== */}
      <div className="hidden md:block absolute bottom-[44px] lg:bottom-[48px] right-0 w-[440px] h-[290px] lg:w-[540px] lg:h-[330px]">
        <svg
          viewBox="0 0 540 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Soft static pastel aura behind the flower head in the right whitespace */}
          <motion.circle
            cx="484"
            cy="92"
            r="58"
            fill="#8ed727"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              sunIsUp
                ? { opacity: 0.13, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          />

          {/* Soil / Ground Curve sweeping below the right portion of the image slideshow up into the right whitespace */}
          <motion.path
            d="M 20 296 C 160 294, 290 286, 395 270 C 455 260, 505 256, 540 260"
            stroke={LINE_STROKE}
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              sunIsUp
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 0.55, ease: 'easeOut' }}
          />

          {/* Soft grassy soil highlight sweeping below the slideshow */}
          <motion.path
            d="M 65 302 C 195 299, 315 290, 415 275 C 468 267, 510 264, 538 266"
            stroke="rgba(142, 215, 39, 0.45)"
            strokeWidth="4.2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              sunIsUp
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
          />

          {/* Static Plant Group rooted at (482, 258) strictly inside the right whitespace */}
          <g>
            {/* Main Curved Green Stem growing upward (completely static once grown) */}
            <motion.path
              d="M 482 258 C 476 210, 496 156, 484 92"
              stroke="rgba(142, 215, 39, 0.65)"
              strokeWidth="6.2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                sunIsUp
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
            />
            <motion.path
              d="M 482 258 C 476 210, 496 156, 484 92"
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
              transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
            />

            {/* Left Leaf unfurling smoothly and remaining static at (482, 194) */}
            <motion.g
              style={{ transformOrigin: '482px 194px' }}
              initial={{ scale: 0, opacity: 0, rotate: -25 }}
              animate={
                sunIsUp
                  ? { scale: 1, opacity: 1, rotate: 0 }
                  : { scale: 0, opacity: 0, rotate: -25 }
              }
              transition={{ duration: 0.45, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <path
                d="M 482 194 C 450 192, 436 166, 454 154 C 468 144, 484 170, 482 194 Z"
                fill="rgba(142, 215, 39, 0.52)"
                stroke={LINE_STROKE}
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <path
                d="M 480 190 Q 465 175 456 161"
                stroke={LINE_STROKE}
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </motion.g>

            {/* Right Leaf unfurling smoothly and remaining static at (489, 166) */}
            <motion.g
              style={{ transformOrigin: '489px 166px' }}
              initial={{ scale: 0, opacity: 0, rotate: 25 }}
              animate={
                sunIsUp
                  ? { scale: 1, opacity: 1, rotate: 0 }
                  : { scale: 0, opacity: 0, rotate: 25 }
              }
              transition={{ duration: 0.45, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <path
                d="M 489 166 C 520 164, 532 138, 514 126 C 500 116, 487 142, 489 166 Z"
                fill="rgba(142, 215, 39, 0.52)"
                stroke={LINE_STROKE}
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <path
                d="M 491 162 Q 505 147 513 133"
                stroke={LINE_STROKE}
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </motion.g>

            {/* ================= LARGER, STATIC BLOOMING FLOWER AT (484, 86) ================= */}
            <g transform="translate(484, 86)">
              {/* 5 Larger Rounded Petals unfolding smoothly and staying static */}
              {petalAngles.map((angle, idx) => (
                <g key={angle} transform={`rotate(${angle})`}>
                  <motion.path
                    d="M 0 -8 C -23 -20, -28 -53, 0 -56 C 28 -53, 23 -20, 0 -8 Z"
                    fill={idx % 2 === 0 ? 'rgba(255, 107, 139, 0.46)' : 'rgba(255, 148, 172, 0.40)'}
                    stroke={LINE_STROKE}
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    style={{ transformOrigin: '0px -6px' }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      sunIsUp
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 0.48,
                      delay: 0.65 + idx * 0.09,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                  {/* Delicate inner petal crease line */}
                  <motion.path
                    d="M 0 -15 L 0 -37"
                    stroke="rgba(255, 107, 139, 0.48)"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      sunIsUp
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 0.35,
                      delay: 0.8 + idx * 0.09,
                      ease: 'easeOut',
                    }}
                  />
                </g>
              ))}

              {/* Larger Central Golden Flower Core with Spiral detail */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  sunIsUp
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  duration: 0.45,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <circle
                  cx="0"
                  cy="0"
                  r="17.5"
                  fill="rgba(254, 206, 19, 0.85)"
                  stroke={LINE_STROKE}
                  strokeWidth="2.5"
                />
                {/* Inner botanical swirl matching the flower center sketch */}
                <path
                  d="M -5.5 -3 C -2.5 -9.5, 8 -7.5, 6.5 1.5 C 5.5 7.5, -4.5 9, -8 2.5"
                  stroke={LINE_STROKE}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
              </motion.g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
