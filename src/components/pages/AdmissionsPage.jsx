import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass, MapPin, Phone, Mail, Calendar, CheckCircle2, ArrowRight,
  ShieldCheck, Heart, Sparkles, Clock, User, Award, Loader2, Copy, Check
} from 'lucide-react';
import { FlowyWaveDivider, PageHeader, CHILD_PHOTOS } from './shared';
import { submitForm } from '../../services/formService';

const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "Explore our educational philosophy, no-book approach, signature discovery spaces and age-appropriate programmes.",
    icon: Compass,
    color: "#60C8D4",
    cardClass: "card-flow-cyan"
  },
  {
    step: "02",
    title: "Visit",
    desc: "Experience the vibrant campus environment in person, observe active children, and meet our passionate educators.",
    icon: Calendar,
    color: "#8ed727",
    cardClass: "card-flow-lime"
  },
  {
    step: "03",
    title: "Connect",
    desc: "A warm, informal conversation to discuss your child's age, unique personality, interests and programme suitability.",
    icon: Heart,
    color: "#fece13",
    cardClass: "card-flow-gold"
  },
  {
    step: "04",
    title: "Begin",
    desc: "Complete the simple enrolment documentation, receive the Welcome Discovery Kit, and start your child's joyful journey.",
    icon: Sparkles,
    color: "#FF6B8B",
    cardClass: "card-flow-coral"
  }
];

const PROGRAMMES = [
  { name: "Playgroup", age: "2+ to 3 Years", focus: "Sensory discovery, gentle social transition & self-expression", photo: CHILD_PHOTOS.playgroupFloorToddler, cardClass: "card-flow-lime", badgeBg: "#8ed727", badgeText: "#091E3A" },
  { name: "Nursery", age: "3+ to 4 Years", focus: "Language fluency, foundational numeracy & curiosity projects", photo: CHILD_PHOTOS.toddlerLaughingBook, cardClass: "card-flow-cyan", badgeBg: "#60C8D4", badgeText: "#091E3A" },
  { name: "Junior KG", age: "4+ to 5 Years", focus: "Scientific inquiry, pre-coding logic & collaborative teamwork", photo: CHILD_PHOTOS.natureExplorerChild, cardClass: "card-flow-gold", badgeBg: "#fece13", badgeText: "#091E3A" },
  { name: "Senior KG", age: "5+ to 6 Years", focus: "School readiness, creative problem-solving & confidence", photo: CHILD_PHOTOS.seniorKgFocusedChild, cardClass: "card-flow-coral", badgeBg: "#FF6B8B", badgeText: "#FFFFFF" }
];

