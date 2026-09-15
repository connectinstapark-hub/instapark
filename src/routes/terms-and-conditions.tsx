import { createFileRoute } from "@tanstack/react-router";
import { H2, LegalPage, P, Ul } from "@/components/instapark/legal-layout";

const title = "Terms & Conditions — InstaPark";
const description =
  "The Terms of Use governing access to the InstaPark website and mobile application for Providers, Admins, Supervisors, Drivers, Hosts, and Guests.";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://park-instantly-lovely.lovable.app/terms-and-conditions" },
    ],
    links: [{ rel: "canonical", href: "https://park-instantly-lovely.lovable.app/terms-and-conditions" }],
  }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <LegalPage title="Terms & Conditions" updated="September 2026">
      <P>Welcome to InstaPark — thanks for choosing our services.</P>
      <P>
        Please read these Terms & Conditions before you use our app or website.
      </P>
      <P>
        These Terms of Use govern the relationship between InstaPark (incorporated under
        [APPLICABLE COMPANY LAW], with its registered office at [ADDRESS]) and you, the User. By
        continuing to browse the website or use the app, you're agreeing to be bound by these
        Terms.
      </P>

      <H2>1. Definitions</H2>
      <Ul
        items={[
          "\u201CWe,\u201D \u201COur,\u201D and \u201CUs\u201D refer to InstaPark.",
          "\u201CYou,\u201D \u201Cyour,\u201D and \u201CUser\u201D mean anyone accessing or using the InstaPark website or app, whether as an Owner/Provider, Admin, Supervisor, Driver, Host, or Guest.",
          "\u201CProvider\u201D or \u201COwner\u201D refers to the valet or parking service operator using InstaPark to run their operations.",
          "\u201CAdmin\u201D and \u201CSupervisor\u201D refer to staff a Provider has authorized to manage drivers and event operations on the platform.",
          "\u201CDriver\u201D means someone engaged by a Provider to carry out park/retrieval jobs through the app.",
          "\u201CHost\u201D means an individual or business — a hotel or event organizer, for example — authorized to handle guest pre-registration for a given event.",
          "\u201CGuest\u201D means the end user whose vehicle gets parked or retrieved through the platform.",
          "\u201CApplication\u201D means the \u201CInstaPark\u201D mobile app, including any updates InstaPark releases over time.",
          "\u201CServices\u201D means the valet and event-parking management services delivered through the Application/Website, including driver coordination, QR-based pre-registration, and related tools.",
          "\u201CForce Majeure\u201D includes, without limitation, strikes, lockouts, labour disputes, civil unrest, riots, government or regulatory action, extreme weather, or any other cause beyond the reasonable control of the party affected.",
        ]}
      />

      <H2>2. Eligibility</H2>
      <P>
        Our Services are open only to individuals and entities legally able to enter into a
        contract. You must be at least 18 to register an account. If you don't meet that bar,
        please don't attempt to register. We rely on the accuracy of what you tell us and take no
        responsibility if it turns out to be wrong.
      </P>

      <H2>3. Registration and Account</H2>
      <Ul
        items={[
          "You can register on the app by supplying the required details, which must be accurate, valid, true, and complete.",
          "Keeping your account credentials confidential, and taking responsibility for everything that happens under your account, is entirely on you.",
          "We can suspend or close an account immediately if we have reason to think the registration details are false or that the account's security has been compromised.",
          "Each user is limited to one account tied to their registration details, unless their Provider authorizes otherwise.",
          "Having trouble accessing your account? Reach us at [SUPPORT EMAIL].",
        ]}
      />

      <H2>4. Use of Services</H2>
      <Ul
        items={[
          "InstaPark supplies technology tools that let Providers manage valet and event-parking operations — coordinating Drivers, Supervisors, Admins, and Hosts, and letting Guests pre-register vehicles by QR code.",
          "InstaPark itself doesn't provide valet, driving, or parking services — we're a technology go-between. The actual parking/retrieval service happens between the Guest and the relevant Provider/Driver, and InstaPark isn't a party to that arrangement. InstaPark takes no liability with respect to Drivers, including any claim of employment or vicarious liability stemming from the Services.",
          "When a park or retrieval request comes in, the app uses the Driver's device location to coordinate that request among the relevant Supervisors and Hosts.",
        ]}
      />

      <H2>5. Representations & Warranties</H2>
      <Ul
        items={[
          "You confirm that whatever information you give InstaPark is accurate and complete, and that InstaPark may verify it at any point.",
          "Providers confirm they're legally entitled to run their valet/parking business and to engage the Drivers, Supervisors, and Admins registered under their account.",
          "If an accident or dispute arises during a park/retrieval job, the Provider and Driver involved are responsible for meeting their legal obligations; InstaPark bears no responsibility.",
        ]}
      />

      <H2>6. Charges & Payment</H2>
      <P>
        InstaPark doesn't currently charge fees or process payments, subscriptions, or payouts
        through the app or website, and no payment gateway is currently built into the platform.
        If InstaPark launches paid features, subscriptions, or in-app payments later on, this
        section will be updated to explain the relevant charges and payment terms before that
        feature goes live.
      </P>

      <H2>7. Customer Relationship Management</H2>
      <Ul
        items={[
          "You can send us issues, suggestions, questions, or feedback through the app, the website, or by email.",
          "Please raise any issue within 7 days of it happening. We aim to respond within 7 working days and resolve issues according to how serious they are.",
        ]}
      />

      <H2>8. Liability</H2>
      <Ul
        items={[
          "Anything provided on or through the InstaPark website/app is for general information only and isn't advice.",
          "InstaPark isn't liable for damage arising from using — or being unable to use — the website/app, including damage caused by malware, viruses, network problems, or information that's incomplete or incorrect.",
          "How well parking/retrieval services are actually delivered is down to the Provider and Driver who perform them. InstaPark takes no liability for the acts, conduct, or negligence of any Provider, Driver, Supervisor, Admin, or Host.",
        ]}
      />

      <H2>9. Intellectual Property Rights</H2>
      <P>
        InstaPark solely owns all rights to the website/app and its content. Every element of
        title, ownership, and intellectual property in the app and its content stays with
        InstaPark. Users may access the app only for their own personal use, or for authorized
        business use.
      </P>

      <H2>10. Links to Third-Party Sites</H2>
      <P>
        InstaPark may link to third-party sites. We don't control what those sites contain or how
        they operate, and we're not responsible or liable for them.
      </P>

      <H2>11. Violation of Terms & Termination</H2>
      <Ul
        items={[
          "InstaPark can deny, suspend, or terminate a user's access without advance notice if that user is found to be violating these Terms or the law.",
          "Once terminated, your account is disabled, and you can't open another one without InstaPark's written consent.",
        ]}
      />

      <H2>12. Indemnification</H2>
      <P>
        By using InstaPark, you agree to defend, indemnify, and hold harmless InstaPark, its
        affiliates, officers, directors, employees, and agents against any claims, costs,
        damages, or liabilities that arise from your breach of these Terms or the law, or from
        your violation of anyone else's rights.
      </P>

      <H2>13. Force Majeure</H2>
      <P>
        InstaPark isn't liable for failing to meet its obligations under these Terms where that
        failure stems from a Force Majeure Event, for as long as that event lasts.
      </P>

      <H2>14. Miscellaneous</H2>
      <P>
        Content on the website/app is for general information only, and relying on it is at your
        own risk. InstaPark isn't responsible for the website/app being unavailable due to
        technical issues beyond our control.
      </P>

      <H2>15. Jurisdiction</H2>
      <P>
        Any matter arising from the use of InstaPark or these Terms of Use falls under the sole
        and exclusive jurisdiction of the courts of Ahmedabad, India.
      </P>
    </LegalPage>
  );
}
