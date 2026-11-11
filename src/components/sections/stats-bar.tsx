const stats = [
  { value: "100%", label: "Vegetarian & Pure" },
  { value: "0", label: "Preservatives" },
  { value: "3", label: "Signature Flavours" },
  { value: "5.0★", label: "Customer Rating" },
];

export function StatsBar() {
  return (
    <div className="bg-white py-6 sm:py-10 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 sm:gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center text-center"
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
                {s.value}
              </p>
              <p className="mt-1 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-gray-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
