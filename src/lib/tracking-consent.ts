export const CONSENT_KEY = "instapark_tracking_consent";
export const NOTICE_VERSION = "2026-10-21";
export const CONSENT_NOTICE = "Google Analytics measures page visits and device/browser usage. AdRoll uses page visits, online identifiers and cookies for advertising measurement, personalization and optimization. No names, email addresses or phone numbers are shared by these tags. Essential storage keeps your privacy choices. You may refuse either purpose and change your choice in Cookie settings.";
const regulated = new Set("AT BE BG HR CY CZ DK EE FI FR DE GR HU IS IE IT LV LI LT LU MT NL NO PL PT RO SK SI ES SE GB CH".split(" "));
export type Choice = { analytics: boolean; advertising: boolean };
export type ConsentRecord = Choice & { visitor: string; region: string; time: string; noticeVersion: string; notice: string };
export type ConsentHistory = { visitor: string; records: ConsentRecord[] };
export function requiresConsent(region: string) {
  return !/^[A-Z]{2}$/.test(region) || region === "XX" || region === "T1" || regulated.has(region);
}
export function permissions(region: string, choice: Choice | null, optedOut: boolean): Choice {
  const allowed = !requiresConsent(region);
  return { analytics: choice?.analytics ?? allowed, advertising: !optedOut && (choice?.advertising ?? allowed) };
}
export function readHistory(): ConsentHistory | null {
  try {
    const data = JSON.parse(localStorage.getItem(CONSENT_KEY) ?? "null");
    if (!data || typeof data.visitor !== "string" || !Array.isArray(data.records)) return null;
    if (!data.records.every((r: ConsentRecord) => typeof r.analytics === "boolean" && typeof r.advertising === "boolean" && r.noticeVersion === NOTICE_VERSION)) return null;
    return data;
  } catch { return null; }
}
export function latestChoice(): Choice | null {
  const history = readHistory();
  return history?.records.at(-1) ?? null;
}
let regionLookup: Promise<string> | undefined;
export function getRegion() {
  regionLookup ??= (async () => {
    try {
      const response = await fetch("/cdn-cgi/trace", { signal: AbortSignal.timeout(2000), cache: "no-store" });
      if (!response.ok) return "XX";
      return (await response.text()).match(/^loc=([A-Z0-9]{2})$/m)?.[1] ?? "XX";
    } catch { return "XX"; }
  })();
  return regionLookup;
}
export function saveChoice(choice: Choice, region: string) {
  const old = readHistory();
  const visitor = old?.visitor ?? crypto.randomUUID();
  const record = { ...choice, visitor, region, time: new Date().toISOString(), noticeVersion: NOTICE_VERSION, notice: CONSENT_NOTICE };
  localStorage.setItem(CONSENT_KEY, JSON.stringify({ visitor, records: [...(old?.records ?? []), record] }));
  window.dispatchEvent(new Event("instapark-consent-change"));
}
export function openCookieSettings() { window.dispatchEvent(new Event("instapark-cookie-settings")); }