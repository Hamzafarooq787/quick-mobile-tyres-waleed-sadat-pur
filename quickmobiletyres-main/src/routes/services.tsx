import { createFileRoute } from "@tanstack/react-router";
import { ServiceGrid } from "@/components/service-grid";
import { EmergencyBanner } from "@/components/call-button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Mobile Tyre Services | Quick Mobile Tyres" },
      {
        name: "description",
        content:
          "Full range of mobile tyre services – fitting, repair, emergency callouts, roadside and motorway. Call 0330 043 8196 for immediate help.",
      },
      { property: "og:title", content: "Mobile Tyre Services | Quick Mobile Tyres" },
      { property: "og:description", content: "Mobile tyre fitting, repair and emergency service across the South East." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-ink-foreground py-16 md:py-20">
        <div className="container-lux max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-gradient-gold">Our Services</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Every mobile tyre service under one number.
          </h1>
          <p className="mt-4 text-white/75 text-lg">
            From same-day fitting to 3am roadside blowouts, we handle it. Pick a service to learn more, or just call – we'll take it from there.
          </p>
        </div>
      </section>
      <ServiceGrid heading="Choose a service" intro="Every job is carried out by a qualified mobile tyre technician using professional equipment." />
      <div className="container-lux">
        <EmergencyBanner />
      </div>
    </>
  );
}
