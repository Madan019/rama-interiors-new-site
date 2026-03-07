"use client";

import { motion } from "framer-motion";
import { Users, Truck, Factory, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";

const stats = [
    {
        icon: Factory,
        value: "20,000+",
        label: "Sq.Ft. Manufacturing Area",
        desc: "State-of-the-art facility equipped with precision German machinery.",
    },
    {
        icon: Users,
        value: "50+",
        label: "Skilled Craftsmen",
        desc: "Dedicated team of artisans, engineers, and project managers.",
    },
    {
        icon: Truck,
        value: "200+",
        label: "Projects Delivered",
        desc: "Successfully executed across residential, commercial, and educational sectors.",
    },
    {
        icon: ShieldCheck,
        value: "100%",
        label: "Quality Compliance",
        desc: "Strict adherence to safety and architectural specifications.",
    },
];

export function CapacityScale() {
    return (
        <section className="section-padding bg-bg border-t border-border">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-2 mb-4"
                    >
                        Built to Handle <span className="text-accent italic font-light">Scale</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-text-muted"
                    >
                        Our infrastructure is designed to execute large-volume orders without compromising on the detailing and finish of individual pieces.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-surface border border-border rounded-3xl p-8 hover:border-accent/30 transition-colors duration-300 relative overflow-hidden group"
                        >
                            {/* Background accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-bg border border-border flex items-center justify-center mb-6 text-accent group-hover:bg-accent/10 transition-colors duration-300">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="text-4xl font-bold text-primary mb-2 tabular-nums tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                                    {stat.label}
                                </div>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {stat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
