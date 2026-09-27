"use client";

import { useReveal, revealDelay } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

function FaqItem({ num, q, a, open, index }) {
  const reveal = useReveal(revealDelay(index));
  return (
    <details
      ref={reveal.ref}
      style={reveal.style}
      className={reveal.className}
      open={open || undefined}
    >
      <summary>
        <b>{num}</b>
        {q}
        <span className="plus"></span>
      </summary>
      <p>{a}</p>
    </details>
  );
}

export default function FAQ() {
  const reveal = useReveal();
  const { t, lang } = useLanguage();
  const f = t.faq;

  return (
    <section
      className={`faq ${reveal.className}`}
      id="faq"
      ref={reveal.ref}
      style={reveal.style}
    >
      <div className="section-label">{f.label}</div>
      <h2>{f.h2}</h2>
      <div className="faq-list" key={lang}>
        {f.items.map((item, i) => (
          <FaqItem key={item.num} index={i} {...item} />
        ))}
      </div>
    </section>
  );
}
