"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0 bg-surface">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=80"
                        alt="Premium Furniture Manufacturing"
                        className="w-full h-full object-cover object-right opacity-30 mix-blend-multiply"
                    />
                </motion.div>

                {/* Gradient Overlays for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>

            <Container className="relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Badge variant="ghost" className="mb-6 bg-primary/5 text-primary border border-primary/20 backdrop-blur-sm">
                            <Sparkles className="w-3.5 h-3.5 mr-1 text-accent" />
                            Over 20 Years of Excellence
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="heading-1 text-primary mb-6"
                    >
                        Crafting Spaces with <span className="text-accent italic font-light">Precision</span> & Scale
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-primary/80 leading-relaxed mb-10 max-w-2xl font-normal"
                    >
                        We are Rajasthan&apos;s premier manufacturing partner for bulk orders, luxury residential, and large-scale commercial setups. Uncompromising quality meets scheduled delivery.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="/contact">
                            <Button size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 gap-2" shimmer>
                                Start a Project
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                View Portfolio
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right side floating elements to create balance */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hidden lg:block relative h-[500px]"
                >
                    <div className="absolute inset-0 rounded-3xl overflow-hidden border-8 border-white/50 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80"
                            alt="Premium Interior Design"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary">Award Winning</p>
                                <p className="text-xs text-text-muted">Design & Execution</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
