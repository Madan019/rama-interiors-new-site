"use client";

import { motion } from "framer-motion";
import { ArrowRight, Drill, Home, GraduationCap, Building2, ChefHat, Archive, Briefcase } from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/Container";

const services = [
    {
        title: "Modular Kitchens",
        desc: "Custom-designed modular kitchens crafted using premium materials, offering style, durability, and convenience.",
        icon: ChefHat,
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
        delay: 0.1,
    },
    {
        title: "Wardrobes & Storage",
        desc: "Elegant and highly functional wardrobe solutions tailored to your lifestyle. We maximize space utilization.",
        icon: Archive,
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
        delay: 0.2,
    },
    {
        title: "Commercial Interiors",
        desc: "End-to-end interior solutions for offices, retail stores, and commercial establishments tailored to your brand.",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        delay: 0.3,
    },
    {
        title: "Interior Design",
        desc: "Expert design services blending aesthetics and functionality. We transform spaces with tailored concepts.",
        icon: Home,
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        delay: 0.4,
    },
];

export function ServicesOverview() {
    return (
        <section id="services" className="section-padding bg-surface">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="heading-2 mb-4">
                            Comprehensive <span className="text-accent italic font-light">Capabilities</span>
                        </h2>
                        <p className="text-lg text-text-muted">
                            From individual statement pieces to bulk institutional orders, our production lines are optimized for diverse requirements.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors pb-1 border-b-2 border-primary hover:border-accent">
                            Explore All Services
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <Link href="/about" key={idx} className="block group">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: service.delay }}
                                    className="relative h-[400px] rounded-2xl overflow-hidden bg-primary shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 border border-transparent group-hover:border-accent/40"
                                >
                                    {/* Background Image */}
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:-translate-y-2 border border-white/20">
                                            <Icon className="w-6 h-6 text-accent" />
                                        </div>

                                        <h3 className="text-xl font-semibold text-white mb-3 transform transition-transform duration-300 group-hover:-translate-y-2">
                                            {service.title}
                                        </h3>

                                        <p className="text-sm text-white/70 line-clamp-3 pr-8 transform transition-all duration-300 group-hover:-translate-y-2 group-hover:text-white/90">
                                            {service.desc}
                                        </p>

                                        {/* Hover Arrow */}
                                        <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 bg-accent/20 p-2 rounded-full backdrop-blur-sm">
                                            <ArrowRight className="w-5 h-5 text-accent" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
