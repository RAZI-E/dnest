import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { formatINR, products } from "@/lib/products";

export function FloatingWhatsApp() {
  const { price, weight } = products[0];

  return (
    <>
      {/* Mobile Sticky Bottom Conversion Bar (< sm) with safe-area support */}
      <div className="fixed bottom-0 inset-x-0 z-50 border-t border-[#C8A04A]/30 bg-[#12163A]/98 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md shadow-2xl sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-[#F6F3EE]">
              D&apos;nest Chocolates
            </p>
            <div className="flex items-baseline gap-1.5">
              <span className="font-price text-sm font-medium text-[#C8A04A]">
                {formatINR(price)}
              </span>
              <span className="text-[11px] text-[#F6F3EE]/60">
                · {weight}
              </span>
            </div>
          </div>
          <a
            href={site.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
            className="flex items-center gap-2 rounded-full bg-[#C8A04A] px-4 py-2.5 text-xs font-medium text-[#12163A] shadow-sm active:scale-95 transition-all duration-200 hover:bg-[#B68F3C]"
          >
            <MessageCircle className="h-3.5 w-3.5 text-[#12163A]" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating Action (>= sm) */}
      <a
        href={site.catalogUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-7 right-7 z-50 hidden sm:flex items-center gap-2.5 rounded-full bg-[#12163A] text-[#C8A04A] border border-[#C8A04A]/40 px-5 py-3 text-sm font-medium shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#0D102D] hover:border-[#C8A04A]"
      >
        <MessageCircle className="h-4 w-4 text-[#25D366]" />
        <span>Order on WhatsApp</span>
      </a>
    </>
  );
}

