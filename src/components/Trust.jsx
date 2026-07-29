"use client";

import { ShieldCheck, Leaf, Star, Sparkles, Smile } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Trust() {
  const trusts = [
    { label: 'Premium Bridal Artist', icon: Star },
    { label: '100% Natural Mehndi', icon: Leaf },
    { label: 'Professional Service', icon: ShieldCheck },
    { label: 'Hygienic Application', icon: Sparkles },
    { label: 'Customer Satisfaction', icon: Smile },
  ];

  return (
    <section className="py-12 px-6 bg-cream-200 border-y border-gold-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16">
          {trusts.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection 
                key={item.label} 
                delay={idx * 0.1}
                className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gold-500/10 shadow-sm hover:border-gold-500/40 transition-colors duration-300"
              >
                <Icon size={18} className="text-gold-600" strokeWidth={2} />
                <span className="text-brown-900 font-serif font-semibold text-sm tracking-wide">{item.label}</span>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
