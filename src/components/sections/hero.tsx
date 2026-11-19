import Image from "next/image";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatINR, products } from "@/lib/products";
import { site } from "@/lib/site";

export function Hero() {
  const { price, weight } = products[0];

  return (
    <section
      id="top"
      className="relative overflow-visible bg-[#12163A] text-[#F6F3EE] pt-6 pb-12 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32 border-b border-[#C8A04A]/20"
    >
      <div className="relative mx-auto flex flex-col md:grid md:grid-cols-[1.15fr_0.85fr] items-center gap-6 sm:gap-10 lg:gap-16 px-5 sm:px-6 max-w-6xl">
        {/* Mobile: Jar Comes First (order-1 on mobile, order-2 on desktop) */}
        <div className="order-1 md:order-2 animate-hero-jar relative mx-auto w-full max-w-[220px] sm:max-w-[360px] lg:max-w-[460px] flex justify-center">
          {/* Soft gold radial glow behind the jar */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -inset-x-6 -inset-y-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(200,160,74,0.22)_0%,transparent_70%)] blur-2xl"
          />

          {/* Hero Jar with Priority and Responsive Sizing */}
          <div className="relative z-20 md:-mb-24 flex items-center justify-center">
            <Image
              src="/images/peanut.png"
              alt="D'nest 500g handcrafted chocolate jar"
              width={480}
              height={480}
              priority
              sizes="(max-width: 640px) 220px, (max-width: 1024px) 360px, 460px"
              className="h-auto w-full object-contain drop-shadow-[0_20px_32px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Headline, Copy, Price, CTA (order-2 on mobile, order-1 on desktop) */}
        <div className="order-2 md:order-1 animate-hero-text text-left w-full">
          <h1 className="font-display text-[clamp(2.35rem,8.5vw,3rem)] md:text-[clamp(3.25rem,5.5vw,5.25rem)] font-medium text-[#F6F3EE] leading-[1.05] tracking-[-0.02em]">
            Chocolates made with love
          </h1>

          <p className="mt-2.5 sm:mt-5 text-sm sm:text-lg leading-relaxed text-[#F6F3EE]/85 max-w-[48ch]">
            Handcrafted artisan chocolate jars freshly made in small batches with pure cocoa butter.
          </p>

          {/* Price Line */}
          <div className="mt-4 sm:mt-7 flex items-baseline gap-2">
            <span className="font-price text-2xl sm:text-3xl md:text-4xl font-medium text-[#C8A04A]">
              {formatINR(price)}
            </span>
            <span className="text-sm sm:text-base font-normal text-[#F6F3EE]/70">
              · {weight} jar
            </span>
          </div>

          {/* Primary CTA Button (Full width on mobile, min 48px tap target) */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              asChild
              variant="gold"
              size="lg"
              className="w-full sm:w-auto text-[#12163A] font-medium min-h-[48px] px-8 shadow-md"
            >
              <a
                href={site.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Order on WhatsApp</span>
              </a>
            </Button>
            <Button
              asChild
              variant="outlineLight"
              size="lg"
              className="w-full sm:w-auto min-h-[48px] px-6 text-sm"
            >
              <a href="#flavours">Explore flavours</a>
            </Button>
          </div>

          {/* Quiet Inline Note */}
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-[#F6F3EE]/60 font-medium tracking-wide">
            100% vegetarian · No preservatives · Made in small batches
          </p>
        </div>
      </div>
    </section>
  );
}
