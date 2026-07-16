import { Phone, ShieldCheck, Clock, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import heroImg from "@/assets/bmw-3-series.jpg.asset.json";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 20%, oklch(0.82 0.17 85 / 0.35) 0%, transparent 60%), radial-gradient(50% 50% at 80% 80%, oklch(0.82 0.17 85 / 0.18) 0%, transparent 60%)",
        }}
      />
      <div className="container-lux relative py-14 md:py-24 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            24/7 Emergency Mobile Tyre Fitting
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
            Emergency Mobile Tyre Fitting{" "}
            <span className="text-gradient-gold">When You Need It Most</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
            Professional mobile tyre fitting and emergency tyre repair with fast response times.
            Whether you're at home, work, roadside, or motorway, we'll come to you and get you safely
            back on the road.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={SITE.phoneTel} className="btn-gold btn-gold-hover text-lg py-4 px-7">
              <Phone className="w-5 h-5" /> Call Now · {SITE.phone}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 font-semibold text-white/90 hover:bg-white/5"
            >
              See our services
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-3 gap-4 text-sm">
            <li className="flex items-start gap-2 text-white/80">
              <Clock className="w-4 h-4 text-gold mt-0.5" /> 30–60 min<br />response
            </li>
            <li className="flex items-start gap-2 text-white/80">
              <MapPin className="w-4 h-4 text-gold mt-0.5" /> Home, work<br />or roadside
            </li>
            <li className="flex items-start gap-2 text-white/80">
              <ShieldCheck className="w-4 h-4 text-gold mt-0.5" /> BS AU 159<br />repairs
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gold/20 blur-2xl" aria-hidden />
          <img
            src={heroImg.url}
            alt="Mobile tyre technician fitting a new tyre to a BMW 3 Series"
            width={900}
            height={1200}
            className="relative w-full aspect-[4/5] object-cover rounded-3xl border border-white/10 shadow-2xl"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
