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
    Zap
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import { TokenUsage } from "@/components/common/TokenUsage"

interface StudentSidebarProps {
    onCheckClicks?: () => void
    theme?: 'dark' | 'light'
    onToggleTheme?: () => void
}

const navItems = [
    { href: "/student/dashboard", icon: Home, label: "Home" },
    { href: "/student/tools", icon: Wand2, label: "My Tools" },
    { href: "/student/chat", icon: MessageCircle, label: "Raina Chat" },
    { href: "/student/favorites", icon: Star, label: "Favorites" },
]

export function StudentSidebar({ onCheckClicks, theme = 'dark', onToggleTheme }: StudentSidebarProps) {
    const pathname = usePathname()
    const isLight = theme === 'light'
    const isPlusUser = true // Simulated Plus status for demonstration

    return (
        <aside className={cn(
            "w-64 h-full flex flex-col backdrop-blur-xl transition-colors duration-300",
            isLight
                ? "bg-blue-50/90 border-r border-blue-200 text-slate-800"
                : "bg-white/10 border-r border-white/20 text-white"
        )}>
            {/* Brand */}
            <Link href="/" className="p-6 flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Logo className="w-8 h-8 bg-blue-500 rounded-lg shadow-lg shadow-blue-500/30" />
                <div className="flex flex-col">
                    <span className={cn("font-bold text-lg tracking-tight leading-none", isLight ? "text-slate-900" : "text-white")}>
                        NibbleStudent
                    </span>
                    <span className={cn("text-[10px] font-bold uppercase tracking-wider mt-0.5", isLight ? "text-slate-500" : "text-blue-300")}>
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
                                    ? isLight
                                        ? "bg-white text-blue-600 shadow-sm border border-blue-100 font-medium"
                                        : "bg-white/20 text-white shadow-inner font-medium"
                                    : isLight
                                        ? "text-black hover:bg-white hover:text-blue-700 hover:shadow-sm"
                                        : "text-blue-100 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            <item.icon className={cn(
                                "w-5 h-5 transition-transform group-hover:scale-110",
                                isActive
                                    ? isLight ? "text-blue-700" : "text-teal-300"
                                    : isLight ? "text-slate-800 group-hover:text-blue-600" : "text-blue-300 group-hover:text-teal-200"
                            )} />
                            {item.label}
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom Section */}
            <div className={cn("p-4 space-y-4 border-t", isLight ? "border-slate-300" : "border-white/10")}>

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
                {onToggleTheme && (
                    <button
                        onClick={onToggleTheme}
                        className={cn(
                            "flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors w-full font-medium",
                            isLight ? "text-black hover:bg-slate-100" : "text-blue-200 hover:bg-white/10 hover:text-white"
                        )}
                    >
                        {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                        {isLight ? "Dark Mode" : "Light Mode"}
                    </button>
                )}

                {/* Sign Out */}
                <Link
                    href="/login"
                    className={cn(
                        "flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors w-full font-medium",
                        isLight ? "text-black hover:bg-red-50 hover:text-red-600" : "text-blue-300 hover:bg-white/10 hover:text-white"
                    )}
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </Link>

                {/* User Card */}
                <div className={cn(
                    "rounded-xl p-3 flex items-center gap-3 transition-colors",
                    isLight ? "bg-white border border-slate-300 shadow-sm" : "bg-white/5"
                )}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold shadow-md">
                        JS
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <h4 className={cn("text-sm font-bold truncate", isLight ? "text-black" : "text-white")}>John Student</h4>
                        <p className={cn("text-xs truncate font-medium", isLight ? "text-slate-700" : "text-blue-200")}>Grade 8 • Room 404</p>
                    </div>
                    <Link href="/student/settings" className={cn("transition-colors", isLight ? "text-slate-800 hover:text-blue-700" : "text-blue-300 hover:text-white")}>
                        <Settings className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </aside>
    )
}
