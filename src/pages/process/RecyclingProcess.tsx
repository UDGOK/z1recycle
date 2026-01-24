import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import AnimatedCounter from '../../components/ui/AnimatedCounter';

const processSteps = [
  {
    step: 1,
    name: 'Battery Collection',
    description: 'Batteries arrive at the facility in approved containers. Each batch is logged, photographed, and assessed for damage or thermal events.',
    details: 'Incoming batteries are sorted by chemistry (NMC, LFP, NCA) and state of charge. Damaged or swollen cells are isolated for special handling.',
    icon: 'B',
  },
  {
    step: 2,
    name: 'Safe Discharge',
    description: 'Batteries are discharged to safe voltage levels using resistive discharge or brine immersion systems.',
    details: 'Target voltage is below 1V per cell. Hydrogen gas from brine discharge is captured and vented safely. Process takes 24-72 hours depending on pack size.',
    icon: 'D',
  },
  {
    step: 3,
    name: 'Primary Shredding',
    description: 'Discharged batteries enter the dual-shaft shredder under nitrogen atmosphere to prevent thermal events.',
    details: 'Output size is 4-6 inches. Continuous hydrogen and temperature monitoring. Automatic nitrogen injection maintains inert atmosphere.',
    icon: 'S',
  },
  {
    step: 4,
    name: 'Secondary Granulation',
    description: 'Hammer mill reduces material to less than 10mm for efficient separation.',
    details: 'Enclosed system with dust collection. Material exits through screen sizing. Oversized material returns for additional processing.',
    icon: 'G',
  },
  {
    step: 5,
    name: 'Air Classification',
    description: 'AI-optimized zig-zag classifier with computer vision separates materials by composition.',
    details: 'Sensor-based sorting with real-time material composition analysis. Light fraction to recycler, heavy to magnetic separation. AI achieves 98%+ yield.',
    icon: 'A',
  },
  {
    step: 6,
    name: 'Magnetic Separation',
    description: 'Drum magnets extract ferrous metals including steel casings and nickel tabs.',
    details: 'Recovered steel is sold as scrap. Nickel-rich fraction may be further processed. Non-magnetic material continues downstream.',
    icon: 'M',
  },
  {
    step: 7,
    name: 'Eddy Current Separation',
    description: 'Non-ferrous metals (aluminum, copper) are ejected by induced magnetic fields.',
    details: 'Aluminum from casings and copper from current collectors are recovered separately. Both are valuable recyclable commodities.',
    icon: 'E',
  },
  {
    step: 8,
    name: 'Black Mass Recovery',
    description: 'Cathode-grade electrode powder recovered via selective hydrometallurgical processing.',
    details: 'Targeted extraction of Li, Co, Ni, Mn via closed-loop hydrometallurgy achieves >98% purity—ready for direct cathode precursor resynthesis.',
    icon: 'R',
  },
];

const recoveryStats = [
  { material: 'Copper', rate: 97, color: '#ff7b00' },
  { material: 'Aluminum', rate: 95, color: '#c0c0c0' },
  { material: 'Steel', rate: 95, color: '#6b7280' },
  { material: 'Black Mass', rate: 98, color: '#1f2937' },
];

export default function RecyclingProcess() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <>
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
              { material: 'Copper', destination: 'Metal Smelters', purity: '97%+', icon: 'Cu' },
              { material: 'Aluminum', destination: 'Recyclers', purity: '95%+', icon: 'Al' },
              { material: 'Steel', destination: 'Scrap Market', purity: '95%+', icon: 'Fe' },
              { material: 'Black Mass', destination: 'Cathode Precursor', purity: '>98% Purity', icon: 'BM' },
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
