"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef, ReactNode } from "react";

export interface BadgeProps extends Omit<HTMLMotionProps<"span">, "ref"> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ children, className, variant = "primary", ...props }, ref) => {

        const variants = {
            primary: "bg-primary text-white",
            secondary: "bg-accent text-white",
            outline: "bg-transparent border border-primary text-primary",
            ghost: "bg-primary/5 text-primary",
        };

        return (
            <motion.span
                ref={ref}
                className={cn(
                    "inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full",
                    variants[variant],
                    className
                )}
                {...props}
            >
                {children}
            </motion.span>
        );
    }
);

Badge.displayName = "Badge";
