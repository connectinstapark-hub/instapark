import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import wordmark from "@/assets/instapark-wordmark.png.asset.json";
import mark from "@/assets/instapark-mark.png.asset.json";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 5000);
    const hideTimer = setTimeout(() => setVisible(false), 5700);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-live="polite"
      aria-busy="true"
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand transition-opacity duration-700 ease-out",
        fading ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="relative flex flex-col items-center gap-8 px-6">
        {/* Logo inside a rotating circle */}
        <div className="relative flex h-72 w-72 items-center justify-center md:h-80 md:w-80">
          <div className="absolute inset-0 rounded-full bg-cream shadow-2xl shadow-black/30" />
          <div className="absolute inset-0 rounded-full border-2 border-gold/30" />
          <div className="absolute inset-[-6px] rounded-full border-2 border-t-gold border-r-transparent border-b-transparent border-l-transparent animate-spin" />
          <div className="relative flex h-[78%] w-[78%] flex-col items-center justify-center gap-2 rounded-full px-4">
            <img
              src={mark.url}
              alt="InstaPark logo: a folded-ribbon P with an integrated car silhouette"
              className="h-[42%] w-auto max-w-full object-contain"
              loading="eager"
              decoding="sync"
            />
            <img
              src={wordmark.url}
              alt="InstaPark Digital Valet & Event Parking — a product of Pinsoftek"
              className="h-[38%] w-auto max-w-full object-contain"
              loading="eager"
              decoding="sync"
            />
          </div>
        </div>

        <p className="text-sm font-medium tracking-wide text-brand-foreground/90">
          Loading experience…
        </p>
      </div>
    </div>
  );
}
