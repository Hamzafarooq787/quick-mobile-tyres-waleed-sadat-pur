import { Link } from "@tanstack/react-router";
import { Phone, Mail, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground mt-24">
      <div className="container-lux py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-xl font-bold">
            {SITE.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-gradient-gold">Tyres</span>
          </div>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            24/7 emergency mobile tyre fitting, repair and replacement. We come to you – home, work, roadside or motorway.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gradient-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={SITE.phoneTel} className="flex items-center gap-2 hover:text-[oklch(0.86_0.17_88)]">
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={SITE.emailHref} className="flex items-center gap-2 hover:text-[oklch(0.86_0.17_88)] break-all">
                <Mail className="w-4 h-4" /> {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-white/70">
              <Clock className="w-4 h-4" /> {SITE.hours}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gradient-gold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-white/80 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gradient-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="text-white/80 hover:text-white">Services</Link></li>
            <li><Link to="/about" className="text-white/80 hover:text-white">About Us</Link></li>
            <li><Link to="/faqs" className="text-white/80 hover:text-white">FAQs</Link></li>
            <li><Link to="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
            <li><Link to="/privacy-policy" className="text-white/80 hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-white/80 hover:text-white">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-lux py-5 text-xs text-white/60 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Emergency mobile tyre technicians · Available 24/7</span>
        </div>
      </div>
    </footer>
  );
}
