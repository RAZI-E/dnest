const stats = [
  { value: "100%", label: "Homemade" },
  { value: "0", label: "Preservatives" },
  { value: "3", label: "Unique Flavours" },
  { value: "⚡", label: "WhatsApp Orders" },
];

export function StatsBar() {
  return (
    <div className="bg-white py-8 sm:py-10 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center rounded-2xl bg-slate-50/60 border border-gray-100 p-4 sm:p-5 text-center transition-all hover:bg-slate-50"
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
                {s.value}
              </p>
              <p className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
