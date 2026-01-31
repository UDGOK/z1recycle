import { motion } from 'framer-motion';
import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const investmentHighlights = [
  { value: 95, suffix: 'B+', label: 'TAM by 2035', prefix: '$' },
  { value: 98, suffix: '%', label: 'Metal Recovery Rate' },
  { value: 10000, suffix: ' tons', label: 'Annual Capacity' },
  { value: 0, suffix: '', label: 'Liquid Discharge', isZero: true },
];

const revenueStreams = [
  {
    name: 'Black Mass Sales',
    description: 'High-purity cathode material (>65% NMC content) sold to pCAM manufacturers and direct recyclers.',
    icon: '01',
    margin: 'High',
  },
  {
    name: 'Battery-Grade Metal Sulfates',
    description: 'NiSO₄ (22.3% Ni), CoSO₄ (21.0% Co), MnSO₄ (32.0% Mn) meeting cathode precursor specifications.',
    icon: '02',
    margin: 'High',
  },
  {
    name: 'Lithium Carbonate',
    description: 'Battery-grade Li₂CO₃ (99.5% purity) from our patented pre-lithium extraction process.',
    icon: '03',
    margin: 'Premium',
  },
  {
    name: 'Processing & Tolling Fees',
    description: 'Fee-for-service processing for OEMs, gigafactories, and battery collection networks.',
    icon: '04',
    margin: 'Recurring',
  },
];

const competitiveAdvantages = [
  {
    title: 'PRE-LITHIUM EXTRACTION',
    description: 'Patented aqueous process recovers 90-98% of lithium before downstream processing—unique in North America.',
    differentiator: 'Only US operator with this capability',
  },
  {
    title: 'NON-DISCHARGE PROCESSING',
    description: 'Direct-feed shredding eliminates 24-72 hour discharge bottleneck while maintaining safety via inert atmosphere.',
    differentiator: '3x faster throughput vs. competitors',
  },
  {
    title: 'ZERO LIQUID DISCHARGE',
    description: 'Closed-loop hydrometallurgy recycles 98% of process water. No wastewater permits required.',
    differentiator: 'Lowest environmental footprint',
  },
  {
    title: 'IRA / FEOC COMPLIANT',
    description: 'Domestic processing with full chain-of-custody documentation supports Section 30D tax credit eligibility.',
    differentiator: 'Critical for OEM partnerships',
  },
];

const milestones = [
  { year: '2024', milestone: 'Site Acquisition & Engineering', status: 'completed' },
  { year: '2025', milestone: 'Facility Construction', status: 'in-progress' },
  { year: '2025', milestone: 'Equipment Installation', status: 'upcoming' },
  { year: '2026', milestone: 'Phase 1 Operations (5,000 tons/yr)', status: 'upcoming' },
  { year: '2027', milestone: 'Phase 2 Expansion (10,000 tons/yr)', status: 'upcoming' },
  { year: '2028', milestone: 'Additional Lines & Direct Recycling', status: 'planned' },
];

const investorTypes = [
  'Venture Capital',
  'Private Equity',
  'Family Office',
  'Strategic / Corporate',
  'Infrastructure Fund',
  'Impact / ESG Fund',
  'Individual Accredited Investor',
  'Other',
];

const checkSizes = [
  'Under $1M',
  '$1M - $5M',
  '$5M - $10M',
  '$10M - $25M',
  '$25M - $50M',
  '$50M+',
  'Prefer not to disclose',
];

const investmentFocus = [
  'Cleantech / Climate',
  'Advanced Manufacturing',
  'Critical Minerals / Mining',
  'Infrastructure',
  'Circular Economy',
  'Energy Storage',
  'General / Opportunistic',
];

