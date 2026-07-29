"use client";

import AnimatedSection from './AnimatedSection';

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 relative z-10 overflow-hidden bg-brown-900 border-b border-white/10">
      {/* Intense Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[120%] bg-gradient-to-r from-gold-600/10 via-gold-500/20 to-gold-600/10 blur-[100px] pointer-events-none rounded-full"></div>
      
      {/* Decorative Corner Borders */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold-500/30"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-gold-500/30"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-gold-500/30"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold-500/30"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 border border-gold-500/40 rounded-full text-gold-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-8 bg-gold-500/5">
            Your Special Day Awaits
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-cream-100 via-gold-100 to-cream-100 drop-shadow-lg mb-8 leading-tight text-balance">
            Ready to Book Your Bridal Mehndi?
          </h2>
          <p className="text-cream-100/80 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Dates are filling up fast for the upcoming wedding season. Contact us today to secure your booking and let us create a masterpiece for your hands.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#contact" 
              className="w-full sm:w-auto relative overflow-hidden px-10 py-5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-brown-900 uppercase tracking-[0.2em] text-[13px] font-bold rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
              <span className="relative z-10">Book Now</span>
            </a>
            
            <a 
              href="https://wa.me/8209719892?text=Hi%2C%20I%20would%20like%20to%20book%20my%20Bridal%20Mehndi!" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-gold-500/50 text-gold-500 uppercase tracking-[0.2em] text-[13px] font-bold rounded-xl hover:bg-gold-500/10 transition-all duration-500 flex items-center justify-center gap-3 hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
