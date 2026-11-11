import Image from "next/image";
import { MessageCircle, ShieldCheck, Leaf, Heart, Star, Sparkles } from "lucide-react";

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
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white pb-14 pt-8 sm:pb-20 sm:pt-14 md:pb-28 md:pt-20 border-b border-gray-100"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12">
        {/* Left Column: Copy & Actions */}
        <div className="text-center md:text-left">
          {/* Top category pill (Pure Midnight Navy & Clean White) */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-navy-50 border border-navy-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-900 shadow-xs">
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
          <div className="mt-5 sm:mt-6 flex items-center justify-center gap-3 md:justify-start">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-gray-950">
              {formatINR(price)}
            </span>
            <span className="text-sm sm:text-base text-gray-400 line-through">
              {formatINR(mrp)}
            </span>
            <span className="rounded-full bg-navy-900 px-2.5 py-0.5 text-xs font-bold text-white">
              Save {formatINR(mrp - price)}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Button asChild size="lg" className="w-full sm:w-auto bg-navy-900 text-white hover:bg-navy-800 shadow-md">
              <a
                href={site.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Order on WhatsApp</span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
              <a href="#shop">Explore Flavours</a>
            </Button>
          </div>

          {/* Trust badges row (Optimized for Mobile & Desktop) */}
          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-sm sm:max-w-md mx-auto md:mx-0">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 rounded-2xl bg-white border border-gray-200/80 p-2.5 sm:p-3 shadow-xs"
              >
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-900">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-center text-[11px] sm:text-xs font-bold text-gray-800 leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Product Showcase */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-none">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-5 sm:p-8 shadow-xl">
            {/* Rating floating tag (No yellow, clean luxury monochrome) */}
            <div className="absolute right-5 top-5 sm:right-7 sm:top-7 z-10 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-gray-900 shadow-sm border border-gray-200 backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-navy-900 text-navy-900" />
              <span>5.0 (48+ Reviews)</span>
            </div>

            <Image
              src="/images/logo-lockup.png"
              alt={`${site.name} — Homemade chocolates`}
              width={620}
              height={511}
              priority
              className="animate-float h-auto w-full rounded-2xl object-cover"
            />

            {/* Bottom info banner inside card */}
            <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2.5 border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[2px] border border-green-600 bg-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                </span>
                <span className="text-xs font-bold text-gray-900">3 Handcrafted Flavours</span>
              </div>
              <span className="text-xs font-extrabold text-navy-900">₹270 / 200g Jar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
