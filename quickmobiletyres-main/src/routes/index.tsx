import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { ServiceGrid } from "@/components/service-grid";
import { WhyChoose } from "@/components/why-choose";
import { Testimonials } from "@/components/testimonials";
import { EmergencyBanner } from "@/components/call-button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emergency Mobile Tyre Fitting 24/7 | Quick Mobile Tyres" },
      {
        name: "description",
        content:
          "Emergency mobile tyre fitting, repair and replacement at your home, work, roadside or motorway. Fast response. 24/7. Call 0330 043 8196.",
      },
      { property: "og:title", content: "Emergency Mobile Tyre Fitting 24/7 | Quick Mobile Tyres" },
      { property: "og:description", content: "Emergency mobile tyre fitting, repair and replacement at your home, work, roadside or motorway. Fast response. 24/7. Call 0330 043 8196." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE.name,
          telephone: SITE.phone,
          email: SITE.email,
          url: "/",
          image: "/favicon.ico",
          priceRange: "££",
          areaServed: ["Andover", "Basingstoke", "Winchester", "Reading", "South East England"],
          address: { "@type": "PostalAddress", addressRegion: SITE.address.region, addressCountry: SITE.address.country },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <div id="services" />
      <ServiceGrid />
      <div className="container-lux">
        <EmergencyBanner />
      </div>
      <WhyChoose />
      <Testimonials />
    </>
  );
}
