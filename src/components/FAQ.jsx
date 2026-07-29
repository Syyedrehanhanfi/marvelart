"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const faqs = [
  {
    question: "Do you provide home service for bridal mehndi?",
    answer: "Yes, we provide luxury home services across Udaipur, Rajasthan, and surrounding areas. Our team brings everything needed for a comfortable, salon-like experience at your venue."
  },
  {
    question: "Is your henna organic and safe for sensitive skin?",
    answer: "Absolutely. We prepare our own organic henna paste using 100% natural ingredients and premium essential oils, ensuring a safe application and a rich, dark stain."
  },
  {
    question: "How far in advance should I book for my wedding?",
    answer: "We recommend booking at least 2-3 months in advance for peak wedding seasons to secure your preferred dates, though we always try to accommodate last-minute requests when possible."
  },
  {
    question: "Do you cater to guest mehndi as well?",
    answer: "Yes, we have a skilled team of artists capable of handling guest mehndi for events of any size, ensuring everyone receives beautiful designs efficiently."
  },
  {
    question: "Can I customize my bridal mehndi design?",
    answer: "Yes! We specialize in customized bridal mehndi. During our consultation, we can discuss incorporating specific motifs, portraits, wedding dates, or any elements that hold special meaning to you."
  },
  {
    question: "How long does a bridal mehndi application take?",
    answer: "The duration depends on the intricacy and coverage of the design. Typically, a full bridal mehndi (hands and feet) takes between 4 to 7 hours."
  },
  {
    question: "How can I ensure a dark mehndi stain?",
    answer: "We provide a premium aftercare kit and detailed instructions. Key tips include leaving the paste on for 8-12 hours, avoiding water for 24 hours, and applying the lemon-sugar sealant we provide."
  },
  {
    question: "Are travel charges included in the bridal package?",
    answer: "Travel within central Udaipur is usually included. For venues outside the city limits or destination weddings, reasonable travel and accommodation charges may apply."
  },
  {
    question: "Do you take out-of-station or destination wedding bookings?",
    answer: "Yes, we frequently travel for destination weddings across Rajasthan and India. Please contact us with your venue details for a customized quote."
  },
  {
    question: "What is your booking and cancellation policy?",
    answer: "A booking is confirmed with an advance deposit. Deposits are non-refundable but can be adjusted for a future date if the event is postponed (subject to availability)."
  },
  {
    question: "Do you offer trial mehndi sessions?",
    answer: "Yes, we offer paid trial sessions for brides who want to test the stain quality and design style before confirming their final booking."
  },
  {
    question: "Can you replicate a design I found online?",
    answer: "While we can use your reference pictures as inspiration, we prefer to add our own artistic touch to ensure your design is unique and tailored perfectly to your hands."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 bg-cream-100">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-gold-500 tracking-[0.3em] uppercase text-xs font-medium mb-4">Inquiries</h2>
          <p className="text-4xl font-serif text-brown-900">Frequently Asked Questions</p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div 
                className={`border border-brown-900/10 bg-white transition-colors duration-300 ${openIndex === idx ? 'shadow-md' : 'hover:border-gold-500/50'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-serif text-lg text-brown-900 pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gold-500 shrink-0"
                  >
                    <ChevronDown size={20} strokeWidth={2} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-brown-900/70 font-light leading-relaxed">
                        {faq.answer}
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
  );
}
