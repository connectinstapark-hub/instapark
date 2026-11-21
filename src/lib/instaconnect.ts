export type RequestKind = "individual" | "bulk";
export type ConnectRequest = { name: string; organization: string; phone: string; quantity: string };
export type ConnectErrors = Partial<Record<keyof ConnectRequest, string>>;

export function validateConnectRequest(values: ConnectRequest, kind: RequestKind): ConnectErrors {
  const errors: ConnectErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (kind === "bulk" && !values.organization.trim()) errors.organization = "Please enter your organization or society name.";
  const phone = values.phone.replace(/[\s().-]/g, "");
  if (!/^\+?[1-9]\d{7,14}$/.test(phone)) errors.phone = "Please enter a valid phone number, including country code.";
  const quantity = Number(values.quantity);
  if (!Number.isSafeInteger(quantity) || quantity < 1 || !/^\d+$/.test(values.quantity)) errors.quantity = "Please enter a whole number of tags greater than zero.";
  return errors;
}

export function connectRequestEmail(values: ConnectRequest, kind: RequestKind) {
  const subject = kind === "bulk" ? "instaConnect — B2B bulk inquiry" : "instaConnect — individual tag order request";
  const body = [subject, "", `Name: ${values.name.trim()}`, ...(kind === "bulk" ? [`Organization / society: ${values.organization.trim()}`] : []), `Phone: ${values.phone.trim()}`, `Estimated tag quantity: ${values.quantity}`, "", "Please share pricing, availability and next steps."].join("\n");
  return `mailto:connect.instapark@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const CONNECT_FAQS = [
  { q: "Does the person scanning my car need to download an app?", a: "No. instaConnect opens directly in a mobile browser through a standard camera QR scan. No app download or installation is required for the scanner." },
  { q: "Is my personal phone number ever visible to the caller?", a: "Never. Calls are routed through privacy-masked numbers. Neither party sees the other’s real phone number." },
  { q: "Can I temporarily pause notifications or update my linked number?", a: "Yes. You can manage your tag status, pause notifications and update your linked number anytime." },
  { q: "Does it work for both cars and two-wheelers?", a: "Yes. Weatherproof decals are designed for car windshields and bike visors or mudguards." },
  { q: "Can we order co-branded tags for our society or venue?", a: "Yes. Request B2B bulk pricing for custom-branded tags for residents, employees or guests. The InstaPark team will discuss quantities, branding and pricing with you." },
];