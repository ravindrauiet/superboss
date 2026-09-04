'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-white text-slate-600 pt-12 pb-8 border-t border-slate-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-200">
          
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-brand-600 rounded-[8px] text-white font-black text-sm flex items-center justify-center">
                S
              </div>
              <span className="text-sm font-black text-slate-900 tracking-tight">CLEANING SUPERBOSS LTD</span>
            </div>
            <p className="text-slate-600 leading-relaxed font-normal">
              Cleaning Superboss Ltd — registered in Australia, California & London. Providing hotel-grade residential, bond, and commercial cleaning with upfront pricing and police-checked cleaners nationwide.
            </p>
            <div className="space-y-1 text-slate-800 font-semibold pt-1">
              <p>ABN: 48 642 918 203</p>
              <p>Insurance: $10M Public Liability Cover</p>
              <p>Coverage: Australia, California & London</p>
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">OUR SERVICES</h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/services/home" className="hover:text-brand-600 transition-colors">
                  HOME CLEANING
                </Link>
              </li>
              <li>
                <Link href="/services/deep" className="hover:text-brand-600 transition-colors">
                  DEEP CLEANING
                </Link>
              </li>
              <li>
                <Link href="/services/bond" className="hover:text-brand-600 transition-colors text-brand-600 font-bold">
                  BOND CLEANING (VACATE)
                </Link>
              </li>
              <li>
                <Link href="/services/airbnb" className="hover:text-brand-600 transition-colors">
                  AIRBNB CLEANING
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="hover:text-brand-600 transition-colors">
                  COMMERCIAL CLEANING
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">CONTACT US</h4>
            <div className="space-y-2 text-slate-700 font-medium">
              <div>
                <span className="text-slate-400 block uppercase text-[10px]">DIRECT PHONE / SMS</span>
                <a href="tel:+61460849843" className="text-brand-600 font-bold hover:underline">
                  +61 460 849 843
                </a>
              </div>
              <div>
                <span className="text-slate-400 block uppercase text-[10px]">CUSTOMER SUPPORT EMAIL</span>
                <a href="mailto:hello@cleaningsuperboss.com" className="hover:text-brand-600">
                  hello@cleaningsuperboss.com
                </a>
              </div>
              <div>
                <span className="text-slate-400 block uppercase text-[10px]">SERVICE COVERAGE</span>
                <p className="text-slate-700">Serving Australia, California & London</p>
              </div>
              <div>
                <span className="text-slate-400 block uppercase text-[10px]">HOURS OF OPERATION</span>
                <p className="text-slate-700">Mon–Sun: 7:00 AM – 8:00 PM AEST</p>
              </div>
            </div>
          </div>

          {/* Newsletter Subscribe */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              SUBSCRIBE FOR EXCLUSIVE OFFERS & PLATFORM UPDATES
            </h4>
            {subscribed ? (
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-[8px] border border-emerald-200 font-semibold">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-[8px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-[8px] uppercase tracking-wider transition-colors"
                >
                  JOIN
                </button>
              </form>
            )}
            <p className="text-[10px] text-slate-500 font-normal">
              BY SUBSCRIBING, YOU AGREE TO OUR TERMS & PRIVACY POLICY.
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-slate-500 text-[11px] font-normal space-y-1">
          <p>© 2026 CLEANING SUPERBOSS LTD · ABN 48 642 918 203. ALL RIGHTS RESERVED.</p>
          <p className="text-slate-400 uppercase text-[10px]">REGISTERED IN AUSTRALIA, CALIFORNIA & LONDON</p>
        </div>

      </div>
    </footer>
  );
}
