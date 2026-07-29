"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    title: 'Bridal Mehndi',
    subtitle: 'THE MASTERPIECE',
    description: 'Make your wedding day unforgettable with elegant bridal mehndi designed with intricate patterns, rich color, and timeless beauty.',
    image: '/bridal.jpg',
  },
  {
    title: 'Engagement & Wedding',
    subtitle: 'CELEBRATION',
    description: 'Celebrate your special moments with elegant mehndi designs crafted for brides, bridesmaids, and every joyful occasion.',
    image: '/engement.jpeg',
  },
  {
    title: 'Festive Mehndi',
    subtitle: 'TRADITION',
    description: 'Celebrate every festival with beautiful mehndi designs that add tradition, joy, and elegance to your special moments.',
    image: '/festive.jpeg',
  },
  {
    title: 'Arabic & Modern',
    subtitle: 'CONTEMPORARY',
    description: 'Flowing, spaced-out floral and geometric patterns. Perfect for a chic, contemporary look that is both striking and minimalistic.',
    image: '/arbic.jpeg',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-cream-100 relative z-10 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16 flex flex-col items-center">
          <div className="w-12 h-[1px] bg-gold-500 mb-6"></div>
          <h2 className="text-gold-600 tracking-[0.4em] uppercase text-xs font-semibold mb-4">Our Expertise</h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold max-w-2xl text-balance bg-gradient-to-r from-brown-900 via-brown-800 to-brown-900 bg-clip-text text-transparent drop-shadow-sm pb-1">Our Premium Mehndi Services</p>
        </AnimatedSection>

        <div className="flex flex-col gap-16 lg:gap-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.title} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
              >
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full lg:w-1/2 relative group"
                >
                  <div className="relative w-full aspect-square md:aspect-[4/5] max-w-sm lg:max-w-md mx-auto lg:mx-0 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm group-hover:shadow-[0_30px_60px_rgba(212,175,55,0.15)] transition-shadow duration-1000 bg-white">
                    <Image 
                      src={service.image} 
                      alt={`${service.title} Design by Mehndi Marvel in Udaipur`} 
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[2000ms] group-hover:scale-105 group-hover:brightness-110"
                    />
                    {/* Inner elegant border overlay */}
                    <div className="absolute inset-4 border border-white/40 z-10 pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:inset-5"></div>
                  </div>
                  {/* Decorative backdrop box */}
                  <div className={`hidden lg:block absolute top-8 bottom-8 w-full border border-gold-500/30 z-[-1] transition-transform duration-700 group-hover:translate-x-4 ${isEven ? 'left-8' : 'right-8'}`}></div>
                </motion.div>

                {/* Text Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="w-full lg:w-1/2 relative flex flex-col justify-center text-center lg:text-left"
                >
                  {/* Faded Background Number */}
                  <motion.div 
                    initial={{ y: 20 }}
                    whileInView={{ y: -20 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute -top-12 lg:-top-24 left-1/2 lg:-left-12 -translate-x-1/2 lg:translate-x-0 text-[100px] lg:text-[160px] font-script bg-gradient-to-b from-gold-500/20 to-transparent bg-clip-text text-transparent pointer-events-none select-none z-0"
                  >
                    0{index + 1}
                  </motion.div>

                  <div className="relative z-10 px-4 lg:px-6 lg:border-l border-gold-500/20 lg:py-4 mt-4 lg:mt-0">
                    <span className="text-gold-600 tracking-[0.4em] uppercase text-[10px] font-bold mb-3 block">
                      {service.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brown-900 font-bold mb-4">
                      {service.title}
                    </h3>
                    
                    <div className="w-12 h-[1px] bg-gold-500 mx-auto lg:mx-0 mb-4 lg:hidden"></div>
                    
                    <p className="text-brown-900/80 font-light text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
                      {service.description}
                    </p>

                    <a href="#contact" 
                      className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-brown-900 hover:text-gold-600 transition-colors group/link"
                    >
                      Book This Service
                      <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-2" />
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
