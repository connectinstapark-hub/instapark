import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/instapark/content-page";
import { POSTS } from "@/content/blog";
import { breadcrumb, seoHead } from "@/lib/seo";

const TITLE = "Valet Parking & Operations Blog | InstaPark Guides";
const DESC =
  "Guides on valet management software, QR key tracking and valet SOPs for hotels, restaurants and venues, written by the InstaPark team at Pinsoftek.";

export const Route = createFileRoute("/blog/")({
  head: () =>
    seoHead({ path: "/blog", title: TITLE, description: DESC, schemas: [breadcrumb([{ name: "Blog", path: "/blog" }])] }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <ContentPage
      eyebrow="Blog"
      title="Valet operations blog"
      intro="Practical guides for running a faster, safer valet service."
      crumbs={[{ name: "Blog", to: "/blog" }]}
    >
      <div className="space-y-6">
        {POSTS.map((p) => (
          <article key={p.slug} className="rounded-2xl border border-border p-6">
            <h2 className="font-display text-xl font-bold text-foreground">
              <a href={`/blog/${p.slug}`} className="hover:text-primary">{p.title}</a>
            </h2>
            <p className="mt-2 text-[15px] text-foreground/75">{p.description}</p>
            <p className="mt-2 text-xs text-muted-foreground">{p.author} · Updated {p.updated}</p>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
