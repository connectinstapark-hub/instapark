import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, type Section } from "@/components/instapark/content-page";
import { breadcrumb, faqSchema, seoHead } from "@/lib/seo";
import { FAQS } from "@/content/faqs";

const TITLE = "Valet Management Software FAQ | InstaPark Answers";
const DESC = "Answers to common questions about valet management software, QR key tracking, pricing, data security, setup time and integrations with InstaPark.";
const SECTIONS: Section[] = [
  {
    "h2": "Frequently asked questions",
    faqs: FAQS
  }
];

export const Route = createFileRoute("/faq")({
  head: () => seoHead({ path: "/faq", title: TITLE, description: DESC, schemas: [breadcrumb([{ name: "FAQ", path: "/faq" }]), faqSchema(FAQS)] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="FAQ"
      title="Valet management FAQs"
      intro="Direct answers to the questions hotels, restaurants, venues and valet companies ask most about InstaPark and valet management software."
      crumbs={[{ name: "FAQ", to: "/faq" }]}
      sections={SECTIONS}
      related={[{"to": "/valet-management-software", "label": "What is valet management software"}, {"to": "/qr-key-management", "label": "QR key management for valet"}, {"to": "/hotel-valet-software", "label": "Hotel valet management system"}, {"to": "/restaurant-valet-software", "label": "Restaurant valet software"}, {"to": "/hospital-and-mall-valet", "label": "Valet for hospitals and malls"}]}
    />
  );
}
