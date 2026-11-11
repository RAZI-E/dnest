import Image from "next/image";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  formatINR,
  productUrl,
  products,
} from "@/lib/products";
import { site } from "@/lib/site";

export function Products() {
  return (
    <section id="shop" className="bg-white py-16 sm:py-20 md:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center md:text-left">
          <span className="mb-3 inline-block rounded-full bg-navy-50 border border-navy-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
            D&apos;nest Signature Collection
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            Pick your favourite chocolate jar
          </h2>
          <p className="mt-3 max-w-lg text-sm sm:text-base text-gray-600">
            Every jar of D&apos;nest homemade chocolate is freshly prepared with pure, 100% vegetarian ingredients and zero artificial shortcuts.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl"
            >
              {/* Product Image Stage */}
              <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50/80 to-slate-100/50 p-6 border-b border-gray-100">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-contain p-2 sm:p-4 transition-transform duration-500 group-hover:scale-105 drop-shadow-sm"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  {/* Top Meta: Weight & Rating */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-medium tracking-wide">
                      {p.weight}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-navy-900 text-navy-900" />
                      <span className="font-bold text-gray-800">5.0</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display mt-2.5 text-xl font-bold text-gray-950 leading-snug">
                    {p.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600 line-clamp-2">
                    {p.description}
                  </p>
                </div>

                {/* Bottom: Price & Action */}
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <div className="mb-3.5 flex items-baseline justify-between">
                    <span className="font-display text-2xl font-extrabold text-gray-950">
                      {formatINR(p.price)}
                    </span>
                    <span className="text-xs font-medium text-emerald-700">
                      100% Veg
                    </span>
                  </div>

                  {/* Buy Button */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-navy-900 text-white hover:bg-navy-800 rounded-full font-bold shadow-xs transition-all duration-200 hover:shadow-md active:scale-[0.98]"
                  >
                    <a
                      href={productUrl(p)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combo Offer Banner */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-6 rounded-3xl border border-gray-200/80 bg-slate-50/70 p-6 sm:p-8 text-center sm:flex-row sm:text-left shadow-xs">
          <div className="flex-1">
            <span className="inline-block rounded-full bg-navy-900 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 mb-2">
              Signature Trio
            </span>
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gray-950">
              Can&apos;t choose? Order all three flavours!
            </p>
            <p className="mt-1.5 text-xs sm:text-sm text-gray-600">
              Combine your favourite chocolate jars with complimentary doorstep packaging.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto shrink-0 bg-navy-900 text-white hover:bg-navy-800 rounded-full font-bold px-8 shadow-sm transition-all hover:shadow-md"
          >
            <a
              href={site.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Collection
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
