import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import DataTable from '../../components/ui/DataTable';

const equipment = [
  { num: '1', equipment: 'Discharge System', function: 'Depletes battery charge', specs: 'Brine tanks, H2 venting, conductive discharge' },
  { num: '2', equipment: 'Primary Shredder', function: 'Size reduction', specs: 'Dual-shaft, N2 injection, 4-6" output' },
  { num: '3', equipment: 'Granulator', function: 'Secondary size reduction', specs: 'Hammer mill, <10mm output' },
  { num: '4', equipment: 'Air Classifier', function: 'Light material separation', specs: 'Zig-zag design, removes plastics/foils' },
  { num: '5', equipment: 'Magnetic Separator', function: 'Ferrous metal recovery', specs: 'Drum type, steel/nickel recovery' },
  { num: '6', equipment: 'Eddy Current Separator', function: 'Non-ferrous separation', specs: 'Aluminum, copper recovery' },
  { num: '7', equipment: 'Vibratory Sieve', function: 'Size classification', specs: 'Multi-deck, black mass isolation' },
  { num: '8', equipment: 'Wet Scrubber', function: 'Gas treatment', specs: 'Removes HF, particulates' },
  { num: '9', equipment: 'Baghouse Dust Collector', function: 'Air filtration', specs: 'HEPA 99.97%, explosion-proof' },
  { num: '10', equipment: 'Super Sack Station', function: 'Product packaging', specs: '1-ton capacity, sealed filling' },
];

const safetyFeatures = [
  { feature: 'Nitrogen Injection', description: 'Inert atmosphere during shredding prevents thermal runaway' },
  { feature: 'Negative Pressure', description: 'Entire zone maintained below atmospheric pressure' },
  { feature: 'HEPA Filtration', description: '99.97% dust collection efficiency' },
  { feature: 'H2 Detection', description: 'Continuous monitoring with automatic shutdown' },
  { feature: 'Fire Suppression', description: 'Dry chemical and water mist systems' },
  { feature: '5-Ton Bridge Cranes', description: 'Safe material handling throughout zone' },
];

export default function ZoneA() {
  const [expandedInfo, setExpandedInfo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
    }
  }, []);

  return (
    <>
      <PageHeader
        section="FACILITY // ZONE A"
        title="ZONE A"
        highlight="RECYCLING"
        description="28,000 SF negative pressure environment for safe lithium-ion battery processing."
        image="/recycling-area.webp"
      />

      {/* Zone Stats */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '28,000', unit: 'SF', label: 'Area' },
              { value: '5', unit: 'TON', label: 'Bridge Cranes' },
              { value: '99.97', unit: '%', label: 'HEPA Efficiency' },
              { value: 'N2', unit: '', label: 'Atmosphere' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border border-neon/20"
              >
                <div className="font-mono text-3xl text-neon">
                  {stat.value}<span className="text-lg">{stat.unit}</span>
                </div>
                <div className="font-mono text-xs text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              PROCESS <span className="text-neon">FLOW</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neon/20 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { step: 'INTAKE', desc: 'Receive & classify EoL batteries' },
                { step: 'DISCHARGE', desc: 'Safe voltage depletion to <1V' },
                { step: 'SHRED', desc: 'N2 atmosphere size reduction' },
                { step: 'SEPARATE', desc: 'Magnetic & optical sorting' },
                { step: 'PACKAGE', desc: 'Black mass sealed for transport' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-neon flex items-center justify-center font-mono text-neon z-10">
                    {index + 1}
                  </div>
                  <div className="font-mono text-xs text-white mt-2">{item.step}</div>
                  <div className="font-mono text-[10px] text-slate-400 mt-1 text-center max-w-[100px]">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processing Video */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// LIVE OPERATIONS</div>
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              PROCESSING <span className="text-neon">IN ACTION</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-neon/20 to-cyan-500/20 blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative overflow-hidden border border-slate-700">
              <video
                ref={videoRef}
                src="/images/processing-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="w-full h-auto pointer-events-none"
                onLoadedData={(e) => {
                  const video = e.currentTarget;
                  video.muted = true;
                  video.volume = 0;
                }}
              />
              {/* Watermark cover */}
              <div className="absolute bottom-0 right-0 w-32 h-16 bg-slate-950" />
              <div className="absolute bottom-0 right-0 w-32 h-16 bg-gradient-to-r from-neon/10 to-neon/5 border-t border-l border-neon/30" />
              <div className="absolute bottom-3 right-3 font-mono text-xs text-neon font-bold tracking-wider">Z1 RECYCLING</div>
            </div>
          </motion.div>
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
              EQUIPMENT <span className="text-neon">MANIFEST</span>
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
          />
        </div>
      </section>

      {/* How Shredding Works - Expandable */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-neon/30 p-8"
          >
            <button
              onClick={() => setExpandedInfo(expandedInfo === 'shredding' ? null : 'shredding')}
              className="w-full flex items-center justify-between"
              data-hover
            >
              <h3 className="font-mono text-xl text-neon">HOW SHREDDING WORKS</h3>
              <motion.span
                animate={{ rotate: expandedInfo === 'shredding' ? 45 : 0 }}
                className="text-2xl text-neon"
              >
                +
              </motion.span>
            </button>

            {expandedInfo === 'shredding' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="mt-6 text-muted space-y-4"
              >
                <p>
                  The primary shredder uses dual counter-rotating shafts with hardened steel cutters 
                  to reduce battery modules to 4-6 inch pieces. This occurs under a nitrogen-rich 
                  atmosphere to prevent thermal runaway.
                </p>
                <p>
                  Key safety features include continuous hydrogen monitoring, automatic nitrogen 
                  injection, and explosion-proof construction. The system processes batteries 
                  that have been safely discharged to below 1V per cell.
                </p>
                <p>
                  Output material moves to the granulator for further size reduction before 
                  separation processes recover valuable materials including copper, aluminum, 
                  steel, and black mass (containing lithium, cobalt, nickel, and manganese).
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-orange-950/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              SAFETY <span className="text-amber">FEATURES</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-amber/30 p-6"
              >
                <div className="font-mono text-amber mb-2">{item.feature}</div>
                <div className="text-muted text-sm">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
