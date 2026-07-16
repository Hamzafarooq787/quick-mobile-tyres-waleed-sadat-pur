import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container-lux flex items-center justify-between h-16 md:h-20 gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Quick Mobile Tyres logo" className="h-10 md:h-12 w-auto shrink-0" width={120} height={48} />
          <span className="sr-only">{SITE.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={SITE.phoneTel} className="hidden sm:inline-flex btn-gold btn-gold-hover text-sm py-2.5 px-4">
            <Phone className="w-4 h-4" /> {SITE.phone}
          </a>
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-full border border-border"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-lux py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 px-2 rounded-lg text-base font-medium hover:bg-muted"
                activeProps={{ className: "text-foreground font-semibold bg-muted" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={SITE.phoneTel} className="btn-gold btn-gold-hover mt-2">
              <Phone className="w-4 h-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
