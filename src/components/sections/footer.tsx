import Image from "next/image";
import { MessageCircle } from "lucide-react";

import { products } from "@/lib/products";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#12163A] pt-12 pb-[max(5.5rem,calc(4.5rem+env(safe-area-inset-bottom)))] sm:pb-14 text-[#F6F3EE] border-t border-[#C8A04A]/25">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] items-start">
          {/* Brand */}
          <div>
            <a href="#top" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="/images/wordmark.png"
                alt={site.name}
                width={472}
                height={130}
                className="h-7 w-auto"
              />
            </a>
            <p className="mt-3.5 max-w-xs text-xs sm:text-sm leading-relaxed text-[#F6F3EE]/70">
              Handcrafted artisan chocolate jars made with pure cocoa butter and honest ingredients. 100% vegetarian with zero preservatives.
            </p>
          </div>

          {/* Flavours */}
          <div>
            <h3 className="font-display text-base font-medium text-[#C8A04A]">
              Flavours
            </h3>
            <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-[#F6F3EE]/75">
              {products.map((p) => (
                <li key={p.slug}>
                  <a
                    href="#flavours"
                    className="hover:text-[#C8A04A] transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog & Ordering */}
          <div>
            <h3 className="font-display text-base font-medium text-[#C8A04A]">
              Catalog &amp; ordering
            </h3>
            <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-[#F6F3EE]/75">
              <li>
                <a
                  href={site.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#C8A04A] hover:text-[#DFBA67] font-medium transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>WhatsApp catalog</span>
                </a>
              </li>
              <li>
                <a href="#gift-set" className="hover:text-[#C8A04A] transition-colors">
                  Gift set &amp; hampers
                </a>
              </li>
              <li>
                <a href="#how-to-order" className="hover:text-[#C8A04A] transition-colors">
                  How to order
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C8A04A] transition-colors">
                  Frequently asked questions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Compact Bottom Line */}
        <div className="mt-10 border-t border-[#C8A04A]/15 pt-6 text-xs text-[#F6F3EE]/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {site.name} Chocolates. Handcrafted in India.
          </p>
          <p className="text-[#F6F3EE]/40">
            500g glass jars · Pure vegetarian confectionery
          </p>
        </div>
      </div>
    </footer>
  );
}
