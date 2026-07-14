import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiGlobe, FiTool } from 'react-icons/fi';
import { globalRecruitment } from '../data/portfolioData';

// Svg map pins coordinates (relative %)
const mapPins = [
  { name: 'Canada', x: '25%', y: '33%', pulseColor: 'bg-brandBlue' },
  { name: 'United Kingdom', x: '45%', y: '30%', pulseColor: 'bg-brandPurple' },
  { name: 'Germany', x: '48%', y: '32%', pulseColor: 'bg-brandPurple' },
  { name: 'Saudi Arabia', x: '56%', y: '48%', pulseColor: 'bg-accentCyan' },
  { name: 'United Arab Emirates', x: '59%', y: '49%', pulseColor: 'bg-accentCyan' },
  { name: 'Pakistan', x: '65%', y: '48%', pulseColor: 'bg-brandBlue' },
  { name: 'Australia', x: '86%', y: '78%', pulseColor: 'bg-brandPurple' },
];

export default function GlobalHiring() {
  return (
    <section id="global-hiring" className="relative py-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brandBlue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-brandBlue"
          >
            International Sourcing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
          >
            {globalRecruitment.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-textSecondary"
          >
            {globalRecruitment.description}
          </motion.p>
        </div>

        {/* Global Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Map Column */}
          <div className="lg:col-span-7 relative h-[250px] sm:h-[400px] w-full rounded-3xl border border-white/5 bg-slate-950/50 backdrop-blur-sm overflow-hidden p-6">
            
            {/* World Map SVG Dot Background */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 500"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="dot-grid" width="12" height="12" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#94a3b8" />
                </pattern>
              </defs>
              <rect width="1000" height="500" fill="url(#dot-grid)" />
            </svg>

            {/* Svg connection curves */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Curve from Pakistan to UK */}
              <motion.path
                d="M 65 48 Q 55 25, 45 30"
                fill="none"
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="0.4"
                strokeDasharray="4, 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              {/* Curve from Pakistan to UAE */}
              <motion.path
                d="M 65 48 Q 62 45, 59 49"
                fill="none"
                stroke="rgba(6, 182, 212, 0.4)"
                strokeWidth="0.4"
                strokeDasharray="3, 3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              {/* Curve from UAE to Canada */}
              <motion.path
                d="M 59 49 Q 42 20, 25 33"
                fill="none"
                stroke="rgba(139, 92, 246, 0.4)"
                strokeWidth="0.4"
                strokeDasharray="4, 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, delay: 0.5 }}
              />
              {/* Curve from Pakistan to Australia */}
              <motion.path
                d="M 65 48 Q 75 68, 86 78"
                fill="none"
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="0.4"
                strokeDasharray="4, 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, delay: 0.5 }}
              />
            </svg>

            {/* Pulsing Map Pins */}
            <div className="absolute inset-0">
              {mapPins.map((pin, idx) => (
                <div
                  key={idx}
                  className="absolute"
                  style={{ left: pin.x, top: pin.y }}
                >
                  <span className="relative flex h-3.5 w-3.5">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pin.pulseColor}`} />
                    <span className={`relative inline-flex rounded-full h-3.5 w-3.5 border border-white/20 ${pin.pulseColor}`} />
                  </span>
                  {/* Pin label (visible on hover or default for some) */}
                  <span className="absolute left-4 -top-2 scale-75 sm:scale-100 origin-left rounded bg-slate-900/90 border border-white/10 px-2 py-0.5 text-[9px] font-semibold text-white whitespace-nowrap opacity-85 shadow">
                    {pin.name}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Sourcing details list */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            
            {/* Countries and Sourcing Regions Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 rounded-2xl border border-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brandBlue/10 text-brandBlue">
                  <FiGlobe size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">Target Regions & Placements</h3>
              </div>
              
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-textSecondary mb-3">Geographic Reach</h4>
                <div className="flex flex-wrap gap-2">
                  {globalRecruitment.countries.map((c, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brandBlue/5 text-brandBlue border border-brandBlue/10">
                      <FiMapPin size={10} />
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-white/5 pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-textSecondary mb-3">Sourcing Regions</h4>
                <div className="flex flex-wrap gap-2">
                  {globalRecruitment.regions.map((r, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brandPurple/5 text-brandPurple border border-brandPurple/10">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sourcing Tech / Tools Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card p-6 rounded-2xl border border-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accentCyan/10 text-accentCyan">
                  <FiTool size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">Tech Enabled Sourcing Stack</h3>
              </div>
              <p className="text-xs text-textSecondary mt-2">
                Utilizing state of the art search platforms, boolean logic, and automated ATS architectures.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {globalRecruitment.tools.map((tool, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/60 text-slate-350 border border-white/5">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
