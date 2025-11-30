import React from 'react';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { GuardianDoctrine } from '../components/GuardianDoctrine';
import { ServicePathway } from '../components/ServicePathway';
import { TechSpotlight } from '../components/TechSpotlight';
import { ProductSlider } from '../components/ProductSlider';
import { TechSpecs } from '../components/TechSpecs';
import { RevealSection } from '../components/RevealSection';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
    return (
        <main>
            <Hero />

            <TrustBar />

            <GuardianDoctrine />

            <ServicePathway />

            <TechSpotlight />

            {/* Product Carousel Section */}
            <section id="products">
                <RevealSection width="full" delay={0.1}>
                    <ProductSlider />
                </RevealSection>
            </section>

            {/* Tech Specs */}
            <section id="reliability">
                <TechSpecs />
            </section>

            {/* Large Image Break */}
            <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover contrast-125"
                        alt="Industrial Process"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <RevealSection>
                        <div className="text-center bg-white/10 backdrop-blur-sm p-12 border border-white/20">
                            <h2 className="font-display font-black text-6xl md:text-8xl text-white uppercase tracking-tighter mb-8">
                                Uncompromised
                            </h2>
                            <Button variant="solid" className="bg-white text-text-main hover:bg-brand-gold hover:text-white border-none">
                                View Certifications
                            </Button>
                        </div>
                    </RevealSection>
                </div>
            </section>

        </main>
    );
};
