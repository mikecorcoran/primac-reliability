import React from 'react';
import { RevealSection } from '../components/RevealSection';
import { Shield, CheckCircle, FileText, AlertOctagon } from 'lucide-react';

const SAFETY_STATS = [
    { label: "Lost Time Incidents", value: "0", sub: "Since 2018" },
    { label: "Total Man Hours", value: "450k+", sub: "Without Injury" },
    { label: "Field Audits", value: "100%", sub: "Compliance Rate" },
    { label: "Stop Work Authority", value: "Active", sub: "All Personnel" }
];

const CERTIFICATIONS = [
    { name: "COR Certified", issuer: "Energy Safety Canada", status: "Active" },
    { name: "ISNetworld", issuer: "Grade A", status: "Verified" },
    { name: "ComplyWorks", issuer: "Green Status", status: "Verified" },
    { name: "Avetta", issuer: "Prequalified", status: "Verified" }
];

export const TrustAndSafety: React.FC = () => {
    return (
        <main className="bg-bg-page pt-24">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center bg-bg-contrast text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10 w-full">
                    <RevealSection>
                        <div className="inline-flex items-center gap-2 mb-6 text-brand-red">
                            <Shield className="w-5 h-5" />
                            <span className="font-sans text-xs uppercase tracking-widest font-bold">The Shield</span>
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6 leading-[0.9]">
                            Zero Harm.<br />
                            Zero Compromise.
                        </h1>
                        <p className="font-sans text-xl text-gray-400 max-w-2xl leading-relaxed">
                            Reliability is pointless if it isn't safe. Our record speaks for itself. We prioritize the sanctity of life above all else.
                        </p>
                    </RevealSection>
                </div>
            </section>

            {/* Safety Stats Dashboard */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <RevealSection>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                            <div>
                                <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-text-muted mb-4">Live Metrics</h3>
                                <h2 className="font-display font-black text-4xl md:text-5xl text-text-main uppercase tracking-tight">Safety Dashboard</h2>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    <span className="font-sans text-xs text-text-muted uppercase font-bold">System Status: Operational</span>
                                </div>
                            </div>
                        </div>
                    </RevealSection>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {SAFETY_STATS.map((stat, index) => (
                            <RevealSection key={index} delay={index * 0.1}>
                                <div className="bg-bg-panel p-8 text-center border-t-4 border-brand-red">
                                    <h3 className="font-display font-black text-5xl md:text-6xl text-text-main mb-2">{stat.value}</h3>
                                    <p className="font-display font-bold text-sm uppercase tracking-wider text-text-main mb-1">{stat.label}</p>
                                    <p className="font-sans text-xs text-text-muted font-bold">{stat.sub}</p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Grid */}
            <section className="py-24 bg-bg-panel">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <RevealSection>
                        <div className="mb-16 max-w-3xl">
                            <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-text-muted mb-4">Compliance</h3>
                            <h2 className="font-display font-black text-4xl md:text-5xl text-text-main uppercase tracking-tight mb-6">Verified & Vetted</h2>
                            <p className="font-sans text-lg text-text-muted leading-relaxed">
                                We maintain active good standing with all major Western Canadian compliance registries. We are pre-qualified for your site.
                            </p>
                        </div>
                    </RevealSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CERTIFICATIONS.map((cert, index) => (
                            <RevealSection key={index} delay={index * 0.1}>
                                <div className="bg-white p-8 flex items-center justify-between group hover:shadow-md transition-shadow duration-300">
                                    <div>
                                        <h4 className="font-display font-bold text-lg text-text-main mb-1">{cert.name}</h4>
                                        <p className="font-sans text-sm text-text-muted">{cert.issuer}</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <CheckCircle className="w-6 h-6 text-green-500 mb-2" />
                                        <span className="font-sans text-xs text-green-600 uppercase font-bold bg-green-50 px-2 py-1 rounded-sm">{cert.status}</span>
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>

                    <RevealSection delay={0.4}>
                        <div className="mt-16 bg-brand-red/5 border border-brand-red/20 p-8 md:p-12 rounded-sm flex flex-col md:flex-row items-start md:items-center gap-8">
                            <div className="bg-brand-red/10 p-4 rounded-full">
                                <AlertOctagon className="w-8 h-8 text-brand-red" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-text-main mb-2">Stop Work Authority</h3>
                                <p className="font-sans text-text-muted leading-relaxed">
                                    Every Primac technician has absolute authority to stop work if conditions are unsafe.
                                    We balance the urgency of uptime with the sanctity of life. No exceptions.
                                </p>
                            </div>
                            <button className="whitespace-nowrap bg-white border border-gray-200 text-text-main px-6 py-3 font-display font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors">
                                View Safety Manual
                            </button>
                        </div>
                    </RevealSection>
                </div>
            </section>
        </main>
    );
};
