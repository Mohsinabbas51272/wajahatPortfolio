import React from 'react';
import { motion } from 'framer-motion';
import { fadeInOut, viewport } from '../utils/motionVariants';

export default function SectionWrapper({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      variants={fadeInOut}
      viewport={{ once: false, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
