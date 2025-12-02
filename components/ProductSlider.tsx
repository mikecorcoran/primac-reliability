'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Rotor T-800',
    category: 'Industrialis',
    image: '/images/IMG_0442.JPEG',
    specs: [{ label: 'Cursus', value: '12000 RPM' }, { label: 'Momentum', value: '450Nm' }]
  },
  {
    id: '2',
    name: 'Gestus Aero X',
    category: 'Praecisio',
    image: '/images/IMG_0448.JPEG',
    specs: [{ label: 'Gradus', value: 'Aerospace' }, { label: 'Onus', value: '50kN' }]
  },
  {
    id: '3',
    name: 'Pomp a Hydro V2',
    category: 'Hydraulica',
    image: '/images/IMG_0451.JPEG',
    specs: [{ label: 'Fluxus', value: '200L/m' }, { label: 'Pressio', value: '300bar' }]
  },
  {
    id: '4',
    name: 'Moderator Servo',
    category: 'Electronica',
    image: '/images/IMG_0453.JPEG',
    specs: [{ label: 'Initus', value: '24V' }, { label: 'Responsio', value: '2ms' }]
  },
];

export const ProductSlider: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const calculateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };

    calculateWidth();
    window.addEventListener('resize', calculateWidth);

    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  return (
    <div className="w-full overflow-hidden py-12 md:py-24 bg-bg-panel">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <p className="font-display font-bold text-xs tracking-[0.2em] text-text-muted uppercase mb-4">Nostra Oblatio</p>
          <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tight text-text-main">
            Primac Componentia
          </h2>
        </div>

        {/* Navigation Arrows (Visual only for this demo) */}
        <div className="hidden md:flex gap-4">
          <button className="p-4 border border-gray-300 hover:border-black transition-colors rounded-full text-sm font-display">←</button>
          <button className="p-4 border border-gray-300 hover:border-black transition-colors rounded-full text-sm font-display">→</button>
        </div>
      </div>

      <motion.div
        ref={carousel}
        className="cursor-grab active:cursor-grabbing overflow-hidden pl-6 pr-8 sm:pl-10 sm:pr-12 md:pl-16 md:pr-16"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6 sm:gap-8 w-fit pr-12 sm:pr-16"
          whileTap={{ cursor: "grabbing" }}
          style={{ x }}
        >
          <div className="shrink-0 w-5 sm:w-8 md:w-12" />
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="relative min-w-[300px] md:min-w-[420px] group mx-4 md:mx-6 lg:mx-8 bg-white p-8 hover:shadow-xl transition-shadow duration-500 ease-out"
            >
              <div className="mb-8">
                <p className="font-display font-bold text-xs uppercase tracking-widest text-text-muted mb-2">{product.category}</p>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-text-main">{product.name}</h3>
              </div>

              <div className="aspect-[4/3] bg-bg-panel overflow-hidden mb-8 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 mix-blend-multiply group-hover:mix-blend-normal group-hover:scale-110"
                  draggable={false}
                  sizes="(min-width: 768px) 420px, 300px"
                />
                <svg
                  className="absolute inset-0 z-10 pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <rect
                    x="1"
                    y="1"
                    width="98"
                    height="98"
                    className="text-brand-accent [stroke-dasharray:392] [stroke-dashoffset:392] transition-[stroke-dashoffset] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[stroke-dashoffset:0]"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <p className="font-sans text-xs text-text-muted">
                    {product.specs[0].label}: <span className="text-text-main font-semibold">{product.specs[0].value}</span>
                  </p>
                </div>
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-bg-panel group-hover:bg-text-main group-hover:text-white transition-colors duration-300 font-display">
                  →
                </span>
              </div>
            </div>
          ))}
          <div className="shrink-0 w-5 sm:w-8 md:w-12" />
        </motion.div>
      </motion.div>
    </div>
  );
};