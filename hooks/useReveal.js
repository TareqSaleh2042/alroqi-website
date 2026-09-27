"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ports the original IntersectionObserver scroll-reveal system to a hook.
 * Spread the returned {ref, className, style} onto the element you want to
 * fade/slide in the first time it enters the viewport.
 */
export function useReveal(delayMs = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: `reveal${visible ? " is-visible" : ""}`,
    style: { "--reveal-delay": `${delayMs}ms` },
  };
}

/** Matches the original stagger formula: Math.min((i % 5) * 65, 260) */
export function revealDelay(index) {
  return Math.min((index % 5) * 65, 260);
}
