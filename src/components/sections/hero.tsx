import Image from "next/image";
import { MessageCircle, ShieldCheck, Leaf, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ChocolateDrip } from "@/components/sections/chocolate-drip";
import { site } from "@/lib/site";

const badges = [
  { icon: Leaf, label: "No Preservatives" },
  { icon: Heart, label: "Made with Love" },
  { icon: ShieldCheck, label: "Quality Assured" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-800 pb-24 pt-12 md:pb-32 md:pt-20"
    >
      {/* Subtle background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #d4af5a 0%, transparent 50%), radial-gradient(circle at 80% 20%, #d4af5a 0%, transparent 40%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        {/* Text side */}
        <div className="text-center md:text-left">
          <span className="mb-4 inline-block rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
            Handcrafted Chocolates
          </span>
          <h1 className="font-display text-5xl font-medium leading-[1.08] text-gold-300 md:text-6xl lg:text-7xl">
            Homemade chocolates that tell a story
          </h1>
          <p className="mx-auto mt-5 max-w-sm text-base leading-relaxed text-ivory/75 md:mx-0 md:max-w-md md:text-lg">
            Three unique flavours — Peanut, Gulkand and Mix Fruit — each jar
            crafted fresh with premium chocolate and real ingredients.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href={site.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle />
                Shop on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#shop">See the flavours</a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex justify-center gap-6 md:justify-start">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10">
                  <Icon className="h-4 w-4 text-gold-300" />
                </div>
                <span className="text-center text-xs font-medium text-ivory/70">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Logo / image side */}
        <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-none">
          <Image
            src="/images/logo-lockup.png"
            alt={`${site.name} — Homemade chocolates`}
            width={620}
            height={511}
            priority
            className="animate-float h-auto w-full drop-shadow-2xl [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_80%)]"
          />
        </div>
      </div>

      <ChocolateDrip />
    </section>
  );
}
