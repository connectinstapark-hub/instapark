import { useState, type ReactNode } from "react";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Parallax } from "./parallax";
import { Reveal } from "./reveal";
import { leadEmail, validateLead, type LeadField } from "@/lib/instaconnect";
import { cn } from "@/lib/utils";

export function VerticalHero({ img, alt, badge, title, sub, cta, onCta, className, scrim, badgeClass, accent }: { img: string; alt: string; badge: string; title: ReactNode; sub: ReactNode; cta: string; onCta: () => void; className: string; scrim: string; badgeClass: string; accent?: ReactNode }) {
  return <section className={cn("relative isolate overflow-hidden pt-28 lg:pt-32", className)}>
    <Parallax speed={0.3} className="absolute inset-x-0 -top-24 -bottom-24 -z-10"><img src={img} alt={alt} className="h-full w-full object-cover" fetchPriority="high" /></Parallax>
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10", scrim)} />
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 lg:px-8 lg:pb-28">
      <Reveal className="max-w-2xl">
        <p className={cn("inline-flex rounded-full px-4 py-2 text-xs font-bold tracking-wider", badgeClass)}>{badge}</p>
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed opacity-90 sm:text-lg">{sub}</p>
        <Button variant="gold" className="mt-8 h-auto min-h-12 whitespace-normal px-6 py-3 text-base" onClick={onCta}>{cta}<ArrowRight /></Button>
        {accent}
      </Reveal>
    </div>
  </section>;
}

export function SectionHead({ eyebrow, title, className }: { eyebrow: string; title: string; className?: string }) {
  return <Reveal className={className}><p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">{eyebrow}</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2></Reveal>;
}

export function LeadForm({ id, subject, fields, title, note, className }: { id: string; subject: string; fields: readonly LeadField[]; title: string; note: string; className?: string }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [draft, setDraft] = useState<string | null>(null);
  return <div id={id} className={cn("scroll-mt-28 rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-xl sm:p-8", className)}>
    <h3 className="font-display text-2xl font-bold">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground">{note}</p>
    {draft ? <div className="mt-6 space-y-4"><CheckCircle2 className="size-9 text-primary" /><p className="text-sm text-muted-foreground">Your request is ready. Open your email app and send it to connect.instapark@gmail.com — it has not been sent yet.</p><Button asChild variant="gold" className="w-full"><a href={draft}><Mail />Open email to send request</a></Button><Button variant="ghost" className="w-full" onClick={() => setDraft(null)}>Edit details</Button></div> :
    <form noValidate className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); const next = validateLead(fields, values); setErrors(next); if (!Object.keys(next).length) setDraft(leadEmail(subject, fields, values)); }}>
      {fields.map((f) => <div key={f.key} className="space-y-1.5">
        <label htmlFor={`${id}-${f.key}`} className="text-sm font-medium">{f.label} <span className="text-destructive">*</span></label>
        <Input id={`${id}-${f.key}`} type={f.type} autoComplete={f.autoComplete} value={values[f.key] ?? ""} min={f.type === "number" ? 1 : undefined} aria-invalid={Boolean(errors[f.key])} onChange={(e) => { const v = e.target.value; setValues((p) => ({ ...p, [f.key]: v })); setErrors((p) => { const n = { ...p }; delete n[f.key]; return n; }); }} className="h-11" />
        {errors[f.key] ? <p role="alert" className="text-xs text-destructive">{errors[f.key]}</p> : null}
      </div>)}
      <Button type="submit" variant="gold" className="h-11 sm:col-span-2"><Mail />Prepare email request</Button>
    </form>}
  </div>;
}

export function scrollToForm(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }

export function verticalHead(path: string, title: string, description: string, image: string) {
  const url = `https://park-instantly-lovely.lovable.app${path}`;
  return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: url }, { property: "og:image", content: `https://park-instantly-lovely.lovable.app${image}` }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:image", content: `https://park-instantly-lovely.lovable.app${image}` }], links: [{ rel: "canonical", href: url }] };
}
