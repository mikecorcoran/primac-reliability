import React from 'react';
import { RevealSection } from '../../components/RevealSection';
import { Activity, Search, Zap, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

const PROBLEMS = [
    {
        title: "Tempus Inopinatum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a urna sed neque auctor faucibus.",
        solution: "Praevisio Sapiens",
        icon: Activity
    },
    {
        title: "Tormentum Partium",
        description: "Suspendisse potenti. Praesent vitae sem eu lectus volutpat pharetra sed at augue.",
        solution: "Substitutio Exacta",
        icon: Search
    },
    {
        title: "Ruinosa Defectio",
        description: "Quisque facilisis, urna non iaculis tristique, mi elit tincidunt leo, ut gravida velit metus in felis.",
        solution: "Tutela Integra",
        icon: Zap
    }
];

const METHODOLOGY_STEPS = [
    {
        step: "01",
        title: "Collectio Data",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis felis sagittis, volutpat metus a, egestas nisl.",
        detail: "Analystae ISO 18436-2"
    },
    {
        step: "02",
        title: "Analysis Spectralis",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        detail: "FFT et Forma Temporis"
    },
    {
        step: "03",
        title: "Causa Radicis",
        description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer rhoncus erat id posuere lacinia.",
        detail: "Relatio Practica"
    },
    {
        step: "04",
        title: "Verificatio",
        description: "Mauris pretium, dui vitae ultricies ultrices, ipsum augue bibendum lectus, at tempus ipsum libero id ipsum.",
        detail: "Fides Recurrens"
    }
];

const ARSENAL = [
    { name: "CSI 2140", type: "Salutis Machinarum", role: "Collectio data spectrali provecta" },
    { name: "RDI Iris M™", type: "Amplificatio Motus", role: "Visualizare laxitatem structuralem" },
    { name: "SDT 340", type: "Detector Ultrasound", role: "Praeventio vitii celeris et effluxus" },
    { name: "Fluke Ti480", type: "Camera Infrared", role: "Detectio anomaliarum thermalium" }
];

export const VibrationAnalysis: React.FC = () => {
    return (
        <main className="bg-bg-page pt-24">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

                <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10 w-full">
                    <RevealSection>
                        <h1 className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter mb-6 leading-[0.9]">
                            Analytica<br />
                            Machinae<br />
                            Forensis.
                        </h1>
                        <p className="font-sans text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a dui vitae mi dictum viverra vitae vel leo.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-brand-red text-white px-8 py-4 font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-red-700 transition-colors">
                                Agenda Analysin
                            </button>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* Problem/Solution Matrix */}
            <section className="py-24 bg-white">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <RevealSection>
                        <div className="mb-16 max-w-3xl">
                            <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-text-muted mb-4">Provocatio</h3>
                            <h2 className="font-display font-black text-4xl md:text-5xl text-text-main uppercase tracking-tight mb-6">
                                Vibratio est Pulsus.
                            </h2>
                            <p className="font-sans text-lg text-text-muted leading-relaxed">
                                Vestibulum eget arcu id ipsum ullamcorper rhoncus. Praesent finibus magna eu tortor gravida, id varius sapien varius.
                            </p>
                        </div>
                    </RevealSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {PROBLEMS.map((item, index) => (
                            <RevealSection key={index} delay={index * 0.1}>
                                <div className="bg-bg-panel p-8 h-full border-l-4 border-brand-gold">
                                    <item.icon className="w-8 h-8 text-text-main mb-6" />
                                    <h3 className="font-display font-bold text-xl uppercase tracking-wide mb-3">{item.title}</h3>
                                    <p className="font-sans text-sm text-text-muted mb-6">{item.description}</p>
                                    <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-wider">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span>Solutio: {item.solution}</span>
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sticky Split Methodology */}
            <section className="bg-black text-white py-24">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Sticky Left Side */}
                        <div className="hidden lg:block relative">
                            <div className="sticky top-32">
                                <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-brand-gold mb-4">Methodologia</h3>
                                <h2 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tight mb-8 leading-none">
                                    Ex Chao<br />
                                    Ad Ordinem.
                                </h2>
                                <p className="font-sans text-gray-400 text-lg max-w-md">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis sapien ut sem blandit sollicitudin.
                                </p>
                            </div>
                        </div>

                        {/* Scrolling Right Side */}
                        <div className="space-y-24">
                            {METHODOLOGY_STEPS.map((step, index) => (
                                <RevealSection key={index}>
                                    <div className="border-t border-white/20 pt-8">
                                            <span className="font-sans text-4xl text-brand-gold opacity-50 mb-4 block font-bold">{step.step}</span>
                                            <h3 className="font-display font-black text-3xl uppercase tracking-tight mb-4">{step.title}</h3>
                                            <p className="font-sans text-gray-400 text-lg leading-relaxed mb-6">
                                                {step.description}
                                            </p>
                                        <div className="inline-block bg-white/10 px-4 py-2 rounded-sm">
                                            <span className="font-sans text-xs text-brand-gold uppercase tracking-widest font-bold">{step.detail}</span>
                                        </div>
                                    </div>
                                </RevealSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Arsenal (Tech Stack) */}
            <section className="py-24 bg-bg-panel">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <RevealSection>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
                            <div>
                                <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-text-muted mb-4">Ars Technologiae</h3>
                                <h2 className="font-display font-black text-4xl md:text-5xl text-text-main uppercase tracking-tight">Arsenalium</h2>
                            </div>
                            <div className="hidden md:block">
                                <p className="font-sans text-text-muted text-right max-w-md">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique ligula id libero suscipit, eget fermentum velit varius.
                                </p>
                            </div>
                        </div>
                    </RevealSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ARSENAL.map((gear, index) => (
                            <RevealSection key={index} delay={index * 0.1}>
                                <div className="bg-white p-8 hover:shadow-lg transition-shadow duration-300 group">
                                    <div className="h-1 w-12 bg-gray-200 group-hover:bg-brand-gold transition-colors duration-300 mb-6" />
                                    <h4 className="font-display font-black text-xl uppercase tracking-tight mb-2">{gear.name}</h4>
                                    <p className="font-sans text-xs text-brand-gold uppercase tracking-widest mb-4 font-bold">{gear.type}</p>
                                    <p className="font-sans text-sm text-text-muted">{gear.role}</p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
