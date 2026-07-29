"use client";

import { motion } from 'framer-motion';

export default function LuxuryDivider() {
  return (
    <div className="w-full flex justify-center items-center py-12 opacity-60">
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent"
      ></motion.div>
      <motion.div 
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
        className="mx-4 w-3 h-3 border border-gold-500 rotate-45 flex items-center justify-center"
      >
        <div className="w-1 h-1 bg-gold-500 rounded-full"></div>
      </motion.div>
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-24 h-[1px] bg-gradient-to-r from-gold-500 via-gold-500 to-transparent"
      ></motion.div>
    </div>
  );
}
