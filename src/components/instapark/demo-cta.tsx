import { useState } from "react";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { Reveal } from "./reveal";

type Fields = {
  name: string;
  company: string;
  email: string;
  venueType: string;
  message: string;
};

const venueTypes = [
  "Hotel or resort",
  "Event venue or grounds",
  "Hotel chain / multi-property",
  "Event management company",
  "Other",
];

const empty: Fields = {
  name: "",
  company: "",
  email: "",
  venueType: "",
  message: "",
};

export function DemoCta() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.company.trim()) next.company = "Please enter your company or venue.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid work email.";
    if (!values.venueType) next.venueType = "Please select a venue type.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
    setValues(empty);
  };

  return (
    <section
      id="contact"
      className="purple-gradient ribbon-clip-up relative scroll-mt-24 overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-24 h-80 w-80 -rotate-12 bg-gold/8 [clip-path:polygon(20%_0,100%_20%,80%_100%,0_75%)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-start gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <span className="h-px w-6 bg-gold" />
            Book a demo
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-foreground sm:text-4xl lg:text-[2.75rem]">
            See InstaPark in action on your own lot layout
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-foreground/75">
            Walk through a live intake, GPS spot tag, and guest retrieval with our
            team — then see the audit log it produced. Most demos take 30 minutes.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-brand-foreground/80">
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-gold" /> sales@instapark.example
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-gold" /> +1 (555) 018-4420
            </li>
          </ul>
        </Reveal>

        <Reveal
          delay={120}
          className="corner-cut border border-white/12 bg-white/8 p-7 backdrop-blur-sm lg:p-9"
        >
          {sent ? (
            <div className="flex flex-col items-start gap-4 py-6">
              <CheckCircle2 className="size-10 text-gold" />
              <h3 className="font-display text-xl font-bold text-brand-foreground">
                Request received
              </h3>
              <p className="text-sm leading-relaxed text-brand-foreground/75">
                Thanks — our team will reach out within one business day to
                schedule your walkthrough.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="text-sm font-semibold text-gold underline-offset-4 hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5">
              <Field label="Full name" error={errors.name}>
                <input
                  type="text"
                  value={values.name}
                  onChange={(e) => set("name")(e.target.value)}
                  className={inputClass}
                  placeholder="Alex Mercer"
                  autoComplete="name"
                />
              </Field>
              <Field label="Company / venue" error={errors.company}>
                <input
                  type="text"
                  value={values.company}
                  onChange={(e) => set("company")(e.target.value)}
                  className={inputClass}
                  placeholder="Grand Marina Hotel"
                  autoComplete="organization"
                />
              </Field>
              <Field label="Work email" error={errors.email}>
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => set("email")(e.target.value)}
                  className={inputClass}
                  placeholder="alex@venue.com"
                  autoComplete="email"
                />
              </Field>
              <Field label="Venue type" error={errors.venueType}>
                <select
                  value={values.venueType}
                  onChange={(e) => set("venueType")(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select a venue type</option>
                  {venueTypes.map((t) => (
                    <option key={t} value={t} className="text-foreground">
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="What would you like to see?" optional>
                <textarea
                  rows={3}
                  value={values.message}
                  onChange={(e) => set("message")(e.target.value)}
                  className={`${inputClass} resize-none`}
                  placeholder="We run 900 cars on open ground during weekend events..."
                />
              </Field>
              <button
                type="submit"
                className="gold-gradient corner-cut w-full px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
              >
                Request my demo
              </button>
              <p className="text-[11px] leading-relaxed text-brand-foreground/50">
                We'll only use these details to contact you about InstaPark.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-md border border-white/15 bg-brand-deep/40 px-4 py-3 text-sm text-brand-foreground placeholder:text-brand-foreground/35 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold";

function Field({
  label,
  error,
  optional,
  children,
}: {
  label: string;
  error?: string | undefined;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-brand-foreground/70">
        {label}
        {optional ? (
          <span className="font-normal normal-case text-brand-foreground/40">
            Optional
          </span>
        ) : null}
      </span>
      {children}
      {error ? (
        <span className="mt-1.5 block text-xs font-medium text-gold">{error}</span>
      ) : null}
    </label>
  );
}
