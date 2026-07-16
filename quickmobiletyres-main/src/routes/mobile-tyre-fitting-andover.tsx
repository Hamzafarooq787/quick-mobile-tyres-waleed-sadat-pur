import { createFileRoute } from "@tanstack/react-router";
import { CityLanding } from "@/components/city-landing";
import { cityJsonLd } from "@/lib/city-schema";
import img from "@/assets/bmw-3-series.jpg.asset.json";
import type { FAQ } from "@/lib/faqs";

const CITY = "Andover";
const SLUG = "mobile-tyre-fitting-andover";

const FAQS: FAQ[] = [
  {
    q: "How quickly can you get to me in Andover?",
    a: "For most Andover postcodes (SP10, SP11) we're on scene within 30–45 minutes. If you're on the A303 heading east or west we'll aim for the nearest safe junction.",
  },
  {
    q: "Do you cover the A303 for roadside tyre fitting?",
    a: "Yes. The A303 corridor around Andover is one of our busiest patches. Pull off at a lay-by or the next junction and call – we'll meet you there.",
  },
  {
    q: "Can you replace a tyre at Walworth Business Park?",
    a: "Absolutely. We regularly fit tyres in car parks around Walworth and Portway estates while drivers work – no need to book time off.",
  },
  {
    q: "Do you offer late-night callouts in Andover?",
    a: "Yes, 24 hours a day. If you've had a blowout coming home from Basingstoke or Salisbury late at night, our emergency line is answered around the clock.",
  },
];

export const Route = createFileRoute("/mobile-tyre-fitting-andover")({
  head: () => ({
    meta: [
      { title: "Mobile Tyre Fitting Andover | 24/7 Emergency Callouts | Quick Mobile Tyres" },
      {
        name: "description",
        content:
          "Mobile tyre fitting in Andover, SP10 & SP11. 24/7 emergency callouts across town, the A303 and business parks. Call 0330 043 8196 for immediate help.",
      },
      { property: "og:title", content: "Mobile Tyre Fitting Andover · Quick Mobile Tyres" },
      { property: "og:description", content: "Fast mobile tyre fitting and repair across Andover and the A303." },
      { property: "og:url", content: `/${SLUG}` },
      { property: "og:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: `/${SLUG}` }],
    scripts: cityJsonLd({ city: CITY, slug: SLUG, faqs: FAQS }),
  }),
  component: () => (
    <CityLanding
      city={CITY}
      slug={SLUG}
      heroImage={img.url}
      heroImageAlt="Mobile tyre fitting Andover – technician changing a wheel on a BMW near Andover town centre"
      intro="Fast, professional mobile tyre fitting across Andover, SP10, SP11 and the A303 corridor. We come to your home, office car park or roadside – day or night – with everything needed to get you moving again."
      responseNote="Typical arrival 30–45 minutes across Andover"
      localContext={[
        "Andover sits at the crossroads of the A303 and A343 – two of the busiest routes into the South West. That means a lot of long-distance drivers, a lot of pothole damage, and a lot of blown tyres. We're on call across the town centre, Charlton, Weyhill, Ludgershall and out towards Hurstbourne Tarrant.",
        "Whether it's a school-run puncture in Anton, a work-vehicle blowout on Walworth Business Park, or a stranded family on the A303 near Bullington Cross, one call gets a fully equipped van sent your way.",
        "We stock the most common Andover car and van sizes on the vans and can source premium brands within the hour when a specific fitment is needed.",
      ]}
      faqs={FAQS}
    />
  ),
});
