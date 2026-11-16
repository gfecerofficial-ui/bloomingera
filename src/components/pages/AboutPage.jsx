import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, Sparkles, Globe2, BookOpen, ShieldCheck, Quote, ArrowRight, Award } from 'lucide-react';
import { FlowyWaveDivider, PageHeader, CHILD_PHOTOS } from './shared';
import { CLOUDINARY_MEDIA } from '../../data/cloudinaryMedia';

export default function AboutPage({ onOpenTourModal, onNavigate }) {
  return (
    <div className="min-h-screen bg-[#F4F9FB] text-[#091E3A]">
      {/* Page Header */}
      <PageHeader
        badge="OUR STORY. OUR PURPOSE."
        title={<><span className="sm:whitespace-nowrap">Redefining Early Childhood Education</span><br />Redefining Preschool Economics</>}
        subtitle="Blooming Era is built on a belief that early education must prepare children for life without taking away the joy of childhood. Our educational approach brings together experiential learning, holistic development, Indian cultural values and global perspectives to create meaningful foundations for tomorrow."
      />

      <FlowyWaveDivider fill="#FFFFFF" accentColor="#60C8D4" />

      {/* The Blooming Era Story */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="px-3.5 py-1 rounded-full bg-[#60C8D4]/20 text-[#091E3A] font-extrabold text-xs uppercase tracking-wider">
                A NEW PERSPECTIVE ON EARLY LEARNING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight">
                Not Another Preschool
                <br />
                A Living Culture of Wonder
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  A child's earliest years are filled with extraordinary possibilities. Yet early education can sometimes become narrowly focused on completing books, memorising answers and preparing for examinations. Blooming Era seeks a more meaningful path.
                </p>
                <p>
                  We believe young children need a strong foundation in literacy and numeracy, but they also need opportunities to think independently, communicate confidently, build relationships, explore nature, solve problems and express their creativity.
                </p>
                <p>
                  Our approach reduces unnecessary textbook dependence while placing purposeful play, hands-on exploration, structured activities and meaningful learning experiences at the centre.
                </p>
              </div>

              {/* Callout Quote Box */}
              <div className="p-6 rounded-3xl card-flow-lime border-2 shadow-lg">
                <p className="text-lg sm:text-xl font-black text-[#091E3A] italic">
                  “We don't want children to learn more things sooner. We want them to understand, experience and love what they learn.”
                </p>
              </div>
            </motion.div>

            {/* Visual Photo Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[40px] overflow-hidden border-4 border-white shadow-2xl bg-white">
                <video
                  src={CLOUDINARY_MEDIA[61].url}
                  poster={CLOUDINARY_MEDIA[61].poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Preschool Children Discovering Hands-On Learning"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091E3A]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="px-3 py-1 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase">
                      Pure Wonder
                    </span>
                    <h3 className="text-xl font-bold mt-2">Active Discovery Over Rote Worksheets</h3>
                  </div>
                </div>
              </div>

              {/* Orbiting Badge */}
              <div className="absolute -bottom-6 -left-6 p-4 rounded-3xl card-flow-cyan backdrop-blur-xl border-2 shadow-xl max-w-xs animate-float-gentle">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#091E3A] flex items-center justify-center text-[#ADF802]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#091E3A]">NEP 2020 Aligned</div>
                    <div className="text-[11px] text-slate-600">Play-based early foundational learning</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F4F9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                badge: 'Guiding Star',
                title: 'Our Vision',
                description:
                  'To help redefine early-childhood education through accessible, innovative, inclusive and research-informed learning experiences that nurture capable, compassionate and confident children.',
                icon: Compass,
                theme: {
                  bgGradient: 'linear-gradient(135deg, #02c9fe 0%, #05b8e9 50%, #36d6fe 100%)',
                  waveColor1: 'rgba(255, 255, 255, 0.34)',
                  waveColor2: 'rgba(2, 130, 195, 0.26)',
                  waveColor3: 'rgba(255, 255, 255, 0.20)',
                  sandShimmer: 'rgba(210, 248, 255, 0.45)',
                  borderColor: 'rgba(255, 255, 255, 0.65)',
                  shadow: '0 22px 55px rgba(2, 201, 254, 0.35)',
                  textColor: '#091E3A',
                  subTextColor: 'rgba(9, 30, 58, 0.85)',
                  iconBg: '#091E3A',
                  iconColor: '#02c9fe',
                  badgeBg: '#091E3A',
                  badgeText: '#02c9fe',
                },
              },
              {
                badge: 'Core Purpose',
                title: 'Our Mission',
                description:
                  'To build strong foundational learning through purposeful play, experiential education, holistic development, teacher empowerment and meaningful parent partnerships.',
                icon: Heart,
                theme: {
                  bgGradient: 'linear-gradient(135deg, #fa0672 0%, #e20063 50%, #fc3c91 100%)',
                  waveColor1: 'rgba(255, 255, 255, 0.28)',
                  waveColor2: 'rgba(160, 0, 68, 0.26)',
                  waveColor3: 'rgba(255, 255, 255, 0.18)',
                  sandShimmer: 'rgba(255, 220, 238, 0.45)',
                  borderColor: 'rgba(255, 255, 255, 0.55)',
                  shadow: '0 22px 55px rgba(250, 6, 114, 0.35)',
                  textColor: '#FFFFFF',
                  subTextColor: 'rgba(255, 255, 255, 0.92)',
                  iconBg: '#FFFFFF',
                  iconColor: '#fa0672',
                  badgeBg: '#FFFFFF',
                  badgeText: '#fa0672',
                },
              },
            ].map((card) => {
              const IconComp = card.icon;
              const t = card.theme;
              return (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="p-8 sm:p-10 rounded-[36px] relative overflow-hidden group transition-all duration-300"
                  style={{
                    background: t.bgGradient,
                    border: `2px solid ${t.borderColor}`,
                    boxShadow: t.shadow,
                  }}
                >
                  {/* Subtle Sand Flow Waves & Grain */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[34px]">
                    <div
                      className="absolute -inset-10 animate-sand-shimmer pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 35% 25%, ${t.sandShimmer} 0%, transparent 60%)`,
                      }}
                    />
                    <svg
                      viewBox="0 0 1000 300"
                      preserveAspectRatio="none"
                      className="absolute -bottom-2 left-0 w-[200%] h-36 animate-sand-forward pointer-events-none"
                      style={{ fill: t.waveColor1 }}
                    >
                      <path d="M 0,140 Q 125,60 250,140 T 500,140 Q 625,60 750,140 T 1000,140 L 1000,300 L 0,300 Z" />
                    </svg>
                    <svg
                      viewBox="0 0 1000 300"
                      preserveAspectRatio="none"
                      className="absolute -bottom-4 left-0 w-[200%] h-44 animate-sand-reverse pointer-events-none"
                      style={{ fill: t.waveColor2 }}
                    >
                      <path d="M 0,180 Q 150,230 300,170 T 500,180 Q 650,230 800,170 T 1000,180 L 1000,300 L 0,300 Z" />
                    </svg>
                    <svg
                      viewBox="0 0 1000 300"
                      preserveAspectRatio="none"
                      className="absolute -bottom-6 left-0 w-[200%] h-28 animate-sand-drift pointer-events-none"
                      style={{ fill: t.waveColor3 }}
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

                  {/* Card Content */}
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-2xl border border-white/40 flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: t.iconBg, color: t.iconColor }}
                    >
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span
                      className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs"
                      style={{ backgroundColor: t.badgeBg, color: t.badgeText }}
                    >
                      {card.badge}
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl font-extrabold mt-4 mb-3"
                      style={{ color: t.textColor }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed font-medium"
                      style={{ color: t.subTextColor }}
                    >
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Triad Philosophy */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#091E3A] text-white relative overflow-hidden">
        <div className="ambient-orb w-96 h-96 top-0 right-0 opacity-20" style={{ background: '#ADF802' }} />
        <div className="ambient-orb w-96 h-96 bottom-0 left-0 opacity-20" style={{ background: '#60C8D4' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest">
              OUR PHILOSOPHICAL PILLARS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 mb-4">
              Proudly Indian
              <br />
              Powerfully Global
              <br />
              Beautifully Child-Centred
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-medium">
              Three interconnected commitments that shape every classroom interaction, space design and learning milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Proudly Indian */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-[36px] backdrop-blur-xl border-2 border-[#ADF802]/60 shadow-2xl flex flex-col justify-between transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, rgba(173, 248, 2,0.28) 0%, rgba(9,30,58,0.92) 45%, rgba(173, 248, 2,0.20) 100%)',
                backgroundSize: '240% 240%',
                animation: 'flowyColorDrift 10s ease-in-out infinite',
                boxShadow: '0 20px 45px -10px rgba(173, 248, 2,0.35)',
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ADF802] text-[#091E3A] flex items-center justify-center font-black text-xl mb-6 shadow-md">
                  🇮🇳
                </div>
                <h3 className="text-2xl font-extrabold text-[#ADF802] mb-3">
                  Proudly Indian
                </h3>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed font-medium">
                  We embrace India's rich cultural heritage, languages, traditions, stories, community values and educational wisdom, instilling deep roots and ethical grounding from the early years.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/15 text-xs text-[#ADF802] font-bold">
                Cultural Roots & Shared Heritage
              </div>
            </motion.div>

            {/* 2. Powerfully Global */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-[36px] backdrop-blur-xl border-2 border-[#60C8D4]/60 shadow-2xl flex flex-col justify-between transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, rgba(96,200,212,0.28) 0%, rgba(9,30,58,0.92) 45%, rgba(96,200,212,0.20) 100%)',
                backgroundSize: '240% 240%',
                animation: 'flowyColorDrift 11s ease-in-out infinite',
                animationDelay: '1.5s',
                boxShadow: '0 20px 45px -10px rgba(96,200,212,0.35)',
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#60C8D4] text-[#091E3A] flex items-center justify-center font-black text-xl mb-6 shadow-md">
                  🌍
                </div>
                <h3 className="text-2xl font-extrabold text-[#60C8D4] mb-3">
                  Powerfully Global
                </h3>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed font-medium">
                  We draw from global educational ideas, research-informed pedagogy, creative thinking and the skills children need in a rapidly evolving, connected world.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/15 text-xs text-[#60C8D4] font-bold">
                21st-Century Scientific Inquiry & Tech Fluency
              </div>
            </motion.div>

            {/* 3. Beautifully Child-Centred */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-[36px] backdrop-blur-xl border-2 border-[#fece13]/60 shadow-2xl flex flex-col justify-between transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, rgba(254,206,19,0.28) 0%, rgba(9,30,58,0.92) 45%, rgba(254,206,19,0.20) 100%)',
                backgroundSize: '240% 240%',
                animation: 'flowyColorDrift 10.5s ease-in-out infinite',
                animationDelay: '3s',
                boxShadow: '0 20px 45px -10px rgba(254,206,19,0.35)',
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fece13] text-[#091E3A] flex items-center justify-center font-black text-xl mb-6 shadow-md">
                  🌸
                </div>
                <h3 className="text-2xl font-extrabold text-[#fece13] mb-3">
                  Beautifully Child-Centred
                </h3>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed font-medium">
                  Our teaching respects children's developmental needs, individuality, imagination, emotional wellbeing and fundamental right to joyful, stress-free childhood experiences.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/15 text-xs text-[#fece13] font-bold">
                Unconditional Regard for Every Child
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FlowyWaveDivider flip={true} fill="#FFFFFF" accentColor="#ADF802" />

      {/* PAGE 2: MESSAGE FROM THE FOUNDER */}
      <section id="founder-message" className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-4 py-1.5 rounded-full bg-[#60C8D4]/20 text-[#091E3A] text-xs font-black uppercase tracking-widest">
              LEADERSHIP & VISION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#091E3A] tracking-tight mt-3">
              A Vision Born From Love for Childhood
            </h2>
          </div>

          <div className="rounded-[40px] card-flow-multi border-2 p-8 sm:p-12 shadow-2xl relative">
            <Quote className="w-16 h-16 text-[#60C8D4]/30 absolute top-8 right-8 pointer-events-none" />

            {/* Founder Byline */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-slate-200 mb-8">
              <div className="w-20 h-20 rounded-full border-4 border-[#ADF802] shadow-xl overflow-hidden bg-white flex-shrink-0">
                <img
                  src="/leadership/masuda-yasmin.jpeg"
                  alt="Dr. Masuda Yasmin"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-extrabold text-[#091E3A]">
                  Dr. Masuda Yasmin
                </h3>
                <p className="text-sm font-bold text-[#60C8D4] bg-[#091E3A] inline-block px-3 py-0.5 rounded-full mt-1">
                  Founder & Chairperson | Blooming Era Preschools
                </p>
              </div>
            </div>

            {/* Full Message Letter */}
            <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed font-medium italic">
              <p>
                “Every child enters this world with limitless curiosity, imagination and a natural desire to learn.
              </p>
              <p>
                As educators, our responsibility is not merely to teach children letters, numbers and facts. It is to create an environment where they feel safe, respected, confident and encouraged to discover their own abilities.
              </p>
              <p className="font-bold text-[#091E3A] not-italic">
                Blooming Era was envisioned as a preschool where academic foundations and the beauty of childhood can grow together.
              </p>
              <p>
                Through our No-Book educational philosophy, we aim to move learning beyond repetitive exercises and into meaningful experiences — storytelling, discovery, experimentation, projects, creative expression and purposeful play.
              </p>
              <p>
                I believe education should honour our Indian roots while embracing new knowledge, fresh perspectives and the possibilities of tomorrow.
              </p>
              <p>
                My vision is to nurture children who are not only academically prepared, but also compassionate, creative, curious and confident.
              </p>
              <p className="font-extrabold text-xl text-[#091E3A] not-italic pt-2">
                Because the true purpose of preschool is not simply to prepare children for the next class. It is to give them a beautiful beginning to life.”
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm font-bold text-slate-600">
                Dr. Masuda Yasmin — Founder & Chairperson
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenTourModal}
                className="btn-lime px-6 py-3 rounded-2xl text-xs font-black shadow-lg flex items-center gap-2 group transition-all"
              >
                <span>Book Campus Tour</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
