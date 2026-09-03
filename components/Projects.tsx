"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projectFilters, projects, type ProjectCategory } from "@/data/portfolio";

type FilterValue = "Tous" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<FilterValue>("Tous");

  const filtered = useMemo(
    () => (filter === "Tous" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const filters: FilterValue[] = ["Tous", ...projectFilters];

  return (
    <section id="projects" className="border-b border-line bg-ink py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">05 — Projets</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-paper sm:text-4xl">
              Projets Data &amp; Software
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`border px-4 py-2 font-mono text-xs transition-colors ${
                  filter === f
                    ? "border-signal bg-signal text-ink"
                    : "border-line text-paper-muted hover:border-signal hover:text-signal"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between border border-line p-6 transition-colors hover:border-signal/60"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wide text-signal">
                  {project.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-paper">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-paper-muted">{project.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <li key={s} className="font-mono text-[11px] text-paper-faint">
                      {s}
                    </li>
                  ))}
                </ul>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center gap-1 text-xs text-paper-muted hover:text-signal"
                  >
                    Voir
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-14 text-sm text-paper-muted">Aucun projet dans cette catégorie pour le moment.</p>
        )}
      </div>
    </section>
  );
}
