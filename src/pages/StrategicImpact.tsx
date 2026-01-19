import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const pillars = [
  {
    title: 'SUPPLY CHAIN RESILIENCE',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stat: 95,
    statSuffix: '%',
    statLabel: 'Domestic Recovery Target',
    description: 'Reducing dependence on foreign critical mineral supply chains through advanced domestic recycling infrastructure.',
    points: [
      'Strategic material independence',
      'Reduced import vulnerability',
      'Secure domestic battery supply',
    ],
  },
  {
    title: 'ECONOMIC GROWTH',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    stat: 150,
    statSuffix: '+',
    statLabel: 'High-Skilled Careers Created',
    description: 'Driving regional economic development through advanced manufacturing jobs and industrial investment.',
    points: [
      'Advanced manufacturing careers',
      'Local workforce development',
      'Regional economic catalyst',
    ],
  },
  {
    title: 'TECHNOLOGY INNOVATION',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    stat: 3,
    statSuffix: '',
    statLabel: 'Bridging Lab to Market',
    description: 'Pioneering next-generation battery technologies with AI-driven quality control and commercial-scale manufacturing.',
    points: [
      'AI-optimized material sorting',
      'Real-time composition analysis',
      'Predictive maintenance systems',
    ],
  },
];

const impactMetrics = [
  { value: 10000, suffix: ' tons', label: 'Annual Processing Capacity' },
  { value: 60000, suffix: ' SF', label: 'Purpose-Built Facility' },
  { value: 99.5, suffix: '%+', label: 'Cathode Grade Purity' },
  { value: 0, suffix: '', label: 'Landfill Waste & Liquid Discharge', isZero: true },
];

export default function StrategicImpact() {
  return (
    <>
      <PageHeader
        section="STRATEGIC IMPACT"
        title="SECURING AMERICA'S"
        highlight="ENERGY FUTURE"
        description="Building critical infrastructure for domestic battery supply chain independence in Bryan County, Oklahoma."
      />

      {/* Impact Metrics Bar */}
      <section className="py-12 bg-gradient-to-r from-slate-900 via-emerald-950/20 to-slate-900 border-y border-neon/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-mono text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-neon to-cyan-400">
                  {metric.isZero ? (
                    <span>ZERO</span>
                  ) : (
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  )}
                </div>
                <div className="font-mono text-xs text-slate-400 mt-1">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// STRATEGIC PILLARS</div>
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
              THREE PILLARS OF <span className="text-neon">IMPACT</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative border border-slate-700 hover:border-neon/50 p-8 transition-all duration-500"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="text-neon mb-6 group-hover:drop-shadow-[0_0_15px_rgba(0,255,136,0.5)] transition-all">
                    {pillar.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-mono text-lg text-white mb-4">{pillar.title}</h3>

                  {/* Stat */}
                  <div className="mb-4">
                    <div className="font-mono text-4xl text-transparent bg-clip-text bg-gradient-to-r from-neon to-cyan-400">
                      <AnimatedCounter end={pillar.stat} suffix={pillar.statSuffix} />
                    </div>
                    <div className="font-mono text-xs text-cyan-400/70">{pillar.statLabel}</div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-6">{pillar.description}</p>

                  {/* Points */}
                  <ul className="space-y-2">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 bg-neon rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Vision */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-emerald-950/10 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-4">// OUR VISION</div>
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-6">
              DOMESTIC <span className="text-neon">MATERIALS INFRASTRUCTURE</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Z1 Recycling represents a new model for American critical materials infrastructure—combining 
              advanced recycling technology with next-generation battery R&D to create a complete domestic 
              supply chain solution. Our facility transforms end-of-life batteries into cathode-grade materials (&gt;99.5% purity) 
              ready for direct precursor resynthesis—emitting 70% less CO2 than virgin mining.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-sm text-neon">
              <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
              PROJECT START: JANUARY 21, 2026
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
