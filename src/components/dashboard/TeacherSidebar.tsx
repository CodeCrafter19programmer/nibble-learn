"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Home,
    Wand2,
    FolderHeart,
    MessageSquare,
    Users,
    History,
    Star,
    Settings,
    LogOut,
    HelpCircle,
    Sun,
    Moon
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/providers/ThemeContext"
import { Logo } from "@/components/logo"
import { TokenUsage } from "@/components/common/TokenUsage"

interface SidebarProps {
    onMobileClose?: () => void
}

const navItems = [
    { href: "/app/dashboard", icon: Home, label: "Dashboard" },
    { href: "/app/tools", icon: Wand2, label: "Teacher Tools" },
    { href: "/app/collections", icon: FolderHeart, label: "My Collections" },
    { href: "/app/chat", icon: MessageSquare, label: "Raina Chat" },
    { href: "/app/rooms", icon: Users, label: "Student Rooms" },
    { href: "/app/history", icon: History, label: "Output History" },
    { href: "/app/favorites", icon: Star, label: "Favorites" },
]

export function TeacherSidebar({ onMobileClose }: SidebarProps) {
    const pathname = usePathname()
    const { theme, toggleTheme } = useTheme()
    const isPlusUser = true // Simulated Plus status for demonstration

    return (
        <aside className="w-64 h-full flex flex-col backdrop-blur-xl border-r transition-colors duration-300 bg-violet-50/90 border-violet-200 text-slate-800 dark:bg-slate-900/95 dark:border-white/10 dark:text-white">
            {/* Brand */}
            <Link href="/" className="p-6 flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Logo className="w-8 h-8 bg-violet-600 rounded-lg shadow-lg shadow-violet-500/30" />
                <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                    NibbleLearn
                </span>
            </Link>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href) && item.href !== "/app/dashboard"

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onMobileClose}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                                isActive
                                    ? "bg-white text-violet-700 shadow-sm border border-violet-100 font-medium dark:bg-violet-600/20 dark:text-white dark:shadow-inner dark:border-violet-500/20"
                                    : "text-slate-600 hover:bg-white hover:text-violet-700 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
                            )}
                        >
                            <item.icon className={cn(
                                "w-5 h-5 transition-transform group-hover:scale-110",
                                isActive
                                    ? "text-violet-700 dark:text-violet-400"
                                    : "text-slate-500 group-hover:text-violet-600 dark:text-slate-500 dark:group-hover:text-violet-300"
                            )} />
                            <span className="text-sm">{item.label}</span>
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t space-y-2 border-violet-200 dark:border-white/10">

                {/* Token Usage for Plus Users */}
                {isPlusUser && (
                    <TokenUsage usagePercentage={45} theme={theme} userType="teacher" />
                )}

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors w-full font-medium text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
                >
                    <span className="dark:hidden"><Moon className="w-4 h-4" /></span>
                    <span className="hidden dark:inline"><Sun className="w-4 h-4" /></span>
                    <span className="dark:hidden">Dark Mode</span>
                    <span className="hidden dark:inline">Light Mode</span>
                </button>

                <Link
                    href="/app/settings/help"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
                >
                    <HelpCircle className="w-4 h-4" />
                    Help & Support
                </Link>

                <Link
                    href="/login"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-slate-600 hover:bg-white hover:text-red-600 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </Link>

                {/* User Card */}
                <div className="rounded-xl p-3 flex items-center gap-3 mt-2 transition-colors bg-white border border-violet-100 shadow-sm dark:bg-white/5 dark:border-transparent dark:shadow-none">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                        JS
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <h4 className="text-sm font-bold truncate transition-colors cursor-pointer text-black hover:text-violet-700 dark:text-white dark:hover:text-violet-300">Jane Smith</h4>
                        <p className="text-xs truncate text-slate-600 dark:text-slate-400">{isPlusUser ? "Plus Plan" : "Free Plan"}</p>
                    </div>
                    <Link href="/app/settings" className="transition-colors text-slate-400 hover:text-violet-700 dark:text-slate-500 dark:hover:text-white">
                        <Settings className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </aside>
    )
}
