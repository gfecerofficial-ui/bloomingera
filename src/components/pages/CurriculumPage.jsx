import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, Sparkles, CheckCircle2, Layers, Brain, Eye, Palette, Music,
  Leaf, Globe2, Compass, Rocket, Code2, Bot, Coins, Lightbulb, Users,
  ArrowRight, ShieldCheck, Microscope
} from 'lucide-react';
import { FlowyWaveDivider, PageHeader, CHILD_PHOTOS } from './shared';

const EIGHT_DIMENSIONS = [
  {
    num: "01",
    title: "Experiential Foundational Literacy",
    desc: "Storytelling, phonics readiness, active listening, vocabulary enrichment, and meaningful reading and early mark-making experiences.",
    icon: BookOpen,
    accent: "#60C8D4"
  },
  {
    num: "02",
    title: "Experiential Foundational Numeracy",
    desc: "Counting, natural patterns, geometric shapes, hands-on measurement, logical thinking and mathematical problem-solving.",
    icon: Brain,
    accent: "#ADF802"
  },
  {
    num: "03",
    title: "Cognitive & Executive Functions",
    desc: "Sustained attention, working memory, flexible thinking, cause-and-effect reasoning, emotional self-control and joyful persistence.",
    icon: Sparkles,
    accent: "#60C8D4"
  },
  {
    num: "04",
    title: "Physical & Sensory Development",
    desc: "Gross motor coordination, fine-finger dexterity, practical-life skills, spatial navigation and rich multisensory exploration.",
    icon: Compass,
    accent: "#ADF802"
  },
  {
    num: "05",
    title: "Emotional & Social Intelligence",
    desc: "Self-awareness, empathy for peers, clear communication, collaborative cooperation, and unshakeable self-confidence.",
    icon: Users,
    accent: "#60C8D4"
  },
  {
    num: "06",
    title: "Creative & Cultural Expression",
    desc: "Open-ended art, rhythm, music, drama, boundless imagination, living Indian heritage, and global cultural awareness.",
    icon: Palette,
    accent: "#ADF802"
  },
  {
    num: "07",
    title: "Environmental & Ethical Development",
    desc: "Nature appreciation, living creature empathy, civic responsibility, kindness, and intuitive sustainable living habits.",
    icon: Leaf,
    accent: "#60C8D4"
  },
  {
    num: "08",
    title: "Future-Ready Capabilities",
    desc: "Human-centric design thinking, early scientific inquiry, logical sequencing, and collaborative problem-solving.",
    icon: Rocket,
    accent: "#ADF802"
  }
];

const DISCOVERY_SPACES = [
  {
    name: "The Wonder Lab",
    focus: "Scientific curiosity & simple experimentation",
    desc: "Magnifying glasses, light tables, floating objects and tactile science probes where hypothesis begins with 'What happens if...?'",
    photo: CHILD_PHOTOS.natureExplorerChild
  },
  {
    name: "The Maker Lab",
    focus: "Design, construction, art & early engineering",
    desc: "Open-ended natural wooden blocks, geometric connecting pieces, and upcycled materials to bring blueprints to life.",
    photo: CHILD_PHOTOS.woodenBlocksChild
  },
  {
    name: "Math Discovery Zone",
    focus: "Experiential number sense & reasoning",
    desc: "Pretend grocery counters, balance scales, abacus frames and real counting counters that make mathematics a tactile game.",
    photo: CHILD_PHOTOS.toddlerBeadMaze
  },
  {
    name: "Language & Story Studio",
    focus: "Listening, vocabulary, stories & expression",
    desc: "Cozy reading circles, finger-puppet stages, audio story corners, and picture walks that nurture fluent, fearless communicators.",
    photo: CHILD_PHOTOS.toddlerLaughingBook
  },
  {
    name: "Little Earth Lab",
    focus: "Nature, plants, water & environmental care",
    desc: "Outdoor seedling beds, soil trays, leaf classification zones and water wheels teaching reverence for our planet.",
    photo: CHILD_PHOTOS.outdoorBallPlayKids
  },
  {
    name: "Future Skills Corner",
    focus: "Unplugged coding, patterns & design thinking",
    desc: "Floor maze navigation grids, directional color tiles, sequence puzzles, and unplugged algorithmic thinking.",
    photo: CHILD_PHOTOS.seniorKgFocusedChild
  }
];

