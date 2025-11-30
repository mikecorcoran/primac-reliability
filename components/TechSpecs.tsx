import React from 'react';
import { RevealSection } from './RevealSection';

const SPECS = [
  { label: 'Operating Temp', value: '-40°C to +120°C', code: 'OP-TMP' },
  { label: 'Tensile Strength', value: '2400 MPa', code: 'TN-STR' },
  { label: 'Precision Rating', value: 'ISO Class 0', code: 'PR-ISO' },
  { label: 'Warranty', value: 'Lifetime Guarantee', code: 'WR-LIF' },
  { label: 'Maintenance Interval', value: '5000 Hours', code: 'MN-INT' },
];

export const TechSpecs: React.FC = () => {
  return (
    <div className="bg-bg-panel py-24 md:py-32 relative">
      <RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Section Title */}
          <div className="col-span-1 md:col-span-4">
            <h2 className="font-display font-black text-4xl md:text-5xl text-text-main uppercase tracking-tight mb-6 leading-none">
              Technical <br />
              Mastery
            </h2>
            <p className="text-text-muted font-sans leading-relaxed max-w-sm text-lg">
              Our engineering process leaves nothing to chance. Every micron is accounted for, every stress vector calculated.
            </p>
          </div>

          {/* Specs Table */}
          <div className="col-span-1 md:col-span-8 border-t border-black">
            <div className="flex flex-col">
              {SPECS.map((spec, index) => (
                <div
                  key={index}
                  className="group grid grid-cols-12 items-center border-b border-gray-200 py-6 hover:bg-white transition-colors duration-300 px-4 relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <div className="col-span-2 hidden md:block">
                    <span className="font-sans text-xs text-gray-400 tracking-widest">{spec.code}</span>
                  </div>
                  <div className="col-span-6 md:col-span-5">
                    <span className="font-display font-bold text-text-main uppercase tracking-wider text-sm md:text-base">{spec.label}</span>
                  </div>
                  <div className="col-span-6 md:col-span-5 text-right md:text-left">
                    <span className="font-sans text-text-main font-medium">{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
};