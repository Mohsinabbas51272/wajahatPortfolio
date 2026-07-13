import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { FiMail, FiLinkedin, FiClock, FiCheck, FiCalendar } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    company_name: '',
    user_email: '',
    hiring_requirement: 'Full-Cycle Recruitment',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Retrieve environment variables (or fall back to mock sending for demo ease)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Graceful fallback simulation if keys are not set up yet
      setTimeout(() => {
        toast.success('Hiring request sent successfully! (Demo Mode)', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        setLoading(false);
        setFormData({
          user_name: '',
          company_name: '',
          user_email: '',
          hiring_requirement: 'Full-Cycle Recruitment',
          message: ''
        });
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        toast.success('Hiring request sent! Wajahat will get in touch.', {
          position: "top-right",
          autoClose: 4000,
          theme: "dark"
        });
        setFormData({
          user_name: '',
          company_name: '',
          user_email: '',
          hiring_requirement: 'Full-Cycle Recruitment',
          message: ''
        });
      }, (error) => {
        console.error(error.text);
        toast.error('Failed to send email. Please try email or LinkedIn.', {
          position: "top-right",
          autoClose: 4000,
          theme: "dark"
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background visual element */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brandBlue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-brandBlue"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
          >
            Let's Build <span className="text-gradient">Your Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-textSecondary"
          >
            Ready to secure top performing talent? Drop your requirements and start building today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Card Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Availability Widget */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Current Status</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Available for Remote & International Projects
              </h3>
              <div className="flex items-center gap-2.5 text-sm text-textSecondary">
                <FiClock size={16} className="text-brandBlue" />
                <span>Response Time: Within 24 Hours</span>
              </div>
            </div>

            {/* Info details */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-6">
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brandBlue/10 text-brandBlue">
                  <FiMail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-textSecondary">Email Address</h4>
                  <a href={personalInfo.socials.email} className="mt-1 text-sm sm:text-base font-semibold text-white hover:text-brandBlue transition-colors block break-all">
                    {personalInfo.socials.emailRaw}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brandPurple/10 text-brandPurple">
                  <FiLinkedin size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-textSecondary">LinkedIn Connection</h4>
                  <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1 text-sm sm:text-base font-semibold text-white hover:text-brandPurple transition-colors block break-all">
                    linkedin.com/in/wajahat-ali-abbasi
                  </a>
                </div>
              </div>

              {/* Calendly Booking Link */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accentCyan/10 text-accentCyan">
                  <FiCalendar size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-textSecondary">Schedule a Consultation</h4>
                  <a href={personalInfo.socials.calendly} target="_blank" rel="noopener noreferrer" className="mt-1 text-sm sm:text-base font-semibold text-white hover:text-accentCyan transition-colors block">
                    Book Google Meet / Calendly Call
                  </a>
                </div>
              </div>

            </div>

            {/* Services scope checkmark list */}
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-textSecondary mb-4">Core Scope Available</h4>
              <ul className="grid grid-cols-2 gap-3 text-xs font-semibold text-white">
                <li className="flex items-center gap-2">
                  <FiCheck size={14} className="text-brandBlue" /> Full-Cycle Recruitment
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck size={14} className="text-brandPurple" /> Tech Talent Sourcing
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck size={14} className="text-accentCyan" /> Executive Search
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck size={14} className="text-brandBlue" /> Contract Sourcing
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck size={14} className="text-brandPurple" /> Workflow Consulting
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck size={14} className="text-accentCyan" /> Branding Support
                </li>
              </ul>
            </div>

          </motion.div>

          {/* Form Card Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/5">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="user_name" className="block text-xs font-semibold uppercase tracking-widest text-textSecondary">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition duration-200"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company_name" className="block text-xs font-semibold uppercase tracking-widest text-textSecondary">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    id="company_name"
                    required
                    value={formData.company_name}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="mt-2 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="user_email" className="block text-xs font-semibold uppercase tracking-widest text-textSecondary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="Enter your professional email"
                    className="mt-2 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition duration-200"
                  />
                </div>

                {/* Hiring Requirement Dropdown */}
                <div>
                  <label htmlFor="hiring_requirement" className="block text-xs font-semibold uppercase tracking-widest text-textSecondary">
                    Hiring Requirement
                  </label>
                  <select
                    name="hiring_requirement"
                    id="hiring_requirement"
                    value={formData.hiring_requirement}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition duration-200 cursor-pointer"
                  >
                    <option value="Full-Cycle Recruitment">Full-Cycle Recruitment</option>
                    <option value="Technical Recruitment">Technical Recruitment</option>
                    <option value="Executive Search">Executive Search</option>
                    <option value="International Sourcing">International Sourcing</option>
                    <option value="Recruitment Process Consulting">Recruitment Process Consulting</option>
                    <option value="Other Sourcing Project">Other Sourcing Project</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-textSecondary">
                    Hiring Needs Summary
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please summarize the roles, locations, budget benchmark, or general timelines..."
                    className="mt-2 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition duration-200 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center rounded-xl bg-gradient-to-r from-brandBlue to-brandPurple py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-brandBlue/15 hover:shadow-brandBlue/35 hover:scale-[1.01] active:scale-100 disabled:opacity-50 transition duration-300"
                >
                  {loading ? 'Submitting Requirements...' : 'Let\'s Discuss Your Hiring Needs'}
                </button>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
