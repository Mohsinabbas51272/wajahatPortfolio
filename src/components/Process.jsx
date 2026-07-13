import React from 'react';
import { motion } from 'framer-motion';
import { recruitmentProcess } from '../data/portfolioData';

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-slate-950/40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brandPurple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-brandBlue"
          >
            My Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
          >
            Structured Recruitment <span className="text-gradient">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-textSecondary"
          >
            A systematic, data-backed 6-stage search methodology engineered to find, assess, and onboarding top-performing talent.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-16">
          
          {/* Central vertical line on desktop */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-[1px] timeline-line opacity-30 pointer-events-none" />

          <div className="space-y-12">
            {recruitmentProcess.map((step, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-stretch md:justify-between relative ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Badge Point */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-brandBlue/35 text-brandBlue font-display text-sm font-bold shadow-lg shadow-brandBlue/10 hover:border-brandPurple hover:text-brandPurple transition-colors duration-300"
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Left spacer on desktop */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Content card on the other side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full md:w-[45%] pl-12 md:pl-0"
                  >
                    <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 relative group hover:border-brandPurple/30">
                      
                      {/* Step Indicator on Card */}
                      <span className="text-xs font-semibold text-brandBlue uppercase tracking-widest">
                        Phase {step.step}
                      </span>
                      
                      <h3 className="mt-2 font-display text-lg sm:text-xl font-bold text-white group-hover:text-brandPurple transition-colors duration-200">
                        {step.title}
                      </h3>
                      
                      <p className="mt-3 text-sm text-textSecondary leading-relaxed">
                        {step.desc}
                      </p>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
