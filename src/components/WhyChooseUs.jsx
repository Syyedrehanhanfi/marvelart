"use client";

import AnimatedSection from './AnimatedSection';

export default function WhyChooseUs() {
  const features = [
    { 
      title: '🌿 100% Natural Mehndi', 
      desc: 'We use natural henna and quality ingredients for a safe and beautiful mehndi experience.' 
    },
    { 
      title: '✨ Custom Designs', 
      desc: 'Choose a design that matches your style. We create each mehndi design specially for you.' 
    },
    { 
      title: '👰 Bridal Mehndi Experts', 
      desc: 'Beautiful traditional and modern bridal designs made with care and attention to detail.' 
    },
    { 
      title: '🏠 Home Service', 
      desc: 'Get professional mehndi service at your home or wedding venue.' 
    },
    { 
      title: '🤎 Beautiful & Long-Lasting Color', 
      desc: 'We use proper mehndi and aftercare techniques to help you get a rich and lasting color.' 
    },
    { 
      title: '🧼 Clean & Hygienic', 
      desc: 'Fresh mehndi cones are used for every client while maintaining proper hygiene.' 
    },
    { 
      title: '⏰ On-Time Service', 
      desc: 'We respect your time and make sure your mehndi service fits smoothly into your schedule.' 
    },
    { 
      title: '💬 Easy Consultation', 
      desc: "Tell us your ideas, preferred designs, and style. We'll help create the perfect mehndi look for you." 
    }
  ];

  return (
    <section className="py-16 px-6 bg-brown-900 text-cream-100 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-gold-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-12 flex flex-col items-center">
          <div className="w-12 h-[1px] bg-gold-500 mb-6"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gold-500 drop-shadow-sm">Why Choose Mehndi Marvel?</h2>
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
