import { site } from "@/lib/site";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="bg-[#0D102D] text-[#C8A04A] py-2 px-3 sm:px-4 text-center text-xs font-medium tracking-wide border-b border-[#C8A04A]/20"
    >
      <a
        href={site.catalogUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 sm:gap-2 hover:text-[#DFBA67] transition-colors truncate max-w-full text-[11px] sm:text-xs"
      >
        <span>Handcrafted chocolate jars</span>
        <span className="opacity-40">·</span>
        <span>Fresh dispatch across India</span>
      </a>
    </aside>
  );
}
