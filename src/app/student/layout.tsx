"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { StudentSidebar } from "@/components/student/StudentSidebar"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { StudentThemeProvider, useStudentTheme } from "@/components/student/StudentThemeContext"
import { Logo } from "@/components/logo"

function StudentLayoutContent({ children }: { children: React.ReactNode }) {
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const { theme, toggleTheme } = useStudentTheme()
    const pathname = usePathname()
    const isLight = theme === 'light'

    return (
        <div className={cn(
            "min-h-screen font-sans antialiased transition-colors duration-500",
            isLight
                ? "bg-background text-slate-900 selection:bg-blue-200"
                : "bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 text-white selection:bg-teal-500/30"
        )}>
            {/* Desktop Sidebar */}
            <div className="hidden md:block fixed inset-y-0 left-0 z-50">
                <StudentSidebar theme={theme} onToggleTheme={toggleTheme} />
            </div>

            {/* Mobile Header */}
            <div className={cn(
                "md:hidden fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-4 border-b backdrop-blur-md transition-colors",
                isLight
                    ? "bg-white/80 border-slate-200 text-slate-900"
                    : "bg-blue-900/80 border-white/10 text-white"
            )}>
                <Link href="/" className="flex items-center gap-2">
                    <Logo className="w-8 h-8 bg-blue-500 rounded-lg" />
                    <span className="font-bold text-lg">NibbleStudent</span>
                </Link>
                <button
                    onClick={() => setIsMobileOpen(true)}
                    className={cn(
                        "p-2 rounded-lg transition-colors",
                        isLight ? "hover:bg-slate-100 text-black" : "hover:bg-white/10 text-white"
                    )}
                >
                    <Menu className="w-6 h-6" />
                </button>
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
                            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 md:hidden"
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
                                <StudentSidebar
                                    onCheckClicks={() => setIsMobileOpen(false)}
                                    theme={theme}
                                    onToggleTheme={toggleTheme}
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="md:pl-64 pt-16 md:pt-0 min-h-screen transition-all duration-300">
                {/* Decorative background shapes - Reduced opacity in light mode */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <div className={cn(
                        "absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-screen transition-opacity duration-500",
                        isLight ? "bg-blue-300/30 opacity-50" : "bg-blue-500/20 opacity-100"
                    )} />
                    <div className={cn(
                        "absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] mix-blend-screen transition-opacity duration-500",
                        isLight ? "bg-purple-300/30 opacity-50" : "bg-purple-500/20 opacity-100"
                    )} />
                </div>

                <div className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default function StudentLayout({ children }: { children: React.ReactNode }) {
    return (
        <StudentThemeProvider>
            <StudentLayoutContent>{children}</StudentLayoutContent>
        </StudentThemeProvider>
    )
}
