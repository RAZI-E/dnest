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
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 pb-20 pt-10 md:pb-28 md:pt-16"
    >
      {/* Subtle background grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#0a1426 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        {/* Left: Text & Actions */}
        <div className="text-center md:text-left">
          {/* Top pill (Dark Blue replacing GOAT Life yellow) */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-navy-900 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold-400" />
            <span>Artisan Homemade Chocolates</span>
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl leading-[1.08]">
            Chocolates  made with love
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-gray-600 md:mx-0 md:text-lg">
            Indulge in D&apos;nest handcrafted chocolate jars across three signature flavours — Peanut, Gulkand, and Mix Fruit. 100% vegetarian, made fresh in small batches.
          </p>

          {/* Pricing strip */}
          <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
            <span className="font-display text-3xl font-bold text-gray-950">
              {formatINR(price)}
            </span>
            <span className="text-base text-gray-400 line-through">
              {formatINR(mrp)}
            </span>
            <span className="rounded-full bg-navy-900 px-3 py-1 text-xs font-bold text-white">
              Save {formatINR(mrp - price)}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Button asChild size="lg" className="w-full sm:w-auto bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/20">
              <a
                href={site.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle />
                Order on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
              <a href="#shop">Explore Flavours</a>
            </Button>
          </div>

          {/* Trust badges row (GOAT Life Clean Style) */}
          <div className="mt-10 flex justify-center gap-6 md:justify-start">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 border border-navy-100 text-navy-900 shadow-sm transition-transform hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-center text-xs font-bold text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual Showcase Card */}
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-none">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8 shadow-2xl">
            {/* Rating floating tag */}
            <div className="absolute right-6 top-6 z-10 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-gray-900 shadow-md border border-gray-100 backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
              <span>5.0 (48+ Reviews)</span>
            </div>

            <Image
              src="/images/logo-lockup.png"
              alt={`${site.name} — Homemade chocolates`}
              width={620}
              height={511}
              priority
              className="animate-float h-auto w-full rounded-2xl object-cover shadow-inner"
            />

            {/* Bottom mini banner inside card */}
            <div className="mt-4 flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3 border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[2px] border border-green-600 bg-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                </span>
                <span className="text-xs font-bold text-gray-800">3 Signature Flavours</span>
              </div>
              <span className="text-xs font-bold text-navy-900">₹270 / 200g Jar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
