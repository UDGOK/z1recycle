import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import AnimatedCounter from '../../components/ui/AnimatedCounter';
import SEO from '../../components/SEO';

const processSteps = [
  {
    step: 1,
    name: 'Intelligent Intake & Sorting',
    description: 'Advanced robotic intake system with AI-powered chemistry identification and automated risk assessment.',
    details: 'X-ray fluorescence (XRF) and machine vision identify cell chemistry (NMC, LFP, NCA, LCO) with 99.2% accuracy. Thermal imaging detects compromised cells. Automated conveyor routing sorts by chemistry type and hazard level—no manual handling of high-risk units.',
    icon: '01',
  },
  {
    step: 2,
    name: 'Non-Discharge Shredding',
    description: 'Revolutionary direct-feed shredding eliminates the 24-72 hour discharge bottleneck while maintaining safety.',
    details: 'Proprietary inert-atmosphere chamber maintains O₂ below 1% using continuous nitrogen injection. Real-time gas chromatography monitors H₂, CO, and electrolyte vapor. Automated fire suppression with CO₂ flooding activates in <200ms if thermal runaway is detected. Processes charged cells safely—no pre-discharge required.',
    icon: '02',
  },
  {
    step: 3,
    name: 'Cryogenic Granulation',
    description: 'Ultra-low temperature milling (-40°C) prevents thermal events and preserves cathode material integrity.',
    details: 'Liquid nitrogen-cooled hammer mill reduces material to <6mm with zero thermal degradation. Cold processing prevents electrolyte evaporation and oxidation of active materials. Output particle size distribution: D50 = 2.3mm, D90 = 5.8mm. Throughput: 2,500 kg/hour per line.',
    icon: '03',
  },
  {
    step: 4,
    name: 'Pre-Lithium Extraction',
    description: 'Patented aqueous process recovers lithium carbonate before downstream processing—unique to our technology.',
    details: 'In-situ crystal transformation and mild leaching of black mass targets lithium selectively. Achieves 90-98% Li recovery with >98% selectivity. Produces high-purity lithium solution (>20 g/L concentration). Almost no loss of Ni and Co during this stage. No wastewater or solid waste generated.',
    icon: '04',
  },
  {
    step: 5,
    name: 'Multi-Stage Separation',
    description: 'Cascading physical separation using air classification, magnetic drums, and eddy current technology.',
    details: 'Stage 1: Zig-zag air classifier separates separator film and plastics (>99% capture). Stage 2: Rare-earth magnetic drums extract steel casings and Ni tabs. Stage 3: High-frequency eddy current separators recover Al foil and Cu current collectors. Combined metal purity exceeds 97%.',
    icon: '05',
  },
  {
    step: 6,
    name: 'Electrode Liberation',
    description: 'Proprietary thermal delamination separates active material from foil substrates without chemical degradation.',
    details: 'Controlled pyrolysis at 450°C under N₂ atmosphere volatilizes binder (PVDF) without oxidizing cathode material. Al and Cu foils recovered at >99% purity. Liberated electrode powder maintains original crystal structure—critical for direct recycling applications. NMP-free process eliminates toxic solvent handling.',
    icon: '06',
  },
  {
    step: 7,
    name: 'Black Mass Refining',
    description: 'High-purity black mass production through advanced flotation and selective calcination.',
    details: 'Following electrode liberation, material undergoes fine ball milling to reduce particle size from mm-scale to D50 = 8-12μm—optimal for downstream processing. Froth flotation separates graphite anode (>98% C purity) from cathode material. Selective calcination removes residual carbon and organics. Final black mass composition: 18-22% Ni, 4-8% Co, 8-12% Mn, 6-8% Li (chemistry dependent). Ready for hydrometallurgical refining or direct cathode resynthesis.',
    icon: '07',
  },
  {
    step: 8,
    name: 'Hydrometallurgical Recovery',
    description: 'Closed-loop solvent extraction produces battery-grade metal sulfates and lithium carbonate.',
    details: 'Selective leaching with organic acids such as citric acid and oxalic acid (90% lower acid consumption vs. sulfuric). Solvent extraction cascade separates Ni, Co, Mn with 99.9% selectivity. Produces NiSO₄ (22.3% Ni), CoSO₄ (21.0% Co), MnSO₄ (32.0% Mn)—all meeting cathode precursor specs. Zero liquid discharge system recycles 98% of process water.',
    icon: '08',
  },
];

