"use client";

import { useReveal, revealDelay } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

function ServiceItem({ num, title, text, index }) {
  const reveal = useReveal(revealDelay(index));
  return (
    <article ref={reveal.ref} className={reveal.className} style={reveal.style}>
      <span>{num}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default function Services() {
  const reveal = useReveal();
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section
      className={`services ${reveal.className}`}
      id="services"
      ref={reveal.ref}
      style={reveal.style}
    >
      <div className="section-label">{s.label}</div>
      <h2>{s.h2}</h2>
      <div className="services-grid">
        {s.items.map((service, i) => (
          <ServiceItem key={service.num} index={i} {...service} />
        ))}
      </div>
    </section>
  );
}
