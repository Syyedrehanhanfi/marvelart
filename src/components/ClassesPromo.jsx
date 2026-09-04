"use client";

import { motion } from 'framer-motion';
import { Award, BookOpen, Gift, Users, ArrowRight, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';

export default function ClassesPromo() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brown-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gold-500/50 bg-gold-500/5 mb-8 shadow-sm">
                <Star className="w-4 h-4 text-gold-600 fill-gold-600" />
                <span className="text-xs uppercase tracking-widest text-brown-900 font-bold">Mehndi Marvel Academy</span>
                <Star className="w-4 h-4 text-gold-600 fill-gold-600" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brown-900 mb-6 leading-tight">
                Learn Professional <br className="hidden md:block"/>
                <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-brown-900 bg-clip-text text-transparent">Mehndi Art</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-brown-900 font-light mb-4 max-w-xl text-balance leading-relaxed">
                <strong className="text-xl font-serif text-gold-600 block mb-2">Mehndi Marvel by Monika Sharma ✨</strong>
                Professional Bridal & Occasion Mehndi Artist with 10+ years of experience. We also offer Mehndi Classes for beginners & professionals. Quality work, unique designs, and premium service. Book your appointment today! 💚
              </p>
              <p className="text-lg text-brown-900/80 font-light mb-8 max-w-xl text-balance leading-relaxed">
                Turn your passion into a high-paying profession. Join our certified 6-week professional course in Udaipur and learn everything from basic elements to intricate bridal portraits.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Link 
                href="/classes"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-brown-900 text-gold-500 text-sm font-bold tracking-widest uppercase rounded-full overflow-hidden shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gold-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 group-hover:text-brown-900 transition-colors duration-500">Explore Course Details</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:text-brown-900 transition-colors duration-500 group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatedSection delay={0.2} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-cream-100 border border-gold-500/20 hover:border-gold-500/50 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-brown-900 mb-3">Certification</h3>
                <p className="text-brown-900/70 font-light text-sm">Get officially certified by Mehndi Marvel Academy upon completion.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="h-full sm:translate-y-8">
              <div className="h-full p-8 rounded-2xl bg-brown-900 border border-gold-500/20 hover:border-gold-500/50 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden flex flex-col items-center text-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-bl-[100px] z-0 group-hover:bg-gold-500/10 transition-colors"></div>
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-cream-100 mb-3 relative z-10">Free Kit</h3>
                <p className="text-cream-100/70 font-light text-sm relative z-10">Premium practice kit included with organic powder and tools.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-white border border-gold-500/20 hover:border-gold-500/50 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-cream-100 flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-brown-900 mb-3">1-on-1 Guidance</h3>
                <p className="text-brown-900/70 font-light text-sm">Personal attention and feedback to perfect your strokes.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="h-full sm:translate-y-8">
              <div className="h-full p-8 rounded-2xl bg-cream-100 border border-gold-500/20 hover:border-gold-500/50 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-brown-900 mb-3">Basic to Pro</h3>
                <p className="text-brown-900/70 font-light text-sm">6-week comprehensive module covering everything you need.</p>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
