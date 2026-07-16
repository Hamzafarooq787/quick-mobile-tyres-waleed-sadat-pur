import { SITE } from "./site";
import type { FAQ } from "./faqs";

export function cityJsonLd({
  city,
  slug,
  faqs,
}: {
  city: string;
  slug: string;
  faqs: FAQ[];
}) {
  return [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `${SITE.name} – ${city}`,
        telephone: SITE.phone,
        email: SITE.email,
        url: `/${slug}`,
        areaServed: city,
        address: { "@type": "PostalAddress", addressLocality: city, addressCountry: SITE.address.country },
        priceRange: "££",
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
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: `Mobile Tyre Fitting ${city}`, item: `/${slug}` },
        ],
      }),
    },
  ];
}
