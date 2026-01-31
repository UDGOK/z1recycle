import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PageHeader from '../components/ui/PageHeader';
import SEO from '../components/SEO';

function AnimatedGauge({ value, label, color = '#00ff88' }: { value: number; label: string; color?: string }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCurrent(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (current / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="64" cy="64" r="45" fill="none" stroke="#1e293b" strokeWidth="8" />
          <motion.circle
            cx="64" cy="64" r="45"
            fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-2xl" style={{ color }}>{value}%</span>
        </div>
      </div>
      <div className="font-mono text-xs text-muted mt-2 text-center">{label}</div>
    </div>
  );
}

const checkmarks = [
  { text: 'No OPDES permit required', description: 'Zero discharge eliminates wastewater permit requirements' },
  { text: 'No municipal sewer discharge', description: 'All water is treated and reused on-site' },
  { text: 'Closing the materials loop', description: 'Recovered materials feed directly into domestic manufacturing' },
  { text: 'Supply chain resilience', description: 'Reduces dependence on imported critical minerals' },
  { text: 'Reduced carbon footprint', description: '90% lower emissions than primary mining' },
  { text: 'Local job creation', description: 'High-skilled careers in Bryan County' },
];

const zldSteps = [
  { step: 1, name: 'Collection', icon: 'C', description: 'Process wastewater from all operations collected' },
  { step: 2, name: 'Pretreatment', icon: 'P', description: 'pH adjustment and solid filtration' },
  { step: 3, name: 'MVR Evaporation', icon: 'E', description: 'Mechanical vapor recompression concentrates waste' },
  { step: 4, name: 'Distillate', icon: 'D', description: 'Clean water returned to process (95% recovery)' },
  { step: 5, name: 'Solids', icon: 'S', description: 'Concentrated sludge hauled for proper disposal' },
];

export default function Sustainability() {
  return (
    <>
      <SEO
        title="Sustainability - Environmental Commitment"
        description="Zero liquid discharge, 98% water recycling, carbon footprint reduction. Z1 Recycling's commitment to sustainable battery recycling and circular economy."
        keywords="sustainable battery recycling, zero liquid discharge, circular economy, environmental battery recycling, green recycling"
        canonical="/sustainability"
      />
      <PageHeader
        section="SUSTAINABILITY"
        title="ENVIRONMENTAL"
        highlight="STEWARDSHIP"
        description="Zero liquid discharge and circular material flow for complete domestic supply chain sustainability."
      />

      {/* Key Metrics */}
      <section className="py-16 bg-emerald-950/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12">
            <AnimatedGauge value={100} label="WATER RECOVERY" />
            <AnimatedGauge value={99} label="MATERIAL RECLAIM" />
            <AnimatedGauge value={90} label="CARBON REDUCTION" />
          </div>
        </div>
      </section>

      {/* ZLD System Explanation */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              HOW ZLD <span className="text-neon">WORKS</span>
            </h2>
            <p className="text-muted max-w-3xl">
              Our Zero Liquid Discharge system uses Mechanical Vapor Recompression (MVR) technology 
              to evaporate and recover all process water, eliminating wastewater discharge entirely.
            </p>
          </motion.div>

          {/* Animated Flow Diagram */}
          <div className="bg-slate-900/50 border border-neon/20 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {zldSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex-1 text-center relative"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-neon flex items-center justify-center font-mono text-xl text-neon mx-auto mb-3">
                    {step.icon}
                  </div>
                  <div className="font-mono text-sm text-white mb-1">{step.name}</div>
                  <div className="text-xs text-muted">{step.description}</div>
                  
                  {index < zldSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2">
                      <svg className="w-6 h-6 text-neon/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* MVR Detail */}
            <div className="mt-8 pt-8 border-t border-neon/20">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="font-mono text-2xl text-neon">500</div>
                  <div className="font-mono text-xs text-muted">GPD CAPACITY</div>
                </div>
                <div>
                  <div className="font-mono text-2xl text-neon">95%</div>
                  <div className="font-mono text-xs text-muted">WATER RECOVERY</div>
                </div>
                <div>
                  <div className="font-mono text-2xl text-neon">0</div>
                  <div className="font-mono text-xs text-muted">SEWER DISCHARGE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy Diagram */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              CIRCULAR <span className="text-neon">ECONOMY</span>
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {[
              { label: 'END-OF-LIFE BATTERIES', color: '#ef4444' },
              { label: 'RECYCLING (ZONE A)', color: '#00ff88' },
              { label: 'RECOVERED MATERIALS', color: '#ffb700' },
              { label: 'MANUFACTURING (ZONE C)', color: '#00aaff' },
              { label: 'NEW BATTERIES', color: '#a855f7' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div 
                  className="w-24 h-24 rounded-full border-2 flex items-center justify-center text-center p-2"
                  style={{ borderColor: item.color }}
                >
                  <span className="font-mono text-xs" style={{ color: item.color }}>
                    {item.label}
                  </span>
                </div>
                {index < 4 && (
                  <svg className="w-8 h-8 text-neon/50 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="font-mono text-sm text-muted">
              Closed-loop system keeps materials in productive use
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Benefits Checklist */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              ENVIRONMENTAL <span className="text-neon">BENEFITS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {checkmarks.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 border border-neon/20 hover:border-neon/50 transition-colors"
              >
                <div className="w-8 h-8 border-2 border-neon flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-white mb-1">{item.text}</div>
                  <div className="text-muted text-sm">{item.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Permit Advantages */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              REGULATORY <span className="text-amber">ADVANTAGES</span>
            </h2>
          </motion.div>

          <div className="bg-amber/5 border border-amber/30 p-8 rounded-lg">
            <p className="text-white mb-6">
              By implementing Zero Liquid Discharge, Z1 Recycling Center avoids complex wastewater 
              permitting requirements while demonstrating environmental leadership.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-amber/20 p-4">
                <div className="font-mono text-amber mb-2">ELIMINATED</div>
                <ul className="space-y-2 text-muted text-sm">
                  <li>OPDES discharge permits</li>
                  <li>Municipal sewer agreements</li>
                  <li>Pretreatment requirements</li>
                  <li>Effluent monitoring</li>
                </ul>
              </div>
              <div className="border border-neon/20 p-4">
                <div className="font-mono text-neon mb-2">RETAINED</div>
                <ul className="space-y-2 text-muted text-sm">
                  <li>EPA Generator ID</li>
                  <li>RCRA hazardous waste</li>
                  <li>Air quality permits</li>
                  <li>Stormwater management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
