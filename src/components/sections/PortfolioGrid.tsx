"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Container } from "../ui/Container";
import { Lightbox } from "../ui/Lightbox";
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioImages } from "@/lib/portfolio-data";

const CATEGORIES = [
    "All",
    "Modular Kitchens",
    "Wardrobes & Storage",
    "Beds",
    "Workstations / Office",
    "Commercial Interiors",
    "Institutional Furniture / School",
    "Residential",
    "Custom Projects"
];

const ITEMS_PER_PAGE = 12;

export function PortfolioGrid() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredImages = useMemo(() => {
        if (activeCategory === "All") return portfolioImages;
        return portfolioImages.filter(img => img.category === activeCategory);
    }, [activeCategory]);

    const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);

    // Reset to page 1 when category changes
    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const currentImages = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return filteredImages.slice(start, end);
    }, [filteredImages, currentPage]);

    const openLightbox = (index: number) => {
        // Find the absolute index in the original array to maintain proper next/prev through all images
        const targetImage = currentImages[index];
        const absoluteIndex = portfolioImages.findIndex(img => img.src === targetImage.src);
        setCurrentIndex(absoluteIndex);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        const section = document.getElementById("portfolio-grid");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <section id="portfolio-grid" className="section-padding bg-bg min-h-screen">
            <Container>
                {/* Category Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                ? "bg-primary text-white shadow-md"
                                : "bg-surface border border-border text-text hover:border-text-muted hover:text-primary"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {currentImages.map((img, index) => (
                        <motion.div
                            key={`${img.src}-${index}`}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            onClick={() => openLightbox(index)}
                            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-border isolation-auto"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-50">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300 border border-white/20">
                                    <Maximize2 className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-16">
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-surface transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div className="text-sm font-medium text-text-muted">
                            Page {currentPage} of {totalPages}
                        </div>
                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-surface transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}

                <Lightbox
                    images={portfolioImages}
                    currentIndex={currentIndex}
                    isOpen={lightboxOpen}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            </Container>
        </section>
    );
}