const recoveryStats = [
  { material: 'Lithium', rate: 98, color: '#00ff88' },
  { material: 'Nickel', rate: 98, color: '#3b82f6' },
  { material: 'Cobalt', rate: 99, color: '#8b5cf6' },
  { material: 'Copper', rate: 99, color: '#ff7b00' },
];

export default function RecyclingProcess() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Recycling Process - 8-Step Battery Recycling"
        description="Complete lithium-ion battery recycling process: intelligent sorting, non-discharge shredding, cryogenic granulation, pre-lithium extraction, and hydrometallurgical recovery. 98% metal recovery."
        keywords="battery recycling process, lithium extraction, black mass refining, hydrometallurgical recovery, non-discharge shredding"
        canonical="/process/recycling"
      />
      <PageHeader
        section="PROCESS // RECYCLING"
        title="DOMESTIC MATERIALS"
        highlight="PROCESSING"
        description="Domestic critical materials processing infrastructure for complete lithium-ion battery recycling."
        image="/recycling-area.webp"
      />

      {/* Process Video Showcase */}
      <section className="py-16 bg-slate-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// SYSTEM OVERVIEW</div>
            <h2 className="font-mono text-2xl md:text-3xl font-bold">
              CIRCULAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-cyan-400">ECONOMY</span> IN ACTION
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden border border-neon/30 shadow-[0_0_40px_rgba(0,255,136,0.15)]"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* FEOC Compliance Banner */}
      <section className="py-6 bg-gradient-to-r from-emerald-950/40 via-slate-950 to-emerald-950/40 border-y border-neon/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 border border-neon/50 bg-neon/10 flex items-center justify-center">
              <div className="w-3 h-3 bg-neon rounded-full shadow-[0_0_10px_#00ff88] animate-pulse" />
            </div>
            <div>
              <div className="font-mono text-sm text-neon mb-1">DESIGNED TO SUPPORT IRA SECTION 30D</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our feedstock sourcing and chain-of-custody protocols are designed to help customers meet 
                Section 30D FEOC restrictions, with full traceability ensuring no material leakage to or from Foreign Entities of Concern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Stats */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recoveryStats.map((stat, index) => (
              <motion.div
                key={stat.material}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border border-neon/20"
              >
                <div className="font-mono text-3xl text-neon">
                  <AnimatedCounter end={stat.rate} suffix="%" />
                </div>
                <div className="font-mono text-xs text-muted mt-1">{stat.material} Recovery</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              STEP-BY-STEP <span className="text-neon">PROCESS</span>
            </h2>
            <p className="text-muted">Click each step to learn more about the process.</p>
          </motion.div>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-neon/20 hover:border-neon/50 transition-colors"
              >
                <button
                  onClick={() => setExpandedStep(expandedStep === step.step ? null : step.step)}
                  className="w-full p-6 flex items-center gap-6 text-left"
                  data-hover
                >
                  <div className="w-14 h-14 rounded-full border-2 border-neon flex items-center justify-center font-mono text-xl text-neon shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-muted">STEP {step.step}</span>
                    </div>
                    <div className="font-mono text-lg text-white">{step.name}</div>
                    <div className="text-muted text-sm mt-1">{step.description}</div>
                  </div>
                  <motion.span
                    animate={{ rotate: expandedStep === step.step ? 45 : 0 }}
                    className="text-2xl text-neon"
                  >
                    +
                  </motion.span>
                </button>

                {expandedStep === step.step && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 border-t border-neon/20"
                  >
                    <div className="pt-4 pl-20 text-muted">
                      {step.details}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Flow Visualization */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              MATERIAL <span className="text-neon">RECOVERY</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { material: 'Li₂CO₃', destination: 'Cathode Manufacturing', purity: '99.5% Battery Grade', icon: 'Li' },
              { material: 'NiSO₄', destination: 'pCAM Production', purity: '22.3% Ni Content', icon: 'Ni' },
              { material: 'CoSO₄', destination: 'pCAM Production', purity: '21.0% Co Content', icon: 'Co' },
              { material: 'Black Mass', destination: 'Direct Recycling', purity: '>65% NMC Content', icon: 'BM' },
            ].map((item, index) => (
              <motion.div
                key={item.material}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-neon/30 p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-neon/10 border border-neon flex items-center justify-center font-mono text-xl text-neon mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="font-mono text-white mb-1">{item.material}</div>
                <div className="text-muted text-sm">{item.destination}</div>
                <div className="font-mono text-xs text-neon mt-2">{item.purity}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link
            to="/process/equipment"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neon text-neon font-mono font-bold hover:bg-neon hover:text-slate-950 transition-all"
            data-hover
          >
            VIEW EQUIPMENT GUIDE
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
