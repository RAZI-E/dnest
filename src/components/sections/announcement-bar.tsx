import { site } from "@/lib/site";

const messages = [
  "Artisan Handcrafted Chocolates — 100% Vegetarian & Preservative-Free",
  "Three Signature Delights: Roasted Peanut · Shahi Gulkand · Mix Fruit",
  "Curated Handcrafted Jars — Exquisite for Gifting & Celebrations",
  "Freshly Poured in Small Batches — Direct Doorstep Dispatch across India",
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
