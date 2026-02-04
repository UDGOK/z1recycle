import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';

// Types
interface PriceData {
  current: number;
  change: number;
  changePercent: number;
  high24h: number;
  low24h: number;
  volume: string;
}

interface BlackMassType {
  name: string;
  shortName: string;
  price: number;
  change: number;
  composition: {
    ni: number;
    co: number;
    mn: number;
    li: number;
  };
  description: string;
}

interface MetalPrice {
  name: string;
  symbol: string;
  price: number;
  change: number;
  unit: string;
}

// Simulated real-time data with realistic values based on current market
const generateRealtimeData = () => {
  const baseNickel = 16250 + (Math.random() - 0.5) * 200;
  const baseCobalt = 28500 + (Math.random() - 0.5) * 300;
  const baseManganese = 1850 + (Math.random() - 0.5) * 50;
  const baseLithium = 12800 + (Math.random() - 0.5) * 400;

  return {
    metals: [
      { name: 'Nickel', symbol: 'Ni', price: baseNickel, change: (Math.random() - 0.4) * 3, unit: '$/MT' },
      { name: 'Cobalt', symbol: 'Co', price: baseCobalt, change: (Math.random() - 0.45) * 4, unit: '$/MT' },
      { name: 'Manganese', symbol: 'Mn', price: baseManganese, change: (Math.random() - 0.5) * 2, unit: '$/MT' },
      { name: 'Lithium Carbonate', symbol: 'Li₂CO₃', price: baseLithium, change: (Math.random() - 0.5) * 5, unit: '$/MT' },
    ] as MetalPrice[],
    blackMass: [
      {
        name: 'NMC 811',
        shortName: '811',
        price: calculateBlackMassPrice(0.80, 0.10, 0.10, 0.07, baseNickel, baseCobalt, baseManganese, baseLithium),
        change: (Math.random() - 0.4) * 4,
        composition: { ni: 80, co: 10, mn: 10, li: 7 },
        description: 'High nickel cathode, premium EV batteries',
      },
      {
        name: 'NMC 622',
        shortName: '622',
        price: calculateBlackMassPrice(0.60, 0.20, 0.20, 0.07, baseNickel, baseCobalt, baseManganese, baseLithium),
        change: (Math.random() - 0.45) * 3.5,
        composition: { ni: 60, co: 20, mn: 20, li: 7 },
        description: 'Balanced performance, mainstream EVs',
      },
      {
        name: 'NMC 111',
        shortName: '111',
        price: calculateBlackMassPrice(0.33, 0.33, 0.33, 0.07, baseNickel, baseCobalt, baseManganese, baseLithium),
        change: (Math.random() - 0.5) * 3,
        composition: { ni: 33, co: 33, mn: 33, li: 7 },
        description: 'Legacy chemistry, consumer electronics',
      },
      {
        name: 'LFP',
        shortName: 'LFP',
        price: 2800 + (Math.random() - 0.5) * 200,
        change: (Math.random() - 0.55) * 2,
        composition: { ni: 0, co: 0, mn: 0, li: 4 },
        description: 'Lithium iron phosphate, budget EVs',
      },
    ] as BlackMassType[],
    timestamp: new Date(),
  };
};

// Black mass price calculation formula
function calculateBlackMassPrice(
  niRatio: number,
  coRatio: number,
  mnRatio: number,
  liRatio: number,
  niPrice: number,
  coPrice: number,
  mnPrice: number,
  liPrice: number
): number {
  // Recovery efficiency factors
  const niRecovery = 0.95;
  const coRecovery = 0.95;
  const mnRecovery = 0.90;
  const liRecovery = 0.85;
  
  // Processing cost deduction ($/MT)
  const processingCost = 800;
  
  // Calculate value
  const value = 
    (niRatio * niPrice * niRecovery) +
    (coRatio * coPrice * coRecovery) +
    (mnRatio * mnPrice * mnRecovery) +
    (liRatio * liPrice * liRecovery) -
    processingCost;
  
  return Math.max(value * 0.75, 1000); // 75% of theoretical value, minimum $1000
}

// Generate historical data for charts
function generateHistoricalData(days: number) {
  const data = [];
  const basePrice = 14500;
  let currentPrice = basePrice;
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    currentPrice = currentPrice + (Math.random() - 0.48) * 200;
    currentPrice = Math.max(currentPrice, basePrice * 0.85);
    currentPrice = Math.min(currentPrice, basePrice * 1.15);
    
    data.push({
      date: date.toISOString().split('T')[0],
      nmc811: currentPrice * 1.05 + (Math.random() - 0.5) * 100,
      nmc622: currentPrice * 0.92 + (Math.random() - 0.5) * 80,
      nmc111: currentPrice * 0.78 + (Math.random() - 0.5) * 60,
      lfp: currentPrice * 0.2 + (Math.random() - 0.5) * 40,
    });
  }
  return data;
}

