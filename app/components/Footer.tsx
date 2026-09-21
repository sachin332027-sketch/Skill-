import Logo from "./icons/Logo";

const LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Products", href: "#ecosystem" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Get In Touch", href: "#contact" },
];

const SOCIAL = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg py-14">
      <div className="container-px flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <span className="flex items-center gap-2 text-text-primary">
            <Logo className="h-5 w-5 text-accent" />
            <span className="font-display text-lg font-extrabold tracking-[0.28em]">
              JARVIS
            </span>
          </span>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-6">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line pt-6 text-xs text-text-tertiary md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Jarvis Technology & Strategy
            Consulting. All rights reserved.
          </span>
          <span>India</span>
        </div>
      </div>
    </footer>
  );
}
