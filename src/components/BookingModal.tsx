'use client';

import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Phone, Lock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function BookingModal({ isOpen, onClose, defaultService }: BookingModalProps) {
  const [service, setService] = useState(defaultService || 'Bond Cleaning Perth');
  const [bedrooms, setBedrooms] = useState('2 Bedrooms');
  const [bathrooms, setBathrooms] = useState('2 Bathrooms');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [suburb, setSuburb] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-[8px] shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 relative border-b border-slate-800">
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-[8px] transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
            Instant Quote & Booking · Perth
          </span>
          <h3 className="text-xl font-black text-white mt-0.5">Request a Quote</h3>
          <p className="text-xs text-slate-400 mt-0.5">Perth Bond Cleaning · Fast 15-Min Response</p>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-[8px] flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Request Received!</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you <strong className="text-slate-900">{name}</strong>! We will call or SMS you at{' '}
                <strong className="text-brand-600">{phone}</strong> within 15 minutes.
              </p>
              <div className="p-3 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-[8px] border border-emerald-200 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                100% Bond Back Guarantee & 72h Free Reclean Included
              </div>
              <button
                onClick={resetAndClose}
                className="mt-4 px-5 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-[8px] hover:bg-slate-800"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                  Service Needed *
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    'Bond Cleaning Perth',
                    'End of Lease Cleaning',
                    'Vacate Cleaning Perth'
                  ].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setService(s)}
                      className={`p-2 text-[11px] font-bold rounded-[8px] border text-center transition-colors ${
                        service === s
                          ? 'bg-brand-600 text-white border-brand-600'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {s.replace(' Perth', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bedrooms & Bathrooms */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Bedrooms
                  </label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-[8px] text-xs font-medium focus:outline-none"
                  >
                    <option value="Studio">Studio</option>
                    <option value="1 Bedroom">1 Bedroom</option>
                    <option value="2 Bedrooms">2 Bedrooms</option>
                    <option value="3 Bedrooms">3 Bedrooms</option>
                    <option value="4 Bedrooms">4 Bedrooms</option>
                    <option value="5+ Bedrooms">5+ Bedrooms</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Bathrooms
                  </label>
                  <select
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-[8px] text-xs font-medium focus:outline-none"
                  >
                    <option value="1 Bathroom">1 Bathroom</option>
                    <option value="2 Bathrooms">2 Bathrooms</option>
                    <option value="3 Bathrooms">3 Bathrooms</option>
                    <option value="4+ Bathrooms">4+ Bathrooms</option>
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-[8px] text-xs font-medium focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0400 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-[8px] text-xs font-medium focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                  Perth Suburb *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Scarborough, Subiaco"
                  value={suburb}
                  onChange={(e) => setSuburb(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-[8px] text-xs font-medium focus:outline-none"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-[8px] transition-colors"
                >
                  Request Free Quote (Fast 15-Min Response)
                </button>
              </div>

              <div className="text-center text-[10px] text-slate-500 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>🔒 Free quote · Fast 15-min response · No obligation</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