// Price ticker component
function PriceTicker({ data }: { data: BlackMassType[] }) {
  return (
    <div className="overflow-hidden bg-slate-950/80 border-y border-gray-800">
      <motion.div
        className="flex gap-8 py-3 px-4"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...data, ...data, ...data].map((item, index) => (
          <div key={index} className="flex items-center gap-3 whitespace-nowrap">
            <span className="font-mono text-sm text-white">{item.name}</span>
            <span className="font-mono text-sm text-white">${item.price.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            <span className={`font-mono text-xs ${item.change >= 0 ? 'text-neon' : 'text-red-500'}`}>
              {item.change >= 0 ? '▲' : '▼'} {Math.abs(item.change).toFixed(2)}%
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Mini sparkline chart component
function Sparkline({ data, color, height = 40 }: { data: number[]; color: string; height?: number }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg viewBox={`0 0 100 ${height}`} className="w-full" style={{ height }}>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        points={points}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        fill={`url(#gradient-${color})`}
        points={`0,${height} ${points} 100,${height}`}
      />
    </svg>
  );
}

// Regional pricing data
const regionalPricing = [
  { region: 'North America', premium: '+5-8%', notes: 'IRA compliance premium', flag: '🇺🇸' },
  { region: 'Europe', premium: '+3-5%', notes: 'EU Battery Regulation ready', flag: '🇪🇺' },
  { region: 'Asia Pacific', premium: 'Baseline', notes: 'Largest volume market', flag: '🌏' },
  { region: 'Middle East', premium: '-2-5%', notes: 'Emerging market', flag: '🌍' },
];

export default function MarketIntelligence() {
  const [marketData, setMarketData] = useState(generateRealtimeData());
  const [selectedTimeframe, setSelectedTimeframe] = useState<'7D' | '30D' | '90D' | '1Y'>('30D');
  const [activeTab, setActiveTab] = useState<'overview' | 'calculator' | 'regional'>('overview');
  const [isLive, setIsLive] = useState(true);
  
  // Calculator state
  const [calcNi, setCalcNi] = useState(60);
  const [calcCo, setCalcCo] = useState(20);
  const [calcMn, setCalcMn] = useState(20);
  const [calcLi, setCalcLi] = useState(7);
  const [calcPurity, setCalcPurity] = useState(95);
  const [calcVolume, setCalcVolume] = useState(100);

  // Refresh data periodically
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setMarketData(generateRealtimeData());
    }, 5000);
    return () => clearInterval(interval);
  }, [isLive]);

  // Generate historical data based on timeframe
  const historicalData = useMemo(() => {
    const days = { '7D': 7, '30D': 30, '90D': 90, '1Y': 365 }[selectedTimeframe];
    return generateHistoricalData(days);
  }, [selectedTimeframe]);

  // Calculate estimated value
  const calculatedValue = useMemo(() => {
    const niPrice = marketData.metals.find(m => m.symbol === 'Ni')?.price || 16000;
    const coPrice = marketData.metals.find(m => m.symbol === 'Co')?.price || 28000;
    const mnPrice = marketData.metals.find(m => m.symbol === 'Mn')?.price || 1800;
    const liPrice = marketData.metals.find(m => m.symbol === 'Li₂CO₃')?.price || 12500;
    
    const baseValue = calculateBlackMassPrice(
      calcNi / 100,
      calcCo / 100,
      calcMn / 100,
      calcLi / 100,
      niPrice,
      coPrice,
      mnPrice,
      liPrice
    );
    
    const purityMultiplier = calcPurity >= 95 ? 1 : calcPurity >= 90 ? 0.92 : 0.85;
    const valuePerTon = baseValue * purityMultiplier;
    const totalValue = valuePerTon * calcVolume;
    
    return { valuePerTon, totalValue };
  }, [calcNi, calcCo, calcMn, calcLi, calcPurity, calcVolume, marketData]);

  return (
    <>
      <PageHeader
        section="MARKET // INTELLIGENCE"
        title="BLACK MASS"
        highlight="PRICE INDEX"
        description="Real-time market data and pricing intelligence for battery recycling materials."
      />

      {/* Live Status Bar */}
      <div className="bg-slate-900/50 border-b border-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLive(!isLive)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                isLive 
                  ? 'bg-neon/20 text-neon border border-neon/30' 
                  : 'bg-gray-800 text-gray-400 border border-gray-700'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-neon animate-pulse' : 'bg-gray-500'}`} />
              {isLive ? 'LIVE' : 'PAUSED'}
            </button>
            <span className="text-xs text-gray-500 font-mono hidden sm:block">
              Last update: {marketData.timestamp.toLocaleTimeString()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-mono hidden md:block">Data refreshes every 5s</span>
            <div className="flex items-center gap-1 px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded">
              <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-[10px] text-purple-400 font-mono">BETA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Price Ticker */}
      <PriceTicker data={marketData.blackMass} />

      {/* Navigation Tabs */}
      <section className="py-6 bg-slate-900/30 sticky top-16 z-30 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2">
            {[
              { id: 'overview', label: 'MARKET OVERVIEW', icon: '📊' },
              { id: 'calculator', label: 'PRICE CALCULATOR', icon: '🧮' },
              { id: 'regional', label: 'REGIONAL PRICING', icon: '🌍' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2.5 font-mono text-xs border transition-all ${
                  activeTab === tab.id
                    ? 'bg-neon text-slate-950 border-neon'
                    : 'text-muted border-gray-700 hover:border-white hover:text-white'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Black Mass Indices */}
            <section className="py-12">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-mono text-xl text-white mb-1">BLACK MASS INDICES</h2>
                    <p className="text-sm text-muted">Estimated market value by cathode chemistry</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <span>USD per Metric Ton</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {marketData.blackMass.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative bg-slate-900/50 border border-gray-800 hover:border-gray-700 transition-all group overflow-hidden"
                    >
                      {/* Glow effect */}
                      <div 
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        style={{ 
                          background: `radial-gradient(circle at center, ${item.change >= 0 ? 'rgba(0,255,136,0.05)' : 'rgba(239,68,68,0.05)'} 0%, transparent 70%)`
                        }}
                      />
                      
                      <div className="relative p-5">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="font-mono text-lg font-bold text-white">{item.name}</span>
                            <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                          </div>
                          <div className={`px-2 py-1 rounded text-xs font-mono ${
                            item.change >= 0 
                              ? 'bg-neon/10 text-neon' 
                              : 'bg-red-500/10 text-red-500'
                          }`}>
                            {item.change >= 0 ? '▲' : '▼'} {Math.abs(item.change).toFixed(2)}%
                          </div>
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                          <span className="font-mono text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            ${item.price.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </span>
                          <span className="text-xs text-gray-500 ml-2">/MT</span>
                        </div>

                        {/* Sparkline */}
                        <div className="mb-4">
                          <Sparkline 
                            data={historicalData.slice(-14).map(d => {
                              const key = item.shortName.toLowerCase().replace(' ', '') as keyof typeof d;
                              return (d[key] as number) || item.price;
                            })} 
                            color={item.change >= 0 ? '#00ff88' : '#ef4444'}
                            height={30}
                          />
                        </div>

                        {/* Composition */}
                        <div className="pt-3 border-t border-gray-800">
                          <div className="text-[10px] text-gray-500 font-mono mb-2">COMPOSITION</div>
                          <div className="flex gap-2">
                            {item.composition.ni > 0 && (
                              <span className="px-1.5 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-mono rounded">
                                Ni {item.composition.ni}%
                              </span>
                            )}
                            {item.composition.co > 0 && (
                              <span className="px-1.5 py-0.5 bg-purple-500/10 text-purple-400 text-[10px] font-mono rounded">
                                Co {item.composition.co}%
                              </span>
                            )}
                            {item.composition.mn > 0 && (
                              <span className="px-1.5 py-0.5 bg-amber-500/10 text-amber-400 text-[10px] font-mono rounded">
                                Mn {item.composition.mn}%
                              </span>
                            )}
                            <span className="px-1.5 py-0.5 bg-cyan-500/10 text-cyan-400 text-[10px] font-mono rounded">
                              Li {item.composition.li}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Underlying Metals */}
            <section className="py-12 bg-slate-900/30">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-mono text-xl text-white mb-1">UNDERLYING METALS</h2>
                    <p className="text-sm text-muted">LME benchmark prices driving black mass valuations</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  {marketData.metals.map((metal, index) => (
                    <motion.div
                      key={metal.symbol}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-950/50 border border-gray-800 p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500 font-mono">{metal.name}</span>
                        <span className={`text-xs font-mono ${metal.change >= 0 ? 'text-neon' : 'text-red-500'}`}>
                          {metal.change >= 0 ? '+' : ''}{metal.change.toFixed(2)}%
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-2xl text-white font-bold">
                          ${metal.price.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </span>
                        <span className="text-xs text-gray-500">{metal.unit}</span>
                      </div>
                      <div className="mt-2 text-lg font-mono text-cyan-400">{metal.symbol}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Historical Chart */}
            <section className="py-12">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-mono text-xl text-white mb-1">PRICE HISTORY</h2>
                    <p className="text-sm text-muted">Historical price trends for black mass indices</p>
                  </div>
                  <div className="flex gap-2">
                    {(['7D', '30D', '90D', '1Y'] as const).map((tf) => (
                      <button
                        key={tf}
                        onClick={() => setSelectedTimeframe(tf)}
                        className={`px-3 py-1.5 text-xs font-mono border transition-all ${
                          selectedTimeframe === tf
                            ? 'bg-neon text-slate-950 border-neon'
                            : 'text-gray-400 border-gray-700 hover:border-gray-500'
                        }`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chart Container */}
                <div className="bg-slate-900/50 border border-gray-800 p-6">
                  <div className="h-64 relative">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 flex flex-col justify-between text-xs text-gray-500 font-mono">
                      <span>$18,000</span>
                      <span>$14,000</span>
                      <span>$10,000</span>
                      <span>$6,000</span>
                      <span>$2,000</span>
                    </div>
                    
                    {/* Chart area */}
                    <div className="ml-16 h-full relative border-l border-b border-gray-700">
                      {/* Grid lines */}
                      <div className="absolute inset-0">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="absolute left-0 right-0 border-t border-gray-800"
                            style={{ top: `${i * 20}%` }}
                          />
                        ))}
                      </div>
                      
                      {/* Sparklines for each index */}
                      <div className="absolute inset-0">
                        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                          {/* NMC 811 */}
                          <polyline
                            fill="none"
                            stroke="#00ff88"
                            strokeWidth="0.5"
                            points={historicalData.map((d, i) => 
                              `${(i / (historicalData.length - 1)) * 100},${100 - ((d.nmc811 - 2000) / 16000) * 100}`
                            ).join(' ')}
                          />
                          {/* NMC 622 */}
                          <polyline
                            fill="none"
                            stroke="#00aaff"
                            strokeWidth="0.5"
                            points={historicalData.map((d, i) => 
                              `${(i / (historicalData.length - 1)) * 100},${100 - ((d.nmc622 - 2000) / 16000) * 100}`
                            ).join(' ')}
                          />
                          {/* NMC 111 */}
                          <polyline
                            fill="none"
                            stroke="#a855f7"
                            strokeWidth="0.5"
                            points={historicalData.map((d, i) => 
                              `${(i / (historicalData.length - 1)) * 100},${100 - ((d.nmc111 - 2000) / 16000) * 100}`
                            ).join(' ')}
                          />
                          {/* LFP */}
                          <polyline
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="0.5"
                            points={historicalData.map((d, i) => 
                              `${(i / (historicalData.length - 1)) * 100},${100 - ((d.lfp - 2000) / 16000) * 100}`
                            ).join(' ')}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Legend */}
                  <div className="flex flex-wrap gap-6 mt-6 pt-4 border-t border-gray-800">
                    {[
                      { name: 'NMC 811', color: '#00ff88' },
                      { name: 'NMC 622', color: '#00aaff' },
                      { name: 'NMC 111', color: '#a855f7' },
                      { name: 'LFP', color: '#f59e0b' },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                        <span className="text-xs text-gray-400 font-mono">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === 'calculator' && (
          <motion.div
            key="calculator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <section className="py-12">
              <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="font-mono text-2xl text-white mb-2">BLACK MASS VALUE CALCULATOR</h2>
                  <p className="text-muted">Estimate the market value of your black mass based on composition and volume</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Input Panel */}
                  <div className="bg-slate-900/50 border border-gray-800 p-6">
                    <h3 className="font-mono text-sm text-neon mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon rounded-full" />
                      COMPOSITION INPUT
                    </h3>

                    <div className="space-y-6">
                      {/* Nickel */}
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="text-sm text-gray-400 font-mono">Nickel (Ni)</label>
                          <span className="text-sm text-blue-400 font-mono">{calcNi}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={calcNi}
                          onChange={(e) => setCalcNi(Number(e.target.value))}
                          className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                      </div>

                      {/* Cobalt */}
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="text-sm text-gray-400 font-mono">Cobalt (Co)</label>
                          <span className="text-sm text-purple-400 font-mono">{calcCo}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={calcCo}
                          onChange={(e) => setCalcCo(Number(e.target.value))}
                          className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                        />
                      </div>

                      {/* Manganese */}
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="text-sm text-gray-400 font-mono">Manganese (Mn)</label>
                          <span className="text-sm text-amber-400 font-mono">{calcMn}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={calcMn}
                          onChange={(e) => setCalcMn(Number(e.target.value))}
                          className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                        />
                      </div>

                      {/* Lithium */}
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="text-sm text-gray-400 font-mono">Lithium (Li)</label>
                          <span className="text-sm text-cyan-400 font-mono">{calcLi}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="15"
                          value={calcLi}
                          onChange={(e) => setCalcLi(Number(e.target.value))}
                          className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                        />
                      </div>

                      <div className="pt-4 border-t border-gray-800">
                        {/* Purity */}
                        <div className="mb-4">
                          <div className="flex justify-between mb-2">
                            <label className="text-sm text-gray-400 font-mono">Purity Grade</label>
                            <span className="text-sm text-neon font-mono">{calcPurity}%</span>
                          </div>
                          <input
                            type="range"
                            min="80"
                            max="99"
                            value={calcPurity}
                            onChange={(e) => setCalcPurity(Number(e.target.value))}
                            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-neon"
                          />
                        </div>

                        {/* Volume */}
                        <div>
                          <div className="flex justify-between mb-2">
                            <label className="text-sm text-gray-400 font-mono">Volume (MT)</label>
                            <span className="text-sm text-white font-mono">{calcVolume}</span>
                          </div>
                          <input
                            type="number"
                            min="1"
                            max="10000"
                            value={calcVolume}
                            onChange={(e) => setCalcVolume(Number(e.target.value) || 1)}
                            className="w-full px-4 py-2 bg-slate-950 border border-gray-700 text-white font-mono focus:outline-none focus:border-neon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Output Panel */}
                  <div className="bg-slate-900/50 border border-gray-800 p-6">
                    <h3 className="font-mono text-sm text-neon mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                      ESTIMATED VALUE
                    </h3>

                    {/* Value per ton */}
                    <div className="mb-8 p-6 bg-slate-950/50 border border-neon/20">
                      <div className="text-xs text-gray-500 font-mono mb-2">VALUE PER METRIC TON</div>
                      <div className="font-mono text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon to-cyan-400">
                        ${calculatedValue.valuePerTon.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </div>
                    </div>

                    {/* Total value */}
                    <div className="mb-8 p-6 bg-gradient-to-br from-neon/10 to-cyan-500/10 border border-neon/30">
                      <div className="text-xs text-neon font-mono mb-2">TOTAL ESTIMATED VALUE</div>
                      <div className="font-mono text-5xl font-bold text-white">
                        ${calculatedValue.totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-sm text-gray-400 mt-2">
                        for {calcVolume} MT at {calcPurity}% purity
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-3">
                      <div className="text-xs text-gray-500 font-mono mb-2">VALUE BREAKDOWN</div>
                      {[
                        { label: 'Nickel contribution', value: calcNi * 160, color: 'blue' },
                        { label: 'Cobalt contribution', value: calcCo * 280, color: 'purple' },
                        { label: 'Manganese contribution', value: calcMn * 18, color: 'amber' },
                        { label: 'Lithium contribution', value: calcLi * 1000, color: 'cyan' },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">{item.label}</span>
                          <span className={`text-xs font-mono text-${item.color}-400`}>
                            ${item.value.toLocaleString()}
                          </span>
                        </div>
                      ))}
                      <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
                        <span className="text-xs text-gray-400">Processing deduction</span>
                        <span className="text-xs font-mono text-red-400">-$800</span>
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-6 p-3 bg-amber-500/5 border border-amber-500/20 rounded">
                      <p className="text-[10px] text-amber-400/70 font-mono">
                        ⚠️ Estimates based on current metal prices and standard recovery rates. Actual values may vary based on market conditions, buyer specifications, and quality verification.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="mt-8">
                  <h3 className="font-mono text-sm text-gray-400 mb-4">QUICK PRESETS</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'NMC 811', ni: 80, co: 10, mn: 10, li: 7 },
                      { name: 'NMC 622', ni: 60, co: 20, mn: 20, li: 7 },
                      { name: 'NMC 111', ni: 33, co: 33, mn: 33, li: 7 },
                      { name: 'NCA', ni: 80, co: 15, mn: 0, li: 7 },
                      { name: 'LFP', ni: 0, co: 0, mn: 0, li: 4 },
                    ].map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => {
                          setCalcNi(preset.ni);
                          setCalcCo(preset.co);
                          setCalcMn(preset.mn);
                          setCalcLi(preset.li);
                        }}
                        className="px-4 py-2 border border-gray-700 text-gray-400 font-mono text-xs hover:border-neon hover:text-neon transition-all"
                      >
                        {preset.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === 'regional' && (
          <motion.div
            key="regional"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <section className="py-12">
              <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="font-mono text-2xl text-white mb-2">REGIONAL PRICE PREMIUMS</h2>
                  <p className="text-muted">Black mass pricing varies by region based on regulatory frameworks and market demand</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {regionalPricing.map((region, index) => (
                    <motion.div
                      key={region.region}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-900/50 border border-gray-800 p-6 hover:border-gray-700 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{region.flag}</span>
                          <div>
                            <h3 className="font-mono text-white">{region.region}</h3>
                            <p className="text-xs text-gray-500">{region.notes}</p>
                          </div>
                        </div>
                        <div className={`px-3 py-1.5 font-mono text-sm ${
                          region.premium.includes('+') 
                            ? 'bg-neon/10 text-neon' 
                            : region.premium === 'Baseline'
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-red-500/10 text-red-400'
                        }`}>
                          {region.premium}
                        </div>
                      </div>

                      {/* Regional price examples */}
                      <div className="space-y-2 pt-4 border-t border-gray-800">
                        {marketData.blackMass.slice(0, 3).map((bm) => {
                          const multiplier = region.premium.includes('+') 
                            ? 1 + parseInt(region.premium.split('+')[1]) / 100
                            : region.premium === 'Baseline' 
                            ? 1 
                            : 1 - parseInt(region.premium.split('-')[1]) / 100;
                          
                          return (
                            <div key={bm.name} className="flex justify-between text-sm">
                              <span className="text-gray-400">{bm.name}</span>
                              <span className="text-white font-mono">
                                ${(bm.price * multiplier).toLocaleString(undefined, { maximumFractionDigits: 0 })}/MT
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Regulatory Overview */}
                <div className="mt-12 bg-slate-900/50 border border-gray-800 p-6">
                  <h3 className="font-mono text-lg text-white mb-6">REGULATORY LANDSCAPE</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-slate-950/50 border-l-2 border-neon">
                      <h4 className="font-mono text-neon text-sm mb-2">🇺🇸 US IRA COMPLIANCE</h4>
                      <p className="text-xs text-gray-400">
                        Domestically recycled materials qualify for EV tax credits under the Inflation Reduction Act, driving premium pricing for FEOC-free black mass.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-950/50 border-l-2 border-cyan-400">
                      <h4 className="font-mono text-cyan-400 text-sm mb-2">🇪🇺 EU BATTERY REGULATION</h4>
                      <p className="text-xs text-gray-400">
                        Mandatory recycling content requirements by 2030 creating strong demand for certified black mass with full traceability.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-950/50 border-l-2 border-amber-400">
                      <h4 className="font-mono text-amber-400 text-sm mb-2">🌏 APAC MARKET</h4>
                      <p className="text-xs text-gray-400">
                        Largest volume market with established supply chains. Competitive pricing but increasing ESG requirements from international buyers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-transparent via-neon/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-mono text-xl text-white mb-4">READY TO SELL YOUR BLACK MASS?</h3>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Z1 Recycling offers competitive pricing with full transparency. Contact us for a quote based on your material specifications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/about/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-neon text-slate-950 font-mono font-bold hover:bg-neon/90 transition-all"
            >
              REQUEST QUOTE
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/about/faq"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-600 text-gray-400 font-mono font-bold hover:border-white hover:text-white transition-all"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer Footer */}
      <section className="py-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-3 p-4 bg-slate-900/30 border border-gray-800 rounded">
            <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs text-gray-500">
              <span className="text-amber-400 font-mono">DISCLAIMER:</span> Price indices shown are estimates based on underlying metal prices and industry-standard formulas. They are provided for informational purposes only and should not be used as the sole basis for commercial transactions. Actual transaction prices depend on material quality, volume, buyer requirements, and market conditions. Z1 Recycling makes no warranties regarding the accuracy of these estimates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
