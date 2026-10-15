import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, type Section } from "@/components/instapark/content-page";
import { breadcrumb, faqSchema, seoHead } from "@/lib/seo";

const TITLE = "QR Key Management for Valet Parking | InstaPark";
const DESC = "QR key management for valet parking: pair every key with a QR key tag, scan each handover, and always know which valet holds which key and where the car is.";
const SECTIONS: Section[] = [
  {
    "h2": "How QR key tracking works",
    "steps": [
      "At check-in, the valet attaches a QR key tag to the guest's key.",
      "The tag is scanned and linked to the vehicle record and guest pass.",
      "Each time the key changes hands, the receiving staff member scans it.",
      "When the car is parked, the valet tags the lot zone or GPS spot.",
      "At retrieval, the scan closes the record with a timestamp."
    ]
  },
  {
    "h2": "Why it reduces lost keys",
    "p": [
      "Custody is recorded per person and per time, so a missing key can be traced to the last scan. Supervisors can see open keys at any moment instead of counting a key board at shift end."
    ]
  },
  {
    "h2": "What you need",
    "list": [
      "Printed QR key tags [PLACEHOLDER: tag supply details]",
      "Valet phones with the InstaPark staff app",
      "A supervisor or manager account on the dashboard"
    ]
  }
];

export const Route = createFileRoute("/qr-key-management")({
  head: () => seoHead({ path: "/qr-key-management", title: TITLE, description: DESC, schemas: [breadcrumb([{ name: "QR key management", path: "/qr-key-management" }])] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="Solution"
      title="QR key management for valet"
      intro="QR key management pairs each vehicle key with a scannable QR key tag. Every pickup, park and handover is scanned, so the system always knows who holds the key and where the car is parked."
      crumbs={[{ name: "QR key management", to: "/qr-key-management" }]}
      sections={SECTIONS}
      related={[{"to": "/valet-management-software", "label": "What is valet management software"}, {"to": "/hotel-valet-software", "label": "Hotel valet management system"}, {"to": "/restaurant-valet-software", "label": "Restaurant valet software"}, {"to": "/hospital-and-mall-valet", "label": "Valet for hospitals and malls"}, {"to": "/how-it-works", "label": "How InstaPark works, step by step"}]}
    />
  );
}
