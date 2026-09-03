"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const categories = ['All Designs', 'Bridal', 'Arabic', 'Modern', 'Foot Mehndi'];

const images = [
  { id: 1, src: '/gallary/WhatsApp Image 2026-09-03 at 5.04.22 PM (1).jpeg', category: 'All Designs' },
  { id: 2, src: '/gallary/WhatsApp Image 2026-09-03 at 5.04.22 PM (2).jpeg', category: 'All Designs' },
  { id: 3, src: '/gallary/WhatsApp Image 2026-09-03 at 5.04.23 PM (1).jpeg', category: 'All Designs' }
];

// Shuffle images once on load for a mixed "All" view
const shuffledImages = [...images].sort(() => Math.random() - 0.5);

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All Designs');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  const filteredImages = shuffledImages.filter(
    img => activeCategory === 'All Designs' || img.category === activeCategory
  );

  // Ensure the baby design is always the very first image shown
  // (Removed since image is deleted)

  const displayedImages = filteredImages.slice(0, visibleCount);

  return (
    <section id="gallery" className="pt-24 pb-12 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="flex flex-col items-center text-center mb-12">
          <div className="w-12 h-[1px] bg-gold-500/50 mb-6"></div>
          <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-4">Portfolio</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold mb-8 bg-gradient-to-r from-brown-900 via-brown-800 to-brown-900 bg-clip-text text-transparent drop-shadow-sm pb-1">Explore Our Mehndi Designs</p>
          
          {/* Category Filters removed */}
        </AnimatedSection>

        {/* Gallery Grid with Arch Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pt-8"
        >
          <AnimatePresence>
            {displayedImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="relative group cursor-pointer"
              >
                {/* Decorative Arch Border Background */}
                <div className="absolute -inset-3 border border-gold-500/30 rounded-t-full rounded-b-xl z-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-gold-500/80 group-hover:-inset-4"></div>
                
                {/* Arch Container */}
                <div className="relative overflow-hidden w-full aspect-[3/4] rounded-t-full rounded-b-lg shadow-xl z-10 bg-white">
                  <Image 
                    src={img.src} 
                    alt={`${img.category} Mehndi Design by Mehndi Marvel in Udaipur`} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                  />
                  {/* Elegant Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-brown-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-end pb-12 z-20 border border-white/10 rounded-t-full rounded-b-lg">
                    <span className="text-gold-500 tracking-[0.3em] uppercase text-[10px] mb-2 font-bold drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">{img.category}</span>
                    <span className="text-cream-100 tracking-[0.2em] uppercase text-sm font-light border-b border-white/40 pb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-75 hover:border-gold-500 hover:text-gold-500">View Design</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {visibleCount < filteredImages.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-center w-full"
          >
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-3 border border-brown-900 text-brown-900 uppercase tracking-widest text-xs font-medium hover:bg-brown-900 hover:text-cream-100 transition-colors duration-300"
            >
              View More
            </button>
          </motion.div>
        )}
        
        <AnimatedSection className="mt-8 text-center">
           <a href="https://www.instagram.com/mehndimarvel/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-brown-900 text-cream-100 uppercase tracking-widest text-sm font-medium hover:bg-gold-600 hover:text-brown-900 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Follow on Instagram
          </a>
        </AnimatedSection>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 sm:p-8 cursor-pointer"
          >
            <div 
              className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-[1000] w-full max-w-sm px-4 justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="bg-black/60 backdrop-blur-md text-white rounded-full p-4 hover:bg-black/80 hover:text-gold-500 transition-all duration-300 border border-white/20 shadow-lg flex-shrink-0"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <a 
                href={`https://wa.me/8209719892?text=Hi%2C%20I%20love%20the%20${selectedImage.category}%20Mehndi%20design%20from%20your%20portfolio.%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden flex-1 bg-[#25D366] text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_10px_40px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 border border-[#25D366]/50"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                <span className="text-sm font-bold tracking-widest uppercase">Book Now</span>
              </a>
            </div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl h-[75vh] md:h-[80vh] mb-12 flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={`${selectedImage.category} Mehndi Design Full View by Mehndi Marvel`}
                fill
                sizes="100vw"
                className="object-contain rounded-md shadow-2xl bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
