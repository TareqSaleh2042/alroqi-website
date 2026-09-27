"use client";

import { useReveal, revealDelay } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

function ProcessStep({ num, title, text, index, arrow }) {
  const reveal = useReveal(revealDelay(index));
  return (
    <article ref={reveal.ref} className={reveal.className} style={reveal.style}>
      <span>{num}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <b>{arrow}</b>
    </article>
  );
}

export default function Process() {
  const reveal = useReveal();
  const { t } = useLanguage();
  const p = t.process;
  const arrow = t.header.ctaArrow;

  return (
    <section
      className={`catalogue ${reveal.className}`}
      id="process"
      ref={reveal.ref}
      style={reveal.style}
    >
      <div className="section-label">{p.label}</div>
      <h2>{p.h2}</h2>
      {p.steps.map((step, i) => (
        <ProcessStep key={step.num} index={i} arrow={arrow} {...step} />
      ))}
    </section>
  );
}
