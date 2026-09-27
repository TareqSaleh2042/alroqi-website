"use client";

import { useState } from "react";
import { useReveal, revealDelay } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

function ProjectCard({ project, index, hidden, imagePlaceholder, imageCaption }) {
  const reveal = useReveal(revealDelay(index));
  return (
    <div
      ref={reveal.ref}
      style={reveal.style}
      className={`project-card ${reveal.className}${hidden ? " is-hidden" : ""}`}
    >
      <div className="image-placeholder">
        <span>{imagePlaceholder}</span>
        <strong>{imageCaption}</strong>
      </div>
      <div className="project-tags">
        <span>{project.tag}</span>
        <span>{project.size}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.location}</p>
    </div>
  );
}

export default function Projects() {
  const reveal = useReveal();
  const { t } = useLanguage();
  const p = t.projects;
  const [filterState, setFilterState] = useState({ type: "all", area: "all" });

  const visibility = p.items.map(
    (item) =>
      (filterState.type === "all" || item.type === filterState.type) &&
      (filterState.area === "all" || item.area === filterState.area)
  );
  const visibleCount = visibility.filter(Boolean).length;

  return (
    <section
      className={`projects ${reveal.className}`}
      id="projects"
      ref={reveal.ref}
      style={reveal.style}
    >
      <div className="section-label">{p.label}</div>
      <h2>{p.h2}</h2>
      <p className="section-note">{p.note}</p>

      <div className="filters">
        <div className="filter-group" data-group="type">
          <span>{p.typeFilterLabel}</span>
          {p.typeFilters.map((f) => (
            <button
              key={f.value}
              className={`filter-pill${
                filterState.type === f.value ? " is-active" : ""
              }`}
              onClick={() =>
                setFilterState((s) => ({ ...s, type: f.value }))
              }
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="filter-group" data-group="area">
          <span>{p.areaFilterLabel}</span>
          {p.areaFilters.map((f) => (
            <button
              key={f.value}
              className={`filter-pill${
                filterState.area === f.value ? " is-active" : ""
              }`}
              onClick={() =>
                setFilterState((s) => ({ ...s, area: f.value }))
              }
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid" id="projectsGrid">
        {p.items.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            hidden={!visibility[i]}
            imagePlaceholder={t.hero.imagePlaceholder}
            imageCaption={p.imageCaption}
          />
        ))}
      </div>
      <p
        className="section-note"
        id="noResults"
        style={{ display: visibleCount ? "none" : "block" }}
      >
        {p.noResults}
      </p>
    </section>
  );
}
