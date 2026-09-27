"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Proof() {
  const reveal = useReveal();
  const { t } = useLanguage();
  const p = t.proof;

  return (
    <section
      className={`proof ${reveal.className}`}
      ref={reveal.ref}
      style={reveal.style}
    >
      <div className="proof-copy">
        <p className="section-label">{p.label}</p>
        <h2>
          {p.h2a}
          <br />
          {p.h2b}
        </h2>
        <p>{p.body}</p>
        <a className="text-link" href="#leadership">
          {p.cta}
        </a>
      </div>
      <div className="image-placeholder proof-image" data-parallax="-0.07">
        <span>{t.hero.imagePlaceholder}</span>
        <strong>{p.imageCaption}</strong>
      </div>
      <div className="proof-note">
        <span>{p.stat1Value}</span>
        <p>{p.stat1Text}</p>
        <span>{p.stat2Value}</span>
        <p>{p.stat2Text}</p>
      </div>
    </section>
  );
}
