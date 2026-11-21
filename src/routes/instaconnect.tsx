import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Check, X, Car, Siren, Building2, Ticket, ScanLine, Hash, Bell } from "lucide-react";
import { SiteNav } from "@/components/instapark/site-nav";
import { SiteFooter } from "@/components/instapark/site-footer";
import { InstaConnectRequest } from "@/components/instapark/instaconnect-request";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { InstaConnectPreview, CONNECT_STEPS } from "@/components/instapark/instaconnect-preview";
import { CONNECT_FAQS, type RequestKind } from "@/lib/instaconnect";

const description = "instaConnect by InstaPark: privacy-first QR tags for cars and bikes. Reach vehicle owners through secure anonymous calls with no app download. Plate verification protects both numbers; WhatsApp and SMS alerts are coming soon.";
export const Route = createFileRoute("/instaconnect")({
  head: () => ({
    meta: [{ title: "instaConnect — Private Vehicle QR Tags by InstaPark" }, { name: "description", content: description }, { property: "og:title", content: "instaConnect — Private Vehicle QR Tags by InstaPark" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: "https://park-instantly-lovely.lovable.app/instaconnect" }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: "https://park-instantly-lovely.lovable.app/instaconnect" }],
  }),
  component: InstaConnectPage,
});

const cases = [
  { icon: Car, title: "Wrongly parked or double-parked", text: "Get alerted before traffic police tow your vehicle or an argument escalates." },
  { icon: Siren, title: "Emergency & safety alerts", text: "Receive immediate notifications for headlights left on, unlocked doors or an accident." },
  { icon: Building2, title: "Communities & corporate parks", text: "Replace paper windshield stickers with smart, privacy-protected resident and visitor tags." },
  { icon: Ticket, title: "Valet & event add-on", text: "Extend InstaPark’s valet ecosystem with ongoing road safety for guests after they drive away." },
];

