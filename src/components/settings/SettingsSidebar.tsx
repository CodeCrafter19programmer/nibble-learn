"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface SettingsNavItem {
    label: string
    href: string
    icon: LucideIcon
}

interface SettingsSidebarProps {
    items: SettingsNavItem[]
    variant?: "default" | "glass" | "slate"
}

export function SettingsSidebar({ items, variant = "default" }: SettingsSidebarProps) {
    const pathname = usePathname()

    return (
        <nav className="space-y-1 w-full lg:w-64 flex-shrink-0">
            {items.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")

                // Define styles based on variant
                let containerStyles = ""
                let iconStyles = ""

                if (variant === "glass") {
                    containerStyles = isActive
                        ? "bg-white/20 text-white shadow-lg shadow-black/5"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    iconStyles = isActive ? "text-white" : "text-white/60 group-hover:text-white"
                } else if (variant === "slate") {
                    containerStyles = isActive
                        ? "bg-violet-600 text-white shadow-md shadow-violet-900/20"
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    iconStyles = isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300"
                } else {
                    // Default (Light)
                    containerStyles = isActive
                        ? "bg-violet-50 text-violet-700 font-semibold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    iconStyles = isActive ? "text-violet-600" : "text-slate-400 group-hover:text-slate-600"
                }

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group font-medium text-sm",
                            containerStyles
                        )}
                    >
                        <item.icon className={cn("w-5 h-5 transition-colors", iconStyles)} />
                        {item.label}

                        {isActive && variant === 'glass' && (
                            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                        )}
                        {/* For Slate/Default we don't need the dot, the bg color is enough */}
                    </Link>
                )
            })}
        </nav>
    )
}
