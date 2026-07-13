import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseGlow() {
  const [isMobile, setIsMobile] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor glow follow lag (feels premium)
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    // Check if device supports hover/mouse interactions
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setIsMobile(mediaQuery.matches);

    const handleMouseMove = (e) => {
      // Offset by half of glow width (150px) to center it
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    if (!mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        x: glowX,
        y: glowY,
      }}
      className="pointer-events-none fixed left-0 top-0 z-30 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,rgba(139,92,246,0.03)_50%,transparent_100%)] blur-[40px] will-change-transform"
    />
  );
}
