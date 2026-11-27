import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const konnect = [
  { label: "Overview", to: "/instakonnect" },
  { label: "Residential Societies & Offices", to: "/instakonnect/societies" },
  { label: "Vehicles & EV Mobility", to: "/instakonnect/ev-mobility" },
  { label: "Personal Belongings & Family", to: "/instakonnect/personal" },
  { label: "Valet & Events Synergy", to: "/instakonnect/valet-events" },
] as const;

const links = [
  { label: "Platform", href: "/#platform" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Interfaces", href: "/#interfaces" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export function SiteNav({ solid = false }: { solid?: boolean }) {
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
        scrolled || solid
          ? "border-b border-white/10 bg-brand/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
      >
        <a href="/#top" className="shrink-0">
          <Logo tone="light" />
        </a>

        <div className="hidden items-center gap-5 xl:flex">
          <div className="group relative">
            <Link to="/instakonnect" aria-haspopup="true" className="flex items-center gap-1.5 text-sm font-medium text-brand-foreground hover:text-gold">instaKonnect <span className="rounded-full bg-gold px-1.5 py-0.5 text-[9px] font-bold text-gold-foreground">NEW</span><ChevronDown className="size-4 transition-transform group-hover:rotate-180" /></Link>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="w-72 rounded-xl border border-brand-foreground/10 bg-brand-deep p-2 shadow-2xl">{konnect.map((k) => <li key={k.to}><Link to={k.to} activeOptions={{ exact: true }} activeProps={{ className: "text-gold" }} className="block rounded-lg px-3 py-2.5 text-sm text-brand-foreground/85 hover:bg-brand hover:text-gold">{k.label}</Link></li>)}</ul>
            </div>
          </div>
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
            href="/#contact"
            className="gold-gradient corner-cut px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
          >
            Book a Demo
          </a>
        </div>

        <Button variant="ghost" size="icon"
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-brand-foreground xl:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </nav>

      {open ? (
        <div className="border-t border-brand-foreground/10 bg-brand-deep px-5 pb-6 pt-2 xl:hidden">
          <ul className="flex flex-col">
            <li className="border-b border-brand-foreground/5 py-3"><p className="flex items-center gap-2 text-sm font-medium text-brand-foreground">instaKonnect <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold text-gold-foreground">NEW</span></p><ul className="mt-2 border-l border-gold/40 pl-3">{konnect.map((k) => <li key={k.to}><Link to={k.to} onClick={() => setOpen(false)} className="block py-2 text-sm text-brand-foreground/80">{k.label}</Link></li>)}</ul></li>
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
            href="/#contact"
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
