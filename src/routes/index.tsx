import { createFileRoute } from "@tanstack/react-router";
import heroMarket from "@/assets/hero-market.jpg";
import { Button } from "@/components/ui/button";
import {
  ShoppingBasket,
  UtensilsCrossed,
  Package,
  Heart,
  MessageCircle,
  Clock,
  Truck,
  CheckCircle2,
  Star,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NYARUKA HAHA — We Shop. You Receive. Next Morning." },
      { name: "description", content: "Kigali's personal shopping & delivery service. Vegetables, cooked food, and daily goods at your door — next morning or same-day rush." },
      { property: "og:title", content: "NYARUKA HAHA — Kigali Shopping & Delivery" },
      { property: "og:description", content: "We shop. You receive. Next morning. Kigali's trusted personal shopping & delivery." },
    ],
  }),
  component: Index,
});

const categories = [
  { icon: ShoppingBasket, title: "Vegetables & Fruits", desc: "Fresh from Kigali markets, picked the morning of delivery." },
  { icon: UtensilsCrossed, title: "Cooked Food Pickup", desc: "Your favorite restaurant meal, collected and delivered hot-bagged." },
  { icon: Package, title: "Simple Goods", desc: "Pharmacy items, household basics, small errands handled." },
  { icon: Heart, title: "Your Favorites", desc: "Recurring weekly basket of exactly what your family loves." },
];

const steps = [
  { n: "01", title: "Tell us on WhatsApp", desc: "Send your list. Voice note, photo, or text — whatever's easy." },
  { n: "02", title: "We shop for you", desc: "Our shopper picks, weighs, and confirms prices with you before paying." },
  { n: "03", title: "Delivered to your door", desc: "Next morning by default. Same-day rush if you need it now." },
];

const testimonials = [
  { name: "Aline M.", role: "Kimihurura", quote: "I send my list at night, food arrives before breakfast. It changed my week." },
  { name: "Jean-Paul K.", role: "Nyarutarama", quote: "The shopper texted me a photo of the fish before buying. That's the trust I needed." },
  { name: "Sandrine U.", role: "Kacyiru", quote: "Recurring Friday basket. I haven't been to the market in 3 months and I don't miss it." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroMarket}
            alt="Kigali market vegetables and motorcycle delivery"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 grid md:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1 text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-6">
              <span className="size-2 rounded-full bg-secondary animate-pulse" />
              Now serving Kigali
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-foreground">
              We Shop.<br/>
              You Receive.<br/>
              <span className="text-primary">Next Morning.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Kigali's personal shopping & delivery service. Skip the market — your vegetables, meals, and daily goods arrive at your door.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="gap-2 rounded-full text-base h-12 px-6">
                <MessageCircle className="size-5" /> Start order on WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-6 bg-card/70 backdrop-blur">
                See how it works
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm">
              <div>
                <div className="text-2xl font-black text-foreground">10,000</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">RWF · Next morning</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-2xl font-black text-foreground">15,000</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">RWF · Same-day rush</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">Three steps</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">From your list to your door.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary transition">
                <div className="text-6xl font-black text-accent/40 group-hover:text-accent transition">{s.n}</div>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-24 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">Four categories</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Anything you'd buy yourself — we'll get it.</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Excludes furniture, electronics, construction materials, prescription meds, and anything illegal.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c) => (
              <div key={c.title} className="p-7 rounded-3xl bg-card border border-border hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition">
                <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <c.icon className="size-6" />
                </div>
                <h3 className="font-bold text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing strip */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="p-10 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute -right-10 -top-10 size-48 rounded-full bg-accent/30 blur-3xl" />
            <Clock className="size-8 mb-6" />
            <div className="text-xs font-bold tracking-widest uppercase opacity-80">Next morning</div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-6xl font-black">10,000</span>
              <span className="text-lg font-medium opacity-80">RWF</span>
            </div>
            <p className="mt-4 opacity-90 max-w-sm">Order before 8pm, receive before breakfast. Our standard service.</p>
          </div>
          <div className="p-10 rounded-3xl bg-secondary text-secondary-foreground relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 size-48 rounded-full bg-accent/30 blur-3xl" />
            <Truck className="size-8 mb-6" />
            <div className="text-xs font-bold tracking-widest uppercase opacity-80">Same-day rush</div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-6xl font-black">15,000</span>
              <span className="text-lg font-medium opacity-80">RWF</span>
            </div>
            <p className="mt-4 opacity-90 max-w-sm">Need it today? We move fast. Peak-day surcharges announced 48h ahead.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">Real Kigali families</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">They stopped going to the market.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="p-8 rounded-3xl bg-card border border-border">
                <div className="flex gap-0.5 text-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                </div>
                <blockquote className="text-lg leading-snug font-medium">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-bold">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <CheckCircle2 className="size-10 mx-auto mb-6 text-accent" />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Send your list. Sleep. Eat.
          </h2>
          <p className="mt-5 text-lg opacity-70 max-w-xl mx-auto">
            No app to download. No account to make. Just a WhatsApp message.
          </p>
          <Button size="lg" className="mt-8 gap-2 rounded-full text-base h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <MessageCircle className="size-5" /> Message us on WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-baseline gap-2">
            <span className="font-black text-foreground">NYARUKA</span>
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Haha</span>
          </div>
          <div>© {new Date().getFullYear()} · Kigali, Rwanda</div>
        </div>
      </footer>
    </div>
  );
}
