import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <PageHeader
        section="ABOUT // CONTACT"
        title="ESTABLISH"
        highlight="CONTACT"
        description="Partner with us to build America's critical materials infrastructure."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Terminal Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 border border-neon/30 rounded-lg overflow-hidden"
            >
              {/* Terminal header */}
              <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-neon/20">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="font-mono text-xs text-muted ml-4">contact@z1recycling.terminal</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="font-mono text-xs text-neon block mb-2">{'>'} NAME_</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="terminal-input w-full"
                    placeholder="Enter your name..."
                    required
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-neon block mb-2">{'>'} EMAIL_</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="terminal-input w-full"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-neon block mb-2">{'>'} SUBJECT_</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="terminal-input w-full"
                    required
                  >
                    <option value="">Select a topic...</option>
                    <option value="strategic">Strategic Partnership</option>
                    <option value="offtake">Offtake Agreement</option>
                    <option value="supply">Battery Supply</option>
                    <option value="technology">Technology Licensing</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="employment">Employment</option>
                    <option value="media">Media/Press</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs text-neon block mb-2">{'>'} MESSAGE_</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="terminal-input w-full h-32 resize-none"
                    placeholder="Type your message..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-glitch w-full border-2 border-neon text-neon font-mono font-bold py-3 px-6 hover:bg-neon hover:text-slate-950 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-hover
                >
                  {'>'} TRANSMIT_MESSAGE
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-mono text-neon text-sm text-center"
                  >
                    [SUCCESS] Message transmitted successfully.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Location */}
              <div className="border border-neon/20 p-6">
                <div className="font-mono text-xs text-amber mb-2">// LOCATION</div>
                <div className="font-mono text-xl text-white mb-2">8460 US 70, Mead OK 73449</div>
                <div className="text-muted text-sm">
                  Bryan County Industrial District<br />
                  60,000 SF Purpose-Built Facility<br />
                  LAT 33.9967 / LONG -96.5122
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="border border-neon/20 p-6 bg-slate-900/50">
                <div className="font-mono text-xs text-muted mb-4">// MAP</div>
                <div className="aspect-video bg-slate-800 flex items-center justify-center border border-gray-700">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-muted mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="font-mono text-xs text-muted">Mead, OK 73449</div>
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div className="border border-neon/20 p-6">
                <div className="font-mono text-xs text-amber mb-4">// DEPARTMENTS</div>
                <div className="space-y-4">
                  {[
                    { dept: 'General Inquiries', email: 'info@z1recycling.com' },
                    { dept: 'Business Development', email: 'partnerships@z1recycling.com' },
                    { dept: 'Recycling Services', email: 'recycling@z1recycling.com' },
                    { dept: 'Careers', email: 'careers@z1recycling.com' },
                  ].map((item) => (
                    <div key={item.dept} className="flex justify-between items-center">
                      <span className="text-muted text-sm">{item.dept}</span>
                      <span className="font-mono text-xs text-neon">{item.email}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="border border-amber/30 p-6 bg-amber/5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber rounded-full animate-pulse" />
                  <span className="font-mono text-amber">SYSTEM STATUS: PERMITTING PHASE</span>
                </div>
                <p className="text-muted text-sm mt-2">
                  We are currently in pre-development. Operations expected to begin Q2 2027.
                </p>
              </div>

              {/* Specifications */}
              <div className="border border-neon/20 p-6">
                <div className="font-mono text-xs text-amber mb-4">// FACILITY_SPECS</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-mono text-2xl text-neon">60K</div>
                    <div className="font-mono text-xs text-muted">SQ FT</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl text-neon">2.5</div>
                    <div className="font-mono text-xs text-muted">MVA SERVICE</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl text-neon">32</div>
                    <div className="font-mono text-xs text-muted">FT CLEAR</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl text-neon">ZLD</div>
                    <div className="font-mono text-xs text-muted">DISCHARGE</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
