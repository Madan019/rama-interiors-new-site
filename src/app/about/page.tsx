import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InnerHero } from "@/components/ui/InnerHero";
import { Container } from "@/components/ui/Container";
import { AboutOverview } from "@/components/sections/AboutOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col min-h-[100svh]">
                <InnerHero
                    title="About Rama Interiors"
                    imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
                    breadcrumbs={[{ label: "About", href: "/about" }]}
                />

                <AboutOverview />

                {/* Our Story / Alternating Layout Sections */}
                <section className="section-padding bg-surface">
                    <Container>
                        <div className="flex flex-col gap-16 lg:gap-24">
                            {/* Mission & History */}
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div className="order-2 lg:order-1 space-y-6">
                                    <h2 className="heading-3 mb-4">Our Foundation & Mission</h2>
                                    <div className="w-12 h-1 bg-accent rounded-full mb-6" />
                                    <p className="text-lg text-text-muted leading-relaxed">
                                        Founded in 1999, Rama Interiors began with a clear mission: to provide the highest standard of wooden and modular furniture for bulk and bespoke projects. Based in Jaipur, we have grown into a trusted strategic partner for interior designers, architects, and corporate clients across India.
                                    </p>
                                    <p className="text-lg text-text leading-relaxed font-medium">
                                        We believe that every piece of furniture should be an intersection of durability, aesthetics, and flawless utility.
                                    </p>
                                </div>
                                <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-lg aspect-video lg:aspect-[4/3]">
                                    <img
                                        src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1200&q=80"
                                        alt="Factory workshop"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Process & Quality */}
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div className="rounded-3xl overflow-hidden shadow-lg aspect-video lg:aspect-[4/3]">
                                    <img
                                        src="https://images.unsplash.com/photo-1620626011740-1a74d2b23a7e?auto=format&fit=crop&w=1200&q=80"
                                        alt="Quality control"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="space-y-6">
                                    <h2 className="heading-3 mb-4">Uncompromising Quality</h2>
                                    <div className="w-12 h-1 bg-accent rounded-full mb-6" />
                                    <p className="text-lg text-text-muted leading-relaxed">
                                        Our success is built on a foundation of rigorous quality control, from the selection of premium materials to the final installation. We engineer bespoke solutions for each client's unique requirements, ensuring flawless utility and durability.
                                    </p>
                                    <p className="text-lg text-text-muted leading-relaxed">
                                        With advanced machinery and a dedicated workforce, we execute complex designs with precision, ensuring both bespoke pieces and bulk orders meet luxury standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <WhyChooseUs />
                <CtaBanner />
            </main>
            <Footer />
        </>
    );
}
