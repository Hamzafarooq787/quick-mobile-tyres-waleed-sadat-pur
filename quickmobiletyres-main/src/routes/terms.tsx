import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Quick Mobile Tyres" },
      { name: "description", content: "Terms and conditions for using Quick Mobile Tyres' mobile tyre fitting and repair services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="container-lux py-14 md:py-20 max-w-3xl">
      <h1 className="font-display text-4xl font-bold">Terms &amp; Conditions</h1>
      <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed">
        <p>These terms govern the services provided by {SITE.name}.</p>
        <h2 className="font-display text-xl font-semibold mt-8">Quotes and pricing</h2>
        <p>All quotes are given in good faith based on the information provided. Final pricing may vary if the actual vehicle, tyre size or damage differs from what was described.</p>
        <h2 className="font-display text-xl font-semibold mt-8">Payment</h2>
        <p>Payment is taken on completion of work by card, contactless or bank transfer.</p>
        <h2 className="font-display text-xl font-semibold mt-8">Workmanship</h2>
        <p>All tyre repairs are carried out to British Standard BS AU 159. Where a tyre is deemed unsafe to repair, we will always advise replacement.</p>
        <h2 className="font-display text-xl font-semibold mt-8">Liability</h2>
        <p>We carry public liability insurance. We are not liable for pre-existing damage to wheels, hubs or vehicles disclosed prior to work commencing.</p>
        <h2 className="font-display text-xl font-semibold mt-8">Contact</h2>
        <p>Questions? Email <a href={SITE.emailHref} className="underline font-semibold">{SITE.email}</a> or call <a href={SITE.phoneTel} className="underline font-semibold">{SITE.phone}</a>.</p>
      </div>
    </section>
  );
}
