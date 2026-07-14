import React from 'react';
import { motion } from 'framer-motion';
import { skillsContent } from '../data/portfolioData';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-slate-950/40 overflow-hidden">
      {/* Background radial overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brandBlue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-brandBlue"
          >
            Core Competencies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
          >
            Sourcing & Recruitment <span className="text-gradient">Skillset</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-textSecondary"
          >
            Advanced recruiting techniques, digital search platforms, negotiation, and process mapping workflows.
          </motion.p>
        </div>

        {/* Skills Board */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-center gap-3.5 max-w-4xl mx-auto"
        >
          {skillsContent.map((skill, idx) => {
            // Apply different styles randomly or cyclically for a vibrant look
            const colors = [
              'hover:border-brandBlue hover:text-brandBlue hover:bg-brandBlue/5',
              'hover:border-brandPurple hover:text-brandPurple hover:bg-brandPurple/5',
              'hover:border-accentCyan hover:text-accentCyan hover:bg-accentCyan/5',
            ];
            const colorClass = colors[idx % colors.length];

            return (
              <motion.span
                key={idx}
                variants={badgeVariants}
                whileHover={{ scale: 1.05 }}
                className={`cursor-default px-5 py-2.5 rounded-full text-sm font-semibold bg-slate-900/55 border border-white/5 text-slate-350 shadow-md transition-colors duration-300 ${colorClass}`}
              >
                {skill}
              </motion.span>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