const TWELVE_THEMES = [
  { title: "Space Science", desc: "Exploring stars, planets, day and night through stories, models and discovery.", icon: Rocket },
  { title: "Design Thinking", desc: "Identifying small problems, imagining ideas, building and improving creations.", icon: Lightbulb },
  { title: "Pre-Coding", desc: "Understanding patterns, sequencing, directions and logical instructions through games.", icon: Code2 },
  { title: "Pre-Robotics", desc: "Exploring movement, construction, mechanisms and cause-and-effect relationships.", icon: Bot },
  { title: "AI Awareness", desc: "Age-appropriate conversations about smart tools, instructions and human thinking.", icon: Brain },
  { title: "Financial Literacy", desc: "Exploring needs, wants, saving, sharing and simple choices through pretend play.", icon: Coins },
  { title: "Entrepreneurship", desc: "Developing initiative, imagination, cooperation and responsibility in small ventures.", icon: Users },
  { title: "Sustainability & SDGs", desc: "Building awareness of nature, community care and responsible habits.", icon: Leaf },
  { title: "Scientific Inquiry", desc: "Asking questions, making predictions, observing and trying new ideas.", icon: Microscope },
  { title: "Communication", desc: "Sharing thoughts, listening with empathy, teamwork and confidence-building.", icon: Users },
  { title: "Creative Problem-Solving", desc: "Imagining alternative solutions and learning joyfully from mistakes.", icon: Sparkles },
  { title: "Global Citizenship", desc: "Appreciating cultures, communities, kindness and shared planetary responsibilities.", icon: Globe2 }
];

