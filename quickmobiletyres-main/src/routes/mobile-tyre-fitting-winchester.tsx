import { createFileRoute } from "@tanstack/react-router";
import { CityLanding } from "@/components/city-landing";
import { cityJsonLd } from "@/lib/city-schema";
import img from "@/assets/jaguar-fpace.jpg.asset.json";
import type { FAQ } from "@/lib/faqs";

const CITY = "Winchester";
const SLUG = "mobile-tyre-fitting-winchester";

const FAQS: FAQ[] = [
  {
    q: "Can you fit tyres in Winchester city centre?",
    a: "Yes. The narrow lanes and permit parking around SO23 aren't a problem – our vans are compact enough to reach most residential streets and we work quickly to stay out of the way.",
  },
  {
    q: "Do you cover the A34 and M3 near Winchester?",
    a: "We do. Winchester Services (M3 J9/J10) and lay-bys along the A34 are frequent meet points for us when drivers have a blowout on route.",
  },
  {
    q: "Can you match premium tyres for a Jaguar, Range Rover or Porsche?",
    a: "Yes. Winchester has a lot of premium and performance vehicles. We source Michelin, Pirelli, Continental and Bridgestone OE-approved fitments – usually within the hour.",
  },
  {
    q: "Do you fit tyres at homes in the surrounding villages?",
    a: "Absolutely – Kings Worthy, Twyford, Colden Common, Alresford, Sparsholt, Otterbourne and the wider SO21/SO22 area are all part of our regular patch.",
  },
];

export const Route = createFileRoute("/mobile-tyre-fitting-winchester")({
  head: () => ({
    meta: [
      { title: "Mobile Tyre Fitting Winchester | 24/7 Home & Roadside | Quick Mobile Tyres" },
      {
        name: "description",
        content:
          "Mobile tyre fitting across Winchester, SO21–SO23 and the M3 / A34. Premium and OE fitments, home or roadside, 24/7. Call 0330 043 8196.",
      },
      { property: "og:title", content: "Mobile Tyre Fitting Winchester · Quick Mobile Tyres" },
      { property: "og:description", content: "Premium mobile tyre fitting across Winchester and the surrounding villages." },
      { property: "og:url", content: `/${SLUG}` },
      
    ],
    links: [{ rel: "canonical", href: `/${SLUG}` }],
    scripts: cityJsonLd({ city: CITY, slug: SLUG, faqs: FAQS }),
  }),
  component: () => (
    <CityLanding
      city={CITY}
      slug={SLUG}
      heroImage="/mobile-tyre-fitting-1200x1600.webp"
      heroImageAlt="Mobile tyre fitting Winchester – Jaguar F-Pace on a residential road having its tyre changed"
      intro="Premium mobile tyre fitting for Winchester drivers. From city centre terraces to the surrounding SO21 villages – and the M3/A34 that connects them – we bring the tyre bay to you."
      responseNote="Typical arrival 45 minutes across Winchester"
      localContext={[
        "Winchester's mix of historic streets and fast trunk roads makes it a very particular tyre patch. In town we handle everything from tight residential parking in Fulflood and Highcliffe to the busy commuter hubs around the station.",
        "Out of town we cover Kings Worthy, Twyford, Alresford, Sparsholt and Colden Common, plus regular emergency work on the A34 and around Winchester Services on the M3 (J9/J10).",
        "The area has a lot of premium and performance vehicles, so our vans carry the tools for OE-approved and run-flat fitments – Jaguar, Range Rover, BMW, Porsche and Audi are all in a day's work.",
      ]}
      faqs={FAQS}
    />
  ),
});
