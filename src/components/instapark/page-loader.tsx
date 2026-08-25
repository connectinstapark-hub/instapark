import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Lock scrolling without changing layout width (scrollbar-gutter keeps it stable)
    const body = document.body;
    const prevOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const fadeTimer = setTimeout(() => {
      setFading(true);
      body.style.overflow = prevOverflow;
    }, 5000);
    return () => {
      clearTimeout(fadeTimer);
      body.style.overflow = prevOverflow;
    };
  }, []);

  // Unmount only after the fade transition has fully finished
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName === "opacity" && fading) setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      aria-live="polite"
      aria-busy="true"
      onTransitionEnd={handleTransitionEnd}
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand transition-opacity duration-1000 ease-in-out will-change-[opacity]",
        fading ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div
        className={cn(
          "relative flex flex-col items-center gap-8 px-6 transition-opacity duration-1000 ease-in-out",
          fading ? "opacity-0" : "opacity-100",
        )}
      >
        {/* Logo inside a rotating circle */}
        <div className="relative flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96 md:h-[28rem] md:w-[28rem]">
          <div className="absolute inset-0 rounded-full bg-cream shadow-2xl shadow-black/30" />
          <div className="absolute inset-0 rounded-full border-2 border-gold/30" />
          <div className="absolute inset-[-6px] rounded-full border-2 border-t-gold border-r-transparent border-b-transparent border-l-transparent animate-spin" />
          <div className="relative flex h-[80%] w-[80%] flex-col items-center justify-center gap-3 rounded-full px-6 text-center">
            <img
              src="/instapark-mark.png"
              width={654}
              height={624}
              alt="InstaPark logo: a folded-ribbon P with an integrated car silhouette"
              className="h-[46%] w-auto max-w-full shrink-0 object-contain"
              loading="eager"
              decoding="sync"
            />
            <span className="font-display text-3xl font-bold leading-none tracking-tight text-brand sm:text-4xl">
              insta<span className="text-gold">Park</span>
            </span>
          </div>
        </div>

        {/* <p className="text-sm font-medium tracking-wide text-brand-foreground/90">
          Loading experience…
        </p> */}
      </div>
    </div>
  );
}
