import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={site.catalogUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Order on WhatsApp</span>
    </a>
  );
}

