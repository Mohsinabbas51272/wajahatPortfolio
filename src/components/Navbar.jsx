import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import { scrollToSection } from '../utils/scrollUtils';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Expertise', target: 'expertise' },
  { label: 'Industries', target: 'industries' },
  { label: 'Global Hiring', target: 'global-hiring' },
  { label: 'Process', target: 'process' },
  { label: 'Skills', target: 'skills' },
  { label: 'Results', target: 'results' },
  { label: 'Services', target: 'services' },
  { label: 'Contact', target: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-navbar py-4 shadow-lg shadow-black/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection('home', 110);
            }}
            className="flex cursor-pointer items-center gap-2 group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brandBlue to-brandPurple text-xl font-bold tracking-wider text-white shadow-md shadow-brandBlue/20 group-hover:scale-105 transition-transform duration-300">
              {personalInfo.shortName}
            </div>
            <span className="hidden sm:inline font-display text-lg font-bold tracking-tight text-white group-hover:text-brandBlue transition-colors duration-300">
              Wajahat Ali Abbasi
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.target, 110);
                }}
                className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-textSecondary hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Let's Talk CTA button (Desktop) */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('contact', 110);
              }}
              className="cursor-pointer rounded-full bg-gradient-to-r from-brandBlue to-brandPurple px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-brandBlue/15 hover:shadow-brandBlue/35 hover:scale-[1.03] transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="rounded-lg p-2 text-textSecondary hover:bg-white/5 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden w-full bg-slate-950/95 border-b border-white/5 px-6 py-4 flex flex-col gap-1 overflow-hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(event) => {
                  event.preventDefault();
                  setMobileMenuOpen(false);
                  scrollToSection(item.target, 110);
                }}
                className="cursor-pointer rounded-lg px-4 py-3 text-base font-medium text-textSecondary hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                setMobileMenuOpen(false);
                scrollToSection('contact', 110);
              }}
              className="cursor-pointer mt-2 text-center rounded-lg bg-gradient-to-r from-brandBlue to-brandPurple py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-md"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
