"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How do I order and pay on WhatsApp?",
    answer:
      "Tap any 'Order on WhatsApp' or 'Buy now' button on this page. Our official WhatsApp catalog opens directly where you can choose your flavours and quantities. Send your cart in chat, and we share payment details (UPI, GPay, PhonePe, Paytm, or Net Banking) and confirm dispatch.",
  },
  {
    question: "Are D'nest chocolates 100% vegetarian?",
    answer:
      "Yes, completely. Every D'nest chocolate jar is 100% vegetarian, prepared using pure cocoa butter and natural ingredients without animal fats or preservatives.",
  },
  {
    question: "What is the shelf life and how should I store them?",
    answer:
      "Our jars have a shelf life of 60 days from preparation. For optimal taste and aroma, store them in a cool, dry place away from direct sunlight. Refrigeration is recommended in warmer months.",
  },
  {
    question: "Do you accept custom, corporate, or wedding gifting orders?",
    answer:
      "Yes. We curate personalized chocolate boxes and gift sets with custom tags, ribbon packaging, and handwritten greeting cards for weddings, festivals, and corporate gifting. Contact us on WhatsApp for bespoke orders and volume pricing.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Each order is packaged fresh in small batches and dispatched within 24 to 48 hours. Express doorstep delivery across India typically takes 3 to 5 business days.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-[#FAF8F5] py-16 sm:py-24 border-b border-[#3B2218]/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-left mb-10 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[#12163A] tracking-[-0.02em] leading-[1.08]">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3B2218]/80 leading-relaxed">
            Everything you need to know about our ingredients, ordering, and delivery.
          </p>
        </div>

        {/* Accordion with Simple Dividers Instead of Boxed Items */}
        <div className="divide-y divide-[#3B2218]/15 border-y border-[#3B2218]/15">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-2">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 py-3 sm:py-4 text-left text-base sm:text-lg font-medium text-[#12163A] transition-colors hover:text-[#C8A04A] cursor-pointer"
                >
                  <span className="font-display tracking-[-0.01em]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#C8A04A] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-5 pt-1 text-sm sm:text-base leading-relaxed text-[#3B2218]/85 max-w-[62ch]">
                    <p>{faq.answer}</p>
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
