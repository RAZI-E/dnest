import { Sparkles, Package, Leaf, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Handcrafted in Small Batches",
    description:
      "Every jar is prepared fresh in small batches to preserve authentic artisanal texture and delicate chocolate aroma.",
  },
  {
    icon: Leaf,
    title: "Pure Wholesome Ingredients",
    description:
      "Zero artificial preservatives or shortcuts. Real roasted peanuts, authentic rose-petal gulkand, and sun-dried fruit bits.",
  },
  {
    icon: Package,
    title: "Elegantly Jar-Packaged",
    description:
      "Reusable, premium packaging that makes each flavour an exquisite, ready-to-share gift for every special celebration.",
  },
  {
    icon: MessageCircle,
    title: "Direct WhatsApp Ordering",
    description:
      "No app installs or account sign-ups. Tap, select your flavours, and receive direct personal confirmation and fast dispatch.",
  },
];

export function WhyDnest() {
  return (
    <section id="why-dnest" className="bg-slate-50/50 py-14 sm:py-20 md:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="mb-3 inline-block rounded-full bg-navy-50 border border-navy-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
            Why D&apos;nest
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            Chocolate made the right way
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm sm:text-base text-gray-600">
            We believe the finest chocolate begins with honest ingredients, artisanal passion, and zero shortcuts.
          </p>
        </div>

        <div className="mt-8 sm:mt-14 grid gap-3.5 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-row sm:flex-col items-start sm:items-center text-left sm:text-center rounded-2xl sm:rounded-3xl border border-gray-200/80 bg-white p-4 sm:p-7 shadow-xs gap-3.5 sm:gap-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300"
            >
              <div className="mb-0 sm:mb-5 shrink-0 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-navy-900 text-white shadow-xs transition-transform group-hover:scale-105">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 sm:mb-2 font-display text-base sm:text-lg font-bold text-gray-950">{title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
