import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiGlobe, FiCpu, FiSearch, FiTrendingUp } from 'react-icons/fi';
import { aboutContent } from '../data/portfolioData';

// Map icons to the keys of featureCards
const iconMap = [
  <FiBriefcase className="text-brandBlue" size={24} />,
  <FiGlobe className="text-brandPurple" size={24} />,
  <FiCpu className="text-accentCyan" size={24} />,
  <FiSearch className="text-brandBlue" size={24} />,
  <FiTrendingUp className="text-brandPurple" size={24} />
];

export default function About() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="relative py-24 bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-brandBlue">About Me</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Building Teams That <span className="text-gradient">Drive Business Growth</span>
            </h2>
            
            <div className="mt-8 space-y-6 text-textSecondary text-base sm:text-lg leading-relaxed">
              {aboutContent.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Value Offerings Grid */}
          <div className="lg:col-span-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {aboutContent.featureCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className={`glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-start gap-4 ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/60 border border-white/10">
                    {iconMap[idx]}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-textSecondary leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
