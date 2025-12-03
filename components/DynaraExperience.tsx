'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RevealSection } from "./RevealSection";

const trustSignals = [
  {
    stat: "30+ Years",
    detail: "Reliability engineering experience across critical industries.",
  },
  {
    stat: "Zero LTI",
    detail: "Impeccable lost-time injury record on all field deployments.",
  },
  {
    stat: "Nationwide",
    detail: "Serving industrial clients across Canada with rapid mobilization.",
  },
];

const services = [
  {
    title: "Condition Monitoring & Vibration Analysis",
    body:
      "Full-service, turn-key programs tailored to your plant. We design routes, collect data on schedule, and deliver insights that catch defects early.",
    icon: "//",
  },
  {
    title: "Troubleshooting & Advanced Diagnostics",
    body:
      "When assets misbehave, we respond with ODS/Modal analysis, Motion Amplification, and multi-channel testing to pinpoint root causes fast.",
    icon: "∆∆",
  },
  {
    title: "Products & Systems Integration",
    body:
      "We supply leading vibration hardware and software, then design and commission online monitoring systems tied directly into your DCS/PLC.",
    icon: "//≡",
  },
  {
    title: "Training & Mentoring",
    body:
      "CMVA certification courses and on-site mentoring that build confidence in balancing, alignment, and diagnostics for your team.",
    icon: "✓✓",
  },
];

const advantages = [
  {
    title: "Deep Technical Expertise",
    detail:
      "Three decades of field-proven knowledge solving the toughest rotating machinery challenges.",
  },
  {
    title: "Technology-Driven",
    detail:
      "Advanced diagnostics including torsional vibration analysis and Motion Amplification to reveal what standard tools miss.",
  },
  {
    title: "Safety-First Culture",
    detail:
      "A rigorous HSE program and an uncompromised safety record on every site visit.",
  },
];

const fadeSlide = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
};

