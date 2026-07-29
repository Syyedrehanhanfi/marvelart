"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Star, Award, Palette } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CountUp = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Stats() {
  const stats = [
    { id: 1, label: 'Happy Brides', value: 500, suffix: '+', icon: Users },
    { id: 2, label: 'Years Experience', value: 8, suffix: '+', icon: Award },
    { id: 3, label: 'Bridal Designs', value: 1000, suffix: '+', icon: Palette },
    { id: 4, label: 'Customer Rating', value: 5, suffix: '★', icon: Star },
  ];

  return (
    <section className="py-16 px-6 bg-brown-900 relative z-10 overflow-hidden border-y border-white/10">
      <div className="absolute inset-0 bg-gold-500/5 backdrop-blur-3xl z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-4xl font-serif text-cream-100 font-bold mb-2 tracking-tight drop-shadow-sm">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gold-500/80 uppercase tracking-[0.2em] text-[9px] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
