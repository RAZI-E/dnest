import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { FAQ } from "@/components/sections/faq";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { Footer } from "@/components/sections/footer";
import { GiftingBanner } from "@/components/sections/gifting-banner";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { HowToOrder } from "@/components/sections/how-to-order";
import { Products } from "@/components/sections/products";
import { Reviews } from "@/components/sections/reviews";
import { StatsBar } from "@/components/sections/stats-bar";
import { WhyDnest } from "@/components/sections/why-dnest";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <StatsBar />
        <Products />
        <WhyDnest />
        <GiftingBanner />
        <HowToOrder />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
