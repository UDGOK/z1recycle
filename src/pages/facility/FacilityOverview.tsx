import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';
import DataTable from '../../components/ui/DataTable';
import SEO from '../../components/SEO';

const zones = [
  { id: 'A', name: 'RECYCLING', sqft: '28,000', href: '/facility/zone-a', color: '#00ff88', x: 10, y: 15, w: 35, h: 70 },
  { id: 'B', name: 'UTILITY', sqft: '4,000', href: '/facility/zone-b', color: '#ffb700', x: 45, y: 15, w: 10, h: 70 },
  { id: 'C', name: 'MANUFACTURING', sqft: '28,000', href: '/facility/zone-c', color: '#00aaff', x: 55, y: 15, w: 35, h: 70 },
];

const specs = [
  { parameter: 'Total Area', specification: '60,000 SF' },
  { parameter: 'Dimensions', specification: "300' x 200'" },
  { parameter: 'Clear Height', specification: '32 feet' },
  { parameter: 'Structure', specification: 'Red iron steel, 1:12 pitch roof' },
  { parameter: 'Foundation', specification: '6" reinforced concrete slab' },
  { parameter: 'Main Service', specification: '2,500 kVA' },
  { parameter: 'Fire Rating', specification: '2-hour separation wall' },
];

export default function FacilityOverview() {
  const [activeZone, setActiveZone] = useState<typeof zones[0] | null>(null);

  return (
    <>
      <SEO
        title="Facility Overview - 60,000 SF Battery Recycling Plant"
        description="Z1 Recycling's 60,000 SF purpose-built facility in Bryan County, Oklahoma. Three zones: Recycling (28,000 SF), Utility (4,000 SF), Manufacturing (28,000 SF). 10,000 tons annual capacity."
        keywords="battery recycling facility, Oklahoma recycling plant, Bryan County facility, battery processing plant"
        canonical="/facility"
      />
      <PageHeader
        section="FACILITY"
        title="FACILITY"
        highlight="OVERVIEW"
        description="60,000 SF domestic critical materials infrastructure for complete battery lifecycle management."
        image="/facility-overview.webp"
      />

      {/* Interactive Isometric View */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              INTERACTIVE <span className="text-neon">BLUEPRINT</span>
            </h2>
            <p className="text-muted">Click on any zone to explore details.</p>
          </motion.div>

          <div className="relative">
            {/* Isometric Image with Hotspots */}
            <div className="relative bg-slate-900/50 border border-neon/20 rounded-lg overflow-hidden">
              <img 
                src="/isometric-overview.webp" 
                alt="Facility Overview" 
                loading="lazy"
                className="w-full h-auto opacity-90"
              />
              
              {/* Zone Hotspots */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {zones.map((zone) => (
                  <Link key={zone.id} to={zone.href}>
                    <motion.rect
                      x={zone.x}
                      y={zone.y}
                      width={zone.w}
                      height={zone.h}
                      fill={activeZone?.id === zone.id ? `${zone.color}30` : 'transparent'}
                      stroke={zone.color}
                      strokeWidth={activeZone?.id === zone.id ? 0.5 : 0.2}
                      strokeDasharray={activeZone?.id === zone.id ? '0' : '2 1'}
                      className="cursor-pointer transition-all"
                      onMouseEnter={() => setActiveZone(zone)}
                      onMouseLeave={() => setActiveZone(null)}
                      whileHover={{ filter: `drop-shadow(0 0 10px ${zone.color})` }}
                    />
                  </Link>
                ))}
              </svg>
            </div>

            {/* Zone Info Panel */}
            <AnimatePresence>
              {activeZone && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute top-4 right-4 bg-slate-950/95 border p-6 max-w-xs"
                  style={{ borderColor: activeZone.color, boxShadow: `0 0 20px ${activeZone.color}30` }}
                >
                  <div className="font-mono text-xs mb-2" style={{ color: activeZone.color }}>
                    ZONE {activeZone.id} // {activeZone.name}
                  </div>
                  <div className="font-mono text-2xl text-white mb-4">{activeZone.sqft} SF</div>
                  <Link
                    to={activeZone.href}
                    className="inline-flex items-center gap-2 font-mono text-sm hover:underline"
                    style={{ color: activeZone.color }}
                    data-hover
                  >
                    View Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              BUILDING <span className="text-neon">SPECIFICATIONS</span>
            </h2>
          </motion.div>

          <DataTable
            columns={[
              { key: 'parameter', header: 'PARAMETER', width: '40%' },
              { key: 'specification', header: 'SPECIFICATION' },
            ]}
            data={specs}
          />
        </div>
      </section>

      {/* Zone Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {zones.map((zone, index) => (
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={zone.href}
                  className="block p-8 border transition-all hover:scale-105"
                  style={{ borderColor: `${zone.color}50` }}
                  data-hover
                >
                  <div className="font-mono text-4xl font-bold mb-2" style={{ color: zone.color }}>
                    {zone.id}
                  </div>
                  <div className="font-mono text-xl text-white mb-2">{zone.name}</div>
                  <div className="text-muted">{zone.sqft} SF</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
