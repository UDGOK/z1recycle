import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';

interface Equipment {
  id: string;
  name: string;
  zone: 'A' | 'C';
  category: string;
  function: string;
  specs: string[];
  vendor?: string;
}

const allEquipment: Equipment[] = [
  // Zone A Equipment
  { id: 'A1', name: 'Discharge System', zone: 'A', category: 'Pre-processing', function: 'Safe battery discharge', specs: ['Brine tanks', 'H2 venting', 'Conductive discharge', '24-72hr cycle'], vendor: 'Custom' },
  { id: 'A2', name: 'Primary Shredder', zone: 'A', category: 'Size Reduction', function: 'Initial size reduction', specs: ['Dual-shaft design', 'N2 injection', '4-6" output', 'Explosion-proof'], vendor: 'SSI Shredding' },
  { id: 'A3', name: 'Granulator', zone: 'A', category: 'Size Reduction', function: 'Secondary size reduction', specs: ['Hammer mill', '<10mm output', 'Enclosed system'], vendor: 'Hosokawa' },
  { id: 'A4', name: 'Air Classifier', zone: 'A', category: 'Separation', function: 'Light material separation', specs: ['Zig-zag design', '95%+ efficiency', 'Removes plastics/foils'] },
  { id: 'A5', name: 'Magnetic Separator', zone: 'A', category: 'Separation', function: 'Ferrous metal recovery', specs: ['Drum type', 'Steel/nickel recovery', 'Self-cleaning'] },
  { id: 'A6', name: 'Eddy Current Separator', zone: 'A', category: 'Separation', function: 'Non-ferrous separation', specs: ['Aluminum recovery', 'Copper recovery', 'Adjustable frequency'] },
  { id: 'A7', name: 'Vibratory Sieve', zone: 'A', category: 'Classification', function: 'Size classification', specs: ['Multi-deck', 'Black mass isolation', 'Dust containment'] },
  { id: 'A8', name: 'Wet Scrubber', zone: 'A', category: 'Air Quality', function: 'Gas treatment', specs: ['HF removal', 'Particulate removal', 'Caustic circulation'] },
  { id: 'A9', name: 'Baghouse Dust Collector', zone: 'A', category: 'Air Quality', function: 'Air filtration', specs: ['HEPA 99.97%', 'Explosion-proof', 'Auto cleaning'] },
  { id: 'A10', name: 'Super Sack Station', zone: 'A', category: 'Packaging', function: 'Product packaging', specs: ['1-ton capacity', 'Sealed filling', 'Integrated scale'] },
  // Zone C Equipment
  { id: 'C1', name: 'Vacuum Mixer', zone: 'C', category: 'Slurry Prep', function: 'Electrode slurry preparation', specs: ['Planetary design', 'Vacuum degassing', '2-4hr cycle'] },
  { id: 'C2', name: 'Slot-Die Coater', zone: 'C', category: 'Coating', function: 'Electrode coating', specs: ['30-50 ft line', '+/- 2 micron tolerance', 'Double-sided'] },
  { id: 'C3', name: 'Drying Oven', zone: 'C', category: 'Coating', function: 'Solvent removal', specs: ['Multi-zone', 'NMP recovery', '<50 ppm moisture'] },
  { id: 'C4', name: 'Roll Press', zone: 'C', category: 'Processing', function: 'Electrode calendering', specs: ['2000 kg/cm pressure', 'Micron gap control', 'Heated rolls'] },
  { id: 'C5', name: 'Slitter', zone: 'C', category: 'Processing', function: 'Electrode cutting', specs: ['Laser-guided', 'Burr-free', '+/- 0.1mm tolerance'] },
  { id: 'C6', name: 'Winding Machine', zone: 'C', category: 'Assembly', function: 'Cell core formation', specs: ['Tension controlled', 'Tab welding', 'Vision inspection'] },
  { id: 'C7', name: 'Electrolyte Filling', zone: 'C', category: 'Assembly', function: 'Electrolyte injection', specs: ['Vacuum-assisted', '0.1g accuracy', 'Multi-cycle'] },
  { id: 'C8', name: 'Vacuum Sealer', zone: 'C', category: 'Assembly', function: 'Cell sealing', specs: ['Heat + vacuum', 'Helium leak test', 'Strength testing'] },
  { id: 'C9', name: 'Formation Cabinet', zone: 'C', category: 'Testing', function: 'Initial charging', specs: ['Multi-channel', 'Temp controlled', 'Data logging'] },
  { id: 'C10', name: 'Testing Equipment', zone: 'C', category: 'Testing', function: 'Quality control', specs: ['Capacity test', 'Impedance test', 'Cycle testing'] },
];

