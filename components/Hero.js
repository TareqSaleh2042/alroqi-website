"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section className="hero" id="top">
      <div className="hero-intro">
        <p className="eyebrow">
          {hero.eyebrowStart} <b>{hero.eyebrowSep}</b> {hero.eyebrowEnd}
        </p>
        <p className="hero-index">{hero.index}</p>
      </div>
      <div className="hero-content">
        <h1>
          {hero.h1a}
          <br />
          <em>{hero.h1b}</em>
        </h1>
        <div className="hero-copy">
          <p>{hero.copy}</p>
          <a className="text-link" href="#contact">
            {hero.cta}
          </a>
        </div>
      </div>
      <div className="image-placeholder hero-image" data-parallax="0.12">
        <span>{hero.imagePlaceholder}</span>
        <strong>{hero.imageCaption}</strong>
      </div>
      <div className="hero-footer">
        <span>{hero.footerTag}</span>
        <span>{hero.footerLoc}</span>
        <span>{hero.footerScroll}</span>
      </div>
    </section>
  );
}
