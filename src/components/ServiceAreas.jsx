"use client";

import { MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const areas = [
  "Udaipur Central",
  "Hiran Magri",
  "Pratap Nagar",
  "Bhuwana",
  "Fatehpura",
  "Sukher",
  "Shobhagpura",
  "Nearby Areas"
];

export default function ServiceAreas() {
  return (
    <section className="py-20 px-6 bg-brown-900 text-cream-100 relative overflow-hidden">
      {/* Decorative map-like background pattern could go here, for now a soft gold glow */}
      <div className="absolute right-0 bottom-0 w-[50%] h-[100%] bg-gold-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">
        
        <AnimatedSection className="w-full md:w-1/2 text-center md:text-left">
          <div className="w-12 h-[1px] bg-gold-500 mx-auto md:mx-0 mb-6"></div>
          <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-4">Location & Reach</h2>
          <p className="text-3xl md:text-4xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cream-100 via-gold-100 to-cream-100 drop-shadow-sm pb-1">
            Serving Udaipur & Beyond
          </p>
          <p className="text-cream-100/70 font-light leading-relaxed mb-6">
            Mehndi Marvel is proud to provide premium bridal mehndi services across the beautiful city of Udaipur, Rajasthan. Whether you are getting married at a luxury heritage hotel in the city center or a scenic resort on the outskirts, our professional mehndi artists bring the salon experience directly to your venue.
          </p>
          <p className="text-cream-100/70 font-light leading-relaxed">
            We are also available for destination weddings across India. Contact us to discuss your travel requirements.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="w-full md:w-1/2">
          <div className="bg-white/5 backdrop-blur-md border border-gold-500/20 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start text-gold-500">
              <MapPin size={24} />
              <h3 className="font-serif text-xl text-cream-100 font-semibold">Primary Service Areas</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                  <span className="text-cream-100/90 font-light text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
