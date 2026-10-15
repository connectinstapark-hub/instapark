import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, type Section } from "@/components/instapark/content-page";
import { breadcrumb, faqSchema, seoHead } from "@/lib/seo";

const TITLE = "Hotel Valet Management System | InstaPark for Hotels";
const DESC = "A hotel valet management system for Indian hotels: digital tickets, QR key tracking, photo records, live driver tracking and app-free car requests for guests.";
const SECTIONS: Section[] = [
  {
    "h2": "Hotel valet challenges InstaPark addresses",
    "list": [
      "Long waits at checkout and after banquets",
      "Keys misplaced during shift changes",
      "Damage disputes without proof of condition",
      "No view of which valet is where"
    ]
  },
  {
    "h2": "How it works at a hotel",
    "steps": [
      "Guest arrives; valet logs the car and takes condition photos.",
      "Guest receives a QR pass by link or on screen.",
      "Valet parks, tags the spot and hangs the QR-tagged key.",
      "Guest taps 'Request my car' from their room or the lobby.",
      "A valet claims the task; the guest sees status until handover."
    ]
  },
  {
    "h2": "Integrations",
    "p": [
      "Hotel PMS integration: [PLACEHOLDER: confirm supported PMS systems]."
    ]
  }
];

export const Route = createFileRoute("/hotel-valet-software")({
  head: () => seoHead({ path: "/hotel-valet-software", title: TITLE, description: DESC, schemas: [breadcrumb([{ name: "Hotel valet software", path: "/hotel-valet-software" }])] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="For hotels"
      title="Hotel valet management system"
      intro="InstaPark gives hotels a digital valet desk: guests get an app-free QR pass, valets scan QR key tags at every handover, and the front office sees every car and key on one dashboard."
      crumbs={[{ name: "Hotel valet software", to: "/hotel-valet-software" }]}
      sections={SECTIONS}
      related={[{"to": "/valet-management-software", "label": "What is valet management software"}, {"to": "/qr-key-management", "label": "QR key management for valet"}, {"to": "/restaurant-valet-software", "label": "Restaurant valet software"}, {"to": "/hospital-and-mall-valet", "label": "Valet for hospitals and malls"}, {"to": "/how-it-works", "label": "How InstaPark works, step by step"}]}
    />
  );
}
