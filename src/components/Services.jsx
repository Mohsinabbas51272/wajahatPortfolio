import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckSquare } from 'react-icons/fi';
import { servicesContent } from '../data/portfolioData';

export default function Services() {
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
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="relative py-24 bg-slate-950/40 overflow-hidden">
      {/* Background decoration glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-brandBlue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-brandBlue"
          >
            Services Offered
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
          >
            Tailored Talent <span className="text-gradient">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-textSecondary"
          >
            Bespoke recruitment services built to scale team capabilities, reduce hiring friction, and fill open roles efficiently.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {servicesContent.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 6, borderColor: 'rgba(59, 130, 246, 0.2)' }}
              className="glass-card p-6 rounded-2xl border border-white/5 flex items-start gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brandBlue/10 text-brandBlue">
                <FiCheckSquare size={18} />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-textSecondary leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
