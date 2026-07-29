"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function MeetArtist() {
  return (
    <section className="py-24 px-6 bg-cream-100 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Portrait Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[85%] sm:w-[70%] lg:w-[80%] aspect-[4/5] max-w-sm rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl border border-white/50 group">
            {/* Outer Decorative Line */}
            <div className="absolute -inset-4 border border-gold-500/40 rounded-t-full rounded-b-2xl z-0 transition-transform duration-1000 ease-out group-hover:scale-105 pointer-events-none"></div>
            <div className="absolute inset-0 bg-brown-900/10 z-10 group-hover:bg-transparent transition-colors duration-1000"></div>
            
            <Image 
              src="/bridal.jpeg" 
              alt="Monika Sharma - Founder" 
              fill
              className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Name Badge */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-8 py-4 rounded-xl shadow-xl z-20 border border-gold-500/20 text-center min-w-[200px]">
              <h3 className="font-serif text-brown-900 text-xl font-bold">Monika Sharma</h3>
              <p className="text-gold-600 uppercase tracking-widest text-[9px] font-semibold mt-1">Lead Artist & Founder</p>
            </div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-full lg:w-1/2 text-center lg:text-left relative z-10"
        >
          <div className="w-12 h-[1px] bg-gold-500 mx-auto lg:mx-0 mb-6"></div>
          <h2 className="text-gold-600 tracking-[0.4em] uppercase text-xs font-semibold mb-4">Meet The Artist</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-brown-900 mb-6 drop-shadow-sm leading-tight">
            Crafting Memories With Every Stroke
          </p>
          
          <p className="text-brown-900/80 font-light text-base md:text-lg leading-relaxed mb-6">
            With over <strong className="font-medium text-brown-900">8 years of experience</strong> as a luxury bridal specialist, my passion is creating bespoke mehndi designs that reflect your unique love story. 
          </p>
          <p className="text-brown-900/80 font-light text-base md:text-lg leading-relaxed mb-10">
            From deeply traditional Rajasthani motifs to chic modern Arabic patterns, I believe your bridal mehndi should be nothing short of a masterpiece. My personalized approach ensures that every bride receives unparalleled attention to detail, organic premium henna, and an absolutely flawless dark stain for her special day.
          </p>

          <div className="pl-6 border-l-2 border-gold-500/50 relative">
            <span className="absolute -top-4 -left-4 text-6xl text-gold-500/20 font-serif leading-none">"</span>
            <p className="text-2xl md:text-3xl font-script text-gold-600 leading-relaxed mb-4">
              Mehndi is not just an art, it is the beautiful beginning of your forever.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
