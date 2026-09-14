"use client";

import { useEffect } from "react";

/**
 * A reload starts the page from the top. Browsers restore the previous scroll
 * position by default, which drops returning visitors into the middle of the
 * hero animation. Anchor links still land where they point.
 */
export function ScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);
  return null;
}
