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
  ChevronLeft,
  Plus,
  Trash2,
  Phone,
  MapPin,
  Wallet,
  Banknote,
  Building2,
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
  {
    id: "vegetables",
    icon: ShoppingBasket,
    title: "Vegetables & Fruits",
    desc: "Fresh produce from Kigali markets.",
    fields: ["Item (e.g. tomatoes)", "Quantity / weight", "Preferred market (optional)"],
  },
  {
    id: "cooked",
    icon: UtensilsCrossed,
    title: "Cooked Food Pickup",
    desc: "Restaurant meals collected & delivered hot.",
    fields: ["Restaurant name", "Dish & quantity", "Special requests (optional)"],
  },
  {
    id: "simple",
    icon: Package,
    title: "Simple Goods",
    desc: "Pharmacy, household basics, small errands.",
    fields: ["Item description", "Quantity", "Preferred shop (optional)"],
  },
  {
    id: "favorites",
    icon: Heart,
    title: "Your Favorites",
    desc: "Recurring weekly basket — set it & forget it.",
    fields: ["Basket name", "Items in basket", "Repeat schedule (weekly / monthly)"],
  },
];

const tiers = [
  { id: "morning", icon: Clock, title: "Next Morning", price: "10,000", desc: "Order before 8pm, receive before breakfast." },
  { id: "rush", icon: Truck, title: "Same-Day Rush", price: "15,000", desc: "Need it today? We move fast." },
];

const paymentMethods = [
  { id: "momo", icon: Wallet, title: "MTN MoMo", desc: "Mobile Money — pay on confirmation." },
  { id: "airtel", icon: Wallet, title: "Airtel Money", desc: "Mobile Money — pay on confirmation." },
  { id: "cod", icon: Banknote, title: "Cash on Delivery", desc: "Pay our driver at your door." },
  { id: "corporate", icon: Building2, title: "Corporate Invoice", desc: "Monthly billing for business accounts." },
];

type Item = { name: string; qty: string; note: string };

