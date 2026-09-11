import { createFileRoute } from "@tanstack/react-router";
import { H2, LegalPage, P, Ul } from "@/components/instapark/legal-layout";

const title = "Privacy Policy — InstaPark";
const description =
  "How InstaPark collects, uses, and protects information gathered through its website, mobile application, and in-person services.";

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
        This Privacy Policy is designed to tell users about the practices
        regarding collection, use, and disclosure of information that may be
        collected by InstaPark through its website or mobile application, or in
        person. Please read this entire Privacy Policy and the Terms &
        Conditions, available on our sites, before using or submitting any
        information through the InstaPark app, website, or any other mode.
      </P>
      <P>
        We are committed to ensuring that your privacy is protected. We may
        change this policy from time to time by updating this page. Users will
        be notified of such changes through our website and/or by e-mail. In the
        event of any disagreement, the user is free to suspend or terminate the
        service by deleting their account.
      </P>

      <H2>What We Do With the Information We Gather</H2>
      <P>
        We require this information to understand your needs and provide you
        with a better service, and in particular for the following reasons: to
        operate and improve InstaPark's valet and event-parking services, to
        verify driver and staff identity, to coordinate parking/retrieval
        requests between drivers, supervisors, admins, and hosts, and to
        communicate service updates. We may send you service-related emails,
        SMS, or push notifications. We may contact you by e-mail or phone.
      </P>

      <H2>Information You Provide to Us</H2>
      <P>
        We collect certain information from our users for the purpose of user
        identification. The following information is collected when a user uses
        our website or mobile application:
      </P>
      <Ul
        items={["Name", "Contact number", "E-mail address",
          "Role (Owner/Provider, Admin, Supervisor, Driver, Host, or Guest)"]}
      />
      <P>
        By providing the above information, the user voluntarily agrees to the
        terms and conditions of this document.
      </P>

      <H2>
        The following additional information is collected from drivers,
        supervisors, and admin staff for identity verification and payout
        purposes
      </H2>
      <Ul
        items={[
          "Government ID documents: PAN and Aadhar (or equivalent government-issued ID), and driving license, collected to verify identity and eligibility to operate as a driver on the platform.",
          "Bank account details: collected where payouts to drivers or staff are processed through the platform.",
          "License and vehicle photos: captured via the app's camera feature for verification purposes.",
        ]}
      />

      <H2>The following information is collected during active use of the service</H2>
      <Ul
        items={[
          "Location: InstaPark uses GPS to track the location of drivers during active park/retrieval runs, in order to coordinate handoffs between drivers, supervisors, and hosts, and to maintain a record of vehicle movement for safety and accountability. This information is not shared publicly. It may be shared with the relevant hotel, event host, or valet provider operating the event, and with law enforcement or insurers in the event of an accident, damage, or theft claim.",
          "QR / pre-registration data: guest and vehicle details submitted at pre-registration, used to identify vehicles and match them to the correct event, host, and driver.",
        ]}
      />

      <H2>Other Information</H2>
      <P>
        We collect non-personal information which has no direct relation to any
        specific individual, including but not limited to IP address and usage
        details. We have the right to collect, use, transfer, and disclose
        non-personal information for any purpose. Where personal and
        non-personal information is combined, both will be treated as personal
        information.
      </P>

      <H2>Log & Usage Data</H2>
      <P>
        Log and usage data is service-related, diagnostic, usage, and
        performance information our servers automatically collect when you
        access or use InstaPark, recorded in log files. This may include
        date/time stamps of your activity, pages and screens viewed, actions
        taken, device event information, and error reports ("crash dumps").
      </P>

      <H2>Security</H2>
      <P>
        We are committed to ensuring that your information is protected. We have
        put procedures in place to safeguard and secure the information we
        collect, including encryption in transit. However, no method of
        transmission over the internet or electronic storage is 100% secure, and
        we cannot guarantee absolute security.
      </P>

      <H2>Bank Account & Financial Details</H2>
      <P>
        InstaPark does not currently process payments or payouts through the
        application, and no payment gateway is integrated. Where bank account
        details are collected from drivers (e.g., for identity/verification
        purposes), you agree, understand, and confirm that such details are
        correct, accurate, and lawfully your own. This information is not shared
        with any third party except where required by law, regulation, or court
        order. Should InstaPark introduce in-app payments or payouts in the
        future, this Privacy Policy will be updated to name the relevant payment
        processor and describe how that data is handled.
      </P>

      <H2>Cookies</H2>
      <P>
        Cookies are small files commonly used as anonymous unique identifiers,
        sent to your browser from websites you visit and stored on your device.
        InstaPark's web platform may use cookies and similar tracking technology
        to analyze usage, measure effectiveness, and support trust and safety.
        You can modify your browser/device settings to block cookies, though
        this may affect functionality.
      </P>

      <H2>Data Safety</H2>
      <P>
        Before installing this app, you can check the app's data safety section
        (Google Play) or App Privacy details (Apple App Store) to see how
        InstaPark handles your data.
      </P>

      <H2>Data Retention</H2>
      <P>
        We retain personal information for as long as your account remains
        active, and for 90 days after account deletion, or longer where required
        to comply with legal, tax, or regulatory obligations. Data such as PAN,
        Aadhar, and bank details is retained only for as long as necessary to
        comply with applicable law or to resolve disputes, after which it is
        securely deleted.
      </P>

      <H2>Account & Data Deletion</H2>
      <P>
        You may request deletion of your account and associated personal data at
        any time by contacting us at [SUPPORT EMAIL] or submitting a deletion
        request from within the app. Deletion requests are reviewed by our team;
        once approved, your account and associated data are permanently deleted
        from our systems within 7 business days, except where retention is
        required by law (see Data Retention above). This process is available
        whether or not you currently have an active account.
      </P>

      <H2>Competency to Contract</H2>
      <P>
        This Privacy Policy is not applicable to users who are minors or
        otherwise incompetent to contract. We do not knowingly collect
        personally identifiable information from such users.
      </P>

      <H2>Changes to This Privacy Policy</H2>
      <P>
        InstaPark reserves the right to amend this policy from time to time.
        Changes are effective immediately upon posting of the revised Privacy
        Policy. We encourage you to periodically review this page.
      </P>

      <H2>Grievance Redressal</H2>
      <P>
        If you have any questions regarding this Privacy Policy or our data
        practices, or wish to raise a grievance, you may reach out to us at
        [GRIEVANCE EMAIL].
      </P>

      <H2>Information Collected Automatically</H2>
      <P className="mb-4 text-[15px] font-semibold text-foreground">
        In short: Some information, such as your IP address and device
        characteristics, is collected automatically when you install and use
        InstaPark.
      </P>
      <Ul
        items={[
          "Registration and usage data: log data including IP address, device information, and activity within the app.",
          "Device data: device type, hardware model, operating system, and carrier/network information.",
          "Location data: as described above, used to coordinate park/retrieval runs. You may disable location access in your device settings, though this may limit certain features (e.g., live tracking).",
        ]}
      />

      <H2>How We Keep Your Information Secure</H2>
      <P className="mb-4 text-[15px] font-semibold text-foreground">
        In short: We use technical and organizational security measures designed
        to protect your personal information. Despite these efforts, no method
        of transmission or storage can be guaranteed 100% secure, and use of
        InstaPark is at your own risk.
      </P>
    </LegalPage>
  );
}
