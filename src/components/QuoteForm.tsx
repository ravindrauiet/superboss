'use client';

import React, { useState } from 'react';
import { Phone, Star, ArrowRight, CheckCircle2, Home, Building, ShieldCheck, MapPin, Calendar, User, Mail } from 'lucide-react';

interface QuoteFormProps {
  onOpenBookingModal?: (service?: string) => void;
}

export default function QuoteForm({ onOpenBookingModal }: QuoteFormProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [service, setService] = useState('Bond Cleaning Perth');
  const [propertyType, setPropertyType] = useState('House');
  const [bedrooms, setBedrooms] = useState('2');
  const [bathrooms, setBathrooms] = useState('2');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [suburb, setSuburb] = useState('');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full glass-card-light rounded-[8px] p-6 sm:p-7 border border-white/80 shadow-xl relative overflow-hidden">
      
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-200/60">
        <div>
          <span className="text-[10px] font-extrabold text-brand-700 bg-brand-50/90 backdrop-blur-md px-2.5 py-1 rounded-[8px] uppercase tracking-wider inline-block mb-1 border border-brand-200/80">
            Fast 15-Min Response
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">Request a Quote</h3>
        </div>
        <div className="text-right">
          <a href="tel:+61460849843" className="text-xs font-black text-slate-900 hover:text-brand-600 flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-brand-600" /> +61 460 849 843
          </a>
          <div className="flex items-center justify-end gap-1 text-[11px] font-semibold text-slate-500 mt-0.5">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>4.9/5.0 (850+ Moves)</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-600 mb-1.5">
          <span className={step === 1 ? 'text-brand-600 font-black' : 'text-slate-500'}>
            Step 1: Property Details
          </span>
          <span className={step === 2 ? 'text-brand-600 font-black' : 'text-slate-400'}>
            Step 2: Contact & Date
          </span>
        </div>
        <div className="w-full bg-slate-200/80 h-1.5 rounded-[8px] overflow-hidden">
          <div
            className="bg-brand-600 h-full transition-all duration-300"
            style={{ width: step === 1 ? '50%' : '100%' }}
          />
        </div>
      </div>

      {submitted ? (
        <div className="py-8 text-center space-y-3">
          <div className="w-14 h-14 bg-emerald-100/90 backdrop-blur-md text-emerald-600 rounded-[8px] flex items-center justify-center mx-auto mb-2 border border-emerald-200">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h4 className="text-2xl font-black text-slate-900">Quote Request Received!</h4>
          <p className="text-xs text-slate-600 max-w-sm mx-auto font-normal">
            Thanks <strong className="text-slate-900">{fullName}</strong>! Our Perth team will call or SMS you at{' '}
            <strong className="text-brand-600">{phoneNumber}</strong> within 15 minutes.
          </p>
          <div className="p-3 bg-emerald-50/90 backdrop-blur-md text-emerald-900 text-xs font-semibold rounded-[8px] border border-emerald-200 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>100% Bond Back Guarantee & 72h Free Reclean Reserved</span>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setStep(1);
            }}
            className="mt-3 px-5 py-2.5 bg-white/90 backdrop-blur-md text-slate-700 font-extrabold text-xs rounded-[8px] hover:bg-white border border-slate-200"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleNextStep} className="space-y-4">
          
          {step === 1 ? (
            /* STEP 1: Property Details */
            <div className="space-y-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                  Select Service
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'Bond Cleaning Perth', label: 'Bond Clean' },
                    { id: 'End of Lease Cleaning Perth', label: 'End of Lease' },
                    { id: 'Vacate Cleaning Perth', label: 'Vacate Clean' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setService(s.id)}
                      className={`py-2.5 px-2 rounded-[8px] text-xs font-extrabold transition-all border text-center ${
                        service === s.id
                          ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                          : 'bg-white/80 backdrop-blur-sm text-slate-700 border-slate-200 hover:bg-white'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Type Grid */}
              <div>
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                  Property Type
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { type: 'House', icon: Home },
                    { type: 'Unit / Apt', icon: Building },
                    { type: 'Townhouse', icon: Home },
                    { type: 'Villa', icon: Home }
                  ].map((p) => {
                    const Icon = p.icon;
                    const isSelected = propertyType === p.type;
                    return (
                      <button
                        key={p.type}
                        type="button"
                        onClick={() => setPropertyType(p.type)}
                        className={`p-2 rounded-[8px] text-xs font-bold border text-center flex flex-col items-center justify-center gap-1 transition-all ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white/80 backdrop-blur-sm text-slate-700 border-slate-200 hover:bg-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-[10px]">{p.type}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bedrooms Tactile Chips */}
              <div>
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                  Bedrooms
                </label>
                <div className="grid grid-cols-6 gap-1.5">
                  {['Studio', '1', '2', '3', '4', '5+'].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setBedrooms(num)}
                      className={`py-2 text-xs font-black rounded-[8px] border text-center transition-all ${
                        bedrooms === num
                          ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                          : 'bg-white/80 backdrop-blur-sm text-slate-700 border-slate-200 hover:bg-white'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bathrooms Tactile Chips */}
              <div>
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                  Bathrooms
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {['1', '2', '3', '4+'].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setBathrooms(num)}
                      className={`py-2 text-xs font-black rounded-[8px] border text-center transition-all ${
                        bathrooms === num
                          ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                          : 'bg-white/80 backdrop-blur-sm text-slate-700 border-slate-200 hover:bg-white'
                      }`}
                    >
                      {num} {num === '1' ? 'Bath' : 'Baths'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-black text-xs rounded-[8px] transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Continue to Step 2 (Contact & Suburb)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : (
            /* STEP 2: Contact Info & Date */
            <div className="space-y-4">
              
              <div>
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2.5 pl-9 bg-white/90 border border-slate-200 rounded-[8px] text-xs font-semibold focus:ring-1 focus:ring-brand-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="0400 000 000"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full p-2.5 pl-9 bg-white/90 border border-slate-200 rounded-[8px] text-xs font-semibold focus:ring-1 focus:ring-brand-600 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      className="w-full p-2.5 pl-9 bg-white/90 border border-slate-200 rounded-[8px] text-xs font-semibold focus:ring-1 focus:ring-brand-600 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1">
                    Perth Suburb *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Scarborough"
                      value={suburb}
                      onChange={(e) => setSuburb(e.target.value)}
                      className="w-full p-2.5 pl-9 bg-white/90 border border-slate-200 rounded-[8px] text-xs font-semibold focus:ring-1 focus:ring-brand-600 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full p-2.5 pl-9 bg-white/90 border border-slate-200 rounded-[8px] text-xs font-semibold focus:ring-1 focus:ring-brand-600 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-[8px] transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs rounded-[8px] transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Submit Quote Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </form>
      )}

    </div>
  );
}
