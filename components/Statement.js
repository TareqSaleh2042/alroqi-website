"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Statement() {
  const reveal = useReveal();
  const { t } = useLanguage();
  const s = t.statement;

  return (
    <section
      className={`statement ${reveal.className}`}
      id="about"
      ref={reveal.ref}
      style={reveal.style}
    >
      <div className="section-label">{s.label}</div>
      <div>
        <h2>{s.h2}</h2>
        <p>{s.body}</p>
      </div>
      <aside>
        <span>{s.asideLabel}</span>
        <strong>{s.asideStrong}</strong>
      </aside>
    </section>
  );
}
