import Image from "next/image";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export function GiftingBanner() {
  const threeJarsPrice = products[0].price * 3;

  return (
    <section
      id="gift-set"
      className="relative overflow-hidden bg-[#12163A] text-[#F6F3EE] py-20 sm:py-28 lg:py-32 border-b border-[#C8A04A]/25"
    >
      {/* Background Foil Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] max-w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,160,74,0.14)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Trio Jars Stage: Three jars side by side, slightly overlapping in one row */}
        <div className="mx-auto max-w-2xl mb-10 sm:mb-16">
          <div className="flex items-end justify-center -space-x-6 sm:-space-x-10 md:-space-x-12 px-2">
            {/* Peanut Jar (Left, slightly rotated) */}
            <div className="relative z-10 w-28 sm:w-44 md:w-52 aspect-square shrink-0 -rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:z-30">
              <Image
                src="/images/peanut.png"
                alt="Peanut chocolate 500g jar"
                width={300}
                height={300}
                sizes="(max-width: 640px) 112px, (max-width: 768px) 176px, 208px"
                className="h-full w-full object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.65)]"
              />
            </div>

            {/* Gulkand Jar (Center, elevated) */}
            <div className="relative z-20 w-32 sm:w-52 md:w-60 aspect-square shrink-0 transition-transform duration-500 hover:scale-110 hover:z-30">
              <Image
                src="/images/gulkand.png"
                alt="Gulkand chocolate 500g jar"
                width={320}
                height={320}
                sizes="(max-width: 640px) 128px, (max-width: 768px) 208px, 240px"
                className="h-full w-full object-contain drop-shadow-[0_22px_36px_rgba(0,0,0,0.75)]"
              />
            </div>

            {/* Mix Fruit Jar (Right, slightly rotated) */}
            <div className="relative z-10 w-28 sm:w-44 md:w-52 aspect-square shrink-0 rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:z-30">
              <Image
                src="/images/mix-fruit.png"
                alt="Mix fruit chocolate 500g jar"
                width={300}
                height={300}
                sizes="(max-width: 640px) 112px, (max-width: 768px) 176px, 208px"
                className="h-full w-full object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.65)]"
              />
            </div>
          </div>
        </div>

        {/* Gift Set Offer & Bespoke Gifting Grid */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-14 items-start border-t border-[#C8A04A]/20 pt-10 sm:pt-14">
          {/* Left: The Complete Trio Set */}
          <div className="text-left">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F6F3EE] tracking-[-0.02em] leading-[1.08]">
              The complete collection
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#F6F3EE]/85 leading-relaxed max-w-[46ch]">
              Experience all three handcrafted flavours: roasted peanut, Shahi gulkand, and dried fruit. Each jar is packed in heavy glass with an embossed foil seal.
            </p>

            <div className="mt-6 sm:mt-7 flex items-baseline gap-3">
              <span className="font-price text-3xl sm:text-4xl font-medium text-[#C8A04A]">
                ₹{threeJarsPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-sm sm:text-base text-[#F6F3EE]/60 font-sans">
                · Three 500g jars (1.5 kg total)
              </span>
            </div>

            <div className="mt-7">
              <Button
                asChild
                variant="gold"
                size="lg"
                className="w-full sm:w-auto px-9 font-medium shadow-md"
              >
                <a
                  href={site.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Order all three jars</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Custom and Bulk Gifting */}
          <div className="rounded-2xl border border-[#C8A04A]/25 bg-white/5 p-6 sm:p-8 backdrop-blur-xs text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#C8A04A] tracking-[-0.02em]">
              Custom &amp; bulk gifting
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#F6F3EE]/80 leading-relaxed">
              Curated hampers for weddings, corporate milestones, Diwali, and intimate celebrations. We personalize boxes with custom gold foil names, ribbon accents, and handwritten cards.
            </p>

            <ul className="mt-5 space-y-2 text-xs sm:text-sm text-[#F6F3EE]/70">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8A04A]" />
                <span>Custom gift tags and bespoke packaging</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8A04A]" />
                <span>Volume pricing on orders over 10 jars</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8A04A]" />
                <span>Direct delivery across Indian pin codes</span>
              </li>
            </ul>

            <div className="mt-7">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 font-medium"
              >
                <a
                  href={site.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Ask about gifting</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
