import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, type Section } from "@/components/instapark/content-page";
import { breadcrumb, faqSchema, seoHead } from "@/lib/seo";

const TITLE = "How InstaPark Valet Software Works: 5 Steps | InstaPark";
const DESC = "How InstaPark runs a valet operation in five steps: setup, digital check-in with QR key tags and photos, live tracking, guest retrieval, and audit reporting.";
const SECTIONS: Section[] = [
  {
    "h2": "The five phases",
    "steps": [
      "Setup & provisioning \u2014 register the venue, map lots and zones, invite staff with role-based access.",
      "Digital check-in \u2014 log the vehicle, pair a QR key tag, take damage-inspection photos and tag the parking spot.",
      "Live tracking \u2014 supervisors see driver locations live; guests see car status on their QR pass.",
      "Retrieval \u2014 the guest requests the car; a valet claims and completes the task. Lost-pass and self-pickup flows are supported.",
      "Audit & analytics \u2014 timestamps, photos and GPS points are stored for incident review and reporting."
    ]
  },
  {
    "h2": "Who uses which interface",
    "table": {
      "head": [
        "Role",
        "Interface",
        "Main job"
      ],
      "rows": [
        [
          "Valet driver",
          "Staff mobile app",
          "Check-in, park, retrieve"
        ],
        [
          "Supervisor",
          "Live dashboard",
          "Assign tasks, watch drivers"
        ],
        [
          "Manager / owner",
          "Admin dashboard",
          "Staff, venues, reports"
        ],
        [
          "Guest",
          "QR pass (no app)",
          "Status and retrieval request"
        ]
      ]
    }
  }
];

export const Route = createFileRoute("/how-it-works")({
  head: () => seoHead({ path: "/how-it-works", title: TITLE, description: DESC, schemas: [breadcrumb([{ name: "How it works", path: "/how-it-works" }]), { "@context": "https://schema.org", "@type": "HowTo", name: "How InstaPark runs a valet operation", step: SECTIONS[0].steps!.map((t, i) => ({ "@type": "HowToStep", position: i + 1, text: t })) }] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="How it works"
      title="How InstaPark works, step by step"
      intro="InstaPark runs a valet operation in five phases: setup, digital check-in, live tracking, retrieval, and audit. Each phase is recorded, so every vehicle has a complete history."
      crumbs={[{ name: "How it works", to: "/how-it-works" }]}
      sections={SECTIONS}
      related={[{"to": "/valet-management-software", "label": "What is valet management software"}, {"to": "/qr-key-management", "label": "QR key management for valet"}, {"to": "/hotel-valet-software", "label": "Hotel valet management system"}, {"to": "/restaurant-valet-software", "label": "Restaurant valet software"}, {"to": "/hospital-and-mall-valet", "label": "Valet for hospitals and malls"}]}
    />
  );
}
