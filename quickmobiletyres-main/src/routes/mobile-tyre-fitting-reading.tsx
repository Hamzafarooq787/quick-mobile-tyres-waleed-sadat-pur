import { createFileRoute } from "@tanstack/react-router";
import { CityLanding } from "@/components/city-landing";
import { cityJsonLd } from "@/lib/city-schema";
import img from "@/assets/audi-q8.jpg.asset.json";
import type { FAQ } from "@/lib/faqs";

const CITY = "Reading";
const SLUG = "mobile-tyre-fitting-reading";

const FAQS: FAQ[] = [
  {
    q: "Do you cover the M4 around Reading?",
    a: "Yes – J10, J11 and J12 are all part of our regular patch. If you're stranded on the motorway, get to the next junction or Reading Services and call us; we'll meet you there.",
  },
  {
    q: "Can you fit tyres at Green Park or Thames Valley Park?",
    a: "Yes. We regularly service company car parks at Green Park, Thames Valley Park, Winnersh Triangle and Reading International Business Park – no need to leave the office.",
  },
  {
    q: "Do you fit tyres to vans and light commercials in Reading?",
    a: "Absolutely. We fit passenger, 4x4 and light commercial tyres for tradespeople and fleet vehicles across RG1–RG31, keeping your working day moving.",
  },
  {
    q: "What if I have a puncture on the IDR or A33?",
    a: "Pull into a safe side street or car park and call. The IDR and A33 are among our most common callout locations – we know the safe pull-in points and can be with you quickly.",
  },
];

export const Route = createFileRoute("/mobile-tyre-fitting-reading")({
  head: () => ({
    meta: [
      { title: "Mobile Tyre Fitting Reading | M4 & Business Parks | Quick Mobile Tyres" },
      {
        name: "description",
        content:
          "Mobile tyre fitting across Reading, RG1–RG31, the M4 and business parks. Fast emergency callouts 24/7. Call 0330 043 8196.",
      },
      { property: "og:title", content: "Mobile Tyre Fitting Reading · Quick Mobile Tyres" },
      { property: "og:description", content: "24/7 emergency mobile tyre service across Reading and the M4 corridor." },
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
      heroImageAlt="Mobile tyre fitting Reading – Audi Q8 having its rear wheel changed in a Reading car park"
      intro="Reading's 24/7 mobile tyre team. Whether you're office-based at Green Park, driving the M4 or stuck on the IDR, we'll come to you with a fully stocked van and get you moving."
      responseNote="Typical arrival under an hour across Reading"
      localContext={[
        "Reading is one of the busiest commuter and business hubs in the South East, and the tyre workload reflects it. We handle daily emergency callouts across the town centre, Caversham, Tilehurst, Earley, Woodley and Lower Earley.",
        "Along the M4 corridor we're a regular sight at J10, J11 and J12, meeting stranded drivers at services and safe lay-bys after a blowout. On the IDR and A33 we know exactly where the safe pull-in points are.",
        "For the business parks – Green Park, Thames Valley Park, Winnersh Triangle, Reading International – we run scheduled fittings so employees can hand over the keys and get back to work.",
      ]}
      faqs={FAQS}
    />
  ),
});
