"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Determine if we're on the homepage (hero section has dark image background)
    const isHome = pathname === "/";

    // If we are scrolled, or if we are not on home, the navbar should have a solid background
    const shouldBeSolid = isScrolled || !isHome || mobileMenuOpen;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    shouldBeSolid
                        ? "bg-surface/95 backdrop-blur-md shadow-sm border-b border-border py-4"
                        : "bg-transparent py-6"
                )}
            >
                <Container>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="group relative z-50 focus:outline-none"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <h1 className={cn(
                                "text-2xl font-bold tracking-tight transition-colors duration-300",
                                shouldBeSolid ? "text-primary" : "text-primary group-hover:text-accent"
                            )}>
                                RAMA INTERIORS
                            </h1>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.replace("/#", "")));
                                const textColor = shouldBeSolid
                                    ? (isActive ? "text-accent" : "text-text hover:text-primary")
                                    : (isActive ? "text-accent" : "text-text hover:text-primary");

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "text-sm font-medium transition-colors relative py-2",
                                            textColor
                                        )}
                                    >
                                        {link.name}
                                        {isActive && shouldBeSolid && (
                                            <motion.div
                                                layoutId="active-indicator"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden relative z-50 p-2 focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-primary" />
                            ) : (
                                <Menu className={cn(
                                    "w-6 h-6 transition-colors",
                                    shouldBeSolid ? "text-primary" : "text-primary"
                                )} />
                            )}
                        </button>
                    </div>
                </Container>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-surface pt-24 px-6 md:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={cn(
                                                "block text-2xl font-semibold transition-colors",
                                                isActive ? "text-accent" : "text-primary"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 pt-8 border-t border-border"
                            >
                                <div className="text-sm text-text-muted mb-2">Get in touch</div>
                                <div className="text-primary font-medium">+91 9772966307</div>
                                <div className="text-primary font-medium">interiorsbyrama@gmail.com</div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
