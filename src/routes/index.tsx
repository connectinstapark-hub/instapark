import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/instapark/site-nav";
import { Hero } from "@/components/instapark/hero";
import { ValueFraming } from "@/components/instapark/value-framing";
import { Interfaces } from "@/components/instapark/interfaces";
import { HowItWorks } from "@/components/instapark/how-it-works";
import { Differentiators } from "@/components/instapark/differentiators";
import { Audiences } from "@/components/instapark/audiences";
import { SocialProof } from "@/components/instapark/social-proof";
import { Pricing } from "@/components/instapark/pricing";
import { DemoCta } from "@/components/instapark/demo-cta";
import { SiteFooter } from "@/components/instapark/site-footer";

const title = "InstaPark — Valet Management Platform for Hotels & Venues";
const description =
  "Real-time valet operations on one multi-tenant platform: digital intake, GPS spot tagging, live driver tracking, and app-free QR guest retrieval.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <ValueFraming />
        <Interfaces />
        <HowItWorks />
        <Differentiators />
        <Audiences />
        <SocialProof />
        <Pricing />
        <DemoCta />
      </main>
      <SiteFooter />
    </div>
  );
}
