import Image from "next/image";
import { MessageCircle, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  discountPercent,
  formatINR,
  productUrl,
  products,
} from "@/lib/products";
import { site } from "@/lib/site";

export function Products() {
  return (
    <section id="shop" className="bg-white py-14 sm:py-20 md:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center md:text-left">
          <span className="mb-3 inline-block rounded-full bg-navy-50 border border-navy-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
            D&apos;nest Signature Collection
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            Pick your favourite chocolate jar
          </h2>
          <p className="mt-3 max-w-lg text-sm sm:text-base text-gray-600">
            Every jar of D&apos;nest homemade chocolate is freshly prepared with 100% vegetarian ingredients. Tap{" "}
            <strong className="text-gray-900">Buy on WhatsApp</strong> to open our
            catalog and order in seconds.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
            >
              {/* Product Image Container */}
              <div
                className="relative flex aspect-square items-center justify-center overflow-hidden"
                style={{ backgroundColor: p.tint }}
              >
                {/* Discount Tag */}
                <div className="absolute left-3.5 top-3.5 z-10 rounded-full bg-navy-900 px-3 py-1 text-xs font-bold text-white shadow-xs">
                  {discountPercent(p)}% off
                </div>
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Header row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {/* Indian Veg Symbol */}
                    <span
                      className="flex h-3.5 w-3.5 items-center justify-center rounded-[2px] border border-green-600 bg-white"
                      title="100% Vegetarian"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                    </span>
                    <span className="text-xs font-bold text-gray-600">
                      {p.weight}
                    </span>
                  </div>
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-navy-900 text-navy-900"
                      />
                    ))}
                    <span className="text-xs font-bold text-gray-800">5.0</span>
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="font-display text-xl font-bold text-gray-950 leading-snug">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-navy-800">
                    {p.tagline}
                  </p>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-gray-600">
                  {p.description}
                </p>

                {/* Highlights tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-gray-700"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Price row */}
                <div className="mt-5 flex items-baseline gap-2 border-t border-gray-100 pt-3">
                  <span className="text-2xl font-extrabold text-gray-950">
                    {formatINR(p.price)}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    {formatINR(p.mrp)}
                  </span>
                  <span className="ml-auto rounded-full bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 text-xs font-bold">
                    Save {formatINR(p.mrp - p.price)}
                  </span>
                </div>

                {/* Buy Button in Refined Midnight Navy */}
                <Button asChild size="lg" className="mt-4 w-full bg-navy-900 text-white hover:bg-navy-800 rounded-full font-bold shadow-xs">
                  <a
                    href={productUrl(p)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Buy on WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Combo Offer Banner */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-6 rounded-3xl border border-gray-200 bg-slate-50/70 p-6 sm:p-8 text-center sm:flex-row sm:text-left shadow-xs">
          <div className="flex-1">
            <span className="inline-block rounded-full bg-navy-900 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 mb-2">
              Combo Offer
            </span>
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gray-950">
              Can&apos;t choose? Order all three flavours!
            </p>
            <p className="mt-1.5 text-xs sm:text-sm text-gray-600">
              Mix &amp; match your favourite chocolate jars in our WhatsApp catalog with fast door-to-door delivery.
            </p>
          </div>
          <Button asChild size="lg" className="w-full sm:w-auto shrink-0 bg-navy-900 text-white hover:bg-navy-800 rounded-full font-bold px-8 shadow-sm">
            <a
              href={site.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Open WhatsApp Catalog</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
