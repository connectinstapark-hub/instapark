import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/instapark/site-nav";
import { Hero } from "@/components/instapark/hero";
import { ValueFraming } from "@/components/instapark/value-framing";
import { Interfaces } from "@/components/instapark/interfaces";
import { HowItWorks } from "@/components/instapark/how-it-works";
import { Differentiators } from "@/components/instapark/differentiators";
import { Audiences } from "@/components/instapark/audiences";
// Social proof is hidden until real customer reviews are available — see src/components/instapark/social-proof.tsx
// import { SocialProof } from "@/components/instapark/social-proof";
import { Pricing } from "@/components/instapark/pricing";
import { DemoCta } from "@/components/instapark/demo-cta";
import { SiteFooter } from "@/components/instapark/site-footer";
import { PageLoader } from "@/components/instapark/page-loader";
import { DefinitionBlock, FaqSection } from "@/components/instapark/faq-section";
import { FAQS } from "@/content/faqs";
import { SITE_URL, LOGO_URL, faqSchema, seoHead } from "@/lib/seo";

const title = "InstaPark — Valet Management Software for Hotels & Venues";
const description =
  "InstaPark is valet parking software for hotels, malls, hospitals and events in India: QR key tracking, vehicle photos, live driver tracking and app-free guest retrieval.";

const software = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "InstaPark",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  url: SITE_URL,
  image: LOGO_URL,
  description,
  creator: { "@type": "Organization", name: "Pinsoftek", url: "https://www.pinsoftek.com" },
  offers: { "@type": "Offer", url: `${SITE_URL}/#pricing`, availability: "https://schema.org/InStock" },
  featureList: [
    "Digital valet check-in and check-out",
    "QR key tag tracking",
    "Timestamped vehicle condition photos",
    "GPS parking spot tagging",
    "Real-time driver tracking",
    "App-free QR guest pass and retrieval requests",
    "Staff, shift and role management",
    "Audit trail and reporting",
  ],
};

const howTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How InstaPark runs a valet operation",
  step: [
    ["Setup & provisioning", "Register the venue, map lots and zones, and invite staff with role-based access."],
    ["Digital check-in", "Log the vehicle, pair a QR key tag, capture damage-inspection photos and tag the parking spot."],
    ["Live tracking", "Supervisors watch driver locations live while the guest sees their car status on a QR pass."],
    ["Retrieval", "The guest requests the car from the pass; a valet claims the task and returns the vehicle."],
    ["Audit & analytics", "Every timestamp, photo and GPS point is stored for incident review and reporting."],
  ].map(([name, text], i) => ({ "@type": "HowToStep", position: i + 1, name, text })),
};

export const Route = createFileRoute("/")({
  head: () => seoHead({ path: "/", title, description, schemas: [software, howTo, faqSchema(FAQS)] }),
  component: Index,
});


function Index() {
  return (
    <div className="min-h-screen bg-background">
      <PageLoader />
      <SiteNav />
      <main>
        <Hero />
        <DefinitionBlock />
        <ValueFraming />
        <Interfaces />
        <HowItWorks />
        <Differentiators />
        <Audiences />
        {/* Social proof hidden — no real reviews yet */}
        <Pricing />
        <FaqSection />
        <DemoCta />
      </main>
      <SiteFooter />
    </div>
  );
}
