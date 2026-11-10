import { MessageCircle, ShoppingBag } from "lucide-react";
import { site } from "@/lib/site";
import { formatINR, products } from "@/lib/products";

export function FloatingWhatsApp() {
  const { price, mrp } = products[0];

  return (
    <>
      {/* Mobile Sticky Bottom Conversion Bar (< sm) */}
      <div className="fixed bottom-0 inset-x-0 z-50 border-t border-gold-400/25 bg-navy-900/95 px-4 py-2.5 backdrop-blur shadow-2xl sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-ivory">
              D&apos;nest Chocolates
            </p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-bold text-gold-300">
                {formatINR(price)}
              </span>
              <span className="text-[11px] text-ivory/50 line-through">
                {formatINR(mrp)}
              </span>
            </div>
          </div>
          <a
            href={site.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-md active:scale-95"
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

