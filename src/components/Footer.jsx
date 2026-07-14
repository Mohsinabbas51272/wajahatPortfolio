import React from 'react';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-slate-950/80 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer font-display text-xl font-bold tracking-tight text-white hover:text-brandBlue transition-colors duration-200"
            >
              {personalInfo.name}
            </Link>
            <p className="mt-1.5 text-xs text-textSecondary uppercase tracking-widest">
              Recruitment Consultant | Talent Acquisition Specialist
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-textSecondary hover:border-brandBlue hover:bg-brandBlue/10 hover:text-brandBlue transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={personalInfo.socials.email}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-textSecondary hover:border-brandBlue hover:bg-brandBlue/10 hover:text-brandBlue transition-all duration-300"
              aria-label="Email Address"
            >
              <FiMail size={18} />
            </a>
            {/* WhatsApp contact removed */}
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row text-center text-xs text-textSecondary">
          <p>© {currentYear} {personalInfo.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="expertise"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-white transition-colors"
            >
              Expertise
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
