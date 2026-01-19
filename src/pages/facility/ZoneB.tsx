import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';
import DataTable from '../../components/ui/DataTable';

const mepSpecs = [
  { system: 'Main Service', specification: '2,500 kVA transformer' },
  { system: 'Emergency Power', specification: '500 kW diesel generator' },
  { system: 'Compressed Air', specification: '100 HP rotary screw, 150 psi' },
  { system: 'Process Water', specification: 'Municipal + RO treatment' },
  { system: 'Nitrogen Supply', specification: 'Bulk tank + on-site generation' },
  { system: 'HVAC', specification: 'Dedicated AHUs per zone' },
  { system: 'Fire Protection', specification: 'Wet sprinkler + dry chemical' },
];

const zldSteps = [
  { step: 1, name: 'Collection', description: 'Process wastewater collected in holding tanks' },
  { step: 2, name: 'Pretreatment', description: 'pH adjustment and filtration' },
  { step: 3, name: 'Evaporation', description: 'MVR evaporator concentrates waste' },
  { step: 4, name: 'Distillate Recovery', description: 'Clean water returned to process' },
  { step: 5, name: 'Solids Disposal', description: 'Concentrated sludge hauled off-site' },
];

export default function ZoneB() {
  return (
    <>
      <PageHeader
        section="FACILITY // ZONE B"
        title="ZONE B"
        highlight="UTILITY SPINE"
        description="4,000 SF central corridor housing MEP systems, fire separation, and ZLD processing."
        image="/utility-spine.png"
      />

      {/* Zone Stats */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '4,000', unit: 'SF', label: 'Area' },
              { value: '2,500', unit: 'kVA', label: 'Main Service' },
              { value: '2-HR', unit: '', label: 'Fire Rating' },
              { value: 'ZLD', unit: '', label: 'Discharge' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border border-amber/20"
              >
                <div className="font-mono text-3xl text-amber">
                  {stat.value}<span className="text-lg">{stat.unit}</span>
                </div>
                <div className="font-mono text-xs text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fire Separation */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              FIRE <span className="text-amber">SEPARATION</span>
            </h2>
            <p className="text-muted max-w-3xl">
              Zone B serves as a 2-hour fire-rated separation between recycling (Zone A) and 
              manufacturing (Zone C) operations. This firewall meets NFPA requirements for 
              battery processing facilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-neon/10 border border-neon/30 p-6 text-center"
            >
              <div className="font-mono text-2xl text-neon mb-2">ZONE A</div>
              <div className="text-muted">Recycling</div>
              <div className="text-sm text-muted mt-2">Negative Pressure</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-amber/10 border-4 border-amber p-6 text-center"
            >
              <div className="font-mono text-2xl text-amber mb-2">ZONE B</div>
              <div className="text-white font-bold">2-HOUR FIREWALL</div>
              <div className="text-sm text-muted mt-2">Utility Corridor</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cyan-500/10 border border-cyan-500/30 p-6 text-center"
            >
              <div className="font-mono text-2xl text-cyan-400 mb-2">ZONE C</div>
              <div className="text-muted">Manufacturing</div>
              <div className="text-sm text-muted mt-2">Positive Pressure</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MEP Specifications */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              MEP <span className="text-amber">SYSTEMS</span>
            </h2>
          </motion.div>

          <DataTable
            columns={[
              { key: 'system', header: 'SYSTEM', width: '40%' },
              { key: 'specification', header: 'SPECIFICATION' },
            ]}
            data={mepSpecs}
            accentColor="#ffb700"
          />
        </div>
      </section>

      {/* ZLD System */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              ZERO LIQUID DISCHARGE <span className="text-neon">SYSTEM</span>
            </h2>
            <p className="text-muted max-w-3xl">
              The MVR (Mechanical Vapor Recompression) evaporator system processes all 
              wastewater on-site, eliminating the need for municipal sewer discharge.
            </p>
          </motion.div>

          {/* ZLD Flow Diagram */}
          <div className="bg-slate-900/50 border border-neon/20 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {zldSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-1 text-center"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-neon flex items-center justify-center font-mono text-neon mx-auto mb-2">
                    {step.step}
                  </div>
                  <div className="font-mono text-sm text-white mb-1">{step.name}</div>
                  <div className="text-xs text-muted">{step.description}</div>
                  
                  {index < zldSteps.length - 1 && (
                    <div className="hidden md:block absolute transform translate-x-full">
                      <svg className="w-6 h-6 text-neon/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* MVR Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-neon/20">
              <div className="text-center">
                <div className="font-mono text-2xl text-neon">500</div>
                <div className="font-mono text-xs text-muted">GPD CAPACITY</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-2xl text-neon">95%</div>
                <div className="font-mono text-xs text-muted">WATER RECOVERY</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-2xl text-neon">0</div>
                <div className="font-mono text-xs text-muted">SEWER DISCHARGE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power Distribution */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              POWER <span className="text-amber">DISTRIBUTION</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-amber/30 p-6">
              <div className="font-mono text-amber mb-4">MAIN SERVICE</div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted">Transformer</span>
                  <span className="text-white">2,500 kVA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Primary Voltage</span>
                  <span className="text-white">13.8 kV</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Secondary</span>
                  <span className="text-white">480V 3-Phase</span>
                </div>
              </div>
            </div>

            <div className="border border-amber/30 p-6">
              <div className="font-mono text-amber mb-4">BACKUP POWER</div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted">Generator</span>
                  <span className="text-white">500 kW Diesel</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Transfer Time</span>
                  <span className="text-white">10 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Run Time</span>
                  <span className="text-white">72 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