export default function InvestorRelations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    investorType: '',
    checkSize: '',
    focus: '',
    accredited: '',
    message: '',
    source: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend/CRM
    console.log('Investor inquiry:', formData);
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        section="INVESTOR RELATIONS"
        title="POWERING THE"
        highlight="CIRCULAR BATTERY ECONOMY"
        description="Strategic investment opportunity in America's critical mineral independence."
      />

      {/* Investment Highlights */}
      <section className="py-12 bg-gradient-to-r from-slate-900 via-emerald-950/20 to-slate-900 border-y border-neon/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {investmentHighlights.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-mono text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-neon to-cyan-400">
                  {metric.isZero ? (
                    <span>ZERO</span>
                  ) : (
                    <>
                      {metric.prefix && <span>{metric.prefix}</span>}
                      <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                    </>
                  )}
                </div>
                <div className="font-mono text-xs text-slate-400 mt-1">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// INVESTMENT THESIS</div>
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              WHY <span className="text-neon">Z1 RECYCLING</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-neon/30 p-8"
            >
              <h3 className="font-mono text-lg text-neon mb-4">MARKET TAILWINDS</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-neon mt-1">→</span>
                  <span>EV sales projected to reach 45M units/year by 2035, driving massive battery waste stream</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon mt-1">→</span>
                  <span>IRA Section 30D creates $7,500/vehicle incentive for domestic critical mineral sourcing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon mt-1">→</span>
                  <span>FEOC restrictions exclude Chinese-processed materials from US supply chain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon mt-1">→</span>
                  <span>DOE targeting 90% domestic battery recycling by 2030</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-neon/30 p-8"
            >
              <h3 className="font-mono text-lg text-neon mb-4">STRATEGIC POSITION</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-neon mt-1">→</span>
                  <span>Central US location minimizes logistics costs to major battery plants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon mt-1">→</span>
                  <span>Proprietary technology licensed from proven commercial operator</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon mt-1">→</span>
                  <span>First-mover advantage in FEOC-compliant domestic processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon mt-1">→</span>
                  <span>Scalable platform with clear expansion roadmap</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// BUSINESS MODEL</div>
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              REVENUE <span className="text-neon">STREAMS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={stream.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-neon/20 p-6 hover:border-neon/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full border-2 border-neon flex items-center justify-center font-mono text-lg text-neon mb-4">
                  {stream.icon}
                </div>
                <h3 className="font-mono text-white mb-2">{stream.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{stream.description}</p>
                <div className="font-mono text-xs">
                  <span className="text-slate-500">Margin Profile: </span>
                  <span className="text-neon">{stream.margin}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// COMPETITIVE MOAT</div>
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              TECHNOLOGY <span className="text-neon">DIFFERENTIATION</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-neon/20 p-6"
              >
                <h3 className="font-mono text-neon mb-2">{advantage.title}</h3>
                <p className="text-slate-300 mb-4">{advantage.description}</p>
                <div className="inline-block bg-neon/10 border border-neon/30 px-3 py-1">
                  <span className="font-mono text-xs text-neon">{advantage.differentiator}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// EXECUTION ROADMAP</div>
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              KEY <span className="text-neon">MILESTONES</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neon/30 transform md:-translate-x-1/2" />
            
            <div className="space-y-8">
              {milestones.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.milestone}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                    <div className="font-mono text-neon text-lg">{item.year}</div>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 z-10 ${
                    item.status === 'completed' 
                      ? 'bg-neon border-neon' 
                      : item.status === 'in-progress'
                      ? 'bg-neon/20 border-neon animate-pulse'
                      : 'bg-slate-900 border-neon/50'
                  }`}>
                    {item.status === 'completed' && (
                      <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>

                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="font-mono text-neon text-sm md:hidden mb-1">{item.year}</div>
                    <div className="font-mono text-white">{item.milestone}</div>
                    <div className={`font-mono text-xs mt-1 ${
                      item.status === 'completed' ? 'text-neon' : 
                      item.status === 'in-progress' ? 'text-cyan-400' : 'text-slate-500'
                    }`}>
                      {item.status.replace('-', ' ').toUpperCase()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investor Inquiry Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// CONNECT WITH US</div>
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              INVESTOR <span className="text-neon">INQUIRY</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Interested in learning more about investment opportunities? Complete the form below and a member of our team will be in touch.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-neon p-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-neon/20 border-2 border-neon flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-mono text-xl text-white mb-2">INQUIRY RECEIVED</h3>
              <p className="text-slate-400">
                Thank you for your interest in Z1 Recycling. A member of our investor relations team will contact you within 2 business days.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="border border-neon/30 p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-2">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-neon/30 px-4 py-3 font-mono text-white focus:border-neon focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-2">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-neon/30 px-4 py-3 font-mono text-white focus:border-neon focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-mono text-xs text-slate-400 mb-2">ORGANIZATION / FIRM *</label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-slate-900 border border-neon/30 px-4 py-3 font-mono text-white focus:border-neon focus:outline-none transition-colors"
                  placeholder="Acme Capital Partners"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-2">INVESTOR TYPE *</label>
                  <select
                    required
                    value={formData.investorType}
                    onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                    className="w-full bg-slate-900 border border-neon/30 px-4 py-3 font-mono text-white focus:border-neon focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select type...</option>
                    {investorTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-2">TYPICAL CHECK SIZE</label>
                  <select
                    value={formData.checkSize}
                    onChange={(e) => setFormData({ ...formData, checkSize: e.target.value })}
                    className="w-full bg-slate-900 border border-neon/30 px-4 py-3 font-mono text-white focus:border-neon focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select range...</option>
                    {checkSizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-2">INVESTMENT FOCUS</label>
                  <select
                    value={formData.focus}
                    onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                    className="w-full bg-slate-900 border border-neon/30 px-4 py-3 font-mono text-white focus:border-neon focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select focus area...</option>
                    {investmentFocus.map((focus) => (
                      <option key={focus} value={focus}>{focus}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-2">ACCREDITED INVESTOR STATUS *</label>
                  <select
                    required
                    value={formData.accredited}
                    onChange={(e) => setFormData({ ...formData, accredited: e.target.value })}
                    className="w-full bg-slate-900 border border-neon/30 px-4 py-3 font-mono text-white focus:border-neon focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select status...</option>
                    <option value="yes">Yes, I am an accredited investor</option>
                    <option value="qualified">Qualified Institutional Buyer (QIB)</option>
                    <option value="no">No / Not applicable</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-mono text-xs text-slate-400 mb-2">HOW DID YOU HEAR ABOUT US?</label>
                <input
                  type="text"
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  className="w-full bg-slate-900 border border-neon/30 px-4 py-3 font-mono text-white focus:border-neon focus:outline-none transition-colors"
                  placeholder="Conference, referral, news article, etc."
                />
              </div>

              <div className="mb-8">
                <label className="block font-mono text-xs text-slate-400 mb-2">MESSAGE / AREAS OF INTEREST</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-slate-900 border border-neon/30 px-4 py-3 font-mono text-white focus:border-neon focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your investment interests or any specific questions..."
                />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-xs font-mono">
                  By submitting, you agree to our confidentiality terms.
                </p>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-neon text-slate-950 font-mono font-bold hover:bg-neon/90 transition-colors"
                  data-hover
                >
                  SUBMIT INQUIRY →
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-12 bg-gradient-to-r from-slate-900 via-emerald-950/20 to-slate-900 border-t border-neon/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-mono text-slate-400 mb-2">For media inquiries or general questions</div>
          <a 
            href="mailto:investors@z1recycling.com" 
            className="font-mono text-neon hover:underline"
          >
            investors@z1recycling.com
          </a>
        </div>
      </section>
    </>
  );
}
