import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Zone {
  id: string;
  name: string;
  sqft: string;
  color: string;
  description: string;
  features: string[];
  x: number;
  y: number;
  width: number;
  height: number;
}

const zones: Zone[] = [
  {
    id: 'A',
    name: 'ZONE A - RECYCLING',
    sqft: '28,000 SF',
    color: '#00ff88',
    description: 'Negative Pressure Environment',
    features: ['Shredding Systems', 'Black Mass Recovery', 'Dust Collection', 'Wet Scrubber'],
    x: 10,
    y: 10,
    width: 40,
    height: 80,
  },
  {
    id: 'B',
    name: 'ZONE B - UTILITY SPINE',
    sqft: '4,000 SF',
    color: '#ffb700',
    description: '2-Hour Fire-Rated Wall',
    features: ['MEP Systems', 'ZLD Processing', 'Control Room', 'Fire Suppression'],
    x: 50,
    y: 10,
    width: 10,
    height: 80,
  },
  {
    id: 'C',
    name: 'ZONE C - MANUFACTURING',
    sqft: '28,000 SF',
    color: '#00aaff',
    description: 'Positive Pressure Clean Room',
    features: ['Dry Room (-40C)', 'Na-ion R&D', 'Cell Assembly', 'Quality Control'],
    x: 60,
    y: 10,
    width: 30,
    height: 80,
  },
];

export default function FacilitySection() {
  const [activeZone, setActiveZone] = useState<Zone | null>(null);

  return (
    <section id="facility" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-amber tracking-widest mb-2">
            // SECTION_02
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">
            THE <span className="text-neon">FACILITY</span>
          </h2>
          <p className="text-muted max-w-2xl">
            300' x 200' purpose-built structure with 32' clear height. 
            Designed for complete battery lifecycle management.
          </p>
        </motion.div>

        {/* Blueprint Container */}
        <div className="relative">
          {/* Dimension callouts */}
          <div className="absolute -top-8 left-0 right-0 flex justify-center items-center text-muted font-mono text-xs">
            <span className="border-t border-muted/30 flex-1 mx-4" />
            <span>300 FT</span>
            <span className="border-t border-muted/30 flex-1 mx-4" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative bg-slate-950 border border-neon/20 rounded-lg p-4 blueprint-grid"
          >
            {/* SVG Blueprint */}
            <svg
              viewBox="0 0 100 100"
              className="w-full aspect-[3/2] md:aspect-[2/1]"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background grid */}
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,255,136,0.1)" strokeWidth="0.2" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />

              {/* Zones */}
              {zones.map((zone) => (
                <g key={zone.id}>
                  <motion.rect
                    x={zone.x}
                    y={zone.y}
                    width={zone.width}
                    height={zone.height}
                    fill={activeZone?.id === zone.id ? `${zone.color}20` : 'transparent'}
                    stroke={zone.color}
                    strokeWidth={activeZone?.id === zone.id ? 1 : 0.5}
                    strokeDasharray={activeZone?.id === zone.id ? '0' : '2 1'}
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setActiveZone(zone)}
                    onMouseLeave={() => setActiveZone(null)}
                    whileHover={{ filter: 'drop-shadow(0 0 10px ' + zone.color + ')' }}
                  />
                  <text
                    x={zone.x + zone.width / 2}
                    y={zone.y + zone.height / 2}
                    textAnchor="middle"
                    fill={zone.color}
                    className="font-mono text-[3px] pointer-events-none"
                  >
                    ZONE {zone.id}
                  </text>
                  <text
                    x={zone.x + zone.width / 2}
                    y={zone.y + zone.height / 2 + 5}
                    textAnchor="middle"
                    fill="#94a3b8"
                    className="font-mono text-[2px] pointer-events-none"
                  >
                    {zone.sqft}
                  </text>
                </g>
              ))}

              {/* Dimension markers */}
              <text x="5" y="50" fill="#94a3b8" className="font-mono text-[2px]" transform="rotate(-90, 5, 50)">
                200 FT
              </text>
            </svg>

            {/* Zone info panel */}
            <AnimatePresence>
              {activeZone && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute top-4 right-4 bg-slate-950/95 border p-6 max-w-xs glow-border"
                  style={{ borderColor: activeZone.color }}
                >
                  <div className="font-mono text-xs mb-2" style={{ color: activeZone.color }}>
                    {activeZone.name}
                  </div>
                  <div className="font-mono text-2xl text-white mb-2">{activeZone.sqft}</div>
                  <div className="text-muted text-sm mb-4">{activeZone.description}</div>
                  <ul className="space-y-1">
                    {activeZone.features.map((feature) => (
                      <li key={feature} className="text-xs text-muted flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: activeZone.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'TOTAL AREA', value: '60,000 SF' },
              { label: 'CLEAR HEIGHT', value: '32 FT' },
              { label: 'MAIN SERVICE', value: '2,500 kVA' },
              { label: 'FIRE RATING', value: '2-HOUR' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-neon/20 p-4 text-center"
              >
                <div className="font-mono text-2xl text-neon mb-1">{stat.value}</div>
                <div className="font-mono text-xs text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
