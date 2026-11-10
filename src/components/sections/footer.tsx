import Image from "next/image";
import { MessageCircle, Share2 } from "lucide-react";

import { products } from "@/lib/products";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-900 py-14 text-ivory/80">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Image
              src="/images/wordmark.png"
              alt={site.name}
              width={472}
              height={130}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
              Handcrafted chocolates made with love. No preservatives, no
              shortcuts — just real ingredients in every jar.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex gap-3">
              <a
                href={site.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp catalog"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/20 text-ivory/60 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/20 text-ivory/60 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Flavours */}
          <div>
            <h3 className="font-display text-lg text-gold-300">Flavours</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <a href="#shop" className="transition-colors hover:text-gold-300">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Order */}
          <div>
            <h3 className="font-display text-lg text-gold-300">Order</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#how-to-order" className="transition-colors hover:text-gold-300">
                  How to order
                </a>
              </li>
              <li>
                <a
                  href={site.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-300"
                >
                  WhatsApp catalog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gold-400/15 pt-6 text-xs text-ivory/50">
          {site.fssaiLicense && (
            <p className="mb-1">FSSAI License No. {site.fssaiLicense}</p>
          )}
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
