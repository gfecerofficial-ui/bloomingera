import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * ClassicFlyingBird
 * An unmistakable, elegant bird silhouette in side-profile flying right:
 * defined head, sharp golden beak, eye, sleek body, forked swallow tail,
 * and arched feathered wings flapping naturally in perspective (never like a bat!).
 */
function ClassicFlyingBird({ scale = 1, delay = 0, flapDuration = 0.58, className = '' }) {
  const PLUMAGE_BODY = 'rgba(26, 54, 93, 0.72)';
  const PLUMAGE_STROKE = 'rgba(9, 30, 58, 0.58)';
  const NEAR_WING = 'rgba(15, 40, 75, 0.82)';
  const FAR_WING = 'rgba(38, 70, 110, 0.58)';

  return (
    <motion.div
      style={{ scale }}
      animate={{
        y: [0, -6, 2, -4, 0],
      }}
      transition={{
        duration: flapDuration * 3.2,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      <svg
        width="62"
        height="42"
        viewBox="-28 -28 62 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible drop-shadow-[0_2px_4px_rgba(9,30,58,0.10)]"
      >
        {/* ================= FAR WING (Back Wing) ================= */}
        <motion.g
          style={{ transformOrigin: '3px -2px' }}
          animate={{
            rotate: [-24, 28, -24],
            scaleY: [1, 0.65, 1],
          }}
          transition={{
            duration: flapDuration,
            delay: delay + 0.04,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Arched swallow wing extending up & back */}
          <path
            d="M 3 -2 C 6 -15, 0 -26, -9 -29 C -7 -18, -11 -10, -2 -3 Z"
            fill={FAR_WING}
            stroke={PLUMAGE_STROKE}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* ================= BIRD BODY, HEAD, BEAK, FORKED TAIL ================= */}
        <g>
          {/* Main Bird Torso, Head, and Forked Swallow Tail (Facing Right) */}
          <path
            d="M 14 -1 C 14 -6, 9 -9, 4 -7 C -2 -5, -9 -1, -16 0 C -22 -1, -27 -4, -28 -5 C -26 -1, -22 1, -21 2 C -24 3, -27 6, -28 8 C -26 6, -20 4, -15 3 C -8 4, 1 5, 8 3 C 12 2, 14 1, 14 -1 Z"
            fill={PLUMAGE_BODY}
            stroke={PLUMAGE_STROKE}
            strokeWidth="1.3"
            strokeLinejoin="round"
          />

          {/* Soft Cream / Sky Breast Accent */}
          <path
            d="M 12 0 C 11 3, 7 4, 2 3 C 6 2, 10 1, 12 0 Z"
            fill="rgba(255, 255, 255, 0.65)"
          />

          {/* Cute Sharp Bird Beak pointing right in the direction of flight */}
          <polygon
            points="14,-3.2 22,-0.5 14,1.8"
            fill="#F59E0B"
            stroke={PLUMAGE_STROKE}
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Bird Eye */}
          <circle cx="10" cy="-3.5" r="1.3" fill="#FFFFFF" />
          <circle cx="10.5" cy="-3.5" r="0.8" fill="#091E3A" />
        </g>

        {/* ================= NEAR WING (Front Wing) ================= */}
        <motion.g
          style={{ transformOrigin: '2px 0px' }}
          animate={{
            rotate: [-28, 32, -28],
            scaleY: [1, 0.6, 1],
          }}
          transition={{
            duration: flapDuration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Sweeping primary and secondary flight feathers */}
          <path
            d="M 2 0 C 4 -16, -3 -29, -14 -32 C -10 -20, -16 -10, -5 -1 Z"
            fill={NEAR_WING}
            stroke={PLUMAGE_STROKE}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          {/* Feather quill highlight line on wing */}
          <path
            d="M -1 -7 C -4 -17, -8 -23, -12 -28"
            stroke="rgba(255, 255, 255, 0.40)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}

/**
 * FlutteringButterfly
 * Delicate butterfly that flutters around the bloomed flower in the bottom-right.
 */
function FlutteringButterfly({
  wingColor = 'rgba(254, 206, 19, 0.78)',
  accentColor = 'rgba(255, 107, 139, 0.65)',
  strokeColor = 'rgba(9, 30, 58, 0.42)',
  xKeyframes = [0, -18, -6, 14, 0],
  yKeyframes = [0, -14, -26, -10, 0],
  rotateKeyframes = [-12, 8, -6, 14, -12],
  flightDuration = 7.5,
  delay = 1.2,
  scale = 1,
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale,
        x: xKeyframes,
        y: yKeyframes,
        rotate: rotateKeyframes,
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        x: { duration: flightDuration, delay, repeat: Infinity, ease: 'easeInOut' },
        y: { duration: flightDuration, delay, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: flightDuration, delay, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {/* Left Forewing & Hindwing */}
      <motion.g
        style={{ transformOrigin: '0px 0px' }}
        animate={{ scaleX: [1, 0.28, 1] }}
        transition={{ duration: 0.32, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          d="M 0 -1 C -9 -12, -17 -9, -14 -1 C -12 3, -5 2, 0 0 Z"
          fill={wingColor}
          stroke={strokeColor}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M 0 0 C -8 2, -13 9, -8 12 C -4 14, -1 7, 0 2 Z"
          fill={accentColor}
          stroke={strokeColor}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </motion.g>

      {/* Right Forewing & Hindwing */}
      <motion.g
        style={{ transformOrigin: '0px 0px' }}
        animate={{ scaleX: [1, 0.28, 1] }}
        transition={{ duration: 0.32, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          d="M 0 -1 C 9 -12, 17 -9, 14 -1 C 12 3, 5 2, 0 0 Z"
          fill={wingColor}
          stroke={strokeColor}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M 0 0 C 8 2, 13 9, 8 12 C 4 14, 1 7, 0 2 Z"
          fill={accentColor}
          stroke={strokeColor}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </motion.g>

      {/* Butterfly Body & Antennae */}
      <ellipse cx="0" cy="1" rx="1.3" ry="5.5" fill={strokeColor} />
      <path
        d="M -0.5 -4 Q -3 -8 -5 -7 M 0.5 -4 Q 3 -8 5 -7"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />
    </motion.g>
  );
}

/**
 * BloomingEraBannerPlane
 * Cute airplane flying from right to left towing a fluttering "Blooming Era" banner behind it.
 */
function BloomingEraBannerPlane({ isPageLoaded = true }) {
  const STROKE = 'rgba(9, 30, 58, 0.52)';

  return (
    <div className="absolute top-[98px] sm:top-[106px] lg:top-[112px] inset-x-0 h-[72px] overflow-hidden pointer-events-none select-none z-[3]">
      <motion.div
        initial={{ x: '108vw', y: 0, opacity: 0 }}
        animate={
          isPageLoaded
            ? {
                x: ['108vw', '-440px'],
                y: [0, -6, 3, -5, 2, 0],
                opacity: [0, 1, 1, 0],
              }
            : { x: '108vw', y: 0, opacity: 0 }
        }
        transition={{
          x: {
            duration: 16,
            delay: 1.2,
            repeat: Infinity,
            repeatDelay: 14,
            ease: 'linear',
          },
          y: {
            duration: 16,
            delay: 1.2,
            repeat: Infinity,
            repeatDelay: 14,
            ease: 'easeInOut',
          },
          opacity: {
            duration: 16,
            times: [0, 0.04, 0.94, 1],
            delay: 1.2,
            repeat: Infinity,
            repeatDelay: 14,
          },
        }}
        className="relative w-[330px] h-[64px]"
      >
        <svg
          width="330"
          height="64"
          viewBox="0 0 330 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible drop-shadow-[0_6px_14px_rgba(9,30,58,0.08)]"
        >
          {/* ================= AIRPLANE (Facing Left) ================= */}
          <g transform="translate(8, 10)">
            {/* Spinning Nose Propeller at (2, 22) */}
            <motion.ellipse
              cx="2"
              cy="22"
              rx="1.8"
              ry="11"
              fill="rgba(9, 30, 58, 0.35)"
              animate={{ scaleY: [1, 0.2, 1], opacity: [0.7, 0.35, 0.7] }}
              transition={{ duration: 0.12, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '2px 22px' }}
            />

            {/* Golden Propeller Spinner Cone */}
            <path
              d="M 2 22 L 8 18 L 8 26 Z"
              fill="#fece13"
              stroke={STROKE}
              strokeWidth="1.6"
              strokeLinejoin="round"
            />

            {/* Tail Vertical Stabilizer Fin at the back (right end of fuselage) */}
            <path
              d="M 64 19 L 76 6 L 81 6 L 77 21 Z"
              fill="#ADF802"
              stroke={STROKE}
              strokeWidth="1.8"
              strokeLinejoin="round"
            />

            {/* Main Fuselage Body */}
            <path
              d="M 8 17 C 18 12, 42 12, 74 18 L 78 21 L 74 25 C 44 29, 18 29, 8 26 Z"
              fill="#FFFDF5"
              stroke={STROKE}
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Decorative Lime & Cyan Racing Stripe along Fuselage */}
            <path
              d="M 10 22 L 73 22"
              stroke="#60C8D4"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Cockpit Canopy Window (Facing Left) */}
            <path
              d="M 22 15 C 26 9, 39 9, 44 15 Z"
              fill="rgba(96, 200, 212, 0.55)"
              stroke={STROKE}
              strokeWidth="1.6"
              strokeLinejoin="round"
            />

            {/* Swept Main Wing */}
            <path
              d="M 28 21 L 46 21 L 52 29 L 33 29 Z"
              fill="#ADF802"
              stroke={STROKE}
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </g>

          {/* ================= TOW CABLES ================= */}
          <line x1="85" y1="31" x2="114" y2="18" stroke={STROKE} strokeWidth="1.4" strokeDasharray="3 2" />
          <line x1="85" y1="31" x2="114" y2="44" stroke={STROKE} strokeWidth="1.4" strokeDasharray="3 2" />
          {/* Leading Spreader Bar */}
          <line x1="114" y1="15" x2="114" y2="47" stroke={STROKE} strokeWidth="2.4" strokeLinecap="round" />

          {/* ================= FLUTTERING "BLOOMING ERA" BANNER ================= */}
          <motion.g
            style={{ transformOrigin: '114px 31px' }}
            animate={{
              rotate: [-0.9, 0.9, -0.9],
              y: [0, -1.2, 0, 1.2, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Swallowtail Banner Ribbon Body */}
            <path
              d="M 114 16 Q 165 13 216 17 Q 266 20 318 15 L 306 31 L 318 47 Q 266 51 216 47 Q 165 43 114 46 Z"
              fill="rgba(255, 253, 245, 0.94)"
              stroke="#ADF802"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />

            {/* Subtle inner gold accent border */}
            <path
              d="M 118 20 Q 165 17 216 21 Q 262 24 308 19"
              stroke="rgba(254, 206, 19, 0.7)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Brand Star Accent on Banner */}
            <circle cx="128" cy="31" r="4.5" fill="#ADF802" />
            <circle cx="128" cy="31" r="2" fill="#fece13" />

            {/* Crisp "Blooming Era" Text on Banner */}
            <text
              x="215"
              y="35"
              textAnchor="middle"
              fill="#091E3A"
              fontSize="13.5"
              fontWeight="800"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              letterSpacing="0.06em"
            >
              BLOOMING ERA
            </text>
          </motion.g>
        </svg>
      </motion.div>
    </div>
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
  const gradientId = `softCloudFill_${startRightPercent}_${String(scale).replace('.', '_')}`;

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
          <linearGradient id={gradientId} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#F2FAFC" stopOpacity="0.80" />
            <stop offset="100%" stopColor="#E4F5F9" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        <path
          d="M 28 56 L 160 56 C 174 56, 182 46, 178 35 C 175 26, 165 22, 156 24 C 150 11, 134 4, 118 8 C 108 2, 92 2, 82 10 C 68 6, 52 13, 48 26 C 34 25, 20 34, 20 46 C 20 52, 23 56, 28 56 Z"
          fill={`url(#${gradientId})`}
          stroke="rgba(9, 30, 58, 0.16)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

/**
 * HeroNatureElements
 * 1. Subtle smooth clouds behind & under the header moving slowly from right to left.
 * 2. Flicker-free wide-curvature corner sun (~30% visible) smoothly radiating warm sunlight.
 * 3. Clean, natural-winged birds appearing from the left of the screen and disappearing into the right.
 * 4. Occasional airplane flying right-to-left towing a "BLOOMING ERA" banner.
 * 5. Enlarged, completely static flower head in the right whitespace with soil sweeping below the slideshow
 *    and two butterflies fluttering around the flower.
 */
export default function HeroNatureElements({ isPageLoaded = true }) {
  const [sunIsUp, setSunIsUp] = useState(false);

  useEffect(() => {
    if (!isPageLoaded) {
      setSunIsUp(false);
      return;
    }
    // Sun finishes growing out ~1.05s after page load; plant blooms right as the sun reaches full form
    const timer = setTimeout(() => {
      setSunIsUp(true);
    }, 1050);

    return () => clearTimeout(timer);
  }, [isPageLoaded]);

  const LINE_STROKE = 'rgba(9, 30, 58, 0.36)';
  const SUN_STROKE = 'rgba(9, 30, 58, 0.25)';

  // Sun center is placed outside the top-right corner at (385, -75) with large radius R=220
  // so only ~28-30% of the circle peeks in with a wide curvature.
  const sunCx = 385;
  const sunCy = -75;
  const sunR = 220;

  // Primary and secondary sunbeams radiating along the wider arc
  const sunRays = [
    { angle: 199, innerR: 226, outerR: 292, width: 2.6, delay: 0.2 },
    { angle: 206, innerR: 225, outerR: 268, width: 1.8, delay: 0.4, secondary: true },
    { angle: 213, innerR: 226, outerR: 306, width: 2.6, delay: 0.6 },
    { angle: 220, innerR: 225, outerR: 274, width: 1.8, delay: 0.8, secondary: true },
    { angle: 227, innerR: 226, outerR: 312, width: 2.6, delay: 1.0 },
    { angle: 234, innerR: 225, outerR: 272, width: 1.8, delay: 1.2, secondary: true },
    { angle: 241, innerR: 226, outerR: 302, width: 2.6, delay: 1.4 },
    { angle: 248, innerR: 225, outerR: 266, width: 1.8, delay: 1.6, secondary: true },
    { angle: 254, innerR: 226, outerR: 286, width: 2.6, delay: 1.8 },
  ];

  // 5 flower petals arranged radially around the flower center (0, 0)
  const petalAngles = [0, 72, 144, 216, 288];

  return (
    <div aria-hidden="true" className="pointer-events-none select-none inset-0 absolute overflow-hidden z-[2]">
      {/* =================================================================== */}
      {/* 0. SUBTLE SMOOTH CLOUDS UNDER & BEHIND HEADER (Right -> Left)       */}
      {/* =================================================================== */}
      <div className="absolute inset-x-0 top-0 h-[210px] overflow-hidden z-[1]">
        <SoftDriftingCloud
          topClass="top-[96px] sm:top-[108px] lg:top-[114px]"
          startRightPercent={6}
          duration={58}
          scale={0.95}
          opacity={0.78}
          delay={0}
        />
        <SoftDriftingCloud
          topClass="top-[52px] sm:top-[58px] lg:top-[62px]"
          startRightPercent={18}
          duration={68}
          scale={0.76}
          opacity={0.62}
          delay={0}
        />
        <SoftDriftingCloud
          topClass="top-[112px] sm:top-[122px] lg:top-[128px]"
          startRightPercent={-8}
          duration={58}
          scale={0.85}
          opacity={0.7}
          delay={14}
        />
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
      {/* 1. TOP-RIGHT RADIATING SUN (Grows out on page load, ~30% visible)   */}
      {/* =================================================================== */}
      <motion.div
        style={{ transformOrigin: 'top right' }}
        initial={{ opacity: 0, scale: 0.15 }}
        animate={
          isPageLoaded
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.15 }
        }
        transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[36px] right-0 w-[300px] h-[270px] sm:w-[350px] sm:h-[300px] lg:w-[410px] lg:h-[340px]"
      >
        {/* Deep Ambient Sunlight Atmosphere — smooth sine breathing with zero state reset */}
        <motion.div
          animate={{
            opacity: [0.78, 1, 0.78],
            scale: [0.98, 1.07, 0.98],
          }}
          transition={{
            duration: 5,
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

        {/* Wide-Curvature Sun & Smoothly Radiating Sunlight Waves + Beams */}
        <svg
          viewBox="0 0 320 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
              <stop offset="0%" stopColor="#FFF59D" stopOpacity="0.40" />
              <stop offset="55%" stopColor="#fece13" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#fece13" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Volumetric Radiating Light Cones / Sun Shafts */}
          <motion.polygon
            points="320,0 165,0 45,105 125,185"
            fill="url(#sunlightShaftGrad)"
            animate={{ opacity: [0.45, 0.82, 0.45] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.polygon
            points="320,0 115,155 215,245 320,145"
            fill="url(#sunlightShaftGrad)"
            animate={{ opacity: [0.78, 0.42, 0.78] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Flicker-Free Concentric Expanding Sunlight Waves (starts at opacity 0 and ends at opacity 0) */}
          {[0, 1.5, 3.0].map((waveDelay, i) => (
            <motion.circle
              key={i}
              cx={sunCx}
              cy={sunCy}
              r={sunR}
              stroke="rgba(254, 206, 19, 0.42)"
              strokeWidth="2.8"
              fill="none"
              animate={{
                scale: [1, 1.18, 1.36],
                opacity: [0, 0.42, 0],
              }}
              transition={{
                duration: 4.5,
                times: [0, 0.38, 1],
                delay: waveDelay,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              style={{ transformOrigin: `${sunCx}px ${sunCy}px` }}
            />
          ))}

          {/* Main Wide-Curvature Sun Body (~30% of circle visible) */}
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

          {/* Smoothly Shimmering Sunbeams along the wide arc (no pathLength wrap flicker) */}
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
                  stroke="rgba(254, 206, 19, 0.62)"
                  strokeWidth={ray.secondary ? '5' : '7.5'}
                  strokeLinecap="round"
                  animate={{
                    opacity: [0.38, 0.9, 0.38],
                  }}
                  transition={{
                    duration: 3.2,
                    delay: ray.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                {/* Crisp ray core line */}
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={ray.secondary ? 'rgba(245, 158, 11, 0.45)' : SUN_STROKE}
                  strokeWidth={ray.width}
                  strokeLinecap="round"
                />
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* =================================================================== */}
      {/* 2. NATURAL SOARING BIRDS FLYING FROM LEFT OF SCREEN TO RIGHT        */}
      {/* =================================================================== */}
      <div
        className="absolute top-[192px] sm:top-[202px] lg:top-[210px] inset-x-0 h-[95px] overflow-hidden pointer-events-none"
        style={{ transform: 'translateZ(0)' }}
      >
        <motion.div
          initial={{ x: '-12vw', y: 6, opacity: 0 }}
          animate={
            isPageLoaded
              ? {
                  x: ['-12vw', '106vw'],
                  y: [6, -7, 4, -8, 3, -2],
                  opacity: [0, 1, 1, 1, 0],
                }
              : { x: '-12vw', y: 6, opacity: 0 }
          }
          transition={{
            x: {
              duration: 14,
              delay: 0.2,
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: 'linear',
            },
            y: {
              duration: 14,
              delay: 0.2,
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 14,
              times: [0, 0.04, 0.5, 0.95, 1],
              delay: 0.2,
              repeat: Infinity,
              repeatDelay: 0.6,
            },
          }}
          className="relative w-[195px] h-[80px]"
        >
          {/* Bird 1 (Trailing left, middle height) */}
          <div className="absolute left-0 top-6">
            <ClassicFlyingBird scale={0.92} delay={0} flapDuration={0.62} />
          </div>

          {/* Bird 2 (Middle leader, higher) */}
          <div className="absolute left-18 top-0">
            <ClassicFlyingBird scale={1.08} delay={0.2} flapDuration={0.56} />
          </div>

          {/* Bird 3 (Front-right bird, slightly lower) */}
          <div className="absolute left-38 top-8">
            <ClassicFlyingBird scale={0.84} delay={0.38} flapDuration={0.65} />
          </div>
        </motion.div>
      </div>

      {/* =================================================================== */}
      {/* 3. OCCASIONAL AIRPLANE FLYING RIGHT -> LEFT WITH BLOOMING ERA BANNER*/}
      {/* =================================================================== */}
      <BloomingEraBannerPlane isPageLoaded={isPageLoaded} />

      {/* =================================================================== */}
      {/* 4. BOTTOM-RIGHT BLOOMING PLANT (Enlarged Flower Head + Butterflies, */}
      {/*    Static Stem/Leaves, Soil sweeping below Hero Image Slideshow)    */}
      {/* =================================================================== */}
      <div className="hidden md:block absolute bottom-[44px] lg:bottom-[48px] right-0 w-[440px] h-[290px] lg:w-[540px] lg:h-[330px]">
        <svg
          viewBox="0 0 540 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Soft static pastel aura behind the larger flower head */}
          <motion.circle
            cx="478"
            cy="84"
            r="68"
            fill="#ADF802"
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
            stroke="rgba(173, 248, 2, 0.45)"
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

          {/* Static Plant Group rooted at (478, 258) strictly inside the right whitespace */}
          <g>
            {/* Main Curved Green Stem growing upward (unchanged size, completely static once grown) */}
            <motion.path
              d="M 478 258 C 472 210, 492 156, 478 86"
              stroke="rgba(173, 248, 2, 0.65)"
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
              d="M 478 258 C 472 210, 492 156, 478 86"
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

            {/* Left Leaf (unchanged size, static) */}
            <motion.g
              style={{ transformOrigin: '478px 194px' }}
              initial={{ scale: 0, opacity: 0, rotate: -25 }}
              animate={
                sunIsUp
                  ? { scale: 1, opacity: 1, rotate: 0 }
                  : { scale: 0, opacity: 0, rotate: -25 }
              }
              transition={{ duration: 0.45, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <path
                d="M 478 194 C 446 192, 432 166, 450 154 C 464 144, 480 170, 478 194 Z"
                fill="rgba(173, 248, 2, 0.52)"
                stroke={LINE_STROKE}
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <path
                d="M 476 190 Q 461 175 452 161"
                stroke={LINE_STROKE}
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </motion.g>

            {/* Right Leaf (unchanged size, static) */}
            <motion.g
              style={{ transformOrigin: '485px 166px' }}
              initial={{ scale: 0, opacity: 0, rotate: 25 }}
              animate={
                sunIsUp
                  ? { scale: 1, opacity: 1, rotate: 0 }
                  : { scale: 0, opacity: 0, rotate: 25 }
              }
              transition={{ duration: 0.45, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <path
                d="M 485 166 C 516 164, 528 138, 510 126 C 496 116, 483 142, 485 166 Z"
                fill="rgba(173, 248, 2, 0.52)"
                stroke={LINE_STROKE}
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <path
                d="M 487 162 Q 501 147 509 133"
                stroke={LINE_STROKE}
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </motion.g>

            {/* ================= ENLARGED, STATIC BLOOMING FLOWER HEAD AT (478, 78) ================= */}
            <g transform="translate(478, 78)">
              {/* 5 Larger Rounded Petals (enlarged ~26% while stem & leaves stay same size) */}
              {petalAngles.map((angle, idx) => (
                <g key={angle} transform={`rotate(${angle})`}>
                  <motion.path
                    d="M 0 -10 C -29 -25, -35 -66, 0 -70 C 35 -66, 29 -25, 0 -10 Z"
                    fill={idx % 2 === 0 ? 'rgba(255, 107, 139, 0.48)' : 'rgba(255, 148, 172, 0.42)'}
                    stroke={LINE_STROKE}
                    strokeWidth="2.6"
                    strokeLinejoin="round"
                    style={{ transformOrigin: '0px -8px' }}
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
                    d="M 0 -19 L 0 -46"
                    stroke="rgba(255, 107, 139, 0.50)"
                    strokeWidth="1.8"
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

              {/* Enlarged Central Golden Flower Core with Spiral detail */}
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
                  r="22"
                  fill="rgba(254, 206, 19, 0.86)"
                  stroke={LINE_STROKE}
                  strokeWidth="2.6"
                />
                {/* Inner botanical swirl */}
                <path
                  d="M -7 -4 C -3 -12, 10 -9.5, 8 2 C 7 9.5, -5.5 11, -10 3"
                  stroke={LINE_STROKE}
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  fill="none"
                />
              </motion.g>

              {/* ================= TWO BUTTERFLIES FLUTTERING AROUND THE FLOWER ================= */}
              {sunIsUp && (
                <>
                  {/* Butterfly 1: Golden & Coral fluttering around upper-left of flower */}
                  <g transform="translate(-48, -46)">
                    <FlutteringButterfly
                      wingColor="rgba(254, 206, 19, 0.82)"
                      accentColor="rgba(255, 107, 139, 0.72)"
                      xKeyframes={[0, 18, 32, 12, -8, 0]}
                      yKeyframes={[0, -16, -4, 12, 6, 0]}
                      rotateKeyframes={[15, 28, -10, -22, 8, 15]}
                      flightDuration={7.2}
                      delay={1.1}
                      scale={0.95}
                    />
                  </g>

                  {/* Butterfly 2: Sky-Cyan & Lime fluttering around upper-right / side of flower */}
                  <g transform="translate(36, -58)">
                    <FlutteringButterfly
                      wingColor="rgba(96, 200, 212, 0.82)"
                      accentColor="rgba(173, 248, 2, 0.75)"
                      xKeyframes={[0, -20, -34, -12, 8, 0]}
                      yKeyframes={[0, -12, 6, 18, -6, 0]}
                      rotateKeyframes={[-18, -28, 12, 20, -8, -18]}
                      flightDuration={8.4}
                      delay={1.35}
                      scale={0.85}
                    />
                  </g>
                </>
              )}
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
