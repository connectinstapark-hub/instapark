import { createFileRoute } from "@tanstack/react-router";
import { H2, LegalPage, P, Ul } from "@/components/instapark/legal-layout";

const title = "Privacy Policy — InstaPark";
const description =
  "How InstaPark gathers, uses, and shares information through its website, mobile application, and in-person services.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://park-instantly-lovely.lovable.app/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "https://park-instantly-lovely.lovable.app/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="September 2026">
      <P>
        This Privacy Policy explains how InstaPark gathers, uses, and shares information through
        its website, its mobile application, or in person. Please go through this Policy in full,
        together with the Terms & Conditions posted on our sites, before you use the InstaPark app
        or website or hand over any information through either channel.
      </P>
      <P>
        Protecting your privacy matters to us. This Policy may be revised periodically, and any
        update will be posted here. When changes happen, we'll let users know through our website
        and/or by email. If you don't agree with a change, you're free to stop using the service
        and delete your account at any time.
      </P>

      <H2>How We Use the Information We Collect</H2>
      <P>
        We ask for this information so we can understand what you need and deliver a better
        experience — specifically, to run and improve InstaPark's valet and event-parking
        operations, confirm the identity of drivers and staff, coordinate parking and retrieval
        requests among drivers, supervisors, admins, and hosts, and keep you informed about the
        service. This may include service-related emails, text messages, or push notifications, as
        well as direct contact by phone or email.
      </P>

      <H2>Information You Give Us</H2>
      <P>
        We collect some details from users purely to identify them. When you use our website or
        app, the following gets recorded:
      </P>
      <Ul
        items={["Name", "Phone number", "Email address",
          "Role (Owner/Provider, Admin, Supervisor, Driver, Host, or Guest)"]}
      />
      <P>
        Submitting this information counts as your voluntary agreement to the terms set out in
        this document.
      </P>
      <P>
        Drivers, supervisors, and admin staff are asked for the following, in addition, so we can
        confirm their identity:
      </P>
      <Ul
        items={[
          "Official identity documents — PAN and Aadhaar (or an equivalent government-issued ID) and a driving licence — used to confirm identity and eligibility to work as a driver on the platform.",
          "Bank account information — collected only where payouts to drivers or staff run through the platform.",
          "Photos of the licence and vehicle — captured through the app's camera for verification.",
        ]}
      />

      <H2>The following gets collected while the service is in active use</H2>
      <Ul
        items={[
          "Location — InstaPark relies on GPS to follow a driver's position during live park/retrieval jobs, so that handoffs between drivers, supervisors, and hosts can be coordinated and a record of vehicle movement kept for safety and accountability. Location is also tracked in the background — that is, while the app isn't actively open — but only for the window between an event's start time and its close: tracking begins once the event becomes active (not at the point the driver is assigned to it) and continues, with that event kept selected, until the event is closed. This is never made public. It may, however, be passed to the hotel, event host, or valet provider running the event, and to law enforcement or insurers if an accident, damage, or theft claim arises.",
          "QR / pre-registration details — vehicle and guest information submitted ahead of time, used to match vehicles to the right event, host, and driver.",
        ]}
      />

      <H2>Other Information</H2>
      <P>
        We also gather non-personal information that isn't tied to any one individual — for
        instance, IP addresses and general usage patterns. We're entitled to collect, use,
        transfer, and disclose this non-personal information for any purpose. If personal and
        non-personal information ever get combined, the combined set is treated as personal
        information.
      </P>

      <H2>Log & Usage Data</H2>
      <P>
        Log and usage data covers the diagnostic, performance, and usage information our servers
        pick up automatically whenever you use InstaPark, stored in log files. It can include
        timestamps of activity, which screens or pages were viewed, actions taken, device event
        details, and error or crash reports.
      </P>

      <H2>Security</H2>
      <P>
        Keeping your information safe is something we take seriously. We've put safeguards in
        place — including encryption while data is in transit — but no method of sending data over
        the internet or storing it electronically is completely risk-free, so we can't promise
        absolute security.
      </P>

      <H2>Bank Account & Financial Details</H2>
      <P>
        InstaPark doesn't currently handle payments or payouts inside the app, and there's no
        payment gateway integrated. Where drivers' bank details are collected (say, for identity
        checks), you're confirming that those details are correct, accurate, and genuinely your
        own. We won't pass this information to any third party except where the law, a regulation,
        or a court requires it. If InstaPark adds in-app payments or payouts down the line, this
        Policy will be updated to identify the payment processor involved and explain how that
        data is handled.
      </P>

      <H2>Cookies</H2>
      <P>
        Cookies are small files — effectively anonymous identifiers — that a website sends to your
        browser and that get stored on your device. InstaPark's web platform may use cookies and
        comparable tracking tools to study usage patterns, gauge effectiveness, and support trust
        and safety efforts. You can adjust your browser or device settings to block them, though
        doing so may limit some functionality.
      </P>

      <H2>Data Safety</H2>
      <P>
        Before you install the app, you can review its data safety section on Google Play, or its
        App Privacy details on the Apple App Store, to see how InstaPark handles data.
      </P>

      <H2>Data Retention</H2>
      <P>
        We hold on to personal information for as long as your account stays active, plus 90 days
        after it's deleted, or longer if legal, tax, or regulatory obligations require it. Items
        such as PAN, Aadhaar, and bank details are kept only as long as needed to meet legal
        requirements or settle disputes, and are then securely erased.
      </P>

      <H2>Account & Data Deletion</H2>
      <P>
        You can ask to have your account and the personal data tied to it deleted at any time —
        email us at [SUPPORT EMAIL]. Our team reviews each request; once it's approved, your
        account and its data are permanently removed from our systems within 7 business days,
        except where the law requires us to retain something (see Data Retention above). You can
        use this process whether or not your account is currently active.
      </P>

      <H2>Competency to Contract</H2>
      <P>
        This Privacy Policy doesn't apply to minors or to anyone otherwise unable to enter into a
        contract, and we don't knowingly gather personally identifiable information from such
        users.
      </P>

      <H2>Changes to This Privacy Policy</H2>
      <P>
        InstaPark may update this Policy from time to time, and any revision takes effect as soon
        as it's posted. We suggest checking back on this page periodically.
      </P>

      <H2>Grievance Redressal</H2>
      <P>
        Questions about this Privacy Policy or how we handle data, or a grievance you'd like to
        raise, can be sent to [GRIEVANCE EMAIL].
      </P>

      <H2>Information Collected Automatically</H2>
      <P className="mb-4 text-[15px] font-semibold text-foreground">
        In short: certain details, such as your IP address and device characteristics, are picked
        up automatically once you install and use InstaPark.
      </P>
      <Ul
        items={[
          "Registration and usage data — log information such as IP address, device details, and in-app activity.",
          "Device data — device type, hardware model, operating system, and network/carrier information.",
          "Location data — as described above, used to coordinate park/retrieval jobs. You can turn off location access in your device settings, though some features (like live tracking) may then be limited.",
        ]}
      />

      <H2>How We Keep Your Information Secure</H2>
      <P className="mb-4 text-[15px] font-semibold text-foreground">
        In short: we apply technical and organizational safeguards to protect your personal
        information. Even so, no transmission or storage method can be guaranteed fully secure,
        and using InstaPark is at your own risk.
      </P>
    </LegalPage>
  );
}
