import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface SubMenuItem {
  label: string;
  href: string;
  terminalLabel: string;
}

interface NavItem {
  label: string;
  href: string;
  submenu?: SubMenuItem[];
}

const navItems: NavItem[] = [
  {
    label: 'TECHNOLOGY',
    href: '/technology',
    submenu: [
      { label: 'Tech Specs', href: '/technology', terminalLabel: 'TECH_SPECIFICATIONS' },
      { label: 'Recycling Process', href: '/process/recycling', terminalLabel: 'RECYCLING_PROCESS' },
      { label: 'Manufacturing', href: '/process/manufacturing', terminalLabel: 'MFG_PROTOCOLS' },
      { label: 'Equipment Guide', href: '/process/equipment', terminalLabel: 'EQUIPMENT_SPECS' },
    ],
  },
  {
    label: 'FACILITY',
    href: '/facility',
    submenu: [
      { label: 'Overview', href: '/facility', terminalLabel: 'FACILITY_OVERVIEW' },
      { label: 'Zone A - Recycling', href: '/facility/zone-a', terminalLabel: 'ZONE_A_RECYCLING' },
      { label: 'Zone B - Utility', href: '/facility/zone-b', terminalLabel: 'ZONE_B_UTILITY' },
      { label: 'Zone C - Manufacturing', href: '/facility/zone-c', terminalLabel: 'ZONE_C_MFG' },
    ],
  },
  {
    label: 'IMPACT',
    href: '/strategic-impact',
    submenu: [
      { label: 'Strategic Impact', href: '/strategic-impact', terminalLabel: 'STRATEGIC_IMPACT' },
      { label: 'Sustainability', href: '/sustainability', terminalLabel: 'SUSTAINABILITY' },
      { label: 'Community', href: '/community', terminalLabel: 'COMMUNITY_IMPACT' },
    ],
  },
  {
    label: 'ABOUT',
    href: '/about',
    submenu: [
      { label: 'Team', href: '/about/team', terminalLabel: 'TEAM_DATA' },
      { label: 'Timeline', href: '/about/timeline', terminalLabel: 'PROJECT_TIMELINE' },
      { label: 'FAQ', href: '/about/faq', terminalLabel: 'FAQ_DATABASE' },
      { label: 'Contact', href: '/about/contact', terminalLabel: 'COMM_CHANNELS' },
    ],
  },
  { label: 'INVESTORS', href: '/investors' },
];

// Blinking cursor component
function BlinkingCursor() {
  return (
    <motion.span
      className="inline-block w-2 h-4 bg-neon ml-2"
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
    />
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-neon/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-mono text-xl font-bold text-neon glow-text">
            Z1<span className="text-white">_RECYCLING</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={item.href}
                  className={`font-mono text-sm transition-colors relative py-2 ${
                    location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                      ? 'text-neon'
                      : 'text-muted hover:text-neon'
                  }`}
                  data-hover
                >
                  {item.label}
                  {item.submenu && <span className="ml-1 text-xs opacity-60">▼</span>}
                </Link>

                {/* Terminal-Style Submenu */}
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0, y: -10 }}
                      animate={{ opacity: 1, scaleY: 1, y: 0 }}
                      exit={{ opacity: 0, scaleY: 0, y: -10 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      style={{ originY: 0 }}
                      className="absolute top-full left-0 mt-2 min-w-[260px] bg-black border border-neon shadow-[0_0_20px_rgba(0,255,136,0.15)]"
                    >
                      {/* Terminal Header */}
                      <div className="px-3 py-2 border-b border-neon/30 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="ml-2 font-mono text-[10px] text-neon/60 tracking-widest">
                          {item.label}_TERMINAL
                        </span>
                      </div>

                      {/* Terminal Body */}
                      <div className="p-2">
                        {item.submenu.map((sub, index) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block group/item"
                            onMouseEnter={() => setHoveredItem(sub.href)}
                            onMouseLeave={() => setHoveredItem(null)}
                            data-hover
                          >
                            <div
                              className={`px-3 py-2.5 font-mono text-xs tracking-wide transition-all duration-100 flex items-center ${
                                location.pathname === sub.href
                                  ? 'text-neon bg-neon/10'
                                  : 'text-slate-400 hover:text-neon hover:bg-neon/5'
                              }`}
                            >
                              <span className="text-neon/50 mr-2">&gt;</span>
                              <span className="text-neon/70 mr-2">[{String(index + 1).padStart(2, '0')}]</span>
                              <span>{sub.terminalLabel}</span>
                              {hoveredItem === sub.href && <BlinkingCursor />}
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Terminal Footer */}
                      <div className="px-3 py-1.5 border-t border-neon/30 font-mono text-[9px] text-neon/40 tracking-wider">
                        SYS_READY // SELECT_MODULE
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-neon p-2"
            data-hover
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Also Terminal Style */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black pt-20 lg:hidden overflow-y-auto"
          >
            {/* Mobile Terminal Header */}
            <div className="px-6 py-3 border-b border-neon/30 font-mono text-xs text-neon/60">
              Z1_NAVIGATION_SYSTEM // MOBILE_INTERFACE
            </div>

            <div className="p-4 space-y-0">
              {navItems.map((item, navIndex) => (
                <div key={item.href} className="border-b border-neon/10">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between font-mono text-sm text-white py-4 px-2"
                      >
                        <span className="flex items-center">
                          <span className="text-neon/50 mr-2">&gt;</span>
                          <span className={location.pathname.startsWith(item.href) ? 'text-neon' : ''}>{item.label}</span>
                        </span>
                        <motion.span
                          animate={{ rotate: mobileSubmenu === item.label ? 180 : 0 }}
                          className="text-neon text-xs"
                        >
                          ▼
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileSubmenu === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-neon/5 border-l-2 border-neon/30 ml-4"
                          >
                            {item.submenu.map((sub, subIndex) => (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                className={`block font-mono text-xs py-3 px-4 ${
                                  location.pathname === sub.href
                                    ? 'text-neon bg-neon/10'
                                    : 'text-slate-400'
                                }`}
                              >
                                <span className="text-neon/50 mr-2">[{String(subIndex + 1).padStart(2, '0')}]</span>
                                {sub.terminalLabel}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center font-mono text-sm py-4 px-2 ${
                        location.pathname === item.href ? 'text-neon' : 'text-white'
                      }`}
                    >
                      <span className="text-neon/50 mr-2">&gt;</span>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Terminal Footer */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 border-t border-neon/20 bg-black font-mono text-[10px] text-neon/40">
              SYSTEM_STATUS: ONLINE // TAP_TO_NAVIGATE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
