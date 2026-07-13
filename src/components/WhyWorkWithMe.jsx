import React from 'react';
import { motion } from 'framer-motion';
import {
  FiAward,
  FiLayers,
  FiGlobe,
  FiTerminal,
  FiUserCheck,
  FiCpu,
  FiZap,
  FiSmile,
  FiBarChart2,
  FiLink,
  FiCheckCircle
} from 'react-icons/fi';
import { whyWorkWithMe } from '../data/portfolioData';

// Map icons corresponding to whyWorkWithMe array indices
const icons = [
  <FiAward className="text-brandBlue" size={20} />,
  <FiLayers className="text-brandPurple" size={20} />,
  <FiGlobe className="text-accentCyan" size={20} />,
  <FiTerminal className="text-brandBlue" size={20} />,
  <FiUserCheck className="text-brandPurple" size={20} />,
  <FiCpu className="text-accentCyan" size={20} />,
  <FiZap className="text-brandBlue" size={20} />,
  <FiSmile className="text-brandPurple" size={20} />,
  <FiBarChart2 className="text-accentCyan" size={20} />,
  <FiLink className="text-brandBlue" size={20} />
];

export default function WhyWorkWithMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="why-work-with-me" className="relative py-24 overflow-hidden">
      {/* Glow effect */}
      <div className="glow-blob w-[450px] h-[450px] bg-brandBlue/5 bottom-0 left-1/3 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-brandBlue"
          >
            Differentiators
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
          >
            Why Work <span className="text-gradient">With Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-textSecondary"
          >
            Leveraging structured operations, market analytics, and modern tool stacks to deliver top-tier candidate alignment.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyWorkWithMe.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-4 hover:shadow-lg hover:shadow-brandPurple/5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900/60 border border-white/10">
                {icons[idx] || <FiCheckCircle size={20} className="text-brandBlue" />}
              </div>
              <h3 className="font-display text-sm sm:text-base font-semibold text-white tracking-wide">
                {feature}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
