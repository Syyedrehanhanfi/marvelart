"use client";

import { MapPin, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-4">Get In Touch</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-brown-900 via-brown-800 to-brown-900 bg-clip-text text-transparent drop-shadow-sm pb-1">Book Your Appointment</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <AnimatedSection>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-brown-900 mb-2">Call or WhatsApp</h3>
                  <p className="text-brown-900/70 font-light mb-4">We are available 24/7 for bookings and inquiries.</p>
                  <a href="tel:8209719892" className="text-2xl font-serif text-gold-600 hover:text-gold-500 transition-colors block mb-2">
                    8209719892
                  </a>
                  <a href="https://wa.me/8209719892?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Mehndi%20appointment" target="_blank" rel="noreferrer" className="inline-block text-xs uppercase tracking-widest text-brown-900 border-b border-brown-900 pb-1">
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-brown-900 mb-2">Visit Our Studio</h3>
                  <p className="text-brown-900/70 font-light leading-relaxed max-w-sm mb-4">
                    1st Floor, Agrawal Flex, 100 Feet Road,<br/>
                    Mali Colony, Sector 3, Hiran Magri,<br/>
                    Udaipur, Rajasthan
                  </p>
                  <a href="https://maps.google.com/?q=1st+Floor,+Agrawal+Flex,+100+Feet+Road,+Mali+Colony,+Sector+3,+Hiran+Magri,+Udaipur,+Rajasthan" target="_blank" rel="noreferrer" className="inline-block text-xs uppercase tracking-widest text-brown-900 border-b border-brown-900 pb-1">
                    Get Directions
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Static Contact Information */}
          <AnimatedSection delay={0.2} className="relative bg-white/40 backdrop-blur-md p-8 md:p-12 flex flex-col justify-center items-center text-center border border-gold-500/10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-2xl overflow-hidden group">
            {/* Subtle glow background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-[40px] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50"></div>
            
            <h3 className="text-2xl font-serif text-brown-900 mb-4 font-semibold">Fastest Way to Reach Us</h3>
            <div className="w-12 h-[1px] bg-gold-500 mb-6"></div>
            <p className="text-brown-900/80 font-light mb-8 max-w-sm text-balance relative z-10">
              For immediate bookings, pricing inquiries, or custom design consultations, please reach out to us directly on WhatsApp.
            </p>
            <a 
              href="https://wa.me/8209719892?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Mehndi%20appointment" 
              target="_blank" 
              rel="noreferrer" 
              className="relative overflow-hidden w-full py-4 bg-brown-900 text-cream-100 uppercase tracking-widest text-sm font-semibold hover:shadow-[0_0_20px_rgba(176,139,91,0.2)] transition-all duration-700 hover:-translate-y-0.5 flex items-center justify-center gap-3 group/btn z-10 border border-brown-900"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-500 translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
              <svg className="relative z-10 w-5 h-5 group-hover/btn:text-white transition-colors duration-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              <span className="relative z-10 group-hover/btn:text-white transition-colors duration-700">Chat on WhatsApp</span>
            </a>
            <p className="text-[10px] text-brown-900/50 mt-6 tracking-widest uppercase">
              Replies typically within minutes
            </p>
          </AnimatedSection>

        </div>

        {/* Full width Google Map */}
        <AnimatedSection className="mt-16 w-full h-[350px] md:h-[450px] shadow-lg border-2 border-gold-500/10 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
          <iframe 
            src="https://maps.google.com/maps?q=1st+Floor,+Agrawal+Flex,+100+Feet+Road,+Mali+Colony,+Sector+3,+Hiran+Magri,+Udaipur,+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mehndi Marvel Location"
          ></iframe>
        </AnimatedSection>

      </div>
    </section>
  );
}
