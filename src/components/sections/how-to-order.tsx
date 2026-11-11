import { MessageCircle, ShoppingCart, Send } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Open the catalog",
    text: "Tap any Buy Now button on this page. Our official WhatsApp catalog opens instantly with all three flavours ready to browse.",
  },
  {
    icon: ShoppingCart,
    title: "Add your jars to cart",
    text: "Choose your flavours (Peanut, Gulkand, Mix Fruit) and quantity, then add them to your WhatsApp cart.",
  },
  {
    icon: Send,
    title: "Send & get delivery",
    text: "Send your cart in chat. We confirm your delivery address, share UPI payment details, and dispatch your order fast.",
  },
];

export function HowToOrder() {
  return (
    <section id="how-to-order" className="bg-slate-50/50 py-14 sm:py-20 md:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center md:text-left">
          <span className="mb-3 inline-block rounded-full bg-navy-50 border border-navy-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
            How to Order
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            Order in three easy steps
          </h2>
          <p className="mt-3 max-w-md text-sm sm:text-base text-gray-600">
            No accounts, no downloads, no friction. Order fresh homemade chocolates straight through WhatsApp in under 60 seconds.
          </p>
        </div>

        <ol className="mt-8 sm:mt-14 grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.title}
                className="relative flex flex-col rounded-2xl sm:rounded-3xl border border-gray-200/90 bg-white p-5 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 sm:mb-6 flex items-center justify-between">
                  <span className="font-display text-3xl sm:text-5xl font-bold leading-none text-navy-900/20">
                    0{i + 1}
                  </span>
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-navy-900 text-white shadow-xs">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>
                <h3 className="mb-1.5 sm:mb-2 text-base sm:text-xl font-bold text-gray-950">{s.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">{s.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
