import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Moves its content at a different speed while scrolling. Disabled for reduced motion. */
export function Parallax({ children, speed = 0.2, className }: { children?: ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.parentElement?.getBoundingClientRect() ?? el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(frame); };
  }, [speed]);
  return <div ref={ref} className={cn("will-change-transform", className)}>{children}</div>;
}
