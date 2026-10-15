import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export type Section = {
  h2: string;
  p?: string[];
  list?: string[];
  steps?: string[];
  table?: { head: string[]; rows: string[][] };
  faqs?: { q: string; a: string }[];
};

export type RelatedLink = { to: string; label: string };

export function ContentPage({
  eyebrow,
  title,
  intro,
  crumbs,
  sections,
  related,
  meta,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumbs: { name: string; to: string }[];
  sections?: Section[];
  related?: RelatedLink[];
  meta?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <header className="bg-brand-deep px-5 pb-14 pt-32 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-xs text-brand-foreground/60">
              <ol className="flex flex-wrap gap-1.5">
                <li><Link to="/" className="hover:text-gold">Home</Link></li>
                {crumbs.map((c) => (
                  <li key={c.to} className="flex gap-1.5">
                    <span aria-hidden>/</span>
                    <a href={c.to} className="hover:text-gold">{c.name}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {eyebrow}
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold text-brand-foreground sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-foreground/75">{intro}</p>
            {meta ? <div className="mt-4 text-sm text-brand-foreground/60">{meta}</div> : null}
          </div>
        </header>
        <div className="h-1 w-full bg-gold" />
        <article className="mx-auto max-w-3xl px-5 py-14 leading-relaxed lg:px-8">
          {sections?.map((s) => (
            <section key={s.h2} className="mb-10">
              <h2 className="mb-3 font-display text-xl font-bold text-foreground">{s.h2}</h2>
              {s.p?.map((t, i) => (
                <p key={i} className="mb-4 text-[15px] text-foreground/80">{t}</p>
              ))}
              {s.list ? (
                <ul className="mb-4 list-disc space-y-2 pl-6 text-[15px] text-foreground/80 marker:text-gold">
                  {s.list.map((t) => <li key={t}>{t}</li>)}
                </ul>
              ) : null}
              {s.steps ? (
                <ol className="mb-4 list-decimal space-y-2 pl-6 text-[15px] text-foreground/80 marker:font-bold marker:text-primary">
                  {s.steps.map((t) => <li key={t}>{t}</li>)}
                </ol>
              ) : null}
              {s.table ? (
                <div className="mb-4 overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted">
                      <tr>{s.table.head.map((h) => <th key={h} className="px-4 py-3 font-semibold text-foreground">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((r) => (
                        <tr key={r[0]} className="border-t border-border">
                          {r.map((c, i) => <td key={i} className="px-4 py-3 text-foreground/80">{c}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
              {s.faqs?.map((f) => (
                <div key={f.q} className="mb-5">
                  <h3 className="font-display text-base font-semibold text-foreground">{f.q}</h3>
                  <p className="mt-1 text-[15px] text-foreground/80">{f.a}</p>
                </div>
              ))}
            </section>
          ))}
          {children}
          {related?.length ? (
            <aside className="mt-12 rounded-2xl border border-border bg-muted/50 p-6">
              <h2 className="font-display text-lg font-bold text-foreground">Related</h2>
              <ul className="mt-3 space-y-2">
                {related.map((r) => (
                  <li key={r.to}>
                    <a href={r.to} className="text-sm font-medium text-primary underline-offset-4 hover:underline">{r.label} →</a>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
          <div className="mt-10 rounded-2xl bg-brand-deep p-6 text-brand-foreground">
            <p className="font-display text-lg font-bold">See InstaPark at your venue</p>
            <p className="mt-1 text-sm text-brand-foreground/70">Book a walkthrough: connect.instapark@gmail.com · +91 7990317623</p>
            <a href="/#contact" className="mt-4 inline-flex rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground">Book a demo</a>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
