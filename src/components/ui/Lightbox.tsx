"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
    images: { src: string; alt: string }[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export function Lightbox({
    images,
    currentIndex,
    isOpen,
    onClose,
    onNext,
    onPrev,
}: LightboxProps) {
    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose, onNext, onPrev]);

    // Prevent background scrolling when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-sm"
                onClick={onClose}
            >
                {/* Close Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev();
                    }}
                    className="absolute left-6 z-50 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden md:block"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                    className="absolute right-6 z-50 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden md:block"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>

                {/* Image Container */}
                <div
                    className="relative w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center p-4 md:p-12"
                    onClick={(e) => e.stopPropagation()}
                >
                    {images[currentIndex] && (
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                    )}

                    {/* Image Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>

                {/* Mobile touch area for navigation could be added here if needed */}
            </motion.div>
        </AnimatePresence>
    );
}
