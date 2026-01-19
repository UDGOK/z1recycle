import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import DataTable from '../../components/ui/DataTable';

const equipment = [
  { num: '1', equipment: 'Vacuum Mixer', function: 'Slurry preparation', specs: 'Planetary mixer, vacuum degassing' },
  { num: '2', equipment: 'Slot-Die Coater', function: 'Electrode coating', specs: '30-50 ft line, precision deposition' },
  { num: '3', equipment: 'Drying Oven', function: 'Solvent removal', specs: 'Multi-zone, controlled atmosphere' },
  { num: '4', equipment: 'Roll Press', function: 'Electrode calendering', specs: 'Precision gap control' },
  { num: '5', equipment: 'Slitter', function: 'Electrode cutting', specs: 'Laser-guided, dust-free' },
  { num: '6', equipment: 'Winding Machine', function: 'Cell assembly', specs: 'Tension controlled' },
  { num: '7', equipment: 'Electrolyte Filling', function: 'Electrolyte injection', specs: 'Vacuum-assisted, metered' },
  { num: '8', equipment: 'Vacuum Sealer', function: 'Cell sealing', specs: 'Heat + vacuum' },
  { num: '9', equipment: 'Formation Cabinet', function: 'Initial charging', specs: 'Multi-channel, temperature controlled' },
  { num: '10', equipment: 'Testing Equipment', function: 'Quality control', specs: 'Capacity, impedance, cycle testing' },
];

const comparisonData = [
  { component: 'Anode Collector', liion: 'Copper', naion: 'Aluminum', advantage: '90% cost reduction' },
  { component: 'Cathode Collector', liion: 'Aluminum', naion: 'Aluminum', advantage: 'Same supply chain' },
  { component: 'Anode Material', liion: 'Graphite', naion: 'Hard Carbon', advantage: 'Abundant source' },
  { component: 'Cathode Material', liion: 'NMC/LFP', naion: 'Prussian Blue', advantage: 'No cobalt needed' },
  { component: 'Electrolyte Salt', liion: 'LiPF6', naion: 'NaPF6', advantage: 'Lower cost' },
  { component: 'Operating Temp', liion: '-20 to 60C', naion: '-40 to 80C', advantage: 'Wider range' },
];

function AnimatedGauge({ value, label, unit, color }: { value: number; label: string; unit: string; color: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCurrent(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  const circumference = 2 * Math.PI * 45;
  const normalizedValue = Math.abs(value) / 100;
  const strokeDashoffset = circumference - normalizedValue * circumference;

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
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-2xl" style={{ color }}>{value}</span>
          <span className="font-mono text-xs text-muted">{unit}</span>
        </div>
      </div>
      <div className="font-mono text-xs text-muted mt-2">{label}</div>
    </div>
  );
}

export default function ZoneC() {
  return (
    <>
      <PageHeader
        section="FACILITY // ZONE C"
        title="ZONE C"
        highlight="MANUFACTURING"
        description="28,000 SF positive pressure clean room for sodium-ion battery R&D and production."
        image="/dry-room.png"
      />

      {/* Zone Stats */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '28,000', unit: 'SF', label: 'Area' },
              { value: 'ISO 7', unit: '', label: 'Class' },
              { value: '-40', unit: 'C', label: 'Dew Point' },
              { value: '<1', unit: '%', label: 'Humidity' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border border-cyan-500/20"
              >
                <div className="font-mono text-3xl text-cyan-400">
                  {stat.value}<span className="text-lg">{stat.unit}</span>
                </div>
                <div className="font-mono text-xs text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dry Room Specs with Animated Gauges */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              DRY ROOM <span className="text-cyan-400">ENVIRONMENT</span>
            </h2>
            <p className="text-muted max-w-3xl">
              The 10,000 SF dry room maintains ultra-low humidity conditions essential for 
              battery electrode and cell manufacturing. Positive pressure prevents contamination.
            </p>
          </motion.div>

          <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-8">
            <div className="flex flex-wrap justify-center gap-12">
              <AnimatedGauge value={-40} label="DEW POINT" unit="C" color="#00aaff" />
              <AnimatedGauge value={1} label="HUMIDITY" unit="% RH" color="#00aaff" />
              <AnimatedGauge value={99} label="PARTICULATE" unit="% REMOVED" color="#00ff88" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-cyan-500/20">
              <div className="text-center">
                <div className="font-mono text-cyan-400 mb-2">AIR HANDLING</div>
                <div className="text-muted text-sm">Dedicated desiccant dehumidifiers with molecular sieve regeneration</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-cyan-400 mb-2">GOWNING</div>
                <div className="text-muted text-sm">Full cleanroom suits, air showers, sticky mats at entry</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-cyan-400 mb-2">MONITORING</div>
                <div className="text-muted text-sm">Continuous dew point sensors with alarm systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Table */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              MANUFACTURING <span className="text-cyan-400">EQUIPMENT</span>
            </h2>
          </motion.div>

          <DataTable
            columns={[
              { key: 'num', header: '#', width: '60px' },
              { key: 'equipment', header: 'EQUIPMENT', width: '25%' },
              { key: 'function', header: 'FUNCTION', width: '30%' },
              { key: 'specs', header: 'KEY SPECS' },
            ]}
            data={equipment}
            accentColor="#00aaff"
          />
        </div>
      </section>

      {/* Why Sodium-Ion Comparison */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              WHY <span className="text-cyan-400">SODIUM-ION</span>?
            </h2>
            <p className="text-muted max-w-3xl">
              Sodium-ion batteries offer significant advantages for grid storage and 
              cost-sensitive applications. Our R&D focuses on next-generation chemistries.
            </p>
          </motion.div>

          <DataTable
            columns={[
              { key: 'component', header: 'COMPONENT', width: '25%' },
              { key: 'liion', header: 'Li-ion', width: '20%' },
              { key: 'naion', header: 'Na-ion', width: '20%' },
              { key: 'advantage', header: 'ADVANTAGE' },
            ]}
            data={comparisonData}
            accentColor="#00aaff"
          />

          <div className="mt-8 p-6 border border-neon/30 bg-neon/5">
            <div className="flex items-start gap-4">
              <div className="text-neon text-2xl">!</div>
              <div>
                <div className="font-mono text-neon mb-2">KEY INSIGHT</div>
                <div className="text-muted">
                  By using aluminum current collectors for both electrodes (instead of copper for the anode), 
                  sodium-ion batteries achieve up to 30% lower material costs while enabling deeper discharge 
                  without copper dissolution issues.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
