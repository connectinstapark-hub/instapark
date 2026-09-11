import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <header className="bg-brand-deep px-5 pb-14 pt-32 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              InstaPark · Legal
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold text-brand-foreground sm:text-4xl">
              {title}
            </h1>
            {updated ? (
              <p className="mt-3 text-sm text-brand-foreground/60">
                Last updated: {updated}
              </p>
            ) : null}
          </div>
        </header>
        <div className="h-1 w-full bg-gold" />
        <div className="legal-content mx-auto max-w-3xl px-5 py-14 leading-relaxed lg:px-8">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-3 mt-10 font-display text-xl font-bold text-foreground first:mt-0">
      {children}
    </h2>
  );
}

export function P({
  children,
  className = "mb-4 text-[15px] text-foreground/80",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={className}>{children}</p>;
}

export function Ul({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-[15px] text-foreground/80 marker:text-gold">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