export default function AdmissionsPage({ onOpenTourModal }) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    programme: 'Nursery (Ages 3–4)',
    city: 'Bengaluru / Central Campus',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [enquiryId, setEnquiryId] = useState(null);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone || !formData.childName) {
      setSubmitError("Please provide parent name, phone number, and child's name.");
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitForm({
      formType: 'admission',
      parentName: formData.parentName,
      phone: formData.phone,
      email: formData.email,
      childName: formData.childName,
      programme: formData.programme,
      city: formData.city,
      notes: formData.notes || ''
    });

    setIsSubmitting(false);

    if (result.success) {
      setEnquiryId(result.enquiryId || `AA${Date.now().toString().slice(-6)}`);
      setSubmitted(true);
    } else {
      setSubmitError(result.error || 'Failed to submit admission enquiry. Please try again.');
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
        badge="ADMISSIONS OPEN 2027–2028"
        title="Their First Step Into a Bigger World."
        subtitle="Choosing a preschool is about much more than admissions. It is about finding caring teachers, a stimulating learning environment, strong foundations and a place where your child feels valued. At Blooming Era, we want every child's first school experience to be filled with warmth, discovery, confidence and meaningful learning."
      />

      <FlowyWaveDivider fill="#FFFFFF" accentColor="#60C8D4" />

      {/* Your Admission Journey: 4 Steps */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-4 py-1.5 rounded-full bg-[#8ed727] text-[#091E3A] text-xs font-black uppercase tracking-widest">
              SIMPLE 4-STEP ADMISSION PROCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#091E3A] tracking-tight mt-3 mb-4">
              Your Admission Journey
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-medium">
              We make the admission experience warm, transparent, respectful and stress-free for both parents and children.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {ADMISSION_STEPS.map((st, idx) => {
              const Icon = st.icon;
              return (
                <motion.div
                  key={st.step}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`p-8 rounded-[36px] ${st.cardClass} shadow-lg flex flex-col justify-between transition-all`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black font-mono text-[#091E3A]">
                        {st.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#091E3A] flex items-center justify-center shadow-md border border-white/20">
                        <Icon className="w-6 h-6" style={{ color: st.color }} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-[#091E3A] mb-2">
                      Step {st.step} — {st.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Age Eligibility Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F4F9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-4 py-1.5 rounded-full bg-[#60C8D4]/20 text-[#091E3A] text-xs font-black uppercase tracking-widest">
              AGE-MATCHED LEARNING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E3A] mt-2 mb-3">
              Programmes & Age Criteria
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Admissions are accepted on a rolling basis, subject to student-educator ratio limits per batch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMMES.map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`rounded-[32px] ${p.cardClass} shadow-xl overflow-hidden flex flex-col justify-between p-4 group transition-all`}
              >
                <div>
                  <div className="h-44 rounded-2xl overflow-hidden mb-4 border border-white/60 shadow-sm">
                    <img src={p.photo} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-black shadow-sm"
                    style={{ backgroundColor: p.badgeBg, color: p.badgeText }}
                  >
                    Age: {p.age}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#091E3A] mt-2 mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    {p.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Admission Enquiry Form */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#091E3A] to-[#122B4E] text-white relative">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="px-4 py-1.5 rounded-full bg-[#8ed727] text-[#091E3A] text-xs font-black uppercase tracking-widest">
              START THE CONVERSATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-2">
              Online Admission Enquiry
            </h2>
            <p className="text-sm sm:text-base text-white/80">
              Submit your enquiry below or call our admissions desk directly at <a href="tel:+919647974093" className="text-[#8ed727] font-black underline">+91 96479 74093</a>
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-[40px] bg-white/10 backdrop-blur-2xl border-2 border-white/20 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#8ed727] text-[#091E3A] flex items-center justify-center mx-auto text-2xl font-black">
                  ✓
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30">
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    Enquiry ID: {enquiryId}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyId}
                    title="Copy ID"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#8ed727]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <h3 className="text-2xl font-extrabold text-white">Thank You, {formData.parentName}!</h3>
                <p className="text-sm text-white/85 max-w-md mx-auto font-medium">
                  We have logged your admission enquiry for <b>{formData.childName || "your child"}</b> ({formData.programme}) under ID <b>{enquiryId}</b>. Our Admissions Coordinator will call you shortly at <b>{formData.phone}</b> to schedule your discovery tour.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setEnquiryId(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/20 text-white font-bold text-xs hover:bg-white/30"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="p-4 rounded-2xl bg-rose-500/20 border border-rose-300 text-white text-xs font-semibold">
                    {submitError}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-2 uppercase">Parent's Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 text-[#091E3A] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#8ed727]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-2 uppercase">Contact Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 text-[#091E3A] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#8ed727]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-2 uppercase">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 text-[#091E3A] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#8ed727]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-2 uppercase">Child's Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 text-[#091E3A] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#8ed727]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-2 uppercase">Programme Seeking</label>
                    <select
                      value={formData.programme}
                      onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 text-[#091E3A] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#8ed727]"
                    >
                      <option>Playgroup (Ages 2–3)</option>
                      <option>Nursery (Ages 3–4)</option>
                      <option>Junior KG (Ages 4–5)</option>
                      <option>Senior KG (Ages 5–6)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/80 mb-2 uppercase">Preferred Campus / City</label>
                  <input
                    type="text"
                    placeholder="e.g. Bangalore, Mumbai, Delhi-NCR, Hyderabad"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/90 text-[#091E3A] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#8ed727]"
                  />
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
                      <span>Submitting Admission Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Admission Enquiry</span>
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
