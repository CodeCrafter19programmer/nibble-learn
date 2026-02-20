"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Flame } from "lucide-react"
import { cn } from "@/lib/utils"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { studentTools as tools } from "@/lib/data/student-tools-list"
import { useStudentFavorites } from "@/components/student/StudentFavoritesContext"

export default function StudentFavoritesPage() {
    const { theme } = useStudentTheme()
    const isLight = theme === 'light'
    const { isFavorite, toggleFavorite } = useStudentFavorites()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const favoriteTools = tools.filter(tool => isFavorite(tool.id))

    const handleToggleFavorite = (e: React.MouseEvent, id: number) => {
        e.stopPropagation()
        e.preventDefault()
        toggleFavorite(id)
    }

    if (!isMounted) return null

    return (
        <div className="space-y-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={cn("border-b pb-8 pt-6", isLight ? "border-slate-200" : "border-slate-800")}>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Favorites</h1>
                <p className={cn("text-lg", isLight ? "text-slate-600 font-medium" : "text-slate-400")}>
                    Your pinned tools for quick access.
                </p>
            </div>

            {favoriteTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <AnimatePresence>
                        {favoriteTools.map((tool, index) => (
                            <motion.div
                                key={tool.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                                className={cn(
                                    "group relative rounded-[20px] p-5 border transition-all duration-200 cursor-pointer overflow-hidden",
                                    isLight
                                        ? "bg-white border-slate-200 shadow-sm hover:bg-blue-50/40 hover:border-blue-200 hover:-translate-y-[2px] hover:shadow-lg"
                                        : "bg-slate-900/50 border-slate-800 shadow-lg hover:bg-slate-800/80 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)]"
                                )}
                            >
                                <Link href={`/student/tools/${tool.id}`} className="absolute inset-0 z-10" />
                                {/* Hot Badge */}
                                {tool.isHot && (
                                    <div className="absolute top-4 right-12 px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] uppercase font-bold tracking-wider flex items-center gap-1 z-20">
                                        <Flame className="w-3 h-3 fill-current" /> Hot
                                    </div>
                                )}

                                {/* Favorite Button */}
                                <button
                                    onClick={(e) => handleToggleFavorite(e, tool.id)}
                                    className={cn(
                                        "absolute top-4 right-4 p-1.5 rounded-lg transition-all z-20",
                                        "text-yellow-400 hover:text-yellow-500"
                                    )}
                                >
                                    <Star className="w-5 h-5 fill-current scale-110" />
                                </button>

                                <div className="flex flex-col gap-4">
                                    <div className={cn(
                                        "w-12 h-12 rounded-[14px] flex items-center justify-center",
                                        isLight
                                            ? "bg-blue-50"
                                            : "bg-white/[0.1] shadow-inner"
                                    )}>
                                        <tool.icon className={cn("w-6 h-6", isLight ? "text-[#2563EB]" : "text-blue-300")} />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className={cn("font-bold text-lg leading-tight", isLight ? "text-[#0F172A]" : "text-white")}>
                                            {tool.name}
                                        </h3>
                                        <p className={cn("text-xs leading-relaxed line-clamp-2 font-medium", isLight ? "text-[#334155]" : "text-slate-300")}>
                                            {tool.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            ) : (
                <div className={cn("text-center py-20 rounded-2xl border-2 border-dashed", isLight ? "border-slate-200" : "border-slate-800")}>
                    <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", isLight ? "bg-slate-100" : "bg-slate-800")}>
                        <Star className={cn("w-8 h-8", isLight ? "text-slate-300" : "text-slate-600")} />
                    </div>
                    <h3 className={cn("text-xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>No favorites yet</h3>
                    <p className={cn("max-w-md mx-auto mb-6", isLight ? "text-slate-500" : "text-slate-400")}>
                        Star tools you use frequently to access them quickly from here.
                    </p>
                    <Link href="/student/tools">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25 font-semibold">
                            Browse Tools
                        </button>
                    </Link>
                </div>
            )}
        </div>
    )
}
