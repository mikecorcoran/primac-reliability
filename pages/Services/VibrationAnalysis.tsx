import React from 'react';
import { RevealSection } from '../../components/RevealSection';
import { Activity, Search, Zap, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

const PROBLEMS = [
    {
        title: "Unplanned Downtime",
        description: "Equipment failure at 2:00 AM costs more than just repairs. It costs production targets, reputation, and safety risks.",
        solution: "Predictive Intelligence",
        icon: Activity
    },
    {
        title: "The 'Parts Cannon'",
        description: "Replacing perfectly good bearings because of a 'hunch' or generic time-based schedule is a waste of capital.",
        solution: "Precision Replacement",
        icon: Search
    },
    {
        title: "Catastrophic Failure",
        description: "When a high-speed turbine fails, it's not just a mechanical issue. It's a potential safety incident.",
        solution: "Zero-Harm Protection",
        icon: Zap
    }
];

const METHODOLOGY_STEPS = [
    {
        step: "01",
        title: "Data Collection",
        description: "We don't just take readings; we capture the machine's signature. Using tri-axial accelerometers and high-frequency sampling, we gather the raw data needed for forensic analysis.",
        detail: "ISO 18436-2 Certified Analysts"
    },
    {
        step: "02",
        title: "Spectral Analysis",
        description: "We decode the waveform. By converting time-domain data into frequency spectra, we identify specific defect frequencies—bearing races, gear mesh, electrical faults, and looseness.",
        detail: "FFT & Time Waveform Analysis"
    },
    {
        step: "03",
        title: "Root Cause Diagnosis",
        description: "We don't just report the symptom; we find the disease. Is it misalignment? Imbalance? Resonance? We pinpoint the root cause so you can fix it permanently.",
        detail: "Definitive Actionable Reporting"
    },
    {
        step: "04",
        title: "Verification",
        description: "After the repair, we return. We verify that the vibration levels have dropped to ISO standards, confirming the effectiveness of the maintenance action.",
        detail: "Closed-Loop Reliability"
    }
];

const ARSENAL = [
    { name: "CSI 2140", type: "Machinery Health Analyzer", role: "Advanced spectral data collection" },
    { name: "RDI Iris M™", type: "Motion Amplification", role: "Visualizing structural looseness" },
    { name: "SDT 340", type: "Ultrasound Detector", role: "Early bearing fault & leak detection" },
    { name: "Fluke Ti480", type: "Infrared Camera", role: "Thermal anomaly detection" }
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
                            Forensic<br />
                            Machine<br />
                            Analysis.
                        </h1>
                        <p className="font-sans text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-10">
                            Decoding the mechanical DNA of your assets to predict failure months in advance. We don't guess. We know.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-brand-red text-white px-8 py-4 font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-red-700 transition-colors">
                                Schedule Analysis
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
                            <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-text-muted mb-4">The Challenge</h3>
                            <h2 className="font-display font-black text-4xl md:text-5xl text-text-main uppercase tracking-tight mb-6">
                                Vibration is the Heartbeat.
                            </h2>
                            <p className="font-sans text-lg text-text-muted leading-relaxed">
                                Changes in rhythm indicate pathology. Most plants operate in a reactive state, waiting for the crash. We shift you to a proactive stance.
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
                                        <span>Solution: {item.solution}</span>
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
                                <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-brand-gold mb-4">Methodology</h3>
                                <h2 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tight mb-8 leading-none">
                                    From Chaos<br />
                                    To Order.
                                </h2>
                                <p className="font-sans text-gray-400 text-lg max-w-md">
                                    Our process is rigorous, repeatable, and rooted in physics. We leave nothing to chance.
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
                                <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-text-muted mb-4">Technology Stack</h3>
                                <h2 className="font-display font-black text-4xl md:text-5xl text-text-main uppercase tracking-tight">The Arsenal</h2>
                            </div>
                            <div className="hidden md:block">
                                <p className="font-sans text-text-muted text-right max-w-md">
                                    We deploy the most advanced diagnostic hardware in the world.
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
