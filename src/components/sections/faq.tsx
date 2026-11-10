"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How do I order and pay on WhatsApp?",
    answer:
      "Tap any 'Buy on WhatsApp' or 'Open Catalog' button on this page. It directly opens our WhatsApp business catalog where you can select your flavours and quantities. Simply send your cart to us in chat, and we will share payment details (UPI / GPay / PhonePe / Paytm / Bank Transfer) and confirm your delivery address immediately.",
  },
  {
    question: "Are D'nest chocolates 100% vegetarian?",
    answer:
      "Yes, absolutely! All D'nest chocolates are 100% vegetarian and crafted following strict hygiene and quality standards.",
  },
  {
    question: "What is the shelf life and how should I store them?",
    answer:
      "Our homemade chocolates have a shelf life of 60 days from the date of manufacturing. To enjoy the best flavor and texture, store them in a cool, dry place away from direct sunlight. Refrigeration is recommended during hotter months.",
  },
  {
    question: "Do you accept bulk, corporate, or festive gifting orders?",
    answer:
      "Yes! We create customized gift boxes and hampers for weddings, birthdays, festive occasions (Diwali, Rakhi, New Year), and corporate gifting. Please message us on WhatsApp with your requirements for special bulk pricing.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are freshly packaged and dispatched within 24–48 hours. Depending on your location, delivery typically takes 3 to 5 business days.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-navy-900 py-20 text-ivory">
      <div className="mx-auto max-w-4xl px-5">
        <div className="text-center">
          <span className="mb-3 inline-block rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold-400">
            Got Questions?
          </span>
          <h2 className="font-display text-4xl font-medium text-gold-300 md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ivory/70">
            Everything you need to know about our homemade chocolates, ordering, and delivery.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-gold-400/15 bg-navy-800 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-medium text-ivory transition-colors hover:text-gold-300 md:text-lg"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 shrink-0 text-gold-400" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-gold-400/10 px-5 pb-5 pt-3 text-sm leading-relaxed text-ivory/75 md:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
