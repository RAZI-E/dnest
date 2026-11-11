import { MessageCircle, ShoppingCart, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const steps = [
  {
    icon: MessageCircle,
    title: "Open the catalog",
    text: "Tap any Buy button on this page. Our WhatsApp catalog opens instantly with all three flavours ready to browse.",
  },
  {
    icon: ShoppingCart,
    title: "Add to cart",
    text: "Choose your flavours and quantity, then add them to your WhatsApp cart. Mix and match as you like.",
  },
  {
    icon: Send,
    title: "Send your order",
    text: "Hit send! We get your order directly on WhatsApp and confirm it personally. Delivery is fast and fresh.",
  },
];

export function HowToOrder() {
  return (
    <section id="how-to-order" className="bg-gray-50/70 py-20 sm:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center md:text-left">
          <span className="mb-3 inline-block rounded-full bg-navy-900 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
            How to Order
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950">
            Order in three easy steps
          </h2>
          <p className="mt-3 max-w-md text-sm sm:text-base text-gray-600">
            No accounts, no downloads, no friction. Order fresh homemade chocolates straight through WhatsApp in under 60 seconds.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.title}
                className="relative flex flex-col rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-5xl font-bold leading-none text-navy-900/20">
                    0{i + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-950">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{s.text}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 flex justify-center md:justify-start">
          <Button asChild size="lg" className="bg-navy-900 text-white hover:bg-navy-800 rounded-full font-bold px-8 shadow-md">
            <a href={site.catalogUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Open WhatsApp Catalog
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
