"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Numbers() {
  const reveal = useReveal();
  const { t } = useLanguage();

  return (
    <section
      className={`numbers ${reveal.className}`}
      ref={reveal.ref}
      style={reveal.style}
    >
      {t.numbers.map((stat) => (
        <div key={stat.text}>
          <strong>
            {stat.value}
            <span>{stat.suffix}</span>
          </strong>
          <p>{stat.text}</p>
        </div>
      ))}
    </section>
  );
}
