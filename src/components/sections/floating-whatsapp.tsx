import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { formatINR, products } from "@/lib/products";

export function FloatingWhatsApp() {
  const { price, mrp } = products[0];

  return (
    <>
      {/* Mobile Sticky Bottom Conversion Bar (< sm) with safe-area support */}
      <div className="fixed bottom-0 inset-x-0 z-50 border-t border-navy-800/80 bg-navy-900/95 px-4 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md shadow-2xl sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold tracking-wide uppercase text-slate-300">
              D&apos;nest Chocolates
            </p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-bold text-white">
                {formatINR(price)}
              </span>
              <span className="text-[11px] text-slate-400 line-through">
                {formatINR(mrp)}
              </span>
              <span className="text-[10px] font-semibold text-emerald-400">
                Save 25%
              </span>
            </div>
          </div>
          <a
            href={site.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-md active:scale-95 transition-all duration-200 hover:bg-[#20ba5a]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating Pill (>= sm) */}
      <a
        href={site.catalogUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-8 right-8 z-50 hidden sm:flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] hover:shadow-2xl"
      >
        <MessageCircle className="h-5 w-5" />
        <span>Order on WhatsApp</span>
      </a>
    </>
  );
}

