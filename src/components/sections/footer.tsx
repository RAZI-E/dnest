import Image from "next/image";
import { MessageCircle, Share2 } from "lucide-react";

import { products } from "@/lib/products";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-24 sm:pb-16 text-slate-300 border-t border-navy-900">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="inline-block rounded-xl bg-navy-900 px-3.5 py-1.5 border border-navy-800">
              <Image
                src="/images/wordmark.png"
                alt={site.name}
                width={472}
                height={130}
                className="h-9 w-auto"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Artisan handcrafted chocolates made with passion and pure ingredients. Zero preservatives, 100% vegetarian, order fresh on WhatsApp.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              <a
                href={site.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp catalog"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-700 bg-navy-900 text-slate-300 transition-colors hover:border-white hover:text-white hover:bg-navy-800"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Share"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-700 bg-navy-900 text-slate-300 transition-colors hover:border-white hover:text-white hover:bg-navy-800"
              >
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Flavours */}
          <div>
            <h3 className="font-display text-lg font-bold text-white">Signature Flavours</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <a href="#shop" className="text-slate-400 hover:text-white transition-colors">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-white">Explore &amp; Order</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#why-dnest" className="text-slate-400 hover:text-white transition-colors">
                  Why D&apos;nest
                </a>
              </li>
              <li>
                <a href="#how-to-order" className="text-slate-400 hover:text-white transition-colors">
                  How to Order
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href={site.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp Catalog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-navy-900 pt-8 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {site.name} Chocolates. All rights reserved.
          </p>
          {site.fssaiLicense && (
            <p>FSSAI License No. {site.fssaiLicense}</p>
          )}
          <p className="text-slate-500">
            Handcrafted in India
          </p>
        </div>
      </div>
    </footer>
  );
}
