import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Animated canvas-based background instead of Three.js due to compatibility
function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(100, Math.floor(canvas.width * canvas.height / 10000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          color: Math.random() > 0.7 ? '#ffb700' : '#00ff88',
        });
      }
    };

    const drawBattery = (x: number, y: number, scale: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(scale, scale);

      // Battery body
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = 20;

      ctx.beginPath();
      ctx.roundRect(-30, -50, 60, 100, 8);
      ctx.stroke();

      // Battery terminal
      ctx.beginPath();
      ctx.roundRect(-10, -58, 20, 10, 4);
      ctx.stroke();

      // Energy lines
      ctx.strokeStyle = '#00ff8844';
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(-20, -30 + i * 25);
        ctx.lineTo(20, -30 + i * 25);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawConveyor = () => {
      const y = canvas.height * 0.7;
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 40;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();

      // Conveyor segments
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      const time = Date.now() / 1000;
      const offset = (time * 50) % 40;
      for (let x = offset - 40; x < canvas.width + 40; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, y - 18);
        ctx.lineTo(x, y + 18);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw conveyor
      drawConveyor();

      // Draw batteries
      const time = Date.now() / 2000;
      drawBattery(canvas.width * 0.3, canvas.height * 0.5, 1.2, Math.sin(time) * 0.1);
      drawBattery(canvas.width * 0.5, canvas.height * 0.45, 1.5, Math.cos(time) * 0.1);
      drawBattery(canvas.width * 0.7, canvas.height * 0.52, 1, Math.sin(time + 1) * 0.1);

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

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

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Canvas Background */}
      <AnimatedBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Technical annotation */}
          <div className="font-mono text-xs text-muted mb-4 tracking-widest">
            [ DURANT, OKLAHOMA // LAT 33.9937 LONG -96.3706 ]
          </div>

          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">CLOSING THE </span>
            <span className="text-neon glow-text">LOOP</span>
            <br />
            <span className="text-muted text-2xl md:text-3xl lg:text-4xl">THE FUTURE OF BATTERY RECYCLING</span>
          </h1>

          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-8">
            60,000 SF state-of-the-art lithium-ion recycling and sodium-ion R&D facility. 
            Zero liquid discharge. Circular economy.
          </p>

          <motion.a
            href="#facility"
            className="btn-glitch inline-block px-8 py-4 border-2 border-neon text-neon font-mono font-bold uppercase tracking-wider hover:bg-neon hover:text-slate-950 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-hover
          >
            EXPLORE OUR FACILITY
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-neon/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-neon rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Hazard tape decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-2 hazard-tape z-20" />
    </section>
  );
}
