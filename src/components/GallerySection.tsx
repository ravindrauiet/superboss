'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';

const GALLERY_IMAGES = [
  { id: 1, src: '/assets/cleaning-1.jpg', title: 'Oven Cavity & Rack Degreasing', category: 'Kitchen & Oven', location: 'Subiaco WA' },
  { id: 2, src: '/assets/cleaning-2.jpg', title: 'Shower Glass Scum Descaling', category: 'Bathrooms & Tiles', location: 'Scarborough WA' },
  { id: 3, src: '/assets/cleaning-3.jpg', title: 'Window Sliding Tracks Cleaned', category: 'Windows & Tracks', location: 'Joondalup WA' },
  { id: 4, src: '/assets/cleaning-4.jpg', title: 'Edge-to-Edge Vacate Living Room', category: 'Living & Vacate Results', location: 'Fremantle WA' },
  { id: 5, src: '/assets/cleaning-5.jpg', title: 'Kitchen Benchtops & Splashback', category: 'Kitchen & Oven', location: 'Perth CBD' },
  { id: 6, src: '/assets/cleaning-6.jpg', title: 'Vanity Mirror & Basin Detail', category: 'Bathrooms & Tiles', location: 'Mount Lawley WA' },
  { id: 7, src: '/assets/cleaning-7.jpg', title: 'Polished Hardwood Floor Mopping', category: 'Living & Vacate Results', location: 'South Perth WA' },
  { id: 8, src: '/assets/cleaning-8.jpg', title: 'Rangehood Filter & Fan Polish', category: 'Kitchen & Oven', location: 'Hillarys WA' },
  { id: 9, src: '/assets/cleaning-9.jpg', title: 'Tile Grout & Baseboard Wipe', category: 'Bathrooms & Tiles', location: 'Victoria Park WA' },
  { id: 10, src: '/assets/cleaning-10.jpg', title: 'Internal Glass Pane Streak-Free', category: 'Windows & Tracks', location: 'Cockburn WA' },
  { id: 11, src: '/assets/cleaning-11.jpg', title: 'Built-in Wardrobe Shelving Clean', category: 'Living & Vacate Results', location: 'Rockingham WA' },
  { id: 12, src: '/assets/cleaning-12.jpg', title: 'Dishwasher Door & Filter Wash', category: 'Kitchen & Oven', location: 'Cannington WA' },
  { id: 13, src: '/assets/cleaning-13.jpg', title: 'Toilet Sanitisation & Pipework', category: 'Bathrooms & Tiles', location: 'Leederville WA' },
  { id: 14, src: '/assets/cleaning-14.jpg', title: 'Balcony Sliding Door Track Detail', category: 'Windows & Tracks', location: 'Applecross WA' },
  { id: 15, src: '/assets/cleaning-15.jpg', title: 'Laundry Basin & Tapware Polish', category: 'Bathrooms & Tiles', location: 'Belmont WA' },
  { id: 16, src: '/assets/cleaning-16.jpg', title: 'Stovetop Burners & Knobs Clean', category: 'Kitchen & Oven', location: 'Innaloo WA' },
  { id: 17, src: '/assets/cleaning-17.jpg', title: 'Skirting Boards & Ledges Wipe', category: 'Living & Vacate Results', location: 'Melville WA' },
  { id: 18, src: '/assets/cleaning-18.jpg', title: 'Final Inspection Handover Ready', category: 'Living & Vacate Results', location: 'Subiaco WA' }
];

const CATEGORIES = ['All Photos (18)', 'Kitchen & Oven', 'Bathrooms & Tiles', 'Windows & Tracks', 'Living & Vacate Results'];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All Photos (18)');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'All Photos (18)'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section className="py-14 bg-slate-100 border-b border-slate-200" id="proof-of-work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-[8px] uppercase tracking-wider inline-block mb-1 border border-brand-200">
            Real Perth Property Work
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
            100% Real Estate Passed Cleaning Portfolio
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 font-normal">
            Browse 18 actual photos from our recent bond, vacate, and end-of-lease cleans across Perth homes.
          </p>
        </div>

        {/* Category Filter Chips (Light Theme) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-bold rounded-[8px] transition-colors border ${
                activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 border-amber-500'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 18 Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img.src)}
              className="group relative h-48 rounded-[8px] overflow-hidden cursor-pointer border border-slate-200 bg-white transition-all hover:border-brand-500 shadow-xs"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 16vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-2 left-2">
                <span className="text-[9px] font-extrabold text-slate-900 bg-white/90 px-1.5 py-0.5 rounded-[8px] border border-slate-200">
                  #{img.id}
                </span>
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <h4 className="text-[11px] font-bold leading-snug line-clamp-1 group-hover:text-amber-300">
                  {img.title}
                </h4>
                <div className="flex items-center justify-between text-[10px] text-slate-300 mt-0.5 font-medium">
                  <span>{img.location}</span>
                  <Maximize2 className="w-3 h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal (Light Backdrop) */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 p-2 bg-white text-slate-900 hover:bg-slate-100 rounded-[8px] transition-colors border border-slate-200"
            aria-label="Close photo"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-[75vh] rounded-[8px] overflow-hidden border border-slate-200 bg-white">
            <Image
              src={selectedImage}
              alt="Perth Bond Clean Photo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
