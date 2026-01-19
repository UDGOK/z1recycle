import { motion } from 'framer-motion';

interface PageHeaderProps {
  section: string;
  title: string;
  highlight?: string;
  description?: string;
  image?: string;
}

export default function PageHeader({ section, title, highlight, description, image }: PageHeaderProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${image})`,
            transform: 'scale(1.1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        </div>
      )}

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-amber tracking-widest mb-4">
            // {section}
          </div>
          
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}{' '}
            {highlight && <span className="text-neon glow-text">{highlight}</span>}
          </h1>
          
          {description && (
            <p className="text-muted text-lg md:text-xl max-w-3xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Hazard tape */}
      <div className="absolute bottom-0 left-0 right-0 h-1 hazard-tape" />
    </section>
  );
}
