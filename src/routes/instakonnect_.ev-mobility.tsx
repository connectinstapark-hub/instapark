import { createFileRoute } from "@tanstack/react-router";
import { Check, Zap, Users, Droplet, FileClock, Car, Bike } from "lucide-react";
import { SiteNav } from "@/components/instapark/site-nav";
import { SiteFooter } from "@/components/instapark/site-footer";
import { Reveal } from "@/components/instapark/reveal";
import { Parallax } from "@/components/instapark/parallax";
import { UtilityBento } from "@/components/instapark/utility-bento";
import { Button } from "@/components/ui/button";
import { VerticalHero, SectionHead, LeadForm, scrollToForm, verticalHead } from "@/components/instapark/instakonnect-vertical";

export const Route = createFileRoute("/instakonnect_/ev-mobility")({
  head: () => verticalHead("/instakonnect/ev-mobility", "instaKonnect for Cars, Bikes & EVs | InstaPark", "Smart QR contact tags for cars, bikes, EVs and fleets. Anonymous calls for wrong parking, lights left on or EV charging complete — your number stays private.", "/instakonnect-ev.jpg"),
  component: EvPage,
});
const reasons = ["Wrong parking", "Blocking another car", "Lights are on", "EV Charging Complete"];
const safety = [
  { icon: Users, t: "Dual-number family escalation", d: "If you're busy, the call rolls over to your spouse or a family member automatically." },
  { icon: Droplet, t: "Emergency blood group card", d: "Responders can see vital details in an emergency — never your phone number." },
  { icon: FileClock, t: "PUC & insurance reminders", d: "Timely WhatsApp reminders before your PUC or insurance expires." },
];
const fields = [
  { key: "name", label: "Name", type: "text", autoComplete: "name" },
  { key: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { key: "city", label: "City", type: "text", autoComplete: "address-level2" },
  { key: "packs", label: "Number of Packs", type: "number", autoComplete: "off" },
] as const;

function EvPage() {
  return <div className="min-h-screen bg-charcoal text-brand-foreground">
    <SiteNav solid />
    <main>
      <VerticalHero img="/instakonnect-ev.jpg" alt="Electric SUV charging with an instaKonnect tag" className="bg-charcoal" scrim="bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/10" badgeClass="bg-cyan/15 text-cyan ring-1 ring-cyan/40" badge="FOR CARS, BIKES, EVs & FLEETS"
        title={<>Smart QR Contact Tags for Every <span className="text-cyan">Car, Bike & EV</span> on the Road.</>}
        sub="Whether you're parked in a tight spot, plugged into a public EV charger, or on a highway trip—let anyone reach you via an anonymous call without ever revealing your mobile number."
        cta="Order Mobility Pack" onCta={() => scrollToForm("mobility-order")} />
      <section className="relative overflow-hidden px-5 py-20 lg:px-8">
        <Parallax speed={-0.15} className="pointer-events-none absolute left-0 top-10"><div className="glow-orb size-96 bg-cyan/15" /></Parallax>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div><SectionHead eyebrow="What the scanner sees" title="One scan. The right reason. A private call." className="text-cyan" /><p className="mt-5 text-brand-foreground/75">The scanner picks a reason and confirms the last 4 digits of your plate — standard or BH-series — before the call connects.</p><p className="mt-4 font-mono text-sm text-brand-foreground/70">GJ01AB 1234 → 1234<br />22 BH 1234 AA → 1234</p></div>
          <Reveal className="mx-auto w-full max-w-sm rounded-[2.5rem] border-8 border-charcoal bg-card p-6 text-card-foreground shadow-[0_0_80px_-20px_var(--cyan)] ring-1 ring-cyan/30">
            <p className="font-display text-lg font-bold">Contact Vehicle Owner</p><p className="mt-4 text-sm font-medium">Why are you contacting the owner?</p>
            <ul className="mt-3 space-y-2">{reasons.map((r, i) => <li key={r} className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm ${i === 3 ? "border-cyan bg-cyan/10 font-semibold" : "border-border"}`}>{i === 3 ? <Zap className="size-4 text-cyan" /> : <span className="size-4 rounded-full border border-border" />}{r}</li>)}</ul>
            <p className="mt-4 text-sm font-medium">Last 4 digits of the plate</p><div className="mt-2 rounded-lg border border-border px-3 py-2.5 font-mono tracking-[0.4em]">1234</div>
            <div className="mt-4 rounded-xl bg-brand py-3 text-center text-sm font-semibold text-brand-foreground">Call Owner — Secure anonymous call</div>
          </Reveal>
        </div>
      </section>
      <div className="text-foreground"><UtilityBento /></div>
      <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="Built-in safety" title="More than a parking tag." className="text-gold" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{safety.map((s, i) => <Reveal key={s.t} delay={i * 120} className="lift-card rounded-2xl border border-cyan/20 bg-brand-foreground/5 p-7"><s.icon className="size-8 text-cyan" /><h3 className="mt-5 text-lg font-semibold">{s.t}</h3><p className="mt-2 text-sm text-brand-foreground/70">{s.d}</p></Reveal>)}</div>
      </div></section>
      <section className="px-5 pb-20 lg:px-8"><div className="mx-auto max-w-5xl">
        <SectionHead eyebrow="Pick your pack" title="Simple packs for every rider." className="text-cyan" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[{ icon: Bike, t: "Solo Car / Bike Decal", d: "One weatherproof decal for your car windshield or bike/helmet.", f: ["1 smart QR decal", "Anonymous calling", "4-digit plate check"] }, { icon: Car, t: "Dual Vehicle Pack", d: "Cover the household car and bike together.", f: ["2 smart QR decals", "Family escalation number", "Blood group emergency card"], hot: true }].map((p) => <Reveal key={p.t} className={`rounded-2xl p-8 ${p.hot ? "bg-gold text-gold-foreground" : "border border-cyan/30 bg-brand-foreground/5"}`}><p.icon className="size-8" />{p.hot ? <span className="ml-3 rounded-full bg-gold-foreground px-2 py-0.5 text-[10px] font-bold text-gold">BEST VALUE</span> : null}<h3 className="mt-4 font-display text-2xl font-bold">{p.t}</h3><p className="mt-2 text-sm opacity-80">{p.d}</p><ul className="mt-5 space-y-2">{p.f.map((x) => <li key={x} className="flex gap-2 text-sm"><Check className="size-4 shrink-0" />{x}</li>)}</ul><p className="mt-5 text-xs opacity-70">Pricing confirmed by our team on request.</p><Button variant={p.hot ? "default" : "gold"} className="mt-5 w-full" onClick={() => scrollToForm("mobility-order")}>Order {p.t}</Button></Reveal>)}
        </div>
        <LeadForm id="mobility-order" className="mt-14" subject="instaKonnect — Mobility pack order request" fields={fields} title="Order your Mobility Pack" note="Tell us which pack you'd like in the email; our team will confirm pricing and delivery." />
      </div></section>
    </main>
    <SiteFooter />
  </div>;
}
