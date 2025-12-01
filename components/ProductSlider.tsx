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
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
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
        className="cursor-grab active:cursor-grabbing overflow-hidden pl-6 md:pl-12"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8 w-fit pr-12"
          whileTap={{ cursor: "grabbing" }}
          style={{ x }}
        >
          {PRODUCTS.map((product) => (
            <div key={product.id} className="min-w-[300px] md:min-w-[420px] group bg-white p-8 hover:shadow-xl transition-shadow duration-500 ease-out">
              <div className="mb-8">
                <p className="font-display font-bold text-xs uppercase tracking-widest text-text-muted mb-2">{product.category}</p>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-text-main">{product.name}</h3>
              </div>

              <div className="aspect-[4/3] bg-bg-panel overflow-hidden mb-8 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                  draggable={false}
                  sizes="(min-width: 768px) 420px, 300px"
                />
                {/* Accent Line on Hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
        </motion.div>
      </motion.div>
    </div>
  );
};