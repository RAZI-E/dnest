import { Gift, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function GiftingBanner() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 sm:p-12 text-white shadow-2xl">
          {/* Subtle glow decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-navy-700/50 blur-3xl"
          />

          <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-navy-800 border border-navy-700 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold-300">
                <Gift className="h-3.5 w-3.5 text-gold-400" />
                <span>Custom &amp; Bulk Gifting</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Make your celebrations sweeter with D&apos;nest
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-300">
                Looking for bespoke hampers for weddings, corporate tokens of gratitude, or festive gifts? We curate custom chocolate boxes with personalized greeting cards and tailored flavour combinations.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-xs font-semibold text-gray-200">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-gold-400" /> Custom branding &amp; tags
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-gold-400" /> Pan-India delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-gold-400" /> Special volume pricing
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end">
              <Button asChild size="lg" className="w-full sm:w-auto bg-white text-navy-900 hover:bg-gray-100 font-bold px-8 shadow-md">
                <a
                  href={site.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle />
                  Enquire on WhatsApp
                </a>
              </Button>
              <p className="text-xs text-gray-400">
                Personalized response within a few hours on WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
