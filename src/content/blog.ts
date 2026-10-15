import type { Section } from "@/components/instapark/content-page";

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  published: string;
  updated: string;
  author: string;
  sections: Section[];
};

const AUTHOR = "InstaPark Team, Pinsoftek";

export const POSTS: Post[] = [
  {
    slug: "what-is-valet-management-software",
    title: "What is valet management software?",
    metaTitle: "What Is Valet Management Software? A Plain Guide | InstaPark",
    description:
      "Valet management software digitises check-in, key custody, parking and retrieval. Learn what it does, who needs it and how it compares to paper tickets.",
    published: "2026-10-15",
    updated: "2026-10-15",
    author: AUTHOR,
    sections: [
      { h2: "The short answer", p: ["Valet management software is an application that records every step of a valet service — vehicle check-in, key custody, parking location, retrieval request and handover — and shows it live to staff and managers. It replaces paper tickets, key boards and radio calls."] },
      { h2: "What it typically includes", list: ["Digital tickets or QR guest passes", "Key tracking, often with QR key tags", "Vehicle condition photos", "Parking spot or zone tagging", "Driver task queue and live location", "Reports and audit logs"] },
      { h2: "Who needs it", p: ["Any venue that parks guests' cars: hotels, restaurants, malls, hospitals, wedding and event venues, corporate campuses, and the valet agencies that serve them."] },
      { h2: "Paper vs software", table: { head: ["", "Paper", "Software"], rows: [["Key record", "None", "Per-handover scan"], ["Condition proof", "None", "Timestamped photos"], ["Guest request", "In person", "From phone"], ["Reports", "Manual", "Automatic"]] } },
    ],
  },
  {
    slug: "reduce-valet-key-loss-with-qr-tagging",
    title: "How to reduce valet key loss with QR tagging",
    metaTitle: "How to Reduce Valet Key Loss with QR Key Tags | InstaPark",
    description:
      "A practical guide to cutting lost and misplaced valet keys with QR key tags: pair keys at check-in, scan every handover and audit open keys each shift.",
    published: "2026-10-15",
    updated: "2026-10-15",
    author: AUTHOR,
    sections: [
      { h2: "Why keys go missing", list: ["No record of who last held the key", "Shift changes without a handover count", "Keys hung on the wrong hook", "Rush periods with many cars at once"] },
      { h2: "A five-step QR tagging process", steps: ["Attach a QR key tag to every key at check-in.", "Scan the tag to link it to the vehicle and guest pass.", "Require a scan at every handover between staff.", "Scan again when the key is stored and when it leaves storage.", "At shift end, review all open keys on the dashboard."] },
      { h2: "What to measure", p: ["Track open keys per shift, handovers without scans, and time from request to handover. [PLACEHOLDER: add real before/after figures from a customer.]"] },
    ],
  },
  {
    slug: "valet-parking-sop-checklist-for-hotels",
    title: "Valet parking SOP checklist for hotels",
    metaTitle: "Valet Parking SOP Checklist for Hotels (Free) | InstaPark",
    description:
      "A step-by-step valet parking SOP checklist for hotels covering arrival, vehicle inspection, key custody, parking, retrieval, incidents and end-of-shift reporting.",
    published: "2026-10-15",
    updated: "2026-10-15",
    author: AUTHOR,
    sections: [
      { h2: "Arrival", steps: ["Greet the guest and confirm stay or visit type.", "Record the vehicle number and guest name.", "Walk around the car and photograph all sides.", "Note existing damage with the guest present.", "Issue the guest pass and tag the key."] },
      { h2: "Parking", steps: ["Drive directly to the assigned zone.", "Record the spot or GPS location.", "Lock the car and store the key in the designated area.", "Scan the key into storage."] },
      { h2: "Retrieval", steps: ["Receive the request from the guest pass or front desk.", "Claim the task and collect the key with a scan.", "Bring the car to the porch and confirm the guest's pass.", "Hand over the key and close the record."] },
      { h2: "Incidents and end of shift", list: ["Log any incident with photos immediately", "Escalate damage claims to the duty manager", "Reconcile open keys before handover to the next shift", "Review the shift report"] },
    ],
  },
];
