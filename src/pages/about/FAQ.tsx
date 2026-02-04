import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';

interface FAQItem {
  question: string;
  answer: string;
  keywords?: string[];
}

interface FAQCategory {
  name: string;
  color: string;
  icon: JSX.Element;
  items: FAQItem[];
}

// Category Icons
const icons = {
  general: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  blackMass: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  process: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  manufacturing: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  environmental: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  business: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const faqData: FAQCategory[] = [
  {
    name: 'GENERAL',
    color: '#00ff88',
    icon: icons.general,
    items: [
      {
        question: 'What is Z1 Recycling Center?',
        answer: 'Z1 Recycling Center is a 60,000 SF state-of-the-art facility in Mead, Oklahoma dedicated to lithium-ion battery recycling and sodium-ion battery research and development. We recover valuable materials from end-of-life batteries and use them to manufacture next-generation energy storage solutions.',
        keywords: ['facility', 'recycling', 'lithium', 'sodium', 'oklahoma'],
      },
      {
        question: 'Where is the facility located?',
        answer: 'The facility is located at 8460 US 70, Mead, Oklahoma 73449 (coordinates: LAT 33.9967, LONG -96.5122). This location was selected for its proximity to major transportation routes, favorable business climate, and skilled workforce.',
        keywords: ['location', 'address', 'oklahoma', 'mead'],
      },
      {
        question: 'When will the facility be operational?',
        answer: 'We are in the pre-development phase with construction expected to begin in Q3 2026. Full operations are targeted for Q2 2027, with initial capacity of processing 5,000 tons of batteries annually.',
        keywords: ['timeline', 'operational', 'construction', 'capacity'],
      },
    ],
  },
  {
    name: 'BLACK MASS',
    color: '#a855f7',
    icon: icons.blackMass,
    items: [
      {
        question: 'What is black mass and why is it valuable?',
        answer: 'Black mass is the fine powder remaining after batteries are shredded and the metals (steel, aluminum, copper) are separated. It contains valuable cathode and anode materials including lithium, cobalt, nickel, manganese, and graphite. This material is sold to hydrometallurgical refiners who extract individual metals for reuse in new battery production, making it a critical component of the circular economy.',
        keywords: ['black mass', 'powder', 'cathode', 'anode', 'metals', 'value'],
      },
      {
        question: 'Can batteries with attached circuit boards (PCBs) be recycled?',
        answer: 'Yes, batteries with PCBs can be recycled, but there are important considerations. PCBs introduce contaminants like tin and lead from solder, which can affect black mass purity and reduce its market value. Most professional recycling facilities either charge a processing fee for batteries with PCBs or have specialized mechanical separation equipment to handle them. For optimal recycling value, removing PCBs beforehand is recommended when dealing with large quantities.',
        keywords: ['pcb', 'circuit board', 'electronics', 'contaminants', 'solder'],
      },
      {
        question: 'How much does black mass composition vary between different batteries?',
        answer: 'Black mass composition varies significantly based on cathode chemistry and battery format. For example, NMC 111 batteries yield approximately 20% nickel, 20% cobalt, 20% manganese, and 7% lithium, while NMC 811 contains roughly 70% nickel, 10% cobalt, 10% manganese, and 7% lithium. LFP batteries contain no nickel or cobalt at all. Additionally, battery format (prismatic, pouch, cylindrical) affects the proportion of inactive materials. Professional recyclers design processes to accommodate at least ±15% variation in metal concentrations.',
        keywords: ['composition', 'nmc', 'lfp', 'nickel', 'cobalt', 'variation', 'chemistry'],
      },
      {
        question: 'How does black mass purity affect its market value?',
        answer: 'Black mass pricing correlates directly with purity, though the relationship isn\'t linear. Material with 95%+ total metal content (nickel, cobalt, manganese combined) typically commands 85-90% of benchmark pricing. Chemistry also matters significantly: NMC 811 black mass commands 15-20% premium over NMC 111, while LFP black mass is valued at roughly one-third of NMC prices due to the absence of cobalt and nickel. Consistency between batches is often more valuable to buyers than occasional high-purity samples. Moisture content below 1% is also critical for optimal pricing.',
        keywords: ['purity', 'pricing', 'value', 'market', 'moisture', 'premium'],
      },
      {
        question: 'What are the main processing methods for black mass?',
        answer: 'Two primary technologies exist for processing black mass: hydrometallurgy and pyrometallurgy. Hydrometallurgy uses chemical leaching to achieve 95%+ metal recovery rates, including 90%+ lithium recovery, but requires higher capital investment and complex wastewater treatment. Pyrometallurgy uses high-temperature smelting with lower upfront costs but only recovers 5-10% of lithium and has higher CO2 emissions. Many modern facilities use a hybrid approach. The optimal choice depends on your feedstock chemistry, local regulations, and target markets.',
        keywords: ['hydrometallurgy', 'pyrometallurgy', 'processing', 'smelting', 'leaching', 'recovery'],
      },
    ],
  },
  {
    name: 'RECYCLING PROCESS',
    color: '#00ff88',
    icon: icons.process,
    items: [
      {
        question: 'What types of batteries do you recycle?',
        answer: 'We primarily recycle lithium-ion batteries from electric vehicles, consumer electronics, and grid storage systems. This includes NMC (Nickel Manganese Cobalt), NCA (Nickel Cobalt Aluminum), and LFP (Lithium Iron Phosphate) chemistries.',
        keywords: ['battery types', 'lithium-ion', 'ev', 'nmc', 'nca', 'lfp'],
      },
      {
        question: 'Is it safe to produce black mass? What are the risks?',
        answer: 'Black mass production requires professional industrial equipment and strict safety protocols—it cannot be safely done at home or in small-scale settings. EV batteries operate at high voltages with significant fire and explosion risks. Professional facilities like Z1 use specialized discharge systems, nitrogen-atmosphere shredding (O₂ below 1%), continuous hydrogen monitoring, HEPA filtration, and automated fire suppression. Regulatory licensing is required in most jurisdictions. The minimum investment for safe black mass production typically starts at $1 million or more.',
        keywords: ['safety', 'risks', 'fire', 'voltage', 'professional', 'equipment'],
      },
      {
        question: 'How is the recycling process safe with lithium fire risks?',
        answer: 'Safety is our top priority. We use non-discharge shredding technology that processes charged cells safely under nitrogen atmosphere (O₂ below 1%). This eliminates the 24-72 hour discharge bottleneck while maintaining safety. We maintain continuous hydrogen monitoring, real-time gas chromatography, HEPA filtration (99.97%), and automated CO₂ fire suppression that activates in under 200ms.',
        keywords: ['safety', 'fire', 'nitrogen', 'shredding', 'monitoring'],
      },
      {
        question: 'What happens to the recovered materials?',
        answer: 'Copper and aluminum are sold as high-purity scrap to metal recyclers. Steel goes to the scrap market. Black mass is sold to specialized refiners who extract lithium, cobalt, nickel, and manganese for use in new battery production, creating a true circular economy.',
        keywords: ['materials', 'copper', 'aluminum', 'circular economy'],
      },
    ],
  },
  {
    name: 'MANUFACTURING',
    color: '#00aaff',
    icon: icons.manufacturing,
    items: [
      {
        question: 'What are Sodium-ion batteries?',
        answer: 'Sodium-ion batteries are rechargeable batteries that use sodium ions (Na+) instead of lithium ions (Li+) as the charge carrier. They offer similar performance to lithium-ion for many applications but use abundant, low-cost sodium instead of scarce lithium.',
        keywords: ['sodium-ion', 'sodium', 'battery', 'technology'],
      },
      {
        question: 'Why Sodium instead of Lithium?',
        answer: 'Sodium is 1,000 times more abundant than lithium and can be extracted from seawater. Sodium-ion batteries can use aluminum current collectors for both electrodes (instead of copper), reducing cost by 30%. They also perform better in extreme temperatures and can be discharged to 0V for safe shipping.',
        keywords: ['sodium', 'lithium', 'abundance', 'cost', 'advantages'],
      },
      {
        question: 'What is a Dry Room?',
        answer: 'A dry room is an ultra-low humidity environment essential for battery manufacturing. Our 10,000 SF dry room maintains a dew point of -40C and humidity below 1% RH. This prevents moisture from degrading electrolyte and electrode materials during cell assembly.',
        keywords: ['dry room', 'humidity', 'manufacturing', 'dew point'],
      },
    ],
  },
  {
    name: 'REGULATIONS',
    color: '#f59e0b',
    icon: icons.environmental,
    items: [
      {
        question: 'What permits are required for battery recycling?',
        answer: 'Battery recycling facilities typically require environmental permits for air quality, hazardous waste handling, and sometimes wastewater discharge. In the US, this includes EPA Generator ID for hazardous waste, state air quality permits, local building and zoning permits, and stormwater management approval. Z1\'s Zero Liquid Discharge (ZLD) system eliminates the need for wastewater discharge permits.',
        keywords: ['permits', 'licensing', 'regulations', 'epa', 'environmental'],
      },
      {
        question: 'Are there regulations for transporting or exporting black mass?',
        answer: 'Yes, black mass is classified as hazardous waste in most jurisdictions, requiring special handling, storage, and transport protocols. International export (particularly from the EU) requires prior notification and written consent from destination countries under the Basel Convention. The process can take 3-6 months and involves detailed chemical analysis and waste management plans. Regulations vary significantly by region and are evolving as battery recycling becomes more strategic—some jurisdictions are considering reclassifying black mass as a "strategic resource" rather than waste.',
        keywords: ['export', 'transport', 'regulations', 'hazardous', 'basel', 'international'],
      },
      {
        question: 'What certifications do you pursue?',
        answer: 'We are pursuing R2 (Responsible Recycling) and ISO 14001 (Environmental Management) certifications. Our facility will meet or exceed all EPA, OSHA, and state environmental requirements. We will also comply with upcoming EU Battery Regulation requirements for North American facilities serving European customers.',
        keywords: ['certifications', 'r2', 'iso', 'compliance'],
      },
      {
        question: 'What is Zero Liquid Discharge (ZLD)?',
        answer: 'Zero Liquid Discharge means we process all wastewater on-site and discharge nothing to sewers or surface water. Our MVR (Mechanical Vapor Recompression) evaporator recovers 95% of water for reuse. The remaining concentrated solids are hauled off for proper disposal.',
        keywords: ['zld', 'wastewater', 'discharge', 'environmental'],
      },
    ],
  },
  {
    name: 'BUSINESS',
    color: '#ffb700',
    icon: icons.business,
    items: [
      {
        question: 'How can I partner with Z1?',
        answer: 'We welcome partnerships with battery manufacturers, EV companies, recycling networks, and investors. Please contact us through our contact form or reach out directly to discuss collaboration opportunities.',
        keywords: ['partnership', 'invest', 'collaborate', 'business'],
      },
      {
        question: 'Do you accept batteries for recycling?',
        answer: 'Once operational, yes. We will accept batteries from OEMs, fleet operators, recycling companies, and certified collection points. Batteries must be properly packaged per DOT regulations. Contact us to be added to our future supplier list.',
        keywords: ['accept', 'batteries', 'supplier', 'recycling'],
      },
      {
        question: 'How does battery recycling support the circular economy?',
        answer: 'Our facility creates a closed loop: end-of-life batteries are recycled in Zone A, recovered materials are processed, and these materials can feed directly into new battery production in Zone C. This reduces mining demand, lowers carbon footprint by 90%, and keeps valuable materials in productive use.',
        keywords: ['circular economy', 'sustainability', 'closed loop'],
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>(faqData[0].name);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const currentCategory = faqData.find((c) => c.name === activeCategory);

  // Filter FAQs based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    
    const query = searchQuery.toLowerCase();
    const results: Array<{ category: FAQCategory; item: FAQItem }> = [];
    
    faqData.forEach((category) => {
      category.items.forEach((item) => {
        const matchesQuestion = item.question.toLowerCase().includes(query);
        const matchesAnswer = item.answer.toLowerCase().includes(query);
        const matchesKeywords = item.keywords?.some((k) => k.toLowerCase().includes(query));
        
        if (matchesQuestion || matchesAnswer || matchesKeywords) {
          results.push({ category, item });
        }
      });
    });
    
    return results;
  }, [searchQuery]);

  const isSearching = searchQuery.trim().length > 0;

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-neon/30 text-neon px-0.5 rounded">{part}</span>
      ) : part
    );
  };

  return (
    <>
      <PageHeader
        section="ABOUT // FAQ"
        title="FREQUENTLY ASKED"
        highlight="QUESTIONS"
        description="Expert answers to common questions about battery recycling, black mass, and our facility."
      />

      {/* Premium Search Bar */}
      <section className="py-8 bg-slate-900/50 border-y border-gray-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            {/* Search container with glow effect */}
            <div 
              className={`relative transition-all duration-500 ${
                isSearchFocused ? 'scale-[1.01]' : ''
              }`}
            >
              {/* Glow background */}
              <div 
                className={`absolute -inset-1 bg-gradient-to-r from-neon/20 via-cyan-500/20 to-neon/20 rounded-lg blur-md transition-opacity duration-500 ${
                  isSearchFocused ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              {/* Search input container */}
              <div className={`relative bg-slate-950 border-2 transition-all duration-300 ${
                isSearchFocused 
                  ? 'border-neon shadow-[0_0_30px_rgba(0,255,136,0.15)]' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                <div className="flex items-center">
                  {/* Search icon */}
                  <div className={`pl-5 transition-colors duration-300 ${isSearchFocused ? 'text-neon' : 'text-gray-500'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  
                  {/* Input */}
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    placeholder="Search questions... (e.g., 'black mass', 'safety', 'pricing')"
                    className="w-full px-4 py-4 bg-transparent font-mono text-sm text-white placeholder-gray-500 focus:outline-none"
                  />
                  
                  {/* Clear button */}
                  <AnimatePresence>
                    {searchQuery && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => setSearchQuery('')}
                        className="pr-5 text-gray-500 hover:text-neon transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.button>
                    )}
                  </AnimatePresence>
                  
                  {/* Keyboard shortcut hint */}
                  {!searchQuery && !isSearchFocused && (
                    <div className="pr-5 hidden md:flex items-center gap-1">
                      <span className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs text-gray-500 font-mono">/</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Search results count */}
            <AnimatePresence>
              {isSearching && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute -bottom-6 left-0 font-mono text-xs text-gray-500"
                >
                  {searchResults?.length === 0 ? (
                    <span className="text-amber-500">No results found</span>
                  ) : (
                    <span><span className="text-neon">{searchResults?.length}</span> result{searchResults?.length !== 1 ? 's' : ''} found</span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs - Hidden during search */}
      <AnimatePresence>
        {!isSearching && (
          <motion.section 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="py-8 bg-slate-900/30 sticky top-16 z-30"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-wrap gap-2">
                {faqData.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => {
                      setActiveCategory(category.name);
                      setOpenQuestion(null);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 font-mono text-xs border transition-all ${
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
                    <span className={activeCategory === category.name ? 'text-slate-950' : ''} style={{ color: activeCategory !== category.name ? category.color : undefined }}>
                      {category.icon}
                    </span>
                    {category.name}
                    <span className={`ml-1 px-1.5 py-0.5 text-[10px] rounded ${
                      activeCategory === category.name 
                        ? 'bg-slate-950/20 text-slate-950' 
                        : 'bg-gray-800 text-gray-400'
                    }`}>
                      {category.items.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Questions Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {isSearching ? (
              // Search Results View
              <motion.div
                key="search-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                {searchResults?.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="font-mono text-xl text-white mb-2">No Results Found</h3>
                    <p className="text-muted">Try different keywords or browse categories above.</p>
                  </div>
                ) : (
                  searchResults?.map(({ category, item }, index) => (
                    <motion.div
                      key={`${category.name}-${item.question}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border border-gray-800 hover:border-gray-700 transition-colors"
                      style={{
                        borderColor: openQuestion === item.question ? category.color + '50' : undefined,
                      }}
                    >
                      {/* Category badge */}
                      <div className="px-6 pt-4">
                        <span 
                          className="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono rounded"
                          style={{ 
                            backgroundColor: category.color + '15',
                            color: category.color,
                          }}
                        >
                          {category.icon}
                          {category.name}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => setOpenQuestion(openQuestion === item.question ? null : item.question)}
                        className="w-full flex items-center justify-between p-6 pt-3 text-left group"
                        data-hover
                      >
                        <span className="font-mono text-white group-hover:text-neon transition-colors pr-4">
                          {highlightText(item.question, searchQuery)}
                        </span>
                        <motion.span
                          animate={{ rotate: openQuestion === item.question ? 45 : 0 }}
                          className="text-2xl shrink-0"
                          style={{ color: category.color }}
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
                            <div className="p-6 pt-0 text-muted border-t border-gray-800 leading-relaxed">
                              {highlightText(item.answer, searchQuery)}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                )}
              </motion.div>
            ) : (
              // Category View
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: currentCategory?.color + '15' }}
                  >
                    <span style={{ color: currentCategory?.color }}>{currentCategory?.icon}</span>
                  </div>
                  <div>
                    <h2 className="font-mono text-xl text-white">{currentCategory?.name}</h2>
                    <p className="text-sm text-muted">{currentCategory?.items.length} questions</p>
                  </div>
                </div>

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
                          <div className="p-6 pt-0 text-muted border-t border-gray-800 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Expert Badge Section */}
      <section className="py-8 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
              <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="font-mono text-xs text-purple-400">INDUSTRY EXPERT ANSWERS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-mono text-xl text-white mb-4">STILL HAVE QUESTIONS?</h3>
          <p className="text-muted mb-6">
            Our team is ready to help with any additional inquiries about battery recycling, black mass, or partnership opportunities.
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
