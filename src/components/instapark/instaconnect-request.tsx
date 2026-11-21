import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { connectRequestEmail, validateConnectRequest, type ConnectRequest, type ConnectErrors, type RequestKind } from "@/lib/instaconnect";

export function InstaConnectRequest({ kind, onClose }: { kind: RequestKind | null; onClose: () => void }) {
  const [values, setValues] = useState<ConnectRequest>({ name: "", organization: "", phone: "", quantity: "1" });
  const [errors, setErrors] = useState<ConnectErrors>({});
  const [draft, setDraft] = useState<string | null>(null);
  const bulk = kind === "bulk";
  function update(key: keyof ConnectRequest, value: string) {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => { const next = { ...previous }; delete next[key]; return next; });
  }
  function close() { setDraft(null); setErrors({}); setValues({ name: "", organization: "", phone: "", quantity: "1" }); onClose(); }
  return (
    <Dialog open={kind !== null} onOpenChange={(open) => { if (!open) close(); }}>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-lg">
        <DialogHeader>
          <DialogTitle className="pr-6 font-display text-xl">{bulk ? "Request B2B bulk pricing" : "Order your instaConnect tag"}</DialogTitle>
          <DialogDescription>{bulk ? "Co-branded tags for your society, organization or venue." : "Tell us how many tags you need for your car or bike."}</DialogDescription>
        </DialogHeader>
        {draft ? <div className="space-y-4 py-2">
          <CheckCircle2 className="size-9 text-primary" />
          <h3 className="font-display text-xl font-bold">Your request is ready</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">Open your email app and send the prepared request to connect.instapark@gmail.com. Your request has not been sent yet, and no payment has been collected.</p>
          <Button asChild variant="gold" className="w-full"><a href={draft}><Mail />Open email to send request</a></Button>
          <Button variant="ghost" className="w-full" onClick={() => setDraft(null)}>Edit details</Button>
        </div> : <form noValidate className="space-y-4" onSubmit={(event) => {
          event.preventDefault(); if (!kind) return;
          const next = validateConnectRequest(values, kind); setErrors(next);
          if (Object.keys(next).length === 0) setDraft(connectRequestEmail(values, kind));
        }}>
          {([{ key: "name", label: "Name", type: "text", autoComplete: "name" }, ...(bulk ? [{ key: "organization", label: "Organization / Society Name", type: "text", autoComplete: "organization" }] : []), { key: "phone", label: "Phone", type: "tel", autoComplete: "tel" }, { key: "quantity", label: bulk ? "Estimated Tag Quantity" : "Tag Quantity", type: "number", autoComplete: "off" }] as const).map((field) => {
            const key = field.key as keyof ConnectRequest;
            return <div key={key} className="space-y-1.5">
              <label htmlFor={`connect-${key}`} className="text-sm font-medium">{field.label} <span className="text-destructive">*</span></label>
              <Input id={`connect-${key}`} type={field.type} autoComplete={field.autoComplete} value={values[key]} onChange={(e) => update(key, e.target.value)} min={field.type === "number" ? 1 : undefined} step={field.type === "number" ? 1 : undefined} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `connect-${key}-error` : undefined} className="h-11" />
              {errors[key] ? <p id={`connect-${key}-error`} role="alert" className="text-xs text-destructive">{errors[key]}</p> : null}
            </div>;
          })}
          <Button type="submit" variant="gold" className="h-11 w-full"><Mail />Prepare email request</Button>
          <p className="text-xs leading-relaxed text-muted-foreground">These details are used only for your instaConnect inquiry. You’ll send the request from your email app. Pricing and availability will be confirmed by our team.</p>
        </form>}
      </DialogContent>
    </Dialog>
  );
}