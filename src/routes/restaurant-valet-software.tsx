import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, type Section } from "@/components/instapark/content-page";
import { breadcrumb, faqSchema, seoHead } from "@/lib/seo";

const TITLE = "Restaurant Valet Parking Software | InstaPark";
const DESC = "Restaurant valet parking software that keeps peak-hour service fast: digital tickets, QR key tags, car-ready requests from the table and nightly reports.";
const SECTIONS: Section[] = [
  {
    "h2": "Built for peak hours",
    "list": [
      "Quick intake: vehicle number, photos and QR key tag in one flow",
      "Diners request their car before the bill is settled",
      "Task queue shows which valet takes the next retrieval",
      "Nightly report of vehicles handled and wait times"
    ]
  },
  {
    "h2": "Restaurants vs hotels",
    "table": {
      "head": [
        "Need",
        "Restaurant",
        "Hotel"
      ],
      "rows": [
        [
          "Typical stay",
          "1\u20133 hours",
          "Overnight to days"
        ],
        [
          "Peak",
          "Dinner rush",
          "Checkout, banquets"
        ],
        [
          "Key priority",
          "Speed of handover",
          "Long-term custody"
        ]
      ]
    }
  }
];

export const Route = createFileRoute("/restaurant-valet-software")({
  head: () => seoHead({ path: "/restaurant-valet-software", title: TITLE, description: DESC, schemas: [breadcrumb([{ name: "Restaurant valet software", path: "/restaurant-valet-software" }])] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="For restaurants"
      title="Restaurant valet software"
      intro="Restaurant valet software keeps short-stay, high-turnover parking fast. With InstaPark, diners request their car from the table using a QR pass, and valets work a live task queue."
      crumbs={[{ name: "Restaurant valet software", to: "/restaurant-valet-software" }]}
      sections={SECTIONS}
      related={[{"to": "/valet-management-software", "label": "What is valet management software"}, {"to": "/qr-key-management", "label": "QR key management for valet"}, {"to": "/hotel-valet-software", "label": "Hotel valet management system"}, {"to": "/hospital-and-mall-valet", "label": "Valet for hospitals and malls"}, {"to": "/how-it-works", "label": "How InstaPark works, step by step"}]}
    />
  );
}
