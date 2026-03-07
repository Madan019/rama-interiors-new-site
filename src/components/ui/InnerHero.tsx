"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./Container";
import { Home } from "lucide-react";

interface InnerHeroProps {
    title: string;
    imageSrc: string;
    breadcrumbs: { label: string; href: string }[];
}

export function InnerHero({ title, imageSrc, breadcrumbs }: InnerHeroProps) {
    return (
        <div className="relative pt-32 pb-16 md:pt-44 md:pb-28 overflow-hidden bg-primary">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
            </div>

            <Container className="relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="heading-1 text-white mb-8"
                >
                    {title}
                </motion.h1>

                {/* Breadcrumbs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium"
                >
                    <Link href="/" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                        <Home className="w-4 h-4" />
                        Home
                    </Link>

                    {breadcrumbs.map((bc, i) => (
                        <div key={bc.href} className="flex items-center gap-2">
                            <span className="text-white/40">/</span>
                            {i === breadcrumbs.length - 1 ? (
                                <span className="text-accent">{bc.label}</span>
                            ) : (
                                <Link href={bc.href} className="text-white/70 hover:text-white transition-colors">
                                    {bc.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </motion.div>
            </Container>
        </div>
    );
}
