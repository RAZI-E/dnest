import { site } from "@/lib/site";

const messages = [
  "🍫 Homemade with love — no preservatives, no shortcuts",
  "🎁 Perfect gifting option for every occasion",
  "✅ Order easily on WhatsApp — fast & personal",
  "🛍️ Tap anywhere to open our WhatsApp catalog",
  "🌹 Gulkand · 🥜 Peanut · 🍇 Mix Fruit — three flavours, one jar of joy",
];

export function AnnouncementBar() {
  return (
    <aside aria-label="Announcements" className="overflow-hidden bg-navy-900 text-white border-b border-navy-800">
      <a
        href={site.catalogUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-2.5 focus:outline-none focus:ring-2 focus:ring-gold-400"
      >
        <div className="animate-marquee flex whitespace-nowrap">
          {[...messages, ...messages].map((msg, i) => (
            <span key={i} className="mx-8 text-xs sm:text-sm font-semibold tracking-wide">
              {msg}
            </span>
          ))}
        </div>
      </a>
    </aside>
  );
}
