"use client";

import Image from "next/image";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        {/* Logo */}
        <a href="#top" aria-label={`${site.name} home`} className="flex items-center gap-2">
          <div className="rounded-xl bg-navy-900 px-3 py-1 shadow-sm transition-transform hover:scale-102">
            <Image
              src="/images/wordmark.png"
              alt={site.name}
              width={472}
              height={130}
              className="h-7 w-auto sm:h-8"
              priority
            />
          </div>
        </a>

        {/* Desktop nav (GOAT Life Clean Style) */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-gray-800 md:flex">
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

        {/* Desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex bg-navy-900 text-white hover:bg-navy-800">
            <a href={site.catalogUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Order on WhatsApp
            </a>
          </Button>
          {/* Mobile menu button */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-800 hover:bg-gray-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-5 py-4 shadow-xl md:hidden">
          <nav className="flex flex-col gap-1">
            <a
              href="#shop"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 hover:text-navy-900"
            >
              Flavours
            </a>
            <a
              href="#why-dnest"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 hover:text-navy-900"
            >
              Why D&apos;nest
            </a>
            <a
              href="#how-to-order"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 hover:text-navy-900"
            >
              How to Order
            </a>
            <a
              href="#faq"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 hover:text-navy-900"
            >
              FAQ
            </a>
          </nav>
          <Button asChild size="sm" className="mt-3 w-full bg-navy-900 text-white hover:bg-navy-800">
            <a href={site.catalogUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Order on WhatsApp
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
