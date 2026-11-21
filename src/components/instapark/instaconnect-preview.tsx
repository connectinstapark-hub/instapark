import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Car, Check, PhoneCall, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CONNECT_STEPS = [
  { title: "Scan the QR code", text: "Scan the instaConnect tag with your phone’s camera. Contact Vehicle Owner opens instantly in your browser. No app needed." },
  { title: "Select the reason", text: "Wrong parking, blocking another car, lights left on or vehicle damage? Give the owner context before they answer." },
  { title: "Verify plate & enter number", text: "Enter the vehicle’s last 4 digits and your mobile number. The plate check helps prevent accidental scans and spam." },
  { title: "Connect privately", text: "Secure anonymous calling is live. Neither phone number is shared. WhatsApp and SMS alerts are coming soon." },
];
const reasons = ["Wrong parking", "Blocking another car", "Lights are on", "Damage to the vehicle", "Other"];

export function InstaConnectPreview() {
  const [step, setStep] = useState(0);
  const [reason, setReason] = useState("Wrong parking");
  const [plate, setPlate] = useState("");
  const [phone, setPhone] = useState("");
  const pausedRef = useRef(false);
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      if (!pausedRef.current && !document.hidden) setStep((s) => (s + 1) % CONNECT_STEPS.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);
  const pauseAutoPlay = () => { pausedRef.current = true; };
  return <div className="mx-auto w-full max-w-[360px] text-foreground" onPointerDown={pauseAutoPlay} onFocusCapture={pauseAutoPlay}>
    <div className="connect-phone overflow-hidden rounded-[2rem] border-[6px] border-brand-deep bg-cream">
      <div className="flex h-9 items-center justify-between bg-brand-deep px-5 text-[10px] font-semibold text-brand-foreground"><span>9:41</span><span className="mx-2 truncate">instaConnect</span><ShieldCheck className="size-3" /></div>
      <div className="h-[500px] overflow-y-auto px-4 pb-5 pt-5">
        <div className="mx-auto flex size-11 items-center justify-center rounded-lg bg-brand text-brand-foreground"><Car className="size-6" /></div>
        <h3 className="mt-3 text-center text-xl font-bold">Contact Vehicle Owner</h3>
        <p className="mt-2 text-center text-xs leading-relaxed text-muted-foreground">Is this vehicle blocking yours? Need to reach the owner?</p>
        {step === 0 ? <div className="mt-5 text-center"><img src="/instaconnect-tag.png" alt="instaConnect purple and gold vehicle QR tag" width={724} height={1024} className="mx-auto h-72 w-auto rounded-lg" /><p className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-primary"><Check className="size-4" />Phone camera → Browser. Zero downloads.</p></div> : null}
        {step === 1 ? <fieldset className="mt-6"><legend className="mb-3 text-sm font-semibold">Why are you contacting the owner?</legend><div className="space-y-2">{reasons.map((value) => <label key={value} className={`flex min-h-11 cursor-pointer items-center justify-between gap-3 rounded-lg border px-3 py-2 text-sm ${reason === value ? "border-primary bg-primary/10 text-foreground" : "border-border bg-card text-muted-foreground"}`}><span>{value}</span><input type="radio" name="contact-reason" value={value} checked={reason === value} onChange={() => setReason(value)} className="size-4 accent-primary" /></label>)}</div></fieldset> : null}
        {step === 2 ? <div className="mt-6 space-y-5"><div><label htmlFor="preview-plate" className="text-sm font-semibold">Last 4 digits of the car number</label><input id="preview-plate" value={plate} onChange={(e) => setPlate(e.target.value.replace(/\D/g, "").slice(0, 4))} inputMode="numeric" maxLength={4} placeholder="1234" className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" /><div className="mt-2 space-y-1 text-xs leading-relaxed text-muted-foreground"><p>GJ01AB 1234 → 1234</p><p>BH series: 22 BH 1234 AA → 1234</p><p>Short number such as 7? Enter 7 or 0007.</p></div></div><div><label htmlFor="preview-phone" className="text-sm font-semibold">Your mobile number</label><input id="preview-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your mobile number" className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" /><p className="mt-2 text-xs leading-relaxed text-muted-foreground">Used only to connect your call. The owner will not see it.</p></div></div> : null}
        {step === 3 ? <div className="mt-6 space-y-3"><p className="mb-4 text-xs text-muted-foreground">Reason: <strong className="text-foreground">{reason}</strong></p><div className="rounded-lg bg-brand p-4 text-brand-foreground"><div className="flex items-center gap-3"><PhoneCall className="size-6" /><div><p className="font-semibold">Call Owner</p><p className="mt-1 text-xs text-brand-foreground/80">Secure anonymous call</p></div><span className="ml-auto text-[10px] font-semibold text-gold">LIVE</span></div></div>{["WhatsApp", "SMS"].map((channel) => <div key={channel} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-muted-foreground"><MessageCircle className="size-5 shrink-0" /><span className="text-sm font-semibold">{channel}</span><span className="ml-auto rounded bg-muted px-2 py-1 text-[9px] font-semibold">Coming Soon</span></div>)}<p className="pt-2 text-center text-xs leading-relaxed text-muted-foreground">Calls start only from an activated vehicle tag.</p></div> : null}
      </div>
      <div className="flex h-14 items-center justify-between gap-2 border-t border-border bg-card px-4"><Button variant="ghost" size="icon" aria-label="Previous preview step" disabled={step === 0} onClick={() => setStep((s) => s - 1)}><ArrowLeft /></Button><span className="text-xs font-semibold text-muted-foreground">Product preview · {step + 1}/4</span><Button variant="ghost" size="icon" aria-label="Next preview step" disabled={step === 3} onClick={() => setStep((s) => s + 1)}><ArrowRight /></Button></div>
    </div>
    <div aria-label="Product walkthrough steps" className="mt-4 grid grid-cols-4 gap-2">{CONNECT_STEPS.map((item, i) => <Button key={item.title} size="sm" variant={step === i ? "gold" : "outline"} aria-label={`Preview step ${i + 1}: ${item.title}`} aria-pressed={step === i} onClick={() => setStep(i)}>{i + 1}</Button>)}</div>
  </div>;
}