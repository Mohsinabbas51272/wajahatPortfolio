import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function CtaSection() {
  return (
    <section className="relative py-20 bg-slate-950/60 overflow-hidden border-y border-white/5">
      {/* Glow shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brandBlue/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 sm:p-14 rounded-3xl border border-white/5 flex flex-col items-center justify-center shadow-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brandBlue">Partner with Me</span>
          
          <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug max-w-2xl">
            Looking to Build a <span className="text-gradient">High-Performing Team?</span>
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-textSecondary max-w-xl leading-relaxed">
            Whether you're hiring your first employee or scaling an entire department, I can help you identify, attract, and secure the right talent efficiently.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer rounded-full bg-gradient-to-r from-brandBlue to-brandPurple px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:scale-[1.03] transition-all duration-300 shadow-md shadow-brandBlue/10"
            >
              Let's Work Together
              <FiArrowRight size={14} />
            </Link>
            
            <a
              href={personalInfo.socials.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:border-accentCyan hover:bg-accentCyan/10 transition-all duration-300"
            >
              <FiCalendar size={14} />
              Schedule Meeting
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
