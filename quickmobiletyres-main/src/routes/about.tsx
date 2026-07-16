import { createFileRoute } from "@tanstack/react-router";
import { WhyChoose } from "@/components/why-choose";
import { EmergencyBanner } from "@/components/call-button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Quick Mobile Tyres" },
      {
        name: "description",
        content:
          "Quick Mobile Tyres is a trusted mobile tyre technician team offering fast, honest, professional emergency tyre fitting and repair. Call 0330 043 8196.",
      },
      { property: "og:title", content: "About Us | Quick Mobile Tyres" },
      { property: "og:description", content: "Experienced mobile tyre technicians. Fast response, fair prices, professional work." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-ink-foreground py-16 md:py-20">
        <div className="container-lux max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-gradient-gold">About Us</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            The mobile tyre team drivers actually trust.
          </h1>
          <p className="mt-4 text-white/75 text-lg">
            We started Quick Mobile Tyres for one reason: getting a puncture shouldn't ruin your day.
            No queues, no over-priced call-outs, no upsells – just a qualified fitter, a fully stocked van, and honest work.
          </p>
        </div>
      </section>

      {/* Main story + image */}
      <section className="container-lux py-14 md:py-20 grid gap-10 lg:grid-cols-2 items-center">
        <img
          src="/roadside-tyre-fitting-1600x900.webp"
          alt="Quick Mobile Tyres technician fitting a tyre at the roadside"
          width={1600}
          height={900}
          className="w-full aspect-[4/3] object-cover rounded-3xl shadow-lg"
        />
        <div className="space-y-5 text-base leading-relaxed">
          <p>
            With years of experience under the bonnet – and under a lot of jacks – our fitters have handled everything
            from school-run flats to motorway blowouts on premium 4x4s. Every job gets the same care whether it's a single
            puncture repair or a full set of four.
          </p>
          <p>
            We're built around <strong>fast emergency response</strong>. Our vans are stocked with the most common car and van sizes,
            and we can source premium brands within the hour when a specific fitment is needed.
          </p>
          <p>
            <strong>Honest pricing</strong> is non-negotiable. You'll get an upfront quote before we roll a wheel – no hidden call-out fees,
            no "while we're here" surprises. If we can safely repair a tyre to British Standard, we'll always offer that first.
          </p>
          <p>
            Above all, we're <strong>customer-first</strong>. That means clear communication, live ETAs, tidy work,
            and treating your driveway or car park like our own.
          </p>
        </div>
      </section>

      {/* Photo gallery – three images */}
      <section className="bg-muted/40 py-14 md:py-20">
        <div className="container-lux">
          <div className="text-xs font-semibold uppercase tracking-widest text-gradient-gold">Our Work</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Seen at the roadside, driveway and motorway.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src="/mobile-tyre-fitting-1200x1600.webp"
              alt="Mobile tyre fitting service"
              width={1200}
              height={1600}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover rounded-2xl shadow"
            />
            <img
              src="/mobile-tyre-repair-1200x1600.webp"
              alt="Mobile tyre repair – puncture fixed to BS AU 159"
              width={1200}
              height={1600}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover rounded-2xl shadow"
            />
            <img
              src="/emergency-tyre-fitting-repair-1200x1600.webp"
              alt="Emergency tyre fitting and repair"
              width={1200}
              height={1600}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover rounded-2xl shadow sm:col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </section>

      {/* Second image + text – reversed */}
      <section className="container-lux py-14 md:py-20 grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-5 text-base leading-relaxed lg:order-1">
          <div className="text-xs font-semibold uppercase tracking-widest text-gradient-gold">Every road, every time</div>
          <h2 className="font-display text-3xl font-bold">From quiet driveways to busy motorways.</h2>
          <p>
            Whether you're stuck on a dual carriageway hard shoulder or just need a set of four replaced before a long trip,
            our response is the same – fast, safe and professional.
          </p>
          <p>
            We work across Andover, Basingstoke, Winchester, Reading and the surrounding areas,
            covering everything from residential streets to business parks and major A-roads.
          </p>
        </div>
        <img
          src="/motorway-tyre-fitting-900x1600.webp"
          alt="Motorway tyre fitting – technician working safely at the roadside"
          width={900}
          height={1600}
          loading="lazy"
          className="w-full aspect-[3/4] object-cover rounded-3xl shadow-lg lg:order-2"
        />
      </section>

      <WhyChoose />

      <div className="container-lux pb-8">
        <EmergencyBanner>Ready when you are – call any time, day or night.</EmergencyBanner>
      </div>
    </>
  );
}
