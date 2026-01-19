import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';

const specs = [
  {
    id: 1,
    title: 'HYDROMETALLURGICAL EXCELLENCE',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    headline: 'Selective recovery of critical minerals to Cathode Grade purity (&gt;99.5%).',
    description: 'Our closed-loop hydrometallurgical process enables targeted extraction of lithium, cobalt, nickel, and manganese with exceptional purity levels suitable for direct cathode precursor resynthesis.',
    metrics: [
      { label: 'Purity Level', value: '>99.5%' },
      { label: 'Recovery Rate', value: '98%+' },
      { label: 'Process Type', value: 'Closed-Loop' },
    ],
  },
  {
    id: 2,
    title: 'CROSS-CONTAMINATION CONTROL',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    headline: 'Isolated air handling and material transfer for concurrent Li-ion and Na-ion processing.',
    description: 'Dedicated material streams with physically separated HVAC systems ensure zero cross-contamination between lithium-ion recycling operations and sodium-ion manufacturing protocols.',
    metrics: [
      { label: 'Material Streams', value: 'Isolated' },
      { label: 'Air Systems', value: 'Dedicated' },
      { label: 'Contamination', value: 'Zero' },
    ],
  },
  {
    id: 3,
    title: 'AI-OPTIMIZED SORTING',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    headline: 'Computer vision and sensor-based sorting for maximum material yield.',
    description: 'Industry 4.0 smart manufacturing with AI-driven quality control, real-time material composition analysis, and predictive maintenance systems optimize every stage of the recycling process.',
    metrics: [
      { label: 'Sorting Accuracy', value: '98%+' },
      { label: 'Analysis', value: 'Real-Time' },
      { label: 'Maintenance', value: 'Predictive' },
    ],
  },
  {
    id: 4,
    title: 'CARBON NEGATIVE POTENTIAL',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    headline: 'Lower lifecycle emissions than virgin mining.',
    description: 'Our recycling process emits 70% less CO2 than virgin mining and 30% less than traditional pyrometallurgy (smelting), justifying the energy-intensive ZLD system with net positive environmental impact.',
    metrics: [
      { label: 'vs Mining', value: '-70% CO2' },
      { label: 'vs Smelting', value: '-30% CO2' },
      { label: 'Discharge', value: 'Zero Liquid' },
    ],
  },
];

const additionalSpecs = [
  { label: 'Solvent Recovery Rate', value: '95%', description: 'Closed-loop NMP capture in manufacturing' },
  { label: 'HEPA Filtration', value: '99.97%', description: 'Particle capture efficiency' },
  { label: 'Dry Room Dew Point', value: '-40°C', description: 'Ultra-low humidity environment' },
  { label: 'Processing Atmosphere', value: 'N2 Inert', description: 'Nitrogen-blanketed shredding' },
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

      {/* Dr. Kim Quote */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-l-4 border-neon pl-8 py-4"
          >
            <p className="text-xl text-slate-300 italic mb-4">
              "Your site currently sells a factory. You need to sell a laboratory on an industrial scale. 
              The grants are not looking for a place where batteries are smashed; they are looking for 
              a place where the atom-level chemistry is controlled to secure the nation's future."
            </p>
            <div className="font-mono text-sm text-neon">— Technical Advisory Review</div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
