import React from 'react';
import { motion } from 'framer-motion';
import { fadeInOut, viewport } from '../utils/motionVariants';

export default function SectionWrapper({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      variants={fadeInOut}
      viewport={{ once: true, margin: '-100px', amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
