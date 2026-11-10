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
    <section id="how-to-order" className="bg-ivory py-20 text-navy-900">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center md:text-left">
          <span className="mb-3 inline-block rounded-full border border-navy-900/20 bg-navy-900/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-navy-700">
            How to Order
          </span>
          <h2 className="font-display text-4xl font-medium md:text-5xl">
            Order in three steps
          </h2>
          <p className="mt-3 max-w-md text-navy-900/65">
            No accounts, no apps, no hassle. Order fresh chocolate straight from
            WhatsApp in under a minute.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.title}
                className="relative flex flex-col rounded-2xl border border-navy-900/8 bg-white p-7 shadow-sm"
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute right-0 top-10 hidden h-px w-6 translate-x-full bg-gold-400/50 md:block"
                  />
                )}
                <div className="mb-5 flex items-center gap-4">
                  <span className="font-display text-5xl font-medium leading-none text-gold-600 opacity-30">
                    {i + 1}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-gold-300">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-navy-900/65">{s.text}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex justify-center md:justify-start">
          <Button asChild variant="dark" size="lg">
            <a href={site.catalogUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Open the catalog
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
