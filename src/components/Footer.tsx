import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-neon/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono text-xl font-bold text-neon glow-text">
            Z1<span className="text-white">_RECYCLING</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {['HOME', 'FACILITY', 'PROCESS', 'SUSTAINABILITY', 'TIMELINE', 'CONTACT'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-xs text-muted hover:text-neon transition-colors"
                data-hover
              >
                {item}
              </a>
            ))}
          </div>

          <div className="font-mono text-xs text-muted">
            [ 2026 Z1 RECYCLING CENTER ]
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-muted/10 text-center"
        >
          <div className="font-mono text-xs text-muted/50">
            CLOSING THE LOOP // 8460 US 70, MEAD OK 73449 // LAT 33.9967 LONG -96.5122
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
