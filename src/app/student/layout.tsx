"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { StudentSidebar } from "@/components/student/StudentSidebar"
import { StudentFavoritesProvider } from "@/components/student/StudentFavoritesContext"
import { StudentProfileProvider } from "@/components/student/StudentProfileContext"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

function StudentLayoutContent({ children }: { children: React.ReactNode }) {
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const pathname = usePathname()

    return (
        <div className="min-h-screen font-sans antialiased transition-colors duration-500 bg-background text-slate-900 selection:bg-blue-200 dark:bg-slate-950 dark:text-slate-100 dark:selection:bg-blue-500/30">
            {/* Desktop Sidebar */}
            <div className="hidden md:block fixed inset-y-0 left-0 z-50">
                <StudentSidebar />
            </div>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-4 border-b backdrop-blur-md transition-colors bg-white/80 border-slate-200 text-slate-900 dark:bg-slate-900/80 dark:border-slate-800 dark:text-white">
                <Link href="/" className="flex items-center gap-2">
                    <Logo className="w-8 h-8 bg-blue-500 rounded-lg" />
                    <span className="font-bold text-lg">NibbleStudent</span>
                </Link>
                <button
                    onClick={() => setIsMobileOpen(true)}
                    className="p-2 rounded-lg transition-colors hover:bg-slate-100 text-black dark:hover:bg-white/10 dark:text-white"
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
                    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-screen transition-opacity duration-500 bg-blue-300/30 opacity-50 dark:bg-blue-600/20 dark:opacity-100" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] mix-blend-screen transition-opacity duration-500 bg-purple-300/30 opacity-50 dark:bg-indigo-600/20 dark:opacity-100" />
                </div>

                <div className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default function StudentLayout({ children }: { children: React.ReactNode }) {
    // StudentThemeProvider is removed as it's redundant with the root ThemeProvider
    return (
        <StudentProfileProvider>
            <StudentFavoritesProvider>
                <StudentLayoutContent>{children}</StudentLayoutContent>
            </StudentFavoritesProvider>
        </StudentProfileProvider>
    )
}
