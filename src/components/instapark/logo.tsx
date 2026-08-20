import logo from "@/assets/instapark-logo.png.asset.json";
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
        src={logo.url}
        alt="InstaPark logo: a folded-ribbon P with an integrated car silhouette"
        className="h-9 w-9 object-contain"
        width={36}
        height={36}
      />
      {showWordmark ? (
        <span
          className={cn(
            "font-display text-xl font-bold tracking-tight",
            tone === "light" ? "text-brand-foreground" : "text-foreground",
          )}
        >
          Insta<span className="text-gold">Park</span>
        </span>
      ) : null}
    </span>
  );
}
