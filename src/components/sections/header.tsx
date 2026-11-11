"use client";

import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#top"
          aria-label={`${site.name} home`}
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/wordmark.png"
            alt={site.name}
            width={472}
            height={130}
            className="h-7 w-auto sm:h-8 object-contain drop-shadow-xs"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 text-sm font-medium tracking-wide text-gray-700 md:flex">
          <a href="#shop" className="transition-colors hover:text-navy-900">
            Flavours
          </a>
          <a href="#why-dnest" className="transition-colors hover:text-navy-900">
            Why D&apos;nest
          </a>
          <a href="#how-to-order" className="transition-colors hover:text-navy-900">
            How to Order
          </a>
          <a href="#faq" className="transition-colors hover:text-navy-900">
            FAQ
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-800 hover:bg-gray-50 active:scale-95 md:hidden cursor-pointer"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 shadow-xl md:hidden animate-fade-up">
          <nav className="flex flex-col divide-y divide-gray-100">
            <a
              href="#shop"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3.5 text-sm font-semibold text-gray-900 hover:text-navy-900"
            >
              <span>Flavours</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </a>
            <a
              href="#why-dnest"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3.5 text-sm font-semibold text-gray-900 hover:text-navy-900"
            >
              <span>Why D&apos;nest</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </a>
            <a
              href="#how-to-order"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3.5 text-sm font-semibold text-gray-900 hover:text-navy-900"
            >
              <span>How to Order</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </a>
            <a
              href="#faq"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3.5 text-sm font-semibold text-gray-900 hover:text-navy-900"
            >
              <span>FAQ</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