export default function CurriculumPage({ onOpenTourModal }) {
  const [activeTab, setActiveTab] = useState('curriculum'); // 'curriculum' | 'future-skills'

  return (
    <div className="min-h-screen bg-[#F4F9FB] text-[#091E3A]">
      {/* Page Header */}
      <PageHeader
        badge="INTRODUCING KINDERMAGIC PRIMEX"
        title="A Curriculum for the World Children Are Growing Into."
        subtitle="Our Kindermagic PrimeX No-Book Curriculum brings together strong foundational learning, experiential methods, creative exploration and future-ready skills. Designed with reference to NEP 2020 and NCF-FS 2022, the approach integrates play, projects, guided activities, child-friendly worksheets and holistic developmental observation."
      />

      <FlowyWaveDivider fill="#FFFFFF" accentColor="#60C8D4" />

      {/* Tab Switcher */}
      <div className="bg-white py-4 px-4 border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all ${
              activeTab === 'curriculum'
                ? 'bg-[#091E3A] text-white shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🌸 Kindermagic PrimeX No-Book Curriculum
          </button>
          <button
            onClick={() => setActiveTab('future-skills')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all ${
              activeTab === 'future-skills'
                ? 'bg-[#ADF802] text-[#091E3A] shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🚀 New-Age Subjects & 21st-Century Skills
          </button>
        </div>
      </div>

      {activeTab === 'curriculum' ? (
        <>
          {/* Section: The No-Book Advantage */}
          <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest">
                  THE PEDAGOGICAL SHIFT
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#091E3A] tracking-tight mt-3 mb-4">
                  The No-Book Advantage — No Heavy Books. No Empty Learning.
                </h2>
                <p className="text-base sm:text-lg text-slate-700 font-medium">
                  No-Book does not mean removing reading, writing or academic learning. It means reducing unnecessary textbook dependence and creating richer ways to understand concepts.
                </p>
              </div>

              {/* 4 Transformation Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    instead: "Instead of only learning about plants...",
                    real: "Children grow them.",
                    desc: "Touching soil, measuring sprout heights, and noting sunlight changes with their own hands.",
                    color: "#ADF802",
                    flowClass: "card-flow-lime"
                  },
                  {
                    instead: "Instead of only identifying shapes...",
                    real: "Children build with them.",
                    desc: "Constructing bridges, towers, and patterns with solid 3D geometric forms.",
                    color: "#60C8D4",
                    flowClass: "card-flow-cyan"
                  },
                  {
                    instead: "Instead of only memorising numbers...",
                    real: "Children use them in meaningful situations.",
                    desc: "Running play grocery stalls, sorting bead quantities, and balancing scales.",
                    color: "#fece13",
                    flowClass: "card-flow-gold"
                  },
                  {
                    instead: "Instead of only reading about the world...",
                    real: "Children experience it.",
                    desc: "Conducting tactile experiments, listening to guest storytellers, and sensory explorations.",
                    color: "#FF6B8B",
                    flowClass: "card-flow-coral"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className={`p-7 rounded-[32px] border-2 shadow-lg flex flex-col justify-between transition-all duration-300 ${item.flowClass}`}
                    style={{ animationDelay: `${idx * 1.4}s` }}
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 line-through">
                        {item.instead}
                      </span>
                      <h3
                        className="text-2xl font-black mt-2 mb-3 text-[#091E3A]"
                        style={{ borderLeft: `4px solid ${item.color}`, paddingLeft: '12px' }}
                      >
                        {item.real}
                      </h3>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#091E3A]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Deep Experiential Grasp</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: The Eight Learning Dimensions */}
          <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#091E3A] text-white relative overflow-hidden">
            <div className="ambient-orb w-96 h-96 top-0 left-0 opacity-20" style={{ background: '#60C8D4' }} />
            <div className="ambient-orb w-96 h-96 bottom-0 right-0 opacity-20" style={{ background: '#ADF802' }} />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest">
                  360° DEVELOPMENTAL SPECTRUM
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 mb-4">
                  Our Eight Learning Dimensions
                </h2>
                <p className="text-base sm:text-lg text-white/80 font-medium">
                  Holistic early education structured to awaken every neurological and emotional facet of your child.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {EIGHT_DIMENSIONS.map((dim, dIdx) => {
                  const Icon = dim.icon;
                  const paletteColors = ['#ADF802', '#60C8D4', '#fece13', '#FF6B8B', '#9B51E0', '#ADF802', '#60C8D4', '#fece13'];
                  const dColor = paletteColors[dIdx % paletteColors.length];
                  return (
                    <motion.div
                      key={dim.num}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="p-6 rounded-[32px] backdrop-blur-xl border-2 shadow-xl flex flex-col justify-between transition-all duration-300"
                      style={{
                        background: `linear-gradient(145deg, ${dColor}30 0%, rgba(9,30,58,0.92) 45%, ${dColor}20 100%)`,
                        backgroundSize: '240% 240%',
                        animation: 'flowyColorDrift 10s ease-in-out infinite',
                        animationDelay: `${dIdx * 1.2}s`,
                        borderColor: `${dColor}65`,
                        boxShadow: `0 18px 40px -10px ${dColor}35`,
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono font-bold" style={{ color: dColor }}>
                            DIMENSION {dim.num}
                          </span>
                          <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center text-white border border-white/20">
                            <Icon className="w-5 h-5" style={{ color: dColor }} />
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {dim.title}
                        </h3>
                        <p className="text-xs text-white/85 leading-relaxed font-medium">
                          {dim.desc}
                        </p>
                      </div>
                      <div className="mt-5 pt-3 border-t border-white/15 text-[11px] font-bold" style={{ color: dColor }}>
                        NCF-FS Foundational Stage
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <FlowyWaveDivider flip={true} fill="#FFFFFF" accentColor="#ADF802" />

          {/* Section: Experiential FLN & Worksheets With Purpose */}
          <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* 1. Letters Beyond Alphabet Chart */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="p-8 rounded-[36px] card-flow-cyan border-2 shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#60C8D4] border-2 border-white text-[#091E3A] flex items-center justify-center font-black mb-6 shadow-md">
                    Aa
                  </div>
                  <h3 className="text-2xl font-black text-[#091E3A] mb-3">
                    Letters Beyond the Alphabet Chart
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                    Children explore sounds through stories, rhymes, puppets, picture walks, sound hunts and meaningful early writing experiences rather than mechanical copying.
                  </p>
                </motion.div>

                {/* 2. Numbers Beyond the Worksheet */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="p-8 rounded-[36px] card-flow-lime border-2 shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#ADF802] border-2 border-white text-[#091E3A] flex items-center justify-center font-black mb-6 shadow-md">
                    123
                  </div>
                  <h3 className="text-2xl font-black text-[#091E3A] mb-3">
                    Numbers Beyond the Worksheet
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                    Children develop number sense through pretend markets, block towers, sorting, construction, counting games and practical problem-solving in real-life contexts.
                  </p>
                </motion.div>

                {/* 3. Worksheets With Purpose */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="p-8 rounded-[36px] card-flow-gold border-2 shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#fece13] border-2 border-white text-[#091E3A] flex items-center justify-center font-black mb-6 shadow-md">
                    ✍️
                  </div>
                  <h3 className="text-2xl font-black text-[#091E3A] mb-3">
                    Worksheets With Purpose
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                    Age-appropriate worksheets are introduced when they help children practise, apply, document or reinforce concepts they have already experienced. They support learning — they do not define it.
                  </p>
                </motion.div>

              </div>
            </div>
          </section>

          {/* Section: Signature Discovery Spaces */}
          <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F4F9FB]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="px-4 py-1.5 rounded-full bg-[#60C8D4]/20 text-[#091E3A] text-xs font-black uppercase tracking-widest">
                  SPECIALIZED LEARNING SPACES
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#091E3A] tracking-tight mt-3 mb-4">
                  Our Signature Discovery Spaces
                </h2>
                <p className="text-base sm:text-lg text-slate-700 font-medium">
                  Every Blooming Era centre features dedicated learning environments equipped with hands-on learning resources.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {DISCOVERY_SPACES.map((space, idx) => {
                  const spaceColors = ['#ADF802', '#60C8D4', '#fece13', '#FF6B8B', '#9B51E0', '#ADF802'];
                  const sColor = spaceColors[idx % spaceColors.length];
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="rounded-[36px] border-2 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${sColor}24 0%, ${sColor}0d 25%, #ffffff 50%, ${sColor}16 75%, ${sColor}28 100%)`,
                        backgroundSize: '250% 250%',
                        animation: 'flowyColorDrift 10s ease-in-out infinite',
                        animationDelay: `${idx * 1.5}s`,
                        borderColor: `${sColor}65`,
                        boxShadow: `0 18px 40px -10px ${sColor}35`,
                      }}
                    >
                      <div>
                        <div className="h-48 overflow-hidden relative">
                          <img
                            src={space.photo}
                            alt={space.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                          <span
                            className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[#091E3A] text-[11px] font-black shadow-md"
                            style={{ backgroundColor: sColor }}
                          >
                            {space.focus}
                          </span>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-extrabold text-[#091E3A] mb-2">
                            {space.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                            {space.desc}
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
                  className="btn-lime px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-black shadow-xl inline-flex items-center gap-2 group transition-all"
                >
                  <span>Experience These Spaces in Person — Book Campus Tour</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* PAGE 4: NEW-AGE SUBJECTS & 21ST-CENTURY SKILLS */
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest">
                FUTURE-READY LEARNING
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#091E3A] tracking-tight mt-3 mb-4">
                Big Ideas. Little Explorers.
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                Future-ready learning begins with curiosity, imagination, collaboration and the ability to solve everyday problems. At Blooming Era, new-age concepts are introduced through play-based, hands-on experiences rather than technical pressure or premature academic specialisation.
              </p>
            </div>

            {/* 12 Themes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TWELVE_THEMES.map((theme, idx) => {
                const Icon = theme.icon;
                const themeColors = ['#ADF802', '#60C8D4', '#fece13', '#FF6B8B', '#9B51E0'];
                const tColor = themeColors[idx % themeColors.length];
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="p-6 rounded-[32px] border-2 shadow-md transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${tColor}22 0%, ${tColor}0c 25%, #ffffff 50%, ${tColor}16 75%, ${tColor}26 100%)`,
                      backgroundSize: '250% 250%',
                      animation: 'flowyColorDrift 10s ease-in-out infinite',
                      animationDelay: `${idx * 1.1}s`,
                      borderColor: `${tColor}65`,
                      boxShadow: `0 16px 36px -8px ${tColor}30`,
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-2xl text-[#091E3A] flex items-center justify-center flex-shrink-0 shadow-md border-2 border-white"
                        style={{ backgroundColor: tColor }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-[#091E3A] px-2.5 py-0.5 rounded-full">
                          Theme 0{idx + 1}
                        </span>
                        <h3 className="text-lg font-extrabold text-[#091E3A] mt-0.5">
                          {theme.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {theme.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Closing Headline Callout */}
            <div className="mt-16 p-8 sm:p-10 rounded-[36px] bg-[#091E3A] text-white border-2 border-[#ADF802] shadow-2xl text-center max-w-4xl mx-auto">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ADF802] mb-3 block">
                OUR CORE PROMISE TO PARENTS
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                “We Are Not Training Children for Jobs That Don't Yet Exist. We Are Nurturing the Thinking Skills That Will Help Them Adapt.”
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-4 max-w-2xl mx-auto">
                Critical thinking, empathy, creative collaboration, and resilience form the true foundations of future readiness.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
