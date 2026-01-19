import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', updatePosition);

    const interactiveElements = document.querySelectorAll('button, a, [data-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      {/* Crosshair */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
      >
        {/* Horizontal line */}
        <div className="absolute w-6 h-[2px] bg-neon left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        {/* Vertical line */}
        <div className="absolute w-[2px] h-6 bg-neon left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        {/* Center dot */}
        <motion.div 
          className="absolute w-2 h-2 rounded-full bg-neon left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            opacity: isHovering ? 1 : 0.5,
            scale: isHovering ? 1.5 : 1,
          }}
        />
      </motion.div>
    </>
  );
}
