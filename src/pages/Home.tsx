import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import AnimatedCounter from '../components/ui/AnimatedCounter';

// Floating particles background - green/cyan only
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; color: string; alpha: number }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const count = Math.min(120, Math.floor(canvas.width * canvas.height / 8000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          color: Math.random() > 0.5 ? '#00ff88' : '#00aaff',
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 15;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw connecting lines for nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.03)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

// Image showcase modal
function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} className="w-full h-auto rounded-lg border border-neon/30 shadow-2xl shadow-neon/20" />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-slate-900 border border-neon text-neon rounded-full flex items-center justify-center hover:bg-neon hover:text-slate-950 transition-all"
        >
          X
        </button>
        <div className="absolute bottom-4 left-4 font-mono text-sm text-neon bg-slate-950/80 px-3 py-1">
          {alt}
        </div>
      </motion.div>
    </motion.div>
  );
}

const facilityImages = [
  { src: '/isometric-overview.png', alt: 'Facility Overview', zone: 'ALL ZONES' },
  { src: '/recycling-area.png', alt: 'Zone A - Recycling', zone: 'ZONE A' },
  { src: '/utility-spine.png', alt: 'Zone B - Utility', zone: 'ZONE B' },
  { src: '/dry-room.png', alt: 'Zone C - Manufacturing', zone: 'ZONE C' },
];

