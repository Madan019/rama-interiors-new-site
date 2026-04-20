"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "onDragStart" | "onDragEnd" | "onDrag" | "ref"> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    shimmer?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, variant = "primary", size = "md", shimmer = false, ...props }, ref) => {

        const variants = {
            primary: "bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg",
            secondary: "bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-lg",
            outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
            ghost: "bg-transparent text-text-muted hover:text-primary hover:bg-bg",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg font-medium",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 cursor-pointer",
                    variants[variant],
                    sizes[size],
                    shimmer && "btn-shimmer",
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
