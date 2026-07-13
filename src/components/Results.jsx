import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiTarget, FiZap, FiCpu, FiGlobe, FiUsers, FiShuffle } from 'react-icons/fi';
import { resultsContent } from '../data/portfolioData';

// Map icons to the result items
const icons = [
  <FiUsers size={22} className="text-brandBlue" />,
  <FiTarget size={22} className="text-brandPurple" />,
  <FiZap size={22} className="text-accentCyan" />,
  <FiGlobe size={22} className="text-brandBlue" />,
  <FiCpu size={22} className="text-brandPurple" />,
  <FiTrendingUp size={22} className="text-accentCyan" />,
  <FiShuffle size={22} className="text-brandBlue" />
];

export default function Results() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="results" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-brandPurple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-brandBlue"
          >
            Track Record
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
          >
            Milestones & <span className="text-gradient">Key Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-textSecondary"
          >
            Demonstrated performance in building engineering teams, optimizing applicant funnels, and managing global stakeholders.
          </motion.p>
        </div>

        {/* Results Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {resultsContent.map((result, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between ${
                idx === 6 ? 'md:col-span-2 lg:col-span-3' : '' // Stretch last item for alignment
              }`}
            >
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900/60 border border-white/10">
                  {icons[idx]}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white tracking-wide leading-snug">
                    {result}
                  </h3>
                  <p className="text-xs text-textSecondary mt-2">
                    Verified milestone in end-to-end recruitment pipelines.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
