import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { SERVICES, getService } from "@/lib/services";
import { CallButton, EmergencyBanner } from "@/components/call-button";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} | Quick Mobile Tyres` },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: `${s.title} | Quick Mobile Tyres` },
        { property: "og:description", content: s.metaDescription },
        { property: "og:image", content: s.image },
        { property: "og:url", content: `/services/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
              { "@type": "ListItem", position: 3, name: s.title, item: `/services/${params.slug}` },
            ],
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-lux py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="btn-gold btn-gold-hover mt-6 inline-flex">Back to services</Link>
    </div>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="bg-ink text-ink-foreground py-14 md:py-20">
        <div className="container-lux grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <nav className="text-xs text-white/60">
              <Link to="/" className="hover:text-white">Home</Link> ·{" "}
              <Link to="/services" className="hover:text-white">Services</Link>
            </nav>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
              {service.title}
            </h1>
            <p className="mt-4 text-white/80 text-lg">{service.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CallButton label="Call Now" size="lg" />
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white/90 hover:bg-white/5">
                Message us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div>
            <img
              src={service.image}
              alt={service.imageAlt}
              width={900}
              height={675}
              className="w-full aspect-[4/3] object-cover rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="container-lux py-14 md:py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold">What's included</h2>
          <ul className="mt-6 grid gap-3">
            {service.bullets.map((b: string) => (
              <li key={b} className="flex gap-3 items-start">
                <span className="mt-0.5 w-6 h-6 rounded-full grid place-items-center bg-gold text-ink shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="text-base">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/85">
            {service.body.map((p: string) => <p key={p}>{p}</p>)}
          </div>
        </div>

        <aside className="space-y-6">
          <EmergencyBanner />
          <div className="card-lux">
            <h3 className="font-display text-lg font-semibold">Other services</h3>
            <ul className="mt-4 space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: o.slug }}
                    className="group flex items-center justify-between gap-3 text-sm font-medium"
                  >
                    <span className="group-hover:text-foreground text-foreground/80">{o.title}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
