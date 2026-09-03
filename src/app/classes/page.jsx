"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Star, Users, Award, BookOpen, Clock, Gift, Shield, Crown, Sparkles, TrendingUp, Briefcase, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/FloatingActions';
import AnimatedSection from '../../components/AnimatedSection';
import LuxuryDivider from '../../components/LuxuryDivider';

const curriculum = [
  {
    level: "Beginner Level",
    title: "Basic Mehndi",
    duration: "Week 1-2",
    icon: <BookOpen className="w-8 h-8 text-gold-500" />,
    features: [
      "Basic lines, dots, curves and shapes",
      "Flowers and leaf designs",
      "Cone making and handling",
      "Henna paste basics",
      "Pressure and design control",
      "Simple mehndi patterns"
    ]
  },
  {
    level: "Intermediate Level",
    title: "Arabic & Modern Mehndi",
    duration: "Week 3-4",
    icon: <Sparkles className="w-8 h-8 text-gold-500" />,
    features: [
      "Arabic floral designs",
      "Shading and filling",
      "Mandala designs",
      "Geometric patterns",
      "Modern and Indo-Arabic designs",
      "Creating detailed patterns"
    ]
  },
  {
    level: "Advanced Level",
    title: "Bridal Mehndi",
    duration: "Week 5-6",
    icon: <Crown className="w-8 h-8 text-gold-500" />,
    features: [
      "Detailed bridal designs",
      "Traditional motifs and patterns",
      "Bride & Groom designs",
      "Peacock, elephant and floral designs",
      "Matching both hands",
      "Tips for better and darker mehndi color"
    ]
  }
];

const features = [
  { icon: <BookOpen className="w-6 h-6" />, title: "Complete Learning", desc: "Learn everything from basic lines and flowers to beautiful bridal designs." },
  { icon: <Users className="w-6 h-6" />, title: "Personal Attention", desc: "Get guidance and feedback during your practice." },
  { icon: <Award className="w-6 h-6" />, title: "Course Certificate", desc: "Receive a certificate after successfully completing the course." },
  { icon: <Gift className="w-6 h-6" />, title: "Free Practice Kit", desc: "Get a mehndi practice kit to help you learn and practice." }
];

const galleryCategories = ['All Work', 'Beginner', 'Bridal', 'Arabic', 'Traditional'];

const studentGallery = [
  { src: '/gallary/WhatsApp Image 2026-09-03 at 5.04.22 PM (1).jpeg', category: 'Mehndi Art' },
  { src: '/gallary/WhatsApp Image 2026-09-03 at 5.04.22 PM (2).jpeg', category: 'Mehndi Art' },
  { src: '/gallary/WhatsApp Image 2026-09-03 at 5.04.23 PM (1).jpeg', category: 'Mehndi Art' }
];

const faqs = [
  { q: "Do I need any previous experience?", a: "No. Beginners are welcome." },
  { q: "Is the practice material provided?", a: "Yes. A basic practice kit is included with the course." },
  { q: "Will I get a certificate?", a: "Yes. You will receive a certificate after completing the course." },
  { q: "Can I start taking bridal orders after the course?", a: "Yes. The course is designed to help you improve your skills and become confident enough to take your own orders." }
];

