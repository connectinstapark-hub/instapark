import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, type Section } from "@/components/instapark/content-page";
import { breadcrumb, faqSchema, seoHead } from "@/lib/seo";

const TITLE = "Valet Management Software | InstaPark Valet Platform India";
const DESC = "Valet management software that replaces paper tickets with digital check-in, QR key tags, vehicle photos, live driver tracking and audit reports. Built in India.";
const SECTIONS: Section[] = [
  {
    "h2": "What valet management software does",
    "p": [
      "It records every vehicle from drop-off to return: who took the key, where the car is parked, which valet is driving it and when the guest asked for it back. Supervisors see this live; managers get reports afterwards."
    ]
  },
  {
    "h2": "Core InstaPark features",
    "list": [
      "Digital check-in and check-out with vehicle number and guest details",
      "QR key tags scanned at every key handover",
      "Timestamped vehicle condition photos at intake",
      "GPS parking spot tagging for open lots and grounds",
      "Real-time driver tracking and task assignment",
      "App-free QR guest pass for status and retrieval requests",
      "Staff, shift and role-based access management",
      "Audit trail, incident review and throughput reports"
    ]
  },
  {
    "h2": "Paper tickets vs InstaPark",
    "table": {
      "head": [
        "Task",
        "Paper ticket valet",
        "InstaPark"
      ],
      "rows": [
        [
          "Key custody",
          "Key board, no handover record",
          "QR key tag scanned per handover"
        ],
        [
          "Vehicle condition",
          "Verbal or none",
          "Timestamped photos at intake"
        ],
        [
          "Parking location",
          "Valet memory",
          "Lot zone or GPS spot tag"
        ],
        [
          "Guest retrieval",
          "Hand back paper stub",
          "Request from QR pass on phone"
        ],
        [
          "Reporting",
          "Manual counts",
          "Automatic logs and reports"
        ]
      ]
    }
  },
  {
    "h2": "Customer stories",
    "p": [
      "[CASE STUDY 1: venue name, problem, result with numbers]",
      "[CASE STUDY 2: venue name, problem, result with numbers]"
    ]
  }
];

export const Route = createFileRoute("/valet-management-software")({
  head: () => seoHead({ path: "/valet-management-software", title: TITLE, description: DESC, schemas: [breadcrumb([{ name: "Valet management software", path: "/valet-management-software" }])] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="Solution"
      title="Valet management software"
      intro="Valet management software digitises vehicle check-in, key custody, parking, retrieval and reporting. InstaPark is a valet management platform that runs these steps for hotels, restaurants, malls, hospitals, events and valet agencies."
      crumbs={[{ name: "Valet management software", to: "/valet-management-software" }]}
      sections={SECTIONS}
      related={[{"to": "/qr-key-management", "label": "QR key management for valet"}, {"to": "/hotel-valet-software", "label": "Hotel valet management system"}, {"to": "/restaurant-valet-software", "label": "Restaurant valet software"}, {"to": "/hospital-and-mall-valet", "label": "Valet for hospitals and malls"}, {"to": "/how-it-works", "label": "How InstaPark works, step by step"}]}
    />
  );
}
