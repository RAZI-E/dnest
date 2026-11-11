import { Star, Quote } from "lucide-react";

import { reviews } from "@/lib/reviews";

// Renders nothing until real reviews are added in src/lib/reviews.ts.
export function Reviews() {
  if (reviews.length === 0) return null;
  return (
    <section id="reviews" className="bg-white py-20 sm:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="mb-3 inline-block rounded-full bg-navy-900 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
            Customer Love
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950">
            What chocolate lovers say
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-sm sm:text-base text-gray-600">
            Real reviews from our happy customers across India.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-3xl border border-gray-200/90 bg-gray-50/70 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white"
            >
              <Quote className="mb-3 h-6 w-6 text-navy-900/40" />
              <blockquote className="flex-1 text-sm leading-relaxed text-gray-700">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-gray-200 pt-4">
                <div className="mb-1.5 flex gap-1">
                  {Array.from({ length: r.rating ?? 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-950">
                  {r.name}
                </span>
                <span className="block text-[11px] font-medium text-gray-500">Verified Buyer</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
