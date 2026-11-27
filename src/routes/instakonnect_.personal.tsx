import { createFileRoute } from "@tanstack/react-router";
import { Check, Gift } from "lucide-react";
import { SiteNav } from "@/components/instapark/site-nav";
import { SiteFooter } from "@/components/instapark/site-footer";
import { Reveal } from "@/components/instapark/reveal";
import { VerticalHero, SectionHead, LeadForm, scrollToForm, verticalHead } from "@/components/instapark/instakonnect-vertical";

export const Route = createFileRoute("/instakonnect_/personal")({
  head: () => verticalHead("/instakonnect/personal", "instaKonnect for Luggage, Family & Pets | InstaPark", "Waterproof privacy QR tags for suitcases, laptops, kids' bags and pet collars. Finders reach you through a masked call — your number is never printed.", "/instakonnect-personal.jpg"),
  component: PersonalPage,
});
const cards = [
  { img: "/instakonnect-use-luggage.jpg", t: "Airport & Train Luggage", d: "Recover swapped or misplaced bags before leaving the terminal." },
  { img: "/instakonnect-laptop.jpg", t: "Laptops & Camera Gear", d: "Discreet interior stickers for coworking spaces and cabs." },
  { img: "/instakonnect-kids.jpg", t: "Kids & Senior Citizen Safety", d: "Lanyard/ID tags for crowded festivals, malls, and school trips." },
  { img: "/instakonnect-pet.jpg", t: "Pet Collar Tags", d: "Instant owner reach without engraving personal phone numbers." },
];
const fields = [
  { key: "name", label: "Name", type: "text", autoComplete: "name" },
  { key: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { key: "city", label: "City", type: "text", autoComplete: "address-level2" },
  { key: "kits", label: "Number of Kits", type: "number", autoComplete: "off" },
] as const;

function PersonalPage() {
  return <div className="min-h-screen bg-warm">
    <SiteNav solid />
    <main>
      <VerticalHero img="/instakonnect-personal.jpg" alt="Family travelling with tagged luggage and their dog" className="bg-warm text-foreground" scrim="bg-gradient-to-r from-warm via-warm/90 to-warm/10" badgeClass="bg-coral/15 text-coral ring-1 ring-coral/40" badge="LOST & FOUND • TRAVEL • FAMILY & PETS"
        title={<>Protect What Matters Most — <span className="text-coral">Without Printing Your Number on It.</span></>}
        sub="Attach waterproof instaKonnect tags to suitcases, laptops, kids' school bags, or pet collars. If anything goes missing, finders scan and connect with you instantly via masked call or WhatsApp."
        cta="Get the Family & Travel Tag Bundle" onCta={() => scrollToForm("family-kit")} />
      <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="Everyday peace of mind" title="Tag it once. Find it fast." className="text-coral" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{cards.map((c, i) => <Reveal as="article" key={c.t} delay={i * 100} className="lift-card overflow-hidden rounded-[1.75rem] bg-card shadow-lg"><div className="aspect-[4/5] overflow-hidden"><img src={c.img} alt={c.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" /></div><div className="p-6"><span className="rounded-full bg-amber/20 px-2.5 py-1 text-[11px] font-bold text-coral">0{i + 1}</span><h3 className="mt-3 text-lg font-semibold">{c.t}</h3><p className="mt-2 text-sm text-muted-foreground">{c.d}</p></div></Reveal>)}</div>
      </div></section>
      <section className="px-5 pb-20 lg:px-8"><div className="mx-auto max-w-6xl">
        <Reveal className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-coral p-8 text-brand-foreground sm:p-12 lg:grid-cols-2">
          <div><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Gift className="size-4" />Bundle showcase</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Complete Family Tag Kit</h2><ul className="mt-6 space-y-3">{["Luggage tags for every suitcase", "Mini device decals for laptops & cameras", "Keychain tag for keys & bags"].map((t) => <li key={t} className="flex gap-3"><Check className="size-5 shrink-0" />{t}</li>)}</ul></div>
          <img src="/instakonnect-use-luggage.jpg" alt="Family Tag Kit on travel luggage" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl" />
        </Reveal>
        <LeadForm id="family-kit" className="mt-14 rounded-[1.75rem]" subject="instaKonnect — Family & Travel Tag Bundle request" fields={fields} title="Get the Family & Travel Tag Bundle" note="Our team will confirm pricing and delivery by email." />
      </div></section>
    </main>
    <SiteFooter />
  </div>;
}
