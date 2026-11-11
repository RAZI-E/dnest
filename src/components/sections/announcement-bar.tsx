import { site } from "@/lib/site";

const messages = [
  "🍫 Homemade with love — no preservatives, zero artificial shortcuts",
  "🎁 Beautifully packed jars — ideal for gifting & celebrations",
  "✅ Order directly on WhatsApp — fast & personal confirmation",
  "🛍️ Tap to browse all flavours on WhatsApp catalog",
  "🌹 Gulkand · 🥜 Peanut · 🍇 Mix Fruit — three handcrafted favourites",
];

export function AnnouncementBar() {
  return (
    <aside aria-label="Announcements" className="overflow-hidden bg-navy-900 text-white border-b border-navy-800">
      <a
        href={site.catalogUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-2.5 focus:outline-none focus:ring-2 focus:ring-white/40"
      >
        <div className="animate-marquee flex whitespace-nowrap">
          {[...messages, ...messages].map((msg, i) => (
            <span key={i} className="mx-8 text-xs sm:text-sm font-semibold tracking-wide text-white">
              {msg}
            </span>
          ))}
        </div>
      </a>
    </aside>
  );
}
