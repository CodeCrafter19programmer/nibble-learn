"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Home,
    Wand2,
    MessageCircle,
    Star,
    LogOut,
    Settings,
    Sun,
    Moon,
    Zap,
    RotateCcw
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import { TokenUsage } from "@/components/common/TokenUsage"
import { useTheme } from "@/components/providers/ThemeContext"

interface StudentSidebarProps {
    onCheckClicks?: () => void
    theme?: 'dark' | 'light' // Keeping for backward compatibility but optional
    onToggleTheme?: () => void // Keeping optional
}

const navItems = [
    { href: "/student/dashboard", icon: Home, label: "Home" },
    { href: "/student/tools", icon: Wand2, label: "My Tools" },
    { href: "/student/chat", icon: MessageCircle, label: "Jarvis Chat" },
    { href: "/student/history", icon: RotateCcw, label: "History" },
    { href: "/student/favorites", icon: Star, label: "Favorites" },
]

export function StudentSidebar({ onCheckClicks }: StudentSidebarProps) {
    const pathname = usePathname()
    // Use the hook internally if not provided (allowing override if needed, but standardizing on global)
    const { theme, toggleTheme } = useTheme()

    // Check if we are in Student Light or Dark environment - now purely class based
    // But wait, the student theme context was identical to global.

    const isPlusUser = true // Simulated Plus status for demonstration

    return (
        <aside className="w-64 h-full flex flex-col backdrop-blur-xl transition-colors duration-300 bg-blue-50/90 border-r border-blue-200 text-slate-800 dark:bg-white/10 dark:border-white/20 dark:text-white">
            {/* Brand */}
            <Link href="/" className="p-6 flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Logo className="w-8 h-8 bg-blue-500 rounded-lg shadow-lg shadow-blue-500/30" />
                <div className="flex flex-col">
                    <span className="font-bold text-lg tracking-tight leading-none text-slate-900 dark:text-white">
                        NibbleStudent
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5 text-slate-500 dark:text-blue-300">
                        {isPlusUser ? "Plus Plan" : "Free Plan"}
                    </span>
                </div>
            </Link>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onCheckClicks}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-white text-blue-600 shadow-sm border border-blue-100 font-medium dark:bg-white/20 dark:text-white dark:shadow-inner dark:border-transparent"
                                    : "text-black hover:bg-white hover:text-blue-700 hover:shadow-sm dark:text-blue-100 dark:hover:bg-white/10 dark:hover:text-white"
                            )}
                        >
                            <item.icon className={cn(
                                "w-5 h-5 transition-transform group-hover:scale-110",
                                isActive
                                    ? "text-blue-700 dark:text-teal-300"
                                    : "text-slate-800 group-hover:text-blue-600 dark:text-blue-300 dark:group-hover:text-teal-200"
                            )} />
                            {item.label}
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 space-y-4 border-t border-slate-300 dark:border-white/10">

                {/* Upgrade Button */}
                {/* Token Usage or Upgrade Button */}
                {isPlusUser ? (
                    <TokenUsage usagePercentage={68} theme={theme} userType="student" />
                ) : (
                    <Link
                        href="/student/upgrade"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all group"
                    >
                        <div className="p-1 rounded bg-white/20">
                            <Zap className="w-4 h-4 fill-current" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-bold">Upgrade to Plus</p>
                            <p className="text-[10px] opacity-80 font-medium">Unlock all AI tools</p>
                        </div>
                    </Link>
                )}

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors w-full font-medium text-black hover:bg-slate-100 dark:text-blue-200 dark:hover:bg-white/10 dark:hover:text-white"
                >
                    <span className="dark:hidden"><Moon className="w-4 h-4" /></span>
                    <span className="hidden dark:inline"><Sun className="w-4 h-4" /></span>
                    <span className="dark:hidden">Dark Mode</span>
                    <span className="hidden dark:inline">Light Mode</span>
                </button>

                {/* Sign Out */}
                <Link
                    href="/login"
                    className="flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors w-full font-medium text-black hover:bg-red-50 hover:text-red-600 dark:text-blue-300 dark:hover:bg-white/10 dark:hover:text-white"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </Link>

                {/* User Card */}
                <div className="rounded-xl p-3 flex items-center gap-3 transition-colors bg-white border border-slate-300 shadow-sm dark:bg-white/5 dark:border-transparent">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold shadow-md">
                        JS
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <h4 className="text-sm font-bold truncate text-black dark:text-white">John Student</h4>
                        <p className="text-xs truncate font-medium text-slate-700 dark:text-blue-200">Grade 8 • Room 404</p>
                    </div>
                    <Link href="/student/settings" className="transition-colors text-slate-800 hover:text-blue-700 dark:text-blue-300 dark:hover:text-white">
                        <Settings className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </aside>
    )
}
