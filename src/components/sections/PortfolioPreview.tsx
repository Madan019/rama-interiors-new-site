"use client";

import { motion } from "framer-motion";
import { ArrowRight, ImageIcon } from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Lightbox } from "../ui/Lightbox";
import { useState } from "react";

const PREVIEW_IMAGES = [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=800&q=80",
];

export function PortfolioPreview() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    return (
        <section className="section-padding bg-bg relative overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="heading-2 mb-4"
                        >
                            Our Work Speaks<br />
                            <span className="text-accent italic font-light">For Itself</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-text-muted leading-relaxed"
                        >
                            Explore a selection of our recent manufacturing projects, showcasing
                            our attention to detail and finishing quality.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/portfolio"
                            className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-border text-primary font-medium hover:bg-bg hover:border-text-muted transition-all duration-300"
                        >
                            <ImageIcon className="w-4 h-4" />
                            View Full Portfolio
                        </Link>
                    </motion.div>
                </div>

                {/* Asymmetrical Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[600px]">
                    {PREVIEW_IMAGES.map((img, i) => {
                        // Masonry logic for the layout
                        let colSpan = "col-span-1";
                        if (i === 0) colSpan = "md:col-span-8 md:row-span-2"; // Large main image
                        if (i === 1) colSpan = "md:col-span-4 md:row-span-1"; // Top right
                        if (i === 2) colSpan = "md:col-span-4 md:row-span-1"; // Bottom right

                        return (
                            <motion.div
                                key={img}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                onClick={() => openLightbox(i)}
                                className={`group cursor-pointer relative rounded-2xl md:rounded-3xl overflow-hidden bg-primary min-h-[300px] md:min-h-0 ${colSpan}`}
                            >
                                <img
                                    src={img}
                                    alt={`Portfolio preview ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-50">
                                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300 border border-white/30 hover:bg-white hover:text-primary">
                                        <ArrowRight className="w-6 h-6 -rotate-45" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile only link */}
                <div className="mt-10 text-center md:hidden">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-border text-primary font-medium hover:bg-bg"
                    >
                        <ImageIcon className="w-4 h-4" />
                        View Full Portfolio
                    </Link>
                </div>

                <Lightbox
                    images={PREVIEW_IMAGES.map((src, i) => ({ src, alt: `Portfolio preview ${i + 1}` }))}
                    currentIndex={currentIndex}
                    isOpen={lightboxOpen}
                    onClose={() => setLightboxOpen(false)}
                    onNext={() => setCurrentIndex((prev) => (prev + 1) % PREVIEW_IMAGES.length)}
                    onPrev={() => setCurrentIndex((prev) => (prev - 1 + PREVIEW_IMAGES.length) % PREVIEW_IMAGES.length)}
                />
            </Container>
        </section>
    );
}
