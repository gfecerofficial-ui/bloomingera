import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FLOWER_PETAL_ANGLES = [0, 72, 144, 216, 288];

/**
 * Single botanical flower bud that starts as a plump unopened bud during page load
 * and blooms into a full 5-petal flower once the loading screen completes.
 */
function BranchFlowerBud({
  x,
  y,
  rotate = 0,
  scale = 1,
  petalColor = 'rgba(255, 107, 139, 0.84)',
  innerColor = 'rgba(255, 148, 172, 0.90)',
  tipColor = '#fece13',
  delay = 0,
  hasBloomed = false,
}) {
  const STROKE = 'rgba(9, 30, 58, 0.42)';

  return (
    <g transform={`translate(${x}, ${y}) rotate(${rotate})`}>
      <motion.g
        style={{ transformOrigin: '0px 0px' }}
        animate={{
          rotate: [-2.2, 2.2, -2.2],
          scale: [scale * 0.98, scale * 1.03, scale * 0.98],
        }}
        transition={{
          duration: 4.0,
          delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* ================= UNOPENED BUD PETALS (Fades/Unfurls as Flower Blooms) ================= */}
        <motion.g
          style={{ transformOrigin: '0px -2px' }}
          initial={false}
          animate={
            hasBloomed
              ? { scaleX: 1.35, scaleY: 0.55, opacity: 0 }
              : { scaleX: 1, scaleY: 1, opacity: 1 }
          }
          transition={{
            duration: 0.45,
            delay: delay * 0.55,
            ease: 'easeOut',
          }}
        >
          {/* Plump Tulip / Teardrop Unopened Flower Bud Petals */}
          <path
            d="M 0 0 C -5.2 -1.2, -6.2 -9.2, 0 -13.5 C 6.2 -9.2, 5.2 -1.2, 0 0 Z"
            fill={petalColor}
            stroke={STROKE}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          {/* Overlapping Central Bud Petal */}
          <path
            d="M 0 -0.5 C -3.2 -2.2, -3.5 -9.5, 0 -13.5 C 3.5 -9.5, 3.2 -2.2, 0 -0.5 Z"
            fill={innerColor}
            stroke={STROKE}
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          {/* Golden Peeking Bud Tip */}
          <circle cx="0" cy="-12.2" r="1.2" fill={tipColor} />
        </motion.g>

        {/* ================= BLOOMED 5-PETAL FLOWER HEAD (Opens After Page Load) ================= */}
        <g transform="translate(0, -6.8)">
          {FLOWER_PETAL_ANGLES.map((angle, idx) => (
            <g key={angle} transform={`rotate(${angle})`}>
              <motion.path
                d="M 0 -1.0 C -3.1 -2.6, -3.7 -7.2, 0 -7.7 C 3.7 -7.2, 3.1 -2.6, 0 -1.0 Z"
                fill={idx % 2 === 0 ? petalColor : innerColor}
                stroke={STROKE}
                strokeWidth="1.2"
                strokeLinejoin="round"
                style={{ transformOrigin: '0px -1px' }}
                initial={false}
                animate={
                  hasBloomed
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  duration: 0.55,
                  delay: delay * 0.55 + idx * 0.045,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              {/* Delicate inner petal crease */}
              <motion.path
                d="M 0 -2.2 L 0 -5.1"
                stroke={STROKE}
                strokeWidth="0.8"
                strokeLinecap="round"
                initial={false}
                animate={
                  hasBloomed
                    ? { opacity: 0.55 }
                    : { opacity: 0 }
                }
                transition={{
                  duration: 0.35,
                  delay: delay * 0.55 + 0.18,
                }}
              />
            </g>
          ))}

          {/* Golden Flower Center Core */}
          <motion.g
            initial={false}
            animate={
              hasBloomed
                ? { scale: 1, opacity: 1 }
                : { scale: 0, opacity: 0 }
            }
            transition={{
              duration: 0.45,
              delay: delay * 0.55 + 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <circle
              cx="0"
              cy="0"
              r="2.6"
              fill={tipColor}
              stroke={STROKE}
              strokeWidth="1.15"
            />
            <circle cx="-0.5" cy="-0.5" r="0.7" fill="#ffffff" fillOpacity="0.65" />
          </motion.g>
        </g>

        {/* Green Calyx Sepal Cup at Base of Bud / Flower */}
        <path
          d="M -3.6 0.4 C -4.2 -2.2, -1.8 -3.8, 0 -2.6 C 1.8 -3.8, 4.2 -2.2, 3.6 0.4 C 2.0 2.0, -2.0 2.0, -3.6 0.4 Z"
          fill="#ADF802"
          stroke={STROKE}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </motion.g>
    </g>
  );
}

/**
 * Small tender sprouting leaf along the dangling tree branch
 */
function BranchLeaf({ x, y, rotate = 0, scale = 1, fill = 'rgba(173, 248, 2, 0.72)' }) {
  const STROKE = 'rgba(9, 30, 58, 0.40)';
  return (
    <g transform={`translate(${x}, ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="M 0 0 C -4.2 -2.5, -4.8 -8.2, 0 -11 C 4.8 -8.2, 4.2 -2.5, 0 0 Z"
        fill={fill}
        stroke={STROKE}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M 0 -1 L 0 -8.5"
        stroke={STROKE}
        strokeWidth="1.0"
        strokeLinecap="round"
      />
    </g>
  );
}

/**
 * PeekingChildFigure
 * - On wider widescreen viewports (where the child's waving hand does not cross past
 *   the first word of the heading): renders the adorable preschool stick-figure child
 *   holding onto a hanging rope and waving at the user.
 * - On smaller or narrower aspect ratio screens (where the waving hand would start crossing
 *   the first word of the heading): hides the child figure and transforms the rope into
 *   a graceful dangling tree branch filled with colorful flower buds.
 */
export default function PeekingChildFigure({
  isPageLoaded = true,
  showChild = true,
  branchCompact = false,
}) {
  const [isWaving, setIsWaving] = useState(false);
  const [hasBloomed, setHasBloomed] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileScreen((prev) => (prev === mobile ? prev : mobile));
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Soft translucent tint for limbs & joints so they stay gently in the background
  // and never conflict with or distract from the bold hero heading typography
  const LIMB_STROKE = 'rgba(9, 30, 58, 0.20)';
  const LIMB_FILL = 'rgba(255, 255, 255, 0.50)';
  const BODY_STROKE = 'rgba(9, 30, 58, 0.36)';

  // Trigger flower buds on the dangling branch to bloom into flowers right after the loading screen finishes
  useEffect(() => {
    if (!isPageLoaded || isMobileScreen) {
      setHasBloomed(false);
      return;
    }
    const bloomTimer = setTimeout(() => {
      setHasBloomed(true);
    }, 220);
    return () => clearTimeout(bloomTimer);
  }, [isPageLoaded, isMobileScreen]);

  useEffect(() => {
    if (!showChild || !isPageLoaded || isMobileScreen) return;
    // First friendly wave shortly after appearing
    const startWave = setTimeout(() => setIsWaving(true), 900);
    const endWave = setTimeout(() => setIsWaving(false), 3500);

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
  }, [showChild, isPageLoaded, isMobileScreen]);

  if (isMobileScreen) {
    return null;
  }

  // When the child's waving hand would cross the first word of the heading (or on smaller
  // aspect ratio screens), render the Dangling Tree Branch Filled with Flower Buds in place of the rope.
  if (!showChild) {
    return (
      <div
        aria-hidden="true"
        className={`hidden md:block pointer-events-none select-none absolute top-[50%] -translate-y-1/2 z-[2] ${
          branchCompact ? '-left-2.5' : 'left-0'
        }`}
      >
        <motion.div
          initial={false}
          animate={{
            y: 0,
            rotate: [-1.1, 1.4, -1.1],
            opacity: 0.92,
          }}
          transition={{
            rotate: {
              duration: 5.2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          style={{ transformOrigin: '20% 0%' }}
          className={
            branchCompact
              ? 'relative w-[135px] h-[430px]'
              : 'relative w-[220px] h-[440px] lg:w-[245px] lg:h-[500px]'
          }
        >
          <svg
            viewBox="0 0 135 215"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full overflow-visible drop-shadow-[0_8px_18px_rgba(9,30,58,0.08)]"
          >
            {/* Shifted slightly to the right so bloomed flowers on the left side have generous breathing room */}
            <g transform="translate(4.5, 0)">
              {/* Soft ambient botanical glow along the dangling branch */}
              <ellipse cx="18" cy="70" rx="18" ry="65" fill="#ADF802" fillOpacity="0.08" />
              <ellipse cx="20" cy="135" rx="16" ry="48" fill="#FF6B8B" fillOpacity="0.07" />

              {/* ================= DANGLING TREE BRANCH (In Place of the Rope) ================= */}
              <g>
                {/* Side Offshoot Twigs (Alternating Left & Right along the Main Branch) */}
                <g stroke="#091E3A" strokeOpacity="0.48" strokeWidth="2.1" strokeLinecap="round" fill="none">
                  {/* Upper right twig */}
                  <path d="M 18 -26 Q 23 -23 26 -17" />
                  {/* Upper left twig */}
                  <path d="M 16 -4 Q 11 -1 9 5" />
                  {/* Mid-upper right forked twig */}
                  <path d="M 18 18 Q 24 22 27 29" />
                  <path d="M 22 20 Q 25 16 28 14" />
                  {/* Mid-upper left twig */}
                  <path d="M 18 44 Q 12 48 9 55" />
                  {/* Center right twig */}
                  <path d="M 17 70 Q 23 74 26 81" />
                  {/* Center left twig */}
                  <path d="M 16 96 Q 10 100 8 107" />
                  {/* Lower-mid right forked twig */}
                  <path d="M 16 122 Q 22 126 25 133" />
                  <path d="M 20 124 Q 24 120 26 117" />
                  {/* Lower left twig */}
                  <path d="M 18 148 Q 12 152 9 159" />
                  {/* Terminal bottom fork twigs */}
                  <path d="M 17 176 Q 12 182 10 189" />
                  <path d="M 17 176 Q 22 182 24 189" />
                </g>

                {/* Main Woody Tree Branch Hanging from Canopy (-320) down to Tip (188) */}
                {/* Dark outer bark contour */}
                <path
                  d="M 18 -320 C 15 -235, 22 -150, 17 -70 C 14 -15, 21 30, 16 82 C 13 122, 20 152, 17 188"
                  stroke="#091E3A"
                  strokeOpacity="0.52"
                  strokeWidth="6.0"
                  strokeLinecap="round"
                />
                {/* Warm natural wood bark fill */}
                <path
                  d="M 18 -320 C 15 -235, 22 -150, 17 -70 C 14 -15, 21 30, 16 82 C 13 122, 20 152, 17 188"
                  stroke="#B87B48"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Sunlit bark highlight ridge */}
                <path
                  d="M 19 -320 C 16 -235, 23 -150, 18 -70 C 15 -15, 22 30, 17 82 C 14 122, 21 152, 18 186"
                  stroke="#E5A95C"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                />

                {/* Subtle Bark Texture Notches */}
                {[-180, -140, -100, -60, -20, 12, 40, 68, 94, 120, 146, 168].map((yPos, i) => (
                  <path
                    key={yPos}
                    d={i % 2 === 0 ? `M 15.5 ${yPos} Q 18 ${yPos + 3} 19.5 ${yPos + 1}` : `M 16 ${yPos} Q 17.5 ${yPos + 2} 19 ${yPos + 4}`}
                    stroke="#091E3A"
                    strokeOpacity="0.35"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                  />
                ))}

                {/* ================= SPROUTING LEAVES ALONG THE BRANCH ================= */}
                <BranchLeaf x={21} y={-23} rotate={48} scale={0.85} fill="rgba(173, 248, 2, 0.75)" />
                <BranchLeaf x={13} y={-2} rotate={-52} scale={0.82} fill="rgba(96, 200, 212, 0.68)" />
                <BranchLeaf x={21} y={22} rotate={55} scale={0.88} fill="rgba(173, 248, 2, 0.75)" />
                <BranchLeaf x={14} y={46} rotate={-48} scale={0.85} fill="rgba(173, 248, 2, 0.72)" />
                <BranchLeaf x={20} y={72} rotate={50} scale={0.84} fill="rgba(96, 200, 212, 0.68)" />
                <BranchLeaf x={13} y={98} rotate={-52} scale={0.86} fill="rgba(173, 248, 2, 0.75)" />
                <BranchLeaf x={19} y={124} rotate={52} scale={0.85} fill="rgba(173, 248, 2, 0.72)" />
                <BranchLeaf x={14} y={150} rotate={-48} scale={0.82} fill="rgba(96, 200, 212, 0.68)" />
                {/* Terminal pair of leaves cradling the bottom flower buds */}
                <BranchLeaf x={15} y={178} rotate={-62} scale={0.92} fill="rgba(173, 248, 2, 0.78)" />
                <BranchLeaf x={19} y={178} rotate={62} scale={0.92} fill="rgba(173, 248, 2, 0.78)" />

                {/* ================= FLOWER BUDS THAT BLOOM INTO FLOWERS AFTER PAGE LOAD ================= */}
                {/* 1. Upper right coral flower */}
                <BranchFlowerBud
                  x={26}
                  y={-17}
                  rotate={148}
                  scale={0.88}
                  petalColor="rgba(255, 107, 139, 0.82)"
                  innerColor="rgba(255, 148, 172, 0.88)"
                  delay={0.1}
                  hasBloomed={hasBloomed}
                />
                {/* 2. Upper left golden flower */}
                <BranchFlowerBud
                  x={9}
                  y={5}
                  rotate={-152}
                  scale={0.86}
                  petalColor="rgba(254, 206, 19, 0.88)"
                  innerColor="rgba(255, 226, 102, 0.92)"
                  tipColor="#FF6B8B"
                  delay={0.25}
                  hasBloomed={hasBloomed}
                />
                {/* 3. Mid-upper right blush rose flower */}
                <BranchFlowerBud
                  x={27}
                  y={29}
                  rotate={145}
                  scale={0.95}
                  petalColor="rgba(255, 148, 172, 0.85)"
                  innerColor="rgba(255, 107, 139, 0.86)"
                  delay={0.4}
                  hasBloomed={hasBloomed}
                />
                {/* 4. Mid-upper right upward-peeking small coral flower */}
                <BranchFlowerBud
                  x={28}
                  y={14}
                  rotate={58}
                  scale={0.76}
                  petalColor="rgba(255, 107, 139, 0.80)"
                  innerColor="rgba(255, 148, 172, 0.88)"
                  delay={0.55}
                  hasBloomed={hasBloomed}
                />
                {/* 5. Mid-upper left coral flower */}
                <BranchFlowerBud
                  x={9}
                  y={55}
                  rotate={-148}
                  scale={0.94}
                  petalColor="rgba(255, 107, 139, 0.84)"
                  innerColor="rgba(255, 148, 172, 0.90)"
                  delay={0.2}
                  hasBloomed={hasBloomed}
                />
                {/* 6. Center right golden flower */}
                <BranchFlowerBud
                  x={26}
                  y={81}
                  rotate={148}
                  scale={0.92}
                  petalColor="rgba(254, 206, 19, 0.88)"
                  innerColor="rgba(255, 226, 102, 0.92)"
                  tipColor="#FF6B8B"
                  delay={0.45}
                  hasBloomed={hasBloomed}
                />
                {/* 7. Center left blush flower */}
                <BranchFlowerBud
                  x={8}
                  y={107}
                  rotate={-152}
                  scale={0.92}
                  petalColor="rgba(255, 148, 172, 0.85)"
                  innerColor="rgba(255, 107, 139, 0.88)"
                  delay={0.65}
                  hasBloomed={hasBloomed}
                />
                {/* 8. Lower-mid right coral flower */}
                <BranchFlowerBud
                  x={25}
                  y={133}
                  rotate={146}
                  scale={0.95}
                  petalColor="rgba(255, 107, 139, 0.84)"
                  innerColor="rgba(255, 148, 172, 0.90)"
                  delay={0.3}
                  hasBloomed={hasBloomed}
                />
                {/* 9. Lower-mid right small golden flower */}
                <BranchFlowerBud
                  x={26}
                  y={117}
                  rotate={55}
                  scale={0.75}
                  petalColor="rgba(254, 206, 19, 0.88)"
                  innerColor="rgba(255, 226, 102, 0.92)"
                  tipColor="#FF6B8B"
                  delay={0.75}
                  hasBloomed={hasBloomed}
                />
                {/* 10. Lower left coral flower */}
                <BranchFlowerBud
                  x={9}
                  y={159}
                  rotate={-150}
                  scale={0.9}
                  petalColor="rgba(255, 107, 139, 0.82)"
                  innerColor="rgba(255, 148, 172, 0.88)"
                  delay={0.5}
                  hasBloomed={hasBloomed}
                />

                {/* 11, 12, 13. Terminal Dangling Trio of Flowers at Bottom Tip of Branch */}
                <BranchFlowerBud
                  x={10}
                  y={189}
                  rotate={-162}
                  scale={0.88}
                  petalColor="rgba(254, 206, 19, 0.88)"
                  innerColor="rgba(255, 226, 102, 0.92)"
                  tipColor="#FF6B8B"
                  delay={0.35}
                  hasBloomed={hasBloomed}
                />
                <BranchFlowerBud
                  x={24}
                  y={189}
                  rotate={160}
                  scale={0.9}
                  petalColor="rgba(255, 148, 172, 0.85)"
                  innerColor="rgba(255, 107, 139, 0.88)"
                  delay={0.6}
                  hasBloomed={hasBloomed}
                />
                <BranchFlowerBud
                  x={17}
                  y={188}
                  rotate={180}
                  scale={1.06}
                  petalColor="rgba(255, 107, 139, 0.86)"
                  innerColor="rgba(255, 148, 172, 0.92)"
                  delay={0.15}
                  hasBloomed={hasBloomed}
                />
              </g>
            </g>
          </svg>
        </motion.div>
      </div>
    );
  }

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
        className="relative w-[260px] h-[420px] lg:w-[320px] lg:h-[515px] min-[1620px]:w-[350px] min-[1620px]:h-[560px]"
      >
        {/* Subtle "Hi!" pill that pops up while waving (snug above child's head, clear of heading text) */}
        <AnimatePresence>
          {isWaving && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 6 }}
              transition={{ duration: 0.26, ease: 'backOut' }}
              className="absolute top-0 left-20 lg:left-24 px-3.5 py-1 rounded-full bg-white/90 border-2 border-[#ADF802]/80 shadow-md text-xs lg:text-sm font-black text-[#091E3A]/85 whitespace-nowrap"
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
          <circle cx="56" cy="82" r="44" fill="#ADF802" fillOpacity="0.11" />
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
            fill="rgba(173, 248, 2, 0.65)"
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
            fill="#ADF802"
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
                      stroke="rgba(173, 248, 2, 0.45)"
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
