"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact portfolio — ${form.name || "Nouveau message"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="bg-ink py-24">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">06 — Contact</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-paper sm:text-4xl">
            Discutons de votre prochain projet data.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-paper-muted sm:text-base">
            Formation, projet data, collaboration technique ou simple échange — écrivez-moi, je réponds
            rapidement.
          </p>

          <ul className="mt-10 space-y-4 border-t border-line pt-8">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-paper transition-colors hover:text-signal sm:text-base"
              >
                <Mail size={17} className="text-signal" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-paper transition-colors hover:text-signal sm:text-base"
              >
                <Phone size={17} className="text-signal" />
                {profile.phone}
              </a>
            </li>
            <li>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-paper transition-colors hover:text-signal sm:text-base"
              >
                <Linkedin size={17} className="text-signal" />
                linkedin.com/in/attoisse-mohamed
                <ArrowUpRight size={14} className="text-paper-faint" />
              </a>
            </li>
            <li>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-paper transition-colors hover:text-signal sm:text-base"
              >
                <Github size={17} className="text-signal" />
                github.com/ATTOISSE
                <ArrowUpRight size={14} className="text-paper-faint" />
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="border border-line bg-surface p-7 sm:p-9">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field
              label="Nom"
              id="name"
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              required
            />
            <Field
              label="Email"
              id="email"
              type="email"
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              required
            />
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wide text-paper-muted">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="Décrivez votre projet ou votre demande..."
              className="w-full resize-none border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-paper-faint focus:border-signal"
            />
          </div>

          <button
            type="submit"
            className="mt-7 flex w-full items-center justify-center gap-2 bg-signal px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Envoyer le message
            <Send size={15} />
          </button>

          {status === "sent" && (
            <p className="mt-4 font-mono text-xs text-signal">
              Votre client mail va s&apos;ouvrir avec le message pré-rempli.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-xs uppercase tracking-wide text-paper-muted">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-line bg-ink px-4 py-3 text-sm text-paper focus:border-signal"
      />
    </div>
  );
}
