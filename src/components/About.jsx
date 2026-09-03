"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-cream-200 text-brown-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <AnimatedSection>
            <div className="w-12 h-[1px] bg-gold-500 mb-6 mx-auto md:mx-0"></div>
            <h2 className="text-gold-600 tracking-[0.4em] uppercase text-xs font-semibold mb-4">About Mehndi Marvel</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-snug mb-6 text-balance drop-shadow-sm">
              Making Your Special Moments More Beautiful
            </p>
            <p className="text-brown-900/80 font-light text-lg leading-relaxed mb-6">
              <strong>Mehndi Marvel</strong>, founded by <strong>Monika Sharma</strong>, is a professional mehndi studio based in <strong>Udaipur, Rajasthan</strong>. 
            </p>
            <p className="text-brown-900/80 font-light text-lg leading-relaxed mb-6">
              We create beautiful <strong>bridal, engagement, Arabic, festive, and customized mehndi designs</strong>. Every design is carefully made with love and attention to detail using <strong>100% organic henna</strong>.
            </p>
            <p className="text-brown-900/80 font-light text-lg leading-relaxed mb-8">
              Our goal is to make your special moments <strong>more beautiful, memorable, and unique</strong>.
            </p>
            <div className="w-12 h-[1px] bg-gold-500/50 mt-2 mx-auto md:mx-0"></div>
          </AnimatedSection>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <AnimatedSection delay={0.2} className="relative w-[80%] max-w-sm aspect-[4/5] group">
            {/* Decorative Offset Border */}
            <div className="absolute top-4 -right-4 md:top-6 md:-right-6 w-full h-full border-2 border-gold-500/30 rounded-2xl z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/50 bg-white">
              <Image 
                src="/me.png" 
                alt="Monika Sharma - Founder of Mehndi Marvel" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
              />
              
              {/* Overlay Label */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-lg shadow-xl border border-gold-500/20 text-center min-w-[180px] z-20">
                <h3 className="font-serif text-brown-900 text-lg font-bold">Monika Sharma</h3>
                <p className="text-gold-600 uppercase tracking-widest text-[9px] font-semibold mt-1">Founder & Mehndi Artist</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
