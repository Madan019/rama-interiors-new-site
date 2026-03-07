"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={cn(
                    "w-full px-4 py-3 bg-bg border border-border rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none",
                    error && "border-error focus:ring-error",
                    className
                )}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";
