import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  name: string;
  color: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    name: 'GENERAL',
    color: '#00ff88',
    items: [
      {
        question: 'What is Z1 Recycling Center?',
        answer: 'Z1 Recycling Center is a 60,000 SF state-of-the-art facility in Durant, Oklahoma dedicated to lithium-ion battery recycling and sodium-ion battery research and development. We recover valuable materials from end-of-life batteries and use them to manufacture next-generation energy storage solutions.',
      },
      {
        question: 'Where is the facility located?',
        answer: 'The facility is located in Bryan County, Durant, Oklahoma (coordinates: LAT 33.9937, LONG -96.3706). Durant was selected for its proximity to major transportation routes, favorable business climate, and skilled workforce.',
      },
      {
        question: 'When will the facility be operational?',
        answer: 'We are in the pre-development phase with construction expected to begin in Q3 2026. Full operations are targeted for Q2 2027, with initial capacity of processing 5,000 tons of batteries annually.',
      },
    ],
  },
  {
    name: 'RECYCLING PROCESS',
    color: '#00ff88',
    items: [
      {
        question: 'What types of batteries do you recycle?',
        answer: 'We primarily recycle lithium-ion batteries from electric vehicles, consumer electronics, and grid storage systems. This includes NMC (Nickel Manganese Cobalt), NCA (Nickel Cobalt Aluminum), and LFP (Lithium Iron Phosphate) chemistries.',
      },
      {
        question: 'What is Black Mass?',
        answer: 'Black mass is the fine powder remaining after batteries are shredded and the metals (steel, aluminum, copper) are separated. It contains the valuable cathode and anode materials including lithium, cobalt, nickel, manganese, and graphite. This material is sold to hydrometallurgical refiners who extract individual metals.',
      },
      {
        question: 'How is the process safe with lithium fires?',
        answer: 'Safety is our top priority. Batteries are fully discharged before processing using brine or resistive discharge. Shredding occurs under nitrogen atmosphere to prevent thermal runaway. We maintain continuous hydrogen monitoring, have HEPA filtration (99.97%), and both dry chemical and water mist fire suppression systems.',
      },
      {
        question: 'What happens to the recovered materials?',
        answer: 'Copper and aluminum are sold as high-purity scrap to metal recyclers. Steel goes to the scrap market. Black mass is sold to specialized refiners who extract lithium, cobalt, nickel, and manganese for use in new battery production, creating a true circular economy.',
      },
    ],
  },
  {
    name: 'MANUFACTURING',
    color: '#00aaff',
    items: [
      {
        question: 'What are Sodium-ion batteries?',
        answer: 'Sodium-ion batteries are rechargeable batteries that use sodium ions (Na+) instead of lithium ions (Li+) as the charge carrier. They offer similar performance to lithium-ion for many applications but use abundant, low-cost sodium instead of scarce lithium.',
      },
      {
        question: 'Why Sodium instead of Lithium?',
        answer: 'Sodium is 1,000 times more abundant than lithium and can be extracted from seawater. Sodium-ion batteries can use aluminum current collectors for both electrodes (instead of copper), reducing cost by 30%. They also perform better in extreme temperatures and can be discharged to 0V for safe shipping.',
      },
      {
        question: 'What is a Dry Room?',
        answer: 'A dry room is an ultra-low humidity environment essential for battery manufacturing. Our 10,000 SF dry room maintains a dew point of -40C and humidity below 1% RH. This prevents moisture from degrading electrolyte and electrode materials during cell assembly.',
      },
    ],
  },
  {
    name: 'ENVIRONMENTAL',
    color: '#22c55e',
    items: [
      {
        question: 'What is Zero Liquid Discharge (ZLD)?',
        answer: 'Zero Liquid Discharge means we process all wastewater on-site and discharge nothing to sewers or surface water. Our MVR (Mechanical Vapor Recompression) evaporator recovers 95% of water for reuse. The remaining concentrated solids are hauled off for proper disposal.',
      },
      {
        question: 'What permits are required?',
        answer: 'We require EPA Generator ID for hazardous waste, ODEQ air quality permits, local building and zoning permits, and stormwater management approval. Because of our ZLD system, we do NOT require an OPDES wastewater discharge permit or municipal sewer agreements.',
      },
      {
        question: 'How does this support circular economy?',
        answer: 'Our facility creates a closed loop: end-of-life batteries are recycled in Zone A, recovered materials are processed, and these materials can feed directly into new battery production in Zone C. This reduces mining demand, lowers carbon footprint by 90%, and keeps valuable materials in productive use.',
      },
    ],
  },
  {
    name: 'BUSINESS',
    color: '#ffb700',
    items: [
      {
        question: 'How can I partner with Z1?',
        answer: 'We welcome partnerships with battery manufacturers, EV companies, recycling networks, and investors. Please contact us through our contact form or reach out directly to discuss collaboration opportunities.',
      },
      {
        question: 'Do you accept batteries for recycling?',
        answer: 'Once operational, yes. We will accept batteries from OEMs, fleet operators, recycling companies, and certified collection points. Batteries must be properly packaged per DOT regulations. Contact us to be added to our future supplier list.',
      },
      {
        question: 'What are your certifications?',
        answer: 'We are pursuing R2 (Responsible Recycling) and ISO 14001 (Environmental Management) certifications. Our facility will meet or exceed all EPA, OSHA, and state environmental requirements. We will also comply with upcoming EU Battery Regulation requirements for North American facilities serving European customers.',
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>(faqData[0].name);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const currentCategory = faqData.find((c) => c.name === activeCategory);

  return (
    <>
      <PageHeader
        section="ABOUT // FAQ"
        title="FREQUENTLY ASKED"
        highlight="QUESTIONS"
        description="Everything you need to know about Z1 Recycling Center."
      />

      {/* Category Tabs */}
      <section className="py-8 bg-slate-900/30 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {faqData.map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  setActiveCategory(category.name);
                  setOpenQuestion(null);
                }}
                className={`px-4 py-2 font-mono text-xs border transition-all ${
                  activeCategory === category.name
                    ? 'text-slate-950 border-current'
                    : 'text-muted border-gray-700 hover:border-white hover:text-white'
                }`}
                style={{
                  backgroundColor: activeCategory === category.name ? category.color : 'transparent',
                  borderColor: activeCategory === category.name ? category.color : undefined,
                }}
                data-hover
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {currentCategory?.items.map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-gray-800 hover:border-gray-700 transition-colors"
                  style={{
                    borderColor: openQuestion === item.question ? currentCategory.color + '50' : undefined,
                  }}
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === item.question ? null : item.question)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                    data-hover
                  >
                    <span className="font-mono text-white group-hover:text-neon transition-colors pr-4">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openQuestion === item.question ? 45 : 0 }}
                      className="text-2xl shrink-0"
                      style={{ color: currentCategory?.color }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openQuestion === item.question && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-muted border-t border-gray-800">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-mono text-xl text-white mb-4">STILL HAVE QUESTIONS?</h3>
          <p className="text-muted mb-6">
            Our team is ready to help with any additional inquiries.
          </p>
          <a
            href="/about/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neon text-neon font-mono font-bold hover:bg-neon hover:text-slate-950 transition-all"
            data-hover
          >
            CONTACT US
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
