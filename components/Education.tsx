import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="border-b border-line bg-ink py-24">
      <div className="section-shell">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">03 — Formation</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-paper sm:text-4xl">Formations académiques</h2>

        <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {education.map((item) => (
            <div key={item.id} className="flex flex-col gap-3 bg-ink p-7">
              <div className="flex items-center justify-between gap-4">
                <GraduationCap size={20} className="text-signal" />
                <span className="font-mono text-xs text-paper-muted">{item.period}</span>
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug text-paper">{item.degree}</h3>
              <p className="text-sm text-paper-muted">{item.school}</p>
              {item.detail && (
                <p className="mt-1 border-t border-line pt-3 text-sm leading-relaxed text-paper-faint">
                  {item.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
