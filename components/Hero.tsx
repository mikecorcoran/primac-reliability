'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  title?: string;
  description?: string;
  primaryCta?: {
    label?: string;
    href?: string;
  };
  secondaryCta?: {
    label?: string;
    href?: string;
  };
  videoSrc?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title = "Rotating and Static Equipment Specialists",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus in urna a gravida, cum inceptos hymenaeos.",
  primaryCta = { label: "Mitte Peritum", href: "#contact" },
  secondaryCta = { label: "Explora Facultates", href: "#services" },
  videoSrc = "/videos/hero-background-orig.mp4"
}) => {
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
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* 2. Glass Overlay Content */}
      <div className="relative z-10 h-full max-w-[1920px] mx-auto px-6 md:px-12 flex items-end justify-end pb-12 md:pb-24">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-xl bg-black/40 backdrop-blur-xl p-8 md:p-10 border-l-4 border-brand-accent text-white"
        >
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight leading-[0.9] mb-6">
            {title}
          </h2>

          <div className="mb-8">
            <p className="font-sans text-gray-200 text-base leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {primaryCta?.label && (
              <a href={primaryCta.href || '#'} className="inline-flex items-center justify-center px-6 py-3 bg-brand-accent text-white font-display font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-accentDark transition-colors">
                {primaryCta.label}
              </a>
            )}
            {secondaryCta?.label && (
              <a href={secondaryCta.href || '#'} className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-display font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors">
                {secondaryCta.label}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};