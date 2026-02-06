"use client"

import React, { useState } from "react"
import { Menu, X, Bell, Settings, CreditCard, User, LogOut } from "lucide-react"
import { SchoolSidebar } from "@/components/school/SchoolSidebar"
import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function SchoolLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const { theme } = useTheme()
    // Enforce Light Mode for School Dashboard as per requirements (Clean White/Cream & Blue)
    // We can still respect the toggle if needed, but the default "school" look is requested to be specific.
    // For now I will stick to the dynamic theme but tweak colors to match "Landing Page" vibe.
    const isLight = theme === 'light'

    return (
        <div className={cn(
            "min-h-screen font-sans selection:bg-blue-500/30 transition-colors duration-300",
            isLight ? "bg-[#F8FAFC] text-slate-900" : "bg-slate-950 text-slate-100" // Cream/White background
        )}>
            {/* Desktop Sidebar */}
            <div className="hidden md:block fixed inset-y-0 left-0 z-50">
                <SchoolSidebar />
            </div>

            {/* Top Header */}
            <div className={cn(
                "fixed top-0 left-0 right-0 h-16 z-40 flex items-center justify-between px-4 md:pl-72 md:pr-8 backdrop-blur-md border-b transition-colors",
                isLight
                    ? "bg-white/80 border-slate-200"
                    : "bg-slate-950/80 border-slate-800"
            )}>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsMobileOpen(true)}
                        className={cn(
                            "md:hidden p-2 rounded-lg transition-colors",
                            isLight ? "text-slate-600 hover:bg-slate-100" : "text-slate-400 hover:text-white hover:bg-slate-800"
                        )}
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    <h1 className={cn("text-lg font-semibold hidden sm:block", isLight ? "text-slate-800" : "text-white")}>
                        Administrative Dashboard
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className={cn("h-6 w-px mx-1", isLight ? "bg-slate-200" : "bg-slate-800")} />

                    <button className={cn("relative p-2 transition-colors", isLight ? "text-slate-500 hover:text-blue-600" : "text-slate-400 hover:text-white")}>
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>

                    {/* Profile Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center gap-2 focus:outline-none"
                        >
                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-sm font-bold text-white shadow-md ring-2 ring-white cursor-pointer hover:ring-blue-100 transition-all">
                                AD
                            </div>
                        </button>

                        <AnimatePresence>
                            {isProfileOpen && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)} />
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className={cn(
                                            "absolute right-0 top-full mt-2 w-56 rounded-xl shadow-xl border overflow-hidden z-50",
                                            isLight ? "bg-white border-slate-100" : "bg-slate-900 border-slate-800"
                                        )}
                                    >
                                        <div className="p-3 border-b border-slate-100 dark:border-slate-800">
                                            <p className={cn("text-sm font-semibold", isLight ? "text-slate-900" : "text-white")}>Admin User</p>
                                            <p className="text-xs text-slate-500">admin@school.edu</p>
                                        </div>
                                        <div className="p-1">
                                            <Link href="/school/settings" onClick={() => setIsProfileOpen(false)} className={cn("flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors", isLight ? "hover:bg-slate-50 text-slate-700" : "hover:bg-slate-800 text-slate-300")}>
                                                <User className="w-4 h-4" /> Profile
                                            </Link>
                                            <Link href="/school/billing" onClick={() => setIsProfileOpen(false)} className={cn("flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors", isLight ? "hover:bg-slate-50 text-slate-700" : "hover:bg-slate-800 text-slate-300")}>
                                                <CreditCard className="w-4 h-4" /> Billing & Plans
                                            </Link>
                                            <Link href="/school/settings" onClick={() => setIsProfileOpen(false)} className={cn("flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors", isLight ? "hover:bg-slate-50 text-slate-700" : "hover:bg-slate-800 text-slate-300")}>
                                                <Settings className="w-4 h-4" /> Settings
                                            </Link>
                                        </div>
                                        <div className="p-1 border-t border-slate-100 dark:border-slate-800">
                                            <Link href="/login" className={cn("flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20")}>
                                                <LogOut className="w-4 h-4" /> Sign Out
                                            </Link>
                                        </div>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileOpen(false)}
                            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 md:hidden"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 z-50 w-72 md:hidden"
                        >
                            <div className="relative h-full">
                                <button
                                    onClick={() => setIsMobileOpen(false)}
                                    className="absolute top-4 right-4 p-2 text-white/70 hover:text-white z-10"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <SchoolSidebar onMobileClose={() => setIsMobileOpen(false)} />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="md:pl-64 pt-16 min-h-screen">
                <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
                    {children}
                </div>
            </main>
        </div>
    )
}

