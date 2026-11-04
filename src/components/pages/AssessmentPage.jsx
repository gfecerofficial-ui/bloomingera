import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Eye, FileText, Brain, HeartHandshake, Share2, Award, CheckCircle2,
  Sparkles, ShieldCheck, ArrowRight, BookOpen, Compass
} from 'lucide-react';
import { FlowyWaveDivider, PageHeader, CHILD_PHOTOS } from './shared';

const NINE_AREAS = [
  { title: "Language and Communication", desc: "Expressive vocabulary, articulation, narrative confidence and active listening in group dialogue." },
  { title: "Literacy and Numeracy", desc: "Sound-symbol awareness, pattern recognition, spatial concepts and applied number sense in play." },
  { title: "Thinking and Problem-Solving", desc: "Cause-and-effect inquiry, flexible reasoning, independent trial-and-error and curiosity-driven questioning." },
  { title: "Physical Coordination", desc: "Gross-motor balance, spatial agility, fine-motor pincer grip, scissor control and sensory integration." },
  { title: "Emotional Awareness & Regulation", desc: "Identifying personal emotions, self-soothing strategies, patience and healthy emotional expression." },
  { title: "Social Relationships & Cooperation", desc: "Turn-taking, conflict negotiation with peers, empathy for others and joy in collaborative play." },
  { title: "Creativity and Expression", desc: "Open-ended art choices, musical rhythm exploration, imaginative pretend-play and divergent thinking." },
  { title: "Independence and Life Skills", desc: "Self-help routines, table manners, organizing learning materials, hand hygiene and personal responsibility." },
  { title: "Curiosity & Future-Ready Capabilities", desc: "Inquisitiveness toward new concepts, design thinking attempts, algorithmic sequencing and tech fluency." }
];

const SIX_STEPS = [
  { step: "01", name: "Observe", desc: "Notice children during authentic, natural and guided play activities without test stress.", icon: Eye },
  { step: "02", name: "Record", desc: "Capture relevant developmental milestones, work samples, photographs and anecdotal notes.", icon: FileText },
  { step: "03", name: "Understand", desc: "Recognise individual strengths, unique interests, emerging talents and gentle support needs.", icon: Brain },
  { step: "04", name: "Personalise", desc: "Adapt learning stations, teacher interactions and sensory tools to nurture the child's pace.", icon: HeartHandshake },
  { step: "05", name: "Share", desc: "Keep parents meaningfully informed through narrative portfolios, developmental dialogues and regular updates.", icon: Share2 },
  { step: "06", name: "Celebrate", desc: "Recognise, document and celebrate each child's singular progress, resilience and joy over time.", icon: Award }
];

export default function AssessmentPage({ onOpenTourModal }) {
  const [selectedArea, setSelectedArea] = useState(0);

  return (
    <div className="min-h-screen bg-[#F4F9FB] text-[#091E3A]">
      {/* Page Header */}
      <PageHeader
        badge="OBSERVATION-BASED DEVELOPMENT"
        title="Every Child Has a Story of Growth."
        subtitle="Children develop at different paces and reveal their abilities in different ways. At Blooming Era, holistic assessment aims to make their progress visible through meaningful observation, not unnecessary comparison."
      />

      <FlowyWaveDivider fill="#FFFFFF" accentColor="#60C8D4" />

      {/* Philosophy: Non-Diagnostic & Aligned with PARAKH HPC */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-[#8ed727]/30 text-[#091E3A] font-extrabold text-xs uppercase tracking-wider">
                NEP 2020 & PARAKH GUIDELINES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E3A] tracking-tight">
                No Marks. No Rank Pressure. Only Joyful, Visible Progress.
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                Traditional preschools often rely on paper tests and comparative grading that can damage a 4-year-old's self-esteem. Blooming Era implements a 360-degree observational portfolio framework aligned with the Ministry of Education’s PARAKH Holistic Progress Card (HPC).
              </p>
              <div className="p-6 rounded-3xl bg-[#F4F9FB] border-2 border-slate-200">
                <div className="flex items-center gap-3 text-sm font-black text-[#091E3A] mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>360° Non-Diagnostic Growth Observation</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Educators observe how a child solves a block puzzle, shares paints with a peer, expresses a story, or handles minor frustrations. This rich qualitative context helps parents truly understand their child's holistic growth.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-[40px] overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={CHILD_PHOTOS.toddlerAmazedBook}
                  alt="Child Observing and Discovering Joyfully"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-5 rounded-3xl bg-[#091E3A] text-white shadow-xl max-w-xs border-2 border-[#8ed727]">
                <div className="text-xs font-mono font-bold text-[#8ed727] uppercase">
                  Our Philosophy
                </div>
                <div className="text-sm font-bold mt-1 text-white">
                  “Progress Is Personal. Growth Is Beautiful.”
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 9 Areas Developmental Tracker */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F4F9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-4 py-1.5 rounded-full bg-[#60C8D4]/20 text-[#091E3A] text-xs font-black uppercase tracking-widest">
              THE DEVELOPMENTAL TRACKER
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#091E3A] tracking-tight mt-3 mb-4">
              9 Dimensions of Natural Child Development
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-medium">
              We observe and record developmental milestones across nine balanced dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NINE_AREAS.map((area, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedArea(idx)}
                className={`p-6 rounded-[32px] cursor-pointer transition-all border-2 ${
                  selectedArea === idx
                    ? 'bg-white border-[#091E3A] shadow-xl scale-[1.02]'
                    : 'bg-white/80 border-white hover:bg-white shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#60C8D4] bg-[#091E3A] px-2.5 py-0.5 rounded-full">
                    Area 0{idx + 1}
                  </span>
                  <CheckCircle2 className={`w-5 h-5 ${selectedArea === idx ? 'text-[#091E3A]' : 'text-slate-300'}`} />
                </div>
                <h3 className="text-lg font-bold text-[#091E3A] mb-2">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Document Learning: 6 Steps */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#091E3A] text-white relative overflow-hidden">
        <div className="ambient-orb w-96 h-96 top-0 right-0 opacity-20" style={{ background: '#8ed727' }} />
        <div className="ambient-orb w-96 h-96 bottom-0 left-0 opacity-20" style={{ background: '#60C8D4' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-4 py-1.5 rounded-full bg-[#8ed727] text-[#091E3A] text-xs font-black uppercase tracking-widest">
              THE 6-STEP OBSERVATION CYCLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 mb-4">
              How We Document Learning
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-medium">
              A transparent, continuous cycle that puts the child's developmental wellbeing first.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SIX_STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-[36px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-black font-mono text-[#8ed727]">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white/15 text-[#60C8D4] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-white/85 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenTourModal}
              className="btn-lime px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-black shadow-xl inline-flex items-center gap-2 group transition-all"
            >
              <span>Review a Sample Portfolio — Book Campus Tour</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
