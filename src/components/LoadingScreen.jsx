import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400); // Small pause for visual ease
          return 100;
        }
        // Increment randomly for a more natural feel
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-darkBg text-white select-none"
    >
      {/* Background radial glow */}
      <div className="absolute w-[40vw] h-[40vw] rounded-full bg-brandBlue/10 blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-[30vw] h-[30vw] rounded-full bg-brandPurple/10 blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative flex flex-col items-center">
        {/* Animated Rings & Logo */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-brandBlue border-b border-l border-brandBlue/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute inset-2 rounded-full border-b-2 border-l-2 border-brandPurple border-t border-r border-brandPurple/20"
          />
          
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-widest text-gradient"
          >
            WA
          </motion.span>
        </div>

        {/* Text and percentage */}
        <div className="mt-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            className="text-sm uppercase tracking-[0.25em] text-textSecondary"
          >
            Aligning Talent & Strategy
          </motion.p>
          
          <div className="mt-4 flex items-center justify-center gap-1 font-display">
            <span className="text-3xl font-light text-brandBlue">{progress}</span>
            <span className="text-sm font-medium text-textSecondary">%</span>
          </div>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden mt-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-brandBlue to-brandPurple"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
