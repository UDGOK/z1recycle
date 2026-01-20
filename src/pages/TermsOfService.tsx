import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-mono text-4xl font-bold text-neon glow-text mb-4">
            TERMS OF SERVICE
          </h1>
          <p className="text-muted font-mono text-sm mb-12">
            Effective Date: January 20, 2026
          </p>

          <div className="space-y-10 text-gray-300">
            <section>
              <h2 className="font-mono text-xl text-neon mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using the website of Z1 Recycling Center (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Site.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-xl text-neon mb-4">2. Nature of the Site; Non-Binding Information</h2>
              <p className="leading-relaxed mb-4">
                The Site is a portfolio and informational platform regarding Z1 Recycling Center's proposed facility ("the Facility"). The Facility is currently in the Permitting Phase (with operations expected Q2 2027).
              </p>
              <p className="leading-relaxed mb-4">
                <span className="text-neon font-mono">Forward-Looking Statements:</span> Descriptions of our technology (e.g., Hydrometallurgy, AI-Optimized Sorting), equipment specifications, and recovery rates (e.g., Cathode Grade Purity) are based on engineering projections and pilot data. They are forward-looking and do not constitute a guarantee of operational performance.
              </p>
              <p className="leading-relaxed">
                <span className="text-neon font-mono">No Offers:</span> Nothing contained on this Site constitutes an offer to sell securities, a binding offer to purchase materials, or a guarantee of recycling capacity. All commercial relationships are subject to the execution of definitive written agreements.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-xl text-neon mb-4">3. Intellectual Property Rights</h2>
              <p className="leading-relaxed mb-4">
                The content, layout, design, data, databases, and graphics on this Site are protected by copyright, trade dress, patent, and trademark laws. Specifically:
              </p>
              <p className="leading-relaxed mb-4">
                <span className="text-neon font-mono">Process Specifications:</span> The detailed descriptions of our "Zone A" (Recycling), "Zone B" (Utility Spine), and "Zone C" (Manufacturing) processes, including equipment manifests and environmental controls, are proprietary to Z1 Recycling Center.
              </p>
              <p className="leading-relaxed">
                <span className="text-neon font-mono">Restricted Use:</span> You may not reproduce, republish, download, post, transmit, modify, or distribute any material from this Site without our prior written consent, nor may you use any content for commercial purposes or to gain competitive advantage in the critical materials or battery recycling sectors.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-xl text-neon mb-4">4. User Conduct</h2>
              <p className="leading-relaxed mb-4">As a user of this Site, you agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted ml-4">
                <li>Use the Site for any illegal purpose or to solicit others to perform or participate in any unlawful acts.</li>
                <li>Attempt to gain unauthorized access to any portion of the Site, or any other accounts, computer systems, or networks connected to the Site.</li>
                <li>Interfere with or disrupt the Site or servers or networks connected to the Site.</li>
                <li>Harvest or collect email addresses or other contact information from the Site for the purpose of sending unsolicited commercial emails.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-mono text-xl text-neon mb-4">5. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                In no event shall Z1 Recycling Center, its officers, directors, employees, or agents, be liable to you for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site. This includes, without limitation, damages for loss of profits, goodwill, use, data, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted ml-4">
                <li>Your use or inability to use the Site;</li>
                <li>Reliance on any information or operational status provided on the Site (noting that construction timelines and permitting schedules are subject to change);</li>
                <li>Any bugs, viruses, or trojan horses that may be transmitted to or through our Site by any third party.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-mono text-xl text-neon mb-4">6. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless Z1 Recycling Center and its affiliates, officers, directors, agents, and employees from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Site; b) your violation of any term of these Terms of Service; or c) your violation of any third party's rights.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-xl text-neon mb-4">7. Governing Law and Jurisdiction</h2>
              <p className="leading-relaxed">
                These Terms of Service and any separate agreement whereby we provide you Services shall be governed by and construed in accordance with the laws of the State of Oklahoma, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-xl text-neon mb-4">8. Environmental & Safety Disclaimer</h2>
              <p className="leading-relaxed">
                The Site contains descriptions of safety protocols (e.g., H2 detection, fire suppression, HEPA filtration). These descriptions are for informational purposes regarding our design specifications and do not imply that the Site is a safe environment for physical visitation without prior authorization. The Facility is an active construction and pre-commissioning site; unauthorized entry is prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-xl text-neon mb-4">9. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                Questions regarding the Terms of Service should be sent to:
              </p>
              <div className="bg-slate-900 border border-neon/20 rounded-lg p-6 font-mono text-sm">
                <p className="text-neon mb-2">Email: <a href="mailto:info@z1recycling.com" className="text-white hover:text-neon transition-colors">info@z1recycling.com</a></p>
                <p className="text-neon">Address: <span className="text-white">8460 US 70, Mead OK 73449</span></p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
