"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";
import BrandMark from "./BrandMark";

export default function Footer() {
  const reveal = useReveal();
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer ref={reveal.ref} style={reveal.style} className={reveal.className}>
      <div className="footer-top">
        <div className="footer-brand">
          <BrandMark />
          <p>{f.brandBlurb}</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.7" r="1" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M7 10v7M7 7v.01M12 17v-4.5a2 2 0 0 1 4 0V17M12 12.5V17" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21l1.4-4.2A8.5 8.5 0 1 1 8 19.6z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>{f.companyHeading}</h4>
          <ul>
            {f.companyLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{f.workHeading}</h4>
          <ul>
            {f.workLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{f.supportHeading}</h4>
          <ul>
            {f.supportLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{f.copyright}</p>
        <div className="footer-legal">
          <a href="#">{f.legalPrivacy}</a>
          <a href="#">{f.legalTerms}</a>
          <a href="#top">{f.backToTop}</a>
        </div>
      </div>
    </footer>
  );
}
