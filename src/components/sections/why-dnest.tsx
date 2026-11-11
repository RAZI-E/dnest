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
    <section id="why-dnest" className="bg-gray-50/60 py-20 sm:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="mb-3 inline-block rounded-full bg-navy-900 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
            Why D&apos;nest
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950">
            Chocolate made the right way
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm sm:text-base text-gray-600">
            We believe the finest chocolate begins with honest ingredients, artisanal passion, and zero shortcuts.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col items-center rounded-3xl border border-gray-200/90 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 shadow-md transition-transform group-hover:scale-105">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-gray-950">{title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

