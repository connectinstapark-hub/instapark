import { ArrowRight, Car, MapPin, Radio } from "lucide-react";
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

function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* live map card */}
      <div className="corner-cut rounded-xl border border-white/12 bg-white/8 p-5 shadow-2xl shadow-black/40 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo tone="light" showWordmark={false} />
            <div>
              <p className="text-sm font-semibold text-brand-foreground">
                Grand Marina — Lot B
              </p>
              <p className="text-[11px] text-brand-foreground/55">
                Live driver map
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-semibold text-gold">
            <Radio className="size-3" /> Live
          </span>
        </div>

        <div className="relative mt-4 h-44 overflow-hidden rounded-lg bg-brand-deep/70">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:28px_28px]"
          />
          <div
            aria-hidden
            className="absolute left-6 top-8 h-16 w-28 -rotate-6 rounded bg-gold/15"
          />
          <div
            aria-hidden
            className="absolute bottom-6 right-8 h-14 w-24 rotate-3 rounded bg-white/8"
          />
          <span className="absolute left-1/3 top-1/2 inline-flex items-center gap-1 rounded-full bg-gold px-2 py-1 text-[10px] font-bold text-gold-foreground">
            <MapPin className="size-3" /> B-14
          </span>
          <span className="absolute bottom-8 left-10 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold text-brand">
            <Car className="size-3" /> Driver 3
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[
            { label: "In queue", value: "07" },
            { label: "Avg. retrieval", value: "3m 12s" },
            { label: "Occupancy", value: "82%" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-white/6 px-2 py-2.5">
              <p className="font-display text-base font-bold text-gold">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-wide text-brand-foreground/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* guest QR pass — floating phone card */}
      <div className="relative z-10 -mt-4 ml-auto w-28 overflow-hidden rounded-[1.25rem] border-2 border-gold/40 bg-brand-deep shadow-2xl shadow-black/50 sm:w-32 lg:absolute lg:-bottom-8 lg:right-4 lg:mt-0 lg:w-36 lg:rotate-[2deg] lg:transition-all lg:duration-500 lg:hover:-translate-y-2 lg:hover:rotate-[0deg]">
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
