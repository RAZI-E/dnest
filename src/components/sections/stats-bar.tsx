const stats = [
  { value: "100%", label: "Homemade" },
  { value: "0", label: "Preservatives" },
  { value: "3", label: "Unique Flavours" },
  { value: "⚡", label: "WhatsApp Orders" },
];

export function StatsBar() {
  return (
    <div className="bg-navy-900 py-8 border-y border-navy-800 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {s.value}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-300">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

