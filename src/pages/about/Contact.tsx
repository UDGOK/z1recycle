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
                <span className="font-mono text-xs text-muted ml-4">secure_form.sys</span>
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

              {/* Interactive Map */}
              <div className="border border-neon/20 bg-slate-900/50 overflow-hidden group">
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-neon/20">
                  <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                  <span className="font-mono text-xs text-muted">// FACILITY_LOCATION</span>
                  <a 
                    href="https://www.google.com/maps/dir//8460+US-70,+Mead,+OK+73449" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-auto font-mono text-xs text-neon hover:underline"
                  >
                    GET DIRECTIONS →
                  </a>
                </div>
                <div className="relative aspect-video">
                  {/* Dark overlay for theme matching */}
                  <div className="absolute inset-0 pointer-events-none z-10 mix-blend-multiply bg-slate-900/30" />
                  <div className="absolute inset-0 pointer-events-none z-10 border-2 border-neon/20" />
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon z-20" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon z-20" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon z-20" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon z-20" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.5!2d-96.5122!3d33.9967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c85a4d8c92fb1%3A0x0!2s8460%20US-70%2C%20Mead%2C%20OK%2073449!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) hue-rotate(180deg) contrast(0.9) brightness(0.8)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Z1 Recycling Facility Location"
                    className="absolute inset-0"
                  />
                  {/* Scan line effect */}
                  <div className="absolute inset-0 pointer-events-none z-10 opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,136,0.03)_2px,rgba(0,255,136,0.03)_4px)]" />
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
