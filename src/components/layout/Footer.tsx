import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-neon/10 bg-slate-950">
      {/* Compliance Banner */}
      <div className="py-4 bg-gradient-to-r from-emerald-950/30 via-slate-950 to-cyan-950/30 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon rounded-full shadow-[0_0_8px_#00ff88]" />
              <span className="font-mono text-xs text-neon">100% FEOC-FREE</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-slate-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
              <span className="font-mono text-xs text-cyan-400">DOMESTIC SUPPLY CHAIN</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-slate-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_8px_#fbbf24]" />
              <span className="font-mono text-xs text-amber-400">JUSTICE40 PRIORITY REGION</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <Link to="/" className="font-mono text-xl font-bold text-neon glow-text">
                Z1<span className="text-white">_RECYCLING</span>
              </Link>
              <p className="text-muted text-sm mt-4 mb-4">
                State-of-the-art lithium-ion recycling and sodium-ion R&D facility in Mead, Oklahoma. Securing America's critical mineral supply chain.
              </p>
              {/* Key Metrics */}
              <div className="flex gap-6 mb-4">
                <div>
                  <div className="font-mono text-lg text-neon">95%+</div>
                  <div className="font-mono text-[10px] text-slate-500">RECOVERY RATE</div>
                </div>
                <div>
                  <div className="font-mono text-lg text-cyan-400">ZLD</div>
                  <div className="font-mono text-[10px] text-slate-500">ZERO DISCHARGE</div>
                </div>
                <div>
                  <div className="font-mono text-lg text-neon">Q2 2027</div>
                  <div className="font-mono text-[10px] text-slate-500">OPERATIONS</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-mono text-sm text-neon mb-4">FACILITY</h4>
              <div className="space-y-2">
                <Link to="/facility" className="block text-muted text-sm hover:text-neon transition-colors">Overview</Link>
                <Link to="/facility/zone-a" className="block text-muted text-sm hover:text-neon transition-colors">Zone A - Recycling</Link>
                <Link to="/facility/zone-b" className="block text-muted text-sm hover:text-neon transition-colors">Zone B - Utility</Link>
                <Link to="/facility/zone-c" className="block text-muted text-sm hover:text-neon transition-colors">Zone C - Manufacturing</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-mono text-sm text-neon mb-4">TECHNOLOGY</h4>
              <div className="space-y-2">
                <Link to="/technology" className="block text-muted text-sm hover:text-neon transition-colors">Tech Specs</Link>
                <Link to="/process/recycling" className="block text-muted text-sm hover:text-neon transition-colors">Li-ion Recycling</Link>
                <Link to="/process/manufacturing" className="block text-muted text-sm hover:text-neon transition-colors">Na-ion R&D</Link>
                <Link to="/sustainability" className="block text-muted text-sm hover:text-neon transition-colors">Sustainability</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-mono text-sm text-neon mb-4">COMMUNITY</h4>
              <div className="space-y-2">
                <Link to="/community" className="block text-muted text-sm hover:text-neon transition-colors">Benefits Plan</Link>
                <Link to="/about/team" className="block text-muted text-sm hover:text-neon transition-colors">Leadership</Link>
                <Link to="/about/timeline" className="block text-muted text-sm hover:text-neon transition-colors">Timeline</Link>
                <Link to="/about/contact" className="block text-muted text-sm hover:text-neon transition-colors">Contact</Link>
              </div>
            </div>
          </div>

          {/* Tribal Acknowledgment */}
          <div className="py-6 border-t border-b border-slate-800 mb-6">
            <p className="text-center text-slate-500 text-xs font-mono max-w-3xl mx-auto">
              Z1 Recycling operates within the jurisdictional territory of the{' '}
              <span className="text-amber-400">Choctaw Nation of Oklahoma</span>. 
              We acknowledge and respect the Choctaw people's enduring connection to this land.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="font-mono text-xs text-muted">
                © 2026 Z1 RECYCLING CENTER
              </div>
              <div className="w-px h-3 bg-slate-700" />
              <div className="flex items-center gap-1.5 px-2 py-0.5 border border-neon/40 bg-neon/5">
                <div className="w-1.5 h-1.5 bg-neon rounded-full shadow-[0_0_6px_#00ff88]" />
                <span className="font-mono text-[10px] text-neon font-medium">FEOC-FREE</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link to="/community" className="font-mono text-xs text-muted hover:text-neon transition-colors">
                Community Benefits
              </Link>
              <Link to="/terms" className="font-mono text-xs text-muted hover:text-neon transition-colors">
                Terms of Service
              </Link>
              <div className="font-mono text-xs text-muted/50">
                LAT 33.9967 LONG -96.5122
              </div>
            </div>
          </div>

          {/* Federal Registration Placeholder */}
          <div className="mt-6 pt-6 border-t border-slate-800/50 text-center">
            <div className="font-mono text-[10px] text-slate-600">
              UEI: PENDING | CAGE: PENDING | SAM.GOV REGISTRATION IN PROGRESS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
