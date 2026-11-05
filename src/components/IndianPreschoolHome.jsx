import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WavingChildStickFigure from './WavingChildStickFigure';
import PeekingChildFigure from './PeekingChildFigure';
import HeroNatureElements from './HeroNatureElements';
import {
  Sparkles, Phone, ArrowRight, ArrowUpRight, CheckCircle2, Heart, Star,
  BookOpen, Compass, Palette, Music, Leaf, Globe2, Users, Brain,
  MessageCircle, Smile, Rocket, ShieldCheck, Award, Calendar, Play,
  ChevronLeft, ChevronRight, ChevronDown, MapPin, Mail, Clock, Eye, X, GraduationCap,
  Layers, Flame, Sun, Flower2
} from 'lucide-react';

// All 13 photos have been visually verified via read_file to depict ONLY preschool children / toys and ZERO adults
const CHILD_PHOTOS = {
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
function FlowyWaveDivider({ flip = false, fill = "#FFFFFF", accentColor = "#60C8D4" }) {
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

// SECTION 01: HERO SLIDES DATA
const HERO_SLIDES = [
  {
    id: 1,
    tag: "The Brand Experience",
    smallHeading: "THE FUTURE BLOOMS HERE",
    headline: "Little Minds. Limitless Possibilities.",
    headlineLines: [
      { text: "Little Minds." },
      { text: "Limitless" },
      { text: "Possibilities.", highlight: true }
    ],
    description: "Discover a world where curiosity leads, learning comes alive, and every child grows with confidence, creativity and care.",
    primaryBtn: "Explore Blooming Era",
    primaryHref: "#welcome",
    secondaryBtn: "Book a School Tour",
    mainImage: "/hero/slide_1.jpg",
    secondaryImage: CHILD_PHOTOS.fingerPaintingGirl,
    tertiaryImage: CHILD_PHOTOS.toddlerLaughingBook,
    badgeTitle: "Proudly Indian, Powerfully Global",
    badgeSub: "Futuristic by Design • Childhood First",
    accent: "#ADF802"
  },
  {
    id: 2,
    tag: "No-Book Learning",
    smallHeading: "BEYOND BOOKS. INTO THE WORLD.",
    headline: "Less Memorising. More Meaningful Learning.",
    headlineLines: [
      { text: "Less Memorising." },
      { text: "More Meaningful" },
      { text: "Learning.", highlight: true }
    ],
    description: "Real experiences, discovery labs, purposeful play and strong academic foundations — because children learn best when learning makes sense.",
    primaryBtn: "Discover Our Learning Philosophy",
    primaryHref: "#philosophy",
    secondaryBtn: "Book a School Tour",
    mainImage: "/hero/slide_2.jpg",
    secondaryImage: CHILD_PHOTOS.woodenBlocksChild,
    tertiaryImage: CHILD_PHOTOS.natureExplorerChild,
    badgeTitle: "Kindermagic PrimeX™ Curriculum",
    badgeSub: "NEP 2020 & NCF-FS 2022 Aligned",
    accent: "#60C8D4"
  },
  {
    id: 3,
    tag: "Franchise Opportunity",
    smallHeading: "FRANCHISE OPPORTUNITY",
    headline: "Build a Preschool. Shape a Generation.",
    headlineLines: [
      { text: "Build a Preschool." },
      { text: "Shape a" },
      { text: "Generation.", highlight: true }
    ],
    description: "Build a legacy in education with our distinctive preschool franchise model, future-ready learning and structured 360° support.",
    primaryBtn: "Explore Franchise Opportunities",
    primaryHref: "#franchise-opportunity",
    secondaryBtn: "Enquire for Partnership",
    mainImage: "/hero/slide_3.jpg",
    secondaryImage: CHILD_PHOTOS.classroomDrawing,
    tertiaryImage: CHILD_PHOTOS.playgroupFloorToddler,
    badgeTitle: "Franchise Starting at ₹2.50 Lakh",
    badgeSub: "360° Setup, Training & Admissions Support",
    accent: "#ADF802"
  }
];

// SECTION 03: WHY PARENTS LOVE US (5 CARDS WITH BOLD, AGGRESSIVE, JOYFUL COLOR PALETTE)
const WHY_PARENTS_CARDS = [
  {
    id: 1,
    title: "NO-BOOK. REAL LEARNING.",
    description: "Less dependence on textbooks. More hands-on discovery, stories, projects, play and meaningful foundational learning.",
    image: CHILD_PHOTOS.toddlerBeadMaze,
    icon: Sparkles,
    badge: "Experiential Discovery",
    color: "#ADF802",
    bgGradient: "linear-gradient(135deg, #d8f792 0%, #ebfaaf 25%, #ffffff 50%, #d8f792 75%, #cef578 100%)",
    borderColor: "rgba(173, 248, 2, 0.38)",
    shadow: "0 20px 50px -10px rgba(173, 248, 2,0.32)",
  },
  {
    id: 2,
    title: "FUTURE SKILLS START EARLY.",
    description: "Creative thinking, problem-solving, communication, collaboration and exciting new-age concepts — introduced through play.",
    image: CHILD_PHOTOS.woodenBlocksChild,
    icon: Rocket,
    badge: "21st-Century Play",
    color: "#9B51E0",
    bgGradient: "linear-gradient(135deg, #dcb7ff 0%, #ecd5ff 25%, #ffffff 50%, #dcb7ff 75%, #ca9aff 100%)",
    borderColor: "rgba(155, 81, 224, 0.38)",
    shadow: "0 20px 50px -10px rgba(155,81,224,0.3)",
  },
  {
    id: 3,
    title: "EVERY DIMENSION MATTERS.",
    description: "From emotional intelligence to physical wellbeing, we nurture the whole child, not merely academic performance.",
    image: CHILD_PHOTOS.fingerPaintingGirl,
    icon: Heart,
    badge: "360° Whole Child",
    color: "#fece13",
    bgGradient: "linear-gradient(135deg, #fee575 0%, #fef0a4 25%, #ffffff 50%, #fee575 75%, #fddb4c 100%)",
    borderColor: "rgba(254, 206, 19, 0.42)",
    shadow: "0 20px 50px -10px rgba(254,206,19,0.3)",
  },
  {
    id: 4,
    title: "More Experiential Foundational Literacy & Numeracy",
    description: "Our research based curriculum helps make early learning more engaging, experiential, enjoyable and enlightening.",
    image: CHILD_PHOTOS.classroomDrawing,
    icon: BookOpen,
    badge: "Research-Informed FLN",
    color: "#FF6B8B",
    bgGradient: "linear-gradient(135deg, #ffb8c9 0%, #ffd4df 25%, #ffffff 50%, #ffb8c9 75%, #ffa1b8 100%)",
    borderColor: "rgba(255, 107, 139, 0.38)",
    shadow: "0 20px 50px -10px rgba(255,107,139,0.3)",
  },
  {
    id: 5,
    title: "INDIAN ROOTS. GLOBAL WINGS.",
    description: "Our approach celebrates Indian values while drawing on global perspectives and research-informed early-learning practices.",
    image: CHILD_PHOTOS.toddlerLaughingBook,
    icon: Globe2,
    badge: "Sanskar + Global Vision",
    color: "#60C8D4",
    bgGradient: "linear-gradient(135deg, #b2eef5 0%, #cbf5f9 25%, #ffffff 50%, #a2ebf4 75%, #88e4ef 100%)",
    borderColor: "rgba(96, 200, 212, 0.38)",
    shadow: "0 20px 50px -10px rgba(96,200,212,0.32)",
  }
];

// SECTION 05: STATISTICS COUNTER (4 DISTINCT LOGO PALETTE THEMES WITH FLOWING SAND EFFECT)
const STATS_ITEMS = [
  {
    number: "5",
    label: "Foundational Learning Years",
    sub: "(Ages 3–8) NCF-FS Continuum",
    icon: GraduationCap,
    theme: {
      id: "lime",
      bgGradient: "linear-gradient(135deg, #ADF802 0%, #9fe000 50%, #bbf926 100%)",
      waveColor1: "rgba(255, 255, 255, 0.32)",
      waveColor2: "rgba(105, 175, 18, 0.28)",
      waveColor3: "rgba(255, 255, 255, 0.20)",
      sandShimmer: "rgba(235, 255, 190, 0.45)",
      borderColor: "rgba(255, 255, 255, 0.65)",
      shadow: "0 22px 55px rgba(173, 248, 2, 0.35)",
      textColor: "#091E3A",
      subTextColor: "rgba(9, 30, 58, 0.82)",
      iconBg: "#091E3A",
      iconColor: "#ADF802",
    }
  },
  {
    number: "8",
    label: "Interconnected Learning Dimensions",
    sub: "Holistic Child Growth",
    icon: Compass,
    theme: {
      id: "cyan",
      bgGradient: "linear-gradient(135deg, #02c9fe 0%, #05b8e9 50%, #36d6fe 100%)",
      waveColor1: "rgba(255, 255, 255, 0.34)",
      waveColor2: "rgba(2, 130, 195, 0.26)",
      waveColor3: "rgba(255, 255, 255, 0.20)",
      sandShimmer: "rgba(210, 248, 255, 0.45)",
      borderColor: "rgba(255, 255, 255, 0.65)",
      shadow: "0 22px 55px rgba(2, 201, 254, 0.35)",
      textColor: "#091E3A",
      subTextColor: "rgba(9, 30, 58, 0.82)",
      iconBg: "#091E3A",
      iconColor: "#02c9fe",
    }
  },
  {
    number: "12",
    label: "Future-Ready Learning Themes",
    sub: "Real-World Experiential Units",
    icon: Sparkles,
    theme: {
      id: "yellow",
      bgGradient: "linear-gradient(135deg, #fece13 0%, #f7be0b 50%, #fedd46 100%)",
      waveColor1: "rgba(255, 255, 255, 0.35)",
      waveColor2: "rgba(215, 150, 0, 0.24)",
      waveColor3: "rgba(255, 255, 255, 0.22)",
      sandShimmer: "rgba(255, 252, 215, 0.5)",
      borderColor: "rgba(255, 255, 255, 0.65)",
      shadow: "0 22px 55px rgba(254, 206, 19, 0.35)",
      textColor: "#091E3A",
      subTextColor: "rgba(9, 30, 58, 0.82)",
      iconBg: "#091E3A",
      iconColor: "#fece13",
    }
  },
  {
    number: "360°",
    label: "Holistic Learning Approach",
    sub: "Mind, Heart, Body & Spirit",
    icon: Sun,
    theme: {
      id: "rose",
      bgGradient: "linear-gradient(135deg, #fa0672 0%, #e20063 50%, #fc3c91 100%)",
      waveColor1: "rgba(255, 255, 255, 0.28)",
      waveColor2: "rgba(160, 0, 68, 0.26)",
      waveColor3: "rgba(255, 255, 255, 0.18)",
      sandShimmer: "rgba(255, 220, 238, 0.45)",
      borderColor: "rgba(255, 255, 255, 0.55)",
      shadow: "0 22px 55px rgba(250, 6, 114, 0.35)",
      textColor: "#FFFFFF",
      subTextColor: "rgba(255, 255, 255, 0.90)",
      iconBg: "#FFFFFF",
      iconColor: "#fa0672",
    }
  }
];

// SECTION 06: OUR ACTIVITIES (6 CARDS WITH BOLD SATURATED ACCENTS & MOVING TINTS)
const ACTIVITIES = [
  {
    id: "wonder-lab",
    name: "Wonder Lab",
    tagline: "Little Scientists. Big Questions.",
    description: "Hands-on experiments, observation and playful investigations that bring science and everyday discoveries to life.",
    image: CHILD_PHOTOS.toddlerAmazedBook,
    icon: Flame,
    accent: "#02C9FE",
    cardBg: "linear-gradient(135deg, #dcf7fb 0%, #ffffff 35%, #ebfbfd 70%, #c4f3fa 100%)",
    borderColor: "rgba(2, 201, 254, 0.38)",
    glowColor: "rgba(2, 201, 254, 0.25)",
  },
  {
    id: "storyverse",
    name: "Storyverse",
    tagline: "Where Every Story Opens a World.",
    description: "Storytelling, phonics games, puppetry and role-play nurture communication, imagination and early literacy.",
    image: CHILD_PHOTOS.toddlerLaughingBook,
    icon: BookOpen,
    accent: "#ADF802",
    cardBg: "linear-gradient(135deg, #ecfad0 0%, #ffffff 35%, #f4fce5 70%, #d8f792 100%)",
    borderColor: "rgba(173, 248, 2, 0.38)",
    glowColor: "rgba(173, 248, 2, 0.25)",
  },
  {
    id: "maker-studio",
    name: "Maker Studio",
    tagline: "Imagine It. Build It. Improve It.",
    description: "Construction, art, creative projects and design challenges inspire independent thinking and collaborative problem-solving.",
    image: CHILD_PHOTOS.woodenBlocksChild,
    icon: Palette,
    accent: "#FECE13",
    cardBg: "linear-gradient(135deg, #fef6cc 0%, #ffffff 35%, #fffbe6 70%, #fede54 100%)",
    borderColor: "rgba(254, 206, 19, 0.42)",
    glowColor: "rgba(254, 206, 19, 0.25)",
  },
  {
    id: "rhythm-motion",
    name: "Rhythm & Motion",
    tagline: "Move Freely. Express Joyfully.",
    description: "Music, dance, physical play and movement support coordination, expression, confidence and wellbeing.",
    image: CHILD_PHOTOS.outdoorBallPlayKids,
    icon: Music,
    accent: "#FA0672",
    cardBg: "linear-gradient(135deg, #ffd9e8 0%, #ffffff 35%, #ffeaf1 70%, #ffb8c9 100%)",
    borderColor: "rgba(250, 6, 114, 0.38)",
    glowColor: "rgba(250, 6, 114, 0.25)",
  },
  {
    id: "nature-explorers",
    name: "Nature Explorers",
    tagline: "Learning Has No Classroom Walls.",
    description: "Gardening, sensory walks and outdoor exploration encourage environmental awareness and curiosity.",
    image: CHILD_PHOTOS.natureExplorerChild,
    icon: Leaf,
    accent: "#22c55e",
    cardBg: "linear-gradient(135deg, #ddf7e4 0%, #ffffff 35%, #effbf2 70%, #bbf0ca 100%)",
    borderColor: "rgba(34, 197, 94, 0.38)",
    glowColor: "rgba(34, 197, 94, 0.25)",
  },
  {
    id: "roots-wings",
    name: "Roots & Wings",
    tagline: "Indian at Heart. Global in Spirit.",
    description: "Stories, festivals, cultures and community experiences nurture belonging, empathy, respect and global awareness.",
    image: CHILD_PHOTOS.classroomDrawing,
    icon: Globe2,
    accent: "#9B51E0",
    cardBg: "linear-gradient(135deg, #f3e6ff 0%, #ffffff 35%, #faf2ff 70%, #dcb7ff 100%)",
    borderColor: "rgba(155, 81, 224, 0.38)",
    glowColor: "rgba(155, 81, 224, 0.25)",
  }
];

// SECTION 07: LEARNING PROGRAMMES (4 CARDS WITH VIBRANT SIGNATURE BRAND ACCENTS)
const PROGRAMMES_LIST = [
  {
    id: "playgroup",
    name: "Playgroup",
    age: "Age: 2+ years",
    tagline: "Tiny Steps. Beautiful Beginnings.",
    description: "Sensory discovery, warm relationships, movement and playful interactions make the first school experiences joyful and reassuring.",
    btnText: "Explore Playgroup",
    image: CHILD_PHOTOS.playgroupFloorToddler,
    color: "#02C9FE",
    cardBg: "linear-gradient(180deg, rgba(2,201,254,0.38) 0%, rgba(9,30,58,0.95) 80%)",
    accentBorder: "#02C9FE",
    glowColor: "rgba(2,201,254,0.55)",
    badge: "2+ Years"
  },
  {
    id: "nursery",
    name: "Nursery",
    age: "Age: 3+ years",
    tagline: "Little Questions. Big Discoveries.",
    description: "Language, early concepts, imagination and independence blossom through stories, exploration and purposeful play.",
    btnText: "Explore Nursery",
    image: CHILD_PHOTOS.fingerPaintingGirl,
    color: "#ADF802",
    cardBg: "linear-gradient(180deg, rgba(173, 248, 2,0.38) 0%, rgba(9,30,58,0.95) 80%)",
    accentBorder: "#ADF802",
    glowColor: "rgba(173, 248, 2,0.55)",
    badge: "3+ Years"
  },
  {
    id: "junior-kg",
    name: "Junior KG",
    age: "Age: 4+ years",
    tagline: "Curious Minds. Strong Foundations.",
    description: "Experiential literacy, numeracy, early scientific thinking and creative challenges bring learning to life.",
    btnText: "Explore Junior KG",
    image: CHILD_PHOTOS.woodenBlocksChild,
    color: "#FECE13",
    cardBg: "linear-gradient(180deg, rgba(254,206,19,0.40) 0%, rgba(9,30,58,0.95) 80%)",
    accentBorder: "#FECE13",
    glowColor: "rgba(254,206,19,0.55)",
    badge: "4+ Years"
  },
  {
    id: "senior-kg",
    name: "Senior KG",
    age: "Age: 5+ years",
    tagline: "Confident Learners. Future-Ready Foundations.",
    description: "Foundational skills grow through inquiry, collaboration, projects, communication and meaningful school-readiness experiences.",
    btnText: "Explore Senior KG",
    image: CHILD_PHOTOS.seniorKgFocusedChild,
    color: "#FA0672",
    cardBg: "linear-gradient(180deg, rgba(250,6,114,0.38) 0%, rgba(9,30,58,0.95) 80%)",
    accentBorder: "#FA0672",
    glowColor: "rgba(250,6,114,0.55)",
    badge: "5+ Years"
  }
];

// SECTION 08: KINDERMAGIC PRIMEX 5-STEP FLOW (LOGO-INSPIRED FLOWING SAND THEMES)
const PRIMEX_STEPS = [
  {
    step: "01",
    name: "EXPLORE",
    summary: "Discover ideas through hands-on experiences.",
    detail: "Children touch, manipulate and investigate real-world sensory materials, wooden blocks, magnifiers and story props to spark natural curiosity.",
    image: CHILD_PHOTOS.toddlerBeadMaze,
    color: "#ADF802",
    theme: {
      bgGradient: "linear-gradient(135deg, #ADF802 0%, #9fe000 50%, #bbf926 100%)",
      waveColor1: "rgba(255, 255, 255, 0.32)",
      waveColor2: "rgba(105, 175, 18, 0.28)",
      sandShimmer: "rgba(235, 255, 190, 0.45)",
      borderColor: "rgba(255, 255, 255, 0.65)",
      shadow: "0 14px 35px rgba(173, 248, 2, 0.28)",
      textColor: "#091E3A",
      subTextColor: "rgba(9, 30, 58, 0.82)",
      pillBg: "#091E3A",
      pillText: "#ADF802",
      arrowColor: "#091E3A",
    }
  },
  {
    step: "02",
    name: "EXPERIENCE",
    summary: "Connect concepts with real life.",
    detail: "Instead of only reading about plants or numbers, children grow seedlings, run pretend markets and experiment in our Wonder Lab.",
    image: CHILD_PHOTOS.natureExplorerChild,
    color: "#02C9FE",
    theme: {
      bgGradient: "linear-gradient(135deg, #02c9fe 0%, #05b8e9 50%, #36d6fe 100%)",
      waveColor1: "rgba(255, 255, 255, 0.34)",
      waveColor2: "rgba(2, 130, 195, 0.26)",
      sandShimmer: "rgba(210, 248, 255, 0.45)",
      borderColor: "rgba(255, 255, 255, 0.65)",
      shadow: "0 14px 35px rgba(2, 201, 254, 0.28)",
      textColor: "#091E3A",
      subTextColor: "rgba(9, 30, 58, 0.82)",
      pillBg: "#091E3A",
      pillText: "#02c9fe",
      arrowColor: "#091E3A",
    }
  },
  {
    step: "03",
    name: "EXPRESS",
    summary: "Share ideas through language, art and play.",
    detail: "Story circles, puppet theatre, finger-painting and role-play empower every child to voice their discoveries with joyful confidence.",
    image: CHILD_PHOTOS.fingerPaintingGirl,
    color: "#FECE13",
    theme: {
      bgGradient: "linear-gradient(135deg, #fece13 0%, #f7be0b 50%, #fedd46 100%)",
      waveColor1: "rgba(255, 255, 255, 0.35)",
      waveColor2: "rgba(215, 150, 0, 0.24)",
      sandShimmer: "rgba(255, 252, 215, 0.5)",
      borderColor: "rgba(255, 255, 255, 0.65)",
      shadow: "0 14px 35px rgba(254, 206, 19, 0.28)",
      textColor: "#091E3A",
      subTextColor: "rgba(9, 30, 58, 0.82)",
      pillBg: "#091E3A",
      pillText: "#fece13",
      arrowColor: "#091E3A",
    }
  },
  {
    step: "04",
    name: "APPLY",
    summary: "Practise understanding through projects and guided tasks.",
    detail: "Age-appropriate, purposeful worksheets and collaborative maker challenges reinforce concepts children have already experienced physically.",
    image: CHILD_PHOTOS.classroomDrawing,
    color: "#F6A60B",
    theme: {
      bgGradient: "linear-gradient(135deg, #f6a60b 0%, #eb9200 50%, #fdb933 100%)",
      waveColor1: "rgba(255, 255, 255, 0.34)",
      waveColor2: "rgba(195, 110, 0, 0.26)",
      sandShimmer: "rgba(255, 240, 215, 0.45)",
      borderColor: "rgba(255, 255, 255, 0.65)",
      shadow: "0 14px 35px rgba(246, 166, 11, 0.28)",
      textColor: "#091E3A",
      subTextColor: "rgba(9, 30, 58, 0.82)",
      pillBg: "#091E3A",
      pillText: "#f6a60b",
      arrowColor: "#091E3A",
    }
  },
  {
    step: "05",
    name: "GROW",
    summary: "Celebrate progress through holistic observation.",
    detail: "Teachers observe, guide and document each child's unique milestones across all 8 developmental dimensions without exam pressure.",
    image: CHILD_PHOTOS.toddlerLaughingBook,
    color: "#FA0672",
    theme: {
      bgGradient: "linear-gradient(135deg, #fa0672 0%, #e20063 50%, #fc3c91 100%)",
      waveColor1: "rgba(255, 255, 255, 0.28)",
      waveColor2: "rgba(160, 0, 68, 0.26)",
      sandShimmer: "rgba(255, 220, 238, 0.45)",
      borderColor: "rgba(255, 255, 255, 0.55)",
      shadow: "0 14px 35px rgba(250, 6, 114, 0.28)",
      textColor: "#FFFFFF",
      subTextColor: "rgba(255, 255, 255, 0.90)",
      pillBg: "#FFFFFF",
      pillText: "#fa0672",
      arrowColor: "#FFFFFF",
    }
  }
];

// SECTION 09: FUTURE-READY LEARNING (6 CAPABILITIES WITH VIBRANT COLOR PALETTE)
const FUTURE_SKILLS = [
  {
    title: "Critical Thinking",
    description: "Asking questions, observing, comparing and exploring solutions.",
    image: CHILD_PHOTOS.woodenBlocksChild,
    icon: Brain,
    accent: "#ADF802",
    bgGradient: "linear-gradient(135deg, #d8f792 0%, #ffffff 35%, #eefcd5 70%, #c4f364 100%)",
    borderColor: "#ADF802",
  },
  {
    title: "Creativity",
    description: "Imagining, designing, expressing and creating something original.",
    image: CHILD_PHOTOS.fingerPaintingGirl,
    icon: Palette,
    accent: "#02C9FE",
    bgGradient: "linear-gradient(135deg, #b2eef5 0%, #ffffff 35%, #e2fafc 70%, #8ae4f0 100%)",
    borderColor: "#02C9FE",
  },
  {
    title: "Communication",
    description: "Listening, speaking, storytelling and sharing ideas confidently.",
    image: CHILD_PHOTOS.toddlerLaughingBook,
    icon: MessageCircle,
    accent: "#FECE13",
    bgGradient: "linear-gradient(135deg, #fee575 0%, #ffffff 35%, #fff7ce 70%, #fedc46 100%)",
    borderColor: "#f5b800",
  },
  {
    title: "Collaboration",
    description: "Making friends, working together and respecting different viewpoints.",
    image: CHILD_PHOTOS.classroomDrawing,
    icon: Users,
    accent: "#FA0672",
    bgGradient: "linear-gradient(135deg, #ffb8c9 0%, #ffffff 35%, #ffe8ee 70%, #ffa3b9 100%)",
    borderColor: "#fa0672",
  },
  {
    title: "Emotional Intelligence",
    description: "Recognising emotions, building empathy and learning self-regulation.",
    image: CHILD_PHOTOS.toddlerAmazedBook,
    icon: Heart,
    accent: "#9B51E0",
    bgGradient: "linear-gradient(135deg, #dcb7ff 0%, #ffffff 35%, #f3e6ff 70%, #cea0fd 100%)",
    borderColor: "#9B51E0",
  },
  {
    title: "Future Awareness",
    description: "Exploring sustainability, technology, space and everyday innovation through play.",
    image: CHILD_PHOTOS.natureExplorerChild,
    icon: Rocket,
    accent: "#FF8A3D",
    bgGradient: "linear-gradient(135deg, #ffd1ab 0%, #ffffff 35%, #fff0e3 70%, #ffbe85 100%)",
    borderColor: "#FF8A3D",
  }
];

// SECTION 10: 8 HOLISTIC DEVELOPMENT DIMENSIONS
const HOLISTIC_DIMENSIONS = [
  { id: 1, title: "Physical & Motor Development", detail: "Movement, balance, pincer grip coordination & multisensory agility.", image: CHILD_PHOTOS.outdoorBallPlayKids },
  { id: 2, title: "Cognitive & Executive Function Development", detail: "Attention, working memory, flexible thinking, reasoning & persistence.", image: CHILD_PHOTOS.woodenBlocksChild },
  { id: 3, title: "Language & Communication", detail: "Storytelling, phonics readiness, active listening & expressive vocabulary.", image: CHILD_PHOTOS.toddlerLaughingBook },
  { id: 4, title: "Social & Emotional Intelligence", detail: "Self-awareness, empathy, warm friendships, cooperation & inner confidence.", image: CHILD_PHOTOS.classroomDrawing },
  { id: 5, title: "Creative & Cultural Expression", detail: "Art, music, drama, imagination, Indian heritage & global awareness.", image: CHILD_PHOTOS.fingerPaintingGirl },
  { id: 6, title: "Values & Personal Responsibility", detail: "Kindness, respect, environmental care, gratitude & ethical habits.", image: CHILD_PHOTOS.natureExplorerChild },
  { id: 7, title: "Practical Life & Independence", detail: "Self-care routines, organisation, decision-making & everyday confidence.", image: CHILD_PHOTOS.playgroupFloorToddler },
  { id: 8, title: "21st-Century Capabilities", detail: "Design thinking, early scientific inquiry, sequencing & problem-solving.", image: CHILD_PHOTOS.toddlerBeadMaze }
];

// SECTION 11: LEADERSHIP TEAM
const LEADERSHIP_TEAM = [
  {
    name: "Dr. Masuda Yasmin",
    role: "Founder & Chairperson",
    bio: "The vision behind Blooming Era's distinctive, child-centred and future-ready educational philosophy.",
    initials: "MY",
    badge: "Visionary Founder",
    accent: "#ADF802",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dr. Shelly Bisht",
    role: "Director, Academics",
    bio: "Guiding curriculum quality, teaching practices, academic planning and educator development.",
    initials: "SB",
    badge: "Academic Excellence",
    accent: "#60C8D4",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Ayaan Hossain",
    role: "Director, Operations",
    bio: "Part of the leadership team supporting Blooming Era's institutional vision and future development.",
    initials: "AH",
    badge: "Operational Scale",
    accent: "#fece13",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Mohd. Neyaz Alam",
    role: "Director, Administration & Strategic Partnership",
    bio: "Part of the leadership team contributing to the organisation's development and strategic direction.",
    initials: "NA",
    badge: "Strategic Growth",
    accent: "#091E3A",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  }
];

// SECTION 13: PARENT TESTIMONIALS
const PARENT_STORIES = [
  {
    title: "A More Confident Child",
    subtitle: "Communication, Confidence & Independence",
    narrative: "From shy first mornings to eagerly sharing stories at home, parents celebrate how story circles, puppetry and warm encouragement nurture expressive, self-assured young communicators.",
    image: CHILD_PHOTOS.toddlerLaughingBook,
    tag: "Playgroup & Nursery Families",
    color: "#ADF802"
  },
  {
    title: "Learning With Excitement",
    subtitle: "Curiosity & Joyful School Routines",
    narrative: "Without the stress of heavy schoolbags or rote memorisation, children wake up excited for Wonder Lab experiments, sensory discovery and hands-on block building.",
    image: CHILD_PHOTOS.fingerPaintingGirl,
    tag: "No-Book Experiential Joy",
    color: "#60C8D4"
  },
  {
    title: "A Place of Care and Trust",
    subtitle: "Compassionate Educators & Safe Environment",
    narrative: "Parents value our warm educator-child bonds, transparent holistic progress observations and a nurturing campus that feels like a second home.",
    image: CHILD_PHOTOS.classroomDrawing,
    tag: "Junior & Senior KG Families",
    color: "#ADF802"
  }
];

// SECTION 14: OUR EVENTS (VIBRANT ACCENTS)
const EVENTS_LIST = [
  {
    title: "Discovery Days",
    date: "Interactive Science & Inquiry Showcase",
    description: "Hands-on investigations, projects and experiential learning showcases.",
    image: CHILD_PHOTOS.toddlerAmazedBook,
    badge: "Wonder Lab Showcase",
    color: "#60C8D4"
  },
  {
    title: "Roots & Wings Celebrations",
    date: "Indian Festivals & Global Culture",
    description: "Culture, festivals, storytelling and community experiences.",
    image: CHILD_PHOTOS.classroomDrawing,
    badge: "Cultural Harmony",
    color: "#fece13"
  },
  {
    title: "Little Earthkeepers",
    date: "Green Campus & Nature Drive",
    description: "Nature activities and early environmental responsibility.",
    image: CHILD_PHOTOS.natureExplorerChild,
    badge: "Eco Explorers",
    color: "#ADF802"
  },
  {
    title: "Blooming Together",
    date: "Family & Community Carnival",
    description: "Parent engagement, family events and collaborative learning.",
    image: CHILD_PHOTOS.outdoorBallPlayKids,
    badge: "Parent-Child Joy",
    color: "#FF6B8B"
  }
];

// SECTION 15: THE BLOOMING JOURNAL (BLOG WITH COLORFUL TAGS)
const BLOG_POSTS = [
  {
    title: "No-Book Doesn't Mean No Learning.",
    excerpt: "Discover how experiential learning can build strong foundations beyond repetitive worksheets.",
    category: "Learning Philosophy",
    readTime: "4 Min Read",
    image: CHILD_PHOTOS.toddlerBeadMaze,
    color: "#ADF802"
  },
  {
    title: "Why Future Skills Begin Before School.",
    excerpt: "Explore how creativity, curiosity and problem-solving start with simple childhood experiences.",
    category: "21st-Century Skills",
    readTime: "5 Min Read",
    image: CHILD_PHOTOS.woodenBlocksChild,
    color: "#60C8D4"
  },
  {
    title: "Is Your Child Really School-Ready?",
    excerpt: "Understand why emotional confidence, independence and communication matter alongside academics.",
    category: "Holistic Growth",
    readTime: "4 Min Read",
    image: CHILD_PHOTOS.seniorKgFocusedChild,
    color: "#fece13"
  }
];

// SECTION 16: GALLERY PHOTOS
const GALLERY_ITEMS = [
  { id: 1, title: "Joyful Classroom Drawing", category: "Classroom", image: CHILD_PHOTOS.classroomDrawing, span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Colourful Finger Painting", category: "Maker Studio", image: CHILD_PHOTOS.fingerPaintingGirl, span: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Storyverse Laughter Outdoors", category: "Storyverse", image: CHILD_PHOTOS.toddlerLaughingBook, span: "md:col-span-1 md:row-span-1" },
  { id: 4, title: "Tactile Bead Maze Discovery", category: "Wonder Lab", image: CHILD_PHOTOS.toddlerBeadMaze, span: "md:col-span-1 md:row-span-1" },
  { id: 5, title: "Architectural Wooden Towers", category: "Maker Studio", image: CHILD_PHOTOS.woodenBlocksChild, span: "md:col-span-1 md:row-span-1" },
  { id: 6, title: "Playgroup Sensory Sorting", category: "Classroom", image: CHILD_PHOTOS.playgroupFloorToddler, span: "md:col-span-1 md:row-span-1" },
  { id: 7, title: "Sunshine Nature Walk", category: "Nature", image: CHILD_PHOTOS.natureExplorerChild, span: "md:col-span-1 md:row-span-1" },
  { id: 8, title: "Focused Senior KG Readiness", category: "Classroom", image: CHILD_PHOTOS.seniorKgFocusedChild, span: "md:col-span-2 md:row-span-1" },
];

// SECTION 17: VIDEO BYTES
const VIDEO_BYTES = [
  {
    id: 1,
    title: "Love Is the Language of Childhood",
    duration: "01:45",
    tag: "Warm Relationships",
    color: "#ADF802",
    image: CHILD_PHOTOS.toddlerLaughingBook,
    caption: "Every morning begins with warm smiles, reassuring hugs and a classroom where every child feels cherished."
  },
  {
    id: 2,
    title: "A Day in Our Learning World",
    duration: "02:15",
    tag: "Kindermagic PrimeX",
    color: "#60C8D4",
    image: CHILD_PHOTOS.classroomDrawing,
    caption: "Follow our little explorers from circle time storytelling to hands-on maker challenges and outdoor play."
  },
  {
    id: 3,
    title: "Little Scientists, Big Discoveries",
    duration: "01:30",
    tag: "Wonder Lab",
    color: "#fece13",
    image: CHILD_PHOTOS.toddlerAmazedBook,
    caption: "See how everyday questions turn into joyful experiments in our hands-on Wonder Lab."
  },
  {
    id: 4,
    title: "Beyond Books, Into Possibilities",
    duration: "02:05",
    tag: "No-Book Philosophy",
    color: "#FF6B8B",
    image: CHILD_PHOTOS.fingerPaintingGirl,
    caption: "Why children remember and understand more deeply when they learn by doing, touching and creating."
  }
];

export default function IndianPreschoolHome({
  onOpenTourModal,
  onSwitchToSimulatorView,
  showHeader = true,
  showFooter = true,
  isPageLoaded = true,
  onNavigate
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePrimexStep, setActivePrimexStep] = useState(0);
  const [activeDimension, setActiveDimension] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [flippedLeader, setFlippedLeader] = useState(null);

  // Refs & state for responsive Hero child/branch & flower visibility rules.
  // Initialized synchronously at t = 0ms while the loading screen is up, and refined via useLayoutEffect.
  const heroSectionRef = useRef(null);
  const [isHeroInView, setIsHeroInView] = useState(true);
  const heroHeadingRef = useRef(null);
  const desktopSlideshowRef = useRef(null);
  const [heroLayout, setHeroLayout] = useState(() => {
    if (typeof window === 'undefined') {
      return { showChild: true, showFlower: true, branchCompact: false };
    }
    const vw = window.innerWidth;
    const vh = Math.max(window.innerHeight, 1);
    const aspectRatio = vw / vh;
    const isWideAspect = aspectRatio >= 1.45 && vw >= 1024;
    // max-w-7xl is 1280px; account for ~16px organic inward curve of the melting slideshow frame
    const estimatedRightSpace = Math.max(24, (vw - 1280) / 2) + 16;
    const flowerOverlapRatio = Math.max(0, 132 - estimatedRightSpace) / 140;
    const estimatedHeadingLeft = Math.max(24, (vw - 1280) / 2);
    const firstWordRight = estimatedHeadingLeft + 60 * 2.15;
    const childWidth = vw >= 1620 ? 350 : 320;
    const wavingHandMaxRight = -4 + (111 / 135) * childWidth;
    return {
      showChild: isWideAspect && wavingHandMaxRight <= firstWordRight && estimatedHeadingLeft >= 115,
      showFlower: isWideAspect && flowerOverlapRatio <= 0.30,
      branchCompact: estimatedHeadingLeft < 72,
    };
  });

  useLayoutEffect(() => {
    // On mobile (<1024px), Hero child & flower are strictly hidden, so skip desktop DOM measurement
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return;
    }

    const evaluateHeroClearance = () => {
      if (typeof window === 'undefined') return;
      const vw = window.innerWidth;
      const vh = Math.max(window.innerHeight, 1);
      const aspectRatio = vw / vh;

      // Hide both the child figure and the flower on smaller aspect ratio screens (e.g. 4:3, 5:4, portrait, or < 1.45)
      // as well as below desktop lg breakpoint.
      const isWideAspect = aspectRatio >= 1.45 && vw >= 1024;

      let nextShowFlower = false;
      let nextShowChild = false;
      let nextBranchCompact = false;

      if (desktopSlideshowRef.current) {
        const slideRect = desktopSlideshowRef.current.getBoundingClientRect();
        // In HeroNatureElements (540px wide SVG at right: 0), the flower head has diameter 140px
        // and its leftmost petal edge is 132px from the right viewport edge.
        // Account for the ~16px organic inward curvature of the melting slideshow border.
        // Allow up to 30% (0.30) of the flower to overlap over the image slideshow; if more than 30%, hide it.
        const visualRightClearance = vw - slideRect.right + 16;
        const overlapPx = Math.max(0, 132 - visualRightClearance);
        const overlapRatio = overlapPx / 140;
        nextShowFlower = isWideAspect && slideRect.width > 0 && overlapRatio <= 0.30;
      }

      if (heroHeadingRef.current) {
        const headingRect = heroHeadingRef.current.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(heroHeadingRef.current);
        const fontSize = parseFloat(computedStyle.fontSize) || 60;
        // Shortest first word across the hero slides ("Less" / "Little" / "Build") is ~2.15em wide.
        const firstWordRight = headingRect.left + fontSize * 2.15;

        // In PeekingChildFigure (viewBox 0..135), the waving hand fingertips reach x = 111
        // with container at left: -4px and width 320px (or 350px at >=1620px).
        const childWidth = vw >= 1620 ? 350 : 320;
        const wavingHandMaxRight = -4 + (111 / 135) * childWidth;

        // Show child only on wide aspect screens when its waving hand does not cross past the first word
        nextShowChild =
          isWideAspect &&
          headingRect.width > 0 &&
          wavingHandMaxRight <= firstWordRight &&
          headingRect.left >= 115;

        // Compact placement for the dangling branch when the left margin beside the heading is narrow
        nextBranchCompact = headingRect.left < 72;
      }

      setHeroLayout((prev) => {
        if (
          prev.showChild === nextShowChild &&
          prev.showFlower === nextShowFlower &&
          prev.branchCompact === nextBranchCompact
        ) {
          return prev;
        }
        return {
          showChild: nextShowChild,
          showFlower: nextShowFlower,
          branchCompact: nextBranchCompact,
        };
      });
    };

    // Execute synchronously while the loading screen is up, and once fonts settle
    evaluateHeroClearance();
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(evaluateHeroClearance);
    }
    window.addEventListener('resize', evaluateHeroClearance);

    let observer;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(evaluateHeroClearance);
      if (heroHeadingRef.current) observer.observe(heroHeadingRef.current);
      if (desktopSlideshowRef.current) observer.observe(desktopSlideshowRef.current);
    }

    return () => {
      window.removeEventListener('resize', evaluateHeroClearance);
      if (observer) observer.disconnect();
    };
  }, [activeSlide]);

  // Track whether Hero section is within viewport so off-screen slide swaps never dirty mobile GPU tiles
  useEffect(() => {
    const el = heroSectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { rootMargin: '150px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance Hero Slider every 6.5 seconds (only while Hero is in view)
  useEffect(() => {
    if (!isHeroInView) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isHeroInView]);

  // Auto-advance Beyond Academics (8 Dimensions) every 5 seconds on desktop only
  useEffect(() => {
    const timer = setInterval(() => {
      if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
        setActiveDimension((prev) => (prev + 1) % HOLISTIC_DIMENSIONS.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeSlide];
  const filteredGallery = galleryFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === galleryFilter);

  return (
    <div className="min-h-screen bg-[#F3FAFC] text-[#091E3A] relative overflow-x-hidden selection:bg-[#ADF802] selection:text-[#091E3A]">

      {/* ===================================================================== */}
      {/* TOP ANNOUNCEMENT BAR & GLASSMORPHIC FLOATING INDIAN PRESCHOOL NAVBAR  */}
      {/* ===================================================================== */}
      {showHeader && (
        <>
          <div className="bg-[#091E3A] text-white text-xs py-2.5 px-4 border-b border-white/10 relative z-50">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#ADF802] text-[#091E3A] font-extrabold text-[11px] shadow-sm">
                  <Flower2 className="w-3.5 h-3.5 text-[#091E3A] animate-spin" style={{ animationDuration: '10s' }} />
                  THE FUTURE BLOOMS HERE
                </span>
                <span className="text-white/90 font-semibold">
                  Proudly Indian, Powerfully Global Preschool
                </span>
                <span className="hidden lg:inline text-[#60C8D4] font-medium">
                  • Futuristic by Design. Childhood First.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="tel:+919647974093"
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#ADF802] font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#60C8D4]" />
                  <span>+91 96479 74093</span>
                </a>
                <span className="text-white/25 hidden sm:inline">|</span>
                {onSwitchToSimulatorView && (
                  <button
                    onClick={onSwitchToSimulatorView}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#60C8D4]/20 hover:bg-[#60C8D4]/35 text-[#ADF802] font-bold text-[11px] border border-[#60C8D4]/40 transition-all"
                  >
                    <span>Switch to Interactive Lab View (Preview 7)</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                )}
                <a
                  href="standalone-previews.html"
                  className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-[11px] border border-white/20 transition-all"
                >
                  <span>All Design Previews (1–8)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ADF802]" />
                </a>
              </div>
            </div>
          </div>

          {/* Main Sticky Glass Navigation */}
          <header className="sticky top-3 z-40 px-3 sm:px-6">
            <div className="max-w-7xl mx-auto glass-panel-elevated rounded-full py-2.5 px-4 sm:px-7 border-2 border-white shadow-[0_20px_50px_rgba(9,30,58,0.1)] bg-white/95 lg:bg-white/85 lg:backdrop-blur-2xl">
              <div className="flex items-center justify-between gap-4">
                <a href="#" className="flex items-center gap-3 group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#ADF802] shadow-md bg-white p-0.5 group-hover:scale-105 transition-transform">
                    <img
                      src="/logo.jpeg"
                      alt="Blooming Era Preschools"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-lg sm:text-xl text-[#091E3A] tracking-tight">
                        Blooming Era
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-[#ADF802] text-[#091E3A] rounded-full">
                        Preschools
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold text-[#091E3A]/65 -mt-0.5">
                      Proudly Indian • Powerfully Global
                    </p>
                  </div>
                </a>

                <nav className="hidden xl:flex items-center gap-1">
                  {[
                    { label: "Why Parents Love Us", href: "#why-parents" },
                    { label: "Welcome", href: "#welcome" },
                    { label: "Activities", href: "#activities" },
                    { label: "Programmes", href: "#programmes-india" },
                    { label: "Kindermagic PrimeX", href: "#philosophy" },
                    { label: "Holistic Growth", href: "#holistic" },
                    { label: "Franchise", href: "#franchise-opportunity" },
                    { label: "Gallery", href: "#gallery" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="px-3 py-1.5 rounded-full text-xs font-bold text-[#091E3A]/80 hover:text-[#091E3A] hover:bg-[#60C8D4]/20 transition-all"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="flex items-center gap-2.5">
                  <a
                    href="#franchise-opportunity"
                    className="hidden sm:inline-flex px-4 py-2 rounded-full text-xs font-extrabold text-[#091E3A] bg-[#60C8D4]/20 hover:bg-[#60C8D4]/35 border border-[#60C8D4]/50 transition-all"
                  >
                    Franchise @ ₹2.5L
                  </a>
                  <button
                    onClick={onOpenTourModal}
                    className="btn-lime px-4 sm:px-5 py-2.5 rounded-full text-xs font-black flex items-center gap-1.5 border-2 border-white shadow-lg"
                  >
                    <span>Book a School Tour</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#091E3A]" />
                  </button>
                </div>
              </div>
            </div>
          </header>
        </>
      )}

      {/* ===================================================================== */}
      {/* SECTION 01 — HOMEPAGE HERO SLIDER (FLOWY GLASSMORPHIC 3-SLIDE HERO)   */}
      {/* ===================================================================== */}
      <section
        ref={heroSectionRef}
        className="relative pt-[124px] sm:pt-[140px] lg:pt-[148px] pb-16 sm:pb-24 lg:pb-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#E7F6FA]/85 via-[#F2FAFC]/90 to-[#F4F9FB]"
      >
        {/* Background Peeking & Waving Child Stick Figure (or Dangling Tree Branch with Blooming Flower Buds on smaller screens) */}
        <PeekingChildFigure
          isPageLoaded={isPageLoaded}
          showChild={heroLayout.showChild}
          branchCompact={heroLayout.branchCompact}
        />

        {/* Background Glowing Sun (Top-Right), Flying Birds (Left->Right), & Blooming Plant (Bottom-Right) */}
        <HeroNatureElements
          isPageLoaded={isPageLoaded}
          showFlower={heroLayout.showFlower}
        />

        {/* Soft feather vignette at very top for ultra-smooth transition from pre-header */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#091E3A]/[0.06] to-transparent pointer-events-none z-[1]" />

        {/* Silky Flowy Ambient Orbs — Seamless multi-stop diffusion spanning behind header */}
        <div
          className="ambient-orb w-[580px] h-[580px] -top-36 -left-16 opacity-45"
          style={{ background: 'radial-gradient(circle, rgba(2,201,254,0.42) 0%, rgba(96,200,212,0.18) 38%, rgba(96,200,212,0.05) 60%, transparent 75%)' }}
        />
        <div
          className="ambient-orb w-[580px] h-[580px] -top-32 -right-16 opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(173, 248, 2,0.38) 0%, rgba(173, 248, 2,0.16) 38%, rgba(173, 248, 2,0.04) 60%, transparent 75%)', animationDelay: '-5s' }}
        />
        <div
          className="ambient-orb w-[500px] h-[500px] -top-40 left-1/3 opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(254,206,19,0.32) 0%, rgba(254,206,19,0.1) 40%, transparent 70%)', animationDelay: '-9s' }}
        />

        {/* Floating Animated Preschool Badge */}
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="hidden lg:flex absolute bottom-32 left-[45%] z-10 w-12 h-12 rounded-2xl glass-panel-elevated items-center justify-center text-xl border-2 border-white shadow-lg will-change-transform select-none"
        >
          🎨
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Desktop Slide Selector Pills with Silky Sliding Layout Animation */}
          <div className="hidden lg:flex items-center justify-between gap-3 mb-8">
            <div className="flex items-center gap-2 p-1 rounded-full glass-panel-elevated border border-white/80">
              {HERO_SLIDES.map((s, idx) => {
                const isActive = activeSlide === idx;
                return (
                  <motion.button
                    key={s.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveSlide(idx)}
                    className={`relative px-4 py-2 rounded-full text-xs font-extrabold transition-colors duration-300 flex items-center gap-2 ${
                      isActive ? 'text-white' : 'text-[#091E3A]/75 hover:text-[#091E3A]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeHeroPill"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        className="absolute inset-0 bg-[#091E3A] rounded-full shadow-md"
                      />
                    )}
                    <span
                      className="relative z-10 w-2 h-2 rounded-full transition-transform duration-300"
                      style={{ backgroundColor: s.accent }}
                    />
                    <span className="relative z-10">{s.tag}</span>
                  </motion.button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                className="w-9 h-9 rounded-full glass-panel-elevated flex items-center justify-center text-[#091E3A] hover:bg-[#ADF802] transition-colors shadow-xs"
                aria-label="Previous Hero Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="w-9 h-9 rounded-full glass-panel-elevated flex items-center justify-center text-[#091E3A] hover:bg-[#ADF802] transition-colors shadow-xs"
                aria-label="Next Hero Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Narrative Column - Locked Heights for Text to eliminate vertical shift */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              
              <div className="space-y-4">
                {/* Dynamic Slide Content (Badge + Headline + Description) */}
                <div className="relative min-h-[300px] sm:min-h-[325px] lg:min-h-[365px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-4"
                    >
                      {/* Small Heading Badge */}
                      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel-elevated border-2 border-white shadow-md">
                        <div className="relative flex items-center justify-center w-2.5 h-2.5">
                          <motion.span
                            animate={{ scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: currentSlide.accent }}
                          />
                          <span
                            className="relative w-2 h-2 rounded-full"
                            style={{ backgroundColor: currentSlide.accent }}
                          />
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest text-[#091E3A]">
                          {currentSlide.smallHeading}
                        </span>
                      </div>

                      {/* Headline with locked min-height for 3-line headings across all slides */}
                      <div className="min-h-[125px] sm:min-h-[165px] lg:min-h-[205px] flex items-center">
                        <h1
                          ref={heroHeadingRef}
                          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#091E3A] tracking-tight leading-[1.08]"
                        >
                          {(currentSlide.headlineLines || []).map((line, idx) => (
                            <span key={idx} className="block">
                              {line.highlight ? (
                                <span className="relative inline-block mt-0.5 sm:mt-1">
                                  <span className="relative z-10">{line.text}</span>
                                  <span
                                    className="absolute bottom-1.5 left-0 right-0 h-3.5 sm:h-4 -z-0 rounded-full opacity-75"
                                    style={{ backgroundColor: currentSlide.accent }}
                                  />
                                </span>
                              ) : (
                                <span>{line.text}</span>
                              )}
                            </span>
                          ))}
                        </h1>
                      </div>

                      {/* Description with locked min-height */}
                      <div className="min-h-[64px] sm:min-h-[50px] flex items-start">
                        <p className="text-base sm:text-lg text-[#091E3A]/80 font-medium leading-relaxed max-w-xl">
                          {currentSlide.description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* MOBILE ONLY: Image Slideshow right under heading & content, with slide arrows and title below it */}
                <div className="block lg:hidden my-6">
                  {/* Organic Preschool Hero Showcase - Melting Frame & Ambient Glow */}
                  <div className="relative mx-auto max-w-xl">
                    {/* Deep melting glow wash dissolving seamlessly into hero background */}
                    <div className="absolute -inset-8 sm:-inset-12 rounded-[60px] bg-gradient-to-tr from-[#ADF802]/35 via-[#60C8D4]/35 to-[#fece13]/30 animate-glow-melt-deep pointer-events-none" />

                    {/* Luminous core aura subtly glowing around the frame */}
                    <div className="absolute -inset-4 sm:-inset-6 rounded-[50px] bg-gradient-to-br from-[#fece13]/30 via-[#60C8D4]/40 to-[#ADF802]/35 animate-glow-melt-core pointer-events-none" />

                    {/* Image Showcase Frame with fluid organic border melting directly into background */}
                    <div
                      className="relative overflow-hidden h-[390px] sm:h-[460px] bg-[#091E3A]/5 shadow-2xl animate-melt-frame"
                      style={{
                        transform: 'translateZ(0)',
                        WebkitTransform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      {/* Subtly Sparkling Rim Border */}
                      <div
                        className="hidden lg:block absolute inset-0 pointer-events-none rounded-[inherit] sparkle-border-ring opacity-75 z-20"
                        style={{
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                          padding: '2px',
                        }}
                      />

                      {/* Sparkling border glints */}
                      <div className="absolute top-2 left-10 z-30 pointer-events-none animate-sparkle-star-1">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white drop-shadow-[0_0_8px_rgba(255,255,255,0.95)]">
                          <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                        </svg>
                      </div>
                      <div className="absolute top-1/4 right-3 z-30 pointer-events-none animate-sparkle-star-2">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#fece13] drop-shadow-[0_0_8px_rgba(254,206,19,0.95)]">
                          <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                        </svg>
                      </div>
                      <div className="absolute bottom-4 right-14 z-30 pointer-events-none animate-sparkle-star-3">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#60C8D4] drop-shadow-[0_0_8px_rgba(96,200,212,0.95)]">
                          <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                        </svg>
                      </div>
                      <div className="absolute bottom-1/3 left-3 z-30 pointer-events-none animate-sparkle-star-4">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#ADF802] drop-shadow-[0_0_8px_rgba(173, 248, 2,0.95)]">
                          <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                        </svg>
                      </div>

                      {/* Permanently Mounted GPU-Composited Slideshow Images (Zero Unmount/Remount Texture Stalls) */}
                      {HERO_SLIDES.map((slide, idx) => {
                        const isCurrent = activeSlide === idx;
                        return (
                          <img
                            key={slide.id}
                            src={slide.mainImage}
                            alt={slide.headline}
                            loading="eager"
                            decoding="sync"
                            fetchPriority="high"
                            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out will-change-[opacity] ${
                              isCurrent ? 'opacity-100 z-[2]' : 'opacity-0 z-[1] pointer-events-none'
                            }`}
                            style={{
                              transform: 'translateZ(0)',
                              WebkitTransform: 'translateZ(0)',
                              backfaceVisibility: 'hidden',
                            }}
                          />
                        );
                      })}

                      {/* Compact Floating Glass Badge */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlide.badgeTitle}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="absolute bottom-3 right-3 glass-panel-elevated py-2 px-3.5 rounded-2xl border border-white/95 bg-white/95 lg:bg-white/90 lg:backdrop-blur-xl flex items-center gap-2.5 shadow-lg z-10 max-w-[90%]"
                        >
                          <div
                            className="w-7 h-7 rounded-xl flex items-center justify-center text-[#091E3A] font-black shadow-xs flex-shrink-0 transition-colors duration-500"
                            style={{ backgroundColor: currentSlide.accent }}
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                          </div>
                          <div className="truncate">
                            <p className="text-xs font-extrabold text-[#091E3A] truncate">{currentSlide.badgeTitle}</p>
                            <p className="text-[10px] font-semibold text-[#091E3A]/70 truncate">{currentSlide.badgeSub}</p>
                          </div>
                          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase bg-[#091E3A] text-[#ADF802] flex-shrink-0">
                            Admissions Open
                          </span>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Mobile Slide Controls: Arrows & Active Slide Title below the slideshow */}
                  <div className="flex items-center gap-2 mt-5 w-full">
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                        className="w-9 h-9 rounded-full glass-panel-elevated flex items-center justify-center text-[#091E3A] hover:bg-[#ADF802] transition-colors shadow-sm"
                        aria-label="Previous Hero Slide"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                        className="w-9 h-9 rounded-full glass-panel-elevated flex items-center justify-center text-[#091E3A] hover:bg-[#ADF802] transition-colors shadow-sm"
                        aria-label="Next Hero Slide"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Active slide pill in the free right space of the arrows */}
                    <div className="flex-1 min-w-0">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlide.id}
                          initial={{ opacity: 0, x: 6 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -6 }}
                          transition={{ duration: 0.2 }}
                          className="px-3.5 py-2 rounded-full bg-[#091E3A] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span
                              className="w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-300"
                              style={{ backgroundColor: currentSlide.accent }}
                            />
                            <span className="truncate">{currentSlide.tag}</span>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons - Stacked one over another */}
                <div className="flex flex-col items-start gap-3 pt-1">
                  <motion.a
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    href={currentSlide.primaryHref}
                    className="btn-lime px-7 py-3.5 rounded-full text-sm font-extrabold inline-flex items-center justify-center gap-2.5 border-2 border-white shadow-xl group transition-all"
                  >
                    <span>{currentSlide.primaryBtn}</span>
                    <ArrowRight className="w-4 h-4 text-[#091E3A] group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onOpenTourModal}
                    className="btn-turquoise px-7 py-3.5 rounded-full text-sm font-extrabold inline-flex items-center justify-center gap-2 border-2 border-white shadow-lg group transition-all"
                  >
                    <Calendar className="w-4 h-4 text-[#091E3A] group-hover:rotate-6 transition-transform" />
                    <span>{currentSlide.secondaryBtn}</span>
                  </motion.button>
                </div>
              </div>

              {/* Indian Preschool Trust Highlights - Bold Saturated Brand Colors */}
              <div className="pt-6 grid grid-cols-3 gap-3 max-w-lg">
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="p-3.5 rounded-2xl border-2 border-[#f5b800] text-center shadow-md relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #fee575 0%, #fff0a8 35%, #fede54 70%, #fcd33f 100%)',
                    backgroundSize: '220% 220%',
                    animation: 'flowyColorDrift 8s ease-in-out infinite',
                  }}
                >
                  <p className="text-xs font-black text-[#091E3A]">No-Book Model</p>
                  <p className="text-[11px] text-[#091E3A]/85 font-bold mt-0.5">Experiential FLN</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="p-3.5 rounded-2xl border-2 border-[#76be13] text-center shadow-md relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #d4f884 0%, #e7fcb4 35%, #c4f466 70%, #b3ed45 100%)',
                    backgroundSize: '220% 220%',
                    animation: 'flowyColorDrift 8s ease-in-out infinite',
                    animationDelay: '1.3s',
                  }}
                >
                  <p className="text-xs font-black text-[#091E3A]">2+ to 5+ Years</p>
                  <p className="text-[11px] text-[#091E3A]/85 font-bold mt-0.5">Playgroup to Sr. KG</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="p-3.5 rounded-2xl border-2 border-[#20b2c4] text-center shadow-md relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #b2f0f7 0%, #d4f7fb 35%, #9eeaf3 70%, #7be1ed 100%)',
                    backgroundSize: '220% 220%',
                    animation: 'flowyColorDrift 8s ease-in-out infinite',
                    animationDelay: '2.6s',
                  }}
                >
                  <p className="text-xs font-black text-[#091E3A]">360° Growth</p>
                  <p className="text-[11px] text-[#091E3A]/85 font-bold mt-0.5">8 Dimensions</p>
                </motion.div>
              </div>
            </div>

            {/* Right Organic Preschool Hero Showcase - Desktop with Melting Frame & Ambient Glow */}
            <div className="hidden lg:block lg:col-span-7 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Deep melting glow wash dissolving seamlessly into hero background */}
                <div className="absolute -inset-8 sm:-inset-12 rounded-[60px] bg-gradient-to-tr from-[#ADF802]/35 via-[#60C8D4]/35 to-[#fece13]/30 animate-glow-melt-deep pointer-events-none" />

                {/* Luminous core aura subtly glowing around the frame */}
                <div className="absolute -inset-4 sm:-inset-6 rounded-[50px] bg-gradient-to-br from-[#fece13]/30 via-[#60C8D4]/40 to-[#ADF802]/35 animate-glow-melt-core pointer-events-none" />

                {/* Image Showcase Frame with fluid organic border melting directly into background */}
                <div
                  ref={desktopSlideshowRef}
                  className="relative overflow-hidden h-[440px] sm:h-[500px] lg:h-[530px] xl:h-[560px] bg-[#091E3A]/5 shadow-2xl animate-melt-frame"
                  style={{
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                    transform: 'translateZ(0)',
                  }}
                >
                  {/* Subtly Sparkling Rim Border */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-[inherit] sparkle-border-ring opacity-75 z-20"
                    style={{
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      padding: '2px',
                    }}
                  />

                  {/* Sparkling border glints */}
                  <div className="absolute top-3 left-12 z-30 pointer-events-none animate-sparkle-star-1">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white drop-shadow-[0_0_8px_rgba(255,255,255,0.95)]">
                      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                    </svg>
                  </div>
                  <div className="absolute top-1/4 right-3 z-30 pointer-events-none animate-sparkle-star-2">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#fece13] drop-shadow-[0_0_8px_rgba(254,206,19,0.95)]">
                      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 right-16 z-30 pointer-events-none animate-sparkle-star-3">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#60C8D4] drop-shadow-[0_0_8px_rgba(96,200,212,0.95)]">
                      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-1/3 left-3 z-30 pointer-events-none animate-sparkle-star-4">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#ADF802] drop-shadow-[0_0_8px_rgba(173, 248, 2,0.95)]">
                      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                    </svg>
                  </div>

                  {/* Permanently Mounted GPU-Composited Slideshow Images (Zero Unmount/Remount Texture Stalls) */}
                  {HERO_SLIDES.map((slide, idx) => {
                    const isCurrent = activeSlide === idx;
                    return (
                      <img
                        key={slide.id}
                        src={slide.mainImage}
                        alt={slide.headline}
                        loading="eager"
                        decoding="sync"
                        fetchPriority="high"
                        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out will-change-[opacity] ${
                          isCurrent ? 'opacity-100 z-[2]' : 'opacity-0 z-[1] pointer-events-none'
                        }`}
                        style={{
                          transform: 'translateZ(0)',
                          WebkitTransform: 'translateZ(0)',
                          backfaceVisibility: 'hidden',
                        }}
                      />
                    );
                  })}

                  {/* Compact Floating Glass Badge */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide.badgeTitle}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="absolute bottom-3 right-3 glass-panel-elevated py-2 px-3.5 rounded-2xl border border-white/95 bg-white/90 backdrop-blur-xl flex items-center gap-2.5 shadow-lg z-10 max-w-[90%]"
                    >
                      <div
                        className="w-7 h-7 rounded-xl flex items-center justify-center text-[#091E3A] font-black shadow-xs flex-shrink-0 transition-colors duration-500"
                        style={{ backgroundColor: currentSlide.accent }}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div className="truncate">
                        <p className="text-xs font-extrabold text-[#091E3A] truncate">{currentSlide.badgeTitle}</p>
                        <p className="text-[10px] font-semibold text-[#091E3A]/70 truncate">{currentSlide.badgeSub}</p>
                      </div>
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase bg-[#091E3A] text-[#ADF802] flex-shrink-0">
                        Admissions Open
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 02 — ADMISSION ANNOUNCEMENT STRIP                             */}
      {/* ===================================================================== */}
      <section className="relative z-20 px-4 sm:px-6 -mt-6 mb-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[34px] p-6 sm:p-8 lg:px-12 text-white shadow-2xl border-2 border-[#60C8D4]/60 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #091E3A 0%, #0d2c55 35%, #10386b 70%, #091E3A 100%)',
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          >
            {/* Decorative Glows */}
            <div className="hidden lg:block absolute -right-12 -top-12 w-64 h-64 rounded-full bg-[#ADF802]/25 blur-3xl pointer-events-none animate-pulse" />
            <div className="hidden lg:block absolute left-1/3 -bottom-16 w-72 h-72 rounded-full bg-[#60C8D4]/25 blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="hidden lg:block absolute left-4 top-1/2 w-48 h-48 rounded-full bg-[#fece13]/15 blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '4s' }} />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#ADF802] text-[#091E3A] flex items-center justify-center font-black text-2xl shadow-lg flex-shrink-0">
                  🌱
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#60C8D4]/25 text-[#ADF802] text-[11px] font-extrabold uppercase tracking-wider mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#ADF802] animate-ping" />
                    <span>2026–2027 Academic Session</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    Their Beautiful Beginning Starts Here.
                  </h2>
                  <p className="text-sm sm:text-base text-[#60C8D4] font-semibold mt-0.5">
                    Admissions Open for Playgroup, Nursery, Junior KG &amp; Senior KG.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenTourModal}
                  className="btn-lime px-7 py-3.5 rounded-full text-sm font-black flex items-center gap-2 border-2 border-white shadow-xl group transition-all"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 text-[#091E3A] group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  href="tel:+919647974093"
                  className="px-5 py-3.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/25 transition-all flex items-center gap-2 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ADF802]" />
                  <span>+91 96479 74093</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 03 — WHY PARENTS LOVE US                                      */}
      {/* ===================================================================== */}
      <section id="why-parents" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass-pill text-xs font-extrabold uppercase tracking-widest text-[#091E3A] border border-[#60C8D4]/40 mb-3">
              <Heart className="w-3.5 h-3.5 text-[#60C8D4] fill-[#60C8D4]" />
              Why Parents Love Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight">
              Not Just Different.{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Thoughtfully Different.</span>
                <span className="absolute bottom-1 left-0 right-0 h-3.5 bg-[#ADF802] -z-0 rounded-full" />
              </span>
            </h2>
          </div>

          {/* 5 Flowy Glassmorphic Photo Cards with Distinct Brand Accents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {WHY_PARENTS_CARDS.map((card, index) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className={`rounded-[32px] overflow-hidden border-[1.5px] shadow-xl flex flex-col justify-between group transition-all duration-300 ${
                    index === 3 ? 'lg:col-span-1' : index === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                  style={{
                    background: card.bgGradient,
                    backgroundSize: '240% 240%',
                    animation: 'flowyColorDrift 11s ease-in-out infinite',
                    animationDelay: `${index * 1.5}s`,
                    borderColor: card.borderColor,
                    boxShadow: card.shadow,
                  }}
                >
                  <div>
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091E3A]/60 via-transparent to-transparent" />
                      <span
                        className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-[11px] font-extrabold text-[#091E3A] shadow-md"
                        style={{ backgroundColor: card.color }}
                      >
                        {card.badge}
                      </span>
                      <div
                        className="absolute bottom-3 right-4 w-11 h-11 rounded-2xl flex items-center justify-center text-[#091E3A] shadow-lg border-2 border-white"
                        style={{ backgroundColor: card.color }}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#091E3A] mb-2.5 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[#091E3A]/75 font-medium leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FlowyWaveDivider fill="#FFFFFF" accentColor="#ADF802" />

      {/* ===================================================================== */}
      {/* SECTION 04 — WELCOME TO BLOOMING ERA (CIRCULAR PHOTO + FOUNDER)       */}
      {/* ===================================================================== */}
      <section id="welcome" className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Circular Children's Photograph with Animated Orbital Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex justify-center relative"
            >
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                {/* Rotating Dashed Outer Orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-5 rounded-full border-4 border-dashed border-[#60C8D4]/50 pointer-events-none"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-10 rounded-full border-2 border-dashed border-[#ADF802] pointer-events-none hidden sm:block"
                />

                {/* Main Circular Children's Photograph */}
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-[#F3FAFC] shadow-[0_25px_60px_rgba(9,30,58,0.16)] relative z-10">
                  <img
                    src={CHILD_PHOTOS.classroomDrawing}
                    alt="Welcome to Blooming Era Preschools children learning"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Satellite Circular Child Photo 1 */}
                <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#ADF802] shadow-xl z-20 bg-white animate-float-gentle">
                  <img
                    src={CHILD_PHOTOS.toddlerLaughingBook}
                    alt="Happy child reading"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Satellite Circular Child Photo 2 */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#60C8D4] shadow-xl z-20 bg-white animate-float-gentle" style={{ animationDelay: '1.8s' }}>
                  <img
                    src={CHILD_PHOTOS.fingerPaintingGirl}
                    alt="Creative child painting"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Pill Badge */}
                <div className="absolute bottom-3 -right-6 z-30 card-flow-gold px-4 py-2 rounded-full border-2 shadow-lg animate-float-gentle" style={{ animationDelay: '0.9s' }}>
                  <span className="text-xs font-black text-[#091E3A] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#091E3A]" />
                    Childhood First
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Introductory Heading, Two Paragraphs & Founder Signature */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#ADF802]/40 text-[#091E3A] font-extrabold text-xs uppercase tracking-widest mb-2">
                  Welcome to
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight">
                  Blooming Era Preschools
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#091E3A]/80 font-medium leading-relaxed">
                At Blooming Era, we believe childhood is not a race to finish books, but a beautiful journey of discovery. Our classrooms blend purposeful play, experiential learning, creativity and strong academic foundations — creating a nurturing world where every question matters and every little achievement is celebrated.
              </p>

              <p className="text-base sm:text-lg text-[#091E3A]/80 font-medium leading-relaxed">
                From discovering sounds through stories to exploring numbers through real-life experiences, children learn by doing, thinking and creating. With future-ready concepts, Indian values, global perspectives and compassionate educators, we nurture curious minds, confident personalities and happy childhoods.
              </p>

              {/* Founder Signature Card */}
              <div
                className="rounded-3xl p-6 border-2 border-[#60C8D4]/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(243,250,252,0.95) 0%, rgba(96,200,212,0.20) 25%, rgba(255,255,255,0.95) 50%, rgba(173, 248, 2,0.22) 75%, rgba(254,206,19,0.20) 100%)',
                  backgroundSize: '240% 240%',
                  animation: 'flowyColorDrift 12s ease-in-out infinite',
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#091E3A] text-[#ADF802] flex items-center justify-center font-extrabold text-lg shadow-md flex-shrink-0">
                    MY
                  </div>
                  <div>
                    <p className="font-serif italic text-xl text-[#091E3A] font-bold">
                      Dr. Masuda Yasmin
                    </p>
                    <p className="text-xs font-extrabold text-[#091E3A]/75 uppercase tracking-wider">
                      Founder &amp; Chairperson | Blooming Era Preschools
                    </p>
                  </div>
                </div>
                <div className="sm:text-right">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black shadow-xs">
                    Proudly Indian, Powerfully Global Preschool.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FlowyWaveDivider flip={true} fill="#FFFFFF" accentColor="#60C8D4" />

      {/* ===================================================================== */}
      {/* SECTION 05 — NUMBERS / STATISTICS COUNTER                             */}
      {/* ===================================================================== */}
      <section id="framework-stats" className="py-14 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full glass-pill text-xs font-extrabold uppercase tracking-widest text-[#091E3A] mb-2">
              Curriculum Framework Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E3A] tracking-tight">
              Big Thinking for Little Learners.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS_ITEMS.map((stat, idx) => {
              const IconComp = stat.icon;
              const t = stat.theme;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-[34px] p-7 text-center relative overflow-hidden group transition-all duration-300"
                  style={{
                    background: t.bgGradient,
                    border: `2px solid ${t.borderColor}`,
                    boxShadow: t.shadow,
                  }}
                >
                  {/* Subtle Sand Flow Waves & Grain */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px]">
                    {/* Shifting Sand Sunlight Shimmer */}
                    <div
                      className="absolute -inset-10 animate-sand-shimmer pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 35% 25%, ${t.sandShimmer} 0%, transparent 60%)`,
                      }}
                    />

                    {/* Dune Wave Layer 1 (Drifting forward) */}
                    <svg
                      viewBox="0 0 1000 300"
                      preserveAspectRatio="none"
                      className="absolute -bottom-2 left-0 w-[200%] h-36 animate-sand-forward pointer-events-none"
                      style={{ fill: t.waveColor1 }}
                    >
                      <path d="M 0,140 Q 125,60 250,140 T 500,140 Q 625,60 750,140 T 1000,140 L 1000,300 L 0,300 Z" />
                    </svg>

                    {/* Dune Wave Layer 2 (Drifting reverse) */}
                    <svg
                      viewBox="0 0 1000 300"
                      preserveAspectRatio="none"
                      className="absolute -bottom-4 left-0 w-[200%] h-44 animate-sand-reverse pointer-events-none"
                      style={{ fill: t.waveColor2 }}
                    >
                      <path d="M 0,180 Q 150,230 300,170 T 500,180 Q 650,230 800,170 T 1000,180 L 1000,300 L 0,300 Z" />
                    </svg>

                    {/* Dune Wave Layer 3 (Gentle foreground drift) */}
                    <svg
                      viewBox="0 0 1000 300"
                      preserveAspectRatio="none"
                      className="absolute -bottom-6 left-0 w-[200%] h-28 animate-sand-drift pointer-events-none"
                      style={{ fill: t.waveColor3 }}
                    >
                      <path d="M 0,110 C 100,70 180,150 250,110 C 320,70 400,150 500,110 C 600,70 680,150 750,110 C 820,70 900,150 1000,110 L 1000,300 L 0,300 Z" />
                    </svg>

                    {/* Fine Micro Sand Grain Texture */}
                    <div
                      className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.85) 1px, transparent 1px), radial-gradient(circle at 20% 30%, rgba(0,0,0,0.45) 1px, transparent 1px)`,
                        backgroundSize: '12px 12px, 16px 16px',
                      }}
                    />

                    {/* Top Rim Specular Glint */}
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content (Relative z-10 for sharp contrast) */}
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg border border-white/40 transform group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: t.iconBg, color: t.iconColor }}
                    >
                      <IconComp className="w-7 h-7" />
                    </div>
                    <div
                      className="text-4xl sm:text-5xl font-black tracking-tight mb-2 drop-shadow-xs"
                      style={{ color: t.textColor }}
                    >
                      {stat.number}
                    </div>
                    <h3
                      className="text-base font-extrabold leading-snug"
                      style={{ color: t.textColor }}
                    >
                      {stat.label}
                    </h3>
                    <p
                      className="text-xs font-semibold mt-1"
                      style={{ color: t.subTextColor }}
                    >
                      {stat.sub}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 06 — OUR ACTIVITIES (6 PHOTO DISCOVERY CARDS)                 */}
      {/* ===================================================================== */}
      <section id="activities" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#60C8D4]/25 text-[#091E3A] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#091E3A]" />
              DISCOVER. CREATE. EXPERIENCE.
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              Little Hands. Extraordinary Discoveries.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              Every experience is an opportunity to wonder, experiment, express and grow. At Blooming Era, purposeful activities transform everyday moments into meaningful learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTIVITIES.map((act, idx) => {
              const IconComp = act.icon;
              return (
                <motion.div
                  key={act.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="rounded-[34px] overflow-hidden border-[1.5px] shadow-xl group flex flex-col justify-between transition-all duration-300"
                  style={{
                    background: act.cardBg,
                    backgroundSize: '240% 240%',
                    animation: 'subtleBoxColorShift 14s ease-in-out infinite',
                    borderColor: act.borderColor,
                    boxShadow: `0 18px 40px -8px ${act.glowColor}`,
                  }}
                >
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={act.image}
                        alt={act.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091E3A]/70 via-transparent to-transparent" />
                      <div
                        className="absolute top-4 right-4 w-11 h-11 rounded-2xl flex items-center justify-center text-[#091E3A] shadow-lg border-2 border-white"
                        style={{ backgroundColor: act.accent }}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="absolute bottom-3 left-4 right-4">
                        <span
                          className="inline-block px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-[#091E3A] mb-1"
                          style={{ backgroundColor: act.accent }}
                        >
                          {act.name}
                        </span>
                        <h3 className="text-lg font-extrabold text-white drop-shadow-xs">
                          {act.tagline}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm text-[#091E3A]/80 font-medium leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenTourModal}
              className="btn-lime px-8 py-4 rounded-full text-sm font-extrabold inline-flex items-center gap-2 border-2 border-white shadow-xl group transition-all"
            >
              <span>Discover Our Activities</span>
              <ArrowRight className="w-4 h-4 text-[#091E3A] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      <FlowyWaveDivider fill="#091E3A" accentColor="#60C8D4" />

      {/* ===================================================================== */}
      {/* SECTION 07 — LEARNING PROGRAMMES (ARCH-SHAPED INDIAN PRESCHOOL CARDS) */}
      {/* ===================================================================== */}
      <section id="programmes-india" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#091E3A] text-white relative overflow-hidden">
        <div className="ambient-orb w-96 h-96 top-10 left-10 opacity-20" style={{ background: '#60C8D4' }} />
        <div className="ambient-orb w-96 h-96 bottom-10 right-10 opacity-20" style={{ background: '#ADF802' }} />

        {/* Waving Stick Figure Child (STRICTLY HIDDEN ON MOBILE: hidden md:block) */}
        <div className="hidden md:block absolute right-4 sm:right-8 lg:right-16 top-28 sm:top-32 lg:top-36 z-30 pointer-events-auto">
          <WavingChildStickFigure darkMode={true} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest mb-3">
              EVERY AGE. A NEW ADVENTURE.
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Little Explorers. Growing Possibilities.
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-medium">
              Each stage of childhood brings new discoveries. Our thoughtfully designed programmes nurture age-appropriate skills while keeping curiosity, relationships and joyful learning at the heart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {PROGRAMMES_LIST.map((prog, idx) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="rounded-[36px] overflow-hidden flex flex-col justify-between p-4 shadow-2xl group transition-all duration-300 border-2"
                style={{
                  background: `linear-gradient(145deg, ${prog.color}45 0%, rgba(9,30,58,0.92) 35%, rgba(9,30,58,0.98) 60%, ${prog.color}35 100%)`,
                  backgroundSize: '240% 240%',
                  animation: 'flowyColorDrift 10s ease-in-out infinite',
                  animationDelay: `${idx * 1.5}s`,
                  borderColor: prog.accentBorder,
                  boxShadow: `0 18px 40px -10px ${prog.glowColor}`,
                }}
              >
                <div>
                  {/* Arch-Topped Child Image */}
                  <div className="relative h-56 rounded-t-[100px] rounded-b-3xl overflow-hidden border-4 border-white/90 shadow-lg mb-5">
                    <img
                      src={prog.image}
                      alt={prog.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <span
                      className="absolute bottom-3 right-3 px-3.5 py-1 rounded-full text-xs font-black text-[#091E3A] shadow-md"
                      style={{ backgroundColor: prog.color }}
                    >
                      {prog.age}
                    </span>
                  </div>

                  <div className="px-2">
                    <h3 className="text-2xl font-extrabold text-white mb-1">
                      {prog.name}
                    </h3>
                    <p
                      className="text-xs font-extrabold uppercase tracking-wider mb-3 transition-colors"
                      style={{ color: prog.color }}
                    >
                      {prog.tagline}
                    </p>
                    <p className="text-sm text-white/80 font-medium leading-relaxed mb-6">
                      {prog.description}
                    </p>
                  </div>
                </div>

                <div className="px-2 pb-2">
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onOpenTourModal}
                    className="w-full py-3 rounded-full text-xs font-black text-[#091E3A] flex items-center justify-center gap-1.5 shadow-md group/btn transition-all"
                    style={{ backgroundColor: prog.color }}
                  >
                    <span>{prog.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenTourModal}
              className="btn-lime px-8 py-4 rounded-full text-sm font-black inline-flex items-center gap-2 border-2 border-white shadow-xl group transition-all"
            >
              <span>View All Programmes</span>
              <ArrowRight className="w-4 h-4 text-[#091E3A] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      <FlowyWaveDivider flip={true} fill="#091E3A" accentColor="#ADF802" />

      {/* ===================================================================== */}
      {/* SECTION 08 — OUR SIGNATURE LEARNING PHILOSOPHY (KINDERMAGIC PRIMEX)   */}
      {/* ===================================================================== */}
      <section id="philosophy" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest mb-3">
              THE KINDERMAGIC PRIMEX EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              No Heavy Books. More Powerful Learning.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium leading-relaxed">
              Our Kindermagic PrimeX learning approach combines experiential Foundational Literacy and Numeracy, purposeful play, structured activities, discovery labs, real-world projects and age-appropriate worksheets. Children learn through meaningful experiences while teachers observe, guide and document their progress.
            </p>
          </div>

          {/* 5-Step Interactive Flow Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-10">
            {PRIMEX_STEPS.map((st, i) => {
              const isActive = activePrimexStep === i;
              const t = st.theme;
              return (
                <button
                  key={st.name}
                  onClick={() => setActivePrimexStep(i)}
                  className={`p-4 sm:p-5 rounded-3xl text-left transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    isActive
                      ? 'bg-[#091E3A] text-white border-2 border-[#ADF802] shadow-2xl scale-105 ring-4 ring-[#ADF802]/30 z-10'
                      : 'border-2 hover:scale-[1.03]'
                  }`}
                  style={
                    !isActive
                      ? {
                          background: t.bgGradient,
                          borderColor: t.borderColor,
                          boxShadow: t.shadow,
                        }
                      : {}
                  }
                >
                  {/* Inactive Sand Flow Background */}
                  {!isActive && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[22px]">
                      {/* Shifting Sand Sunlight Shimmer */}
                      <div
                        className="absolute -inset-10 animate-sand-shimmer pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at 35% 25%, ${t.sandShimmer} 0%, transparent 60%)`,
                        }}
                      />

                      {/* Dune Wave Layer 1 (Drifting forward) */}
                      <svg
                        viewBox="0 0 1000 300"
                        preserveAspectRatio="none"
                        className="absolute -bottom-2 left-0 w-[200%] h-24 animate-sand-forward pointer-events-none"
                        style={{ fill: t.waveColor1 }}
                      >
                        <path d="M 0,140 Q 125,60 250,140 T 500,140 Q 625,60 750,140 T 1000,140 L 1000,300 L 0,300 Z" />
                      </svg>

                      {/* Dune Wave Layer 2 (Drifting reverse) */}
                      <svg
                        viewBox="0 0 1000 300"
                        preserveAspectRatio="none"
                        className="absolute -bottom-3 left-0 w-[200%] h-28 animate-sand-reverse pointer-events-none"
                        style={{ fill: t.waveColor2 }}
                      >
                        <path d="M 0,180 Q 150,230 300,170 T 500,180 Q 650,230 800,170 T 1000,180 L 1000,300 L 0,300 Z" />
                      </svg>

                      {/* Fine Micro Sand Grain Texture */}
                      <div
                        className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
                        style={{
                          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.85) 1px, transparent 1px), radial-gradient(circle at 20% 30%, rgba(0,0,0,0.45) 1px, transparent 1px)`,
                          backgroundSize: '12px 12px, 16px 16px',
                        }}
                      />

                      {/* Top Rim Specular Glint */}
                      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Button Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-xs font-black px-2.5 py-0.5 rounded-full shadow-xs"
                        style={{
                          backgroundColor: isActive ? st.color : t.pillBg,
                          color: isActive ? '#091E3A' : t.pillText,
                        }}
                      >
                        Step {st.step}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          isActive ? 'text-[#ADF802]' : ''
                        }`}
                        style={!isActive ? { color: t.arrowColor } : {}}
                      />
                    </div>
                    <div>
                      <p
                        className="text-base sm:text-lg font-extrabold tracking-tight"
                        style={!isActive ? { color: t.textColor } : { color: '#FFFFFF' }}
                      >
                        {st.name}
                      </p>
                      <p
                        className="text-xs mt-1 line-clamp-2 font-medium"
                        style={!isActive ? { color: t.subTextColor } : { color: 'rgba(255, 255, 255, 0.85)' }}
                      >
                        {st.summary}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={PRIMEX_STEPS[activePrimexStep].name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="rounded-[36px] p-6 sm:p-10 border-2 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${PRIMEX_STEPS[activePrimexStep].color}26 0%, ${PRIMEX_STEPS[activePrimexStep].color}0d 25%, #ffffff 50%, ${PRIMEX_STEPS[activePrimexStep].color}16 75%, ${PRIMEX_STEPS[activePrimexStep].color}32 100%)`,
                backgroundSize: '240% 240%',
                animation: 'flowyColorDrift 10s ease-in-out infinite',
                borderColor: `${PRIMEX_STEPS[activePrimexStep].color}70`,
                boxShadow: `0 24px 50px -10px ${PRIMEX_STEPS[activePrimexStep].color}40`,
              }}
            >
              <div className="lg:col-span-6 space-y-4">
                <span
                  className="inline-block px-4 py-1 rounded-full text-xs font-black text-[#091E3A]"
                  style={{ backgroundColor: PRIMEX_STEPS[activePrimexStep].color }}
                >
                  STAGE {PRIMEX_STEPS[activePrimexStep].step} • {PRIMEX_STEPS[activePrimexStep].name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#091E3A]">
                  {PRIMEX_STEPS[activePrimexStep].summary}
                </h3>
                <p className="text-base text-[#091E3A]/80 font-medium leading-relaxed">
                  {PRIMEX_STEPS[activePrimexStep].detail}
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenTourModal}
                    className="btn-lime px-7 py-3.5 rounded-full text-xs font-black inline-flex items-center gap-2 border-2 border-white shadow-md"
                  >
                    <span>Explore Our Curriculum</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden h-64 sm:h-80 border-4 border-white shadow-xl">
                  <img
                    src={PRIMEX_STEPS[activePrimexStep].image}
                    alt={PRIMEX_STEPS[activePrimexStep].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 09 — FUTURE-READY LEARNING (21ST-CENTURY FOUNDATIONS)         */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white/70 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#60C8D4]/25 text-[#091E3A] text-xs font-extrabold uppercase tracking-widest mb-3">
              21ST-CENTURY FOUNDATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              The Future Begins With Curiosity.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              Tomorrow&apos;s world will need creative thinkers, compassionate leaders and confident problem-solvers. We begin nurturing these capabilities through developmentally appropriate experiences, without rushing childhood.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {FUTURE_SKILLS.map((skill, idx) => {
              const IconComp = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="rounded-[30px] p-5 border-2 shadow-lg flex items-start gap-4 transition-all duration-300"
                  style={{
                    background: skill.bgGradient,
                    backgroundSize: '240% 240%',
                    animation: 'subtleBoxColorShift 12s ease-in-out infinite',
                    borderColor: skill.borderColor,
                    boxShadow: `0 14px 30px -8px ${skill.accent}30`,
                  }}
                >
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white shadow-md relative">
                    <img src={skill.image} alt={skill.title} className="w-full h-full object-cover" />
                    <div
                      className="absolute bottom-1 right-1 w-6 h-6 rounded-lg flex items-center justify-center text-[#091E3A] shadow-xs"
                      style={{ backgroundColor: skill.accent }}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#091E3A] mb-1">{skill.title}</h3>
                    <p className="text-xs sm:text-sm text-[#091E3A]/75 font-medium leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenTourModal}
              className="btn-turquoise px-8 py-4 rounded-full text-sm font-extrabold inline-flex items-center gap-2 border-2 border-white shadow-lg group transition-all"
            >
              <span>Discover Future-Ready Learning</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 10 — HOLISTIC CHILD DEVELOPMENT (8 INTERCONNECTED DIMENSIONS) */}
      {/* ===================================================================== */}
      <section id="holistic" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest mb-3">
              BEYOND ACADEMICS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              We Don&apos;t Just Track Marks. We Celebrate Growth.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              Every child develops in beautifully interconnected ways. Our Holistic Progress Approach recognises academic learning alongside confidence, communication, creativity, emotional wellbeing, physical development and independence.
            </p>
          </div>

          {/* Mobile View: Dimensions slide box appears directly below its respective step */}
          <div className="block lg:hidden space-y-3">
            {HOLISTIC_DIMENSIONS.map((dim, idx) => {
              const isActive = activeDimension === idx;
              const dimColors = ['#ADF802', '#02C9FE', '#FECE13', '#FA0672', '#9B51E0', '#FF8A3D', '#22c55e', '#3B82F6'];
              const dimColor = dimColors[idx % dimColors.length];
              return (
                <div key={dim.id} className="space-y-3">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveDimension(idx)}
                    className={`w-full p-4 rounded-2xl text-left transition-all border-2 flex items-center justify-between gap-3 shadow-xs ${
                      isActive ? 'shadow-xl' : ''
                    }`}
                    style={{
                      backgroundColor: isActive ? '#091E3A' : `${dimColor}18`,
                      borderColor: isActive ? '#091E3A' : `${dimColor}60`,
                      color: isActive ? '#FFFFFF' : '#091E3A',
                    }}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span
                        className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs text-[#091E3A] flex-shrink-0 shadow-xs"
                        style={{ backgroundColor: dimColor }}
                      >
                        0{dim.id}
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold leading-snug truncate">
                        {dim.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${
                        isActive ? 'rotate-180 text-[#ADF802]' : 'text-[#091E3A]/50'
                      }`}
                    />
                  </motion.button>

                  {/* Dimension Slide Box - Appears directly below its respective active step */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          className="rounded-3xl p-5 border-2 shadow-xl space-y-4 transition-all duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${dimColor}24 0%, ${dimColor}0d 25%, #ffffff 50%, ${dimColor}18 75%, ${dimColor}30 100%)`,
                            backgroundSize: '250% 250%',
                            animation: 'flowyColorDrift 10s ease-in-out infinite',
                            borderColor: `${dimColor}70`,
                            boxShadow: `0 20px 45px -8px ${dimColor}35`,
                          }}
                        >
                          <div className="relative h-52 rounded-2xl overflow-hidden border-2 border-white shadow-inner">
                            <img
                              src={dim.image}
                              alt={dim.title}
                              className="w-full h-full object-cover"
                            />
                            <div
                              className="absolute top-3 left-3 px-3 py-1 rounded-full text-[#091E3A] text-xs font-black shadow-sm"
                              style={{ backgroundColor: dimColor }}
                            >
                              Dimension 0{dim.id} of 08
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-extrabold text-[#091E3A] mb-1.5">
                              {dim.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#091E3A]/80 font-medium leading-relaxed">
                              {dim.detail}
                            </p>
                          </div>
                          <div className="pt-3 border-t border-[#091E3A]/10 flex items-center justify-between">
                            <span className="text-[11px] font-black text-[#091E3A]">
                              Every Milestone Matters.
                            </span>
                            <motion.button
                              whileHover={{ scale: 1.05, x: 2 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={onOpenTourModal}
                              className="text-xs font-extrabold text-[#091E3A] underline hover:text-[#60C8D4]"
                            >
                              Learn More →
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Desktop View: Side-by-Side 8 Pills + Photo Card */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
            {/* 8 Dimension Pills */}
            <div className="col-span-7 grid grid-cols-2 gap-3.5">
              {HOLISTIC_DIMENSIONS.map((dim, idx) => {
                const dimColors = ['#ADF802', '#02C9FE', '#FECE13', '#FA0672', '#9B51E0', '#FF8A3D', '#22c55e', '#3B82F6'];
                const dimColor = dimColors[idx % dimColors.length];
                const isSelected = activeDimension === idx;
                return (
                  <motion.button
                    key={dim.id}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveDimension(idx)}
                    className={`p-4 rounded-2xl text-left transition-all border-2 flex items-center gap-3.5 shadow-xs ${
                      isSelected ? 'shadow-xl scale-102' : ''
                    }`}
                    style={{
                      backgroundColor: isSelected ? '#091E3A' : `${dimColor}18`,
                      borderColor: isSelected ? '#091E3A' : `${dimColor}60`,
                      color: isSelected ? '#FFFFFF' : '#091E3A',
                    }}
                  >
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs text-[#091E3A] flex-shrink-0 shadow-xs"
                      style={{ backgroundColor: dimColor }}
                    >
                      0{dim.id}
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold leading-snug">
                      {dim.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Active Dimension Photo Card */}
            <div className="col-span-5">
              {(() => {
                const activeDimColors = ['#ADF802', '#02C9FE', '#FECE13', '#FA0672', '#9B51E0', '#FF8A3D', '#22c55e', '#3B82F6'];
                const activeDimColor = activeDimColors[activeDimension % activeDimColors.length];
                return (
                  <div
                    className="rounded-[36px] p-6 border-2 shadow-2xl min-h-[460px] flex flex-col justify-between transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${activeDimColor}24 0%, ${activeDimColor}0d 25%, #ffffff 50%, ${activeDimColor}18 75%, ${activeDimColor}30 100%)`,
                      backgroundSize: '250% 250%',
                      animation: 'flowyColorDrift 10s ease-in-out infinite',
                      borderColor: `${activeDimColor}70`,
                      boxShadow: `0 24px 50px -10px ${activeDimColor}35`,
                    }}
                  >
                    <div>
                      <div className="relative h-64 rounded-3xl overflow-hidden mb-5 border-2 border-white shadow-inner">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={HOLISTIC_DIMENSIONS[activeDimension].id}
                            src={HOLISTIC_DIMENSIONS[activeDimension].image}
                            alt={HOLISTIC_DIMENSIONS[activeDimension].title}
                            initial={{ opacity: 0, scale: 1.04 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.45 }}
                            className="w-full h-full object-cover"
                          />
                        </AnimatePresence>
                        <div
                          className="absolute top-3 left-3 px-3 py-1 rounded-full text-[#091E3A] text-xs font-black shadow-md z-10"
                          style={{ backgroundColor: activeDimColor }}
                        >
                          Dimension 0{HOLISTIC_DIMENSIONS[activeDimension].id} of 08
                        </div>
                      </div>
                      {/* Stable min-height container for title & detail to eliminate scroll clamp / jitter */}
                      <div className="min-h-[112px] flex flex-col justify-start">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={HOLISTIC_DIMENSIONS[activeDimension].id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h3 className="text-xl font-extrabold text-[#091E3A] mb-2 leading-snug">
                              {HOLISTIC_DIMENSIONS[activeDimension].title}
                            </h3>
                            <p className="text-sm text-[#091E3A]/75 font-medium mb-4 leading-relaxed">
                              {HOLISTIC_DIMENSIONS[activeDimension].detail}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-[#091E3A]/10 flex items-center justify-between">
                      <span className="text-xs font-black text-[#091E3A]">
                        Every Milestone Matters. Every Child Matters.
                      </span>
                      <button
                        onClick={onOpenTourModal}
                        className="text-xs font-extrabold text-[#091E3A] underline hover:text-[#60C8D4]"
                      >
                        Understand Holistic Progress →
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 11 — MEET OUR LEADERSHIP                                      */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white/80 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#60C8D4]/25 text-[#091E3A] text-xs font-extrabold uppercase tracking-widest mb-3">
              THE VISIONARIES BEHIND THE BLOOM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              Great Childhoods Begin With a Greater Vision.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              Blooming Era is guided by a shared commitment to meaningful early education, academic innovation, thoughtful leadership and responsible growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((leader, idx) => {
              const isFlipped = flippedLeader === idx;
              return (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -8, transition: { duration: 0.25, delay: 0 } }}
                  onClick={() => setFlippedLeader(isFlipped ? null : idx)}
                  className="group relative rounded-[28px] sm:rounded-[32px] aspect-square w-full max-w-[340px] sm:max-w-none mx-auto cursor-pointer"
                >
                  {/* CARD 2: Current Details Card (Hidden Behind, Revealed on Hover / Flip) */}
                  <div
                    className={`absolute inset-0 w-full h-full backdrop-blur-2xl rounded-[28px] sm:rounded-[32px] p-5 sm:p-5.5 border-2 shadow-xl flex flex-col justify-between transition-all duration-300 ease-out overflow-hidden ${
                      isFlipped
                        ? 'opacity-100 scale-100 pointer-events-auto z-20'
                        : 'opacity-0 scale-95 pointer-events-none z-0 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto group-hover:z-20'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${leader.accent === '#091E3A' ? '#60C8D4' : leader.accent}20 0%, #ffffff 40%, #ffffff 60%, ${leader.accent === '#091E3A' ? '#ADF802' : leader.accent}18 100%)`,
                      backgroundSize: '220% 220%',
                      animation: 'flowyColorDrift 9s ease-in-out infinite',
                      borderColor: `${leader.accent === '#091E3A' ? '#60C8D4' : leader.accent}55`,
                      boxShadow: `0 18px 40px -8px ${leader.accent === '#091E3A' ? '#60C8D4' : leader.accent}35`,
                    }}
                  >
                    {/* Subtle ambient brand tint */}
                    <div
                      className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
                      style={{ backgroundColor: leader.accent }}
                    />

                    <div>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div
                          className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-base sm:text-lg font-black shadow-md border-2 border-white"
                          style={{
                            backgroundColor: leader.accent,
                            color: leader.accent === '#091E3A' ? '#FFFFFF' : '#091E3A'
                          }}
                        >
                          {leader.initials}
                        </div>
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#091E3A]/5 text-[#091E3A] border border-[#091E3A]/10">
                          {leader.badge}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#091E3A] leading-tight">
                        {leader.name}
                      </h3>
                      <p
                        className="text-[11px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 mb-2"
                        style={{
                          color: leader.accent === '#fece13' ? '#B8860B' : leader.accent === '#091E3A' ? '#091E3A' : leader.accent
                        }}
                      >
                        {leader.role}
                      </p>
                      <p className="text-xs sm:text-[13px] text-[#091E3A]/80 font-medium leading-relaxed">
                        {leader.bio}
                      </p>
                    </div>

                    <div className="pt-2 sm:pt-2.5 border-t border-[#091E3A]/10 flex items-center justify-between">
                      <span className="text-[10px] sm:text-[11px] font-black text-[#091E3A]/70">
                        Blooming Era Leadership
                      </span>
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: leader.accent }}
                      />
                    </div>
                  </div>

                  {/* CARD 1: Full-Photo Front Card (Covers the card, fades out on hover / flip) */}
                  <div
                    className={`absolute inset-0 w-full h-full rounded-[28px] sm:rounded-[32px] overflow-hidden border-2 border-white shadow-xl transition-all duration-300 ease-out bg-[#091E3A] ${
                      isFlipped
                        ? 'opacity-0 scale-95 pointer-events-none z-0'
                        : 'opacity-100 scale-100 pointer-events-auto z-10 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none group-hover:z-0'
                    }`}
                  >
                    {/* Full Box Photo */}
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Badge */}
                    <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase text-[#091E3A] shadow-md border border-white">
                        {leader.badge}
                      </span>
                    </div>

                    {/* Subtle Gradient Vignette at Bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#091E3A] via-[#091E3A]/60 to-transparent z-10" />

                    {/* Bottom Info: Just Name and Designation + Bio Pill */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-20">
                      <div className="flex items-end justify-between gap-2.5">
                        <div className="min-w-0 pr-1">
                          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
                            {leader.name}
                          </h3>
                          <p
                            className="text-[11px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 drop-shadow-sm"
                            style={{
                              color: leader.accent === '#091E3A' ? '#60C8D4' : leader.accent
                            }}
                          >
                            {leader.role}
                          </p>
                        </div>
                        <div className="shrink-0 mb-0.5">
                          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30 whitespace-nowrap shadow-sm">
                            <span>Bio</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 12 — FRANCHISE OPPORTUNITY                                    */}
      {/* ===================================================================== */}
      <section id="franchise-opportunity" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[40px] bg-gradient-to-br from-[#091E3A] via-[#0D2B52] to-[#091E3A] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border-4 border-white relative overflow-hidden">
            <div className="ambient-orb w-96 h-96 -top-20 -right-20 opacity-30" style={{ background: '#ADF802' }} />
            <div className="ambient-orb w-96 h-96 -bottom-20 -left-20 opacity-25" style={{ background: '#60C8D4' }} />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest">
                  BUILD A BUSINESS THAT BUILDS THE FUTURE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  A Preschool With Purpose.{" "}
                  <span className="text-[#ADF802]">A Business With Possibilities.</span>
                </h2>
                <p className="text-base sm:text-lg text-white/85 font-medium leading-relaxed">
                  Why open just another preschool when you can introduce a distinctive learning experience to your city? Blooming Era brings together an innovative No-Book curriculum, strong academic foundations, structured franchise support and a cost-conscious school development model — helping entrepreneurs build meaningful educational enterprises.
                </p>

                {/* 6 Franchise Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Distinctive Educational Concept",
                    "Research-Informed Curriculum",
                    "360° Franchise Support",
                    "Cost-Conscious Setup Options",
                    "Teacher Training & Academic Guidance",
                    "Marketing & Admissions Assistance"
                  ].map((item, pIdx) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.03, x: 2 }}
                      className="flex items-center gap-2.5 bg-gradient-to-r from-white/15 via-white/10 to-[#ADF802]/15 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 hover:border-[#ADF802]/60 transition-all shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ADF802] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-white">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Desktop Button inside Left Column */}
                <div className="pt-2 hidden lg:block">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onOpenTourModal}
                    className="btn-lime px-8 py-4 rounded-full text-sm font-black inline-flex items-center gap-2 border-2 border-white shadow-xl group transition-all"
                  >
                    <span>Own a Blooming Era Preschool</span>
                    <ArrowRight className="w-4 h-4 text-[#091E3A] group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>

              {/* Right Investment Highlight Glass Card */}
              <div className="lg:col-span-5 space-y-6">
                <div
                  className="rounded-[32px] border-2 border-white/40 p-7 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(173, 248, 2,0.14) 35%, rgba(96,200,212,0.14) 70%, rgba(255,255,255,0.16) 100%)',
                    backgroundSize: '240% 240%',
                    animation: 'flowyColorDrift 11s ease-in-out infinite',
                  }}
                >
                  {/* Subtle brand glow orbs */}
                  <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#ADF802]/25 blur-3xl pointer-events-none animate-pulse" />
                  <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#60C8D4]/25 blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

                  <div className="rounded-2xl overflow-hidden h-44 border-2 border-white/80 shadow-md relative z-10">
                    <img
                      src={CHILD_PHOTOS.classroomDrawing}
                      alt="Blooming Era Preschool Franchise"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-[#ADF802] to-[#a3e83b] text-[#091E3A] shadow-lg border border-white/40 relative z-10">
                    <p className="text-xs font-extrabold uppercase tracking-wider opacity-85">
                      Investment Highlight
                    </p>
                    <p className="text-2xl sm:text-3xl font-black tracking-tight mt-0.5">
                      Franchise Fee Starting at ₹2.50 Lakh
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/12 border border-white/25 backdrop-blur-md relative z-10">
                    <p className="text-xs font-bold text-[#60C8D4] uppercase tracking-wider">
                      Indicative Setup Investment
                    </p>
                    <p className="text-lg font-extrabold text-white mt-0.5">
                      ₹5–25 Lakh
                    </p>
                    <p className="text-xs text-white/80 mt-1">
                      Depending on space, infrastructure and location.
                    </p>
                  </div>
                </div>

                {/* Mobile Button placed below the investment div */}
                <div className="block lg:hidden pt-2 text-center">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onOpenTourModal}
                    className="btn-lime w-full sm:w-auto px-8 py-4 rounded-full text-sm font-black inline-flex items-center justify-center gap-2 border-2 border-white shadow-xl group transition-all"
                  >
                    <span>Own a Blooming Era Preschool</span>
                    <ArrowRight className="w-4 h-4 text-[#091E3A] group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 13 — PARENT TESTIMONIALS                                      */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest mb-3">
              REAL VOICES. MEANINGFUL EXPERIENCES.
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              The Most Beautiful Stories Come From Parents.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              From the first confident goodbye to the joy of a new discovery, every child&apos;s journey is special. Discover what Blooming Era families have to say about their experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {PARENT_STORIES.map((story, idx) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[32px] overflow-hidden border-2 shadow-xl flex flex-col justify-between transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${story.color}24 0%, ${story.color}0e 25%, #ffffff 50%, ${story.color}16 75%, ${story.color}28 100%)`,
                  backgroundSize: '250% 250%',
                  animation: 'flowyColorDrift 11s ease-in-out infinite',
                  animationDelay: `${idx * 1.5}s`,
                  borderColor: `${story.color}60`,
                  boxShadow: `0 16px 36px -8px ${story.color}35`,
                }}
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                    <span
                      className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase text-[#091E3A] shadow-md"
                      style={{ backgroundColor: story.color }}
                    >
                      {story.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-[#091E3A] mb-1">{story.title}</h3>
                    <p className="text-xs font-bold text-[#60C8D4] uppercase tracking-wider mb-3">
                      {story.subtitle}
                    </p>
                    <p className="text-sm text-[#091E3A]/80 font-medium leading-relaxed">
                      {story.narrative}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenTourModal}
              className="btn-turquoise px-7 py-3.5 rounded-full text-xs font-black inline-flex items-center gap-2 border-2 border-white shadow-md group transition-all"
            >
              <span>Hear From Our Parents</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 14 — OUR EVENTS                                               */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white/75 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#60C8D4]/25 text-[#091E3A] text-xs font-extrabold uppercase tracking-widest mb-3">
              MOMENTS THAT MAKE CHILDHOOD MEMORABLE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              Beyond the Classroom. Into Life.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              Our celebrations, learning showcases and community experiences bring families, educators and children together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENTS_LIST.map((ev, idx) => (
              <motion.div
                key={ev.title}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-[30px] overflow-hidden border-2 shadow-lg transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${ev.color}25 0%, ${ev.color}10 25%, #ffffff 50%, ${ev.color}18 75%, ${ev.color}30 100%)`,
                  backgroundSize: '250% 250%',
                  animation: 'flowyColorDrift 9s ease-in-out infinite',
                  animationDelay: `${idx * 1.4}s`,
                  borderColor: `${ev.color}70`,
                  boxShadow: `0 16px 36px -8px ${ev.color}45`,
                }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-[#091E3A] text-[10px] font-black shadow-md"
                    style={{ backgroundColor: ev.color }}
                  >
                    {ev.badge}
                  </span>
                </div>
                <div className="p-5">
                  <p
                    className="text-[11px] font-bold uppercase tracking-wider mb-1"
                    style={{ color: ev.color === '#fece13' ? '#B8860B' : ev.color }}
                  >
                    {ev.date}
                  </p>
                  <h3 className="text-lg font-extrabold text-[#091E3A] mb-2">{ev.title}</h3>
                  <p className="text-xs text-[#091E3A]/75 font-medium leading-relaxed">
                    {ev.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 15 — LATEST BLOG (THE BLOOMING JOURNAL)                       */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest mb-3">
              THE BLOOMING JOURNAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              Little Insights. Lifelong Impact.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              Explore thoughtful perspectives on childhood, parenting, early education and the skills that help young learners flourish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {BLOG_POSTS.map((post, idx) => (
              <motion.article
                key={post.title}
                whileHover={{ y: -8, scale: 1.01 }}
                className="rounded-[32px] overflow-hidden border-2 shadow-xl flex flex-col justify-between transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${post.color}26 0%, ${post.color}12 25%, #ffffff 50%, ${post.color}18 75%, ${post.color}30 100%)`,
                  backgroundSize: '250% 250%',
                  animation: 'flowyColorDrift 10s ease-in-out infinite',
                  animationDelay: `${idx * 1.6}s`,
                  borderColor: `${post.color}70`,
                  boxShadow: `0 18px 40px -8px ${post.color}40`,
                }}
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <span
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-[#091E3A] text-[10px] font-black shadow-md"
                      style={{ backgroundColor: post.color }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold text-[#091E3A]/50 mb-1">{post.readTime}</p>
                    <h3 className="text-xl font-extrabold text-[#091E3A] mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#091E3A]/75 font-medium leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <motion.button
                    whileHover={{ scale: 1.04, x: 2 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onOpenTourModal}
                    className="text-xs font-black text-[#091E3A] inline-flex items-center gap-1.5 hover:text-[#60C8D4] group/link"
                  >
                    <span>Explore More Insights</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 16 — PHOTO GALLERY (A PEEK INTO OUR WORLD)                    */}
      {/* ===================================================================== */}
      <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#60C8D4]/25 text-[#091E3A] text-xs font-extrabold uppercase tracking-widest mb-3">
                A PEEK INTO OUR WORLD
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight">
                See the Wonder. Feel the Joy.
              </h2>
              <p className="text-base text-[#091E3A]/75 font-medium mt-2">
                Real smiles. Real friendships. Real discoveries. Explore beautiful moments from life at Blooming Era.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {["All", "Classroom", "Maker Studio", "Storyverse", "Wonder Lab", "Nature"].map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all ${
                    galleryFilter === cat
                      ? 'bg-[#091E3A] text-[#ADF802] shadow-md'
                      : 'glass-pill text-[#091E3A] hover:bg-[#ADF802]/30'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[210px]">
            {filteredGallery.map((item, gIdx) => {
              const galleryColors = ['#ADF802', '#60C8D4', '#fece13', '#FF6B8B', '#9B51E0'];
              const gColor = galleryColors[gIdx % galleryColors.length];
              return (
                <motion.div
                  key={item.id}
                  layout
                  whileHover={{ scale: 1.02, y: -4 }}
                  onClick={() => setLightboxImage(item)}
                  className={`relative rounded-[28px] overflow-hidden border-2 shadow-xl cursor-pointer group transition-all duration-300 ${item.span}`}
                  style={{
                    borderColor: `${gColor}80`,
                    boxShadow: `0 16px 36px -10px ${gColor}45`,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091E3A]/80 via-transparent to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <span
                        className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full text-[#091E3A] shadow-sm"
                        style={{ backgroundColor: gColor }}
                      >
                        {item.category}
                      </span>
                      <p className="text-sm font-extrabold mt-1 drop-shadow-xs">{item.title}</p>
                    </div>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shadow-md border border-white/60 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${gColor}cc` }}
                    >
                      <Eye className="w-4 h-4 text-[#091E3A]" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flowy Wave Divider into Section 17 */}
      <FlowyWaveDivider flip={true} fill="#FFFFFF" accentColor="#ADF802" />

      {/* ===================================================================== */}
      {/* SECTION 17 — VIDEO BYTES (CHILDHOOD IN MOTION)                        */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest mb-3">
              CHILDHOOD IN MOTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight mb-4">
              Some Moments Are Better Felt Than Told.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/75 font-medium">
              From joyful classroom discoveries to caring teacher-child relationships, experience the little moments that make Blooming Era special.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEO_BYTES.map((vid, vIdx) => (
              <motion.div
                key={vid.id}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveVideoModal(vid)}
                className="rounded-[32px] overflow-hidden border-2 shadow-xl cursor-pointer group transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${vid.color}25 0%, ${vid.color}0d 25%, #ffffff 50%, ${vid.color}16 75%, ${vid.color}28 100%)`,
                  backgroundSize: '250% 250%',
                  animation: 'flowyColorDrift 10s ease-in-out infinite',
                  animationDelay: `${vIdx * 1.5}s`,
                  borderColor: `${vid.color}65`,
                  boxShadow: `0 16px 36px -8px ${vid.color}40`,
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vid.image}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#091E3A]/35 group-hover:bg-[#091E3A]/20 transition-colors flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full text-[#091E3A] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border-2 border-white"
                      style={{ backgroundColor: vid.color }}
                    >
                      <Play className="w-6 h-6 fill-[#091E3A] ml-0.5" />
                    </div>
                  </div>
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-[#091E3A] text-[10px] font-black shadow-sm"
                    style={{ backgroundColor: vid.color }}
                  >
                    {vid.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-[#091E3A]/85 text-white text-[10px] font-bold">
                    {vid.duration}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-extrabold text-[#091E3A] mb-1.5">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-[#091E3A]/70 font-medium leading-relaxed">
                    {vid.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 18 — FINAL ADMISSIONS CTA                                     */}
      {/* ===================================================================== */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-[44px] p-8 sm:p-14 text-[#091E3A] shadow-2xl border-4 border-white relative overflow-hidden text-center"
            style={{
              background: 'linear-gradient(135deg, #ADF802 0%, #fae244 25%, #60C8D4 50%, #ADF802 75%, #fae244 100%)',
              backgroundSize: '240% 240%',
              animation: 'flowyColorDrift 10s ease-in-out infinite',
            }}
          >
            {/* Ambient Floating Orbs inside Final CTA */}
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/35 blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#60C8D4]/30 blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#091E3A] text-[#ADF802] text-xs font-black uppercase tracking-widest mb-4">
              THEIR FIRST SCHOOL. A BIG DECISION.
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#091E3A] tracking-tight mb-4">
              Let Their Childhood Bloom Beautifully.
            </h2>
            <p className="text-base sm:text-lg text-[#091E3A]/85 font-semibold max-w-2xl mx-auto mb-8">
              Discover a preschool that celebrates curiosity, nurtures individuality and builds strong foundations for the years ahead.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenTourModal}
                className="px-8 py-4 rounded-full bg-[#091E3A] text-white hover:bg-[#13325C] text-sm font-black inline-flex items-center gap-2 shadow-xl transition-all group"
              >
                <Calendar className="w-4 h-4 text-[#ADF802] group-hover:rotate-6 transition-transform" />
                <span>Book a School Visit</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenTourModal}
                className="px-8 py-4 rounded-full bg-white text-[#091E3A] hover:bg-white/95 text-sm font-black inline-flex items-center gap-2 shadow-xl transition-all group"
              >
                <span>Enquire for Admissions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 19 — WEBSITE FOOTER                                           */}
      {/* ===================================================================== */}
      {showFooter && (
        <footer className="bg-[#091E3A] text-white pt-16 pb-12 px-4 sm:px-6 border-t-4 border-[#ADF802]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white p-1">
                    <img src="/logo.jpeg" alt="Blooming Era Preschools" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Blooming Era Preschools</h3>
                    <p className="text-xs font-bold text-[#ADF802]">Proudly Indian, Powerfully Global Preschool.</p>
                  </div>
                </div>
                <p className="text-sm text-white/75 leading-relaxed max-w-md">
                  Where joyful childhood experiences meet meaningful learning, strong foundations and possibilities for the future.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#ADF802] text-xs font-black tracking-wider">
                  <span>🌸 The Future Blooms Here.</span>
                </div>
              </div>

              <div className="lg:col-span-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#60C8D4] mb-4">
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-2.5 text-sm text-white/80 font-medium">
                  {["Home", "About Us", "Our Programmes", "Curriculum", "Admissions", "Gallery", "Franchise", "Blog", "Careers", "Contact"].map((link) => (
                    <a key={link} href="#welcome" className="hover:text-[#ADF802] transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#60C8D4] mb-4">
                  Connect With Us
                </h4>
                <a href="tel:+919647974093" className="flex items-center gap-2.5 text-sm text-white hover:text-[#ADF802] font-bold">
                  <Phone className="w-4 h-4 text-[#ADF802]" />
                  <span>+91 96479 74093</span>
                </a>
                <a href="mailto:info@bloomingera.com" className="flex items-center gap-2.5 text-sm text-white/80 hover:text-[#ADF802]">
                  <Mail className="w-4 h-4 text-[#60C8D4]" />
                  <span>info@bloomingera.com</span>
                </a>
                <p className="text-xs text-white/65 pt-2">
                  Dr. Masuda Yasmin — Founder &amp; Chairperson
                </p>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
              <p>© 2026 Blooming Era Preschools. All rights reserved. • Proudly Indian, Powerfully Global.</p>
              <p className="text-[#ADF802] font-bold">The Future Blooms Here.</p>
            </div>
          </div>
        </footer>
      )}

      {/* Lightbox Modal for Gallery */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-[#091E3A]/85 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full rounded-[32px] overflow-hidden bg-white border-4 border-white shadow-2xl"
            >
              <div className="relative h-[420px]">
                <img src={lightboxImage.image} alt={lightboxImage.title} className="w-full h-full object-cover" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#091E3A] text-white flex items-center justify-center shadow-lg"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-[#ADF802] text-[#091E3A]">
                    {lightboxImage.category}
                  </span>
                  <h4 className="text-xl font-extrabold text-[#091E3A] mt-2">{lightboxImage.title}</h4>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setLightboxImage(null);
                    onOpenTourModal();
                  }}
                  className="btn-lime px-5 py-2.5 rounded-full text-xs font-black shadow-md"
                >
                  Book a School Tour
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Story Byte Modal */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoModal(null)}
            className="fixed inset-0 z-50 bg-[#091E3A]/85 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full rounded-[32px] overflow-hidden bg-white border-4 border-white shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={activeVideoModal.image} alt={activeVideoModal.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091E3A] via-[#091E3A]/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black mb-2 shadow-xs">
                    {activeVideoModal.tag} • {activeVideoModal.duration}
                  </span>
                  <h3 className="text-2xl font-extrabold">{activeVideoModal.title}</h3>
                  <p className="text-sm text-white/85 mt-1">{activeVideoModal.caption}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveVideoModal(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#091E3A] text-white flex items-center justify-center shadow-lg"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
              <div className="p-6 flex items-center justify-between bg-[#F3FAFC]">
                <span className="text-xs font-bold text-[#091E3A]/75">
                  Experience Blooming Era in person with your child
                </span>
                <motion.button
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveVideoModal(null);
                    onOpenTourModal();
                  }}
                  className="btn-lime px-6 py-2.5 rounded-full text-xs font-black shadow-md"
                >
                  Book a School Visit
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
