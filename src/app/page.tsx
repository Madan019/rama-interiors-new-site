import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutOverview } from "@/components/sections/AboutOverview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { ContactSection } from "@/components/sections/ContactSection";
import { CapacityScale } from "@/components/sections/CapacityScale";
import { ExecutionTimelines } from "@/components/sections/ExecutionTimelines";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-[100svh]">
        <Hero />
        <WhyChooseUs />
        <AboutOverview />
        <ServicesOverview />
        <CapacityScale />
        <ExecutionTimelines />
        <PortfolioPreview />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
