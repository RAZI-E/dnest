import Image from "next/image";
import { MessageCircle, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  discountPercent,
  formatINR,
  productUrl,
  products,
} from "@/lib/products";
import { site } from "@/lib/site";

export function Products() {
  return (
    <section id="shop" className="bg-navy-900 pb-24 pt-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center md:text-left">
          <span className="mb-3 inline-block rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold-400">
            D&apos;nest Signature Collection
          </span>
          <h2 className="font-display text-4xl font-medium text-gold-300 md:text-5xl">
            Pick your favourite chocolate jar
          </h2>
          <p className="mt-3 max-w-md text-ivory/70">
            Every jar of D&apos;nest homemade chocolate is freshly prepared with 100% vegetarian ingredients. Tap{" "}
            <strong className="text-ivory">Buy on WhatsApp</strong> to open our
            catalog and order in seconds.
          </p>
        </div>

        {/* Product grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <Card
              key={p.slug}
              className="group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
            >
              {/* Product image */}
              <div
                className="relative flex aspect-square items-center justify-center overflow-hidden"
                style={{ backgroundColor: p.tint }}
              >
                <Badge className="absolute left-3 top-3 z-10 bg-gold-400 text-navy-900 shadow">
                  {discountPercent(p)}% off
                </Badge>
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <CardContent>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {/* Indian Veg Symbol */}
                    <span
                      className="flex h-3.5 w-3.5 items-center justify-center rounded-[2px] border border-green-600 bg-white"
                      title="100% Vegetarian"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                    </span>
                    <span className="text-[11px] font-medium text-navy-900/60">
                      {p.weight}
                    </span>
                  </div>
                  {/* Star row */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-gold-400 text-gold-400"
                      />
                    ))}
                    <span className="text-[11px] font-semibold text-navy-900/60">5.0</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold leading-tight">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gold-600">
                    {p.tagline}
                  </p>
                </div>

                <p className="text-xs leading-relaxed text-navy-900/70">
                  {p.description}
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-navy-900/5 px-2 py-0.5 text-[10px] font-semibold text-navy-900/70"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Price row */}
                <div className="mt-auto flex items-baseline gap-2 pt-2">
                  <span className="text-2xl font-bold text-navy-900">
                    {formatINR(p.price)}
                  </span>
                  <span className="text-sm text-navy-900/50 line-through">
                    {formatINR(p.mrp)}
                  </span>
                  <span className="ml-auto rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                    Save {formatINR(p.mrp - p.price)}
                  </span>
                </div>

                <Button asChild variant="dark" className="w-full">
                  <a
                    href={productUrl(p)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle />
                    Buy on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-gold-400/20 bg-navy-800 px-6 py-8 text-center sm:flex-row sm:text-left">
          <div className="flex-1">
            <p className="font-display text-2xl font-medium text-gold-300">
              Want all three?
            </p>
            <p className="mt-1 text-sm text-ivory/70">
              Mix &amp; match flavours in our WhatsApp catalog. Order as many
              jars as you like.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <a
              href={site.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
              Open Catalog
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
