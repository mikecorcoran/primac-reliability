import React from 'react';
import { RevealSection } from '../../components/RevealSection';
import { DollarSign, Clock, AlertTriangle, ArrowRight } from 'lucide-react';

const PAIN_POINTS = [
    {
        title: "SAG Mill Downtime",
        cost: "$150k / Hour",
        description: "When the mill stops, the mine stops. We monitor trunnion bearings and ring gear vibration to prevent unplanned outages."
    },
    {
        title: "Crusher Failure",
        cost: "$85k / Hour",
        description: "Impact loads destroy bearings. Our remote monitoring systems catch early-stage defects before they become catastrophic seizures."
    },
    {
        title: "Conveyor Criticality",
        cost: "$40k / Hour",
        description: "A seized idler can cause a fire. We use thermal imaging and ultrasound to inspect miles of conveyor in a single shift."
    }
];

export const Mining: React.FC = () => {
    return (
        <main className="bg-bg-page pt-24">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

                <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10 w-full">
                    <RevealSection>
                        <div className="inline-block bg-brand-gold/20 border border-brand-gold/50 px-4 py-2 mb-6">
                            <span className="font-sans text-xs text-brand-gold uppercase tracking-widest font-bold">Industry Vertical: Mining & Extraction</span>
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter mb-6 leading-[0.9]">
                            Protect the<br />
                            Critical Path.
                        </h1>
                        <p className="font-sans text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-10">
                            From the Face to the Mill: Ensuring the Ore Never Stops Moving. We operate where others fail.
                        </p>
                    </RevealSection>
                </div>
            </section>

            {/* High Cost of Silence */}
            <section className="py-24 bg-bg-contrast text-white">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <RevealSection>
                        <div className="mb-16 max-w-3xl">
                            <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-brand-red mb-4">The Reality</h3>
                            <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight mb-6">
                                The High Cost of Silence.
                            </h2>
                            <p className="font-sans text-lg text-gray-400 leading-relaxed">
                                In mining, silence means downtime. And downtime costs millions. We keep the noise—and the revenue—flowing.
                            </p>
                        </div>
                    </RevealSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {PAIN_POINTS.map((point, index) => (
                            <RevealSection key={index} delay={index * 0.1}>
                                <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <AlertTriangle className="w-8 h-8 text-brand-gold" />
                                        <span className="font-sans text-xl text-brand-red font-bold">{point.cost}</span>
                                    </div>
                                    <h3 className="font-display font-bold text-2xl uppercase tracking-wide mb-4">{point.title}</h3>
                                    <p className="font-sans text-gray-400 text-sm leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Highlight */}
            <section className="py-24 bg-white">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <div className="bg-bg-panel border-l-8 border-brand-gold p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <DollarSign className="w-64 h-64 text-text-main" />
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <span className="w-3 h-3 bg-brand-red rounded-full animate-pulse" />
                                    <span className="font-sans text-xs text-brand-red uppercase tracking-widest font-bold">Case File: Potash Mine Hoist</span>
                                </div>
                                <h2 className="font-display font-black text-4xl md:text-6xl text-text-main uppercase tracking-tight mb-8">
                                    Saved: $1.2M<br />
                                    Avoided: 48 Hrs
                                </h2>
                                <p className="font-sans text-lg text-text-muted leading-relaxed mb-8 max-w-xl">
                                    Routine spectral analysis detected a cage frequency defect in the main hoist bearing.
                                    Primac coordinated a planned replacement during a shift change, preventing a catastrophic seize-up
                                    that would have halted all production and endangered personnel.
                                </p>
                                <button className="inline-flex items-center gap-3 font-display font-bold text-sm uppercase tracking-[0.2em] text-text-main hover:text-brand-gold transition-colors">
                                    Read Full Case Study
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="bg-white p-8 shadow-lg">
                                <h4 className="font-display font-bold text-sm uppercase tracking-widest text-text-muted mb-6">Diagnostic Data</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="font-sans text-xs text-gray-500 font-bold">ASSET</span>
                                        <span className="font-sans text-xs font-bold text-text-main">MAIN SKIP HOIST</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="font-sans text-xs text-gray-500 font-bold">FAULT</span>
                                        <span className="font-sans text-xs font-bold text-brand-red">INNER RACE DEFECT (BPFI)</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="font-sans text-xs text-gray-500 font-bold">SEVERITY</span>
                                        <span className="font-sans text-xs font-bold text-brand-red">CRITICAL (ISO ZONE D)</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="font-sans text-xs text-gray-500 font-bold">OUTCOME</span>
                                        <span className="font-sans text-xs font-bold text-green-600">PLANNED REPLACEMENT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