function OrderPage() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [items, setItems] = useState<Item[]>([{ name: "", qty: "", note: "" }]);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [contact, setContact] = useState({ name: "", phone: "", address: "", landmark: "" });
  const [payment, setPayment] = useState<string | null>(null);

  const cat = categories.find((c) => c.id === selectedCategory);
  const tier = tiers.find((t) => t.id === selectedTier);
  const pay = paymentMethods.find((p) => p.id === payment);

  const validItems = items.filter((i) => i.name.trim().length > 0);

  const canNext =
    (step === 1 && !!selectedCategory && validItems.length > 0) ||
    (step === 2 && !!selectedTier) ||
    (step === 3 && contact.name.trim() && contact.phone.trim() && contact.address.trim()) ||
    (step === 4 && !!payment) ||
    step === 5;

  const goNext = () => setStep((s) => Math.min(5, s + 1));
  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const addItem = () => setItems((arr) => [...arr, { name: "", qty: "", note: "" }]);
  const removeItem = (idx: number) =>
    setItems((arr) => (arr.length === 1 ? arr : arr.filter((_, i) => i !== idx)));
  const updateItem = (idx: number, key: keyof Item, value: string) =>
    setItems((arr) => arr.map((it, i) => (i === idx ? { ...it, [key]: value } : it)));

  const handleWhatsApp = () => {
    const itemLines = validItems
      .map((i, n) => `  ${n + 1}. ${i.name}${i.qty ? ` — ${i.qty}` : ""}${i.note ? ` (${i.note})` : ""}`)
      .join("\n");
    const text =
      `Hi NYARUKA HAHA! I'd like to place an order.\n\n` +
      `Category: ${cat?.title}\n` +
      `Items:\n${itemLines}\n\n` +
      `Delivery: ${tier?.title} (RWF ${tier?.price})\n\n` +
      `Name: ${contact.name}\n` +
      `Phone: ${contact.phone}\n` +
      `Address: ${contact.address}${contact.landmark ? ` (${contact.landmark})` : ""}\n\n` +
      `Payment: ${pay?.title}\n\n` +
      `Please confirm my order.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const steps = ["Order", "Delivery", "Contact", "Payment", "Confirm"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition mb-8"
        >
          <ArrowLeft className="size-4" /> Back to home
        </Link>

        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">Start your order</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Place your order</h1>
          <p className="mt-3 text-muted-foreground max-w-lg">
            Five quick steps. We finish on WhatsApp so a real human confirms with you.
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-10">
          <div className="flex items-center justify-between gap-2">
            {steps.map((label, i) => {
              const n = i + 1;
              const done = n < step;
              const active = n === step;
              return (
                <div key={label} className="flex-1 flex items-center gap-2">
                  <div className={`size-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    done ? "bg-secondary text-secondary-foreground" : active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {done ? <CheckCircle2 className="size-4" /> : n}
                  </div>
                  <span className={`text-xs font-semibold hidden sm:block ${active ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
                  {n < steps.length && <div className={`h-px flex-1 ${done ? "bg-secondary" : "bg-border"}`} />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step content */}
        <div className="min-h-[360px]">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-black mb-1">What are we shopping for?</h2>
              <p className="text-muted-foreground mb-6">Pick a category, then list your items.</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {categories.map((c) => {
                  const active = selectedCategory === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`relative p-5 rounded-2xl border text-left transition ${
                        active ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"
                      }`}
                    >
                      {active && <CheckCircle2 className="absolute top-3 right-3 size-5 text-primary" />}
                      <div className={`size-9 rounded-xl flex items-center justify-center mb-3 ${active ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                        <c.icon className="size-5" />
                      </div>
                      <h3 className="font-bold text-sm">{c.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
                    </button>
                  );
                })}
              </div>

              {cat && (
                <div className="p-6 rounded-3xl border border-border bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold">Your {cat.title.toLowerCase()} list</h3>
                    <span className="text-xs text-muted-foreground">Fields: {cat.fields.join(" · ")}</span>
                  </div>
                  <div className="space-y-3">
                    {items.map((it, idx) => (
                      <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-start">
                        <input
                          value={it.name}
                          onChange={(e) => updateItem(idx, "name", e.target.value)}
                          placeholder={cat.fields[0]}
                          className="sm:col-span-5 h-11 px-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                        <input
                          value={it.qty}
                          onChange={(e) => updateItem(idx, "qty", e.target.value)}
                          placeholder={cat.fields[1]}
                          className="sm:col-span-3 h-11 px-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                        <input
                          value={it.note}
                          onChange={(e) => updateItem(idx, "note", e.target.value)}
                          placeholder={cat.fields[2]}
                          className="sm:col-span-3 h-11 px-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                        <button
                          onClick={() => removeItem(idx)}
                          disabled={items.length === 1}
                          className="sm:col-span-1 h-11 rounded-xl border border-border text-muted-foreground hover:text-destructive hover:border-destructive/40 disabled:opacity-30 disabled:hover:text-muted-foreground disabled:hover:border-border flex items-center justify-center"
                          aria-label="Remove item"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={addItem}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <Plus className="size-4" /> Add another item
                  </button>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-black mb-1">How fast do you need it?</h2>
              <p className="text-muted-foreground mb-6">Pick a delivery speed. No markup on the goods themselves.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {tiers.map((t) => {
                  const active = selectedTier === t.id;
                  const isMorning = t.id === "morning";
                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTier(t.id)}
                      className={`relative p-6 rounded-3xl border text-left transition ${
                        active
                          ? isMorning
                            ? "border-primary bg-primary/5"
                            : "border-secondary bg-secondary/5"
                          : "border-border bg-card"
                      }`}
                    >
                      {active && (
                        <CheckCircle2 className={`absolute top-4 right-4 size-5 ${isMorning ? "text-primary" : "text-secondary"}`} />
                      )}
                      <div className={`size-10 rounded-2xl flex items-center justify-center mb-4 ${
                        active
                          ? isMorning ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                          : isMorning ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                      }`}>
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
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-black mb-1">Where should we deliver?</h2>
              <p className="text-muted-foreground mb-6">A driver will call this number when they arrive.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full name</span>
                  <input
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    placeholder="e.g. Aline Uwase"
                    className="mt-2 w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone (MoMo number)</span>
                  <div className="mt-2 flex items-center gap-2 h-12 px-4 rounded-xl border border-border bg-background focus-within:ring-2 focus-within:ring-primary/40">
                    <Phone className="size-4 text-muted-foreground" />
                    <input
                      value={contact.phone}
                      onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                      placeholder="07XX XXX XXX"
                      className="flex-1 bg-transparent focus:outline-none"
                    />
                  </div>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Delivery address</span>
                  <div className="mt-2 flex items-start gap-2 px-4 py-3 rounded-xl border border-border bg-background focus-within:ring-2 focus-within:ring-primary/40">
                    <MapPin className="size-4 mt-1 text-muted-foreground" />
                    <textarea
                      value={contact.address}
                      onChange={(e) => setContact({ ...contact, address: e.target.value })}
                      placeholder="District, sector, street — be specific"
                      rows={2}
                      className="flex-1 bg-transparent focus:outline-none resize-none"
                    />
                  </div>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Landmark (optional)</span>
                  <input
                    value={contact.landmark}
                    onChange={(e) => setContact({ ...contact, landmark: e.target.value })}
                    placeholder="e.g. near Simba Supermarket, blue gate"
                    className="mt-2 w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </label>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-black mb-1">How would you like to pay?</h2>
              <p className="text-muted-foreground mb-6">You only pay once we confirm. No card storage, ever.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {paymentMethods.map((m) => {
                  const active = payment === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setPayment(m.id)}
                      className={`relative p-5 rounded-2xl border text-left transition ${
                        active ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"
                      }`}
                    >
                      {active && <CheckCircle2 className="absolute top-3 right-3 size-5 text-primary" />}
                      <div className={`size-9 rounded-xl flex items-center justify-center mb-3 ${active ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                        <m.icon className="size-5" />
                      </div>
                      <h3 className="font-bold text-sm">{m.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{m.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-2xl font-black mb-1">Confirm your order</h2>
              <p className="text-muted-foreground mb-6">Review everything below, then send it to us on WhatsApp.</p>
              <div className="rounded-3xl border border-border bg-card divide-y divide-border">
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Category</p>
                  <p className="font-bold">{cat?.title}</p>
                  <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                    {validItems.map((i, n) => (
                      <li key={n}>• {i.name}{i.qty ? ` — ${i.qty}` : ""}{i.note ? ` (${i.note})` : ""}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Delivery</p>
                  <p className="font-bold">{tier?.title} <span className="text-muted-foreground font-normal">· RWF {tier?.price}</span></p>
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Contact</p>
                  <p className="font-bold">{contact.name} <span className="text-muted-foreground font-normal">· {contact.phone}</span></p>
                  <p className="text-sm text-muted-foreground mt-1">{contact.address}{contact.landmark ? ` — ${contact.landmark}` : ""}</p>
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Payment</p>
                  <p className="font-bold">{pay?.title}</p>
                </div>
              </div>
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="mt-6 w-full gap-2 rounded-full text-base h-14 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <MessageCircle className="size-5" /> Send order on WhatsApp
                <ChevronRight className="size-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Nav controls */}
        {step < 5 && (
          <div className="mt-10 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={goBack}
              disabled={step === 1}
              className="gap-1 rounded-full disabled:opacity-30"
            >
              <ChevronLeft className="size-4" /> Back
            </Button>
            <Button
              onClick={goNext}
              disabled={!canNext}
              className="gap-1 rounded-full h-12 px-6 disabled:opacity-40"
            >
              Continue <ChevronRight className="size-4" />
            </Button>
          </div>
        )}
        {step === 5 && (
          <div className="mt-6">
            <Button variant="ghost" onClick={goBack} className="gap-1 rounded-full">
              <ChevronLeft className="size-4" /> Back to edit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
