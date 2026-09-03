import { highlights, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-ink py-12">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.35fr_0.65fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">01 — À propos</p>
          
          <img
            src="/profil.png"
            alt="À propos"
            className="mt-6 w-full rounded-lg"
          />
        </div>

        <div>
          <p className="max-w-[62ch] text-base leading-relaxed text-paper-muted sm:text-lg">
            {profile.bio}
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label}>
                <dt className="sr-only">{h.label}</dt>
                <dd className="font-display text-3xl font-semibold text-signal">{h.value}</dd>
                <dd className="mt-1 text-sm text-paper-muted">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
