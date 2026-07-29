"use client";

import { Heart, Gem, Moon, CalendarHeart, Baby, Sparkles, Users, UserPlus, Plane } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const events = [
  { title: 'Bridal Mehndi', icon: Heart },
  { title: 'Engagement', icon: Gem },
  { title: 'Karwa Chauth', icon: Moon },
  { title: 'Teej Festival', icon: CalendarHeart },
  { title: 'Baby Shower', icon: Baby },
  { title: 'Diwali Specials', icon: Sparkles },
  { title: 'Family Functions', icon: Users },
  { title: 'Group Bookings', icon: UserPlus },
  { title: 'Destination Weddings', icon: Plane }
];

export default function EventTypes() {
  return (
    <section className="py-24 px-6 bg-white relative z-10 overflow-hidden border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16 flex flex-col items-center">
          <div className="w-12 h-[1px] bg-gold-500 mb-6"></div>
          <h2 className="text-gold-600 tracking-[0.4em] uppercase text-xs font-semibold mb-4">Celebrations</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-brown-900 mb-4 drop-shadow-sm">Event Types We Cover</p>
          <p className="text-brown-900/70 font-light max-w-xl text-center">From intimate gatherings to grand destination weddings, we bring the art of mehndi to every special occasion.</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {events.map((event, idx) => {
            const Icon = event.icon;
            return (
              <AnimatedSection key={event.title} delay={idx * 0.05}>
                <div className="flex flex-col items-center justify-center p-8 bg-cream-100/50 rounded-2xl border border-brown-900/5 hover:border-gold-500/30 hover:bg-white transition-all duration-500 group h-full cursor-pointer hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] hover:-translate-y-1">
                  <Icon className="text-gold-500 mb-4 transition-transform duration-500 group-hover:scale-110" size={32} strokeWidth={1.5} />
                  <h3 className="font-serif text-brown-900 text-lg md:text-xl text-center font-semibold group-hover:text-gold-600 transition-colors duration-500">{event.title}</h3>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
