import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function CallButton({
  label = "Call Now",
  size = "md",
  showNumber = true,
  className = "",
}: {
  label?: string;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
  className?: string;
}) {
  const sizeCls =
    size === "lg"
      ? "text-lg py-4 px-7"
      : size === "sm"
      ? "text-sm py-2.5 px-4"
      : "text-base py-3.5 px-6";
  return (
    <a
      href={SITE.phoneTel}
      aria-label={`Call ${SITE.name} on ${SITE.phone}`}
      className={`btn-gold btn-gold-hover ${sizeCls} ${className}`}
    >
      <Phone className="w-5 h-5" /> {label}
      {showNumber && <span className="hidden sm:inline">· {SITE.phone}</span>}
    </a>
  );
}

export function EmergencyBanner({ children }: { children?: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-ink text-ink-foreground p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
      <div className="flex-1">
        <div className="text-xs font-semibold uppercase tracking-widest text-gradient-gold">Emergency Callout</div>
        <p className="mt-1 font-display text-xl md:text-2xl font-bold">
          {children ?? "Stranded with a flat? A technician is one call away."}
        </p>
      </div>
      <CallButton label="Call Now" size="lg" showNumber />
    </div>
  );
}
