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
  const { price, mrp } = products[0];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white pb-16 pt-8 sm:pb-24 sm:pt-14 md:pb-28 md:pt-20 border-b border-gray-100"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14">
        {/* Left Column: Copy & Actions */}
        <div className="text-center md:text-left">
          {/* Top category pill */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-navy-50 border border-navy-100/80 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-navy-900">
            <Sparkles className="h-3.5 w-3.5 text-navy-900" />
            <span>Artisan Chocolates</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950 leading-[1.12]">
            Chocolates made with love
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 md:mx-0">
            Indulge in D&apos;nest handcrafted chocolate jars across three signature flavours — Peanut, Gulkand, and Mix Fruit. 100% vegetarian, made fresh in small batches.
          </p>

          {/* Pricing Row */}
          <div className="mt-5 sm:mt-6 flex items-baseline justify-center gap-2 md:justify-start">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-gray-950">
              {formatINR(price)}
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-500">
              / 500g Jar
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-navy-900 text-white hover:bg-navy-800 rounded-full font-bold px-8 shadow-sm transition-all duration-200 hover:shadow-md"
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
              className="w-full sm:w-auto border border-gray-300 text-gray-800 hover:border-navy-900 hover:text-navy-900 hover:bg-white rounded-full font-semibold"
            >
              <a href="#shop">Explore Flavours</a>
            </Button>
          </div>

          {/* Trust badges row */}
          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-3 max-w-sm sm:max-w-md mx-auto md:mx-0">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 rounded-2xl bg-white border border-gray-200/70 p-3 shadow-2xs"
              >
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-navy-50 text-navy-900">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-center text-[11px] font-semibold text-gray-700 leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Product Showcase */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200/90 bg-white p-5 sm:p-7 shadow-lg">
            {/* Rating floating tag */}
            <div className="absolute right-6 top-6 sm:right-8 sm:top-8 z-10 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900 shadow-xs border border-gray-200/80 backdrop-blur">
              <Star className="h-3 w-3 fill-navy-900 text-navy-900" />
              <span>5.0 (48+ Reviews)</span>
            </div>

            <Image
              src="/images/logo-lockup.png"
              alt={`${site.name} — Homemade chocolates`}
              width={620}
              height={511}
              priority
              className="h-auto w-full rounded-2xl object-cover shadow-2xs"
            />

            {/* Bottom info banner inside card */}
            <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50/80 px-3.5 py-2.5 border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[2px] border border-green-600 bg-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                </span>
                <span className="text-xs font-medium text-gray-900">3 Handcrafted Flavours</span>
              </div>
              <span className="text-xs font-bold text-navy-900">₹300 / 500g Jar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