export const DynaraExperience = () => {
  return (
    <main className="bg-white text-text-main">
      <section className="relative overflow-hidden bg-black">
        <div className="relative h-[80vh] md:h-screen">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
            alt="Technician monitoring a turbine"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/50" />
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "140px 100%" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "100% 140px" }} />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12">
              <motion.div
                initial={fadeSlide.initial}
                animate={fadeSlide.animate}
                transition={fadeSlide.transition}
                className="max-w-3xl bg-white/5 backdrop-blur-sm border border-white/15 p-10 md:p-14"
              >
                <p className="font-display text-xs tracking-[0.3em] uppercase text-brand-accent mb-4">Primac Reliability</p>
                <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white mb-6">
                  Maximize Asset Availability. Eliminate Unplanned Downtime.
                </h1>
                <p className="font-sans text-lg text-white/85 leading-relaxed max-w-2xl">
                  Primac delivers integrated vibration and condition monitoring solutions for critical rotating machinery. We help your team prevent in-service failures, reduce maintenance costs, and increase profitability across your operation.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <Link
                    href="#consultation"
                    className="bg-white text-text-main px-8 py-4 font-display text-xs uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-white transition-colors"
                  >
                    Talk to a Condition Monitoring Specialist
                  </Link>
                  <Link
                    href="/services"
                    className="font-display text-xs uppercase tracking-[0.2em] text-white hover:text-brand-accent transition-colors"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <RevealSection width="constrained" className="-mt-14 md:-mt-24">
          <div className="grid gap-6 md:grid-cols-3">
            {trustSignals.map((signal) => (
              <motion.div
                key={signal.stat}
                initial={fadeSlide.initial}
                whileInView={fadeSlide.animate}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ ...fadeSlide.transition, duration: 0.85 }}
                className="bg-white border border-black/10 p-8"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="font-display text-xs uppercase tracking-[0.2em] text-text-muted">Trusted Proof</p>
                  <div className="h-10 w-[2px] bg-brand-accent" />
                </div>
                <p className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-text-main">{signal.stat}</p>
                <p className="font-sans text-base text-text-muted leading-relaxed mt-3">{signal.detail}</p>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </section>

      <section className="py-24 md:py-32 bg-bg-panel border-t border-black/5">
        <RevealSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">Challenge & Solution</p>
              <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight text-text-main mb-6">
                Stop Reacting to Failures. Start Predicting Them.
              </h2>
              <p className="font-sans text-lg text-text-muted leading-relaxed space-y-4">
                Reliability isn&apos;t just about fixing things fast—it’s about knowing when they need attention. Reactive maintenance leads to costly emergency repairs and lost production.
              </p>
              <p className="font-sans text-lg text-text-muted leading-relaxed mt-4">
                At Primac Reliability, we don’t just collect data; we provide answers. Our integrated condition-based maintenance programs deliver actionable insights so you can plan interventions cost-effectively and keep critical rotating machinery at peak performance.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative border border-black/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
              <Image
                src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=2070&auto=format&fit=crop"
                alt="Spectral analysis display"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 text-text-main px-6 py-4 border border-black/10">
                <p className="font-display text-xs uppercase tracking-[0.2em] text-brand-accent">Condition Intelligence</p>
                <p className="font-display text-lg font-black uppercase tracking-tight">Motion Amplification Ready</p>
              </div>
            </motion.div>
          </div>
        </RevealSection>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <RevealSection>
          <div className="flex items-start justify-between gap-8 mb-12">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Core Services</p>
              <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight text-text-main">Precision Delivered</h2>
            </div>
            <div className="hidden md:block w-40 h-[1px] bg-gradient-to-r from-text-main to-transparent mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={fadeSlide.initial}
                whileInView={fadeSlide.animate}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ ...fadeSlide.transition, delay: index * 0.05 }}
                className="border border-black/10 p-8 bg-bg-panel"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="font-display text-xs uppercase tracking-[0.2em] text-text-muted">{service.icon}</p>
                  <span className="font-display text-xs uppercase tracking-[0.2em] text-brand-accent">{`0${index + 1}`}</span>
                </div>
                <h3 className="font-display text-2xl font-black uppercase tracking-tight text-text-main mb-3">{service.title}</h3>
                <p className="font-sans text-base text-text-muted leading-relaxed">{service.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/services"
              className="bg-text-main text-white px-10 py-4 font-display text-xs uppercase tracking-[0.2em] hover:bg-brand-accent transition-colors"
            >
              View All Technical Capabilities
            </Link>
          </div>
        </RevealSection>
      </section>

      <section className="py-24 md:py-32 bg-bg-panel border-t border-black/5">
        <RevealSection>
          <div className="max-w-4xl">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">The Primac Advantage</p>
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight text-text-main mb-6">Why Partner with Primac?</h2>
            <p className="font-sans text-lg text-text-muted leading-relaxed mb-10">
              We act as an extension of your maintenance and reliability team, working alongside you to meet your production targets.
            </p>
          </div>

          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={fadeSlide.initial}
                whileInView={fadeSlide.animate}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ ...fadeSlide.transition, delay: index * 0.05 }}
                className="flex items-start gap-4 border border-black/10 bg-white p-8"
              >
                <span className="font-display text-sm uppercase tracking-[0.2em] text-brand-accent">✔</span>
                <div>
                  <p className="font-display text-xl font-black uppercase tracking-tight text-text-main">{advantage.title}</p>
                  <p className="font-sans text-base text-text-muted leading-relaxed mt-2">{advantage.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </section>

      <section id="consultation" className="py-24 md:py-32 bg-text-main text-white">
        <RevealSection width="constrained">
          <div className="text-center max-w-4xl mx-auto">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">Ready to Engage</p>
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight mb-4">Ready to Improve Your Plant’s Reliability?</h2>
            <p className="font-sans text-lg text-white/80 leading-relaxed mb-10">
              Whether you need a full condition monitoring program, a one-off troubleshooting visit, or a review of your current vibration database, Primac is here to help.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="bg-white text-text-main px-10 py-4 font-display text-xs uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-white transition-colors"
              >
                Request a Consultation
              </Link>
              <p className="font-sans text-base text-white/80">
                Call us at <span className="font-semibold text-white">1-800-555-0199</span> | Email: <span className="font-semibold text-white">consult@primacreliability.com</span>
              </p>
            </div>
          </div>
        </RevealSection>
      </section>

      <footer className="bg-black text-white py-16 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-lg font-black uppercase tracking-tight">Primac Reliability Consultants Ltd.</p>
            <p className="font-sans text-sm text-white/70 mt-3">Headquartered in Western Canada, serving clients nationwide.</p>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <nav className="flex flex-wrap gap-4 text-sm font-display uppercase tracking-[0.1em]">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Products", href: "/services/vibration-analysis" },
                { label: "Training", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-brand-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="font-sans text-xs text-white/60">© 2024 Primac Reliability Consultants Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};
