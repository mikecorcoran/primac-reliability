import React from 'react';
import { Shield, Eye, Activity, Thermometer } from 'lucide-react';
import { RevealSection } from './RevealSection';

const DOCTRINE_POINTS = [
    {
        icon: Eye,
        title: "Vigilance",
        description: "The Guardian never sleeps. 24/7/365 monitoring is not a feature; it is a character trait. We operate on the principle of constant watchfulness."
    },
    {
        icon: Thermometer,
        title: "Stoicism",
        description: "We thrive where others falter. From -40°C oil sands to subterranean potash mines, our technicians are built for the harshest environments on earth."
    },
    {
        icon: Activity,
        title: "Precision in Chaos",
        description: "In a world of entropy, we bring order. We measure in microns and analyze in frequencies, turning the chaos of vibration into actionable intelligence."
    },
    {
        icon: Shield,
        title: "Protection",
        description: "Our ultimate goal is the preservation of asset life and human safety. Every diagnostic intervention is a protective act against catastrophic failure."
    }
];

export const GuardianDoctrine: React.FC = () => {
    return (
        <section className="py-24 bg-bg-panel">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                <RevealSection>
                    <div className="mb-16">
                        <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-text-muted mb-4">Our Philosophy</h3>
                        <h2 className="font-display font-black text-4xl md:text-5xl text-text-main uppercase tracking-tight">The Guardian Doctrine</h2>
                    </div>
                </RevealSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {DOCTRINE_POINTS.map((point, index) => (
                        <RevealSection key={point.title} delay={index * 0.1}>
                            <div className="bg-white p-8 h-full border-t-4 border-transparent hover:border-brand-gold transition-colors duration-300 group shadow-sm hover:shadow-md">
                                <div className="mb-6">
                                    <point.icon className="w-10 h-10 text-text-muted group-hover:text-brand-gold transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-display font-bold text-xl uppercase tracking-wide mb-4 text-text-main">{point.title}</h3>
                                <p className="font-sans text-text-muted leading-relaxed text-sm">
                                    {point.description}
                                </p>
                            </div>
                        </RevealSection>
                    ))}
                </div>
            </div>
        </section>
    );
};
