import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { CallButton, EmergencyBanner } from "@/components/call-button";
import { FAQList } from "@/components/faq-list";
import { ContactForm } from "@/components/contact-form";
import { SERVICES } from "@/lib/services";
import type { FAQ } from "@/lib/faqs";

export type CityPageProps = {
  city: string;
  slug: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  localContext: string[];
  responseNote: string;
  faqs: FAQ[];
};

export function CityLanding(props: CityPageProps) {
  const { city, heroImage, heroImageAlt, intro, localContext, responseNote, faqs } = props;

  return (
    <>
      <section className="bg-ink text-ink-foreground relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 60% at 15% 20%, oklch(0.82 0.17 85 / 0.30) 0%, transparent 60%), radial-gradient(50% 50% at 85% 90%, oklch(0.82 0.17 85 / 0.15) 0%, transparent 60%)",
          }}
        />
        <div className="container-lux relative py-12 md:py-20 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-gold" /> Serving {city} &amp; surrounding areas
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
              Mobile Tyre Fitting in <span className="text-gradient-gold">{city}</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/80 max-w-xl">{intro}</p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href={SITE.phoneTel} className="btn-gold btn-gold-hover text-lg py-4 px-7">
                <Phone className="w-5 h-5" /> Call Now · {SITE.phone}
              </a>
              <a
                href="#enquire"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 font-semibold text-white/90 hover:bg-white/5"
              >
                Request a callback
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> {responseNote}</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold" /> BS AU 159 puncture repairs</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gold/20 blur-2xl" aria-hidden />
            <img
              src={heroImage}
              alt={heroImageAlt}
              width={900}
              height={1125}
              className="relative w-full aspect-[4/5] object-cover rounded-3xl border border-white/10 shadow-2xl"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="container-lux py-14 md:py-20 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-gradient-gold">On call in {city}</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
            Local mobile tyre technicians who know {city}.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
            {localContext.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="mt-8">
            <CallButton label={`Call ${city} team now`} size="lg" showNumber={false} />
          </div>
        </div>

        <aside className="space-y-5">
          <div className="card-lux">
            <h3 className="font-display text-lg font-semibold">What we do in {city}</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex items-center justify-between gap-3 text-sm font-medium"
                  >
                    <span className="text-foreground/85">{s.title}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <EmergencyBanner>Stranded in {city}? We're on the way.</EmergencyBanner>
        </aside>
      </section>

      {/* FAQs */}
      <section className="bg-muted/40 py-14 md:py-20">
        <div className="container-lux max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-gradient-gold">Local FAQs</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Mobile tyre fitting in {city} – your questions.</h2>
          <div className="mt-8">
            <FAQList items={faqs} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="enquire" className="container-lux py-14 md:py-20 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Prefer we call you back?</h2>
          <p className="mt-3 text-muted-foreground">
            Drop your details and a {city} technician will call you straight back. For anything urgent, call{" "}
            <a href={SITE.phoneTel} className="font-semibold underline">{SITE.phone}</a>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton label="Call Now" size="lg" />
          </div>
        </div>
        <div>
          <ContactForm context={`Mobile tyre fitting ${city}`} />
        </div>
      </section>
    </>
  );
}
