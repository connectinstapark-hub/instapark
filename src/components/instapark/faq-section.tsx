import { FAQS } from "@/content/faqs";

export function DefinitionBlock() {
  return (
    <section aria-labelledby="what-is-instapark" className="mx-auto max-w-4xl px-5 py-12 lg:px-8">
      <div className="rounded-2xl border border-border bg-muted/40 p-6 sm:p-8">
        <h2 id="what-is-instapark" className="font-display text-xl font-bold text-foreground">
          InstaPark in one paragraph
        </h2>
        <p className="mt-3 leading-relaxed text-foreground/80">
          InstaPark is a valet management platform, built by Pinsoftek, for hotels, restaurants,
          malls, hospitals, event venues and valet service companies. It replaces paper tickets and
          key boards with digital check-in, QR key tags, vehicle photos, live driver tracking and an
          app-free QR pass that guests use to request their car. Managers get a full
          photo-and-timestamp audit trail and reports for every vehicle.
        </p>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
      <h2 id="faq-title" className="mt-2 font-display text-3xl font-bold text-foreground">
        Valet management questions, answered
      </h2>
      <div className="mt-8 divide-y divide-border rounded-2xl border border-border">
        {FAQS.map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="cursor-pointer list-none font-display font-semibold text-foreground marker:hidden">
              <h3 className="inline">{f.q}</h3>
              <span className="float-right text-gold transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{f.a}</p>
          </details>
        ))}
      </div>
      <a href="/faq" className="mt-6 inline-block text-sm font-medium text-primary hover:underline">
        Read all valet management FAQs →
      </a>
    </section>
  );
}
