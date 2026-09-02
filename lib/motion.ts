import type { Transition, Variants } from "motion/react";

export const easePremium = [0.22, 1, 0.36, 1] as const;

export const transitionFast: Transition = {
  duration: 0.2,
  ease: easePremium,
};

export const transitionNormal: Transition = {
  duration: 0.4,
  ease: easePremium,
};

export const transitionSlow: Transition = {
  duration: 0.7,
  ease: easePremium,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionNormal,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionNormal,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionNormal,
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: transitionSlow,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionNormal,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionNormal,
  },
};

export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};
