import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, type Section } from "@/components/instapark/content-page";
import { breadcrumb, faqSchema, seoHead } from "@/lib/seo";

const TITLE = "Press & Launch News | Pinsoftek Launches InstaPark";
const DESC = "Press and launch news for InstaPark, the valet management platform from Pinsoftek. Read the launch announcement and find media contact details.";
const SECTIONS: Section[] = [
  {
    "h2": "Pinsoftek launches InstaPark, a valet management platform for Indian venues",
    "p": [
      "Ahmedabad, India \u2014 [PLACEHOLDER: launch date]. Pinsoftek has launched InstaPark, a valet management platform that gives hotels, restaurants, malls, hospitals and event venues digital check-in, QR key tracking, vehicle photo records, live driver tracking and an app-free QR guest pass.",
      "[PLACEHOLDER: quote from Pinsoftek leadership]"
    ]
  },
  {
    "h2": "As seen in",
    "p": [
      "[PLACEHOLDER: media coverage links]"
    ]
  },
  {
    "h2": "Media kit",
    "list": [
      "Logo: www.instapark.app/instapark-mark.png",
      "Contact: connect.instapark@gmail.com \u00b7 +91 7990317623"
    ]
  }
];

export const Route = createFileRoute("/press")({
  head: () => seoHead({ path: "/press", title: TITLE, description: DESC, schemas: [breadcrumb([{ name: "Press", path: "/press" }])] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="Press"
      title="Press and launch"
      intro="News and announcements about InstaPark. Media enquiries: connect.instapark@gmail.com."
      crumbs={[{ name: "Press", to: "/press" }]}
      sections={SECTIONS}
      related={[{"to": "/valet-management-software", "label": "What is valet management software"}, {"to": "/qr-key-management", "label": "QR key management for valet"}, {"to": "/hotel-valet-software", "label": "Hotel valet management system"}, {"to": "/restaurant-valet-software", "label": "Restaurant valet software"}, {"to": "/hospital-and-mall-valet", "label": "Valet for hospitals and malls"}]}
    />
  );
}
