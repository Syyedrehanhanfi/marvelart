"use client";

import AnimatedSection from './AnimatedSection';

export default function WhyChooseUs() {
  const features = [
    { 
      title: '100% Natural Mehndi', 
      desc: 'Made with organic henna and premium ingredients for safe application and rich color.' 
    },
    { 
      title: 'Customized Designs', 
      desc: 'Every design is created especially for you, combining beautiful details with your style.' 
    },
    { 
      title: 'Bridal Specialists', 
      desc: 'Expert bridal artists trained in intricate, traditional, and modern wedding patterns.' 
    },
    { 
      title: 'Home Service Available', 
      desc: 'Enjoy professional mehndi services at the comfort of your home or wedding venue.' 
    },
    { 
      title: 'Long Lasting Color', 
      desc: 'Our special aftercare techniques guarantee a deep, beautiful, and lasting stain.' 
    },
    { 
      title: 'Hygienic Process', 
      desc: 'We maintain strict hygiene protocols and use freshly prepared cones for every client.' 
    },
    { 
      title: 'On-Time Service', 
      desc: 'Punctuality is our priority. We value your wedding schedule and time.' 
    },
    { 
      title: 'Personalized Consultation', 
      desc: 'Detailed pre-booking consultation to discuss motifs, figures, and styling preferences.' 
    }
  ];

  return (
    <section className="py-16 px-6 bg-brown-900 text-cream-100 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-gold-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-12 flex flex-col items-center">
          <div className="w-8 h-[1px] bg-gold-500/50 mb-4"></div>
          <h2 className="text-gold-500 tracking-[0.3em] uppercase text-[10px] font-semibold">The Philosophy</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {features.map((item, idx) => (
            <AnimatedSection 
              key={item.title} 
              delay={idx * 0.1} 
              className="pt-8 md:pt-0 px-4 flex flex-col items-center"
            >
              <h3 className="text-lg md:text-xl font-serif mb-3 text-gold-500 font-bold">{item.title}</h3>
              <p className="text-cream-200/80 font-light text-sm leading-relaxed max-w-xs">{item.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
