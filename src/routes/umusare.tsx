import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  CalendarClock,
  Star,
  ShieldCheck,
  Shirt,
  Ban,
  CreditCard,
  Siren,
  TrendingUp,
  MessageCircle,
  Languages,
  Phone,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/umusare")({
  head: () => ({
    meta: [
      { title: "NYARUKA UMUSARE — Where Elegance Meets Perfection" },
      {
        name: "description",
        content:
          "NYARUKA UMUSARE — Kigali's premium personal driver service. We drive your car. Standard, Premium, Full-Day & Monthly plans. Book in 7 steps.",
      },
      { property: "og:title", content: "NYARUKA UMUSARE — Personal Driver Service in Kigali" },
      {
        property: "og:description",
        content:
          "We drive your car home — safe, elegant, on schedule. Standard RWF 15,000 · Premium RWF 20,000. 24/7 in Kigali.",
      },
    ],
  }),
  component: Umusare,
});

const pricing = [
  { tier: "Standard — Day", price: "RWF 15,000", best: "Volume, daily use, first timers" },
  { tier: "Standard — Night", price: "RWF 18,000", best: "Nightlife, clubs, restaurants" },
  { tier: "Premium — Day", price: "RWF 20,000", best: "Executives, business dinners" },
  { tier: "Premium — Night", price: "RWF 25,000", best: "Hotels, expats, VIP clients" },
  { tier: "Full Day — Standard", price: "RWF 35,000", best: "Weddings, meetings, tourists" },
  { tier: "Full Day — Premium", price: "RWF 45,000", best: "Corporate full-day hire" },
  { tier: "Full Night — Standard", price: "RWF 35,000", best: "Clubs, events, parties" },
  { tier: "Full Night — Premium", price: "RWF 45,000", best: "Galas, VIP evenings" },
  { tier: "Monthly — Standard", price: "200K–300K / month", best: "Families, executives" },
  { tier: "Monthly — Premium", price: "400K–500K / month", best: "Companies, embassies, NGOs" },
];

const bookingSteps = [
  { n: "01", title: "Current location", desc: "GPS opens automatically — or type it manually." },
  { n: "02", title: "Destination", desc: "Route and estimated price calculated instantly." },
  { n: "03", title: "Ride type", desc: "Standard · Premium · Full Day · Full Night." },
  { n: "04", title: "Time", desc: "Pick the exact hour and minute you need the driver." },
  { n: "05", title: "Driver", desc: "Choose your driver — website and app only." },
  { n: "06", title: "Pay upfront", desc: "Mobile Money · Card · Cash (exceptional only)." },
  { n: "07", title: "Confirmed", desc: "Instant SMS + WhatsApp confirmation." },
];

const systems = [
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    desc: "Live driver location and ETA from dispatch to drop-off — Uber-grade visibility. Routes stored 48h for safety.",
  },
  {
    icon: Clock,
    title: "Destination & Time Selection",
    desc: "Tell us exactly when you need the driver. The system calculates dispatch so they arrive on schedule — not early, not late.",
  },
  {
    icon: CalendarClock,
    title: "Monthly Ride Plan",
    desc: "Pre-schedule every ride for the entire month. Same driver. Auto-dispatch. One single monthly payment.",
  },
  {
    icon: Star,
    title: "Driver Rating System",
    desc: "1–5 stars with mandatory written review after every ride. Drivers below 3.8 are auto-flagged for retraining.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Driver Profiles",
    desc: "Name, photo, total rides, star rating, and a verified background-check badge — visible before they arrive.",
  },
  {
    icon: Shirt,
    title: "Premium Dress Code",
    desc: "Premium tier only — pick Smart Casual, Formal/Suit, or Event Wear. Confirmed before the booking is locked.",
  },
  {
    icon: Ban,
    title: "Cancellation Policy",
    desc: "Free before dispatch. RWF 2,000–3,000 within 10 min of dispatch. 20% retained if cancelled mid-ride.",
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Methods",
    desc: "MTN Mobile Money, Airtel Money, Visa/Mastercard, Corporate invoicing, Monthly billing. Cash exceptional only.",
  },
  {
    icon: Siren,
    title: "SOS Emergency Button",
    desc: "Red SOS on screen the entire ride. One tap alerts the ops center with your live GPS — and your trusted contact.",
  },
  {
    icon: TrendingUp,
    title: "Surge Pricing — 1.5×",
    desc: "Peak dates (NYE, holidays, graduations) priced at 1.5×. Always announced 48 hours in advance.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    desc: "Full booking flow inside WhatsApp Business — ride type, location, dispatch — without leaving the chat.",
  },
  {
    icon: Languages,
    title: "Trilingual",
    desc: "Kinyarwanda · English · French. One-tap language toggle on every page.",
  },
];

