import React from 'react';
import { RevealSection } from './RevealSection';

const DOCTRINE_POINTS = [
    {
        title: "Vigilia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor sapien vitae augue posuere porttitor."
    },
    {
        title: "Constantia",
        description: "Pellentesque et dui sit amet ipsum pulvinar commodo. Sed quis leo quis massa aliquet cursus sed id tortor."
    },
    {
        title: "Ordo in Motu",
        description: "Mauris malesuada lacus ac nisi fermentum, sit amet consequat lacus sodales. In feugiat nisl ac neque sodales dictum."
    },
    {
        title: "Praesidium",
        description: "Suspendisse potenti. Etiam lacinia, velit a dictum pretium, augue lacus finibus elit, id viverra lectus velit at arcu."
    }
];

export const GuardianDoctrine: React.FC = () => {
    return (
        <section className="py-24 bg-bg-panel">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                <RevealSection>
                    <div className="mb-16">
                        <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-text-muted mb-4">Nostra Philosophia</h3>
                        <h2 className="font-display font-black text-4xl md:text-5xl text-text-main uppercase tracking-tight">Doctrina Custodis</h2>
                    </div>
                </RevealSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {DOCTRINE_POINTS.map((point, index) => (
                        <RevealSection key={point.title} delay={index * 0.1}>
                            <div className="bg-white p-8 h-full border-t-4 border-transparent hover:border-brand-accent transition-colors duration-300 group shadow-sm hover:shadow-md">
                                <div className="mb-6 h-1 w-12 bg-brand-accent group-hover:w-16 transition-all duration-300" />
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
