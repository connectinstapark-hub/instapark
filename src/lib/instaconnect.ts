export type RequestKind = "individual" | "bulk";
export type ConnectRequest = { name: string; organization: string; phone: string; city: string; pack: string; quantity: string };
export const CONNECT_PACKS = ["Single car windshield decal", "Bike / helmet mini decal", "Family & Mobility Pack (car + bike/helmet + luggage/keychain tags)"];
export const EMPTY_REQUEST: ConnectRequest = { name: "", organization: "", phone: "", city: "", pack: CONNECT_PACKS[2] ?? "", quantity: "1" };
export type ConnectErrors = Partial<Record<keyof ConnectRequest, string>>;

export function validateConnectRequest(values: ConnectRequest, kind: RequestKind): ConnectErrors {
  const errors: ConnectErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (kind === "bulk" && !values.organization.trim()) errors.organization = "Please enter your organization or society name.";
  const phone = values.phone.replace(/[\s().-]/g, "");
  if (!/^\+?[1-9]\d{7,14}$/.test(phone)) errors.phone = "Please enter a valid phone number, including country code.";
  if (!values.city.trim()) errors.city = "Please enter your city.";
  if (kind === "individual" && !values.pack.trim()) errors.pack = "Please choose a pack.";
  const quantity = Number(values.quantity);
  if (!Number.isSafeInteger(quantity) || quantity < 1 || !/^\d+$/.test(values.quantity)) errors.quantity = "Please enter a whole number of tags greater than zero.";
  return errors;
}

export function connectRequestEmail(values: ConnectRequest, kind: RequestKind) {
  const subject = kind === "bulk" ? "instaKonnect — B2B bulk inquiry" : "instaKonnect — individual / family pack order request";
  const body = [subject, "", `Name: ${values.name.trim()}`, ...(kind === "bulk" ? [`Organization / society: ${values.organization.trim()}`] : []), `Phone: ${values.phone.trim()}`, `City: ${values.city.trim()}`, ...(kind === "individual" ? [`Pack: ${values.pack}`] : []), `Estimated tag quantity: ${values.quantity}`, "", "Please share pricing, availability and next steps."].join("\n");
  return `mailto:connect.instapark@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const CONNECT_FAQS = [
  { q: "Does the person scanning need to download an app?", a: "No. instaKonnect opens directly in a mobile browser through a standard phone-camera QR scan. No app download or installation is required." },
  { q: "Is my number visible to the caller — or theirs to me?", a: "Never. Calls are routed through privacy-masked numbers, so neither the scanner nor the owner sees the other’s real phone number." },
  { q: "Why does it ask for the last 4 digits of the plate?", a: "This quick anti-spam check confirms the scanner is next to the right vehicle. Enter 1234 for GJ01AB 1234 or 22 BH 1234 AA. For a short number such as 7, enter 7 or 0007." },
  { q: "When will WhatsApp and SMS alerts be available?", a: "Secure anonymous voice calling is live now. WhatsApp and SMS alerts are rolling out soon on the same contact screen." },
];
