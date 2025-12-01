'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">

      {/* 1. Video Background (Full Screen) */}
      <motion.div style={{ y: yImage }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        {/* Using a dark, moody industrial video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background-orig.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* 2. Glass Overlay Content */}
      <div className="relative z-10 h-full max-w-[1920px] mx-auto px-6 md:px-12 flex items-end justify-end pb-12 md:pb-24">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-xl bg-black/40 backdrop-blur-xl p-8 md:p-10 border-l-4 border-brand-gold text-white"
        >
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight leading-[0.9] mb-6">
            Quies<br />
            Fidelitatis.
          </h2>

          <div className="mb-8">
            <p className="font-sans text-gray-200 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus in urna a gravida, cum inceptos hymenaeos.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-brand-red text-white font-display font-bold text-xs uppercase tracking-[0.2em] hover:bg-red-700 transition-colors">
              Mitte Peritum
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-display font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors">
              Explora Facultates
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};