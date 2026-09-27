"use client";

import { useReveal, revealDelay } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

function TestimonialCard({ quote, location, index, ownerLabel }) {
  const reveal = useReveal(revealDelay(index));
  return (
    <div
      ref={reveal.ref}
      style={reveal.style}
      className={`testimonial-card ${reveal.className}`}
    >
      <q>{quote}</q>
      <cite>{ownerLabel}</cite>
      <small>{location}</small>
    </div>
  );
}

export default function Testimonials() {
  const reveal = useReveal();
  const { t } = useLanguage();
  const tm = t.testimonials;

  return (
    <section
      className={`testimonials ${reveal.className}`}
      id="testimonials"
      ref={reveal.ref}
      style={reveal.style}
    >
      <div className="section-label">{tm.label}</div>
      <h2>{tm.h2}</h2>
      <div className="testimonials-grid">
        {tm.items.map((item, i) => (
          <TestimonialCard
            key={item.location}
            index={i}
            ownerLabel={tm.ownerLabel}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}
