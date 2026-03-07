"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "../ui/Container";

const features = [
    "In-house machinery for blockboard, laminate, and veneer.",
    "Custom sizes and finishes for any project scale.",
    "Strict adherence to architectural drawings and specs.",
    "Timely delivery with professional on-site installation.",
];

export function AboutOverview() {
    return (
        <section className="section-padding bg-bg relative overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80"
                                alt="Craftsmanship detail"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent mix-blend-multiply" />
                        </div>

                        {/* Floating Stat Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute -bottom-8 -right-4 md:-right-12 lg:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl z-20 max-w-xs border border-border"
                        >
                            <div className="text-4xl font-bold text-accent mb-2 tracking-tight">20+</div>
                            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Years Experience</div>
                            <p className="text-xs text-text-muted leading-relaxed">
                                Decades of refined craftsmanship and trusted industry leadership since 1999.
                            </p>
                        </motion.div>

                        {/* Decorative Background Element */}
                        <div className="absolute top-10 -left-10 w-full h-full border-2 border-accent/20 rounded-3xl -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 to-transparent" />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="pt-10 lg:pt-0"
                    >
                        <h2 className="heading-2 mb-6">
                            Engineering Your <br />
                            <span className="text-accent font-light italic">Vision</span> to Reality
                        </h2>

                        <p className="text-lg text-text leading-relaxed mb-6">
                            Since 1999, Rama Interiors has been at the forefront of wooden and modular furniture manufacturing. We bridge the gap between architectural design and flawless execution.
                        </p>
                        <p className="text-lg text-text-muted leading-relaxed mb-10">
                            With a dedicated team of over 50 skilled craftsmen and technicians, we have the capacity to handle complete hotel fit-outs, expansive educational institutions, and bespoke residential setups.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {features.map((feature, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.1), duration: 0.4 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                    <span className="text-text font-medium">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
