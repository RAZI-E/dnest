"use client";

import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  // Prevent background scrolling when full-screen mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#C8A04A]/20 bg-[#12163A]/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
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
              className="h-6 w-auto sm:h-8 object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-sm font-medium tracking-wide text-[#F6F3EE]/80 md:flex">
            <a href="#flavours" className="transition-colors hover:text-[#C8A04A]">
              Flavours
            </a>
            <a href="#gift-set" className="transition-colors hover:text-[#C8A04A]">
              Gift set
            </a>
            <a href="#why-dnest" className="transition-colors hover:text-[#C8A04A]">
              Why D&apos;nest
            </a>
            <a href="#how-to-order" className="transition-colors hover:text-[#C8A04A]">
              How to order
            </a>
            <a href="#reviews" className="transition-colors hover:text-[#C8A04A]">
              Reviews
            </a>
            <a href="#faq" className="transition-colors hover:text-[#C8A04A]">
              FAQ
            </a>
          </nav>

          {/* Mobile menu trigger with 48px tap target */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A04A]/30 text-[#C8A04A] hover:bg-[#C8A04A]/10 active:scale-95 md:hidden cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Full-Screen Navy Mobile Menu Overlay */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#12163A] p-6 text-[#F6F3EE] md:hidden animate-hero-text"
        >
          {/* Top Bar with Logo and 48px Close Button */}
          <div className="flex h-14 items-center justify-between border-b border-[#C8A04A]/20 pb-4">
            <Image
              src="/images/wordmark.png"
              alt={site.name}
              width={472}
              height={130}
              className="h-6 w-auto object-contain"
            />
            <button
              type="button"
              aria-label="Close menu"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A04A]/30 text-[#C8A04A] hover:bg-[#C8A04A]/10 active:scale-95 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Large Fraunces Links */}
          <nav className="my-auto flex flex-col gap-5 py-6">
            <a
              href="#flavours"
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-medium tracking-tight text-[#F6F3EE] hover:text-[#C8A04A] transition-colors py-1"
            >
              Flavours
            </a>
            <a
              href="#gift-set"
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-medium tracking-tight text-[#F6F3EE] hover:text-[#C8A04A] transition-colors py-1"
            >
              Gift set
            </a>
            <a
              href="#why-dnest"
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-medium tracking-tight text-[#F6F3EE] hover:text-[#C8A04A] transition-colors py-1"
            >
              Why D&apos;nest
            </a>
            <a
              href="#how-to-order"
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-medium tracking-tight text-[#F6F3EE] hover:text-[#C8A04A] transition-colors py-1"
            >
              How to order
            </a>
            <a
              href="#reviews"
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-medium tracking-tight text-[#F6F3EE] hover:text-[#C8A04A] transition-colors py-1"
            >
              Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-medium tracking-tight text-[#F6F3EE] hover:text-[#C8A04A] transition-colors py-1"
            >
              FAQ
            </a>
          </nav>

          {/* Bottom WhatsApp Button in Overlay */}
          <div className="border-t border-[#C8A04A]/20 pt-5 flex flex-col gap-3">
            <Button
              asChild
              variant="gold"
              size="lg"
              className="w-full text-[#12163A] font-medium"
            >
              <a
                href={site.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                <span>Order on WhatsApp</span>
              </a>
            </Button>
            <p className="text-center text-xs text-[#F6F3EE]/60">
              ₹349 · 500g handcrafted chocolate jars
            </p>
          </div>
        </div>
      )}
    </>
  );
}
