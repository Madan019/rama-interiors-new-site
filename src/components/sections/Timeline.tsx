"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const steps = [
    {
        num: "01",
        title: "Initial Consultation",
        desc: "We discuss your spatial requirements, preferred materials, and intended project timelines.",
    },
    {
        num: "02",
        title: "Design & Prototyping",
        desc: "Our technical team reviews architectural designs and produces prototypes or 3D renders for approval.",
    },
    {
        num: "03",
        title: "Material Sourcing",
        desc: "We procure premium blockboards, veneers, and hardware directly from trusted partners to ensure durability.",
    },
    {
        num: "04",
        title: "Precision Manufacturing",
        desc: "Utilizing CNC routing and edge-banding, we cut and assemble the units accurately to shop drawings.",
    },
    {
        num: "05",
        title: "Finishing & Assembly",
        desc: "Components are painted, polished, and pre-assembled on the factory floor for quality checks.",
    },
    {
        num: "06",
        title: "Delivery & Installation",
        desc: "Safe transport to the site, where our expert fitting team handles final installation and handover.",
    },
];

export function Timeline() {
    return (
        <section className="section-padding bg-bg overflow-hidden">
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h2 className="heading-2 mb-4">
                            Our Manufacturing <span className="text-accent italic font-light">Process</span>
                        </h2>
                        <p className="text-lg text-text-muted">
                            From concept to installation, we maintain complete control over quality.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Center Line for Desktop */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

                        {/* Left Line for Mobile */}
                        <div className="absolute left-6 top-8 bottom-0 w-px bg-border md:hidden" />

                        <div className="space-y-12 md:space-y-0 relative">
                            {steps.map((step, i) => {
                                const isEven = i % 2 === 0;

                                return (
                                    <motion.div
                                        key={step.num}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        className={`flex flex-col md:flex-row items-start md:items-center w-full relative pl-16 md:pl-0 ${isEven ? "md:justify-start" : "md:justify-end"
                                            } md:h-48`}
                                    >
                                        {/* Content Box */}
                                        <div className={`w-full md:w-[45%] ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                                            <div className="bg-surface p-6 rounded-2xl border border-border hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300">
                                                <div className="text-xs font-bold text-accent mb-2 tracking-widest uppercase">
                                                    Phase {step.num}
                                                </div>
                                                <h3 className="text-xl font-semibold text-primary mb-3">
                                                    {step.title}
                                                </h3>
                                                <p className="text-sm text-text-muted leading-relaxed">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Timeline Node */}
                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-semibold z-10 shadow-lg border-4 border-bg">
                                            {step.num}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
