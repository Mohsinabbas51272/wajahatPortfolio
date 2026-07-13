import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiLayers, FiUsers, FiSliders, FiFileText, FiAward } from 'react-icons/fi';
import { expertiseContent } from '../data/portfolioData';

const iconMap = {
  1: <FiLayers className="text-brandBlue" size={22} />,
  2: <FiUsers className="text-brandPurple" size={22} />,
  3: <FiSliders className="text-accentCyan" size={22} />,
  4: <FiFileText className="text-brandBlue" size={22} />,
  5: <FiAward className="text-brandPurple" size={22} />
};

export default function Expertise() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="expertise" className="relative py-24 overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brandPurple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-brandBlue"
          >
            Core Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
          >
            Recruitment Service <span className="text-gradient">Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-textSecondary"
          >
            A high-touch, methodology-driven approach covering every stage of the talent acquisition lifecycle.
          </motion.p>
        </div>

        {/* Expertise Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertiseContent.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`glass-card p-8 rounded-3xl border border-white/5 flex flex-col h-full ${
                item.id === 4 ? 'lg:col-span-2' : '' // Balance out a 5-item grid
              }`}
            >
              {/* Card Title & Icon */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/60 border border-white/10">
                  {iconMap[item.id]}
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 text-sm text-textSecondary leading-relaxed">
                {item.desc}
              </p>

              {/* Sub-points / Operations */}
              <div className="mt-6 pt-6 border-t border-white/5 flex-grow">
                <ul className="space-y-3.5">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brandBlue/10 text-brandBlue">
                        <FiCheck size={10} />
                      </span>
                      <span className="text-sm font-medium text-slate-350 hover:text-white transition-colors duration-200">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
