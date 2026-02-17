"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface SettingsCardProps extends HTMLMotionProps<"div"> {
    variant?: "default" | "glass" | "slate"
}

// For sub-components that are just divs
interface SettingsCardSubComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "slate"
}

export function SettingsCard({
    children,
    className,
    variant = "default",
    ...props
}: SettingsCardProps) {
    const variants = {
        default: "bg-white border border-slate-200 shadow-sm dark:bg-slate-950 dark:border-slate-800",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",
        slate: "bg-white border border-slate-200 shadow-sm dark:bg-slate-950 dark:border-slate-800"
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                "rounded-2xl overflow-hidden transition-all",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export function SettingsCardHeader({ children, className, variant = "default" }: SettingsCardSubComponentProps) {
    return (
        <div className={cn(
            "px-6 py-4 border-b",
            variant === "glass" ? "border-white/10" : "border-slate-100 dark:border-slate-800",
            className
        )}>
            {children}
        </div>
    )
}

export function SettingsCardContent({ children, className }: SettingsCardSubComponentProps) {
    return (
        <div className={cn("p-6", className)}>
            {children}
        </div>
    )
}

export function SettingsCardFooter({ children, className, variant = "default" }: SettingsCardSubComponentProps) {
    return (
        <div className={cn(
            "px-6 py-4 bg-opacity-50",
            variant === "glass" ? "bg-black/20" : "bg-slate-50 dark:bg-slate-950/50",
            className
        )}>
            {children}
        </div>
    )
}
