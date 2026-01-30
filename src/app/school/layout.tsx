"use client"

import React, { useState } from "react"
import { Menu, X, Bell, Search } from "lucide-react"
import { SchoolSidebar } from "@/components/school/SchoolSidebar"
import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"

export default function SchoolLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <div className={cn(
            "min-h-screen font-sans selection:bg-indigo-500/30 transition-colors duration-300",
            isLight ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-100"
        )}>
            {/* Desktop Sidebar */}
            <div className="hidden md:block fixed inset-y-0 left-0 z-50">
                <SchoolSidebar />
            </div>

            {/* Top Header */}
            <div className={cn(
                "fixed top-0 left-0 right-0 h-16 z-40 flex items-center justify-between px-4 md:pl-72 md:pr-8 backdrop-blur-md border-b transition-colors",
                isLight
                    ? "bg-white/90 border-slate-200"
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

                    <h1 className={cn("text-lg font-semibold hidden sm:block", isLight ? "text-slate-900" : "text-white")}>
                        Administrative Dashboard
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative hidden md:block w-64">
                        <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4", isLight ? "text-slate-500" : "text-slate-500")} />
                        <input
                            type="text"
                            placeholder="Search users or schools..."
                            className={cn(
                                "w-full border rounded-lg pl-9 pr-4 py-1.5 text-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",
                                isLight
                                    ? "bg-slate-100 border-slate-200 text-black placeholder:text-slate-500 focus:bg-white"
                                    : "bg-slate-900 border-slate-800 text-slate-200 placeholder:text-slate-500"
                            )}
                        />
                    </div>

                    <div className={cn("h-6 w-px mx-1", isLight ? "bg-slate-200" : "bg-slate-800")} />

                    <button className={cn("relative p-2 transition-colors", isLight ? "text-slate-500 hover:text-slate-900" : "text-slate-400 hover:text-white")}>
                        <Bell className="w-5 h-5" />
                        <span className={cn("absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full border-2 px-1", isLight ? "border-white" : "border-slate-950")}></span>
                    </button>

                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
                            AD
                        </div>
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