const dressCodes = [
  { name: "Smart Casual", desc: "Neat, presentable — not overly formal.", suit: "Social occasions, casual evenings" },
  { name: "Formal / Suit", desc: "Business suit or professional attire.", suit: "Corporate meetings, embassy visits" },
  { name: "Event Wear", desc: "Formal wear for major events.", suit: "Weddings, galas, VIP evenings" },
];

function Umusare() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-foreground via-foreground to-primary/40" />
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 text-background">
          <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 backdrop-blur px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            Nyaruka · Part Two
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            UMUSARE.
            <br />
            <span className="text-accent italic font-serif font-light">Where elegance</span>
            <br />
            <span className="text-accent italic font-serif font-light">meets perfection.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl opacity-80 max-w-2xl">
            Kigali's personal driver service. We drive <span className="underline decoration-accent">your</span> car —
            home from dinner, to the airport, around the city for a full day. Safe, scheduled, and dignified.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { label: "Standard Day", price: "15K" },
              { label: "Standard Night", price: "18K" },
              { label: "Premium Day", price: "20K" },
              { label: "Premium Night", price: "25K" },
            ].map((p) => (
              <div key={p.label} className="rounded-2xl bg-background/10 border border-background/20 backdrop-blur p-4">
                <div className="text-3xl font-black">{p.price}</div>
                <div className="text-[10px] uppercase tracking-widest opacity-70 mt-1">{p.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" className="gap-2 rounded-full text-base h-12 px-6 bg-accent text-accent-foreground hover:bg-accent/90">
              <Phone className="size-5" /> Dial 1919 for a driver
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-6 bg-transparent border-background/40 text-background hover:bg-background hover:text-foreground">
              Book on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* The two halves */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl border border-border">
            <div className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Part One</div>
            <h2 className="text-3xl font-black">HAHA · We Shop. You Receive.</h2>
            <p className="mt-3 text-muted-foreground">Personal shopping & next-morning delivery across Kigali.</p>
            <Link to="/" className="mt-5 inline-flex text-sm font-bold text-primary hover:underline">Go to HAHA →</Link>
          </div>
          <div className="p-8 rounded-3xl bg-foreground text-background">
            <div className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Part Two — You're here</div>
            <h2 className="text-3xl font-black">UMUSARE · We Drive. You Relax.</h2>
            <p className="mt-3 opacity-80">Your personal driver — in your car. Day, night, full day, or monthly.</p>
          </div>
        </div>
      </section>

      {/* Booking 7 steps */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Book in 7 steps</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              From tap to dispatch — under a minute.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bookingSteps.map((s) => (
              <div key={s.n} className="p-6 rounded-3xl bg-card border border-border hover:border-primary transition">
                <div className="text-4xl font-black text-accent/60">{s.n}</div>
                <h3 className="mt-3 font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full pricing table */}
      <section className="py-24 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Transparent pricing</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">No hidden fees. Ever.</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Surge 1.5× on peak dates — always announced 48 hours ahead.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <table className="w-full text-left">
              <thead className="bg-foreground text-background text-xs uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-4 font-bold">Tier</th>
                  <th className="px-6 py-4 font-bold">You pay</th>
                  <th className="px-6 py-4 font-bold hidden md:table-cell">Best for</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((p, i) => (
                  <tr key={p.tier} className={i % 2 ? "bg-muted/30" : ""}>
                    <td className="px-6 py-4 font-bold">{p.tier}</td>
                    <td className="px-6 py-4 text-primary font-black">{p.price}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground hidden md:table-cell">{p.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Systems grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Twelve systems</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Every detail engineered for trust.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {systems.map((s) => (
              <div key={s.title} className="p-7 rounded-3xl bg-card border border-border hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition">
                <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <s.icon className="size-6" />
                </div>
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress code */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <Shirt className="size-10 text-accent mb-4" />
            <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Premium tier only</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Dress your driver for the occasion.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {dressCodes.map((d) => (
              <div key={d.name} className="p-7 rounded-3xl border border-background/20 bg-background/5 backdrop-blur">
                <h3 className="font-bold text-xl text-accent">{d.name}</h3>
                <p className="mt-3 opacity-90">{d.desc}</p>
                <p className="mt-4 text-xs uppercase tracking-widest opacity-60">{d.suit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <CheckCircle2 className="size-10 mx-auto mb-6 text-accent" />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Hand us the keys.<br />Sleep on the way home.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            24/7 in Kigali. We never close.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" className="gap-2 rounded-full text-base h-14 px-8">
              <Phone className="size-5" /> Dial 1919
            </Button>
            <Button size="lg" variant="outline" className="gap-2 rounded-full text-base h-14 px-8">
              <MessageCircle className="size-5" /> Book on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-baseline gap-2">
            <span className="font-black text-foreground">NYARUKA</span>
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Umusare</span>
          </div>
          <div>© {new Date().getFullYear()} · Kigali, Rwanda · Strictly Confidential</div>
        </div>
      </footer>
    </div>
  );
}
