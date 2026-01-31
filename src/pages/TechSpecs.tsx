import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';

const specs = [
  {
    id: 1,
    title: 'PRE-LITHIUM EXTRACTION TECHNOLOGY',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    headline: 'In-situ crystal transformation achieves 90-98% Li recovery with over 98% selectivity.',
    description: 'Mild leaching of black mass targets lithium selectively before downstream processing. Produces high-purity lithium solution (over 20 g/L concentration). Almost no loss of Ni and Co. No wastewater or solid waste generated—true zero liquid discharge.',
    metrics: [
      { label: 'Li Recovery', value: '90-98%' },
      { label: 'Li Selectivity', value: '>98%' },
      { label: 'Wastewater', value: 'ZERO' },
    ],
  },
  {
    id: 2,
    title: 'NON-DISCHARGE SHREDDING',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    headline: 'Direct processing of charged cells eliminates the 24-72 hour discharge bottleneck.',
    description: 'Inert-atmosphere chamber maintains O₂ below 1% via continuous N₂ injection. Real-time gas chromatography monitors H₂, CO, and electrolyte vapor concentrations. Automated CO₂ fire suppression activates in under 200ms upon thermal runaway detection. No pre-discharge required—charged cells processed safely.',
    metrics: [
      { label: 'O₂ Level', value: '<1%' },
      { label: 'Response Time', value: '<200ms' },
      { label: 'Discharge Wait', value: 'ZERO' },
    ],
  },
  {
    id: 3,
    title: 'CRYOGENIC GRANULATION',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    headline: 'Ultra-low temperature (-40°C) milling preserves cathode crystal structure integrity.',
    description: 'Liquid nitrogen-cooled hammer mill prevents thermal degradation and electrolyte evaporation during size reduction. Cold processing maintains oxidation state of active materials—critical for direct recycling pathways. Output particle size: D50=2.3mm, D90=5.8mm at 2,500 kg/hr throughput.',
    metrics: [
      { label: 'Temperature', value: '-40°C' },
      { label: 'Throughput', value: '2.5 T/hr' },
      { label: 'D50 Size', value: '2.3mm' },
    ],
  },
  {
    id: 4,
    title: 'CLOSED-LOOP HYDROMETALLURGY',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    headline: 'Organic acid leaching with 90% lower acid consumption vs. traditional sulfuric processes.',
    description: 'Selective solvent extraction cascade separates Ni, Co, Mn with 99.9% selectivity. Produces cathode-grade metal sulfates: NiSO₄ (22.3% Ni), CoSO₄ (21.0% Co), MnSO₄ (32.0% Mn). Zero liquid discharge system recycles 98% of process water—no wastewater permits required.',
    metrics: [
      { label: 'Selectivity', value: '99.9%' },
      { label: 'Water Recycled', value: '98%' },
      { label: 'Liquid Discharge', value: 'ZERO' },
    ],
  },
];

const additionalSpecs = [
  { label: 'XRF Chemistry ID', value: '99.2%', description: 'NMC/LFP/NCA cell identification accuracy' },
  { label: 'Black Mass NMC', value: '>65%', description: 'Active material content in final product' },
  { label: 'Graphite Purity', value: '>98%', description: 'Recovered anode material carbon content' },
  { label: 'Electrode Liberation', value: '450°C', description: 'NMP-free thermal delamination' },
  { label: 'Metal Separation', value: '>99%', description: 'Al/Cu foil recovery purity' },
  { label: 'Froth Flotation', value: '98%', description: 'Graphite-cathode separation efficiency' },
  { label: 'Particle Size D50', value: '8-12μm', description: 'Final black mass specification' },
  { label: 'Process Water', value: '98%', description: 'Closed-loop recycling rate' },
];

