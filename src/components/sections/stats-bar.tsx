const stats = [
  { value: "100%", label: "Homemade" },
  { value: "0", label: "Preservatives" },
  { value: "3", label: "Unique Flavours" },
  { value: "⚡", label: "WhatsApp Orders" },
];

export function StatsBar() {
  return (
    <div className="bg-cocoa py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-semibold text-gold-300">
              {s.value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-ivory/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

