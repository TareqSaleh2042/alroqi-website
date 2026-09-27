"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const reveal = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section
      className={`contact ${reveal.className}`}
      id="contact"
      ref={reveal.ref}
      style={reveal.style}
    >
      <div>
        <p className="section-label">{c.label}</p>
        <h2>
          {c.h2a}
          <br />
          <em>{c.h2b}</em>
        </h2>
        <p>{c.body}</p>
        <a href="tel:+971000000000" className="phone">
          {c.phoneDisplay}
        </a>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        {submitted ? (
          <div className="form-success">
            <h3>{c.successTitle}</h3>
            <p>{c.successBody}</p>
          </div>
        ) : (
          <>
            <label>
              {c.nameLabel}
              <input required placeholder={c.namePlaceholder} />
            </label>
            <label>
              {c.phoneLabel}
              <input required type="tel" placeholder={c.phonePlaceholder} />
            </label>
            <label>
              {c.projectLabel}
              <textarea
                placeholder={c.projectPlaceholder}
                rows={3}
              ></textarea>
            </label>
            <button>{c.submit}</button>
          </>
        )}
      </form>
    </section>
  );
}
