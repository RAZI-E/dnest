const steps = [
  {
    step: "1",
    title: "Browse the catalog",
    sentence: "Tap any order button to open our official WhatsApp catalog with all three 500g flavours.",
  },
  {
    step: "2",
    title: "Select your jars",
    sentence: "Choose your flavours and quantities, then send your selected jars directly in chat.",
  },
  {
    step: "3",
    title: "Confirm and receive",
    sentence: "We share UPI details, confirm your delivery address, and dispatch your jars fresh across India.",
  },
];

export function HowToOrder() {
  return (
    <section id="how-to-order" className="bg-[#FAF8F5] py-16 sm:py-24 border-b border-[#3B2218]/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl text-left mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[#12163A] tracking-[-0.02em] leading-[1.08]">
            Order in three easy steps
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3B2218]/80 leading-relaxed">
            No accounts or downloads. Direct personal ordering through WhatsApp in under a minute.
          </p>
        </div>

        {/* Mobile Vertical Timeline (< md) */}
        <div className="relative pl-8 md:hidden text-left">
          {/* Continuous thin vertical gold line on the left */}
          <div
            aria-hidden
            className="absolute left-3.5 top-3.5 bottom-3.5 w-[1px] bg-[#C8A04A]/35"
          />

          <ol className="space-y-8">
            {steps.map((s) => (
              <li key={s.step} className="relative flex items-start gap-4">
                {/* Small numeral on the vertical line */}
                <span className="absolute -left-8 flex h-7 w-7 items-center justify-center rounded-full bg-[#12163A] text-[#C8A04A] font-price text-xs font-medium ring-4 ring-[#FAF8F5]">
                  {s.step}
                </span>
                <div className="pt-0.5">
                  <h3 className="font-display text-lg font-medium text-[#12163A]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#3B2218]/85">
                    {s.sentence}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Desktop Single Horizontal Sequence (>= md) */}
        <ol className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12 text-left relative pt-2">
          {/* Thin subtle horizontal connecting line behind numerals */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-4 right-12 top-6 h-[1px] bg-[#C8A04A]/25 -z-0"
          />
          {steps.map((s) => (
            <li key={s.step} className="relative z-10 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#12163A] text-[#C8A04A] font-price text-sm font-medium shadow-xs">
                  {s.step}
                </span>
                <h3 className="font-display text-xl lg:text-2xl font-medium text-[#12163A]">
                  {s.title}
                </h3>
              </div>
              <p className="text-sm lg:text-base leading-relaxed text-[#3B2218]/85 max-w-[38ch]">
                {s.sentence}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
