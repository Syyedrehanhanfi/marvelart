"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Star, Users, Award, BookOpen, Clock, Gift, Shield, Crown, Sparkles, TrendingUp, Briefcase, HeartHandshake, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/FloatingActions';
import AnimatedSection from '../../components/AnimatedSection';
import LuxuryDivider from '../../components/LuxuryDivider';

/* ─── Data ────────────────────────────────────────────────────────── */

const curriculum = [
  {
    step: "01",
    level: "Beginner Level",
    title: "Basic Mehndi",
    duration: "Week 1–2",
    icon: <BookOpen className="w-7 h-7" />,
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
    step: "02",
    level: "Intermediate Level",
    title: "Arabic & Modern Mehndi",
    duration: "Week 3–4",
    icon: <Sparkles className="w-7 h-7" />,
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
    step: "03",
    level: "Advanced Level",
    title: "Bridal Mehndi",
    duration: "Week 5–6",
    icon: <Crown className="w-7 h-7" />,
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

const benefits = [
  { icon: <Award className="w-6 h-6" />, title: "Certificate Included", desc: "Get a certificate after completing the course." },
  { icon: <Gift className="w-6 h-6" />, title: "Free Mehndi Kit", desc: "Get a basic practice kit included." },
  { icon: <Users className="w-6 h-6" />, title: "Personal Guidance", desc: "Learn with personal feedback." },
  { icon: <Shield className="w-6 h-6" />, title: "Limited Seats", desc: "Small batches for better learning." }
];

const aboutFeatures = [
  { icon: <BookOpen className="w-5 h-5" />, title: "Complete Learning", desc: "Learn everything from basic lines and flowers to beautiful bridal designs." },
  { icon: <Users className="w-5 h-5" />, title: "Personal Attention", desc: "Get guidance and feedback during your practice." },
  { icon: <Award className="w-5 h-5" />, title: "Course Certificate", desc: "Receive a certificate after successfully completing the course." },
  { icon: <Gift className="w-5 h-5" />, title: "Free Practice Kit", desc: "Get a mehndi practice kit to help you learn and practice." }
];

const studentGallery = [
  { src: '/img/WhatsApp Image 2026-09-04 at 5.06.15 PM.jpeg', category: 'Mehndi Art' },
  { src: '/img/WhatsApp Image 2026-09-04 at 5.06.16 PM.jpeg', category: 'Mehndi Art' },
  { src: '/img/WhatsApp Image 2026-09-04 at 5.06.22 PM (1).jpeg', category: 'Mehndi Art' }
];

const stats = [
  { icon: <Briefcase className="w-6 h-6" />, count: 50, suffix: "+", text: "Started Their Own Business" },
  { icon: <TrendingUp className="w-6 h-6" />, count: 120, suffix: "+", text: "Freelance Artists" },
  { icon: <Crown className="w-6 h-6" />, count: 80, suffix: "+", text: "Successful Bridal Bookings" },
  { icon: <Star className="w-6 h-6" />, count: 200, suffix: "+", text: "Happy Students" }
];

const faqs = [
  { q: "Do I need any previous experience?", a: "No. Beginners are welcome." },
  { q: "Is the practice material provided?", a: "Yes. A basic practice kit is included with the course." },
  { q: "Will I get a certificate?", a: "Yes. You will receive a certificate after completing the course." },
  { q: "Can I start taking bridal orders after the course?", a: "Yes. The course is designed to help you improve your skills and become confident enough to take your own orders." }
];

/* ─── Animated Counter Component ──────────────────────────────────── */

function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = performance.now();
          const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

/* ─── Mehndi SVG Decorative Pattern ────────────────────────────────── */

function MehndiPattern({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={`pointer-events-none ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" />
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 5" />
      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" />
      <path d="M100 10 L100 190 M10 100 L190 100" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 4" />
      <path d="M29 29 L171 171 M171 29 L29 171" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.4" strokeDasharray="6 3" />
      <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

/* ─── Page Component ──────────────────────────────────────────────── */

export default function ClassesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className="w-full min-h-[100dvh] bg-cream-100 overflow-x-hidden selection:bg-gold-500/30 selection:text-brown-900 relative">
      {/* Fixed Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #b08b5b 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-brown-900/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">

          {/* ═══════════════════════════════════════════════════════════
              1. HERO SECTION — Premium Split Layout
          ═══════════════════════════════════════════════════════════ */}
          <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32 px-6 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[350px] bg-gold-500/15 rounded-full blur-[150px] -z-10"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left — Text Content */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                <AnimatedSection>
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gold-500 bg-white/80 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    <Star className="w-4 h-4 text-gold-600 fill-gold-600" />
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-brown-900 font-bold">Admissions Open 2026</span>
                    <Star className="w-4 h-4 text-gold-600 fill-gold-600" />
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brown-900 mb-5 leading-[1.1]">
                    Learn{" "}
                    <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-brown-900 bg-clip-text text-transparent">Professional Mehndi Art</span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <p className="text-base sm:text-lg text-brown-900/80 font-light max-w-xl mb-8 text-balance leading-relaxed">
                    Learn beautiful mehndi designs from basic to advanced levels with Mehndi Marvel Academy, Udaipur. Whether you are a beginner or want to improve your skills, our course will help you become a confident mehndi artist.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                  <a
                    href="https://wa.me/918209719892?text=Hi%2C%20I%20am%20interested%20in%20enrolling%20in%20the%20Professional%20Mehndi%20Class."
                    target="_blank"
                    rel="noreferrer"
                    className="relative group px-8 sm:px-10 py-4 sm:py-5 bg-brown-900 text-gold-500 text-sm font-bold tracking-widest uppercase rounded-full hover:text-white transition-all duration-500 shadow-[0_10px_30px_rgba(86,60,45,0.2)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)] overflow-hidden text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" /> Enroll Now via WhatsApp
                    </span>
                  </a>
                  <a
                    href="#curriculum"
                    className="px-8 sm:px-10 py-4 sm:py-5 border border-brown-900/20 text-brown-900 text-sm font-bold tracking-widest uppercase rounded-full hover:bg-brown-900 hover:text-cream-100 transition-all duration-300 text-center"
                  >
                    View Course
                  </a>
                </AnimatedSection>

                {/* Trust indicators */}
                <AnimatedSection delay={0.4} className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2">
                  {["Certificate", "Practice Kit", "Personal Guidance"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-brown-900/70 font-semibold">{item}</span>
                    </div>
                  ))}
                </AnimatedSection>
              </div>

              {/* Right — Hero Image */}
              <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                <AnimatedSection delay={0.2}>
                  <div className="relative w-[80%] sm:w-[65%] lg:w-full max-w-md mx-auto">
                    {/* Decorative mehndi pattern behind image */}
                    <div className="absolute -inset-8 sm:-inset-12 text-gold-500/10 -z-10">
                      <MehndiPattern className="w-full h-full" />
                    </div>
                    {/* Decorative border */}
                    <div className="absolute -inset-3 border border-gold-500/30 rounded-3xl z-0"></div>
                    <div className="absolute -inset-5 border border-gold-500/15 rounded-[2rem] z-0"></div>

                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white z-10">
                      <Image
                        src="/class-hero.jpg"
                        alt="Professional Mehndi Art by Mehndi Marvel Academy"
                        fill
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 30vw"
                        quality={90}
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Floating badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-8 bg-white px-5 py-3 rounded-xl shadow-xl z-20 border border-gold-500/20"
                    >
                      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-600 font-bold block">6 Week</span>
                      <span className="text-xs sm:text-sm font-serif text-brown-900 font-semibold">Professional Course</span>
                    </motion.div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          <LuxuryDivider />

          {/* ═══════════════════════════════════════════════════════════
              2. BENEFITS — Premium Cards
          ═══════════════════════════════════════════════════════════ */}
          <section className="py-16 md:py-24 px-6 bg-white/40">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection className="text-center mb-12 md:mb-16">
                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-3">What You Get</h2>
                <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brown-900">Everything Included</p>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {benefits.map((b, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.1}>
                    <div className={`h-full p-7 md:p-8 rounded-2xl border border-gold-500/15 hover:border-gold-500/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden flex flex-col items-center text-center ${idx % 2 === 0 ? 'bg-cream-100' : 'bg-white'}`}>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/5 rounded-bl-[80px] -z-0 group-hover:bg-gold-500/10 transition-colors duration-500"></div>
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-gold-600 mb-5 group-hover:scale-110 group-hover:bg-brown-900 group-hover:text-gold-500 transition-all duration-500 shadow-sm border border-gold-500/20 relative z-10">
                        {b.icon}
                      </div>
                      <h3 className="text-lg font-serif text-brown-900 mb-2 relative z-10">{b.title}</h3>
                      <p className="text-brown-900/65 font-light text-sm leading-relaxed relative z-10">{b.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════
              3. ABOUT ACADEMY — Split Layout
          ═══════════════════════════════════════════════════════════ */}
          <section className="py-16 md:py-24 px-6 relative overflow-hidden">
            {/* Subtle mehndi pattern BG */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 text-gold-500/[0.04] w-[500px] h-[500px] -z-10">
              <MehndiPattern className="w-full h-full" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left — Image */}
              <AnimatedSection className="flex justify-center">
                <div className="relative w-[75%] sm:w-[60%] lg:w-[80%] max-w-sm">
                  <div className="absolute -inset-4 border border-gold-500/25 rounded-2xl z-0"></div>
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl border border-white/50 bg-white z-10">
                    <Image
                      src="/me.png"
                      alt="Monika Sharma — Mehndi Marvel Founder & Instructor"
                      fill
                      sizes="(max-width: 768px) 60vw, 30vw"
                      quality={90}
                      className="object-cover"
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-6 bg-brown-900 text-cream-100 px-5 py-3 rounded-xl shadow-xl z-20 border border-gold-500/30"
                  >
                    <span className="text-gold-500 font-serif text-lg font-bold block leading-tight">10+</span>
                    <span className="text-[10px] uppercase tracking-widest text-cream-100/70 font-semibold">Years Experience</span>
                  </motion.div>
                </div>
              </AnimatedSection>

              {/* Right — Content */}
              <div>
                <AnimatedSection>
                  <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-3">About Our Academy</h2>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-6 leading-tight">Why Learn With Mehndi Marvel?</p>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <p className="text-brown-900/75 font-light text-base leading-relaxed mb-8">
                    Learn from Monika Sharma, a professional bridal mehndi artist with over a decade of experience. Our academy provides comprehensive training from basic elements to intricate bridal portraits, ensuring you develop real skills to build your career.
                  </p>
                </AnimatedSection>

                <div className="space-y-4">
                  {aboutFeatures.map((f, idx) => (
                    <AnimatedSection key={idx} delay={0.15 + idx * 0.08}>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 shrink-0 rounded-full bg-cream-100 border border-gold-500/20 flex items-center justify-center text-gold-600 group-hover:bg-brown-900 group-hover:text-gold-500 transition-all duration-400">
                          {f.icon}
                        </div>
                        <div>
                          <h4 className="font-serif text-brown-900 font-semibold mb-0.5">{f.title}</h4>
                          <p className="text-brown-900/65 font-light text-sm leading-relaxed">{f.desc}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <LuxuryDivider />

          {/* ═══════════════════════════════════════════════════════════
              4. COURSE STRUCTURE — Journey Timeline
          ═══════════════════════════════════════════════════════════ */}
          <section id="curriculum" className="py-16 md:py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-14 md:mb-20">
                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-3">Course Structure</h2>
                <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-4">Your 6-Week Journey</p>
                <p className="text-brown-900/65 font-light max-w-xl mx-auto text-balance">From beginner basics to advanced bridal mastery — a complete professional course.</p>
              </AnimatedSection>

              {/* Desktop: Horizontal 3-col */}
              <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 relative">
                {/* Connecting line */}
                <div className="absolute top-24 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-gold-500/20 via-gold-500/50 to-gold-500/20 z-0"></div>

                {curriculum.map((module, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.15}>
                    <div className="relative bg-white border border-gold-500/15 rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-xl hover:border-gold-500/40 transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">
                      {/* Step number */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-5xl lg:text-6xl font-serif font-bold text-gold-500/15 group-hover:text-gold-500/25 transition-colors duration-500 leading-none">{module.step}</span>
                        <div className="w-12 h-12 rounded-full bg-cream-100 border border-gold-500/20 flex items-center justify-center text-gold-600 group-hover:bg-brown-900 group-hover:text-gold-500 transition-all duration-500">
                          {module.icon}
                        </div>
                      </div>

                      {/* Duration badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 mb-3 w-fit">
                        <Clock className="w-3 h-3" />
                        <span className="text-[10px] uppercase tracking-widest font-bold">{module.duration}</span>
                      </div>

                      <h3 className="text-xl lg:text-2xl font-serif text-brown-900 mb-1">{module.title}</h3>
                      <p className="text-xs uppercase tracking-wider text-brown-900/45 font-semibold mb-5">{module.level}</p>

                      {/* Feature list */}
                      <ul className="space-y-2.5 mt-auto">
                        {module.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <div className="mt-1 shrink-0 w-4 h-4 rounded-full bg-gold-500/10 flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 text-gold-600" strokeWidth={3} />
                            </div>
                            <span className="text-brown-900/75 font-light text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Bottom accent bar on hover */}
                      <div className="absolute bottom-0 left-4 right-4 h-[3px] bg-gold-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Mobile: Vertical stacked with connecting line */}
              <div className="md:hidden relative">
                {/* Vertical connecting line */}
                <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-gold-500/20 via-gold-500/40 to-gold-500/20 z-0"></div>

                <div className="space-y-6">
                  {curriculum.map((module, idx) => (
                    <AnimatedSection key={idx} delay={idx * 0.15}>
                      <div className="relative pl-14">
                        {/* Timeline dot */}
                        <div className="absolute left-3 top-7 w-7 h-7 rounded-full bg-white border-2 border-gold-500/50 flex items-center justify-center z-10 shadow-sm">
                          <div className="w-2.5 h-2.5 rounded-full bg-gold-500"></div>
                        </div>

                        <div className="bg-white border border-gold-500/15 rounded-2xl p-6 shadow-sm">
                          <div className="flex items-center justify-between mb-4">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600">
                              <Clock className="w-3 h-3" />
                              <span className="text-[10px] uppercase tracking-widest font-bold">{module.duration}</span>
                            </div>
                            <span className="text-3xl font-serif font-bold text-gold-500/20 leading-none">{module.step}</span>
                          </div>

                          <h3 className="text-xl font-serif text-brown-900 mb-1">{module.title}</h3>
                          <p className="text-[10px] uppercase tracking-wider text-brown-900/45 font-semibold mb-4">{module.level}</p>

                          <ul className="space-y-2">
                            {module.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5">
                                <div className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-gold-500/10 flex items-center justify-center">
                                  <Check className="w-2.5 h-2.5 text-gold-600" strokeWidth={3} />
                                </div>
                                <span className="text-brown-900/75 font-light text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════
              5. SPECIAL OFFER / PRICING — Bold Visual Card
          ═══════════════════════════════════════════════════════════ */}
          <section className="py-16 md:py-24 px-6 bg-brown-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/15 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
              <AnimatedSection className="text-center mb-10 md:mb-12">
                <div className="inline-block mb-5 px-5 py-2 rounded-full border border-gold-500/50 bg-gold-500/10 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-500 font-bold flex items-center gap-2">
                    <Star className="w-3 h-3 fill-gold-500" /> Limited Time Admission Offer <Star className="w-3 h-3 fill-gold-500" />
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">Start Your Mehndi Journey Today</h2>
                <p className="text-cream-100/70 font-light text-base sm:text-lg max-w-2xl mx-auto">Get the complete 6-week course with a free practice kit and personal guidance.</p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-white/10 backdrop-blur-xl border-2 border-gold-500/40 p-6 sm:p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden">
                  {/* 50% OFF badge */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold-600 rounded-full flex items-center justify-center rotate-12 shadow-lg">
                      <span className="text-brown-900 font-bold text-center leading-tight tracking-wider text-xs sm:text-sm">50%<br/>OFF</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
                    {/* Price */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 pt-8 sm:pt-0">
                      <span className="text-xl sm:text-2xl text-cream-100/50 line-through font-serif decoration-red-500/50 decoration-2 mb-1">₹10,000</span>
                      <div className="text-5xl sm:text-6xl md:text-7xl font-serif text-gold-500 font-bold mb-3 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">₹4,999</div>
                      <span className="text-xs sm:text-sm uppercase tracking-widest text-cream-100 font-bold bg-white/10 px-4 py-2 rounded-full border border-white/20">
                        + Free Premium Kit
                      </span>
                    </div>

                    {/* Separator */}
                    <div className="hidden md:block w-[1px] h-48 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent"></div>
                    <div className="md:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>

                    {/* Features & CTA */}
                    <div className="w-full md:w-1/2 z-10">
                      <ul className="space-y-4 text-left mb-8">
                        {[
                          "6-week complete course",
                          "Mehndi practice kit",
                          "Personal feedback and doubt sessions",
                          "Lifetime support"
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-cream-100">
                            <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                            <span className="font-medium text-sm sm:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="https://wa.me/918209719892?text=Hi%2C%20I%20want%20to%20enroll%20in%20the%20Professional%20Mehndi%20Class%20at%20the%20special%20offer%20price%20of%204999."
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full py-4 sm:py-5 bg-gradient-to-r from-gold-600 to-gold-400 text-brown-900 text-sm font-bold tracking-widest uppercase rounded-full hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-[1.03] text-center relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">Enroll Now <ArrowRight className="w-4 h-4" /></span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════
              6. STUDENT SUCCESS — Animated Counters
          ═══════════════════════════════════════════════════════════ */}
          <section className="py-16 md:py-20 bg-cream-100 border-b border-gold-500/20">
            <div className="max-w-7xl mx-auto px-6">
              <AnimatedSection className="text-center mb-12 md:mb-16">
                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-3">Our Students</h2>
                <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brown-900">Student Success</p>
              </AnimatedSection>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.1}>
                    <div className="flex flex-col items-center text-center p-5 md:p-6 bg-white rounded-2xl border border-gold-500/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gold-500/10 text-gold-600 flex items-center justify-center mb-3 md:mb-4">
                        {stat.icon}
                      </div>
                      <div className="text-3xl md:text-4xl font-serif font-bold text-brown-900 mb-1.5">
                        <AnimatedCounter value={stat.count} suffix={stat.suffix} />
                      </div>
                      <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest font-semibold text-brown-900/55">{stat.text}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════
              7. STUDENT ARTWORK — Premium Gallery
          ═══════════════════════════════════════════════════════════ */}
          <section className="py-16 md:py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-12 md:mb-16">
                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-3">Student Artwork</h2>
                <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-4">Student Artwork</p>
                <p className="text-brown-900/65 font-light mt-2">See the beautiful mehndi designs created by our students.</p>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {studentGallery.map((img, i) => (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gold-500/15 group">
                      <Image
                        src={img.src}
                        alt={`Student ${img.category} Mehndi Art`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={85}
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      {/* Inner frame on hover */}
                      <div className="absolute inset-3 sm:inset-4 border border-white/0 group-hover:border-white/50 transition-colors duration-500 rounded-xl z-10 pointer-events-none"></div>
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end pb-6 sm:pb-8">
                        <span className="text-gold-500 uppercase tracking-widest text-[10px] font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.category}</span>
                        <span className="text-white uppercase tracking-widest text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Student Work</span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          <LuxuryDivider />

          {/* ═══════════════════════════════════════════════════════════
              8. FAQ — Premium Accordion
          ═══════════════════════════════════════════════════════════ */}
          <section className="py-16 md:py-24 px-6 bg-cream-100">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="text-center mb-12 md:mb-16">
                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-3">Frequently Asked Questions</h2>
                <p className="text-3xl md:text-4xl font-serif font-bold text-brown-900">Class FAQs</p>
              </AnimatedSection>

              <div className="space-y-3 md:space-y-4">
                {faqs.map((faq, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.08}>
                    <div className={`border bg-white rounded-xl transition-all duration-300 ${openFaqIndex === idx ? 'shadow-lg border-gold-500/50' : 'border-brown-900/10 hover:border-gold-500/30 shadow-sm'}`}>
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full text-left px-5 sm:px-6 py-5 sm:py-6 flex justify-between items-center focus:outline-none gap-4"
                      >
                        <span className="font-serif text-base sm:text-lg text-brown-900">{faq.q}</span>
                        <motion.div
                          animate={{ rotate: openFaqIndex === idx ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gold-500 shrink-0 bg-cream-100 p-1.5 sm:p-2 rounded-full"
                        >
                          <ChevronDown size={18} strokeWidth={2} />
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
                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-brown-900/70 font-light leading-relaxed border-t border-brown-900/5 pt-4 text-sm sm:text-base">
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

          {/* ═══════════════════════════════════════════════════════════
              9. FINAL CTA — Strong Conversion Section
          ═══════════════════════════════════════════════════════════ */}
          <section className="py-16 md:py-24 px-6 bg-white relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-10 left-10 text-gold-500/[0.04] w-40 h-40 pointer-events-none">
              <MehndiPattern className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 right-10 text-gold-500/[0.04] w-40 h-40 pointer-events-none">
              <MehndiPattern className="w-full h-full" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <AnimatedSection>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-cream-100 border border-gold-500/30 flex items-center justify-center text-gold-600 mx-auto mb-6 md:mb-8 shadow-lg">
                  <Star className="w-7 h-7 md:w-8 md:h-8 fill-gold-500" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brown-900 mb-6 md:mb-8 leading-tight">
                  Turn Your Passion Into{" "}
                  <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-brown-900 bg-clip-text text-transparent">a Skill</span>
                </h2>
                <p className="text-base sm:text-lg text-brown-900/70 font-light max-w-2xl mx-auto mb-8 md:mb-12">
                  Learn mehndi, improve your skills, and start your journey as a professional mehndi artist.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                  <a
                    href="https://wa.me/918209719892?text=Hi%2C%20I%20want%20to%20enroll%20in%20the%20Professional%20Mehndi%20Class."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-brown-900 text-gold-500 text-sm font-bold tracking-widest uppercase rounded-full hover:bg-gold-600 hover:text-brown-900 transition-all duration-300 shadow-[0_10px_30px_rgba(86,60,45,0.2)] hover:-translate-y-1"
                  >
                    Enroll Now
                  </a>
                  <a
                    href="https://wa.me/918209719892?text=Hi%2C%20I%20have%20a%20question%20about%20the%20Mehndi%20classes."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-white border border-brown-900/20 text-brown-900 text-sm font-bold tracking-widest uppercase rounded-full hover:bg-cream-100 transition-all duration-300"
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
