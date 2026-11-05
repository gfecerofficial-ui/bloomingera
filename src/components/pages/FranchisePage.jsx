import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, ShieldCheck, Award, Layers, Users, Building, CheckCircle2,
  Phone, Mail, ArrowRight, DollarSign, Sparkles, FileText, Check, ChevronRight,
  Loader2, Copy
} from 'lucide-react';
import { FlowyWaveDivider, PageHeader, CHILD_PHOTOS } from './shared';
import { submitForm } from '../../services/formService';

const FOUR_PILLARS = [
  {
    title: "Research-Informed Educational Identity",
    desc: "A distinctive curriculum framework centred on experiential learning, foundational literacy and numeracy (FLN), holistic development, and age-appropriate future skills.",
    tag: "High Parent Affinity"
  },
  {
    title: "Redefining Preschool Economics",
    desc: "A proposed business model focused on thoughtful space utilisation, realistic investment planning, efficient operations, enrolment development and long-term sustainability.",
    tag: "Capital Conscious"
  },
  {
    title: "360° Franchise Support",
    desc: "Complete guidance across planning, physical setup, curriculum delivery, educator training, recruitment, branding, marketing, administration and operational improvement.",
    tag: "Turnkey Architecture"
  },
  {
    title: "Multiple Growth Possibilities",
    desc: "Depending on feasibility and regulatory approvals, partners may explore preschool programmes, infant daycare, extended care, and additional after-school educational clubs.",
    tag: "Multi-Revenue Streams"
  }
];

const TWELVE_SUPPORT = [
  { step: "Plan", desc: "Location evaluation, catchment analysis and business planning guidance." },
  { step: "Design", desc: "Learning environment layout, safety compliance and interior infrastructure planning." },
  { step: "Launch", desc: "Brand launch coordination, inaugural event planning and opening-readiness support." },
  { step: "Train", desc: "Rigorous educator orientation, safety protocols and professional developmental modules." },
  { step: "Teach", desc: "Full curriculum roadmaps, experiential lesson kits, and academic implementation guidance." },
  { step: "Market", desc: "Digital campaigns, social assets, localized print collateral and parent lead generation." },
  { step: "Admit", desc: "Parent engagement scripts, inquiry management, and admission-closing resources." },
  { step: "Operate", desc: "Daily administrative SOPs, staff management and compliance guidelines." },
  { step: "Connect", desc: "Parent communication apps, notification templates and community tech systems." },
  { step: "Evaluate", desc: "Academic observation checklists, periodic audits, and quality-review frameworks." },
  { step: "Improve", desc: "Periodic operational health checks, refresher training, and educational reviews." },
  { step: "Grow", desc: "Strategic advisory for sustainable enrolment expansion and new service lines." }
];

