import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPage } from "@/components/instapark/content-page";
import { POSTS } from "@/content/blog";
import { SITE_URL, breadcrumb, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData: p }) => {
    if (!p) return { meta: [{ title: "Article not found | InstaPark" }, { name: "robots", content: "noindex" }] };
    const path = `/blog/${p.slug}`;
    return seoHead({
      path,
      title: p.metaTitle,
      description: p.description,
      type: "article",
      schemas: [
        breadcrumb([{ name: "Blog", path: "/blog" }, { name: p.title, path }]),
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.description,
          datePublished: p.published,
          dateModified: p.updated,
          author: { "@type": "Organization", name: p.author },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}${path}`,
        },
      ],
    });
  },
  component: PostPage,
});

function PostPage() {
  const p = Route.useLoaderData();
  return (
    <ContentPage
      eyebrow="Blog"
      title={p.title}
      intro={p.description}
      crumbs={[{ name: "Blog", to: "/blog" }, { name: p.title, to: `/blog/${p.slug}` }]}
      meta={<>By {p.author} · Published {p.published} · Last updated {p.updated}</>}
      sections={p.sections}
      related={[
        { to: "/valet-management-software", label: "Valet management software" },
        { to: "/qr-key-management", label: "QR key management for valet" },
        { to: "/hotel-valet-software", label: "Hotel valet management system" },
        { to: "/blog", label: "More articles" },
      ]}
    />
  );
}
