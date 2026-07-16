import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingCall() {
  return (
    <>
      {/* Desktop floating button */}
      <a
        href={SITE.phoneTel}
        aria-label={`Call ${SITE.name} on ${SITE.phone}`}
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 btn-gold btn-gold-hover shadow-2xl"
      >
        <Phone className="w-5 h-5" /> Call Now
      </a>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/90 backdrop-blur border-t border-border">
        <a href={SITE.phoneTel} className="btn-gold btn-gold-hover w-full text-base">
          <Phone className="w-5 h-5" /> Call {SITE.phone}
        </a>
      </div>
      {/* Spacer so mobile content isn't hidden behind the sticky bar */}
      <div aria-hidden className="md:hidden h-20" />
    </>
  );
}
