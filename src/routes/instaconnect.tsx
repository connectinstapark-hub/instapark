import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, QrCode, PhoneCall, MessageCircle, Check, X, Car, Siren, Building2, Ticket, ScanLine } from "lucide-react";
import { SiteNav } from "@/components/instapark/site-nav";
import { SiteFooter } from "@/components/instapark/site-footer";
import { InstaConnectRequest } from "@/components/instapark/instaconnect-request";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CONNECT_FAQS, type RequestKind } from "@/lib/instaconnect";
import vehicle from "@/assets/instaconnect-vehicle.jpg.asset.json";

const description = "instaConnect by InstaPark: privacy-first QR tags for cars and bikes. Reach vehicle owners through masked calls and WhatsApp alerts, with no app download.";
export const Route = createFileRoute("/instaconnect")({
  head: () => ({
    meta: [{ title: "instaConnect — Private Vehicle QR Tags by InstaPark" }, { name: "description", content: description }, { property: "og:title", content: "instaConnect — Private Vehicle QR Tags by InstaPark" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: "https://park-instantly-lovely.lovable.app/instaconnect" }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: "https://park-instantly-lovely.lovable.app/instaconnect" }],
  }),
  component: InstaConnectPage,
});

const steps = [
  { icon: QrCode, title: "Stick & link", text: "Place the QR decal on your car windshield or bike. Scan once to activate and link your mobile number securely." },
  { icon: ScanLine, title: "Anyone scans. No app needed.", text: "Wrong parking, towing or an emergency? A passerby or guard scans the tag using their phone’s native camera. An instant web page opens." },
  { icon: PhoneCall, title: "A private, masked connection", text: "Initiate a masked call or a preset alert: ‘Vehicle blocked’, ‘Lights left on’ or ‘Emergency’. Neither party sees the other’s real phone number." },
];
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
      <section className="relative isolate overflow-hidden bg-brand-deep pt-20 text-brand-foreground lg:pt-0">
        <img src={vehicle.url} alt="Illustration of an instaConnect QR windshield tag scanned with a phone showing Contact Vehicle Owner, Masked Call and Send Alert" width={1672} height={941} className="block h-auto w-full lg:absolute lg:inset-0 lg:h-full lg:object-cover lg:object-center" fetchPriority="high" />
        <div aria-hidden className="connect-photo-scrim pointer-events-none absolute inset-0 hidden lg:block" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-8 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="max-w-lg lg:max-w-[29rem]">
            <p className="flex items-center gap-2 text-xs font-semibold text-gold"><ShieldCheck className="size-4" />BY INSTAPARK • PRIVACY-FIRST VEHICLE TAG</p>
            <p className="mt-4 font-display text-3xl font-bold text-gold">instaConnect</p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Let Anyone Reach You — <span className="text-gold">Without Sharing Your Number.</span></h1>
            <p className="mt-5 text-sm leading-relaxed text-brand-foreground/85">Stick the weatherproof <strong>instaConnect</strong> QR tag on your car or bike. If your vehicle is ever blocked, towed, or in an emergency, anyone can scan it to reach you instantly via a masked call or alert—while your personal mobile number stays 100% private.</p>
            <div className="mt-7 flex flex-col items-start gap-3">
              <Button variant="gold" className="h-auto min-h-11 whitespace-normal px-5 py-3" onClick={() => setKind("individual")}>Order Your instaConnect Tag<ArrowRight /></Button>
              <Button variant="brandOutline" className="h-auto min-h-11 whitespace-normal px-5 py-3" onClick={() => setKind("bulk")}>For Societies & Venues (Bulk Order)</Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-brand-foreground/80"><ScanLine className="size-4 text-gold" />Scan QR → Instant web page → Private connection</p>
            <p className="mt-2 text-xs font-semibold text-gold">Zero app downloads for the person scanning.</p>
          </div>
        </div>
      </section>
      <section className="border-b border-border px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase text-primary">Same contact. More privacy.</p>
          <h2 className="mt-3 text-3xl font-bold">Leave a tag. Not your number.</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="border-l-2 border-border pl-6"><h3 className="text-xl font-semibold">The old way</h3><p className="mt-1 text-sm text-muted-foreground">Paper slips on the dashboard</p><ul className="mt-5 space-y-4">{["Exposes your personal number to strangers", "Invites spam calls and harassment", "Fades in sunlight", "Only works when someone looks closely"].map((text) => <li key={text} className="flex gap-3 text-sm text-muted-foreground"><X className="size-4 shrink-0" />{text}</li>)}</ul></div>
            <div className="border-l-2 border-gold pl-6"><h3 className="text-xl font-semibold text-primary">The instaConnect way</h3><p className="mt-1 text-sm text-muted-foreground">Smart, masked QR contact</p><ul className="mt-5 space-y-4">{["100% phone number privacy", "Instant masked voice calls & WhatsApp alerts", "Works 24/7 from any phone camera", "Weatherproof tags made to last for years"].map((text) => <li key={text} className="flex gap-3 text-sm"><Check className="size-4 shrink-0 text-primary" />{text}</li>)}</ul></div>
          </div>
        </div>
      </section>
      <section className="bg-muted/50 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-6xl"><p className="text-xs font-semibold uppercase text-primary">From a scan to a solution</p><h2 className="mt-3 text-3xl font-bold">Three steps. No exposed numbers.</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">{steps.map((step, index) => <li key={step.title} className="relative border-t-2 border-gold pt-6"><div className="flex items-center justify-between"><span className="font-display text-3xl font-bold text-primary">0{index + 1}</span><step.icon className="size-7 text-primary" /></div><h3 className="mt-5 text-xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p></li>)}</ol>
        </div>
      </section>
      <section className="px-5 py-14 lg:px-8"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-bold">For the moments you’re not by your vehicle.</h2><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{cases.map((item) => <article key={item.title} className="rounded-lg border border-border p-6"><item.icon className="size-7 text-primary" /><h3 className="mt-5 text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}</div></div></section>
      <section className="bg-brand px-5 py-14 text-brand-foreground lg:px-8"><div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_auto]"><div><p className="flex items-center gap-2 text-xs font-semibold uppercase text-gold"><Building2 className="size-4" />Your community. Your branding.</p><h2 className="mt-3 max-w-2xl text-3xl font-bold">Want Co-Branded instaConnect Tags for Your Society, Hotel, or Event?</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-foreground/80">Distribute custom-branded QR safety tags to your residents, employees, or VIP guests. Managed effortlessly via your InstaPark dashboard.</p></div><Button variant="gold" className="h-auto min-h-12 whitespace-normal px-5 py-3" onClick={() => setKind("bulk")}>Request B2B Bulk Pricing<ArrowRight /></Button></div></section>
      <section className="px-5 py-14 lg:px-8"><div className="mx-auto max-w-3xl"><p className="text-xs font-semibold uppercase text-primary">A little more clarity</p><h2 className="mt-3 text-3xl font-bold">Your questions, answered.</h2><Accordion type="single" collapsible className="mt-6">{CONNECT_FAQS.map((faq, index) => <AccordionItem key={faq.q} value={`faq-${index}`}><AccordionTrigger className="py-5 text-base">{faq.q}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}</Accordion><div className="mt-10 flex flex-wrap items-center gap-4"><ShieldCheck className="size-7 text-primary" /><p className="flex-1 text-sm font-medium">Stay reachable. Stay private.</p><Button variant="gold" onClick={() => setKind("individual")}>Get your instaConnect tag<ArrowRight /></Button></div></div></section>
    </main>
    <SiteFooter />
    <InstaConnectRequest kind={kind} onClose={() => setKind(null)} />
  </div>;
}