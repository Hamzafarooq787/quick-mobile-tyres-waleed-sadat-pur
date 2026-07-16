import {
  Zap,
  Clock,
  Siren,
  Wrench,
  BadgePoundSterling,
  Cog,
  ShieldCheck,
  Handshake,
  Star,
} from "lucide-react";

const items = [
  { icon: Zap, title: "Fast Response", desc: "Most local callouts reached in under an hour." },
  { icon: Clock, title: "Available 24/7", desc: "Day, night, weekends and bank holidays." },
  { icon: Siren, title: "Emergency Callouts", desc: "Rapid dispatch for punctures, blowouts and flats." },
  { icon: Wrench, title: "Experienced Technicians", desc: "Qualified mobile tyre fitters with years on the road." },
  { icon: BadgePoundSterling, title: "Affordable Prices", desc: "Honest, upfront quotes – no hidden callout fees." },
  { icon: Cog, title: "Professional Equipment", desc: "On-board tyre machines, balancers and torque tools." },
  { icon: ShieldCheck, title: "Quality Tyres", desc: "Premium, mid-range and value brands to suit any budget." },
  { icon: Handshake, title: "Reliable Service", desc: "If we say we'll be there, we'll be there." },
  { icon: Star, title: "Customer Satisfaction", desc: "Hundreds of drivers rescued, one puncture at a time." },
];

export function WhyChoose() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-lux">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-gradient-gold">Why choose us</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
            Premium mobile tyre service, without the premium hassle.
          </h2>
          <p className="mt-3 text-muted-foreground">
            We combine tyre-bay quality with the convenience of coming to you – at home, at work, roadside or motorway.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="card-lux">
              <div className="w-11 h-11 rounded-xl grid place-items-center bg-ink text-gold">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
