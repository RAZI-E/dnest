"use client";

import Image from "next/image";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-gold-400/15 bg-navy-800/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        {/* Logo */}
        <a href="#top" aria-label={`${site.name} home`}>
          <Image
            src="/images/wordmark.png"
            alt={site.name}
            width={472}
            height={130}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-ivory/80 md:flex">
          <a href="#shop" className="transition-colors hover:text-gold-300">
            Flavours
          </a>
          <a href="#how-to-order" className="transition-colors hover:text-gold-300">
            How to order
          </a>
        </nav>

        {/* Desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={site.catalogUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Order on WhatsApp
            </a>
          </Button>
          {/* Mobile menu button */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ivory/80 hover:bg-navy-700 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div className="border-t border-gold-400/15 bg-navy-900 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            <a
              href="#shop"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ivory/80 hover:bg-navy-700 hover:text-gold-300"
            >
              Flavours
            </a>
            <a
              href="#how-to-order"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ivory/80 hover:bg-navy-700 hover:text-gold-300"
            >
              How to order
            </a>
          </nav>
          <Button asChild size="sm" className="mt-3 w-full">
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
