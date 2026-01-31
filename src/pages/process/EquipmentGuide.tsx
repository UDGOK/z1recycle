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
  // Zone A Equipment - Recycling Line
  { id: 'A1', name: 'XRF Chemistry Analyzer', zone: 'A', category: 'Intake', function: 'Real-time cell chemistry identification', specs: ['NMC/LFP/NCA/LCO detection', '99.2% accuracy', 'X-ray fluorescence', 'Automated conveyor routing'], vendor: 'Thermo Scientific' },
  { id: 'A2', name: 'Thermal Imaging Scanner', zone: 'A', category: 'Intake', function: 'Compromised cell detection', specs: ['FLIR sensor array', 'Thermal anomaly alerts', 'Automated rejection', 'Real-time monitoring'] },
  { id: 'A3', name: 'Inert Atmosphere Shredder', zone: 'A', category: 'Size Reduction', function: 'Non-discharge direct shredding', specs: ['O₂ maintained below 1%', 'Continuous N₂ injection', 'H₂/CO gas chromatography', 'CO₂ fire suppression (under 200ms)'], vendor: 'Erdwich' },
  { id: 'A4', name: 'Cryogenic Hammer Mill', zone: 'A', category: 'Size Reduction', function: 'Ultra-low temperature granulation', specs: ['-40°C LN₂ cooling', 'D50=2.3mm output', '2,500 kg/hr throughput', 'Zero thermal degradation'], vendor: 'Hosokawa Alpine' },
  { id: 'A5', name: 'Pre-Lithium Extraction Reactor', zone: 'A', category: 'Leaching', function: 'Early-stage lithium recovery', specs: ['60°C aqueous process', '92% Li recovery', '99.5% Li₂CO₃ purity', '40% downstream acid reduction'], vendor: 'Proprietary' },
  { id: 'A6', name: 'Zig-Zag Air Classifier', zone: 'A', category: 'Separation', function: 'Light fraction separation', specs: ['Separator film removal', 'Plastic capture (over 99%)', 'Adjustable air velocity', 'Continuous operation'] },
  { id: 'A7', name: 'Rare-Earth Magnetic Drum', zone: 'A', category: 'Separation', function: 'Ferrous metal extraction', specs: ['NdFeB magnets', 'Steel casing recovery', 'Ni tab separation', 'Self-cleaning design'], vendor: 'Eriez' },
  { id: 'A8', name: 'High-Frequency Eddy Current', zone: 'A', category: 'Separation', function: 'Non-ferrous metal recovery', specs: ['Al foil recovery (over 99%)', 'Cu collector recovery', 'Variable frequency drive', 'Splitter plate adjustment'], vendor: 'Steinert' },
  { id: 'A9', name: 'Thermal Delamination Furnace', zone: 'A', category: 'Liberation', function: 'Electrode-foil separation', specs: ['450°C N₂ atmosphere', 'PVDF binder removal', 'Crystal structure preserved', 'NMP-free process'], vendor: 'Custom' },
  { id: 'A10', name: 'Froth Flotation Cell', zone: 'A', category: 'Refining', function: 'Graphite-cathode separation', specs: ['98% separation efficiency', 'Graphite purity (over 98% C)', 'Continuous operation', 'Reagent dosing control'], vendor: 'Metso Outotec' },
  { id: 'A11', name: 'Selective Calcination Kiln', zone: 'A', category: 'Refining', function: 'Carbon and organic removal', specs: ['Controlled atmosphere', 'Temperature profiling', 'Residual carbon (under 0.5%)', 'Continuous feed'] },
  { id: 'A12', name: 'Solvent Extraction Cascade', zone: 'A', category: 'Hydromet', function: 'Ni/Co/Mn selective separation', specs: ['Organic acid leaching', '99.9% selectivity', 'Multi-stage mixer-settlers', '90% lower acid vs H₂SO₄'], vendor: 'Koch Modular' },
  { id: 'A13', name: 'Zero Liquid Discharge System', zone: 'A', category: 'Environmental', function: 'Process water recycling', specs: ['98% water recovery', 'Crystallizer for salts', 'RO + evaporator train', 'No wastewater discharge'], vendor: 'Veolia' },
  // Zone C Equipment - Manufacturing
  { id: 'C1', name: 'Planetary Vacuum Mixer', zone: 'C', category: 'Slurry Prep', function: 'Electrode slurry preparation', specs: ['Dual planetary motion', 'Vacuum degassing', '2-4hr cycle time', 'Temperature controlled'], vendor: 'Ross' },
  { id: 'C2', name: 'Slot-Die Coater', zone: 'C', category: 'Coating', function: 'Precision electrode coating', specs: ['±2 micron tolerance', '30-50 ft line length', 'Double-sided capability', 'Closed-loop thickness control'], vendor: 'Hirano Tecseed' },
  { id: 'C3', name: 'Multi-Zone Drying Oven', zone: 'C', category: 'Coating', function: 'NMP solvent removal', specs: ['NMP recovery (over 95%)', 'Under 50 ppm moisture', 'Zoned temperature control', 'IR heating option'], vendor: 'Despatch' },
  { id: 'C4', name: 'Precision Roll Press', zone: 'C', category: 'Processing', function: 'Electrode calendering', specs: ['2000 kg/cm line pressure', 'Micron gap control', 'Heated rolls to 120°C', 'In-line thickness gauge'] },
  { id: 'C5', name: 'Laser Slitter', zone: 'C', category: 'Processing', function: 'Electrode cutting', specs: ['±0.1mm tolerance', 'Burr-free edges', 'Vision alignment', 'Dust extraction'], vendor: 'Manz' },
  { id: 'C6', name: 'Automated Winding Machine', zone: 'C', category: 'Assembly', function: 'Cell core formation', specs: ['Tension control ±1%', 'Ultrasonic tab welding', 'Vision inspection', 'Recipe management'] },
  { id: 'C7', name: 'Vacuum Electrolyte Filler', zone: 'C', category: 'Assembly', function: 'Precision electrolyte injection', specs: ['0.1g accuracy', 'Vacuum-assisted wetting', 'Multi-cycle fill', 'Helium leak check'], vendor: 'Sovema' },
  { id: 'C8', name: 'Formation & Aging Cabinet', zone: 'C', category: 'Testing', function: 'Initial charging and SEI formation', specs: ['512+ channels', '±0.05% voltage accuracy', 'Temperature controlled', 'Full data logging'], vendor: 'Bitrode' },
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
