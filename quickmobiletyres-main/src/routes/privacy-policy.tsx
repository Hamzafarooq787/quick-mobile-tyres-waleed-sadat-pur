import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Quick Mobile Tyres" },
      { name: "description", content: "How Quick Mobile Tyres collects, uses and protects your personal data." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="container-lux py-14 md:py-20 max-w-3xl">
      <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
      <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed">
        <p>{SITE.name} respects your privacy. This policy explains what we collect, why, and how we protect it.</p>
        <h2 className="font-display text-xl font-semibold mt-8">What we collect</h2>
        <p>When you call or submit an enquiry we collect your name, phone number, email, vehicle details and location. This is used solely to arrange and complete your tyre service.</p>
        <h2 className="font-display text-xl font-semibold mt-8">How we use it</h2>
        <p>To dispatch a technician, provide quotes, complete work, take payment and follow up. We do not sell or share your data with third parties for marketing.</p>
        <h2 className="font-display text-xl font-semibold mt-8">Retention</h2>
        <p>Job records are kept for accounting purposes as required by UK law. You can request deletion of your personal data at any time by emailing {SITE.email}.</p>
        <h2 className="font-display text-xl font-semibold mt-8">Contact</h2>
        <p>Questions? Email <a href={SITE.emailHref} className="underline font-semibold">{SITE.email}</a> or call <a href={SITE.phoneTel} className="underline font-semibold">{SITE.phone}</a>.</p>
      </div>
    </section>
  );
}
