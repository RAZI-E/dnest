import Image from "next/image";
import { ShieldCheck, Leaf, Heart, Star, Sparkles, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatINR, products } from "@/lib/products";
import { site } from "@/lib/site";

const badges = [
  { icon: Leaf, label: "100% Vegetarian" },
  { icon: Heart, label: "Zero Preservatives" },
  { icon: ShieldCheck, label: "Small-Batch Fresh" },
];

export function Hero() {
  const { price } = products[0];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white pb-12 pt-6 sm:pb-24 sm:pt-14 md:pb-28 md:pt-20 border-b border-gray-100"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 sm:gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14">
        {/* Left Column: Copy & Actions */}
        <div className="text-center md:text-left">
          {/* Top category pill */}
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full bg-navy-50 border border-navy-100/80 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-navy-900">
            <Sparkles className="h-3.5 w-3.5 text-navy-900" />
            <span>Artisan Chocolates</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950 leading-[1.15]">
            Chocolates made with love
          </h1>

          <p className="mx-auto mt-3 sm:mt-4 max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 md:mx-0">
            Indulge in D&apos;nest handcrafted chocolate jars across three signature flavours — Peanut, Gulkand, and Mix Fruit. 100% vegetarian, made fresh in small batches.
          </p>

          {/* Pricing Row */}
          <div className="mt-4 sm:mt-6 flex items-baseline justify-center gap-2 md:justify-start">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-gray-950">
              {formatINR(price)}
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-500">
              / 500g Jar
            </span>
          </div>

          {/* CTA Buttons (Side-by-side on mobile & desktop) */}
          <div className="mt-5 sm:mt-8 flex items-center justify-center gap-2.5 sm:gap-3 md:justify-start">
            <Button
              asChild
              size="lg"
              className="flex-1 sm:flex-initial bg-navy-900 text-white hover:bg-navy-800 rounded-full font-bold px-6 sm:px-8 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <a
                href={site.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Order Now</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="flex-1 sm:flex-initial border border-gray-300 text-gray-800 hover:border-navy-900 hover:text-navy-900 hover:bg-white rounded-full font-semibold px-5 sm:px-8"
            >
              <a href="#shop">Explore</a>
            </Button>
          </div>

          {/* Trust badges row (Responsive fluid strip, zero awkward box wrapping) */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-x-4 sm:gap-x-6 gap-y-2 text-xs font-semibold text-gray-700">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-gray-200/60 px-3 py-1"
              >
                <Icon className="h-3.5 w-3.5 text-navy-900" />
                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Product Showcase */}
        <div className="relative mx-auto w-full max-w-[320px] sm:max-w-sm md:max-w-md">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200/90 bg-white p-4 sm:p-7 shadow-lg">
            {/* Rating floating tag */}
            <div className="absolute right-5 top-5 sm:right-7 sm:top-7 z-10 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 sm:px-3 py-1 text-xs font-semibold text-gray-900 shadow-xs border border-gray-200/80 backdrop-blur">
              <Star className="h-3 w-3 fill-navy-900 text-navy-900" />
              <span>5.0 (48+ Reviews)</span>
            </div>

            <Image
              src="/images/logo-lockup.png"
              alt={`${site.name} — Homemade chocolates`}
              width={620}
              height={511}
              priority
              className="h-auto w-full rounded-xl sm:rounded-2xl object-cover shadow-2xs"
            />

            {/* Bottom info banner inside card */}
            <div className="mt-3.5 sm:mt-4 flex items-center justify-between rounded-xl bg-slate-50/80 px-3 sm:px-3.5 py-2 sm:py-2.5 border border-gray-100 text-xs">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="flex h-3 w-3 sm:h-3.5 sm:w-3.5 items-center justify-center rounded-[2px] border border-green-600 bg-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                </span>
                <span className="font-medium text-gray-900">3 Handcrafted Flavours</span>
              </div>
              <span className="font-bold text-navy-900">₹300 / 500g Jar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
