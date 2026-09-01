import {
  AlertTriangle,
  ArrowRight,
  Car,
  MapPin,
  Radio,
  Star,
  Users,
} from "lucide-react";
import guestPassAsset from "@/assets/guest-pass-qr.png.asset.json";
import { Logo } from "./logo";
import { Reveal } from "./reveal";

const tags = ["Hotels", "Event Grounds", "Commercial Venues", "Hotel Chains"];

export function Hero() {
  return (
    <section
      id="top"
      className="purple-gradient ribbon-clip relative overflow-hidden pb-28 pt-32 lg:pb-40 lg:pt-40"
    >
      {/* ribbon-fold decorative motifs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-12 h-[28rem] w-[28rem] rotate-12 bg-gold/10 [clip-path:polygon(30%_0,100%_18%,72%_100%,0_78%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 -rotate-12 bg-white/5 [clip-path:polygon(0_20%,80%_0,100%_80%,20%_100%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Multi-tenant valet platform
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-brand-foreground sm:text-5xl lg:text-6xl">
              Run valet operations in{" "}
              <span className="text-gold">real time</span> — from digital intake
              to instant retrieval.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-foreground/75 sm:text-lg">
              InstaPark unifies hotels, event venues, and large-scale grounds on
              one platform: live GPS spot tagging for open lots, real-time driver
              tracking, and an app-free QR guest experience — with a full
              photo-and-timestamp audit trail on every vehicle.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="gold-gradient corner-cut inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-xl shadow-black/25 transition-transform hover:-translate-y-0.5"
              >
                Book a Demo <ArrowRight className="size-4" />
              </a>
              <a
                href="#how-it-works"
                className="corner-cut inline-flex items-center gap-2 border border-brand-foreground/30 px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:border-gold hover:text-gold"
              >
                See How It Works
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-6">
              <li className="mr-1 text-xs uppercase tracking-[0.16em] text-brand-foreground/50">
                Built for
              </li>
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-brand-foreground/80"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <HeroMockup />
        </Reveal>
      </div>
    </section>
  );
}

const eventStats = [
  { label: "Total cars", value: "66", icon: Car },
  { label: "Guests invited", value: "128", icon: Users },
  { label: "Drivers", value: "02", icon: Users },
  { label: "Avg rating", value: "3.97★", icon: Star },
  { label: "Incidents", value: "00", icon: AlertTriangle },
];

const eventTabs = ["Info", "Drivers", "Supervisors", "Cars", "Incidents", "Feedback"];

const glanceCards = [
  { label: "Cars", value: "66" },
  { label: "Avg rating", value: "3.97" },
  { label: "Avg retrieval", value: "0.6m" },
  { label: "Top driver", value: "Kiran" },
];

function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* event detail dashboard card */}
      <div className="corner-cut overflow-hidden rounded-xl border border-white/12 bg-brand-deep/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
        <div className="border-b border-white/10 px-5 pb-4 pt-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <Logo tone="light" showWordmark={false} />
              <div>
                <p className="font-display text-base font-bold leading-tight text-brand-foreground">
                  Grand Marina Gala
                </p>
                <p className="text-[11px] uppercase tracking-[0.14em] text-brand-foreground/50">
                  30 Aug · 15:00 – 20:00
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-semibold text-gold">
              <Radio className="size-3" /> Live
            </span>
          </div>

          <div className="mt-4 grid grid-cols-5 gap-1.5">
            {eventStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/10 bg-white/5 px-1.5 py-2 text-center"
              >
                <stat.icon className="mx-auto size-3 text-gold/80" />
                <p className="mt-1 font-display text-sm font-bold text-brand-foreground">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[8px] uppercase leading-tight tracking-wide text-brand-foreground/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 border-b border-gold/25 px-5 text-[11px] font-semibold">
          {eventTabs.map((tab, i) => (
            <span
              key={tab}
              className={
                i === 0
                  ? "-mb-px border-b-2 border-gold py-2.5 text-gold"
                  : "py-2.5 text-brand-foreground/55"
              }
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 bg-white/4 p-4 sm:grid-cols-4">
          {glanceCards.map((card) => (
            <div
              key={card.label}
              className="rounded-lg border border-white/10 bg-white/8 px-3 py-2.5"
            >
              <p className="text-[9px] uppercase tracking-wide text-brand-foreground/55">
                {card.label}
              </p>
              <p className="mt-1 font-display text-base font-bold text-gold">
                {card.value}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-1.5 px-4 pb-5">
          {[
            { plate: "GJ10EC0090", slot: "A / 1", driver: "TB", status: "Delivered" },
            { plate: "GJ38BD5795", slot: "A / 2", driver: "Kiran", status: "Delivered" },
            { plate: "GJ01ZB3121", slot: "B / 14", driver: "Kiran", status: "Parked" },
          ].map((row) => (
            <div
              key={row.plate}
              className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2 text-[11px]"
            >
              <span className="font-semibold text-brand-foreground">{row.plate}</span>
              <span className="inline-flex items-center gap-1 text-brand-foreground/60">
                <MapPin className="size-3 text-gold/70" /> {row.slot}
              </span>
              <span className="text-brand-foreground/60">{row.driver}</span>
              <span
                className={
                  row.status === "Delivered"
                    ? "rounded-full bg-gold/15 px-2 py-0.5 font-semibold text-gold"
                    : "rounded-full bg-white/10 px-2 py-0.5 font-semibold text-brand-foreground/75"
                }
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* guest QR pass — floating phone card */}
      <div className="relative z-10 -mt-4 ml-auto w-24 overflow-hidden rounded-[1.1rem] border-2 border-gold/40 bg-brand-deep shadow-2xl shadow-black/50 sm:w-28 lg:absolute lg:-bottom-6 lg:left-6 lg:mt-0 lg:w-28 lg:rotate-[2deg] lg:transition-all lg:duration-500 lg:hover:-translate-y-2 lg:hover:rotate-[0deg]">
        <img
          src={guestPassAsset.url}
          alt="InstaPark digital guest pass showing a scannable QR code, agency branding and contact number"
          className="block h-auto w-full"
          width={512}
          height={912}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
