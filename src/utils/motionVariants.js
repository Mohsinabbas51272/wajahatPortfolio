/**
 * Shared Framer Motion variants used across all sections.
 *
 * KEY: Use type:"tween" + ease:"easeOut" everywhere.
 * Framer's DEFAULT is a spring — springs overshoot and cause the
 * "ar ar" bounce/jitter effect the user is seeing.
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'tween', duration: 0.5, ease: 'easeOut' },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: 'tween', duration: 0.5, ease: 'easeOut' },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', duration: 0.55, ease: 'easeOut' },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', duration: 0.55, ease: 'easeOut' },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'tween', duration: 0.5, ease: 'easeOut' },
  },
};

/** Stagger container — children animate one after another */
export const staggerContainer = (staggerChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren, delayChildren: 0.05 },
  },
});

/** Hover lift — use as `whileHover` prop value */
export const hoverLift = {
  y: -6,
  transition: { type: 'tween', duration: 0.2, ease: 'easeOut' },
};

export const hoverScale = {
  scale: 1.03,
  transition: { type: 'tween', duration: 0.18, ease: 'easeOut' },
};

/** Shared viewport config — `once:true` prevents re-triggering on scroll back */
export const viewport = { once: true, margin: '-80px' };
