import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-mono text-xs text-paper-faint">
          © {year} {profile.name}. Conçu &amp; développé avec Next.js.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Envoyer un email"
            className="text-paper-muted transition-colors hover:text-signal"
          >
            <Mail size={17} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn"
            className="text-paper-muted transition-colors hover:text-signal"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub"
            className="text-paper-muted transition-colors hover:text-signal"
          >
            <Github size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
