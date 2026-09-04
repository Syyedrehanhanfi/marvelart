"use client";

import AnimatedSection from './AnimatedSection';

export default function VideoGallery() {
  const videos = [
    '/videos/WhatsApp Video 2026-09-03 at 5.07.57 PM.mp4',
    '/videos/WhatsApp Video 2026-09-03 at 5.08.01 PM.mp4',
    '/videos/WhatsApp Video 2026-09-04 at 5.06.17 PM.mp4',
    '/videos/WhatsApp Video 2026-09-04 at 5.06.18 PM.mp4',
    '/videos/WhatsApp Video 2026-09-04 at 5.06.21 PM.mp4'
  ];

  return (
    <section className="py-16 px-4 bg-brown-900 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-gold-500/5 blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-12 flex flex-col items-center">
          <div className="w-8 h-[1px] bg-gold-500 mb-4"></div>
          <h2 className="text-gold-500 tracking-[0.3em] uppercase text-xs font-medium mb-3">Experience the Art</h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-100">Cinematic Showcase</p>
        </AnimatedSection>
        
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-center">
          {videos.map((src, index) => (
            <div key={index} className="w-full max-w-[320px] sm:max-w-[400px] bg-white/5 backdrop-blur-md rounded-[2.5rem] p-3 relative shadow-[0_0_40px_rgba(212,175,55,0.15)] border border-gold-500/20 group mx-auto">
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold-500/50 rounded-tl-[2.5rem] m-1 pointer-events-none z-10 transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold-500/50 rounded-br-[2.5rem] m-1 pointer-events-none z-10 transition-transform duration-700 group-hover:scale-110"></div>
              
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                controls 
                className="w-full h-auto rounded-[2rem] object-cover bg-black/50 aspect-[9/16]"
                src={src}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
