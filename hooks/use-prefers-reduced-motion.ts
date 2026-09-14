"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * The reduced-motion preference, honoured only after hydration. The server
 * cannot know it, so reading it during the first client render would render
 * a different tree from the server's and trip a hydration mismatch.
 */
export function usePrefersReducedMotion() {
  const reduced = useReducedMotion() ?? false;
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated && reduced;
}
