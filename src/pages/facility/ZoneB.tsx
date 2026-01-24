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
        image="/utility-spine.webp"
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

      {/* Renewable Energy System */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              RENEWABLE <span className="text-neon">ENERGY SYSTEM</span>
            </h2>
            <p className="text-muted max-w-3xl">
              Maximizing the 60,000 SF rooftop for on-site solar generation, integrated with 
              lithium-ion battery storage for grid independence and operational resilience.
            </p>
          </motion.div>

          {/* Solar Array Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: '781', unit: 'kW', label: 'Solar Capacity' },
              { value: '1,953', unit: '', label: 'Bifacial Panels' },
              { value: '3.2', unit: 'MWh', label: 'Battery Storage' },
              { value: '1.26M', unit: 'kWh/yr', label: 'Annual Generation' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border border-neon/30 bg-neon/5"
              >
                <div className="font-mono text-3xl text-neon">
                  {stat.value}<span className="text-lg">{stat.unit}</span>
                </div>
                <div className="font-mono text-xs text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* System Architecture */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-neon/30 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div className="font-mono text-neon text-lg">SOLAR ARRAY</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-muted">Panel Type</span>
                  <span className="text-white">400W Bifacial Monocrystalline</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-muted">Configuration</span>
                  <span className="text-white">1,953 Panels / 42,000 SF</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-muted">Mounting</span>
                  <span className="text-white">Ballasted Flat Roof System</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-muted">Inverters</span>
                  <span className="text-white">650 kW String Inverters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Peak Sun Hours</span>
                  <span className="text-white">5.2 hrs/day (Oklahoma avg)</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-cyan-500/30 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 4v3M13.5 4v3M8 17v-6M12 17v-4M16 17v-2" />
                </svg>
                <div className="font-mono text-cyan-400 text-lg">BATTERY STORAGE</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-muted">Chemistry</span>
                  <span className="text-white">Lithium Iron Phosphate (LFP)</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-muted">Capacity</span>
                  <span className="text-white">3.2 MWh Usable</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-muted">Power Rating</span>
                  <span className="text-white">800 kW Continuous</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-muted">Cycle Life</span>
                  <span className="text-white">6,000+ Cycles (15+ Years)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Configuration</span>
                  <span className="text-white">Containerized Modules</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Environmental Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="font-mono text-xl text-white mb-6">
              ENVIRONMENTAL <span className="text-neon">IMPACT</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                value: '890',
                unit: 'Metric Tons',
                label: 'CO2 Avoided Annually',
                description: 'Equivalent to removing 193 vehicles from the road each year',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                value: '14,700',
                unit: 'Trees',
                label: 'Carbon Offset Equivalent',
                description: 'Annual carbon sequestration equivalent to planting a small forest',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                value: '18%',
                unit: '',
                label: 'Grid Independence',
                description: 'Reducing strain on local utility infrastructure during peak demand',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-neon/10 to-transparent border border-neon/20 p-6"
              >
                <div className="text-neon mb-4">{benefit.icon}</div>
                <div className="font-mono text-3xl text-white mb-1">
                  {benefit.value}<span className="text-neon text-lg ml-1">{benefit.unit}</span>
                </div>
                <div className="font-mono text-sm text-neon mb-2">{benefit.label}</div>
                <p className="text-muted text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Operational Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-neon/20 p-8"
          >
            <h3 className="font-mono text-lg text-white mb-6">OPERATIONAL ADVANTAGES</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Peak Shaving', desc: 'Reduce demand charges by discharging batteries during high-cost periods' },
                { title: 'Grid Resilience', desc: 'Seamless transition to battery power during utility outages' },
                { title: 'Self-Consumption', desc: 'Store daytime solar generation for evening production shifts' },
                { title: 'Demand Response', desc: 'Participate in utility programs for additional revenue streams' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-mono text-sm text-neon mb-1">{item.title}</div>
                    <p className="text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
