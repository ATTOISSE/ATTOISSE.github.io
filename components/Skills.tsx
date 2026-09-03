"use client";

import { useState } from "react";
import { Database, Code2, Users } from "lucide-react";
import { skillCategories } from "@/data/portfolio";

const icons = {
  "data-ai": Database,
  software: Code2,
  pedagogy: Users,
};

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);

  return (
    <section id="skills" className="border-b border-line bg-ink py-24">
      <div className="section-shell">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">04 — Compétences</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-paper sm:text-4xl">
          Trois disciplines, une seule ambition
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = icons[cat.id as keyof typeof icons];
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                onMouseEnter={() => setActive(cat.id)}
                className={`group flex flex-col gap-5 border p-7 text-left transition-colors duration-300 ${
                  isActive ? "border-signal bg-surface" : "border-line bg-ink hover:border-line-soft"
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center border transition-colors ${
                    isActive ? "border-signal text-signal" : "border-line text-paper-muted"
                  }`}
                >
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-paper">{cat.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-paper-muted">{cat.description}</p>
                </div>

                <ul className="mt-1 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className={`border px-2.5 py-1 font-mono text-[12px] transition-colors ${
                        isActive
                          ? "border-signal/40 text-signal"
                          : "border-line text-paper-muted"
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
