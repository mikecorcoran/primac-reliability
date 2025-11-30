import React from 'react';
import { RevealSection } from '../../components/RevealSection';
import { DollarSign, Clock, AlertTriangle, ArrowRight } from 'lucide-react';

const PAIN_POINTS = [
    {
        title: "Moram Molendini SAG",
        cost: "$150k / Hora",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet orci at metus volutpat, id interdum dui vehicula."
    },
    {
        title: "Defectio Contusoris",
        cost: "$85k / Hora",
        description: "Suspendisse euismod urna ut lectus tincidunt, in dictum magna ultricies. Aliquam erat volutpat."
    },
    {
        title: "Periculum Conveyorii",
        cost: "$40k / Hora",
        description: "Nullam id lectus at massa dignissim venenatis. Pellentesque habitant morbi tristique senectus et netus."
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
                            <span className="font-sans text-xs text-brand-gold uppercase tracking-widest font-bold">Linea Industria: Metalla et Extractio</span>
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter mb-6 leading-[0.9]">
                            Tuta<br />
                            Via Necessaria.
                        </h1>
                        <p className="font-sans text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta nunc sed ipsum ultricies, id tincidunt arcu tristique.
                        </p>
                    </RevealSection>
                </div>
            </section>

            {/* High Cost of Silence */}
            <section className="py-24 bg-bg-contrast text-white">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <RevealSection>
                        <div className="mb-16 max-w-3xl">
                            <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-brand-red mb-4">Res Vera</h3>
                            <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight mb-6">
                                Sumptus Tacentis.
                            </h2>
                            <p className="font-sans text-lg text-gray-400 leading-relaxed">
                                Vestibulum vitae lectus eget nibh dapibus tincidunt. Integer egestas lorem vel lacus dictum, a iaculis risus consequat.
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
                                    <span className="font-sans text-xs text-brand-red uppercase tracking-widest font-bold">Documentum: Tractus Salsae</span>
                                    </div>
                                <h2 className="font-display font-black text-4xl md:text-6xl text-text-main uppercase tracking-tight mb-8">
                                    Servatum: $1.2M<br />
                                    Vitata: 48 Horae
                                </h2>
                                <p className="font-sans text-lg text-text-muted leading-relaxed mb-8 max-w-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus magna et risus faucibus, eget suscipit leo sagittis.
                                    Primac ordinavit substitutionem destinatum mutatione vigiliae, vitans discrimen quod productionem omnem intermisisset.
                                </p>
                                <button className="inline-flex items-center gap-3 font-display font-bold text-sm uppercase tracking-[0.2em] text-text-main hover:text-brand-gold transition-colors">
                                    Lege Causam Totam
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="bg-white p-8 shadow-lg">
                            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-text-muted mb-6">Data Diagnostica</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="font-sans text-xs text-gray-500 font-bold">BONUM</span>
                                        <span className="font-sans text-xs font-bold text-text-main">TRACTUS PRINCIPIS</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="font-sans text-xs text-gray-500 font-bold">VITIUM</span>
                                        <span className="font-sans text-xs font-bold text-brand-red">DEFECTUS INTERIOR (BPFI)</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="font-sans text-xs text-gray-500 font-bold">GRAVITAS</span>
                                        <span className="font-sans text-xs font-bold text-brand-red">CRITICA (ISO ZONA D)</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="font-sans text-xs text-gray-500 font-bold">EXITUS</span>
                                        <span className="font-sans text-xs font-bold text-green-600">SUBSTITUTIO PRAEVISA</span>
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
