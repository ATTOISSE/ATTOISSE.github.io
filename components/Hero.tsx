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
      className="opacity-95"
    >
      <defs>
        <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2DD4A7" />
          <stop offset="100%" stopColor="#4FB6E8" />
        </linearGradient>
        <filter id="shadow" x="-2" y="0" width="10" height="12">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#0D1416" floodOpacity="0.5"/>
        </filter>
      </defs>

      <g stroke="#1A2528" strokeWidth="0.5">
        {Array.from({ length: 13 }).map((_, i) => (
          <path key={`v-${i}`} d={`M${i * 50} 0 V520`} />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <path key={`h-${i}`} d={`M0 ${i * 50} H620`} />
        ))}
      </g>

      <rect x="250" y="50" width="120" height="420" rx="12" fill="#151D1F" stroke="#1E2A2C" strokeWidth="1.5" />
      <path d="M310 120V410" stroke="#1E2A2C" strokeWidth="1.5" strokeDasharray="5 5" />

      <g transform="translate(100, 150)">
        <circle cx="60" cy="40" r="25" fill="#1A2528" stroke="#5C6968" strokeWidth="1.5" /> {/* Tête */}
        <path d="M40 70C40 60 80 60 80 70V160H40V70Z" fill="#1A2528" stroke="#5C6968" strokeWidth="1.5" /> {/* Corps */}
        <path d="M50 160V220H70V160H50Z" fill="#131C1E" stroke="#5C6968" strokeWidth="1"/> {/* Jambe visible */}
        
        <path d="M40 90H10V140H40V90Z" fill="#151D1F" stroke="#5C6968" strokeWidth="1"/> {/* Tablette main */}
        <path d="M80 100H110V150H80V100Z" fill="#151D1F" stroke="#5C6968" strokeWidth="1"/> {/* Écran main */}
      </g>

      
      <g transform="translate(400, 0)">
        <g transform="translate(0, 100)">
          <path d="M0 0H70V50H0V0Z" fill="#151D1F" stroke="#1E2A2C" strokeWidth="1"/>
          <text x="35" y="30" fontFamily="var(--font-mono)" fontSize="13" fill="#4FB6E8" textAnchor="middle">
            Analyse
          </text>
        </g>
        
        <g transform="translate(0, 240)">
          <rect x="-10" y="0" width="90" height="60" rx="8" fill="#151D1F" stroke="#2DD4A7" strokeWidth="2"/>
          <text x="35" y="35" fontFamily="var(--font-mono)" fontSize="13" fill="#2DD4A7" textAnchor="middle">
            Conception
          </text>
        </g>

        <g transform="translate(0, 390)">
          <circle cx="35" cy="30" r="35" fill="#151D1F" stroke="#1E2A2C" strokeWidth="1.5"/>
          <text x="35" y="35" fontFamily="var(--font-mono)" fontSize="13" fill="url(#cyanGradient)" textAnchor="middle">
            Production
          </text>
          <circle cx="35" cy="30" r="10" fill="none" stroke="#5C6968" strokeWidth="1" strokeDasharray="3 3"/>
        </g>
      </g>

      <path 
        d="M110 265 H80 Q60 265 60 245 V125 Q60 105 80 105 H250 M370 120 H480" 
        stroke="#4FB6E8" 
        strokeWidth="2" 
        strokeDasharray="6 3"
        className="animate-flow-blue"
      />

      <path 
        d="M210 275 H250 M370 260 H470" 
        stroke="#2DD4A7" 
        strokeWidth="2" 
      />

      <path 
        d="M160 165 H200 Q220 165 220 185 V435 Q220 455 240 455 H250 M370 455 H480 Q515 455 515 425" 
        stroke="url(#cyanGradient)" 
        strokeWidth="2.5" 
        strokeDasharray="8 4"
        className="animate-flow-gradient"
      />

      {[
        { y: 120, label: "D1", type: "in" },
        { y: 190, label: "D2", type: "in" },
        { y: 260, label: "D3", type: "main" },
        { y: 340, label: "D4", type: "out" },
        { y: 420, label: "D5", type: "out" },
      ].map((p, i) => (
        <g key={`node-${i}`} transform={`translate(310, ${p.y})`}>
          <circle cx="0" cy="0" r="10" fill="#0D1416" stroke={p.type === 'main' ? '#2DD4A7' : '#1E2A2C'} strokeWidth="2" />
          {p.type !== 'main' && (
            <circle cx="0" cy="0" r="4" fill="#5C6968" stroke="#1E2A2C" strokeWidth="1" />
          )}
          <text x={p.type === 'in' ? -25 : 25} y="4" fontFamily="var(--font-mono)" fontSize="11" fill="#8FA09C" textAnchor={p.type === 'in' ? 'end' : 'start'}>
            {p.label}
          </text>
        </g>
      ))}
    
      <style>{`
        @keyframes flow {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-flow-blue {
          animation: flow 1.5s linear infinite;
        }
        .animate-flow-gradient {
          animation: flow 1.2s linear infinite;
        }
      `}</style>
    </svg>
  );
}
