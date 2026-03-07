"use client";

import { motion } from "framer-motion";
import { Clock, Home, Building2, Hotel, GraduationCap } from "lucide-react";
import { Container } from "../ui/Container";

const timelines = [
    {
        title: "Bespoke Residential",
        duration: "25 - 40 Days",
        icon: Home,
        phases: ["Discovery", "3D Approval", "Fabrication", "Polish & Install"],
    },
    {
        title: "Commercial Offices",
        duration: "45 - 60 Days",
        icon: Building2,
        phases: ["Spatial Planning", "Layout Approval", "Mass Production", "Phased Delivery"],
    },
    {
        title: "Boutique Hotels",
        duration: "60 - 90 Days",
        icon: Hotel,
        phases: ["Theme Concept", "Sample Room Sign-off", "Bulk Fabrication", "Site Integration"],
    },
    {
        title: "Educational Seating",
        duration: "30 - 45 Days",
        icon: GraduationCap,
        phases: ["Requirement Gathering", "Prototyping", "Mass Manufacturing", "Delivery Dispatch"],
    },
];

export function ExecutionTimelines() {
    return (
        <section className="section-padding bg-surface border-t border-border">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="heading-2 mb-4"
                        >
                            Standard Execution <span className="text-accent italic font-light">Timelines</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-text-muted leading-relaxed"
                        >
                            We value your time. From initial concept sign-offs to final installation, our process is optimized for efficiency and precision delivery.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {timelines.map((timeline, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-bg border border-border rounded-3xl p-8 hover:shadow-lg transition-all duration-300 relative group"
                        >
                            <div className="flex flex-col sm:flex-row gap-6 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                                    <timeline.icon className="w-8 h-8 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-2">
                                        {timeline.title}
                                    </h3>
                                    <div className="inline-flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border">
                                        <Clock className="w-4 h-4 text-accent" />
                                        <span className="text-sm font-semibold text-primary">{timeline.duration}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border">
                                <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Process Phases</h4>
                                <ul className="space-y-3">
                                    {timeline.phases.map((phase, i) => (
                                        <li key={i} className="flex items-center gap-3 text-text-muted">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                            {phase}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
