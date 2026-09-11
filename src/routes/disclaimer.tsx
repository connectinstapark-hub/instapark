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
        The user agrees and acknowledges that use of the InstaPark mobile
        app/website is at their sole risk, and that InstaPark disclaims all
        representations and warranties of any kind, whether express or implied,
        as to condition, suitability, quality, and fitness for any purpose, to
        the fullest extent permitted by law.
      </P>
      <P>
        The information contained on this website/application is provided solely
        for general informational purposes by InstaPark. While we endeavor to
        keep information up to date and correct, we make no representations or
        warranties of any kind, express or implied, about the completeness,
        accuracy, reliability, suitability, or availability of the website,
        application, or related content for any purpose. Any reliance you place
        on such information is strictly at your own risk.
      </P>
      <P>
        In no event will we be liable for any loss or damage, including without
        limitation indirect or consequential loss or damage, or any loss or
        damage arising from loss of data or profits, arising out of or in
        connection with the use of this website or application.
      </P>
      <P>
        Through InstaPark you may be able to link to other websites which are
        not under our control. We have no control over the nature, content, or
        availability of those sites, and inclusion of any link does not imply a
        recommendation or endorsement.
      </P>
      <P>
        Every effort is made to keep InstaPark up and running smoothly. However,
        InstaPark takes no responsibility for, and will not be liable for, the
        website/application being temporarily unavailable due to technical
        issues beyond our control.
      </P>
    </LegalPage>
  );
}
