import { ArrowUpRight, Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-line bg-ink pt-16"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-fade bg-grid opacity-70"
      />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-1/2 hidden -translate-y-1/2 lg:block">
        <PipelineGraphic />
      </div>

      <div className="section-shell relative grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-signal">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-blink rounded-full bg-signal" />
            </span>
            Disponible pour de nouveaux projets
          </p>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-paper sm:text-5xl lg:text-6xl">
            Fondateur de{" "}
            <a
              href="https://ksilog.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal hover:underline"
            >
              Ksilog Academy
            </a>
            .
            <br />
            Data Engineer &amp; Software Engineer.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-muted sm:text-lg">
            Je conçois des pipelines de données solides, je développe des logiciels bien architecturés,
            et je forme la prochaine génération d&apos;ingénieurs en Data et en Programmation à Dakar.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-signal px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Me contacter
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 border border-line px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-signal hover:text-signal"
            >
              Voir les projets
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6 font-mono text-xs text-paper-muted">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-signal">
              <Mail size={14} className="text-signal" />
              {profile.email}
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-signal"
            >
              <Linkedin size={14} className="text-signal" />
              LinkedIn
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-signal"
            >
              <Github size={14} className="text-signal" />
              GitHub
            </a>
            <a
              href={profile.socials.ksilog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-signal"
            >
              <Globe size={14} className="text-signal" />
              Ksilog 
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block" aria-hidden />
      </div>
    </section>
  );
}

function PipelineGraphic() {
  return (
    <svg
      width="620"
      height="520"
      viewBox="0 0 620 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-90"
    >
      <g stroke="#1E2A2C" strokeWidth="1.5">
        <path d="M40 120 H 280" />
        <path d="M40 260 H 220" />
        <path d="M40 400 H 300" />
        <path d="M280 120 V 260" />
        <path d="M220 260 V 260" />
        <path d="M300 400 V 260" />
        <path d="M280 260 H 460" />
        <path d="M460 260 V 60" />
        <path d="M460 260 V 460" />
      </g>
      <g stroke="#2DD4A7" strokeWidth="2" className="text-signal">
        <path className="node-line animate-flow" d="M40 120 H 280 V 260 H 460 V 60" />
      </g>
      <g stroke="#4FB6E8" strokeWidth="2">
        <path className="node-line animate-flow" d="M40 400 H 300 V 260 H 460 V 460" />
      </g>

      {[
        { x: 40, y: 120 },
        { x: 40, y: 260 },
        { x: 40, y: 400 },
      ].map((p, i) => (
        <circle key={`src-${i}`} cx={p.x} cy={p.y} r="5" fill="#0D1416" stroke="#5C6968" strokeWidth="1.5" />
      ))}

      <circle cx="460" cy="260" r="9" fill="#0D1416" stroke="#2DD4A7" strokeWidth="2" />
      <circle cx="460" cy="60" r="6" fill="#0D1416" stroke="#4FB6E8" strokeWidth="1.5" />
      <circle cx="460" cy="460" r="6" fill="#0D1416" stroke="#4FB6E8" strokeWidth="1.5" />

      <text x="380" y="264" fontFamily="var(--font-mono)" fontSize="11" fill="#8FA09C">
        Conception
      </text>
      <text x="390" y="64" fontFamily="var(--font-mono)" fontSize="11" fill="#8FA09C">
        Analyse
      </text>
      <text x="380" y="464" fontFamily="var(--font-mono)" fontSize="11" fill="#8FA09C">
        production
      </text>
    </svg>
  );
}
