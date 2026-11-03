import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, MessageCircle,
  Briefcase, GraduationCap, Building, Sparkles, Loader2, Copy, Check
} from 'lucide-react';
import { FlowyWaveDivider, PageHeader } from './shared';
import { submitForm } from '../../services/formService';

const INQUIRY_TYPES = [
  { id: 'admissions', label: 'For Parents: Admissions', desc: 'Preschool programmes (Playgroup, Nursery, Jr & Sr KG), fee structure, and tours.', icon: GraduationCap },
  { id: 'franchise', label: 'For Entrepreneurs: Franchise', desc: 'Preschool franchise opportunities, investment details, and territory availability.', icon: Building },
  { id: 'careers', label: 'For Educators: Careers', desc: 'Join our team of visionary early-childhood educators and centre heads.', icon: Briefcase },
  { id: 'general', label: 'General Enquiries', desc: 'Academic partnerships, media, vendors and general community inquiries.', icon: MessageCircle }
];

export default function ContactPage({ onOpenTourModal }) {
  const [inquiryType, setInquiryType] = useState('admissions');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [enquiryId, setEnquiryId] = useState(null);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitForm({
      formType: 'contact',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      inquiryType: inquiryType,
      message: formData.message || ''
    });

    setIsSubmitting(false);

    if (result.success) {
      setEnquiryId(result.enquiryId || `CA${Date.now().toString().slice(-6)}`);
      setSubmitted(true);
    } else {
      setSubmitError(result.error || 'Failed to send your message. Please try again.');
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INQUIRY_TYPES.map((type) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.id}
                  whileHover={{ y: -6 }}
                  onClick={() => setInquiryType(type.id)}
                  className={`p-7 rounded-[32px] cursor-pointer transition-all border-2 flex flex-col justify-between ${
                    inquiryType === type.id
                      ? 'bg-[#091E3A] text-white border-[#8ed727] shadow-xl scale-105'
                      : 'bg-[#F4F9FB] text-[#091E3A] border-slate-200/80 hover:border-[#60C8D4]'
                  }`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                      inquiryType === type.id ? 'bg-[#8ed727] text-[#091E3A]' : 'bg-[#091E3A] text-[#8ed727]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black mb-2">
                      {type.label}
                    </h3>
                    <p className={`text-xs leading-relaxed font-medium ${
                      inquiryType === type.id ? 'text-white/80' : 'text-slate-600'
                    }`}>
                      {type.desc}
                    </p>
                  </div>
                  <div className={`mt-5 pt-3 border-t text-[11px] font-bold flex items-center gap-1 ${
                    inquiryType === type.id ? 'border-white/20 text-[#8ed727]' : 'border-slate-300 text-[#091E3A]'
                  }`}>
                    <span>{inquiryType === type.id ? 'Selected' : 'Select Channel'}</span>
                    <ArrowRight className="w-3 h-3" />
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
                      <a href="mailto:contact@bloomingera.com" className="text-base font-extrabold text-[#091E3A] hover:text-[#60C8D4]">
                        contact@bloomingera.com
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

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-[36px] bg-white border-2 border-white shadow-xl">
                <h3 className="text-2xl font-black text-[#091E3A] mb-1">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-6">
                  Channel: <b className="text-[#091E3A] uppercase">{inquiryType}</b>
                </p>

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
                    <h3 className="text-2xl font-extrabold text-[#091E3A]">Message Successfully Sent!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto font-medium">
                      Thank you, <b>{formData.name}</b>. Your enquiry has been logged under ID <b>{enquiryId}</b> and routed to our specialized <b>{inquiryType}</b> team. You will hear from us shortly at <b>{formData.phone}</b>.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setEnquiryId(null);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 text-[#091E3A] font-bold text-xs hover:bg-slate-200 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {submitError && (
                      <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                        {submitError}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Phone Number *</label>
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
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Email Address</label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">City / Location</label>
                        <input
                          type="text"
                          placeholder="Your city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Your Message / Query</label>
                      <textarea
                        rows="4"
                        placeholder="Tell us what you'd like to know or discuss..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F4F9FB] border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#091E3A]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-lime py-3.5 rounded-2xl text-sm font-black shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
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
