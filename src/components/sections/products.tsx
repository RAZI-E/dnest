import Image from "next/image";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatINR, productUrl, products } from "@/lib/products";

export function Products() {
  return (
    <section id="flavours" className="bg-[#F6F3EE] pt-14 sm:pt-20 lg:pt-24">
      {/* Section Header */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mb-12 sm:mb-16 text-left">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[#12163A] tracking-[-0.02em]">
          Pick your favourite chocolate jar
        </h2>
        <p className="mt-3 max-w-xl text-base sm:text-lg text-[#3B2218]/80 leading-relaxed">
          Three recipes, hand-poured in 500g glass jars with pure cocoa butter, honest ingredients, and zero preservatives.
        </p>
      </div>

      {/* Three Full-Width Flavour Bands */}
      <div className="flex flex-col">
        {products.map((p, index) => {
          const isEven = index % 2 === 1;
          const buttonVariant =
            index === 0 ? "amber" : index === 1 ? "rose" : "berry";

          return (
            <div
              key={p.slug}
              className="w-full border-t border-[#3B2218]/10 py-12 sm:py-20 lg:py-24"
              style={{ backgroundColor: p.accentBg }}
            >
              <div className="mx-auto max-w-6xl px-5 sm:px-6">
                <div
                  className={`flex flex-col md:grid md:items-center gap-8 lg:gap-16 md:grid-cols-2 ${
                    isEven ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* Jar Shot: On top at 4:5 on mobile */}
                  <div
                    className={`relative mx-auto w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[440px] flex items-center justify-center ${
                      isEven ? "md:col-start-2" : ""
                    }`}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-full opacity-30 blur-2xl"
                      style={{ backgroundColor: p.accent }}
                    />
                    <div className="relative z-10 w-full aspect-[4/5] sm:aspect-square rounded-2xl bg-white/40 p-4 sm:p-7 backdrop-blur-xs border border-white/60 shadow-sm flex items-center justify-center">
                      <Image
                        src={p.image}
                        alt={`${p.name} — 500g jar`}
                        width={440}
                        height={440}
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 440px"
                        className="h-full w-full object-contain drop-shadow-[0_16px_24px_rgba(59,34,24,0.18)] transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Text and Actions */}
                  <div className={`text-left w-full ${isEven ? "md:col-start-1" : ""}`}>
                    {/* Flavour Name in Fraunces */}
                    <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium text-[#12163A] tracking-[-0.02em] leading-[1.08]">
                      {p.name}
                    </h3>

                    {/* Sentence about taste */}
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#3B2218] leading-relaxed max-w-[46ch]">
                      {p.taste}
                    </p>

                    {/* Quiet Ingredient Line */}
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#6C5147] leading-relaxed max-w-[50ch]">
                      <span className="font-medium text-[#3B2218]">Ingredients:</span>{" "}
                      {p.ingredients}
                    </p>

                    {/* Price and Details */}
                    <div className="mt-5 sm:mt-8 flex items-baseline gap-2.5">
                      <span
                        className="font-price text-2xl sm:text-3xl md:text-4xl font-medium"
                        style={{ color: p.accent }}
                      >
                        {formatINR(p.price)}
                      </span>
                      <span className="text-xs sm:text-base text-[#6C5147]">
                        · {p.weight} · 100% vegetarian
                      </span>
                    </div>

                    {/* Full-width Order Button on mobile */}
                    <div className="mt-6 sm:mt-8">
                      <Button
                        asChild
                        variant={buttonVariant}
                        size="lg"
                        className="w-full sm:w-auto min-h-[48px] px-9 font-medium shadow-sm transition-all duration-200 hover:shadow-md"
                      >
                        <a
                          href={productUrl(p)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>Buy now</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
