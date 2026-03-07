"use client";

import { motion } from "framer-motion";
import { Hammer, Truck, ShieldCheck, Ruler } from "lucide-react";
import { Container } from "../ui/Container";

const reasons = [
    {
        icon: Hammer,
        title: "Premium Materials",
        desc: "We source high-grade blockboards, veneers, and laminates to ensure longevity.",
    },
    {
        icon: Ruler,
        title: "Precision Engineering",
        desc: "Modern edge-banding and CNC routing mean absolute structural accuracy.",
    },
    {
        icon: Truck,
        title: "Turnkey Execution",
        desc: "From factory floor to on-site assembly, we handle the entire lifecycle.",
    },
    {
        icon: ShieldCheck,
        title: "Warranty Backed",
        desc: "Our manufacturing defects warranty protects your investment.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="section-padding bg-primary text-white relative overflow-hidden">
            {/* Abstract Background Vectors */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] border-[100px] border-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                    {/* Text & Reasons */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <h2 className="heading-2 text-white mb-6">
                            The <span className="text-accent italic font-light">Advantage</span> of Direct Manufacturing
                        </h2>
                        <p className="text-lg text-white/70 mb-12 max-w-2xl">
                            By eliminating middlemen, we maintain absolute control over the quality, scheduling, and finishing of every piece that leaves our facility.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {reasons.map((reason, idx) => {
                                const Icon = reason.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                                        className="flex gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                                            <Icon className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                                            <p className="text-sm text-white/60 leading-relaxed">{reason.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Image / Visual Element replacing the repetitive Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative h-full min-h-[400px] lg:min-h-[500px]"
                    >
                        <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80"
                                alt="Direct Manufacturing Control"
                                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                            />
                            {/* Overlay gradient to blend with the blue background lightly */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-multiply" />
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
