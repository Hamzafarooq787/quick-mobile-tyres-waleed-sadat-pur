import { createFileRoute } from "@tanstack/react-router";
import { CityLanding } from "@/components/city-landing";
import { cityJsonLd } from "@/lib/city-schema";
import img from "@/assets/bmw-m4.jpg.asset.json";
import type { FAQ } from "@/lib/faqs";

const CITY = "Basingstoke";
const SLUG = "mobile-tyre-fitting-basingstoke";

const FAQS: FAQ[] = [
  {
    q: "Do you cover the M3 around Basingstoke?",
    a: "Yes. We can't work on the live motorway itself, but we regularly meet drivers at Fleet Services, Winchester Services or a safe lay-by off J6, J7 or J8 to fit tyres and get them moving.",
  },
  {
    q: "Can you fit tyres at Chineham Business Park?",
    a: "Definitely. Chineham, Basing View and Houndmills are some of our regular stops – we'll fit while you carry on with your day.",
  },
  {
    q: "Do you handle run-flat tyres on BMWs and Minis?",
    a: "Yes. Basingstoke has a lot of BMW and Mini drivers with run-flats and low-profile fitments. We carry the correct tools to fit them safely without damaging the sidewall.",
  },
  {
    q: "What areas around Basingstoke do you cover?",
    a: "All Basingstoke postcodes (RG21–RG29), plus Old Basing, Chineham, Hatch Warren, Overton, Oakley, Tadley and out to Alton and Odiham.",
  },
];

export const Route = createFileRoute("/mobile-tyre-fitting-basingstoke")({
  head: () => ({
    meta: [
      { title: "Mobile Tyre Fitting Basingstoke | 24/7 Emergency Service | Quick Mobile Tyres" },
      {
        name: "description",
        content:
          "24/7 mobile tyre fitting across Basingstoke, RG21–RG29 and the M3. Home, work or roadside. Run-flats, performance and van tyres. Call 0330 043 8196.",
      },
      { property: "og:title", content: "Mobile Tyre Fitting Basingstoke · Quick Mobile Tyres" },
      { property: "og:description", content: "Emergency mobile tyre fitting in Basingstoke, the M3 corridor and surrounding villages." },
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
      heroImageAlt="Mobile tyre fitting Basingstoke – technician working on a BMW M4 near the M3"
      intro="Basingstoke's go-to mobile tyre team. We fit, repair and replace tyres across town, the business parks and the M3 corridor – 24 hours a day, 7 days a week."
      responseNote="Typical arrival under an hour across Basingstoke"
      localContext={[
        "As one of the biggest commuter towns in Hampshire, Basingstoke's M3 junctions (J6, J7) see a huge amount of high-mileage traffic. Blowouts, sidewall bulges and slow punctures are almost daily calls for us here.",
        "We work across all Basingstoke postcodes – town centre, Brighton Hill, Popley, Chineham, Hatch Warren, Old Basing and the surrounding villages. Business parks like Chineham, Houndmills and Basing View are on our regular route so office-hour fittings are easy to schedule.",
        "Because Basingstoke has such a mix of premium cars, we're set up for BMW and Mini run-flats, low-profile performance tyres and light commercial vehicles – all with correct torque and balancing on the driveway.",
      ]}
      faqs={FAQS}
    />
  ),
});
