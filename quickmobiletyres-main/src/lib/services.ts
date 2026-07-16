import bmw3 from "@/assets/bmw-3-series.jpg.asset.json";
import bmwX3 from "@/assets/bmw-x3.jpg.asset.json";
import g63 from "@/assets/mercedes-g63.jpg.asset.json";
import m4 from "@/assets/bmw-m4.jpg.asset.json";
import fpace from "@/assets/jaguar-fpace.jpg.asset.json";
import q8 from "@/assets/audi-q8.jpg.asset.json";
import rover from "@/assets/range-rover.jpg.asset.json";

export type Service = {
  slug: string;
  title: string;
  short: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  intro: string;
  bullets: string[];
  body: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "mobile-tyre-fitting",
    title: "Mobile Tyre Fitting",
    short: "New tyres fitted at your home, work or roadside.",
    metaDescription:
      "Professional mobile tyre fitting at home, work or roadside. Same-day service, quality tyres, fully equipped vans. Call Quick Mobile Tyres now.",
    image: bmw3.url,
    imageAlt: "Mobile tyre fitting on a BMW 3 Series at the roadside",
    intro:
      "Skip the tyre shop queue. Our fully equipped vans arrive at your driveway, office car park or the roadside and fit new tyres on the spot – usually within the hour.",
    bullets: [
      "Wheel removal, tyre change and torque-set refit",
      "Correct balancing on-site with digital balancer",
      "All car, van and light 4x4 tyre sizes",
      "Old tyre taken away and recycled",
    ],
    body: [
      "Every fitting is carried out by a qualified mobile tyre technician using hydraulic jacks, calibrated torque wrenches and modern tyre machines. We match the exact size, load and speed rating stamped on your existing tyres so your handling, warranty and insurance stay intact.",
      "Because we come to you, there's no need to drive on a damaged tyre or wait around at a garage. Book in the morning and most jobs are done before lunch.",
    ],
  },
  {
    slug: "mobile-tyre-repair",
    title: "Mobile Tyre Repair",
    short: "Fast puncture repairs to British Standard BS AU 159.",
    metaDescription:
      "Mobile tyre repair to British Standard BS AU 159. Punctures, slow leaks and valve replacements fixed at your location. Call now.",
    image: fpace.url,
    imageAlt: "Mobile tyre repair on a Jaguar F-Pace at a residential address",
    intro:
      "If your puncture is in the repairable zone, a proper internal patch-plug is faster, cheaper and safer than a replacement. We assess honestly and only repair when it's safe.",
    bullets: [
      "Full internal inspection – not just a plug",
      "Combination patch-plug to BS AU 159",
      "Valve replacement and re-balance included",
      "Turnaround typically 30–45 minutes",
    ],
    body: [
      "A quick external plug from a supermarket kit isn't a legal, long-term fix. We break the tyre off the rim, inspect the inner liner for hidden damage, and bond a vulcanised patch-plug from the inside. That's the only repair method that meets the British Standard.",
      "If the damage is outside the safe zone we'll tell you straight away and offer a like-for-like replacement at a fair price.",
    ],
  },
  {
    slug: "emergency-tyre-fitting-and-repair",
    title: "Emergency Tyre Fitting & Repair",
    short: "Rapid response when you can't wait until tomorrow.",
    metaDescription:
      "24/7 emergency tyre fitting and repair. Fast response mobile tyre technicians ready to get you back on the road. Call Quick Mobile Tyres.",
    image: m4.url,
    imageAlt: "Emergency tyre fitting on a BMW M4 at the side of the road",
    intro:
      "Stuck with a shredded tyre before a school run, work meeting or long drive? Our emergency line is answered around the clock and a technician is dispatched immediately.",
    bullets: [
      "24/7 dispatch, including weekends and bank holidays",
      "Live ETA the moment you book",
      "Common sizes carried in the van",
      "Card, contactless and bank transfer accepted",
    ],
    body: [
      "Emergency callouts are our bread and butter. We keep the most common car and van sizes stocked on board and can source premium and mid-range brands within the hour when needed.",
      "Whether you're blocked in on a driveway, stranded on a slip road or need to be at the airport in 90 minutes, one call gets a fitter moving.",
    ],
  },
  {
    slug: "flat-tyre-service",
    title: "Flat Tyre Service",
    short: "Flat, blowout or slow puncture – sorted at your location.",
    metaDescription:
      "Flat tyre service at your home, work or roadside. Repair or replace with a mobile tyre technician who comes to you. Call now for immediate help.",
    image: bmwX3.url,
    imageAlt: "Flat tyre service on a BMW X3 on a gravel driveway",
    intro:
      "A flat tyre shouldn't ruin your day. Whether it went down overnight or you've just felt the steering pull, we come to you with a fully stocked van and the right tools.",
    bullets: [
      "Diagnose repair vs replacement honestly",
      "Space-saver spare fitted if you prefer to drive to us",
      "Nitrogen and standard air top-up",
      "Locking wheel nut removal when required",
    ],
    body: [
      "Driving on a flat, even for a short distance, can destroy the sidewall and damage the wheel itself. Call us instead – in most cases we'll be with you before roadside recovery would even dispatch a truck.",
      "We also handle run-flats and low-profile performance tyres that many general recovery firms won't touch.",
    ],
  },
  {
    slug: "roadside-tyre-fitting",
    title: "Roadside Tyre Fitting",
    short: "Safe, quick-turnaround roadside tyre changes.",
    metaDescription:
      "Roadside tyre fitting from a fully equipped mobile technician. Fast, safe and available around the clock. Call Quick Mobile Tyres now.",
    image: rover.url,
    imageAlt: "Roadside tyre fitting on a Range Rover at a busy A-road",
    intro:
      "Broken down on a country lane, dual carriageway or lay-by? A qualified fitter with hi-vis, warning triangles and the right kit will be with you fast.",
    bullets: [
      "Hi-vis and traffic-aware working practices",
      "Trolley jack suitable for SUVs and light vans",
      "Portable compressor and torque wrench on board",
      "Photographic proof of work sent after every job",
    ],
    body: [
      "Roadside work is skilled work. Our fitters are trained to position the van as a safety barrier, deploy warning devices and get the job completed as quickly as possible so you're not exposed to passing traffic longer than necessary.",
      "If your location isn't safe to work in we'll advise you, coordinate with recovery if needed and get you moving from the nearest safe point.",
    ],
  },
  {
    slug: "motorway-tyre-fitting",
    title: "Motorway Tyre Fitting",
    short: "Get off the hard shoulder safely and quickly.",
    metaDescription:
      "Motorway tyre fitting with rapid response times. Hard shoulder callouts handled safely by experienced mobile tyre technicians. Call now.",
    image: q8.url,
    imageAlt: "Motorway tyre fitting service preparing to change a wheel on an Audi Q8",
    intro:
      "The hard shoulder is the most dangerous place to break down. Call us first – we work closely with recovery operators and can meet you at a safe location off the motorway.",
    bullets: [
      "Advice on safe positioning while you wait",
      "Coordination with National Highways and recovery firms",
      "Fitting at motorway services or nearby safe area",
      "Fast turnaround so you can complete your journey",
    ],
    body: [
      "For safety reasons, tyre work can't be carried out on a live motorway hard shoulder. What we can do is get to you extremely quickly at the next junction, motorway services or a nearby lay-by, minimising the time you're stranded.",
      "If you're on a smart motorway with no hard shoulder, always follow National Highways guidance first – then call us to fit or repair as soon as you're safe.",
    ],
  },
  {
    slug: "mobile-tyre-replacement",
    title: "Mobile Tyre Replacement",
    short: "Full mobile tyre replacement, up to four at a time.",
    metaDescription:
      "Mobile tyre replacement at your home or work. Premium, mid-range and budget brands. Fitted, balanced and old tyres recycled. Call now.",
    image: g63.url,
    imageAlt: "Mobile tyre replacement on a Mercedes G63 AMG on a driveway",
    intro:
      "Whether you need a single tyre matched to a pair, or a full set of four replaced, our mobile tyre replacement service brings the tyre bay to your driveway.",
    bullets: [
      "Premium, mid-range and value brands",
      "Correct fitment for run-flat and OE-approved specs",
      "Balancing and torque-setting on every wheel",
      "No waste – old tyres removed and recycled",
    ],
    body: [
      "We stock and can quickly source Michelin, Continental, Pirelli, Bridgestone, Goodyear, Avon, Falken and a range of quality budget brands. Not sure what you need? Send us a photo of the sidewall and we'll quote back within minutes.",
      "Every replacement includes wheel balancing, valve replacement and correct torque to manufacturer spec – the same standard you'd expect from a main dealer, but without leaving your driveway.",
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
