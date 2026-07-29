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
    level: "Beginner Module",
    title: "Foundation & Basics",
    duration: "Week 1-2",
    icon: <BookOpen className="w-8 h-8 text-gold-500" />,
    features: [
      "History and cultural significance of Mehndi",
      "How to make perfect organic Henna paste",
      "Cone making and cutting techniques",
      "Basic elements: Lines, dots, drops, and swirls",
      "Simple floral and leaf patterns",
      "Pressure control and symmetry"
    ]
  },
  {
    level: "Intermediate Module",
    title: "Arabic & Contemporary",
    duration: "Week 3-4",
    icon: <Sparkles className="w-8 h-8 text-gold-500" />,
    features: [
      "Advanced floral and vine compositions",
      "Shading, filling, and reverse filling techniques",
      "Mandala designs and geometric patterns",
      "Indo-Arabic fusion styles",
      "Spaced out contemporary designs",
      "Creating depth and 3D effects"
    ]
  },
  {
    level: "Advanced Module",
    title: "Bridal & Figures",
    duration: "Week 5-6",
    icon: <Crown className="w-8 h-8 text-gold-500" />,
    features: [
      "Intricate traditional bridal layouts",
      "Grid patterns, netting, and complex borders",
      "Dulha-Dulhan (Bride & Groom) portraits",
      "Peacocks, elephants, and traditional motifs",
      "Symmetry matching for both hands",
      "Stain enhancement and aftercare secrets"
    ]
  }
];

const features = [
  { icon: <BookOpen className="w-6 h-6" />, title: "Comprehensive Syllabus", desc: "From holding a cone to drawing intricate bridal portraits, we cover it all." },
  { icon: <Users className="w-6 h-6" />, title: "Personalized Attention", desc: "Small batch sizes to ensure strict 1-on-1 feedback and guidance." },
  { icon: <Award className="w-6 h-6" />, title: "Certificate of Completion", desc: "Get officially certified by Mehndi Marvel Academy upon finishing." },
  { icon: <Gift className="w-6 h-6" />, title: "Free Premium Kit", desc: "Includes organic powder, essential oils, practice sheets, and tools." }
];

const galleryCategories = ['All Work', 'Beginner', 'Bridal', 'Arabic', 'Traditional'];

const studentGallery = [
  { src: '/arbic/arbic1.jpeg', category: 'Arabic' },
  { src: '/bridal.jpg', category: 'Bridal' },
  { src: '/mordern/WhatsApp Image 2026-07-09 at 5.39.00 PM (1).jpeg', category: 'Traditional' },
  { src: '/leg mehendi/WhatsApp Image 2026-07-09 at 5.38.34 PM.jpeg', category: 'Beginner' }
];

const faqs = [
  { q: "Do I need prior drawing experience?", a: "Not at all! Our course is designed for absolute beginners. We start from the very basics of holding a cone." },
  { q: "Is the practice material provided?", a: "Yes, you will receive a complimentary Mehndi Marvel Premium Kit on your first day which includes everything you need." },
  { q: "Will I get a certificate?", a: "Yes, upon successful completion of the course and final assessment, you will receive a recognized certificate." },
  { q: "Can I start taking my own bridal orders after this?", a: "Absolutely. Our advanced module specifically prepares you to handle professional bridal bookings confidently." }
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
                  Master the Art of <br className="hidden md:block"/>
                  <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-brown-900 bg-clip-text text-transparent">Professional Mehndi</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <p className="text-lg md:text-xl text-brown-900/80 font-light max-w-2xl mb-12 text-balance leading-relaxed">
                  Join Udaipur's most premium Mehndi Academy. Turn your passion into a high-paying profession with our certified professional courses.
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
                  { icon: <Award className="w-5 h-5" />, text: "Certificate Included" },
                  { icon: <Gift className="w-5 h-5" />, text: "Free Mehndi Kit" },
                  { icon: <HeartHandshake className="w-5 h-5" />, text: "Lifetime Support" },
                  { icon: <Shield className="w-5 h-5" />, text: "Limited Seats" }
                ].map((badge, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/60 border border-gold-500/30 flex items-center justify-center text-gold-600 shadow-sm">
                      {badge.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-brown-900/80">{badge.text}</span>
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
                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-4">The Academy</h2>
                <p className="text-4xl md:text-5xl font-serif font-bold text-brown-900">Why Choose Mehndi Marvel?</p>
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
                <p className="text-4xl md:text-5xl font-serif font-bold text-brown-900">Your Journey to Mastery</p>
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
                    <Star className="w-3 h-3 fill-gold-500" /> Limited Time Offer <Star className="w-3 h-3 fill-gold-500" />
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Invest in Your Future</h2>
                <p className="text-cream-100/70 font-light text-lg max-w-2xl mx-auto">Get professional certification, lifetime support, and a complete premium starter kit at a massive discount.</p>
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
                        "Full 6-Week Certification Course", 
                        "Premium Mehndi Practice Kit Included", 
                        "1-on-1 Feedback & Doubt Sessions", 
                        "Lifetime Community Support"
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
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Briefcase />, count: "50+", text: "Started Own Business" },
                { icon: <TrendingUp />, count: "120+", text: "Freelance Artists" },
                { icon: <Crown />, count: "80+", text: "Bridal Booking Success" },
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
          </section>

          {/* Student Work Gallery */}
          <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-4">Proud Moments</h2>
                <p className="text-4xl md:text-5xl font-serif font-bold text-brown-900 mb-10">Student Artwork</p>
                
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                  {galleryCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-[11px] sm:text-xs uppercase tracking-widest pb-2 border-b-2 transition-all duration-300 ${
                        activeCategory === cat 
                          ? 'border-gold-500 text-gold-600 font-bold' 
                          : 'border-transparent text-brown-900/50 hover:text-brown-900'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
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
                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-4">Clarifications</h2>
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
                  <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-brown-900 bg-clip-text text-transparent">Your Profession</span>
                </h2>
                <p className="text-lg text-brown-900/70 font-light max-w-2xl mx-auto mb-12">
                  Seats for our next batch are filling up fast. Take the first step towards a rewarding career as a professional Mehndi artist today.
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
