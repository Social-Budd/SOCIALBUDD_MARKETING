"use client";

import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type MotionRevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function MotionReveal({
  children,
  delay = 0,
  className,
}: MotionRevealProps) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
