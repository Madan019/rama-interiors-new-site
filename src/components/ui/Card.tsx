"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef, ReactNode } from "react";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
    children: ReactNode;
    hoverEffect?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ children, className, hoverEffect = true, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={hoverEffect ? { y: -5, scale: 1.01 } : undefined}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                    "bg-white rounded-2xl border border-border p-6 md:p-8 transition-shadow duration-300",
                    hoverEffect && "hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = "Card";
