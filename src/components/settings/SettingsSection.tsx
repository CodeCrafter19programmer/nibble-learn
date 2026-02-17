import React from "react"
import { cn } from "@/lib/utils"

interface SettingsSectionProps {
    title: string
    description?: string
    children: React.ReactNode
    className?: string
    variant?: "default" | "glass" | "slate"
}

export function SettingsSection({
    title,
    description,
    children,
    className,
    variant = "default"
}: SettingsSectionProps) {
    return (
        <section className={cn("space-y-6 mb-10", className)}>
            <div className="space-y-1">
                <h2 className={cn(
                    "text-lg font-bold text-slate-900 dark:text-white",
                    variant === "glass" && "text-white"
                )}>
                    {title}
                </h2>
                {description && (
                    <p className={cn(
                        "text-sm text-slate-500 dark:text-slate-400",
                        variant === "glass" && "text-white/60"
                    )}>
                        {description}
                    </p>
                )}
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}