const quickLinks = [
  { title: 'ZONE A', subtitle: 'Recycling', href: '/facility/zone-a', color: '#00ff88' },
  { title: 'ZONE B', subtitle: 'Utility Spine', href: '/facility/zone-b', color: '#0ea5e9' },
  { title: 'ZONE C', subtitle: 'Manufacturing', href: '/facility/zone-c', color: '#00aaff' },
  { title: 'EQUIPMENT', subtitle: 'Full Guide', href: '/process/equipment', color: '#00ff88' },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const [selectedImage, setSelectedImage] = useState<typeof facilityImages[0] | null>(null);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTyping(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Ken Burns background image */}
        <motion.div 
          className="absolute inset-0"
          style={{ y, scale }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/facility-overview.png)' }}
          />
          {/* Gradient overlay - green/cyan tones */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 via-transparent to-cyan-950/30" />
        </motion.div>

        {/* Animated grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-30" />
        
        {/* Particle field */}
        <ParticleField />

        <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Compliance Badges */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-6"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 border border-neon/30 bg-neon/5 backdrop-blur-sm">
                <div className="w-2 h-2 bg-neon rounded-full animate-pulse shadow-[0_0_8px_#00ff88]" />
                <span className="font-mono text-[10px] md:text-xs text-neon">100% FEOC-FREE</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]" />
                <span className="font-mono text-[10px] md:text-xs text-cyan-400">DOMESTIC SUPPLY CHAIN</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 border border-amber-400/30 bg-amber-400/5 backdrop-blur-sm">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-[0_0_8px_#fbbf24]" />
                <span className="font-mono text-[10px] md:text-xs text-amber-400">JUSTICE40 REGION</span>
              </div>
            </motion.div>

            {/* Location tag */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-xs text-cyan-400/70 mb-6 tracking-widest"
            >
              [ BRYAN COUNTY, OKLAHOMA // CHOCTAW NATION TERRITORY ]
            </motion.div>

            {/* Main headline */}
            <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white"
              >
                SECURING AMERICA'S{' '}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="text-neon glow-text"
              >
                ENERGY FUTURE
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-xl md:text-2xl mb-10 font-mono"
            >
              DOMESTIC CRITICAL MATERIALS INFRASTRUCTURE
            </motion.p>

            {/* Animated Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
            >
              {[
                { end: 95, suffix: '%+', label: 'RECOVERY RATE', delay: 0 },
                { end: 60000, suffix: ' SF', label: 'FACILITY', delay: 0.1 },
                { end: 70, suffix: '%', label: 'CO2 REDUCTION', delay: 0.2 },
                { end: 0, suffix: 'ZLD', label: 'ZERO DISCHARGE', delay: 0.3, isText: true },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + stat.delay }}
                  className="text-center group"
                >
                  <div className="font-mono text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-neon to-cyan-400 group-hover:drop-shadow-[0_0_20px_rgba(0,255,136,0.5)] transition-all">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="font-mono text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/strategic-impact"
                className="group relative px-8 py-4 border-2 border-neon text-neon font-mono font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:text-slate-950"
                data-hover
              >
                <span className="relative z-10">VIEW STRATEGIC IMPACT</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon to-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
              <Link
                to="/about/contact"
                className="px-8 py-4 border-2 border-slate-600 text-slate-400 font-mono font-bold uppercase tracking-wider hover:border-cyan-400 hover:text-cyan-400 transition-all"
                data-hover
              >
                CONTACT US
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-cyan-400/50">SCROLL</span>
            <div className="w-6 h-10 border-2 border-neon/50 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1 h-2 bg-neon rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom gradient line instead of hazard tape */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
      </section>

      {/* Facility Gallery Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/10 to-slate-950" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// FACILITY OVERVIEW</div>
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
              EXPLORE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-cyan-400">FACILITY</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              60,000 SF purpose-built structure with three specialized zones for complete battery lifecycle management.
            </p>
          </motion.div>

          {/* Image Grid with animations */}
          <div className="grid md:grid-cols-2 gap-6">
            {facilityImages.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(img)}
                data-hover
              >
                {/* Image container with glow effect */}
                <div className="relative border border-slate-700 group-hover:border-neon/50 transition-all duration-500 overflow-hidden">
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Glow border on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 border-2 border-neon/30 shadow-[inset_0_0_30px_rgba(0,255,136,0.1)]" />
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono text-xs text-cyan-400 mb-1">{img.zone}</div>
                    <div className="font-mono text-lg text-white group-hover:text-neon transition-colors">{img.alt}</div>
                  </div>

                  {/* Expand icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// QUICK ACCESS</div>
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
              DIVE <span className="text-neon">DEEPER</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className="block p-6 border border-slate-700 hover:border-opacity-100 transition-all group relative overflow-hidden"
                  style={{ '--glow-color': link.color } as React.CSSProperties}
                  data-hover
                >
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `radial-gradient(circle at center, ${link.color}10 0%, transparent 70%)`,
                      boxShadow: `inset 0 0 30px ${link.color}10`
                    }}
                  />
                  
                  <div className="relative">
                    <div 
                      className="font-mono text-3xl font-bold mb-2 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_var(--glow-color)]"
                      style={{ color: link.color }}
                    >
                      {link.title}
                    </div>
                    <div className="text-slate-400 text-sm mb-4">{link.subtitle}</div>
                    <div className="flex items-center text-slate-500 group-hover:text-white transition-colors">
                      <span className="font-mono text-xs">EXPLORE</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Oklahoma Strategic Advantage Callout */}
      <section className="py-16 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Terminal-style container */}
            <div className="border border-neon/40 bg-black/60 backdrop-blur-sm relative overflow-hidden">
              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.03) 2px, rgba(0,255,136,0.03) 4px)' 
                }} />
              </div>
              
              {/* Header bar */}
              <div className="flex items-center gap-3 px-4 py-2 border-b border-neon/20 bg-neon/5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <span className="font-mono text-[10px] text-neon/60 tracking-widest">STRATEGIC_ADVANTAGE.SYS</span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 relative">
                {/* Location icon */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-4xl md:text-5xl opacity-20"
                  >
                    📍
                  </motion.div>
                </div>

                <div className="font-mono text-xs text-cyan-400 tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]" />
                  LOCATION INTELLIGENCE
                </div>

                <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
                  <span className="text-neon text-2xl font-mono">"</span>
                  Unlike coastal projects facing zoning gridlock, Z1 Recycle operates within the{' '}
                  <span className="text-neon font-semibold">'Oklahoma Critical Minerals Hub,'</span>{' '}
                  a state-sanctioned zone with{' '}
                  <span className="text-cyan-400">expedited permitting</span>, deep energy workforce availability{' '}
                  <span className="text-slate-400 text-base">(transitioning oil/gas workers)</span>, and{' '}
                  <span className="text-cyan-400">direct rail access</span> to the Central US manufacturing corridor.
                  <span className="text-neon text-2xl font-mono">"</span>
                </blockquote>

                {/* Key advantages pills */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {['EXPEDITED PERMITS', 'SKILLED WORKFORCE', 'RAIL ACCESS', 'ZERO GRIDLOCK'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 border border-neon/30 text-neon/80 font-mono text-[10px] tracking-wider bg-neon/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glowing corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon shadow-[0_0_15px_rgba(0,255,136,0.3)]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon shadow-[0_0_15px_rgba(0,255,136,0.3)]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Process Infographic */}
      <section className="py-24 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-cyan-950/10 to-slate-950" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// PROCESS</div>
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
              HOW IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-cyan-400">WORKS</span>
            </h2>
          </motion.div>

          {/* Infographic Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group cursor-pointer mx-auto max-w-5xl"
            onClick={() => setSelectedImage({ src: '/z1-journey.png', alt: 'Z1 Battery Recycling Process Journey', zone: 'Process Overview' })}
          >
            {/* Outer glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon/20 via-cyan-500/20 to-neon/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
            
            {/* Terminal frame */}
            <div className="relative bg-black/80 border border-neon/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,136,0.15)] group-hover:shadow-[0_0_50px_rgba(0,255,136,0.25)] transition-all duration-300">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border-b border-neon/20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neon/70" />
                </div>
                <span className="font-mono text-xs text-cyan-400/70 ml-2">PROCESS_OVERVIEW.SYS</span>
                <span className="font-mono text-xs text-slate-500 ml-auto">[ CLICK TO EXPAND ]</span>
              </div>
              
              {/* Image container */}
              <div className="relative p-4">
                <img
                  src="/z1-journey.png"
                  alt="Z1 Battery Recycling Process Journey"
                  className="w-full h-auto rounded group-hover:scale-[1.01] transition-transform duration-300"
                />
                
                {/* Scanline overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,136,0.03)_2px,rgba(0,255,136,0.03)_4px)]" />
              </div>
            </div>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon/50 -translate-x-1 -translate-y-1" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neon/50 translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neon/50 -translate-x-1 translate-y-1" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon/50 translate-x-1 translate-y-1" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/process/recycling"
              className="inline-flex items-center gap-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-neon to-cyan-400 hover:underline"
              data-hover
            >
              Learn More About Our Process
              <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
