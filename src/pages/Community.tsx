import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';

const commitments = [
  {
    id: 1,
    category: 'JUSTICE40',
    title: 'DISADVANTAGED COMMUNITY INVESTMENT',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: 'Z1 Recycling is located in a Justice40-priority region in Bryan County, Oklahoma. We are committed to directing 40%+ of hiring and economic benefits to historically underserved census tracts.',
    metrics: [
      { value: '40%+', label: 'Local Hiring Target' },
      { value: 'Bryan County', label: 'Priority Region' },
      { value: 'DAC', label: 'Designated Area' },
    ],
  },
  {
    id: 2,
    category: 'ENERGY TRANSITION',
    title: 'WORKFORCE DEVELOPMENT',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: 'As an Energy Transition Anchor in Oklahoma, we are actively retraining workers from legacy oil, gas, and fossil fuel industries for careers in the clean energy economy.',
    metrics: [
      { value: 'O&G', label: 'Worker Transition' },
      { value: 'Paid', label: 'Training Programs' },
      { value: 'Career', label: 'Pathways' },
    ],
  },
  {
    id: 3,
    category: 'GOOD JOBS',
    title: 'FAIR WAGES & BENEFITS',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'All positions at Z1 Recycling offer prevailing wages, comprehensive healthcare, retirement benefits, and opportunities for advancement. We maintain union neutrality and respect workers\' rights to organize.',
    metrics: [
      { value: 'Prevailing', label: 'Wage Standard' },
      { value: 'Full', label: 'Benefits Package' },
      { value: 'Neutral', label: 'Union Stance' },
    ],
  },
  {
    id: 4,
    category: 'DEIA',
    title: 'DIVERSITY & INCLUSION',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Our Diversity, Equity, Inclusion, and Accessibility (DEIA) program ensures equal opportunity employment and actively recruits from underrepresented communities in STEM fields.',
    metrics: [
      { value: 'Equal', label: 'Opportunity' },
      { value: 'Accessible', label: 'Facilities' },
      { value: 'Inclusive', label: 'Culture' },
    ],
  },
];

const tribalPartnership = {
  title: 'CHOCTAW NATION PARTNERSHIP',
  description: 'Z1 Recycling operates within the jurisdictional territory of the Choctaw Nation of Oklahoma. We are committed to meaningful engagement with tribal leadership and exploring partnership opportunities that bring mutual benefit to our operations and the Choctaw community.',
  commitments: [
    'Tribal employment preferences',
    'Supplier diversity programs',
    'Community investment initiatives',
    'Cultural respect and acknowledgment',
  ],
};

const communityEngagement = [
  {
    title: 'Public Safety Forums',
    description: 'Quarterly town halls with Mead residents to discuss facility operations, safety protocols, and environmental monitoring.',
  },
  {
    title: 'School STEM Programs',
    description: 'Educational partnerships with Bryan County schools for hands-on learning in materials science and clean energy.',
  },
  {
    title: 'Environmental Transparency',
    description: 'Real-time emissions monitoring data available to the public. Annual third-party environmental audits.',
  },
  {
    title: 'Local Supplier Network',
    description: 'Preferred procurement from Oklahoma-based suppliers and service providers to maximize regional economic impact.',
  },
];

export default function Community() {
  return (
    <>
      <PageHeader
        section="COMMUNITY"
        title="COMMUNITY BENEFITS &"
        highlight="WORKFORCE COMMITMENT"
        description="Building critical infrastructure means building community. Our Community Benefits Plan ensures that the economic and environmental advantages of Z1 Recycling reach those who need them most."
      />

      {/* Justice40 Banner */}
      <section className="py-8 bg-gradient-to-r from-emerald-950/50 via-slate-950 to-cyan-950/50 border-y border-neon/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-neon rounded-full animate-pulse shadow-[0_0_10px_#00ff88]" />
              <span className="font-mono text-sm text-neon">JUSTICE40 PRIORITY REGION</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-700" />
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
              <span className="font-mono text-sm text-cyan-400">ENERGY COMMUNITY DESIGNATION</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-700" />
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse shadow-[0_0_10px_#fbbf24]" />
              <span className="font-mono text-sm text-amber-400">TRIBAL TERRITORY ACKNOWLEDGMENT</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// COMMUNITY BENEFITS PLAN</div>
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
              OUR <span className="text-neon">COMMITMENTS</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Aligned with DOE requirements and our values, these commitments form the foundation of our community partnership.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {commitments.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative border border-slate-700 hover:border-neon/50 p-8 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-neon group-hover:drop-shadow-[0_0_20px_rgba(0,255,136,0.5)] transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-mono text-xs text-cyan-400 tracking-widest mb-1">{item.category}</div>
                      <h3 className="font-mono text-lg text-white">{item.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-6">{item.description}</p>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                    {item.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="font-mono text-lg text-neon">{metric.value}</div>
                        <div className="font-mono text-[10px] text-slate-500 uppercase">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tribal Partnership */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="border border-amber-500/30 p-8 md:p-12 relative overflow-hidden">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-amber-500/50" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-amber-500/50" />
              
              <div className="text-center mb-8">
                <div className="font-mono text-xs text-amber-400 tracking-widest mb-2">// TRIBAL ENGAGEMENT</div>
                <h2 className="font-mono text-2xl md:text-3xl font-bold text-white mb-4">
                  {tribalPartnership.title}
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  {tribalPartnership.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {tribalPartnership.commitments.map((commitment, index) => (
                  <motion.div
                    key={commitment}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 border border-amber-500/20 bg-amber-500/5"
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                    <span className="font-mono text-sm text-slate-300">{commitment}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// LOCAL ENGAGEMENT</div>
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
              COMMUNITY <span className="text-neon">PROGRAMS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {communityEngagement.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-slate-700 hover:border-neon/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-neon/50 flex items-center justify-center text-neon font-mono text-sm group-hover:bg-neon/10 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-mono text-white mb-2">{program.title}</h3>
                    <p className="text-slate-400 text-sm">{program.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-emerald-950/10 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-6">
              PARTNER WITH <span className="text-neon">Z1 RECYCLING</span>
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Whether you're a community organization, educational institution, tribal entity, or potential workforce partner, we want to hear from you.
            </p>
            <Link
              to="/about/contact"
              className="inline-block px-8 py-4 border-2 border-neon text-neon font-mono font-bold uppercase tracking-wider hover:bg-neon hover:text-slate-950 transition-all"
            >
              GET IN TOUCH
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
