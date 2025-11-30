import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { RevealSection } from './RevealSection';

export const TechSpotlight: React.FC = () => {
    return (
        <section className="py-24 bg-black text-white overflow-hidden relative">
            {/* Background Grid/Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Content */}
                    <div className="lg:col-span-5">
                        <RevealSection>
                            <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-brand-gold mb-6">Praeclara Diagnostica</h3>
                            <h2 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tight mb-8 leading-[0.9]">
                                Vide<br />
                                Invisibilia.
                            </h2>
                            <p className="font-sans text-gray-400 text-lg leading-relaxed mb-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi suspendisse potenti sed ligula.
                                Potentiata a <strong className="text-white">RDI Motion Amplification®</strong> narratio,
                                condimentum ornare ligula ac, pharetra dictum lacus.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-display font-bold text-sm uppercase tracking-[0.1em] hover:bg-brand-gold hover:text-white transition-all duration-300">
                                    <Play className="w-4 h-4 fill-current" />
                                    Videa Exemplum
                                </button>
                                <a href="/services/motion-amplification" className="group flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-display font-bold text-sm uppercase tracking-[0.1em] hover:bg-white/10 transition-all duration-300">
                                    Disce Plura
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </RevealSection>
                    </div>

                    {/* Media/Video Placeholder */}
                    <div className="lg:col-span-7">
                        <RevealSection delay={0.2}>
                            <div className="relative aspect-video bg-gray-900 border border-white/10 group overflow-hidden">
                                {/* Placeholder for RDI Video */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-20 h-20 rounded-full border-2 border-brand-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                                        <Play className="w-8 h-8 text-brand-gold ml-1" fill="currentColor" />
                                    </div>
                                    <p className="font-sans text-xs text-brand-gold uppercase tracking-widest font-bold">Exemplum Motion Amplification®</p>
                                </div>
                            </div>

                                {/* Scanline Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/5 to-transparent h-[10%] w-full animate-scan" />
                            </div>
                            <div className="mt-4 flex justify-between items-center border-t border-white/10 pt-4">
                                <span className="font-sans text-xs text-gray-500 font-bold">Sodalis RDI Technologies</span>
                                <span className="font-sans text-xs text-brand-gold font-bold">Systema IRIS M™</span>
                            </div>
                        </RevealSection>
                    </div>

                </div>
            </div>
        </section>
    );
};
