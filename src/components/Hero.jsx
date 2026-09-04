"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center pt-32 pb-12 lg:pt-32 overflow-hidden bg-transparent z-10">
      
      {/* Background mandala subtle vector pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex justify-center items-center">
         <svg viewBox="0 0 100 100" className="w-[150%] h-[150%] md:w-[80%] md:h-[80%] text-brown-900 animate-[spin_120s_linear_infinite]">
            <path fill="currentColor" d="M50 0 A50 50 0 0 1 100 50 A50 50 0 0 1 50 100 A50 50 0 0 1 0 50 A50 50 0 0 1 50 0 Z M50 10 A40 40 0 0 0 10 50 A40 40 0 0 0 50 90 A40 40 0 0 0 90 50 A40 40 0 0 0 50 10 Z"/>
            {/* A simplified representation of a mandala pattern */}
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <path fill="none" stroke="currentColor" strokeWidth="1" d="M50 20 L50 80 M20 50 L80 50 M28.78 28.78 L71.21 71.21 M28.78 71.21 L71.21 28.78"/>
         </svg>
      </div>

      <div className="relative z-20 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-gold-500/80"></div>
            <p className="text-gold-600 tracking-[0.3em] uppercase text-xs font-semibold">
              Welcome To
            </p>
            <div className="w-12 h-[1px] bg-gold-500/80 lg:hidden"></div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-brown-900 flex flex-col mb-6 drop-shadow-md"
          >
            <span className="font-script text-7xl md:text-8xl lg:text-[100px] bg-gradient-to-r from-gold-600 via-[#D4AF37] to-gold-500 bg-clip-text text-transparent leading-[0.8] mb-2 font-normal drop-shadow-sm pb-2">Luxury</span>
            <span className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-brown-900">Bridal Mehndi Artist in Udaipur</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="text-brown-900/80 text-lg font-light max-w-md mb-10 text-balance leading-relaxed"
          >
            Create unforgettable wedding memories with elegant bridal mehndi designs by Monika Sharma. From intricate bridal patterns to modern Arabic styles, Mehndi Marvel brings creativity, elegance, and perfection to every celebration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/8209719892?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Mehndi%20appointment"
              target="_blank"
              rel="noreferrer"
              className="group relative w-full sm:w-auto px-10 py-4 bg-brown-900 text-cream-100 uppercase tracking-widest text-sm font-semibold overflow-hidden shadow-[0_0_20px_rgba(176,139,91,0.2)] transition-all duration-700 hover:shadow-[0_0_30px_rgba(176,139,91,0.4)] hover:-translate-y-1 text-center border border-brown-900"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-700">Book Now</span>
            </a>
            <a href="#gallery"
              className="w-full sm:w-auto px-10 py-4 border border-brown-900 text-brown-900 uppercase tracking-widest text-sm font-medium hover:bg-brown-900 hover:text-white transition-colors duration-700 text-center"
            >
              View Gallery
            </a>
          </motion.div>
          
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 w-full"
          >
            {[
              { label: "500+ Happy Brides" },
              { label: "100% Natural Mehndi" },
              { label: "Luxury Bridal Specialist" },
              { label: "Serving Udaipur" }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 group">
                <svg className="w-3.5 h-3.5 text-gold-500 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[10px] uppercase tracking-widest text-brown-900/70 font-semibold">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image Layout */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end group/hero-image"
        >
          {/* Main Image */}
          <div className="relative w-[90%] sm:w-[80%] lg:w-[100%] aspect-[4/3] max-w-lg mt-6 lg:mt-0">
            {/* Outer Decorative Line */}
            <div className="absolute -inset-4 border border-gold-500/40 rounded-2xl z-0 transition-transform duration-1000 ease-out group-hover/hero-image:scale-105"></div>
            <div className="absolute -inset-6 border border-gold-500/20 rounded-[2rem] z-0 transition-transform duration-1000 ease-out delay-75 group-hover/hero-image:scale-[1.07]"></div>
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/50 bg-white">
              <Image 
                src="/hero-mains.jpeg" 
                alt="Beautiful Mehndi Design" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                className="object-cover transition-transform duration-[2000ms] ease-out group-hover/hero-image:scale-110 group-hover/hero-image:brightness-110"
                priority
              />
            </div>

            {/* Second Attractive Floating Image */}
            <motion.div 
              initial={{ opacity: 0, y: -20, rotate: -15 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-6 -left-2 sm:-top-8 sm:-left-10 w-28 h-36 sm:w-40 sm:h-52 rounded-xl sm:rounded-2xl border-[3px] sm:border-[6px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.2)] overflow-hidden z-30 transition-all duration-700 hover:scale-105 hover:rotate-0 hover:z-40"
            >
              <Image 
                src="/hero-main2.jpeg" 
                alt="Stunning Mehndi Art" 
                fill
                sizes="(max-width: 640px) 250px, 400px"
                quality={100}
                className="object-cover bg-white"
              />
            </motion.div>


            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="hidden sm:flex absolute bottom-12 -right-8 bg-white p-4 rounded-xl shadow-xl z-20 flex-col items-center border border-gold-500/20"
            >
              <span className="text-gold-500 font-serif text-lg sm:text-2xl font-bold leading-none mb-1 sm:mb-0">5.0</span>
              <div className="flex gap-0.5 sm:gap-1 my-0.5 sm:my-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-gold-500 text-gold-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-brown-900/60 font-semibold mt-0.5 sm:mt-0">Top Rated</span>
            </motion.div>

          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
