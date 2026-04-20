import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InnerHero } from "@/components/ui/InnerHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Our Featured Furniture & Interior Projects",
    description: "Explore Rama Interiors' portfolio featuring premium hospitality, residential, and institutional furniture projects delivered across India.",
};

export default function PortfolioPage() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col min-h-[100svh]">
                <InnerHero
                    title="Project Portfolio"
                    imageSrc="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80"
                    breadcrumbs={[{ label: "Portfolio", href: "/portfolio" }]}
                />

                <PortfolioGrid />
                <CtaBanner />
            </main>
            <Footer />
        </>
    );
}