export default function EquipmentGuide() {
  const [zoneFilter, setZoneFilter] = useState<'all' | 'A' | 'C'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ['all', ...new Set(allEquipment.map(e => e.category))];
  
  const filtered = allEquipment.filter(e => {
    if (zoneFilter !== 'all' && e.zone !== zoneFilter) return false;
    if (categoryFilter !== 'all' && e.category !== categoryFilter) return false;
    return true;
  });

  return (
    <>
      <PageHeader
        section="PROCESS // EQUIPMENT"
        title="EQUIPMENT"
        highlight="GUIDE"
        description="Complete catalog of recycling and manufacturing equipment."
      />

      {/* Filters */}
      <section className="py-8 bg-slate-900/30 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {/* Zone Filter */}
            <div className="flex gap-2">
              <span className="font-mono text-xs text-muted self-center mr-2">ZONE:</span>
              {(['all', 'A', 'C'] as const).map((zone) => (
                <button
                  key={zone}
                  onClick={() => setZoneFilter(zone)}
                  className={`px-4 py-2 font-mono text-xs border transition-all ${
                    zoneFilter === zone
                      ? zone === 'A' ? 'bg-neon text-slate-950 border-neon'
                        : zone === 'C' ? 'bg-cyan-400 text-slate-950 border-cyan-400'
                        : 'bg-white text-slate-950 border-white'
                      : 'text-muted border-gray-700 hover:border-white'
                  }`}
                  data-hover
                >
                  {zone === 'all' ? 'ALL' : `ZONE ${zone}`}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              <span className="font-mono text-xs text-muted self-center mr-2">CATEGORY:</span>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-slate-900 border border-gray-700 text-white font-mono text-xs px-4 py-2"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'ALL' : cat.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            <div className="ml-auto font-mono text-xs text-muted self-center">
              {filtered.length} items
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className={`border transition-all ${
                  item.zone === 'A' 
                    ? 'border-neon/30 hover:border-neon/60' 
                    : 'border-cyan-500/30 hover:border-cyan-500/60'
                }`}
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full p-6 text-left"
                  data-hover
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-mono text-xs px-2 py-0.5 ${
                          item.zone === 'A' ? 'bg-neon/20 text-neon' : 'bg-cyan-500/20 text-cyan-400'
                        }`}>
                          {item.id}
                        </span>
                        <span className="font-mono text-xs text-muted">{item.category}</span>
                      </div>
                      <div className="font-mono text-lg text-white">{item.name}</div>
                      <div className="text-muted text-sm mt-1">{item.function}</div>
                    </div>
                    <motion.span
                      animate={{ rotate: expandedId === item.id ? 45 : 0 }}
                      className={`text-2xl ${item.zone === 'A' ? 'text-neon' : 'text-cyan-400'}`}
                    >
                      +
                    </motion.span>
                  </div>
                </button>

                {expandedId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className={`px-6 pb-6 border-t ${
                      item.zone === 'A' ? 'border-neon/20' : 'border-cyan-500/20'
                    }`}
                  >
                    <div className="pt-4">
                      <div className="font-mono text-xs text-muted mb-2">SPECIFICATIONS</div>
                      <ul className="space-y-1">
                        {item.specs.map((spec, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                            <span className={`w-1 h-1 rounded-full ${
                              item.zone === 'A' ? 'bg-neon' : 'bg-cyan-400'
                            }`} />
                            {spec}
                          </li>
                        ))}
                      </ul>
                      {item.vendor && (
                        <div className="mt-4 pt-4 border-t border-gray-800">
                          <span className="font-mono text-xs text-muted">VENDOR: </span>
                          <span className="text-white">{item.vendor}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
