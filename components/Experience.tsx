import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-ink py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">02 — Parcours</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-paper sm:text-4xl">
              Expériences professionnelles
            </h2>
          </div>
          <p className="max-w-sm text-sm text-paper-muted">
            De l&apos;enseignement à la direction d&apos;une académie, un fil conducteur : transmettre et bâtir.
          </p>
        </div>

        <ol className="mt-16 space-y-0">
          {experiences.map((exp) => (
            <li key={exp.id} className="relative grid gap-4 border-t border-line py-8 sm:grid-cols-[140px_1fr] sm:gap-8">
              <div className="flex items-start gap-3 sm:block">
                <span
                  className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full sm:mt-0 sm:hidden ${
                    exp.current ? "bg-signal" : "bg-paper-faint"
                  }`}
                  aria-hidden
                />
                <span className="font-mono text-xs text-paper-muted sm:text-sm">{exp.period}</span>
              </div>

              <div className="relative sm:pl-8">
                <span
                  className={`absolute left-0 top-1.5 hidden h-2.5 w-2.5 -translate-x-[calc(2rem+1px)] rounded-full sm:block ${
                    exp.current ? "bg-signal shadow-[0_0_0_4px_rgba(45,212,167,0.15)]" : "bg-paper-faint"
                  }`}
                  aria-hidden
                />
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-semibold text-paper">{exp.role}</h3>
                  {exp.current && (
                    <span className="rounded-full border border-signal/40 px-2.5 py-0.5 font-mono text-[11px] text-signal">
                      Actuel
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-paper-muted">
                  {exp.org} · {exp.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-paper-muted sm:text-base">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-signal/70" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