export default function FranchisePage({ onOpenTourModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    investmentBudget: '₹10–15 Lakh',
    propertyStatus: 'Rented space ready'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [enquiryId, setEnquiryId] = useState(null);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitForm({
      formType: 'franchise',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      investmentBudget: formData.investmentBudget,
      propertyStatus: formData.propertyStatus,
      notes: `Budget: ${formData.investmentBudget} | Space: ${formData.propertyStatus}`
    });

    setIsSubmitting(false);

    if (result.success) {
      setEnquiryId(result.enquiryId || `FA${Date.now().toString().slice(-6)}`);
      setSubmitted(true);
    } else {
      setSubmitError(result.error || 'Failed to submit franchise request. Please try again.');
    }
  };

  const handleCopyId = () => {
    if (enquiryId) {
      navigator.clipboard.writeText(enquiryId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F9FB] text-[#091E3A]">
      {/* Page Header */}
      <PageHeader
        badge="THE FUTURE BLOOMS HERE"
        title="Own a Preschool. Build a Lasting Legacy."
        subtitle="Blooming Era offers entrepreneurs an opportunity to introduce a distinctive, experiential and future-ready preschool concept to their communities. Our model combines educational differentiation, a cost-conscious setup approach and structured franchise support to help partners plan, launch and grow responsible preschool businesses."
      />

      <FlowyWaveDivider fill="#FFFFFF" accentColor="#60C8D4" />

      {/* Investment Numbers Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-[#ADF802] text-[#091E3A] font-extrabold text-xs uppercase tracking-wider">
                TRANSPARENT FRANCHISE INVESTMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#091E3A] tracking-tight">
                Accessible Entry. Responsible Growth.
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed font-medium">
                <p>
                  We believe visionary educational leadership should not be gated by prohibitive upfront costs. Our tiered franchise framework is designed for passionate edu-preneurs, women leaders, and educational trusts.
                </p>
                <div className="p-6 rounded-3xl card-flow-cyan shadow-md">
                  <div className="text-3xl sm:text-4xl font-black text-[#091E3A] mb-1">
                    Starting from ₹2.50 Lakh <span className="text-base font-normal text-slate-600">Onwards</span>
                  </div>
                  <p className="text-xs text-slate-600 font-semibold">
                    Franchise Licensing Fee (Tier-based depending on city classification).
                  </p>
                </div>
                <div className="p-6 rounded-3xl card-flow-lime shadow-md">
                  <div className="text-2xl font-black text-emerald-950 mb-1">
                    ₹5 Lakh to ₹25 Lakh <span className="text-base font-normal text-emerald-800">Estimated Setup Cost</span>
                  </div>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    Depending on location, carpet space (1,200–3,500 sq.ft.), existing infrastructure and learning zones. Additional working capital/deposits may apply.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-[40px] bg-[#091E3A] text-white shadow-2xl border-2 border-[#ADF802] relative">
                <Sparkles className="w-10 h-10 text-[#ADF802] mb-4" />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Why Entrepreneurs Choose Blooming Era
                </h3>
                <ul className="space-y-3.5 text-sm sm:text-base text-white/85 font-medium">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ADF802] flex-shrink-0 mt-0.5" />
                    <span><b>Clear Market Differentiation:</b> India's standout No-Book experiential learning proposition.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ADF802] flex-shrink-0 mt-0.5" />
                    <span><b>Space-Optimised Setup:</b> Every square foot engineered for high learning utility.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ADF802] flex-shrink-0 mt-0.5" />
                    <span><b>Turnkey Educator Curriculum:</b> Day-by-day lesson roadmaps and multi-sensory kits.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ADF802] flex-shrink-0 mt-0.5" />
                    <span><b>Continuous Central Marketing:</b> High-converting digital lead generation support.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-300">
                  Note: Specific deliverables, royalty arrangements and territories are governed by the formal franchise agreement.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F4F9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-4 py-1.5 rounded-full bg-[#60C8D4]/20 text-[#091E3A] text-xs font-black uppercase tracking-widest">
              OUR STRATEGIC EDGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#091E3A] tracking-tight mt-3 mb-4">
              What Makes Our Franchise Different?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FOUR_PILLARS.map((p, idx) => {
              const cardClasses = ['card-flow-lime', 'card-flow-cyan', 'card-flow-gold', 'card-flow-coral'];
              const badgeColors = [
                { bg: '#ADF802', text: '#091E3A' },
                { bg: '#60C8D4', text: '#091E3A' },
                { bg: '#fece13', text: '#091E3A' },
                { bg: '#FF6B8B', text: '#FFFFFF' },
              ][idx % 4];
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`p-8 rounded-[36px] ${cardClasses[idx % 4]} shadow-xl flex flex-col justify-between transition-all`}
                >
                  <div>
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm"
                      style={{ backgroundColor: badgeColors.bg, color: badgeColors.text }}
                    >
                      {p.tag}
                    </span>
                    <h3 className="text-2xl font-black text-[#091E3A] mt-4 mb-3">
                      {p.title}
                    </h3>
                    <p className="text-base text-slate-700 font-medium leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 360° Support Ecosystem: 12 Pillars */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#091E3A] text-white relative overflow-hidden">
        <div className="ambient-orb w-96 h-96 top-0 left-0 opacity-20" style={{ background: '#ADF802' }} />
        <div className="ambient-orb w-96 h-96 bottom-0 right-0 opacity-20" style={{ background: '#60C8D4' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest">
              END-TO-END SUPPORT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 mb-4">
              Our 360° Franchise Support Ecosystem
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-medium">
              We stand shoulder-to-shoulder with our partners across every stage of the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TWELVE_SUPPORT.map((item, idx) => {
              const darkPalettes = [
                { bg: 'linear-gradient(135deg, rgba(173, 248, 2,0.16) 0%, rgba(255,255,255,0.08) 50%, rgba(96,200,212,0.12) 100%)', border: 'rgba(173, 248, 2,0.35)', num: '#ADF802' },
                { bg: 'linear-gradient(135deg, rgba(96,200,212,0.16) 0%, rgba(255,255,255,0.08) 50%, rgba(155,81,224,0.12) 100%)', border: 'rgba(96,200,212,0.35)', num: '#60C8D4' },
                { bg: 'linear-gradient(135deg, rgba(254,206,19,0.16) 0%, rgba(255,255,255,0.08) 50%, rgba(255,107,139,0.12) 100%)', border: 'rgba(254,206,19,0.35)', num: '#fece13' },
                { bg: 'linear-gradient(135deg, rgba(255,107,139,0.16) 0%, rgba(255,255,255,0.08) 50%, rgba(254,206,19,0.12) 100%)', border: 'rgba(255,107,139,0.35)', num: '#FF6B8B' },
              ][idx % 4];
              return (
                <motion.div
                  key={item.step}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-6 rounded-[28px] backdrop-blur-xl shadow-lg flex flex-col justify-between transition-all"
                  style={{
                    background: darkPalettes.bg,
                    backgroundSize: '240% 240%',
                    animation: `flowyColorDrift ${8 + (idx % 3) * 1.5}s ease-in-out infinite`,
                    border: `1.5px solid ${darkPalettes.border}`,
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-black font-mono" style={{ color: darkPalettes.num }}>
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-white/15 text-white/90 border border-white/20">
                        Support Pillar
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-white mb-2">
                      {item.step}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Franchise Application Form */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="px-4 py-1.5 rounded-full bg-[#ADF802] text-[#091E3A] text-xs font-black uppercase tracking-widest">
              BECOME A FRANCHISE PARTNER
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#091E3A] tracking-tight mt-3 mb-3">
              An Investment in Education. An Opportunity for Enterprise.
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Join hands to build a meaningful, profitable, and respected preschool in your city.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-[40px] card-flow-multi shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-2xl font-black">
                  ✓
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300">
                  <span className="text-xs font-mono font-bold text-[#091E3A] tracking-wider">
                    Application ID: {enquiryId}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyId}
                    title="Copy ID"
                    className="text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <h3 className="text-2xl font-extrabold text-[#091E3A]">Franchise Request Received</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto font-medium">
                  Thank you, <b>{formData.name}</b>. Your franchise request is logged under ID <b>{enquiryId}</b>. Our Head of Franchise Expansion will contact you at <b>{formData.phone}</b> within 24 hours to share our confidential Franchise Information Memorandum (FIM) and schedule a discovery call.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setEnquiryId(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-200 text-[#091E3A] font-bold text-xs hover:bg-slate-300 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                    {submitError}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Singhania"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Email Address</label>
                    <input
                      type="email"
                      placeholder="partner@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Proposed City / Territory</label>
                    <input
                      type="text"
                      placeholder="e.g. Pune, Jaipur, Indore, Surat"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Investment Capacity</label>
                    <select
                      value={formData.investmentBudget}
                      onChange={(e) => setFormData({ ...formData, investmentBudget: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                    >
                      <option>₹5–10 Lakh</option>
                      <option>₹10–15 Lakh</option>
                      <option>₹15–25 Lakh</option>
                      <option>₹25+ Lakh (Multi-Centre / Flagship)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Property Status</label>
                    <select
                      value={formData.propertyStatus}
                      onChange={(e) => setFormData({ ...formData, propertyStatus: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                    >
                      <option>Rented commercial space ready</option>
                      <option>Self-owned residential / commercial space</option>
                      <option>Currently scouting location</option>
                      <option>Seeking location guidance from brand</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-lime py-4 rounded-2xl text-sm font-black shadow-xl flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed group transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Franchise Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Franchise Information Kit</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
