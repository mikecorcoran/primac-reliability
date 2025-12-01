import React from 'react';
import Image from 'next/image';
import { RevealSection } from './RevealSection';

const SECTORS = [
    {
        title: "Metalla & Mineralia",
        focus: "Molendina, Conterentes, Vehicula",
        image: "/images/IMG_0442.JPEG",
        link: "/industries/mining"
    },
    {
        title: "Oleum & Aer",
        focus: "Pulsus Bituminis, Gradus Superior",
        image: "/images/IMG_0448.JPEG",
        link: "/industries/oil-and-gas"
    },
    {
        title: "Charta & Lignum",
        focus: "Aridae Sectores, Cylindri Preli",
        image: "/images/IMG_0451.JPEG",
        link: "/industries/pulp-and-paper"
    },
    {
        title: "Vis Generatio",
        focus: "Turbinae, Generatores, Ventilabra",
        image: "/images/IMG_0453.JPEG",
        link: "/industries/power-gen"
    },
    {
        title: "Caementum & Congeries",
        focus: "Forni, Molendina Globosa, Impulsores",
        image: "/images/IMG_0456.JPEG",
        link: "/industries/cement"
    }
];

export const ServicePathway: React.FC = () => {
    return (
        <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                <RevealSection>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-text-muted mb-4">Iter Servitii</h3>
                            <h2 className="font-display font-black text-4xl md:text-5xl text-text-main uppercase tracking-tight">Sectorem Tuae Pete</h2>
                        </div>
                        <div className="hidden md:block">
                            <span className="font-sans text-xs text-text-muted font-bold">Volue ad Perscrutandum \u0019\u0002d</span>
                        </div>
                    </div>
                </RevealSection>

                <div className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                    {SECTORS.map((sector, index) => (
                        <div
                            key={sector.title}
                            className="min-w-[300px] md:min-w-[400px] snap-start group relative h-[500px] overflow-hidden bg-gray-100 cursor-pointer"
                        >
                            <Image
                                src={sector.image}
                                alt={sector.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                sizes="(min-width: 1024px) 400px, 80vw"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 w-full p-8">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="font-sans text-xs text-white/50 uppercase tracking-widest font-bold mb-2 block">Sectio {index + 1}</span>
                                    <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-2">{sector.title}</h3>
                                    <p className="font-sans text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        Intentio: {sector.focus}
                                    </p>
                                    <span className="inline-flex items-center gap-2 font-display font-bold text-xs uppercase tracking-[0.2em] text-green-700">
                                        Vide Sectorem \u0019\u0002d
                                    </span>
                                </div>
                            </div>

                            {/* Hover Border */}
                            <div className="absolute inset-0 border-4 border-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
