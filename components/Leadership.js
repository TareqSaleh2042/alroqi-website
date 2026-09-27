"use client";

import { useReveal, revealDelay } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

function LeaderCard({ num, name, role, index }) {
  const reveal = useReveal(revealDelay(index));
  return (
    <div ref={reveal.ref} style={reveal.style} className={reveal.className}>
      <span>{num}</span>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default function Leadership() {
  const reveal = useReveal();
  const { t } = useLanguage();
  const l = t.leadership;

  return (
    <section
      className={`leadership ${reveal.className}`}
      id="leadership"
      ref={reveal.ref}
      style={reveal.style}
    >
      <p className="section-label">{l.label}</p>
      <h2>
        {l.h2a}
        <br />
        {l.h2b}
      </h2>
      <div className="leaders">
        {l.items.map((leader, i) => (
          <LeaderCard key={leader.num} index={i} {...leader} />
        ))}
      </div>
    </section>
  );
}
