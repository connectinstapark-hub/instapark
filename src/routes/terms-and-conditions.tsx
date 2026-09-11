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
      <P>Welcome to InstaPark, and thank you for using our services.</P>
      <P>
        Please read these Terms & Conditions before using our application or
        website.
      </P>
      <P>
        These Terms of Use of the InstaPark website and mobile application are
        made between InstaPark (a company incorporated under [APPLICABLE COMPANY
        LAW], having its registered address at [ADDRESS]) and yourself/the User
        of InstaPark. If you continue to browse the website and/or use the
        mobile application, you are agreeing to comply with and be bound by
        these Terms of Use.
      </P>

      <H2>1. Definitions</H2>
      <Ul
        items={[
          "\"We,\" \"Our,\" \"Us\" shall be interpreted as InstaPark.",
          "\"You,\" \"your,\" \"User\" shall mean any person accessing or using the InstaPark website or application, including in the capacity of Owner/Provider, Admin, Supervisor, Driver, Host, or Guest.",
          "\"Provider\" or \"Owner\" means the valet or parking service operator using InstaPark to manage their operations.",
          "\"Admin\" and \"Supervisor\" mean staff authorized by a Provider to manage drivers and event operations through the platform.",
          "\"Driver\" means an individual engaged by a Provider to carry out park/retrieval services through the application.",
          "\"Host\" means an individual or business (e.g., a hotel or event organizer) authorized to manage guest pre-registration for a specific event.",
          "\"Guest\" means an end user whose vehicle is parked or retrieved through the platform.",
          "\"Application\" shall mean the mobile application \"InstaPark,\" as updated by InstaPark from time to time.",
          "\"Services\" shall mean the valet and event-parking management services provided via the Application/Website, including driver coordination, QR-based pre-registration, and related tools.",
          "\"Force Majeure\" includes but is not limited to strikes, lockouts, labour disturbances, civil commotion, riots, acts of government or regulatory authority, abnormal weather conditions, or any other cause beyond the reasonable control of the affected party.",
        ]}
      />

      <H2>2. Eligibility</H2>
      <P>
        Our services are available only to individuals and entities competent to
        enter into a contract under applicable law. Users must be at least 18
        years of age to register an account. If you are not eligible, you must
        not attempt to register. We rely on the information you provide and are
        not responsible for its accuracy.
      </P>

      <H2>3. Registration and Account</H2>
      <Ul
        items={[
          "You may register on the application by entering the required registration data, which must be accurate, valid, true, and complete.",
          "You are solely responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
          "We reserve the right to suspend or terminate an account with immediate effect if we have reason to believe registration data is false, or that account security has been compromised.",
          "Each user may hold only one account associated with their registration data, unless otherwise authorized by their Provider.",
          "For any account access issues, contact us at [SUPPORT EMAIL].",
        ]}
      />

      <H2>4. Use of Services</H2>
      <Ul
        items={[
          "InstaPark provides technology-based tools for Providers to manage valet and event-parking operations, including coordinating Drivers, Supervisors, Admins, and Hosts, and enabling Guests to pre-register vehicles via QR code.",
          "InstaPark does not itself provide valet, driving, or parking services — it is a technology intermediary. The actual provision of parking/retrieval services is between the Guest and the relevant Provider/Driver, and InstaPark is not a party to that arrangement. InstaPark disclaims liability in respect of Drivers, including any claim of employment or vicarious liability arising from the Services.",
          "When a park or retrieval request is made, the application uses location data from the Driver's device to coordinate the request among relevant Supervisors and Hosts.",
        ]}
      />

      <H2>5. Representations & Warranties</H2>
      <Ul
        items={[
          "You confirm that the information you provide to InstaPark is accurate and complete, and that InstaPark may verify this information at any time.",
          "Providers confirm they have the legal right and authority to operate their valet/parking business and to engage the Drivers, Supervisors, and Admins registered under their account.",
          "In the event of an accident or dispute during a park/retrieval run, the Provider and Driver involved are responsible for complying with applicable laws; InstaPark shall not be held responsible.",
        ]}
      />

      <H2>6. Charges & Payment</H2>
      <P>
        InstaPark does not currently charge fees or process any payments,
        subscriptions, or payouts through the application or website, and no
        payment gateway is integrated into the platform at this time. Should
        InstaPark introduce paid features, subscriptions, or in-app payments in
        the future, this section will be updated to describe the applicable
        charges and payment terms before any such feature goes live.
      </P>

      <H2>7. Customer Relationship Management</H2>
      <Ul
        items={[
          "Issues, suggestions, questions, and feedback can be communicated to us via the app, website, or email.",
          "Reported issues should be raised within 7 days of the issue occurring. We aim to respond within 7 working days and resolve issues based on severity.",
        ]}
      />

      <H2>8. Liability</H2>
      <Ul
        items={[
          "Information provided on or through the InstaPark website/application is for general informational purposes only and does not constitute advice.",
          "InstaPark shall not be liable for damages resulting from the use of, or inability to use, the website/application, including damages caused by malware, viruses, network issues, or incomplete/incorrect information.",
          "The quality of parking/retrieval services delivered is the responsibility of the Provider and Driver who ultimately perform them. InstaPark accepts no liability in connection with the acts, conduct, or negligence of any Provider, Driver, Supervisor, Admin, or Host.",
        ]}
      />

      <H2>9. Intellectual Property Rights</H2>
      <P>
        InstaPark is the sole owner of all rights to the website/application and
        its content. All title, ownership, and intellectual property rights in
        the application and its content remain with InstaPark. Users may access
        the application only for their personal or authorized business use.
      </P>

      <H2>10. Links to Third-Party Sites</H2>
      <P>
        InstaPark may provide links to third-party sites. We have no control
        over such sites' content or practices and are not responsible or liable
        for them.
      </P>

      <H2>11. Violation of Terms & Termination</H2>
      <Ul
        items={[
          "InstaPark reserves the right to deny, suspend, or terminate access to any user found violating these Terms or applicable law, without prior notice.",
          "Upon termination, your account will be disabled, and you may not create another account without written consent from InstaPark.",
        ]}
      />

      <H2>12. Indemnification</H2>
      <P>
        By using InstaPark, you agree to defend, indemnify, and hold InstaPark,
        its affiliates, officers, directors, employees, and agents harmless from
        any claims, costs, damages, or liabilities arising out of your violation
        of these Terms or applicable law, or your violation of the rights of any
        third party.
      </P>

      <H2>13. Force Majeure</H2>
      <P>
        InstaPark shall not be liable for any failure to perform its obligations
        under these Terms where such failure results from a Force Majeure Event,
        for as long as that event continues.
      </P>

      <H2>14. Miscellaneous</H2>
      <P>
        The information contained in the website/application is for general
        informational purposes only, and any reliance on it is at your own risk.
        InstaPark is not responsible for the website/application being
        unavailable due to technical issues beyond our control.
      </P>

      <H2>15. Jurisdiction</H2>
      <P>
        The courts of Ahmedabad, India shall have sole and exclusive
        jurisdiction in respect of any matters arising from the use of InstaPark
        or these Terms of Use.
      </P>
    </LegalPage>
  );
}