export default function ClassesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All Work');

  const filteredGallery = studentGallery.filter(img => activeCategory === 'All Work' || img.category === activeCategory);

  return (
    <div className="w-full min-h-[100dvh] bg-cream-100 overflow-x-hidden selection:bg-gold-500/30 selection:text-brown-900 relative">
      {/* Background Gradients & Mehndi Pattern */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #b08b5b 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-brown-900/5 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-32 pb-24 px-6 lg:pt-48 lg:pb-36 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gold-500/20 rounded-full blur-[150px] -z-10"></div>
            
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
              <AnimatedSection>
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gold-500 bg-white/80 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <Star className="w-4 h-4 text-gold-600 fill-gold-600" />
                  <span className="text-xs uppercase tracking-widest text-brown-900 font-bold">Admissions Open 2026</span>
                  <Star className="w-4 h-4 text-gold-600 fill-gold-600" />
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-brown-900 mb-6 leading-[1.1]">
                  Learn <br className="hidden md:block"/>
                  <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-brown-900 bg-clip-text text-transparent">Professional Mehndi Art</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <p className="text-lg md:text-xl text-brown-900/80 font-light max-w-2xl mb-12 text-balance leading-relaxed">
                  Learn beautiful mehndi designs from basic to advanced levels with Mehndi Marvel Academy, Udaipur. Whether you are a beginner or want to improve your skills, our course will help you become a confident mehndi artist.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-16">
                <a 
                  href="https://wa.me/8209719892?text=Hi%2C%20I%20am%20interested%20in%20enrolling%20in%20the%20Professional%20Mehndi%20Class."
                  target="_blank"
                  rel="noreferrer"
                  className="relative group px-10 py-5 bg-brown-900 text-gold-500 text-sm font-bold tracking-widest uppercase rounded-full hover:text-white transition-all duration-500 shadow-[0_10px_30px_rgba(86,60,45,0.2)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                  <span className="relative z-10">Enroll Now via WhatsApp</span>
                </a>
              </AnimatedSection>

              {/* Trust Badges */}
              <AnimatedSection delay={0.4} className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                {[
                  { icon: <Award className="w-5 h-5" />, text: "Certificate Included", desc: "Get a certificate after completing the course." },
                  { icon: <Gift className="w-5 h-5" />, text: "Free Mehndi Kit", desc: "Get a basic practice kit." },
                  { icon: <HeartHandshake className="w-5 h-5" />, text: "Personal Guidance", desc: "Learn with feedback." },
                  { icon: <Shield className="w-5 h-5" />, text: "Limited Seats", desc: "Seats are limited." }
                ].map((badge, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/60 border border-gold-500/30 flex items-center justify-center text-gold-600 shadow-sm">
                      {badge.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-brown-900/80">{badge.text}</span>
                    <span className="text-[9px] text-brown-900/50 mt-1">{badge.desc}</span>
                  </div>
                ))}
              </AnimatedSection>
            </div>
          </section>

          <LuxuryDivider />

          {/* Why Join Us */}
          <section className="py-24 px-6 bg-white/40">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-4">About Our Academy</h2>
                <p className="text-4xl md:text-5xl font-serif font-bold text-brown-900">Why Learn With Mehndi Marvel?</p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.1}>
                    <div className="p-8 rounded-2xl bg-white border border-gold-500/10 hover:border-gold-500/50 shadow-sm hover:shadow-2xl transition-all duration-500 h-full group hover:-translate-y-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-bl-[100px] -z-0 group-hover:bg-gold-500/10 transition-colors duration-500"></div>
                      <div className="w-14 h-14 rounded-full bg-cream-100 flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 group-hover:bg-brown-900 group-hover:text-gold-500 transition-all duration-500 shadow-sm relative z-10">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-serif text-brown-900 mb-3 relative z-10">{feature.title}</h3>
                      <p className="text-brown-900/70 font-light leading-relaxed relative z-10">{feature.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Curriculum Timeline */}
          <section id="curriculum" className="py-24 px-6 relative">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="text-center mb-20">
                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-4">Course Structure</h2>
                <p className="text-4xl md:text-5xl font-serif font-bold text-brown-900">Course Structure</p>
              </AnimatedSection>

              <div className="relative">
                {/* Desktop Vertical Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-500/20 via-gold-500/60 to-gold-500/20 -translate-x-1/2"></div>
                
                <div className="space-y-16">
                  {curriculum.map((module, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <AnimatedSection key={idx} delay={idx * 0.2}>
                        <div className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                          
                          {/* Timeline Dot (Desktop) */}
                          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white border-4 border-cream-100 shadow-[0_0_20px_rgba(212,175,55,0.3)] items-center justify-center z-10 group-hover:scale-110 transition-transform duration-500">
                            {module.icon}
                          </div>

                          {/* Content Card */}
                          <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 text-left' : 'md:pl-12 md:text-right text-left'}`}>
                            <div className="bg-white/80 backdrop-blur-xl border border-gold-500/20 p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] transition-all duration-500 group relative overflow-hidden">
                              <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-2 h-full bg-gold-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out`}></div>
                              
                              <div className={`flex flex-col ${isEven ? 'items-start' : 'md:items-end items-start'} mb-6`}>
                                <div className="md:hidden w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center text-gold-600 mb-4 shadow-sm">
                                  {module.icon}
                                </div>
                                <span className="text-xs uppercase tracking-widest text-gold-600 font-bold mb-2 inline-flex items-center gap-2">
                                  <Clock className="w-3 h-3" /> {module.duration}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-serif text-brown-900 mb-1">{module.title}</h3>
                                <p className="text-sm font-medium text-brown-900/50 uppercase tracking-wider">{module.level}</p>
                              </div>

                              <ul className="space-y-3">
                                {module.features.map((feature, fIdx) => (
                                  <li key={fIdx} className={`flex items-start gap-3 ${isEven ? 'justify-start text-left' : 'md:justify-end justify-start md:text-right text-left md:flex-row-reverse flex-row'}`}>
                                    <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center">
                                      <Check className="w-3 h-3 text-gold-600" strokeWidth={3} />
                                    </div>
                                    <span className="text-brown-900/80 font-light">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          {/* Empty spacer for grid alignment */}
                          <div className="hidden md:block md:w-1/2"></div>
                        </div>
                      </AnimatedSection>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section (Strong Highlight) */}
          <section className="py-24 px-6 bg-brown-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
              <AnimatedSection className="text-center mb-12">
                <div className="inline-block mb-6 px-5 py-2 rounded-full border border-gold-500/50 bg-gold-500/10 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  <span className="text-xs uppercase tracking-widest text-gold-500 font-bold flex items-center gap-2">
                    <Star className="w-3 h-3 fill-gold-500" /> Special Offer <Star className="w-3 h-3 fill-gold-500" />
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Start Your Mehndi Journey Today</h2>
                <p className="text-cream-100/70 font-light text-lg max-w-2xl mx-auto">Get the complete 6-week course with a free practice kit and personal guidance.</p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="bg-white/10 backdrop-blur-xl border-2 border-gold-500/40 p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
                  <div className="absolute top-0 right-0 p-4">
                    <div className="w-24 h-24 bg-gold-600 rounded-full flex items-center justify-center rotate-12 shadow-lg">
                      <span className="text-brown-900 font-bold text-center leading-tight tracking-wider">50%<br/>OFF</span>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
                    <span className="text-2xl text-cream-100/50 line-through font-serif decoration-red-500/50 decoration-2 mb-2">₹10,000</span>
                    <div className="text-6xl md:text-7xl font-serif text-gold-500 font-bold mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">₹4,999</div>
                    <span className="text-sm uppercase tracking-widest text-cream-100 font-bold bg-white/10 px-4 py-2 rounded-full border border-white/20">
                      + Free Premium Kit
                    </span>
                  </div>
                  
                  <div className="hidden md:block w-[1px] h-48 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent"></div>
                  
                  <div className="w-full md:w-1/2 z-10">
                    <ul className="space-y-5 text-left mb-10">
                      {[
                        "6-week complete course", 
                        "Mehndi practice kit", 
                        "Personal feedback and doubt sessions", 
                        "Lifetime support"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-cream-100">
                          <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href="https://wa.me/8209719892?text=Hi%2C%20I%20want%20to%20enroll%20in%20the%20Professional%20Mehndi%20Class%20at%20the%20special%20offer%20price%20of%204999."
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full py-5 bg-gradient-to-r from-gold-600 to-gold-400 text-brown-900 text-sm font-bold tracking-widest uppercase rounded-full hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-[1.03] text-center relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">Enroll Now <ArrowRight className="w-4 h-4"/></span>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Student Success Counters */}
          <section className="py-20 bg-cream-100 border-b border-gold-500/20">
            <div className="max-w-7xl mx-auto px-6">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-4">Our Students</h2>
                <p className="text-4xl md:text-5xl font-serif font-bold text-brown-900">Student Success</p>
              </AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Briefcase />, count: "50+", text: "Started Their Own Business" },
                { icon: <TrendingUp />, count: "120+", text: "Freelance Artists" },
                { icon: <Crown />, count: "80+", text: "Successful Bridal Bookings" },
                { icon: <Star />, count: "200+", text: "Happy Students" }
              ].map((stat, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gold-500/10 shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-600 flex items-center justify-center mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-serif font-bold text-brown-900 mb-2">{stat.count}</div>
                    <div className="text-xs uppercase tracking-widest font-semibold text-brown-900/60">{stat.text}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            </div>
          </section>

          {/* Student Work Gallery */}
          <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-4">Student Artwork</h2>
                <p className="text-4xl md:text-5xl font-serif font-bold text-brown-900 mb-10">Student Artwork</p>
                <p className="text-brown-900/70 font-light mt-4 mb-8">See the beautiful mehndi designs created by our students.</p>
                
                {/* Category Filters removed */}
              </AnimatedSection>
              
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatePresence>
                  {filteredGallery.map((img, i) => (
                    <motion.div 
                      key={img.src}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gold-500/20 group"
                    >
                      <Image 
                        src={img.src}
                        alt={`Student ${img.category} Mehndi Art`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-x-4 inset-y-4 border border-white/0 group-hover:border-white/50 transition-colors duration-500 rounded-xl z-10 pointer-events-none"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end pb-8">
                        <span className="text-gold-500 uppercase tracking-widest text-[10px] font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.category}</span>
                        <span className="text-white uppercase tracking-widest text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Student Work</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </section>

          <LuxuryDivider />

          {/* FAQ */}
          <section className="py-24 px-6 bg-cream-100">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-4">Frequently Asked Questions</h2>
                <p className="text-4xl font-serif font-bold text-brown-900">Class FAQs</p>
              </AnimatedSection>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.1}>
                    <div className={`border border-brown-900/10 bg-white rounded-xl transition-all duration-300 ${openFaqIndex === idx ? 'shadow-lg border-gold-500/50' : 'hover:border-gold-500/30 shadow-sm'}`}>
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                      >
                        <span className="font-serif text-lg text-brown-900 pr-4">{faq.q}</span>
                        <motion.div animate={{ rotate: openFaqIndex === idx ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-gold-500 shrink-0 bg-cream-100 p-2 rounded-full">
                          <ChevronDown size={20} strokeWidth={2} />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-brown-900/70 font-light leading-relaxed border-t border-brown-900/5 pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <AnimatedSection>
                <div className="w-16 h-16 rounded-full bg-cream-100 border border-gold-500/30 flex items-center justify-center text-gold-600 mx-auto mb-8 shadow-lg">
                  <Star className="w-8 h-8 fill-gold-500" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brown-900 mb-8 leading-tight">
                  Turn Your Passion Into <br/>
                  <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-brown-900 bg-clip-text text-transparent">a Skill</span>
                </h2>
                <p className="text-lg text-brown-900/70 font-light max-w-2xl mx-auto mb-12">
                  Learn mehndi, improve your skills, and start your journey as a professional mehndi artist.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <a 
                    href="https://wa.me/8209719892?text=Hi%2C%20I%20want%20to%20enroll%20in%20the%20Professional%20Mehndi%20Class."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-12 py-5 bg-brown-900 text-gold-500 text-sm font-bold tracking-widest uppercase rounded-full hover:bg-gold-600 hover:text-brown-900 transition-all duration-300 shadow-[0_10px_30px_rgba(86,60,45,0.2)] hover:-translate-y-1"
                  >
                    Enroll Now
                  </a>
                  <a 
                    href="https://wa.me/8209719892?text=Hi%2C%20I%20have%20a%20question%20about%20the%20Mehndi%20classes."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-12 py-5 bg-white border border-brown-900/20 text-brown-900 text-sm font-bold tracking-widest uppercase rounded-full hover:bg-cream-100 transition-all duration-300"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </section>

        </main>
        
        <Footer />
        <FloatingActions />
      </div>
    </div>
  );
}