export default function TechSpecs() {
  return (
    <>
      <PageHeader
        section="TECHNOLOGY"
        title="PRECISION CHEMISTRY &"
        highlight="INDUSTRIAL AUTOMATION"
        description="Laboratory-grade precision at industrial scale. The technology that transforms us from a recycling facility into a critical materials refinery."
      />

      {/* TRL Status Banner */}
      <section className="py-8 bg-gradient-to-r from-emerald-950/30 via-slate-950 to-cyan-950/30 border-y border-neon/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Li-ion - Commercial Ready */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 border border-neon/30 bg-neon/5"
            >
              <div className="text-center">
                <div className="font-mono text-3xl text-neon font-bold">TRL 9</div>
                <div className="font-mono text-[10px] text-slate-500">COMMERCIAL</div>
              </div>
              <div className="flex-1">
                <div className="font-mono text-sm text-neon mb-1">LITHIUM-ION RECYCLING</div>
                <p className="text-slate-400 text-xs">
                  Proven hydrometallurgical process ready for commercial-scale deployment. 
                  Based on validated pilot data with 95%+ recovery rates.
                </p>
              </div>
              <div className="w-2 h-16 bg-gradient-to-t from-neon/20 to-neon rounded-full" />
            </motion.div>

            {/* Na-ion - R&D Phase */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 border border-cyan-400/30 bg-cyan-400/5"
            >
              <div className="text-center">
                <div className="font-mono text-3xl text-cyan-400 font-bold">TRL 4-6</div>
                <div className="font-mono text-[10px] text-slate-500">R&D PHASE</div>
              </div>
              <div className="flex-1">
                <div className="font-mono text-sm text-cyan-400 mb-1">SODIUM-ION MANUFACTURING</div>
                <p className="text-slate-400 text-xs">
                  Advanced development and pilot production. Technology validation in progress 
                  with path to commercial scale by 2028.
                </p>
              </div>
              <div className="w-2 h-16 bg-gradient-to-t from-cyan-400/20 via-cyan-400/50 to-cyan-400/20 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Technical Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// CORE CAPABILITIES</div>
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
              TECHNICAL <span className="text-neon">DIFFERENTIATION</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              What separates Z1 from conventional recyclers: atom-level chemistry control and AI-driven automation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative border border-slate-700 hover:border-neon/50 p-8 transition-all duration-500"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="text-neon mb-6 group-hover:drop-shadow-[0_0_20px_rgba(0,255,136,0.5)] transition-all">
                    {spec.icon}
                  </div>

                  {/* Title */}
                  <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">SPEC_{spec.id.toString().padStart(2, '0')}</div>
                  <h3 className="font-mono text-xl text-white mb-4">{spec.title}</h3>

                  {/* Headline */}
                  <p className="text-neon font-mono text-sm mb-4" dangerouslySetInnerHTML={{ __html: spec.headline }} />

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-6">{spec.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                    {spec.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="font-mono text-lg text-neon">{metric.value}</div>
                        <div className="font-mono text-[10px] text-slate-500 uppercase">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Specifications */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-emerald-950/10 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// ADDITIONAL SPECS</div>
            <h2 className="font-mono text-2xl md:text-3xl font-bold">
              ENVIRONMENTAL <span className="text-neon">CONTROLS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSpecs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-neon/20 p-6 text-center hover:border-neon/50 transition-colors"
              >
                <div className="font-mono text-3xl text-transparent bg-clip-text bg-gradient-to-r from-neon to-cyan-400 mb-2">
                  {spec.value}
                </div>
                <div className="font-mono text-sm text-white mb-2">{spec.label}</div>
                <div className="text-slate-500 text-xs">{spec.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry 5.0: Human-Robot Collaboration */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// NEXT-GEN AUTOMATION</div>
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
              INDUSTRY 5.0: <span className="text-neon">HUMAN-ROBOT COLLABORATION</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <p className="text-slate-300 text-lg mb-6">
                Our facility integrates collaborative robots (cobots) that work alongside human experts for high-precision tasks including battery cell placement, electrode alignment, and real-time quality inspection.
              </p>
              <p className="text-slate-400 mb-8">
                This human-machine partnership represents the next evolution in manufacturing—combining the adaptability and decision-making of skilled technicians with the repeatability and precision of robotic systems.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="border border-neon/30 p-4 text-center">
                  <div className="font-mono text-2xl text-neon mb-1">+40%</div>
                  <div className="font-mono text-xs text-slate-500">THROUGHPUT</div>
                </div>
                <div className="border border-cyan-500/30 p-4 text-center">
                  <div className="font-mono text-2xl text-cyan-400 mb-1">ZERO</div>
                  <div className="font-mono text-xs text-slate-500">INJURIES</div>
                </div>
                <div className="border border-neon/30 p-4 text-center">
                  <div className="font-mono text-2xl text-neon mb-1">&lt;2hr</div>
                  <div className="font-mono text-xs text-slate-500">REPROGRAM</div>
                </div>
              </div>

              <p className="text-slate-500 text-sm mt-6">
                Rapid reprogramming capability allows seamless transitions between Li-ion and Na-ion cell chemistries without production downtime.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon/20 to-cyan-500/20 blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                <video
                  src="/images/cobot-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  className="relative w-full border border-slate-700 pointer-events-none"
                  onLoadedData={(e) => {
                    const video = e.currentTarget;
                    video.muted = true;
                    video.volume = 0;
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent p-4">
                  <div className="font-mono text-xs text-cyan-400">COBOT_CELL_ASSEMBLY_01</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}
