"use client";

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-cream-100 py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <a href="/" className="flex flex-col items-center mb-10 group">
          <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-[0_8px_30px_rgba(212,175,55,0.15)] flex items-center justify-center border border-gold-500/20 mb-6 transition-transform duration-500 group-hover:-translate-y-1 overflow-hidden">
            <Image src="/logo/logo.jpg" alt="Mehndi Marvel Logo" fill sizes="(max-width: 768px) 128px, 160px" className="object-cover rounded-full scale-[1.1]" loading="lazy" />
          </div>
          <span className="text-xs md:text-sm tracking-[0.4em] uppercase text-gold-500 font-medium">The Art of Celebration</span>
        </a>
        
        <div className="flex gap-8 mb-12">
          <a href="/#services" className="text-xs uppercase tracking-widest text-cream-200 hover:text-gold-500 transition-colors">Services</a>
          <a href="/#gallery" className="text-xs uppercase tracking-widest text-cream-200 hover:text-gold-500 transition-colors">Gallery</a>
          <a href="/#contact" className="text-xs uppercase tracking-widest text-cream-200 hover:text-gold-500 transition-colors">Contact</a>
        </div>

        <p className="text-cream-200/50 text-xs font-light tracking-wide">
          &copy; 2026 Mehndi Marvel. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
