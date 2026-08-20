import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Interfaces", href: "#interfaces" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-brand/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
      >
        <a href="#top" className="shrink-0">
          <Logo tone="light" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-foreground/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gold-gradient corner-cut px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
          >
            Book a Demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-brand-foreground lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-brand-deep px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3 text-sm font-medium text-brand-foreground/85"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="gold-gradient corner-cut mt-5 block px-5 py-3 text-center text-sm font-semibold text-gold-foreground"
          >
            Book a Demo
          </a>
        </div>
      ) : null}
    </header>
  );
}
