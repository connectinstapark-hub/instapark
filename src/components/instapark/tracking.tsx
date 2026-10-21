import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { getTrackingConfig } from "@/lib/tracking-config.functions";
import { CONSENT_KEY, CONSENT_NOTICE, getRegion, latestChoice, permissions, requiresConsent, saveChoice, type Choice } from "@/lib/tracking-consent";

type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  adroll?: { track: (name: string) => void };
  __adroll_loaded?: boolean;
  adroll_adv_id?: string;
  adroll_pix_id?: string;
  adroll_version?: string;
  adroll_tag_source?: string;
  adroll_fpconsent?: boolean;
  __adroll_consent?: boolean;
};
let gaInstalled = false;
let adInstalled = false;
let gaLastPage = "";
let adLastPage = "";

function optOut() {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true || navigator.doNotTrack === "1";
}
function syncTracking(region: string, measurementId: string | null, path: string) {
  const w = window as TrackingWindow;
  const permission = permissions(region, latestChoice(), optOut());
  // Terminate provider runtimes immediately instead of sending denied-mode pings.
  if ((!permission.analytics && gaInstalled) || (!permission.advertising && adInstalled)) {
    w.__adroll_consent = false;
    location.reload();
    return;
  }
  // This marketing site has no query-driven workflow; don't share URL identifiers.
  if (location.search) history.replaceState(history.state, "", `${path}${location.hash}`);
  w.gtag?.("consent", "update", { analytics_storage: permission.analytics ? "granted" : "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  if (permission.analytics && measurementId) {
    const page = `${location.origin}${path}`;
    if (!gaInstalled) {
      w.dataLayer ??= [];
      w.gtag = function () { w.dataLayer?.push(arguments); };
      w.gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
      w.gtag("set", "developer_id.dZjgwMW", true);
      w.gtag("js", new Date());
      w.gtag("config", measurementId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, page_location: page, page_referrer: "" });
      const script = document.createElement("script");
      script.id = "instapark-google-tag";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      document.head.appendChild(script);
      gaInstalled = true;
    }
    if (gaLastPage !== page) {
      w.gtag?.("event", "page_view", { page_location: page, page_path: path, page_referrer: "", page_title: document.title });
      gaLastPage = page;
    }
  }
  if (permission.advertising) {
    if (!adInstalled) {
      w.adroll_adv_id = "QGVVEYYRPNFI3F2O6W43GU";
      w.adroll_pix_id = "P3S7A4XEAZHH7BSZH3XQRZ";
      w.adroll_version = "2.0";
      w.adroll_tag_source = "manual";
      w.adroll_fpconsent = true;
      w.__adroll_consent = true;
      w.__adroll_loaded = true;
      // Preserve the provider's documented queue before its asynchronous runtime loads.
      const queue: unknown[][] & { f?: string[]; track?: (name: string) => void } = [];
      queue.f = ["setProperties", "identify", "track", "identify_email", "get_cookie"];
      for (const name of queue.f) {
        Object.assign(queue, { [name]: function () { queue.push([name, arguments]); } });
      }
      w.adroll = queue as typeof queue & { track: (name: string) => void };
      w.adroll.track("pageView");
      const script = document.createElement("script");
      script.id = "instapark-adroll-tag";
      script.async = true;
      script.src = "https://s.adroll.com/j/QGVVEYYRPNFI3F2O6W43GU/roundtrip.js";
      // The queued pageView reports this visit once.
      adLastPage = path;
      document.head.appendChild(script);
      adInstalled = true;
    } else if (adLastPage !== path && adLastPage) {
      w.adroll?.track("pageView");
      adLastPage = path;
    }
  }
}

export function SiteTracking() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [region, setRegion] = useState<string | null>(null);
  const [measurementId, setMeasurementId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState<Choice>({ analytics: false, advertising: false });
  const [storageError, setStorageError] = useState(false);
  const pathRef = useRef(path);
  pathRef.current = path;

  useEffect(() => {
    let active = true;
    void getRegion().then((country) => {
      if (!active) return;
      setRegion(country);
      const saved = latestChoice();
      setChoice(saved ?? { analytics: false, advertising: false });
      setOpen(requiresConsent(country) && !saved);
    });
    void getTrackingConfig().then((config) => { if (active) setMeasurementId(config.measurementId); }).catch(() => {});
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!region) return;
    const sync = () => syncTracking(region, measurementId, pathRef.current);
    const storage = (event: StorageEvent) => { if (event.key === CONSENT_KEY || event.key === null) { setChoice(latestChoice() ?? { analytics: false, advertising: false }); sync(); } };
    const settings = () => { setChoice(latestChoice() ?? permissions(region, null, optOut())); setOpen(true); };
    sync();
    window.addEventListener("instapark-consent-change", sync);
    window.addEventListener("storage", storage);
    window.addEventListener("instapark-cookie-settings", settings);
    return () => {
      window.removeEventListener("instapark-consent-change", sync);
      window.removeEventListener("storage", storage);
      window.removeEventListener("instapark-cookie-settings", settings);
    };
  }, [region, measurementId, path]);

  function save(value: Choice) {
    if (!region) return;
    try { saveChoice(value, region); setChoice(value); setOpen(false); setStorageError(false); }
    catch { setStorageError(true); }
  }
  if (!open) return null;
  return (
    <section aria-label="Cookie preferences" className="fixed inset-x-0 bottom-0 z-[10000] border-t border-gold bg-background px-5 py-5 text-foreground shadow-lg">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-xl font-bold">Your privacy choices</h2>
        <p className="mt-2 text-sm leading-relaxed">{CONSENT_NOTICE} <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a></p>
        <div className="my-4 flex flex-wrap gap-6">
          <label className="flex items-center gap-3 text-sm" htmlFor="cookie-analytics">Analytics <Switch id="cookie-analytics" checked={choice.analytics} onCheckedChange={(analytics) => setChoice({ ...choice, analytics })} /></label>
          <label className="flex items-center gap-3 text-sm" htmlFor="cookie-advertising">Advertising <Switch id="cookie-advertising" checked={choice.advertising} onCheckedChange={(advertising) => setChoice({ ...choice, advertising })} /></label>
        </div>
        {storageError && <p role="alert" className="mb-3 text-sm text-destructive">Your browser could not save this choice. Tracking remains blocked where consent is required.</p>}
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => save({ analytics: false, advertising: false })}>Reject all</Button>
          <Button variant="outline" onClick={() => save({ analytics: true, advertising: true })}>Accept all</Button>
          <Button onClick={() => save(choice)}>Save choices</Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>Close</Button>
        </div>
      </div>
    </section>
  );
}