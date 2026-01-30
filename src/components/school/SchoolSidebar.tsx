"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    BarChart3,
    Users,
    ShieldAlert,
    Settings,
    School,
    LogOut,
    LayoutDashboard,
    Sun,
    Moon
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/providers/ThemeContext"

interface SidebarProps {
    onMobileClose?: () => void
}

const navItems = [
    { href: "/school/dashboard", icon: LayoutDashboard, label: "Overview" },
    { href: "/school/usage", icon: BarChart3, label: "Usage Analytics" },
    { href: "/school/users", icon: Users, label: "User Management" },
    { href: "/school/safety", icon: ShieldAlert, label: "Safety & Monitoring" },
    { href: "/school/settings", icon: Settings, label: "School Settings" },
]

export function SchoolSidebar({ onMobileClose }: SidebarProps) {
    const pathname = usePathname()
    const { theme, toggleTheme } = useTheme()
    const isLight = theme === 'light'

    return (
        <aside className={cn(
            "w-64 h-full flex flex-col border-r transition-colors duration-300",
            isLight
                ? "bg-indigo-50/90 border-indigo-200 text-slate-800"
                : "bg-slate-950 border-slate-800/50 text-white"
        )}>
            {/* Brand */}
            <Link href="/" className="p-6 flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold shadow-lg shadow-indigo-500/30 text-white">
                    N
                </div>
                <div className="flex flex-col">
                    <span className={cn("font-bold text-lg tracking-tight", isLight ? "text-slate-900" : "text-white")}>NibbleLearn</span>
                    <span className={cn("text-[10px] uppercase font-bold tracking-wider", isLight ? "text-indigo-600" : "text-indigo-300")}>Admin Portal</span>
                </div>
            </Link>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onMobileClose}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                                isActive
                                    ? isLight
                                        ? "bg-white text-indigo-700 shadow-sm border border-indigo-100 font-medium"
                                        : "bg-indigo-600/20 text-indigo-100 shadow-inner font-medium border border-indigo-500/20"
                                    : isLight
                                        ? "text-slate-600 hover:bg-white hover:text-indigo-700"
                                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                            )}
                        >
                            <item.icon className={cn(
                                "w-5 h-5 transition-transform group-hover:scale-110",
                                isActive
                                    ? isLight ? "text-indigo-700" : "text-indigo-400"
                                    : isLight ? "text-slate-500 group-hover:text-indigo-600" : "text-slate-500 group-hover:text-indigo-300"
                            )} />
                            <span className="text-sm">{item.label}</span>
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom Section */}
            <div className={cn("p-4 border-t space-y-4", isLight ? "border-indigo-200" : "border-slate-800/50")}>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className={cn(
                        "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors w-full font-medium",
                        isLight ? "text-slate-600 hover:bg-white hover:text-slate-900" : "text-slate-400 hover:text-white hover:bg-slate-900"
                    )}
                >
                    {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                    {isLight ? "Dark Mode" : "Light Mode"}
                </button>

                {/* School Info */}
                <div className={cn(
                    "rounded-xl p-3 flex items-center gap-3 border transition-colors",
                    isLight
                        ? "bg-white border-indigo-100 shadow-sm"
                        : "bg-slate-900 border-slate-800"
                )}>
                    <div className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center border",
                        isLight ? "bg-indigo-50 border-indigo-100 text-indigo-600" : "bg-slate-800 border-slate-700 text-slate-400"
                    )}>
                        <School className="w-5 h-5" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <h4 className={cn("text-sm font-semibold truncate", isLight ? "text-black" : "text-slate-200")}>Lincoln High</h4>
                        <p className={cn("text-xs truncate", isLight ? "text-slate-600" : "text-slate-500")}>District A</p>
                    </div>
                </div>

                <Link
                    href="/login"
                    className={cn(
                        "flex items-center gap-2 px-3 py-2 text-sm transition-colors",
                        isLight ? "text-slate-600 hover:text-red-600" : "text-slate-400 hover:text-red-400"
                    )}
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </Link>
            </div>
        </aside>
    )
}