function InstaConnectPage() {
  const [kind, setKind] = useState<RequestKind | null>(null);
  return <div className="min-h-screen bg-background">
    <SiteNav solid />
    <main>
      <section className="relative isolate overflow-hidden bg-brand-deep pt-28 text-brand-foreground lg:pt-32">
        <img src="/instaconnect-vehicle.jpg" alt="instaConnect vehicle QR tag on a car windshield" width={1672} height={941} className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
        <div aria-hidden className="connect-photo-scrim pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:pb-12">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-xs font-semibold text-gold"><ShieldCheck className="size-4 shrink-0" />NEW ADD-ON BY INSTAPARK • 100% NUMBER PRIVACY</p>
            <p className="mt-5 font-display text-4xl font-bold text-gold">instaConnect</p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Let Anyone Reach You — <span className="text-gold">Without Sharing Your Number.</span></h1>
            <p className="mt-5 text-base leading-relaxed text-brand-foreground/85">Stick the <strong>instaConnect</strong> QR tag on your car or bike. If your vehicle is wrongly parked, blocking someone, or needs urgent attention, anyone can scan it to reach you via a secure anonymous call—while keeping both phone numbers completely private.</p>
            <p className="mt-3 text-sm text-brand-foreground/75">WhatsApp and SMS alerts are coming soon.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="gold" className="h-auto min-h-11 whitespace-normal px-5 py-3" onClick={() => setKind("individual")}>Get Your instaConnect Tag<ArrowRight /></Button>
              <Button variant="brandOutline" className="h-auto min-h-11 whitespace-normal px-5 py-3" onClick={() => setKind("bulk")}>For Societies & Venues (Bulk Order)</Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold"><ScanLine className="size-5 shrink-0" />Zero app downloads. Scan → Browser → Private call.</p>
          </div>
          <InstaConnectPreview />
        </div>
      </section>
      <section className="border-b border-border bg-cream px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-6xl"><p className="text-xs font-semibold uppercase text-primary">From a scan to a private connection</p><h2 className="mt-3 text-3xl font-bold">Four steps. Both numbers protected.</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{CONNECT_STEPS.map((step, index) => <li key={step.title} className="border-t-2 border-gold pt-5"><span className="font-display text-3xl font-bold text-primary">0{index + 1}</span><h3 className="mt-4 text-xl font-semibold">{step.title}{index === 0 ? <span className="mt-2 block text-xs font-semibold text-primary">No App Needed</span> : null}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>{index === 2 ? <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Standard: GJ01AB 1234 → 1234<br />BH: 22 BH 1234 AA → 1234<br />Short plates: 7 or 0007</p> : null}</li>)}</ol>
        </div>
      </section>
      <section className="border-b border-border px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase text-primary">Same contact. More privacy.</p>
          <h2 className="mt-3 text-3xl font-bold">Leave a tag. Not your number.</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="border-l-2 border-border pl-6"><h3 className="text-xl font-semibold">The old way</h3><p className="mt-1 text-sm text-muted-foreground">Paper slips on the dashboard</p><ul className="mt-5 space-y-4">{["Exposes your personal number to strangers", "Invites spam calls and harassment", "Fades in sunlight", "Only works when someone looks closely"].map((text) => <li key={text} className="flex gap-3 text-sm text-muted-foreground"><X className="size-4 shrink-0" />{text}</li>)}</ul></div>
            <div className="border-l-2 border-gold pl-6"><h3 className="text-xl font-semibold text-primary">The instaConnect way</h3><p className="mt-1 text-sm text-muted-foreground">Smart, masked QR contact</p><ul className="mt-5 space-y-4">{["100% phone number privacy", "Secure anonymous voice calls — live now", "Opens in a browser from any phone camera", "Weatherproof tags made to last for years"].map((text) => <li key={text} className="flex gap-3 text-sm"><Check className="size-4 shrink-0 text-primary" />{text}</li>)}</ul></div>
          </div>
        </div>
      </section>
      <section className="px-5 py-14 lg:px-8"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-bold">More than a phone slip.</h2><div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{[
        { icon: ShieldCheck, title: "Two-way identity protection", text: "Both the owner and the scanner stay protected from number leaks, spam and unwanted calls." },
        { icon: Hash, title: "Anti-spam plate check", text: "A last-4-digit check helps confirm the scanner is next to the right vehicle before connecting." },
        { icon: Car, title: "Standard & BH-series plates", text: "Built for Indian registrations, including Bharat series and short numbers such as 7 or 0007." },
        { icon: Bell, title: "Context-aware contact", text: "Know why someone is calling: wrong parking, a blocked car, lights left on, vehicle damage or another reason." },
      ].map((item) => <div key={item.title}><item.icon className="size-7 text-primary" /><h3 className="mt-4 text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></div>)}</div></div></section>
      <section className="px-5 py-14 lg:px-8"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-bold">For the moments you’re not by your vehicle.</h2><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{cases.map((item) => <article key={item.title} className="rounded-lg border border-border p-6"><item.icon className="size-7 text-primary" /><h3 className="mt-5 text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}</div></div></section>
      <section className="bg-brand px-5 py-14 text-brand-foreground lg:px-8"><div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_auto]"><div><p className="flex items-center gap-2 text-xs font-semibold uppercase text-gold"><Building2 className="size-4" />Your community. Your branding.</p><h2 className="mt-3 max-w-2xl text-3xl font-bold">Deploy instaConnect Across Your Residential Society, Office Park, or Valet Venue</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-foreground/80">Replace outdated paper windshield stickers with smart, privacy-protected QR tags. Ideal for gated communities, hotels, corporate parks and InstaPark partner venues.</p></div><Button variant="gold" className="h-auto min-h-12 whitespace-normal px-5 py-3" onClick={() => setKind("bulk")}>Inquire for Bulk / Co-Branded Tags<ArrowRight /></Button></div></section>
      <section className="px-5 py-14 lg:px-8"><div className="mx-auto max-w-3xl"><p className="text-xs font-semibold uppercase text-primary">A little more clarity</p><h2 className="mt-3 text-3xl font-bold">Your questions, answered.</h2><Accordion type="single" collapsible className="mt-6">{CONNECT_FAQS.map((faq, index) => <AccordionItem key={faq.q} value={`faq-${index}`}><AccordionTrigger className="py-5 text-base">{faq.q}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}</Accordion><div className="mt-10 flex flex-wrap items-center gap-4"><ShieldCheck className="size-7 text-primary" /><p className="flex-1 text-sm font-medium">Stay reachable. Stay private.</p><Button variant="gold" onClick={() => setKind("individual")}>Get your instaConnect tag<ArrowRight /></Button></div></div></section>
    </main>
    <SiteFooter />
    <InstaConnectRequest kind={kind} onClose={() => setKind(null)} />
  </div>;
}