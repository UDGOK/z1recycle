import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-amber tracking-widest mb-2">
            // SECTION_06
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">
            ESTABLISH <span className="text-neon">CONTACT</span>
          </h2>
          <p className="text-muted max-w-2xl">
            Interested in partnerships, investment, or learning more about our technology?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
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
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="terminal-input w-full"
                  placeholder="Partnership / Investment / General"
                  required
                />
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
            className="space-y-8"
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

            {/* Status */}
            <div className="border border-amber/30 p-6 bg-amber/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-amber rounded-full animate-pulse" />
                <span className="font-mono text-amber">SYSTEM STATUS: PERMITTING PHASE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hazard tape footer */}
      <div className="absolute bottom-0 left-0 right-0 h-2 hazard-tape" />
    </section>
  );
}
