import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InnerHero } from "@/components/ui/InnerHero";
import { Services } from "@/components/sections/Services";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Bespoke Furniture & Bulk Manufacturing",
    description: "Explore our expert services in bulk furniture manufacturing, luxury residential interiors, and large-scale commercial setups in Rajasthan.",
};

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col min-h-[100svh]">
                <InnerHero
                    title="Our Services"
                    imageSrc="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=80"
                    breadcrumbs={[{ label: "Services", href: "/services" }]}
                />

                <Services />
                <CtaBanner />
            </main>
            <Footer />
        </>
    );
}
