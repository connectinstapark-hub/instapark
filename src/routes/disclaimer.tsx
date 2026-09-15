import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, P } from "@/components/instapark/legal-layout";

const title = "Disclaimer — InstaPark";
const description =
  "InstaPark's disclaimer of representations, warranties, and liability for the use of its website and mobile application.";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://park-instantly-lovely.lovable.app/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "https://park-instantly-lovely.lovable.app/disclaimer" }],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <LegalPage title="Disclaimer" updated="September 2026">
      <P>
        By using the InstaPark app or website, you accept that you do so entirely at your own
        risk, and that InstaPark makes no representations or warranties of any kind — express or
        implied — regarding its condition, suitability, quality, or fitness for any particular
        purpose, to the fullest extent the law allows.
      </P>
      <P>
        The content on this website/app is offered purely for general information by InstaPark.
        While we try to keep it accurate and current, we don't guarantee, in any form, the
        completeness, accuracy, reliability, suitability, or availability of the site, the app, or
        any related content for any given purpose. If you choose to rely on this information, that
        reliance is entirely at your own risk.
      </P>
      <P>
        We won't be liable, under any circumstances, for loss or damage of any kind — including,
        without limitation, indirect or consequential loss, or loss connected to lost data or
        profits — arising from or connected with your use of this website or app.
      </P>
      <P>
        InstaPark may contain links to other websites that we don't control. We have no say over
        the content or practices of those sites, and linking to them doesn't mean we recommend or
        endorse them.
      </P>
      <P>
        We work hard to keep InstaPark running reliably. Even so, InstaPark isn't responsible, and
        won't be held liable, for the website or app being temporarily unreachable because of
        technical problems outside our control.
      </P>
    </LegalPage>
  );
}
