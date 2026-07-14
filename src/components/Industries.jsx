import React from 'react';
import { motion } from 'framer-motion';
import { FiTerminal, FiBriefcase, FiDatabase, FiRadio, FiCommand } from 'react-icons/fi';
import { industriesContent } from '../data/portfolioData';

const iconMap = [
  <FiTerminal size={22} className="text-brandBlue" />,
  <FiBriefcase size={22} className="text-brandPurple" />,
  <FiDatabase size={22} className="text-accentCyan" />,
  <FiRadio size={22} className="text-brandBlue" />,
  <FiCommand size={22} className="text-brandPurple" />
];

export default function Industries() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="industries" className="relative py-24 bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-brandBlue"
          >
            Sectors Covered
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
          >
            Industries & Niche <span className="text-gradient">Specializations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-textSecondary"
          >
            Connecting specialized talents with industry leaders across various sectors and critical business departments.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {industriesContent.map((industry, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className={`glass-card p-8 rounded-3xl border border-white/5 flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-2' : '' // Give IT sector wider scope
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/60 border border-white/10">
                    {iconMap[idx]}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {industry.category}
                    </h3>
                    <p className="text-xs text-textSecondary mt-0.5">
                      {industry.desc}
                    </p>
                  </div>
                </div>

                {/* Role Badges Grid */}
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {industry.roles.map((role, roleIdx) => (
                    <span
                      key={roleIdx}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-900/60 text-slate-350 border border-white/5 hover:border-brandBlue/35 hover:text-white transition-colors duration-200"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
