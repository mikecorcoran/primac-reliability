import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { GuardianDoctrine } from "@/components/GuardianDoctrine";
import { ServicePathway } from "@/components/ServicePathway";
import { TechSpotlight } from "@/components/TechSpotlight";
import { ProductSlider } from "@/components/ProductSlider";
import { TechSpecs } from "@/components/TechSpecs";
import { RevealSection } from "@/components/RevealSection";
import { Button } from "@/components/Button";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <TrustBar />

      <GuardianDoctrine />

      <ServicePathway />

      <TechSpotlight />

      <section id="products">
        <RevealSection width="full" delay={0.1}>
          <ProductSlider />
        </RevealSection>
      </section>

      <section id="reliability">
        <TechSpecs />
      </section>

      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=2000"
            className="object-cover contrast-125"
            alt="Processus Industrialis"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <RevealSection>
            <div className="text-center bg-white/10 backdrop-blur-sm p-12 border border-white/20">
              <h2 className="font-display font-black text-6xl md:text-8xl text-white uppercase tracking-tighter mb-8">
                Inconcussus
              </h2>
              <Button variant="solid" className="bg-white text-text-main hover:bg-brand-gold hover:text-white border-none">
                Vide Certificationes
              </Button>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  );
}
