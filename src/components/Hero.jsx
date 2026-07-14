import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import { FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { scrollToSection } from '../utils/scrollUtils';
import { personalInfo, typingTitles } from '../data/portfolioData';

// Generate typing sequence array for react-type-animation
const typingSequence = typingTitles.flatMap(title => [title, 2500]);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Floating gradient background blobs */}
      <div className="glow-blob w-[45vw] h-[45vw] bg-brandBlue/10 top-[-10%] left-[-10%] animate-gradient-pulse" />
      <div className="glow-blob w-[35vw] h-[35vw] bg-brandPurple/10 bottom-[10%] right-[-10%] animate-gradient-pulse" style={{ animationDelay: '-4s' }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'tween', duration: 0.5, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brandBlue/10 text-brandBlue border border-brandBlue/20">
                <span className="h-1.5 w-1.5 rounded-full bg-accentCyan animate-pulse" />
                Available for Global Recruitment Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'tween', duration: 0.5, ease: 'easeOut', delay: 0.12 }}
              className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'tween', duration: 0.5, ease: 'easeOut', delay: 0.22 }}
              className="mt-4 text-xl sm:text-2xl font-semibold text-textSecondary h-[40px] flex items-center justify-center lg:justify-start"
            >
              <TypeAnimation
                sequence={typingSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'tween', duration: 0.5, ease: 'easeOut', delay: 0.32 }}
              className="mt-6 text-base sm:text-lg text-textSecondary leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'tween', duration: 0.5, ease: 'easeOut', delay: 0.44 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                type="button"
                onClick={() => scrollToSection('contact', 110)}
                className="w-full sm:w-auto text-center rounded-full bg-gradient-to-r from-brandBlue to-brandPurple px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-brandBlue/20 hover:shadow-brandBlue/40 hover:scale-[1.03] transition-transform duration-200"
              >
                Let's Build Your Team
              </button>
              
              <a
                href={personalInfo.resumeUrl}
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:border-brandPurple hover:bg-brandPurple/10 transition-all duration-300"
              >
                <FiDownload size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-xs uppercase tracking-widest text-textSecondary font-semibold">Connect:</span>
              <div className="flex gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-textSecondary hover:border-brandBlue hover:text-brandBlue hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={16} />
                </a>
                <a
                  href={personalInfo.socials.email}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-textSecondary hover:border-brandBlue hover:text-brandBlue hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <FiMail size={16} />
                </a>
                {/* WhatsApp contact removed per request */}
              </div>
            </motion.div>
          </div>

          {/* Portrait Right Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[380px] lg:h-[380px] p-3 rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl shadow-brandBlue/10 animate-float"
            >
              {/* Image Frame with Gradient Border overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brandBlue/20 via-transparent to-brandPurple/20 pointer-events-none" />
              <img
                src="/images/wajahat_profile.png"
                alt="Wajahat Ali Abbasi - Recruitment Consultant"
                className="w-full h-full object-cover object-top rounded-2xl transition-all duration-500"
              />
              
              {/* Small floating badge */}
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-white">4+ Yrs Recruitment</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center border border-white/5"
            >
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-gradient">
                <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest text-textSecondary font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
