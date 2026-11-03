import React, { useState } from 'react';
import { X, Sparkles, Calendar, Clock, MapPin, CheckCircle2, User, Phone, Mail, ArrowRight, Loader2, Copy, Check } from 'lucide-react';
import { BRAND, PROGRAMMES } from '../data/websiteContent';
import { submitForm } from '../services/formService';

export default function TourBookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [enquiryId, setEnquiryId] = useState(null);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '3.5',
    programme: 'nursery',
    preferredDate: '',
    timeSlot: '10:30 AM – 11:30 AM (Interactive Classroom Tour)',
    location: 'Ranchi Main Campus (Ashok Nagar)',
    interests: []
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone || !formData.email || !formData.childName) {
      setSubmitError("Please fill in all required fields including parent name, phone, email, and child's name.");
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitForm({
      formType: 'tour',
      parentName: formData.parentName,
      phone: formData.phone,
      email: formData.email,
      childName: formData.childName,
      childAge: formData.childAge,
      campus: formData.location,
      date: formData.preferredDate,
      timeSlot: formData.timeSlot,
      notes: formData.interests?.join(', ') || ''
    });

    setIsSubmitting(false);

    if (result.success) {
      setEnquiryId(result.enquiryId || `TA${Date.now().toString().slice(-6)}`);
      setStep(2);
    } else {
      setSubmitError(result.error || 'Unable to book tour right now. Please check your connection and try again.');
    }
  };

  const handleCopyId = () => {
    if (enquiryId) {
      navigator.clipboard.writeText(enquiryId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setStep(1);
    setEnquiryId(null);
    setSubmitError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div className="glass-panel-elevated w-full max-w-xl bg-white/95 rounded-3xl border border-white shadow-2xl p-6 sm:p-8 relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-brand-navy/60 hover:text-brand-navy hover:bg-brand-navy/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-lime" />
              <span className="text-xs font-bold text-brand-turquoise-dark uppercase tracking-wider">
                Discovery Campus Experience
              </span>
            </div>
            
            <h3 className="text-2xl font-extrabold text-brand-navy tracking-tight font-display mb-1">
              Book a Personalized Tour
            </h3>
            <p className="text-xs text-brand-navy/70 mb-6">
              Bring your child for an experiential session inside our 6 Learning Worlds.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Parent & Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-brand-navy mb-1">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-brand-navy/40 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-brand-navy/15 focus:border-brand-turquoise focus:ring-1 focus:ring-brand-turquoise outline-none bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-brand-navy mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-brand-navy/40 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-brand-navy/15 focus:border-brand-turquoise focus:ring-1 focus:ring-brand-turquoise outline-none bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Email Address & Child Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-brand-navy mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-brand-navy/40 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-brand-navy/15 focus:border-brand-turquoise focus:ring-1 focus:ring-brand-turquoise outline-none bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-brand-navy mb-1">
                    Child's Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-brand-navy/15 focus:border-brand-turquoise focus:ring-1 focus:ring-brand-turquoise outline-none bg-white"
                  />
                </div>
              </div>

              {/* Child Info & Center */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-brand-navy mb-1">
                    Child's Age (Years) *
                  </label>
                  <select
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-brand-navy/15 focus:border-brand-turquoise focus:ring-1 focus:ring-brand-turquoise outline-none bg-white"
                  >
                    <option value="2.0">2.0 Years (Playgroup)</option>
                    <option value="2.5">2.5 Years (Playgroup)</option>
                    <option value="3.0">3.0 Years (Nursery)</option>
                    <option value="3.5">3.5 Years (Nursery)</option>
                    <option value="4.0">4.0 Years (Junior KG)</option>
                    <option value="4.5">4.5 Years (Junior KG)</option>
                    <option value="5.0">5.0 Years (Senior KG)</option>
                    <option value="5.5+">5.5+ Years (Senior KG / Daycare)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-brand-navy mb-1">
                    Select Center / Branch *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-brand-navy/40 absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-brand-navy/15 focus:border-brand-turquoise focus:ring-1 focus:ring-brand-turquoise outline-none bg-white"
                    >
                      <option value="Ranchi Main Campus (Ashok Nagar)">Ranchi Main Campus (Ashok Nagar)</option>
                      <option value="Ranchi Kanke Road Flagship">Ranchi Kanke Road Flagship</option>
                      <option value="New Delhi Hub (Dwarka)">New Delhi Hub (Dwarka)</option>
                      <option value="Virtual Walkthrough (Video Call)">Virtual Walkthrough (Video Call)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-[11px] font-bold text-brand-navy mb-1">
                  Preferred Visit Date *
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-brand-navy/40 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-brand-navy/15 focus:border-brand-turquoise focus:ring-1 focus:ring-brand-turquoise outline-none bg-white"
                  />
                </div>
              </div>

              {/* What to expect banner */}
              <div className="p-3 rounded-2xl bg-brand-turquoise/15 border border-brand-turquoise/30 text-[11px] text-brand-navy space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-brand-turquoise-dark">
                  <Sparkles className="w-3.5 h-3.5" />
                  What Happens During Your Tour:
                </span>
                <p className="text-brand-navy/80">
                  Your child spends 30 minutes engaging in a WonderLab hands-on station while parents receive a one-on-one briefing with the Center Academic Coordinator.
                </p>
              </div>

              {submitError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-lime w-full py-3 rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-brand-navy" />
                    <span>Booking Your Tour...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Tour Reservation</span>
                    <ArrowRight className="w-4 h-4 text-brand-navy" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Step 2: Confirmation Screen */
          <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-3xl bg-brand-lime mx-auto flex items-center justify-center shadow-lg border-2 border-brand-navy">
              <CheckCircle2 className="w-8 h-8 text-brand-navy" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-turquoise/15 border border-brand-turquoise/30">
                <span className="text-[11px] font-mono font-extrabold uppercase text-brand-navy tracking-wider">
                  Enquiry ID: {enquiryId}
                </span>
                <button
                  type="button"
                  onClick={handleCopyId}
                  title="Copy ID"
                  className="text-brand-navy/60 hover:text-brand-navy transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-brand-lime" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <h3 className="text-2xl font-extrabold text-brand-navy mt-2">
                Tour Reserved Successfully!
              </h3>
              <p className="text-xs text-brand-navy/70 mt-1 max-w-sm mx-auto">
                Thank you, <strong className="text-brand-navy">{formData.parentName || 'Parent'}</strong>! We have saved your visit in our admissions log and sent an alert to our campus team.
              </p>
            </div>

            {/* Tour Ticket Summary */}
            <div className="p-4 rounded-2xl bg-brand-navy/5 border border-brand-navy/10 text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-brand-navy/60">Booking ID:</span>
                <span className="font-mono font-bold text-brand-navy">{enquiryId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-navy/60">Campus:</span>
                <span className="font-bold text-brand-navy">{formData.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-navy/60">Scheduled Date:</span>
                <span className="font-bold text-brand-navy">{formData.preferredDate || 'Next Open Saturday'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-navy/60">Time Window:</span>
                <span className="font-bold text-brand-navy">{formData.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-navy/60">Contact Confirmed:</span>
                <span className="font-bold text-brand-navy">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-navy/60">Email:</span>
                <span className="font-bold text-brand-navy truncate max-w-[220px]">{formData.email}</span>
              </div>
            </div>

            <div className="text-[11px] text-brand-navy/60">
              A confirmation and visit reminder have been logged for {formData.phone} and {formData.email}.
            </div>

            <button
              onClick={handleReset}
              className="btn-turquoise px-6 py-2.5 rounded-xl text-xs font-bold"
            >
              Done & Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
