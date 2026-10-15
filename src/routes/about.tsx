import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, type Section } from "@/components/instapark/content-page";
import { breadcrumb, faqSchema, seoHead } from "@/lib/seo";
import { ORG } from "@/lib/seo";

const TITLE = "About InstaPark by Pinsoftek | Valet Management Platform";
const DESC = "InstaPark is a valet management platform built by Pinsoftek in Ahmedabad, India. Learn who we are, what we build and how to contact the team.";
const SECTIONS: Section[] = [
  {
    "h2": "Entity details",
    "table": {
      "head": [
        "Field",
        "Detail"
      ],
      "rows": [
        [
          "Product",
          "InstaPark \u2014 valet management platform"
        ],
        [
          "Company",
          "Pinsoftek (www.pinsoftek.com)"
        ],
        [
          "Founded",
          "[PLACEHOLDER: founding year]"
        ],
        [
          "Headquarters",
          "306, Shail's Mall, B/h. Girish Coldrinks, C.G. Road, Ahmedabad \u2013 380 006, Gujarat, India"
        ],
        [
          "Primary market",
          "India (also available globally)"
        ],
        [
          "Email",
          "connect.instapark@gmail.com"
        ],
        [
          "Phone",
          "+91 7990317623"
        ]
      ]
    }
  },
  {
    "h2": "Team",
    "p": [
      "[PLACEHOLDER: founders and key team members]"
    ]
  },
  {
    "h2": "What we build",
    "p": [
      "Software that replaces paper valet tickets and key boards with digital check-in, QR key tags, vehicle photos, live driver tracking, an app-free guest pass and audit reporting."
    ]
  }
];

export const Route = createFileRoute("/about")({
  head: () => seoHead({ path: "/about", title: TITLE, description: DESC, schemas: [breadcrumb([{ name: "About", path: "/about" }]), { "@context": "https://schema.org", "@type": "AboutPage", name: TITLE, mainEntity: ORG }] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="About"
      title="About InstaPark and Pinsoftek"
      intro="InstaPark is a valet management platform for hotels, restaurants, malls, hospitals, events and valet agencies. It is designed, built and supported by Pinsoftek, a software company based in Ahmedabad, India."
      crumbs={[{ name: "About", to: "/about" }]}
      sections={SECTIONS}
      related={[{"to": "/valet-management-software", "label": "What is valet management software"}, {"to": "/qr-key-management", "label": "QR key management for valet"}, {"to": "/hotel-valet-software", "label": "Hotel valet management system"}, {"to": "/restaurant-valet-software", "label": "Restaurant valet software"}, {"to": "/hospital-and-mall-valet", "label": "Valet for hospitals and malls"}]}
    />
  );
}
