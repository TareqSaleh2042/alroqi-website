"use client";

import { useReveal, revealDelay } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

function VideoCard({ name, year, index, placeholder, caption, handoverPrefix }) {
  const reveal = useReveal(revealDelay(index));
  return (
    <div
      ref={reveal.ref}
      style={reveal.style}
      className={`video-card ${reveal.className}`}
    >
      <div className="image-placeholder">
        <span>{placeholder}</span>
        <strong>{caption}</strong>
        <div className="play-btn">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <circle cx="12" cy="12" r="10.5" />
            <path d="M10 8.5l6 3.5-6 3.5z" fill="currentColor" stroke="none" />
          </svg>
        </div>
      </div>
      <h3>{name}</h3>
      <p>
        {handoverPrefix} · {year}
      </p>
    </div>
  );
}

export default function Videos() {
  const reveal = useReveal();
  const { t } = useLanguage();
  const v = t.videos;

  return (
    <section
      className={`videos ${reveal.className}`}
      id="videos"
      ref={reveal.ref}
      style={reveal.style}
    >
      <div className="section-label">{v.label}</div>
      <h2>{v.h2}</h2>
      <div className="videos-grid">
        {v.items.map((video, i) => (
          <VideoCard
            key={video.name}
            index={i}
            placeholder={v.placeholder}
            caption={v.caption}
            handoverPrefix={v.handoverPrefix}
            {...video}
          />
        ))}
      </div>
    </section>
  );
}
