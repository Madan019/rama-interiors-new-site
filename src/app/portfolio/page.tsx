import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InnerHero } from "@/components/ui/InnerHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = {
    title: 'Portfolio | Rama Interiors',
    description: 'Explore our portfolio of interior design and manufacturing projects.',
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
