import { useEffect, useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CONNECT_PACKS, EMPTY_REQUEST, connectRequestEmail, validateConnectRequest, type ConnectRequest, type ConnectErrors, type RequestKind } from "@/lib/instaconnect";

export function InstaConnectRequest({ kind, onClose }: { kind: RequestKind | null; onClose: () => void }) {
  const [tab, setTab] = useState<RequestKind>("individual");
  const [values, setValues] = useState<ConnectRequest>(EMPTY_REQUEST);
  const [errors, setErrors] = useState<ConnectErrors>({});
  const [draft, setDraft] = useState<string | null>(null);
  useEffect(() => { if (kind) setTab(kind); }, [kind]);
  const bulk = tab === "bulk";
  function update(key: keyof ConnectRequest, value: string) {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => { const next = { ...previous }; delete next[key]; return next; });
  }
  function close() { setDraft(null); setErrors({}); setValues(EMPTY_REQUEST); onClose(); }
  const fields = [
    { key: "name", label: "Name", type: "text", autoComplete: "name" },
    ...(bulk ? [{ key: "organization", label: "Society / Organization Name", type: "text", autoComplete: "organization" }] : []),
    { key: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
    { key: "city", label: "City", type: "text", autoComplete: "address-level2" },
    { key: "quantity", label: bulk ? "Estimated Tag Quantity" : "Number of Packs", type: "number", autoComplete: "off" },
  ] as const;
  return (
    <Dialog open={kind !== null} onOpenChange={(open) => { if (!open) close(); }}>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-lg">
        <DialogHeader>
          <DialogTitle className="pr-6 font-display text-xl">Order or inquire about instaKonnect</DialogTitle>
          <DialogDescription>{bulk ? "Co-branded tags for your society, corporate park, hotel or venue." : "Tags for your car, bike, EV, luggage or keys."}</DialogDescription>
        </DialogHeader>
        {draft ? <div className="space-y-4 py-2">
          <CheckCircle2 className="size-9 text-primary" />
          <h3 className="font-display text-xl font-bold">Your request is ready</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">Open your email app and send the prepared request to connect.instapark@gmail.com. Your request has not been sent yet, and no payment has been collected.</p>
          <Button asChild variant="gold" className="w-full"><a href={draft}><Mail />Open email to send request</a></Button>
          <Button variant="ghost" className="w-full" onClick={() => setDraft(null)}>Edit details</Button>
        </div> : <>
          <Tabs value={tab} onValueChange={(v) => { setTab(v as RequestKind); setErrors({}); }}>
            <TabsList className="grid h-auto w-full grid-cols-2">
              <TabsTrigger value="individual" className="whitespace-normal py-2 text-xs sm:text-sm">Individual / Family Pack</TabsTrigger>
              <TabsTrigger value="bulk" className="whitespace-normal py-2 text-xs sm:text-sm">Society / B2B Bulk</TabsTrigger>
            </TabsList>
          </Tabs>
          <form noValidate className="space-y-4" onSubmit={(event) => {
            event.preventDefault();
            const next = validateConnectRequest(values, tab); setErrors(next);
            if (Object.keys(next).length === 0) setDraft(connectRequestEmail(values, tab));
          }}>
            {!bulk ? <div className="space-y-1.5">
              <label htmlFor="connect-pack" className="text-sm font-medium">Pack <span className="text-destructive">*</span></label>
              <select id="connect-pack" value={values.pack} onChange={(e) => update("pack", e.target.value)} className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {CONNECT_PACKS.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
              {errors.pack ? <p role="alert" className="text-xs text-destructive">{errors.pack}</p> : null}
            </div> : null}
            {fields.map((field) => {
              const key = field.key as keyof ConnectRequest;
              return <div key={key} className="space-y-1.5">
                <label htmlFor={`connect-${key}`} className="text-sm font-medium">{field.label} <span className="text-destructive">*</span></label>
                <Input id={`connect-${key}`} type={field.type} autoComplete={field.autoComplete} value={values[key]} onChange={(e) => update(key, e.target.value)} min={field.type === "number" ? 1 : undefined} step={field.type === "number" ? 1 : undefined} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `connect-${key}-error` : undefined} className="h-11" />
                {errors[key] ? <p id={`connect-${key}-error`} role="alert" className="text-xs text-destructive">{errors[key]}</p> : null}
              </div>;
            })}
            <Button type="submit" variant="gold" className="h-11 w-full"><Mail />Prepare email request</Button>
            <p className="text-xs leading-relaxed text-muted-foreground">These details are used only for your instaKonnect inquiry. You’ll send the request from your email app. Pricing and availability will be confirmed by our team.</p>
          </form>
        </>}
      </DialogContent>
    </Dialog>
  );
}
