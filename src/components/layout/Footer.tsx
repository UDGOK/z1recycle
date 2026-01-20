import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-neon/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="font-mono text-xl font-bold text-neon glow-text">
              Z1<span className="text-white">_RECYCLING</span>
            </Link>
            <p className="text-muted text-sm mt-4">
              State-of-the-art lithium-ion recycling and sodium-ion R&D facility in Mead, Oklahoma.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-sm text-neon mb-4">FACILITY</h4>
            <div className="space-y-2">
              <Link to="/facility" className="block text-muted text-sm hover:text-neon transition-colors">Overview</Link>
              <Link to="/facility/zone-a" className="block text-muted text-sm hover:text-neon transition-colors">Zone A</Link>
              <Link to="/facility/zone-b" className="block text-muted text-sm hover:text-neon transition-colors">Zone B</Link>
              <Link to="/facility/zone-c" className="block text-muted text-sm hover:text-neon transition-colors">Zone C</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-sm text-neon mb-4">PROCESS</h4>
            <div className="space-y-2">
              <Link to="/process/recycling" className="block text-muted text-sm hover:text-neon transition-colors">Recycling</Link>
              <Link to="/process/manufacturing" className="block text-muted text-sm hover:text-neon transition-colors">Manufacturing</Link>
              <Link to="/process/equipment" className="block text-muted text-sm hover:text-neon transition-colors">Equipment</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-sm text-neon mb-4">ABOUT</h4>
            <div className="space-y-2">
              <Link to="/about/timeline" className="block text-muted text-sm hover:text-neon transition-colors">Timeline</Link>
              <Link to="/about/faq" className="block text-muted text-sm hover:text-neon transition-colors">FAQ</Link>
              <Link to="/about/contact" className="block text-muted text-sm hover:text-neon transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-muted/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted">
            [ 2026 Z1 RECYCLING CENTER // MEAD, OKLAHOMA ]
          </div>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="font-mono text-xs text-muted hover:text-neon transition-colors">
              Terms of Service
            </Link>
            <div className="font-mono text-xs text-muted/50">
              LAT 33.9967 LONG -96.5122
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
