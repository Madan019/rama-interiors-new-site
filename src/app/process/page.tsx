import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InnerHero } from "@/components/ui/InnerHero";
import { Timeline } from "@/components/sections/Timeline";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function ProcessPage() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col min-h-[100svh]">
                <InnerHero
                    title="Process & Approach"
                    imageSrc="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=2400&q=80"
                    breadcrumbs={[{ label: "Process", href: "/process" }]}
                />

                <Timeline />
                <CtaBanner />
            </main>
            <Footer />
        </>
    );
}
