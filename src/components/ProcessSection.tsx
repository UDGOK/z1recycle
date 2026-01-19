import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProcessStep {
  id: number;
  name: string;
  icon: string;
  description: string;
}

const dirtyProcess: ProcessStep[] = [
  { id: 1, name: 'Discharge System', icon: 'D', description: 'Brine tank safe discharge' },
  { id: 2, name: 'Primary Shredder', icon: 'S', description: 'Dual-shaft with N2 injection' },
  { id: 3, name: 'Granulator', icon: 'G', description: 'Hammer mill processing' },
  { id: 4, name: 'Air Classifier', icon: 'A', description: 'Zig-zag separation' },
  { id: 5, name: 'Magnetic Separator', icon: 'M', description: 'Ferrous metal recovery' },
  { id: 6, name: 'Eddy Current', icon: 'E', description: 'Non-ferrous separation' },
  { id: 7, name: 'Vibratory Sieve', icon: 'V', description: 'Size classification' },
  { id: 8, name: 'Black Mass', icon: 'B', description: 'Super sack filling' },
];

const cleanProcess: ProcessStep[] = [
  { id: 1, name: 'Vacuum Mixer', icon: 'V', description: 'Slurry preparation' },
  { id: 2, name: 'Slot-Die Coater', icon: 'C', description: '30-50 ft coating line' },
  { id: 3, name: 'Drying Oven', icon: 'O', description: 'Precision drying' },
  { id: 4, name: 'Roll Press', icon: 'R', description: 'Electrode calendering' },
  { id: 5, name: 'Slitter', icon: 'S', description: 'Precision cutting' },
  { id: 6, name: 'Winding Machine', icon: 'W', description: 'Cell assembly' },
  { id: 7, name: 'Electrolyte Fill', icon: 'E', description: 'Controlled injection' },
  { id: 8, name: 'Formation', icon: 'F', description: 'Initial charging' },
];

const stats = {
  dirty: [
    { label: 'Bridge Cranes', value: '5-TON', unit: '' },
    { label: 'Dust Collection', value: '99.97', unit: '%' },
    { label: 'Nitrogen System', value: 'ACTIVE', unit: '' },
  ],
  clean: [
    { label: 'Dew Point', value: '-40', unit: 'C' },
    { label: 'Humidity', value: '<1', unit: '%' },
    { label: 'ISO Class', value: '7', unit: '' },
  ],
};

export default function ProcessSection() {
  const [activeTab, setActiveTab] = useState<'dirty' | 'clean'>('dirty');

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background texture */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        activeTab === 'dirty' 
          ? 'bg-gradient-to-br from-orange-950/20 to-slate-950' 
          : 'bg-gradient-to-br from-cyan-950/20 to-slate-950'
      }`} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-amber tracking-widest mb-2">
            // SECTION_03
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">
            THE <span className="text-neon">PROCESS</span>
          </h2>
          <p className="text-muted max-w-2xl">
            Dual-track operations: from hazardous material processing to clean room manufacturing.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-neon/30 p-1">
            <button
              onClick={() => setActiveTab('dirty')}
              className={`px-6 py-3 font-mono text-sm transition-all ${
                activeTab === 'dirty'
                  ? 'bg-amber text-slate-950'
                  : 'text-muted hover:text-white'
              }`}
              data-hover
            >
              ZONE A // RECYCLING
            </button>
            <button
              onClick={() => setActiveTab('clean')}
              className={`px-6 py-3 font-mono text-sm transition-all ${
                activeTab === 'clean'
                  ? 'bg-cyan-400 text-slate-950'
                  : 'text-muted hover:text-white'
              }`}
              data-hover
            >
              ZONE C // MANUFACTURING
            </button>
          </div>
        </div>

        {/* Process Flow */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === 'dirty' ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="relative">
            {/* Connection line */}
            <div className={`absolute top-8 left-0 right-0 h-[2px] ${
              activeTab === 'dirty' ? 'bg-amber/30' : 'bg-cyan-400/30'
            }`} />

            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 relative z-10">
              {(activeTab === 'dirty' ? dirtyProcess : cleanProcess).map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div
                    className={`w-16 h-16 rounded-full border-2 flex items-center justify-center font-mono font-bold text-lg mb-3 transition-all group-hover:scale-110 ${
                      activeTab === 'dirty'
                        ? 'border-amber text-amber group-hover:bg-amber group-hover:text-slate-950'
                        : 'border-cyan-400 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="font-mono text-xs text-white mb-1">{step.name}</div>
                  <div className="text-[10px] text-muted hidden md:block">{step.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          {(activeTab === 'dirty' ? stats.dirty : stats.clean).map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border p-6 text-center ${
                activeTab === 'dirty' ? 'border-amber/30' : 'border-cyan-400/30'
              }`}
            >
              <div className={`font-mono text-4xl md:text-5xl font-bold mb-2 ${
                activeTab === 'dirty' ? 'text-amber' : 'text-cyan-400'
              }`}>
                {stat.value}<span className="text-2xl">{stat.unit}</span>
              </div>
              <div className="font-mono text-xs text-muted uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
