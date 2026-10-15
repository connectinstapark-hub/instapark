// Single source of truth for SEO: canonical host, entity details and head() builders.
export const SITE_URL = "https://www.instapark.app";
export const SITE_NAME = "InstaPark";
export const LOGO_URL = `${SITE_URL}/instapark-mark.png`;

export const ORG = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: LOGO_URL,
  description:
    "InstaPark is a valet management platform for hotels, restaurants, malls, hospitals, events and corporate campuses, built by Pinsoftek.",
  parentOrganization: { "@type": "Organization", name: "Pinsoftek", url: "https://www.pinsoftek.com" },
  // [LINKEDIN] [X] [YOUTUBE] — add real profile URLs here when available
  sameAs: ["https://www.pinsoftek.com"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "306, Shail's Mall, B/h. Girish Coldrinks, C.G. Road",
    addressLocality: "Ahmedabad",
    postalCode: "380006",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "connect.instapark@gmail.com",
    telephone: "+91-7990317623",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["en", "hi", "gu"],
  },
};

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function seoHead(opts: {
  path: string;
  title: string;
  description: string;
  type?: string;
  schemas?: object[];
}) {
  const url = `${SITE_URL}${opts.path === "/" ? "" : opts.path}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: (opts.schemas ?? []).map((s) => ({
      type: "application/ld+json",
      children: JSON.stringify(s),
    })),
  };
}
