"use client";

import { useEffect } from "react";

/**
 * Page-level scroll effects, ported 1:1 from the static site's inline script:
 *  - wheel-driven inertia smooth scrolling (native scrollTo, so position:sticky
 *    and IntersectionObserver keep working normally)
 *  - smooth-scrolling any in-page "#hash" link click
 *  - the [data-parallax] --parallax-y custom property updater
 *
 * Mount this once near the top of the page. It renders nothing.
 */
export default function ScrollFX() {
  useEffect(() => {
    const prefersReducedMotion = matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let smoothScrollTo = (el, offset = 0) => {
      const r = el.getBoundingClientRect();
      scrollTo({ top: scrollY + r.top + offset, behavior: "smooth" });
    };
    let cleanupInertia = () => {};

    if (!prefersReducedMotion) {
      const ease = 0.085;
      let current = scrollY;
      let target = scrollY;
      let raf = null;
      const maxScroll = () =>
        Math.max(document.documentElement.scrollHeight - innerHeight, 0);

      function loop() {
        current += (target - current) * ease;
        if (Math.abs(target - current) < 0.4) current = target;
        scrollTo(0, current);
        raf = current !== target ? requestAnimationFrame(loop) : null;
      }

      const onWheel = (e) => {
        if (e.ctrlKey) return;
        e.preventDefault();
        target = Math.min(Math.max(target + e.deltaY, 0), maxScroll());
        if (!raf) raf = requestAnimationFrame(loop);
      };
      const onNativeScroll = () => {
        if (!raf) {
          target = scrollY;
          current = scrollY;
        }
      };
      const onResize = () => {
        target = Math.min(target, maxScroll());
      };

      addEventListener("wheel", onWheel, { passive: false });
      addEventListener("scroll", onNativeScroll, { passive: true });
      addEventListener("resize", onResize);

      smoothScrollTo = (el, offset = 0) => {
        const r = el.getBoundingClientRect();
        target = Math.min(Math.max(scrollY + r.top + offset, 0), maxScroll());
        if (!raf) raf = requestAnimationFrame(loop);
      };

      cleanupInertia = () => {
        removeEventListener("wheel", onWheel);
        removeEventListener("scroll", onNativeScroll);
        removeEventListener("resize", onResize);
        if (raf) cancelAnimationFrame(raf);
      };
    }

    const onDocClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length > 1) {
        const targetEl = document.querySelector(id);
        if (targetEl) {
          e.preventDefault();
          smoothScrollTo(targetEl, -16);
          history.pushState(null, "", id);
        }
      }
    };
    document.addEventListener("click", onDocClick);

    const parallaxEls = [...document.querySelectorAll("[data-parallax]")];
    let ticking = false;
    function updateParallax() {
      const mid = innerHeight / 2;
      parallaxEls.forEach((el) => {
        const factor = Number(el.dataset.parallax);
        const offset = (el.getBoundingClientRect().top - mid) * factor;
        el.style.setProperty("--parallax-y", `${offset.toFixed(1)}px`);
      });
      ticking = false;
    }
    const onParallaxScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };
    addEventListener("scroll", onParallaxScroll, { passive: true });
    updateParallax();

    return () => {
      cleanupInertia();
      document.removeEventListener("click", onDocClick);
      removeEventListener("scroll", onParallaxScroll);
    };
  }, []);

  return null;
}
