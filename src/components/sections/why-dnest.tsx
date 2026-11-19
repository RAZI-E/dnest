const statements = [
  {
    title: "Small-batch preparation",
    text: "Every jar is hand-poured fresh in small kitchen batches to preserve authentic chocolate texture and delicate cocoa aroma.",
  },
  {
    title: "Pure, honest ingredients",
    text: "Real roasted peanuts, authentic Shahi gulkand, and sun-dried fruit bits. Zero artificial preservatives, zero palm oil, and 100% vegetarian.",
  },
  {
    title: "Heavy glass jar packaging",
    text: "Reusable 500g glass jars with embossed gold sealing, designed to feel like a treasured gift on any dining table.",
  },
  {
    title: "Direct personal ordering",
    text: "No apps or account sign-ups. Your order is confirmed personally by our chocolatiers and dispatched fresh across India.",
  },
];

export function WhyDnest() {
  return (
    <section id="why-dnest" className="bg-[#F6F3EE] py-16 sm:py-24 border-b border-[#3B2218]/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl text-left mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[#12163A] tracking-[-0.02em] leading-[1.08]">
            Chocolate made the right way
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3B2218]/80 leading-relaxed">
            We believe the finest confectionery begins with honest ingredients, slow artisanal patience, and zero shortcuts.
          </p>
        </div>

        {/* Two-Column Editorial Text Block with Thin Gold Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 sm:gap-y-12">
          {statements.map((s, index) => (
            <div
              key={s.title}
              className="border-t border-[#C8A04A]/35 pt-6 sm:pt-7 text-left"
            >
              <span className="font-price text-xs font-medium text-[#C8A04A] tracking-widest uppercase">
                0{index + 1}
              </span>
              <h3 className="font-display mt-2 text-xl sm:text-2xl font-medium text-[#12163A] tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#3B2218]/85 max-w-[50ch]">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
