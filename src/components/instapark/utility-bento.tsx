import { useState } from "react";
import { BellRing, PhoneForwarded, Moon, HeartPulse, ArrowRight, PhoneCall } from "lucide-react";
import { Reveal } from "@/components/instapark/reveal";

const modes = ["Active", "Home DND", "Valet Mode"] as const;
const modeNote: Record<(typeof modes)[number], string> = {
  Active: "Scanners can reach you right away.",
  "Home DND": "Alerts paused while you're parked at home.",
  "Valet Mode": "Valet attendants stay connected — you stay undisturbed.",
};

function Card({ icon: Icon, badge, title, text, children, delay }: { icon: typeof BellRing; badge: string; title: string; text: React.ReactNode; children: React.ReactNode; delay: number }) {
  return <Reveal delay={delay} className="lift-card flex flex-col rounded-3xl border border-border bg-card p-7 text-card-foreground shadow-sm">
    <div className="flex items-center gap-3"><span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-gold"><Icon className="size-5" /></span><span className="rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-brand">{badge}</span></div>
    <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    <div className="mt-6 flex-1 content-end">{children}</div>
  </Reveal>;
}

export function UtilityBento() {
  const [mode, setMode] = useState<(typeof modes)[number]>("Active");
  return <section className="bg-background px-5 py-20 lg:px-8"><div className="mx-auto max-w-6xl">
    <Reveal><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Everyday value</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">More Than Emergency Alerts — Everyday Smart Utility</h2></Reveal>
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      <Card delay={0} icon={BellRing} badge="NEVER MISS A RENEWAL" title="Automated WhatsApp Expiry Alerts" text="Save your vehicle’s Insurance, PUC, and Service dates once during activation. Get timely WhatsApp reminders 7 days before expiry—saving you from traffic fines and lapsed policies.">
        <div className="flex items-start gap-3 rounded-2xl border border-border bg-cream p-4 shadow-sm"><span aria-hidden className="text-lg">🔔</span><p className="text-sm"><strong>Reminder:</strong> Your Car Insurance (GJ01AB 1234) expires in 7 days.</p></div>
      </Card>
      <Card delay={100} icon={PhoneForwarded} badge="ZERO MISSED ALERTS" title="Dual-Number Automatic Call Forwarding" text="Link 2 mobile numbers (Owner + Spouse, or Owner + Chauffeur) to a single QR tag. If the primary number doesn’t answer within 15 seconds, the masked call seamlessly routes to your backup number.">
        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 text-center text-xs font-semibold"><span className="rounded-xl bg-brand px-3 py-3 text-brand-foreground">Primary Owner <span className="text-gold">(15s)</span></span><ArrowRight className="size-4 shrink-0 text-primary" /><span className="rounded-xl border border-gold bg-gold/15 px-3 py-3">Auto-Forward to Spouse / Chauffeur</span></div>
      </Card>
      <Card delay={200} icon={Moon} badge="COMPLETE CONTROL" title="Pause Alerts at Home or Hand Over to Valet" text={<>Parked safely inside your own home garage? Toggle <strong>Do Not Disturb</strong> in one tap. Handing your keys to a hotel valet? Switch to <strong>Valet Mode</strong> so attendants stay connected without disturbing you.</>}>
        <div role="radiogroup" aria-label="Preview tag mode" className="grid grid-cols-3 gap-1 rounded-full bg-muted p-1">{modes.map((m) => <button key={m} type="button" role="radio" aria-checked={mode === m} onClick={() => setMode(m)} className={`rounded-full px-2 py-2 text-xs font-semibold transition-colors ${mode === m ? "bg-brand text-brand-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}>{m}</button>)}</div>
        <p className="mt-3 text-center text-xs text-muted-foreground" aria-live="polite">{modeNote[mode]}</p>
      </Card>
      <Card delay={300} icon={HeartPulse} badge="LIFESAVING SAFETY" title="Instant Blood Group & Family ICE Access" text={<>Optionally store your Blood Group and 2 Emergency Family Contacts behind a dedicated <em>“In Case of Medical Emergency”</em> button on the scan screen—helping first responders act fast while keeping personal numbers private.</>}>
        <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-destructive">Medical emergency</p><p className="mt-1 font-display text-2xl font-bold">Blood Group: O+</p><div className="mt-3 flex items-center gap-2 rounded-lg bg-destructive px-3 py-2.5 text-sm font-semibold text-destructive-foreground"><PhoneCall className="size-4" />Call Emergency Contact 1 (Masked)</div></div>
      </Card>
    </div>
  </div></section>;
}
