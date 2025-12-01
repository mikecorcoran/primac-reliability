'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealSectionProps {
  children: React.ReactNode;
  width?: "full" | "constrained";
  className?: string;
  delay?: number;
}

export const RevealSection: React.FC<RevealSectionProps> = ({ 
  children, 
  width = "constrained", 
  className = "",
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // The "Heavy/Precision" curve
        delay: delay
      }}
      className={`${width === 'constrained' ? 'max-w-[1920px] mx-auto px-6 md:px-12' : 'w-full'} ${className}`}
    >
      {children}
    </motion.div>
  );
};