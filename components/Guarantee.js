"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Guarantee() {
  const reveal = useReveal();
  const { t } = useLanguage();
  const g = t.guarantee;

  return (
    <section
      className={`guarantee ${reveal.className}`}
      id="guarantee"
      ref={reveal.ref}
      style={reveal.style}
    >
      <div className="guarantee-top">
        <p className="section-label">{g.label}</p>
        <h2>
          {g.h2a}
          <br />
          {g.h2b}
        </h2>
      </div>
      <div className="guarantee-grid">
        <div className="image-placeholder">
          <span>{t.hero.imagePlaceholder}</span>
          <strong>{g.imageCaption}</strong>
        </div>
        <div>
          <p>{g.body}</p>
          <ul>
            {g.items.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
