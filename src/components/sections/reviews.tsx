import { Star, Quote } from "lucide-react";

import { reviews } from "@/lib/reviews";

// Renders nothing until real reviews are added in src/lib/reviews.ts.
export function Reviews() {
  if (reviews.length === 0) return null;
  return (
    <section id="reviews" className="bg-navy-800 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="mb-3 inline-block rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold-400">
            Customer Love
          </span>
          <h2 className="font-display text-4xl font-medium text-gold-300 md:text-5xl">
            What customers say
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-ivory/60">
            Real reviews from real chocolate lovers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-gold-400/10 bg-navy-700 p-6"
            >
              <Quote className="mb-3 h-6 w-6 text-gold-400/40" />
              <blockquote className="flex-1 text-sm leading-relaxed text-ivory/85">
                {r.text}
              </blockquote>
              <figcaption className="mt-5 border-t border-gold-400/10 pt-4">
                <div className="mb-1 flex gap-0.5">
                  {Array.from({ length: r.rating ?? 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gold-300">
                  {r.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
