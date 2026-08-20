import { Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "./logo";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "#platform" },
      { label: "Interfaces", href: "#interfaces" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Who It's For", href: "#platform" },
      { label: "Careers", href: "#contact" },
      { label: "Press", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#contact" },
      { label: "Terms", href: "#contact" },
      { label: "Security", href: "#contact" },
      { label: "Data processing", href: "#contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Book a demo", href: "#contact" },
      { label: "sales@instapark.example", href: "#contact" },
      { label: "Support", href: "#contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2.7fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-foreground/60">
              The multi-tenant valet management platform for hotels, event
              grounds, and commercial venues.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#contact"
                  aria-label="InstaPark social profile"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 text-brand-foreground/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-gold">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-brand-foreground/65 transition-colors hover:text-brand-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-brand-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} InstaPark. All rights reserved.</p>
          <p>Valet management platform · Multi-tenant by design</p>
        </div>
      </div>
    </footer>
  );
}
