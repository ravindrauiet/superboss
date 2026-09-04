'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal: (service?: string) => void;
}

export default function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Light Announcement Bar */}
      <div className="bg-slate-100 text-slate-800 text-xs py-2 px-4 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-bold text-emerald-700">100% Bond Back Guarantee</span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:inline text-slate-600 font-medium">Real Estate Approved Perth Specialists</span>
          </div>
          <div className="text-slate-600 text-[11px] sm:text-xs font-semibold">
            7 Days: 7am – 8pm AWST · Fast 15-Min Quote Response
          </div>
        </div>
      </div>

      {/* Main Light Glassmorphic Header */}
      <header className="glass-nav-light sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-brand-600 rounded-[8px] flex items-center justify-center text-white font-black text-lg shadow-xs">
              S
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-lg font-black tracking-tight text-slate-900">CLEANING SUPERBOSS</span>
              </div>
              <p className="text-[10px] font-bold text-brand-600 uppercase tracking-wider -mt-1">
                Perth Bond Cleaning & Vacate
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-700 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold rounded-[8px] transition-colors shadow-xs"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-[8px] border border-slate-200 text-slate-700 hover:bg-white/80"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-[8px]"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-2.5 bg-amber-500 text-slate-950 font-black text-xs rounded-[8px]"
              >
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
