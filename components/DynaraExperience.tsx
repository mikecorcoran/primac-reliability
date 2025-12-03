'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RevealSection } from "./RevealSection";

const haloTransition = {
  duration: 24,
  repeat: Infinity,
  ease: "linear" as const,
};

const stats = [
  {
    label: "Signal Integrity",
    value: "99.997%",
    detail: "Adaptive monitoring windows recalibrated every 4 ms.",
  },
  {
    label: "Carbon Impact",
    value: "-18%",
    detail: "Micro-optimizations per thermal cycle documented in-chain.",
  },
  {
    label: "Latency",
    value: "24 ms",
    detail: "Edge orchestration pushing zero-loss telemetry to vaults.",
  },
];

const modules = [
  {
    title: "Auralis Vector Bed",
    description:
      "Layered acoustic signatures mapped against predictive vibration DNA for pre-emptive arrest.",
  },
  {
    title: "Helix Continuum",
    description:
      "Parallelized micro-sprints across redundant lanes keep mission flow immune to shock events.",
  },
  {
    title: "Spectra Trace Nodes",
    description:
      "Glass-fiber optics read micro-fractures in real time, translating stress into actionable cues.",
  },
];

const corridors = [
  {
    phase: "Phase I",
    title: "Immersion Mapping",
    copy:
      "Spatial scans, thermal deltas, and mechanical pulse behaviors coalesce into a living reliability portrait.",
  },
  {
    phase: "Phase II",
    title: "Live Orchestration",
    copy:
      "Precision playbooks deploy micro-adjustments—load balancing, torque damping, atmospheric tuning—mid-flight.",
  },
  {
    phase: "Phase III",
    title: "Proof of Silence",
    copy:
      "Our calm-state verification runs document frictionless cycles with surgical clarity and uncompromised traceability.",
  },
];

const streams = [
  {
    header: "Multi-axis Drift",
    signal: "0.03°",
    detail: "Captured across tri-sensor arrays with encrypted hash-locking per pulse.",
  },
  {
    header: "Thermal Riser",
    signal: "-2.1°C",
    detail: "Stabilized via on-demand coolant redistributions guided by green heuristics.",
  },
  {
    header: "Micro-particle Noise",
    signal: "< 0.4 µm",
    detail: "Ionized air curtains seal sensitive modules during rapid recalibration arcs.",
  },
];

