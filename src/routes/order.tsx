import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ShoppingBasket,
  UtensilsCrossed,
  Package,
  Heart,
  MessageCircle,
  Clock,
  Truck,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order — NYARUKA HAHA" },
      { name: "description", content: "Place your personal shopping order with NYARUKA HAHA in Kigali." },
      { property: "og:title", content: "Order — NYARUKA HAHA" },
      { property: "og:description", content: "Place your personal shopping order with NYARUKA HAHA in Kigali." },
    ],
  }),
  component: OrderPage,
});

const categories = [
  { id: "vegetables", icon: ShoppingBasket, title: "Vegetables & Fruits", desc: "Fresh produce from Kigali markets." },
  { id: "cooked", icon: UtensilsCrossed, title: "Cooked Food Pickup", desc: "Restaurant meals collected & delivered hot." },
  { id: "simple", icon: Package, title: "Simple Goods", desc: "Pharmacy, household basics, small errands." },
  { id: "favorites", icon: Heart, title: "Your Favorites", desc: "Recurring weekly basket — set it & forget it." },
];

const tiers = [
  { id: "morning", icon: Clock, title: "Next Morning", price: "10,000", desc: "Order before 8pm, receive before breakfast." },
  { id: "rush", icon: Truck, title: "Same-Day Rush", price: "15,000", desc: "Need it today? We move fast." },
];

function OrderPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const canProceed = selectedCategory && selectedTier;

  const handleWhatsApp = () => {
    const cat = categories.find((c) => c.id === selectedCategory)?.title || "";
    const tier = tiers.find((t) => t.id === selectedTier)?.title || "";
    const text = `Hi NYARUKA HAHA! I'd like to place an order.\n\nCategory: ${cat}\nDelivery: ${tier}\n\nPlease guide me through the next steps.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition mb-8"
        >
          <ArrowLeft className="size-4" /> Back to home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">Start your order</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">What do you need today?</h1>
          <p className="mt-3 text-muted-foreground max-w-lg">
            Pick a category and delivery speed. We'll take it from there on WhatsApp.
          </p>
        </div>

        {/* Step 1 — Category */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
              1
            </div>
            <h2 className="text-lg font-bold">Choose a category</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((c) => {
              const active = selectedCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`relative p-6 rounded-3xl border text-left transition hover:-translate-y-0.5 hover:shadow-lg ${
                    active
                      ? "border-primary bg-primary/5 shadow-primary/10"
                      : "border-border bg-card hover:shadow-primary/5"
                  }`}
                >
                  {active && (
                    <div className="absolute top-4 right-4 text-primary">
                      <CheckCircle2 className="size-5" />
                    </div>
                  )}
                  <div className={`size-10 rounded-2xl flex items-center justify-center mb-4 ${active ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                    <c.icon className="size-5" />
                  </div>
                  <h3 className="font-bold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2 — Delivery tier */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
              2
            </div>
            <h2 className="text-lg font-bold">How fast do you need it?</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {tiers.map((t) => {
              const active = selectedTier === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTier(t.id)}
                  className={`relative p-6 rounded-3xl border text-left transition hover:-translate-y-0.5 hover:shadow-lg ${
                    active
                      ? t.id === "morning"
                        ? "border-primary bg-primary/5 shadow-primary/10"
                        : "border-secondary bg-secondary/5 shadow-secondary/10"
                      : "border-border bg-card"
                  }`}
                >
                  {active && (
                    <div className={`absolute top-4 right-4 ${t.id === "morning" ? "text-primary" : "text-secondary"}`}>
                      <CheckCircle2 className="size-5" />
                    </div>
                  )}
                  <div className={`size-10 rounded-2xl flex items-center justify-center mb-4 ${active ? (t.id === "morning" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground") : t.id === "morning" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                    <t.icon className="size-5" />
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-black">{t.price}</span>
                    <span className="text-sm font-medium text-muted-foreground">RWF</span>
                  </div>
                  <h3 className="font-bold">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Summary + CTA */}
        <div className="p-8 rounded-3xl bg-foreground text-background text-center">
          <h3 className="text-2xl font-black tracking-tight">
            {canProceed ? "Ready to order!" : "Select a category & delivery to continue"}
          </h3>
          {canProceed && (
            <p className="mt-2 opacity-70">
              {categories.find((c) => c.id === selectedCategory)?.title} · {" "}
              {tiers.find((t) => t.id === selectedTier)?.title}
            </p>
          )}
          <Button
            size="lg"
            disabled={!canProceed}
            onClick={handleWhatsApp}
            className="mt-6 gap-2 rounded-full text-base h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-40"
          >
            <MessageCircle className="size-5" /> Continue on WhatsApp
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
