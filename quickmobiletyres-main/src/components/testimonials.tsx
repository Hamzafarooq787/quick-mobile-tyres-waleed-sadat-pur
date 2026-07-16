import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    role: "Andover",
    text: "Blew a tyre on the school run. They arrived in 35 minutes, had the right size on the van, fitted and gone within the hour. Absolute lifesavers.",
  },
  {
    name: "James P.",
    role: "Basingstoke",
    text: "Called at 11pm after a puncture on the A34. Fitter met me at the services and had me back on the road in half an hour. Fair price, brilliant service.",
  },
  {
    name: "Priya K.",
    role: "Reading",
    text: "Two tyres replaced at home while I worked. Sent photos of the old tyres, the tread depths and the torque readings. Feels genuinely professional.",
  },
  {
    name: "David R.",
    role: "Winchester",
    text: "Range Rover front tyre gone at 6am. On site by 7:15, off to a meeting by 8. Couldn't fault them – would recommend to anyone.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container-lux">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-gradient-gold">Testimonials</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Drivers we've rescued.</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <figure key={r.name} className="card-lux relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/30" />
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-base md:text-lg leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold">{r.name}</span>
                <span className="text-muted-foreground"> · {r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
