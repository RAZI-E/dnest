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
      "Yes, absolutely! All D'nest chocolates are 100% vegetarian, prepared using high-grade cocoa butter and real ingredients without any animal fats or preservatives.",
  },
  {
    question: "What is the shelf life and how should I store them?",
    answer:
      "Our homemade chocolates have a shelf life of 60 days from the date of manufacturing. To enjoy the best flavor and texture, store them in a cool, dry place away from direct sunlight. Refrigeration is recommended during hotter weather.",
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
    <section id="faq" className="bg-slate-50/50 py-14 sm:py-20 md:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="mb-3 inline-block rounded-full bg-navy-50 border border-navy-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm sm:text-base text-gray-600">
            Everything you need to know about our homemade chocolates, ingredients, and delivery.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 space-y-3.5 sm:space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-xs transition-all hover:border-gray-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left text-sm sm:text-base md:text-lg font-bold text-gray-950 transition-colors hover:text-navy-900 cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-navy-900" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-navy-900 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100 px-5 sm:px-6 pb-5 sm:pb-6 pt-3.5 text-xs sm:text-sm md:text-base leading-relaxed text-gray-600">
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
