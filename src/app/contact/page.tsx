import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InnerHero } from "@/components/ui/InnerHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote for Bulk Furniture",
  description: "Contact Rama Interiors for premium furniture manufacturing, bulk orders, and bespoke interior solutions in Jaipur, Rajasthan.",
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col min-h-[100svh]">
                <InnerHero
                    title="Contact Us"
                    imageSrc="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=80"
                    breadcrumbs={[{ label: "Contact", href: "/contact" }]}
                />

                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
