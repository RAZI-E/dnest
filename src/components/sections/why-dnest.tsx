import { Sparkles, Package, Leaf, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Handcrafted in Small Batches",
    description:
      "Every jar is made fresh in small batches to ensure the highest quality and flavour in every bite.",
  },
  {
    icon: Leaf,
    title: "Real Ingredients Only",
    description:
      "No artificial flavours. No preservatives. We use real peanuts, authentic gulkand, and hand-picked dried fruits.",
  },
  {
    icon: Package,
    title: "Perfect for Gifting",
    description:
      "Our beautifully packaged jars make for a memorable gift for birthdays, festivals, and every celebration.",
  },
  {
    icon: MessageCircle,
    title: "Order Directly on WhatsApp",
    description:
      "No app downloads or signups. Simply tap, chat, and order. We confirm and deliver with a personal touch.",
  },
];

export function WhyDnest() {
  return (
    <section className="bg-ivory py-20 text-navy-900">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="mb-3 inline-block rounded-full border border-navy-900/20 bg-navy-900/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-navy-700">
            Why D&apos;nest
          </span>
          <h2 className="font-display text-4xl font-medium md:text-5xl">
            Chocolate made the right way
          </h2>
          <p className="mx-auto mt-3 max-w-md text-navy-900/70">
            We believe the best chocolate comes from honest ingredients and
            genuine care.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col items-center rounded-2xl border border-navy-900/8 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-800 text-gold-300 shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-navy-900/65">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

