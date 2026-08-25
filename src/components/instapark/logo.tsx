import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "dark",
  showWordmark = true,
}: {
  className?: string;
  tone?: "dark" | "light";
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <img
        src="/favicon.png"
        alt="InstaPark logo: a folded-ribbon P with an integrated car silhouette"
        className="h-12 w-auto shrink-0 object-contain"
        width={50}
        height={48}
        loading="eager"
        decoding="async"
      />
      {showWordmark ? (
        <span
          className={cn(
            "font-display text-2xl font-bold leading-none tracking-tight",
            tone === "light" ? "text-brand-foreground" : "text-foreground",
          )}
        >
          insta<span className="text-gold">Park</span>
        </span>
      ) : null}
    </span>
  );
}
