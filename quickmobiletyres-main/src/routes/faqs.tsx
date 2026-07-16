import { createFileRoute } from "@tanstack/react-router";
import { FAQList } from "@/components/faq-list";
import { EmergencyBanner } from "@/components/call-button";
import { MAIN_FAQS } from "@/lib/faqs";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Quick Mobile Tyres" },
      {
        name: "description",
        content:
          "Common questions about our 24/7 mobile tyre fitting and repair service, response times, payment methods and emergency callouts.",
      },
      { property: "og:title", content: "FAQs | Quick Mobile Tyres" },
      { property: "og:description", content: "Answers about mobile tyre fitting, emergency callouts and pricing." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: MAIN_FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQsPage,
});

function FAQsPage() {
  return (
    <>
      <section className="bg-ink text-ink-foreground py-16 md:py-20">
        <div className="container-lux max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-gradient-gold">FAQs</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">Frequently asked questions.</h1>
          <p className="mt-4 text-white/75 text-lg">
            Everything drivers usually want to know before calling. Still not sure? Just pick up the phone.
          </p>
        </div>
      </section>

      <section className="container-lux py-14 md:py-20 max-w-3xl">
        <FAQList items={MAIN_FAQS} />
        <div className="mt-10">
          <EmergencyBanner>Prefer to just talk to someone?</EmergencyBanner>
        </div>
      </section>
    </>
  );
}
