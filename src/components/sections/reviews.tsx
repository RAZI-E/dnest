import { Star } from "lucide-react";
import { reviews } from "@/lib/reviews";

export function Reviews() {
  if (reviews.length === 0) return null;

  const [featured, ...others] = reviews;

  return (
    <section id="reviews" className="bg-[#F6F3EE] py-16 sm:py-24 border-b border-[#3B2218]/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-xl text-left mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[#12163A] tracking-[-0.02em]">
            What chocolate lovers say
          </h2>
        </div>

        {/* One Large Featured Quote in Fraunces */}
        <div className="rounded-2xl border border-[#C8A04A]/30 bg-[#FAF8F5] p-7 sm:p-12 text-left shadow-xs">
          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-6">
            {Array.from({ length: featured.rating ?? 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-[#C8A04A] text-[#C8A04A]"
              />
            ))}
          </div>

          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#12163A] leading-[1.2] tracking-[-0.015em] max-w-[42ch]">
            &ldquo;{featured.text}&rdquo;
          </blockquote>

          <div className="mt-7 flex items-center gap-3 text-sm">
            <span className="font-medium text-[#12163A]">
              {featured.name}
            </span>
            <span className="text-xs text-[#C8A04A] font-medium tracking-wide uppercase">
              Verified buyer
            </span>
          </div>
        </div>

        {/* Swipeable Carousel with Scroll-Snap & Peek of Next Card */}
        {others.length > 0 && (
          <div className="mt-8 sm:mt-10 -mx-4 px-4 flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory sm:mx-0 sm:px-0">
            {others.map((r) => (
              <div
                key={r.name}
                className="w-[82vw] max-w-[320px] sm:w-[320px] shrink-0 snap-start rounded-xl border border-[#3B2218]/10 bg-white/80 p-5 sm:p-6 text-left flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: r.rating ?? 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[#C8A04A] text-[#C8A04A]"
                      />
                    ))}
                  </div>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#3B2218]/90">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-[#3B2218]/10 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-medium text-[#12163A]">{r.name}</span>
                  <span className="text-[#C8A04A] font-medium tracking-wide">
                    Verified buyer
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
