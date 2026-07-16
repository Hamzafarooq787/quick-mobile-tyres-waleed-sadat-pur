import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES, type Service } from "@/lib/services";

export function ServiceGrid({
  heading = "Our Services",
  intro = "From roadside emergencies to scheduled replacements – one number for every mobile tyre need.",
  services = SERVICES,
}: {
  heading?: string;
  intro?: string;
  services?: Service[];
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-lux">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-gradient-gold">Services</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 text-muted-foreground">{intro}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="card-lux group flex flex-col overflow-hidden !p-0"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                  width={640}
                  height={480}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
