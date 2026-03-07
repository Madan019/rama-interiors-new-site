"use client";

import { motion } from "framer-motion";
import { ArrowRight, PenTool } from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/Container";

export function CtaBanner() {
    return (
        <section className="py-24 bg-surface text-center relative overflow-hidden">
            {/* Decorative vectors */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-accent/10 rounded-full translate-y-1/2 -translate-x-1/3" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-8 border border-border shadow-md">
                        <PenTool className="w-8 h-8 text-accent" />
                    </div>

                    <h2 className="heading-2 mb-6">
                        Ready to <span className="text-accent italic font-light">Execute</span> Your Project?
                    </h2>

                    <p className="text-xl text-text-muted mb-10 leading-relaxed font-light">
                        Share your drawings and volume requirements with us. Our production team will discuss timelines, materials, and deliverables.
                    </p>

                    <Link href="/contact" className="inline-block relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-hover rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500" />
                        <button className="relative px-8 py-4 bg-primary text-white font-medium text-lg rounded-full flex items-center gap-3 hover:bg-primary-hover transition-colors">
                            Contact Sales Team
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
}
