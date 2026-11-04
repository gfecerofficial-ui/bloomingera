import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, MessageCircle,
  Briefcase, GraduationCap, Building, Sparkles, Loader2, Copy, Check
} from 'lucide-react';
import { FlowyWaveDivider, PageHeader } from './shared';
import { submitForm } from '../../services/formService';

const INQUIRY_TYPES = [
  { 
    id: 'admissions', 
    label: 'Admissions Enquiry', 
    category: 'For Parents',
    desc: 'Preschool programmes (Playgroup, Nursery, Jr & Sr KG), child enrolment, and discovery visits.', 
    icon: GraduationCap 
  },
  { 
    id: 'franchise', 
    label: 'Franchise Partnership', 
    category: 'For Entrepreneurs',
    desc: 'Preschool franchise opportunities, investment details, and territory availability.', 
    icon: Building 
  },
  { 
    id: 'careers', 
    label: 'Careers & Faculty', 
    category: 'For Educators',
    desc: 'Join our team of visionary early-childhood educators, center heads, and academic specialists.', 
    icon: Briefcase 
  },
  { 
    id: 'general', 
    label: 'General Enquiries', 
    category: 'Partnerships & Community',
    desc: 'Academic partnerships, vendor proposals, media requests, and general questions.', 
    icon: MessageCircle 
  }
];

