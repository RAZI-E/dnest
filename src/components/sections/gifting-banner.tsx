import { Gift, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function GiftingBanner() {
  return (
    <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-16 text-ivory">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-gold-400/25 bg-navy-800/80 p-8 shadow-2xl backdrop-blur md:p-12">
          {/* Subtle glow decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl"
          />

          <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-300">
                <Gift className="h-3.5 w-3.5" />
                <span>Custom &amp; Bulk Gifting</span>
              </div>
              <h3 className="font-display text-3xl font-medium text-gold-300 md:text-4xl">
                Make your celebrations sweeter with D&apos;nest
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/80 md:text-base">
                Looking for bespoke hampers for weddings, corporate tokens of gratitude, or festive gifts? We curate custom chocolate boxes with personalized greeting cards and tailored flavour combinations.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-gold-300/90">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-gold-400" /> Custom branding &amp; tags
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-gold-400" /> Pan-India delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-gold-400" /> Attractive volume pricing
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-end">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a
                  href={site.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle />
                  Enquire on WhatsApp
                </a>
              </Button>
              <p className="text-xs text-ivory/50">
                Quick response within a few hours on WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
