# InstaPark SEO / AEO / GEO checklist

## Implemented
- Per-page title, description, canonical (https://www.instapark.app), robots, Open Graph (en_IN), Twitter Card — `src/lib/seo.ts`
- Server-rendered HTML on every page (TanStack Start SSR), so crawlers and AI bots get full content and meta tags without extra prerendering
- JSON-LD: Organization (Pinsoftek parent), WebSite, ProfessionalService (sitewide); SoftwareApplication, HowTo, FAQPage (home); HowTo (/how-it-works); FAQPage (/faq); AboutPage (/about); Article (blog posts); BreadcrumbList (all inner pages)
- Home: "InstaPark in one paragraph" block + 12-question FAQ
- New pages: /valet-management-software, /qr-key-management, /hotel-valet-software, /restaurant-valet-software, /hospital-and-mall-valet, /how-it-works, /faq, /about, /press, /blog + 3 articles
- Footer link block interlinking all pages; top menu links work from every page
- robots.txt (AI crawlers allowed, sitemap referenced), sitemap.xml, llms.txt, web manifest, apple-touch-icon, 404 page with helpful links

## You must do
- Connect www.instapark.app (and instapark.app) in Project settings → Domains and set www as Primary so other hosts redirect
- Replace every [PLACEHOLDER] (integrations, pricing, setup time, founding year, team, case studies, press quotes/date, tag supply)
- Add [GSC_TOKEN] (Search Console) and [GA4_ID] in `src/routes/__root.tsx`; add real [LINKEDIN]/[X]/[YOUTUBE] URLs in `src/lib/seo.ts` and the footer icons
- Submit sitemap in Google Search Console and Bing Webmaster Tools
- Create a Google Business Profile for the Ahmedabad office
- Create LinkedIn, YouTube, Crunchbase profiles linking to instapark.app; get directory listings and backlinks
- Collect real customer reviews (reviews section is hidden until then)
- Validate with Google Rich Results Test after the domain is live