export const DynaraExperience = () => {
  return (
    <main className="bg-bg-page text-text-main">
      <section className="relative">
        <div className="relative h-[82vh] md:h-screen overflow-hidden bg-white">
          <Image
            src="https://images.unsplash.com/photo-1503389152951-9f343605f61e?q=80&w=2070&auto=format&fit=crop"
            alt="Dynara Environment"
            fill
            priority
            className="object-cover contrast-125"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-white" />

          <motion.div
            className="absolute inset-[-30%] border border-black/10"
            animate={{ rotate: 360 }}
            transition={haloTransition}
          />
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "120px 100%" }} />
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "100% 120px" }} />
          </motion.div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 w-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl bg-white/80 backdrop-blur-sm p-10 md:p-14 border border-black/5"
              >
                <p className="font-display text-xs tracking-[0.3em] uppercase text-brand-accent mb-4">
                  Dynara Libretio
                </p>
                <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6 text-text-main">
                  Immersive Reliability Atlas 2026
                </h1>
                <p className="font-sans text-lg text-text-muted leading-relaxed max-w-2xl">
                  A full-body interface for precision, orchestrated with living data, cinematic motion, and the calm rigor of Primac reliability craftsmanship.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <Link
                    href="#modules"
                    className="bg-text-main text-white px-8 py-4 font-display text-xs uppercase tracking-[0.2em] hover:bg-brand-accent transition-colors"
                  >
                    Enter the Continuum
                  </Link>
                  <Link
                    href="#corridor"
                    className="border border-text-main text-text-main px-8 py-4 font-display text-xs uppercase tracking-[0.2em] hover:bg-text-main hover:text-white transition-colors"
                  >
                    View Rituals
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <RevealSection width="constrained" className="-mt-20 md:-mt-28">
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-black/10 p-8 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-xs uppercase tracking-[0.2em] text-text-muted">
                    {stat.label}
                  </p>
                  <div className="h-10 w-[2px] bg-brand-accent" />
                </div>
                <p className="font-display text-4xl md:text-5xl font-black uppercase text-text-main tracking-tight">
                  {stat.value}
                </p>
                <p className="font-sans text-base text-text-muted leading-relaxed">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </section>

      <section id="modules" className="py-24 md:py-32 bg-bg-panel border-t border-black/5">
        <RevealSection>
          <div className="flex items-start justify-between gap-8 mb-12">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Immersive Stack</p>
              <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight text-text-main">
                Continuum Modules
              </h2>
            </div>
            <div className="hidden md:block w-40 h-[1px] bg-gradient-to-r from-text-main to-transparent mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                className="bg-white p-10 border border-black/10 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-x-0 top-0 h-[2px] bg-brand-accent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="flex items-center justify-between mb-6">
                  <p className="font-display text-xs uppercase tracking-[0.2em] text-text-muted">Spectra Channel</p>
                  <span className="text-xs font-display uppercase tracking-[0.2em] text-brand-accent">{`0${index + 1}`}</span>
                </div>
                <h3 className="font-display text-2xl font-black uppercase tracking-tight mb-4 text-text-main">
                  {module.title}
                </h3>
                <p className="font-sans text-base text-text-muted leading-relaxed">
                  {module.description}
                </p>
                <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-text-main via-brand-accent to-transparent" />
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </section>

      <section id="corridor" className="py-24 md:py-32 bg-white">
        <RevealSection>
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Kinetic Ritual</p>
              <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight text-text-main mb-6">
                Corridor of Control
              </h2>
              <p className="font-sans text-lg text-text-muted leading-relaxed">
                Traverse the precision corridor where each threshold introduces a new layer of supervision—optical, acoustic, thermal— choreographed to keep the experience both cinematic and exact.
              </p>
              <div className="mt-10 flex gap-6 items-center">
                <div className="h-[2px] w-24 bg-brand-accent" />
                <span className="font-display text-xs uppercase tracking-[0.2em] text-text-main">Live-Orchestrated</span>
              </div>
            </div>

            <div className="md:col-span-3 space-y-6">
              {corridors.map((corridor, idx) => (
                <motion.div
                  key={corridor.phase}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: idx * 0.06 }}
                  className="border border-black/10 p-8 relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-brand-accent via-text-main to-transparent" />
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-display text-xs uppercase tracking-[0.2em] text-text-muted">{corridor.phase}</p>
                    <span className="font-display text-xs uppercase tracking-[0.2em] text-text-main">Equilibrium</span>
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight text-text-main mb-3">
                    {corridor.title}
                  </h3>
                  <p className="font-sans text-base text-text-muted leading-relaxed max-w-3xl">
                    {corridor.copy}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="py-24 md:py-32 bg-bg-panel border-t border-black/5">
        <RevealSection>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-12">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Live Data Theatre</p>
              <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight text-text-main">
                Signal Stream Tableau
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-[2px] bg-text-main" />
              <p className="font-sans text-sm text-text-muted max-w-sm">
                Readouts shimmer in real time while the system autocorrects, rebalances, and locks-in stability.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {streams.map((stream, index) => (
              <motion.div
                key={stream.header}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
                className="bg-white border border-black/10 p-10 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                />
                <div className="relative flex items-center justify-between mb-6">
                  <p className="font-display text-xs uppercase tracking-[0.2em] text-text-muted">{stream.header}</p>
                  <span className="font-display text-xs uppercase tracking-[0.2em] text-brand-accent">Pulse</span>
                </div>
                <p className="relative font-display text-5xl font-black uppercase tracking-tight text-text-main mb-4">
                  {stream.signal}
                </p>
                <p className="relative font-sans text-base text-text-muted leading-relaxed">
                  {stream.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <RevealSection width="constrained" className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-accent/10 to-transparent"
            animate={{ x: ["-10%", "10%", "-10%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Finale</p>
              <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight text-text-main mb-6">
                The Quiet Triumph
              </h2>
              <p className="font-sans text-lg text-text-muted leading-relaxed mb-8">
                Exit with proof—archival-grade reports, cinematic renders, and immutable signatures that certify every movement was intentional. The Primac ritual ends with a serene machine, a confident team, and a narrative you can present to any board on earth.
              </p>
              <div className="flex gap-6">
                <Link
                  href="#contact"
                  className="bg-text-main text-white px-8 py-4 font-display text-xs uppercase tracking-[0.2em] hover:bg-brand-accent transition-colors"
                >
                  Schedule the Run
                </Link>
                <Link
                  href="/trust-and-safety"
                  className="border border-text-main text-text-main px-8 py-4 font-display text-xs uppercase tracking-[0.2em] hover:bg-text-main hover:text-white transition-colors"
                >
                  Read the Covenant
                </Link>
              </div>
            </div>
            <div className="border border-black/10 p-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
              <Image
                src="https://images.unsplash.com/photo-1470093851219-69951fcbb533?q=80&w=2070&auto=format&fit=crop"
                alt="Precision finale"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
                priority
              />
              <motion.div
                className="absolute inset-4 border border-white/40"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute bottom-6 left-6 bg-white/90 text-text-main px-6 py-4 border border-black/10">
                <p className="font-display text-xs uppercase tracking-[0.2em] text-brand-accent">Certificatum</p>
                <p className="font-display text-lg font-black uppercase tracking-tight">Calm Verified</p>
              </div>
            </div>
          </div>
        </RevealSection>
      </section>
    </main>
  );
};
