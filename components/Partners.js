"use client";

import { useReveal, revealDelay } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

const PARTNER_COUNT = 8;

function PartnerTile({ index, label }) {
  const reveal = useReveal(revealDelay(index));
  return (
    <div
      ref={reveal.ref}
      style={reveal.style}
      className={`partner-tile ${reveal.className}`}
    >
      {label}
    </div>
  );
}

export default function Partners() {
  const reveal = useReveal();
  const { t } = useLanguage();
  const p = t.partners;

  return (
    <section
      className={`partners ${reveal.className}`}
      id="partners"
      ref={reveal.ref}
      style={reveal.style}
    >
      <div className="section-label">{p.label}</div>
      <h2>{p.h2}</h2>
      <p className="section-note">{p.note}</p>
      <div className="partners-grid">
        {Array.from({ length: PARTNER_COUNT }).map((_, i) => (
          <PartnerTile key={i} index={i} label={p.tileLabel} />
        ))}
      </div>
    </section>
  );
}
