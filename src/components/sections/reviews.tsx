import { Star, Quote } from "lucide-react";

import { reviews } from "@/lib/reviews";

export function Reviews() {
  if (reviews.length === 0) return null;
  return (
    <section id="reviews" className="bg-white py-14 sm:py-20 md:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="mb-3 inline-block rounded-full bg-navy-50 border border-navy-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
            Customer Love
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            What chocolate lovers say
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-sm sm:text-base text-gray-600">
            Real reviews from our happy customers across India.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-3xl border border-gray-200/90 bg-slate-50/60 p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white"
            >
              <Quote className="mb-3 h-5 w-5 sm:h-6 sm:w-6 text-navy-900/30" />
              <blockquote className="flex-1 text-xs sm:text-sm leading-relaxed text-gray-700">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 sm:mt-6 border-t border-gray-200/80 pt-4">
                <div className="mb-1.5 flex gap-0.5">
                  {Array.from({ length: r.rating ?? 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-navy-900 text-navy-900"
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-950">
                  {r.name}
                </span>
                <span className="block text-[10px] sm:text-[11px] font-medium text-gray-500">Verified Buyer</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
