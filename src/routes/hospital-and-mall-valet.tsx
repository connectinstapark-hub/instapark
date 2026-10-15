import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, type Section } from "@/components/instapark/content-page";
import { breadcrumb, faqSchema, seoHead } from "@/lib/seo";

const TITLE = "Valet Parking Software for Hospitals and Malls | InstaPark";
const DESC = "Valet parking software for hospitals and malls: handle high vehicle volume, multiple entry points and visitors with an app-free QR pass and live driver tracking.";
const SECTIONS: Section[] = [
  {
    "h2": "Hospitals",
    "p": [
      "Patients and families need fast, low-stress drop-off. Valets log the car in seconds, and the visitor can request it from the ward or waiting area without installing an app."
    ]
  },
  {
    "h2": "Malls",
    "p": [
      "Shoppers stay for unpredictable lengths of time. Spot tagging across basement levels and open lots means valets find cars quickly, and managers can see volume by hour."
    ]
  },
  {
    "h2": "Features by venue type",
    "table": {
      "head": [
        "Feature",
        "Hospital",
        "Mall"
      ],
      "rows": [
        [
          "Multiple drop-off points",
          "Yes",
          "Yes"
        ],
        [
          "Zone / level tagging",
          "Yes",
          "Yes"
        ],
        [
          "Visitor QR pass",
          "Yes",
          "Yes"
        ],
        [
          "Peak volume reports",
          "Yes",
          "Yes"
        ]
      ]
    }
  }
];

export const Route = createFileRoute("/hospital-and-mall-valet")({
  head: () => seoHead({ path: "/hospital-and-mall-valet", title: TITLE, description: DESC, schemas: [breadcrumb([{ name: "Hospital & mall valet", path: "/hospital-and-mall-valet" }])] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="For hospitals & malls"
      title="Valet for hospitals and malls"
      intro="Hospitals and malls handle high vehicle volume across several entrances. InstaPark coordinates valets across zones, gives visitors an app-free QR pass and records every key and vehicle."
      crumbs={[{ name: "Hospital & mall valet", to: "/hospital-and-mall-valet" }]}
      sections={SECTIONS}
      related={[{"to": "/valet-management-software", "label": "What is valet management software"}, {"to": "/qr-key-management", "label": "QR key management for valet"}, {"to": "/hotel-valet-software", "label": "Hotel valet management system"}, {"to": "/restaurant-valet-software", "label": "Restaurant valet software"}, {"to": "/how-it-works", "label": "How InstaPark works, step by step"}]}
    />
  );
}