export default function ContactPage({ onOpenTourModal }) {
  const [inquiryType, setInquiryType] = useState('admissions');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    childName: '',
    programme: 'Nursery (Ages 3–4)',
    investmentBudget: '₹10–15 Lakh',
    propertyStatus: 'Rented commercial space ready',
    careerRole: 'Lead Nursery Educator',
    experience: '1–3 Years',
    generalTopic: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [enquiryId, setEnquiryId] = useState(null);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInquiryChange = (id) => {
    setInquiryType(id);
    setSubmitError(null);
    setSubmitted(false);
    setEnquiryId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    // Dynamic validation matching actual form schemas
    if (inquiryType === 'admissions') {
      if (!formData.name || !formData.phone || !formData.childName) {
        setSubmitError("Please provide parent's name, phone number, and child's name.");
        return;
      }
    } else if (inquiryType === 'franchise') {
      if (!formData.name || !formData.phone) {
        setSubmitError("Please provide your name and contact phone number.");
        return;
      }
    } else if (inquiryType === 'careers') {
      if (!formData.name || !formData.phone || !formData.email) {
        setSubmitError("Please provide your name, phone number, and email address.");
        return;
      }
    } else {
      if (!formData.name || !formData.phone) {
        setSubmitError("Please enter your name and phone number.");
        return;
      }
    }

    setIsSubmitting(true);

    let payload = {};
    if (inquiryType === 'admissions') {
      payload = {
        formType: 'admission',
        parentName: formData.name,
        phone: formData.phone,
        email: formData.email,
        childName: formData.childName,
        programme: formData.programme,
        city: formData.city,
        notes: formData.message || ''
      };
    } else if (inquiryType === 'franchise') {
      payload = {
        formType: 'franchise',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        investmentBudget: formData.investmentBudget,
        propertyStatus: formData.propertyStatus,
        notes: formData.message ? `Budget: ${formData.investmentBudget} | Space: ${formData.propertyStatus} | Notes: ${formData.message}` : `Budget: ${formData.investmentBudget} | Space: ${formData.propertyStatus}`
      };
    } else if (inquiryType === 'careers') {
      payload = {
        formType: 'contact',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        inquiryType: `Careers: ${formData.careerRole} (${formData.experience})`,
        message: formData.message ? `Role: ${formData.careerRole} | Experience: ${formData.experience}\n${formData.message}` : `Role: ${formData.careerRole} | Experience: ${formData.experience}`
      };
    } else {
      payload = {
        formType: 'contact',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        inquiryType: `General: ${formData.generalTopic}`,
        message: formData.message || ''
      };
    }

    const result = await submitForm(payload);
    setIsSubmitting(false);

    if (result.success) {
      const defaultPrefix = inquiryType === 'admissions' ? 'AA' : inquiryType === 'franchise' ? 'FA' : 'CA';
      setEnquiryId(result.enquiryId || `${defaultPrefix}${Date.now().toString().slice(-6)}`);
      setSubmitted(true);
    } else {
      setSubmitError(result.error || 'Failed to submit. Please check your connection and try again.');
    }
  };

  const handleCopyId = () => {
    if (enquiryId) {
      navigator.clipboard.writeText(enquiryId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const currentType = INQUIRY_TYPES.find((t) => t.id === inquiryType) || INQUIRY_TYPES[0];

  return (
    <div className="min-h-screen bg-[#F4F9FB] text-[#091E3A]">
      {/* Page Header */}
      <PageHeader
        badge="GET IN TOUCH"
        title="Every Great Beginning Starts With a Conversation."
        subtitle="Whether you're exploring admissions, interested in a franchise or looking to understand our curriculum, we'd love to connect."
      />

      <FlowyWaveDivider fill="#FFFFFF" accentColor="#60C8D4" />

      {/* 4 Dedicated Inquiries Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-4 py-1.5 rounded-full bg-[#8ed727] text-[#091E3A] text-xs font-black uppercase tracking-widest">
              HOW CAN WE HELP YOU TODAY?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#091E3A] tracking-tight mt-3 mb-4">
              Dedicated Support for Families & Partners
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Select your inquiry channel below to connect directly with the right department.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INQUIRY_TYPES.map((type) => {
              const Icon = type.icon;
              const isSelected = inquiryType === type.id;
              return (
                <motion.div
                  key={type.id}
                  whileHover={{ y: -6 }}
                  onClick={() => handleInquiryChange(type.id)}
                  className={`p-7 rounded-[32px] cursor-pointer transition-all border-2 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#091E3A] text-white border-[#8ed727] shadow-xl scale-105 ring-2 ring-[#8ed727]/30'
                      : 'bg-[#F4F9FB] text-[#091E3A] border-slate-200/80 hover:border-[#60C8D4]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        isSelected ? 'bg-[#8ed727] text-[#091E3A]' : 'bg-[#091E3A] text-[#8ed727]'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isSelected ? 'bg-white/15 text-[#8ed727]' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {type.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-black mb-2">
                      {type.label}
                    </h3>
                    <p className={`text-xs leading-relaxed font-medium ${
                      isSelected ? 'text-white/80' : 'text-slate-600'
                    }`}>
                      {type.desc}
                    </p>
                  </div>

                  <div className={`mt-5 pt-3 border-t text-[11px] font-bold flex items-center justify-between ${
                    isSelected ? 'border-white/20 text-[#8ed727]' : 'border-slate-300 text-[#091E3A]'
                  }`}>
                    <span>{isSelected ? '✓ Active Channel' : 'Select Form'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Details & Interactive Form */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F4F9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-10 rounded-[36px] bg-white border-2 border-white shadow-xl space-y-6">
                <span className="px-3.5 py-1 rounded-full bg-[#60C8D4]/20 text-[#091E3A] font-extrabold text-xs uppercase tracking-wider">
                  DIRECT CONTACT INFO
                </span>
                <h3 className="text-2xl font-black text-[#091E3A]">
                  Central Admissions & Corporate Desk
                </h3>

                <div className="space-y-5 text-sm font-medium text-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#091E3A] text-[#8ed727] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Official Phone Helpline</div>
                      <a href="tel:+919647974093" className="text-base font-extrabold text-[#091E3A] hover:text-[#60C8D4]">
                        +91 96479 74093
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#091E3A] text-[#60C8D4] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Official Email</div>
                      <a href="mailto:gfecerofficial@gmail.com" className="text-base font-extrabold text-[#091E3A] hover:text-[#60C8D4]">
                        gfecerofficial@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#091E3A] text-[#8ed727] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Visiting & Campus Hours</div>
                      <div className="text-sm font-bold text-[#091E3A]">
                        Monday – Saturday: 8:30 AM – 5:30 PM IST
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#091E3A] text-[#60C8D4] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Corporate & Flagship Discovery Campus</div>
                      <div className="text-sm font-semibold text-slate-700">
                        Blooming Era Preschools Corporate Office & Discovery Campus, India
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <button
                    onClick={onOpenTourModal}
                    className="w-full btn-lime py-3 rounded-2xl text-xs font-black shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Schedule an In-Person Discovery Visit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dynamic Form Column (Consistent with Actual Pages) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-[36px] bg-white border-2 border-white shadow-xl">
                
                {/* Header with Channel Identifier */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-2xl font-black text-[#091E3A]">
                      {currentType.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      {currentType.desc}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#091E3A] text-[#8ed727] text-xs font-mono font-bold uppercase tracking-wider">
                    {inquiryType.toUpperCase()}
                  </span>
                </div>

                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-2xl font-black">
                      ✓
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300">
                      <span className="text-xs font-mono font-bold text-[#091E3A] tracking-wider">
                        Enquiry ID: {enquiryId}
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
                    <h3 className="text-2xl font-extrabold text-[#091E3A]">
                      {inquiryType === 'admissions' ? 'Admission Enquiry Submitted!' :
                       inquiryType === 'franchise' ? 'Franchise Request Received!' :
                       inquiryType === 'careers' ? 'Application Received!' :
                       'Message Successfully Sent!'}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto font-medium">
                      Thank you, <b>{formData.name}</b>. Your submission has been logged under ID <b>{enquiryId}</b> and dispatched to our {currentType.label} desk. We will reach out to you at <b>{formData.phone}</b>.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setEnquiryId(null);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 text-[#091E3A] font-bold text-xs hover:bg-slate-200 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {submitError && (
                      <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                        {submitError}
                      </div>
                    )}

                    {/* CHANNEL 1: ADMISSIONS FORM (Consistent with AdmissionsPage) */}
                    {inquiryType === 'admissions' && (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Parent's Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Priya Sharma"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Contact Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="e.g. +91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Email Address
                            </label>
                            <input
                              type="email"
                              placeholder="parent@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Child's Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Aarav Sharma"
                              value={formData.childName}
                              onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Programme Seeking *
                            </label>
                            <select
                              value={formData.programme}
                              onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            >
                              <option>Playgroup (Ages 2–3)</option>
                              <option>Nursery (Ages 3–4)</option>
                              <option>Junior KG (Ages 4–5)</option>
                              <option>Senior KG (Ages 5–6)</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Preferred Campus / City
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Bengaluru / Ranchi / New Delhi"
                              value={formData.city}
                              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                            Specific Questions or Child Notes
                          </label>
                          <textarea
                            rows="3"
                            placeholder="Tell us about your child's age, special interests, or any questions about admissions..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                          />
                        </div>
                      </>
                    )}

                    {/* CHANNEL 2: FRANCHISE FORM (Consistent with FranchisePage) */}
                    {inquiryType === 'franchise' && (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Rajesh Singhania"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Email Address
                            </label>
                            <input
                              type="email"
                              placeholder="partner@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Proposed City / Territory *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Pune, Jaipur, Indore, Ranchi"
                              value={formData.city}
                              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Investment Capacity
                            </label>
                            <select
                              value={formData.investmentBudget}
                              onChange={(e) => setFormData({ ...formData, investmentBudget: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            >
                              <option>₹5–10 Lakh</option>
                              <option>₹10–15 Lakh</option>
                              <option>₹15–25 Lakh</option>
                              <option>₹25+ Lakh (Multi-Centre / Flagship)</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Property Status
                            </label>
                            <select
                              value={formData.propertyStatus}
                              onChange={(e) => setFormData({ ...formData, propertyStatus: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            >
                              <option>Rented commercial space ready</option>
                              <option>Self-owned residential / commercial space</option>
                              <option>Currently scouting location</option>
                              <option>Seeking location guidance from brand</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                            Background & Target Launch Date
                          </label>
                          <textarea
                            rows="3"
                            placeholder="Share your business/education background and when you plan to inaugurate your campus..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                          />
                        </div>
                      </>
                    )}

                    {/* CHANNEL 3: CAREERS FORM (Consistent with Educator Needs) */}
                    {inquiryType === 'careers' && (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="educator@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Preferred City / Center Location
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Ranchi / New Delhi / Open to relocate"
                              value={formData.city}
                              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Position Applied For *
                            </label>
                            <select
                              value={formData.careerRole}
                              onChange={(e) => setFormData({ ...formData, careerRole: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            >
                              <option>Lead Nursery Educator</option>
                              <option>Playgroup Facilitator</option>
                              <option>Kindergarten Head Teacher (Jr/Sr KG)</option>
                              <option>Center Head / Academic Coordinator</option>
                              <option>STEAM & WonderLab Activity Specialist</option>
                              <option>Daycare & Infant Care Facilitator</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Teaching Experience
                            </label>
                            <select
                              value={formData.experience}
                              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            >
                              <option>Fresher / Passionate Trainee</option>
                              <option>1–3 Years Early Years Experience</option>
                              <option>3–5 Years Preschool Experience</option>
                              <option>5+ Years Senior Educator / Coordinator</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                            Brief Bio, Qualifications & Portfolio Link
                          </label>
                          <textarea
                            rows="3"
                            placeholder="Tell us about your educational philosophy, credentials (e.g. NTT, ECCE, B.Ed) or paste a link to your LinkedIn/Resume..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                          />
                        </div>
                      </>
                    )}

                    {/* CHANNEL 4: GENERAL ENQUIRIES */}
                    {inquiryType === 'general' && (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Email Address
                            </label>
                            <input
                              type="email"
                              placeholder="you@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                              Subject / Department
                            </label>
                            <select
                              value={formData.generalTopic}
                              onChange={(e) => setFormData({ ...formData, generalTopic: e.target.value })}
                              className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                            >
                              <option>Academic Partnerships</option>
                              <option>Vendor & Supply Proposals</option>
                              <option>Press & Media Relations</option>
                              <option>General Support / Feedback</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                            Your Message / Details *
                          </label>
                          <textarea
                            rows="4"
                            required
                            placeholder="Please provide details regarding your inquiry..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                          />
                        </div>
                      </>
                    )}

                    <motion.button
                      whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-lime py-4 rounded-2xl text-sm font-black shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed group transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting {currentType.label}...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit {currentType.label}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
