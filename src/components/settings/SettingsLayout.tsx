import React from "react"
import { cn } from "@/lib/utils"

interface SettingsLayoutProps {
    children: React.ReactNode
    sidebar: React.ReactNode
    title?: string
    subtitle?: string
    variant?: "default" | "glass" | "slate"
}

export function SettingsLayout({
    children,
    sidebar,
    title,
    subtitle,
    variant = "default"
}: SettingsLayoutProps) {
    // Determine global text color based on variant
    const isDark = variant === "glass" || variant === "slate"

    return (
        <div className={cn(
            "min-h-screen p-6 md:p-8 lg:p-12",
            isDark ? "text-white" : "text-slate-900"
        )}>
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Optional Header */}
                {(title || subtitle) && (
                    <div className="space-y-2">
                        {title && <h1 className="text-3xl font-bold tracking-tight">{title}</h1>}
                        {subtitle && (
                            <p className={cn(
                                "text-lg max-w-2xl",
                                isDark ? "text-white/60" : "text-slate-500"
                            )}>
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                {/* Layout Body */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Sidebar Column */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="sticky top-24">
                            {sidebar}
                        </div>
                    </aside>

                    {/* Content Column */}
                    <main className="flex-1 min-w-0">
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {children}
                        </div>
                    </main>
                </div>

            </div>
        </div>
    )
}
