"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, Bell } from "lucide-react"
import { TeacherSidebar } from "@/components/dashboard/TeacherSidebar"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"

export default function TeacherAppLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <div className={cn(
            "min-h-screen font-sans transition-colors duration-300",
            isLight ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-100"
        )}>
            {/* Desktop Sidebar */}
            <div className="hidden md:block fixed inset-y-0 left-0 z-50">
                <TeacherSidebar />
            </div>

            {/* Top Header (Mobile & Desktop) */}
            <div className={cn(
                "fixed top-0 left-0 right-0 h-16 z-40 flex items-center justify-between px-4 md:pl-72 md:pr-8 backdrop-blur-md border-b transition-colors",
                isLight
                    ? "bg-white/90 border-slate-200 text-slate-900"
                    : "bg-slate-900/80 border-white/10 text-white"
            )}>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsMobileOpen(true)}
                        className={cn(
                            "md:hidden p-2 rounded-lg transition-colors",
                            isLight ? "text-slate-600 hover:bg-slate-100" : "text-slate-400 hover:text-white hover:bg-white/10"
                        )}
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    <Link href="/" className={cn("md:hidden font-bold text-lg ml-2", isLight ? "text-slate-900" : "text-white")}>
                        NibbleLearn
                    </Link>

                    {/* Global Search */}
                    <div className="relative hidden md:block w-96">
                        <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4", isLight ? "text-slate-500" : "text-slate-500")} />
                        <input
                            type="text"
                            placeholder="Search for tools like 'Lesson Plan'..."
                            className={cn(
                                "w-full pl-10 pr-4 py-2 rounded-full text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all",
                                isLight
                                    ? "bg-slate-100 border border-slate-200 text-black focus:ring-violet-500/50 focus:bg-white"
                                    : "bg-slate-800/50 border border-slate-700/50 text-slate-200 focus:ring-violet-500/50 focus:bg-slate-800"
                            )}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            <kbd className={cn(
                                "hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold rounded border",
                                isLight
                                    ? "text-slate-500 bg-slate-100 border-slate-200"
                                    : "text-slate-500 bg-slate-800 border-slate-700"
                            )}>⌘K</kbd>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Button size="sm" className={cn(
                        "hidden sm:flex shadow-lg border-0 rounded-full text-white",
                        isLight
                            ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-violet-500/10"
                            : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-violet-500/25"
                    )}>
                        <span className="mr-1">✨</span> Upgrade to Plus
                    </Button>

                    <button className={cn(
                        "relative p-2 transition-colors",
                        isLight ? "text-slate-500 hover:text-slate-900" : "text-slate-400 hover:text-white"
                    )}>
                        <Bell className="w-5 h-5" />
                        <span className={cn("absolute top-1.5 right-1.5 w-2 h-2 rounded-full border-2", isLight ? "bg-red-500 border-white" : "bg-red-500 border-slate-900")}></span>
                    </button>
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
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
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
                                    className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white z-10"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <TeacherSidebar onMobileClose={() => setIsMobileOpen(false)} />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="md:pl-64 pt-16 min-h-screen">
                <div className="p-6 md:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}
