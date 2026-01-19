import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'STRATEGIC IMPACT', href: '/strategic-impact' },
  { label: 'TECHNOLOGY', href: '/technology' },
  {
    label: 'FACILITY',
    href: '/facility',
    submenu: [
      { label: 'Overview', href: '/facility' },
      { label: 'Zone A - Recycling', href: '/facility/zone-a' },
      { label: 'Zone B - Utility', href: '/facility/zone-b' },
      { label: 'Zone C - Manufacturing', href: '/facility/zone-c' },
    ],
  },
  {
    label: 'PROCESS',
    href: '/process',
    submenu: [
      { label: 'Recycling (Zone A)', href: '/process/recycling' },
      { label: 'Manufacturing (Zone C)', href: '/process/manufacturing' },
      { label: 'Equipment Guide', href: '/process/equipment' },
    ],
  },
  { label: 'SUSTAINABILITY', href: '/sustainability' },
  {
    label: 'ABOUT',
    href: '/about',
    submenu: [
      { label: 'Timeline', href: '/about/timeline' },
      { label: 'Team', href: '/about/team' },
      { label: 'FAQ', href: '/about/faq' },
      { label: 'Contact', href: '/about/contact' },
    ],
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
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
                  {item.submenu && <span className="ml-1 text-xs">▼</span>}
                </Link>

                {/* Submenu */}
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 min-w-[200px] bg-slate-900/95 backdrop-blur-md border border-neon/20"
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className={`block px-4 py-3 font-mono text-xs transition-colors border-b border-gray-800 last:border-0 ${
                            location.pathname === sub.href
                              ? 'text-neon bg-neon/10'
                              : 'text-muted hover:text-neon hover:bg-white/5'
                          }`}
                          data-hover
                        >
                          {sub.label}
                        </Link>
                      ))}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950 pt-20 lg:hidden overflow-y-auto"
          >
            <div className="p-6 space-y-1 pb-24">
              {navItems.map((item) => (
                <div key={item.href} className="border-b border-slate-800">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between font-mono text-base text-white py-4 px-2"
                      >
                        <span className={location.pathname.startsWith(item.href) ? 'text-neon' : ''}>{item.label}</span>
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
                            className="overflow-hidden bg-slate-900/50"
                          >
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                className={`block font-mono text-sm py-3 px-6 border-l-2 ${
                                  location.pathname === sub.href
                                    ? 'text-neon border-neon bg-neon/5'
                                    : 'text-slate-400 border-transparent hover:text-white'
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block font-mono text-base py-4 px-2 ${
                        location.pathname === item.href ? 'text-neon' : 'text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
