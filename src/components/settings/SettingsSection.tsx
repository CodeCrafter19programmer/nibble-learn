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
    const isDark = variant === "glass" || variant === "slate"

    return (
        <section className={cn("space-y-6 mb-10", className)}>
            <div className="space-y-1">
                <h2 className={cn(
                    "text-lg font-bold",
                    isDark ? "text-white" : "text-slate-900"
                )}>
                    {title}
                </h2>
                {description && (
                    <p className={cn(
                        "text-sm",
                        isDark ? "text-white/60" : "text-slate-500"
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
