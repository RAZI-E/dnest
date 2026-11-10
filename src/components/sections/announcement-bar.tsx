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
    <aside aria-label="Announcements" className="overflow-hidden bg-gold-400 text-navy-900">
      <a
        href={site.catalogUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-2 focus:outline-none focus:ring-2 focus:ring-navy-900"
      >
        <div className="animate-marquee flex whitespace-nowrap">
          {[...messages, ...messages].map((msg, i) => (
            <span key={i} className="mx-10 text-sm font-semibold">
              {msg}
            </span>
          ))}
        </div>
      </a>
    </aside>
  );
}
