"use client";

import { useState } from "react";
import BrandMark from "./BrandMark";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, toggleLang } = useLanguage();

  return (
    <header className="site-header">
      <BrandMark />
      <nav id="nav" className={open ? "open" : undefined}>
        {t.nav.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="menu"
        id="menuBtn"
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
      <button
        type="button"
        className="lang-switch"
        onClick={toggleLang}
        lang={lang === "en" ? "ar" : "en"}
        aria-label="Switch language"
      >
        {t.header.langSwitchLabel}
      </button>
      <a className="header-cta" href="#contact">
        {t.header.cta} <b>{t.header.ctaArrow}</b>
      </a>
    </header>
  );
}
