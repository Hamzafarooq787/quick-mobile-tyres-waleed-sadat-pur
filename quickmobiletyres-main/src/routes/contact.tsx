import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CallButton } from "@/components/call-button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Quick Mobile Tyres" },
      {
        name: "description",
        content:
          "Call Quick Mobile Tyres on 0330 043 8196 for 24/7 emergency mobile tyre fitting and repair, or send us a message.",
      },
      { property: "og:title", content: "Contact | Quick Mobile Tyres" },
      { property: "og:description", content: "Call, email or message our mobile tyre team – 24/7." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-ink text-ink-foreground py-14 md:py-20">
        <div className="container-lux grid gap-8 md:grid-cols-[1.3fr_1fr] items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-gradient-gold">Contact</div>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">Talk to a technician now.</h1>
            <p className="mt-4 text-white/75 text-lg">The quickest way to get help is to pick up the phone. We answer 24/7.</p>
          </div>
          <div className="flex md:justify-end">
            <CallButton label="Call Now" size="lg" />
          </div>
        </div>
      </section>

      <section className="container-lux py-14 md:py-20 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <div className="card-lux">
            <h2 className="font-display text-xl font-semibold">Contact details</h2>
            <ul className="mt-4 space-y-4 text-base">
              <li className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-xl bg-ink text-gold grid place-items-center shrink-0"><Phone className="w-5 h-5" /></span>
                <div>
                  <div className="text-xs uppercase text-muted-foreground">Phone (24/7)</div>
                  <a href={SITE.phoneTel} className="font-semibold text-lg">{SITE.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-xl bg-ink text-gold grid place-items-center shrink-0"><Mail className="w-5 h-5" /></span>
                <div>
                  <div className="text-xs uppercase text-muted-foreground">Email</div>
                  <a href={SITE.emailHref} className="font-semibold break-all">{SITE.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-xl bg-ink text-gold grid place-items-center shrink-0"><Clock className="w-5 h-5" /></span>
                <div>
                  <div className="text-xs uppercase text-muted-foreground">Business hours</div>
                  <div className="font-semibold">{SITE.hours}</div>
                  <div className="text-sm text-muted-foreground">Including weekends &amp; bank holidays</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-xl bg-ink text-gold grid place-items-center shrink-0"><MapPin className="w-5 h-5" /></span>
                <div>
                  <div className="text-xs uppercase text-muted-foreground">Coverage</div>
                  <div className="font-semibold">South East England &amp; surrounding areas</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border">
            <iframe
              title="Service area map"
              src="https://www.google.com/maps?q=South+East+England&output=embed"
              width="100%"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full block"
            />
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold">Send us a message</h2>
          <p className="mt-2 text-muted-foreground">For non-urgent enquiries, quotes and callback requests.</p>
          <div className="mt-6">
            <ContactForm context="Contact page" />
          </div>
        </div>
      </section>
    </>
  );
}
