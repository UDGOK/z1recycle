import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const checkmarks = [
  { text: 'No OPDES permit required', delay: 0 },
  { text: 'No municipal sewer discharge', delay: 0.2 },
  { text: 'Circular economy model', delay: 0.4 },
  { text: 'DOE incentive eligible', delay: 0.6 },
];

function AnimatedGauge({ value, label }: { value: number; label: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(value);
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);

  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (current / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="56"
            cy="56"
            r="40"
            fill="none"
            stroke="#1e293b"
            strokeWidth="8"
          />
          <motion.circle
            cx="56"
            cy="56"
            r="40"
            fill="none"
            stroke="#00ff88"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-2xl text-neon">{value}%</span>
        </div>
      </div>
      <div className="font-mono text-xs text-muted mt-2 text-center">{label}</div>
    </div>
  );
}

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 to-emerald-950/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-amber tracking-widest mb-2">
            // SECTION_04
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">
            ZERO LIQUID <span className="text-neon">DISCHARGE</span>
          </h2>
          <p className="text-muted max-w-2xl">
            Complete water reclamation through MVR evaporator technology. 
            500 GPD capacity with full circular water reuse.
          </p>
        </motion.div>

        {/* ZLD Schematic */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-slate-900/50 border border-neon/20 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* Process Wastewater */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="border border-amber/50 px-6 py-4 text-center"
              >
                <div className="font-mono text-amber text-sm">PROCESS</div>
                <div className="font-mono text-white">WASTEWATER</div>
              </motion.div>

              {/* Arrow */}
              <svg className="w-8 h-8 text-neon rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              {/* Collection Tank */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="border border-muted/50 px-6 py-4 text-center"
              >
                <div className="font-mono text-muted text-sm">COLLECTION</div>
                <div className="font-mono text-white">TANK</div>
              </motion.div>

              {/* Arrow */}
              <svg className="w-8 h-8 text-neon rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              {/* MVR Evaporator */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="border-2 border-neon px-6 py-4 text-center glow-border"
              >
                <div className="font-mono text-neon text-sm">MVR</div>
                <div className="font-mono text-white">EVAPORATOR</div>
              </motion.div>

              {/* Split arrows */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center gap-4">
                  <svg className="w-8 h-8 text-neon rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="border border-cyan-400/50 px-6 py-4 text-center"
                  >
                    <div className="font-mono text-cyan-400 text-sm">DISTILLED</div>
                    <div className="font-mono text-white">WATER REUSE</div>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="border border-orange-400/50 px-6 py-4 text-center"
              >
                <div className="font-mono text-orange-400 text-sm">SOLID SLUDGE</div>
                <div className="font-mono text-white">HAUL OFF</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Gauges and Checkmarks */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Gauges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-around"
          >
            <AnimatedGauge value={100} label="WATER RECOVERY" />
            <AnimatedGauge value={99} label="MATERIAL RECLAIM" />
          </motion.div>

          {/* Checkmarks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {checkmarks.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-8 border-2 border-neon flex items-center justify-center group-hover:bg-neon transition-colors">
                  <svg className="w-5 h-5 text-neon group-hover:text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-mono text-white">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
