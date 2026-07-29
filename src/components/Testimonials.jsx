"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const reviews = [
  {
    name: "Priya Sharma",
    role: "Bride",
    text: "I absolutely loved my bridal mehndi. The design was beautiful, and the color turned out so dark. Highly recommended!"
  },
  {
    name: "Neha Verma",
    role: "Bride",
    text: "The designs were neat, detailed, and exactly what I wanted. Thank you for making my special day even more beautiful."
  },
  {
    name: "Anjali Gupta",
    role: "Happy Client",
    text: "Very professional service and amazing mehndi designs. The color was rich, and everyone loved it."
  },
  {
    name: "Kritika Singh",
    role: "Bride",
    text: "The entire experience was smooth and comfortable. Beautiful designs, great service, and a lovely result."
  },
  {
    name: "Pooja Yadav",
    role: "Bride",
    text: "Monika is very talented and patient. The mehndi design was exactly as I imagined. I'm really happy with the service."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-12 px-6 bg-cream-200">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-8 h-[1px] bg-gold-500/50"></div>
          </div>
          <h2 className="text-gold-500 tracking-[0.3em] uppercase text-xs font-medium mb-3">Kind Words</h2>
          <p className="text-3xl md:text-4xl font-serif text-brown-900">Happy Clients</p>
        </AnimatedSection>

        <AnimatedSection className="relative min-h-[380px] sm:min-h-[320px] flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[550px] bg-white p-8 sm:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(176,139,91,0.15)] border border-gold-500/20 text-center flex flex-col items-center relative overflow-hidden group"
            >
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-500/20 rounded-tl-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-500/20 rounded-br-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Gold Quote Icon */}
              <svg className="w-8 h-8 text-gold-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              <div className="flex text-gold-500 mb-5 gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-brown-900/80 font-serif text-lg leading-relaxed italic mb-6">
                "{reviews[currentIndex].text}"
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-600 to-gold-500 flex items-center justify-center text-white font-serif text-lg mb-3 shadow-md">
                  {reviews[currentIndex].name.charAt(0)}
                </div>
                <p className="font-serif text-brown-900 text-lg font-semibold">{reviews[currentIndex].name}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-600 mt-1">{reviews[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>

        {/* Interactive Dots Indicator */}
        <div className="flex justify-center gap-3 mt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === idx ? 'bg-gold-500 w-6' : 'bg-brown-900/20 w-1.5 hover:bg-gold-500/50'
              }`}
              aria-label={`View review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
