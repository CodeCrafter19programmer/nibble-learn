"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Star, Filter, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/providers/ThemeContext"
import { tools } from "@/lib/data/teacher-tools"
import { useFavorites } from "@/components/providers/FavoritesContext"

const categories = [
    { id: "all", label: "All Tools" },
    { id: "planning", label: "Planning" },
    { id: "assessment", label: "Assessment" },
    { id: "communication", label: "Communication" },
    { id: "support", label: "Student Support" },
    { id: "productivity", label: "Productivity" },
]

export default function TeacherToolsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const { theme } = useTheme()
    const isLight = theme === 'light'
    const { isFavorite, toggleFavorite } = useFavorites()

    const filteredTools = tools.filter(tool => {
        const matchesCategory = activeCategory === "all" || tool.category === activeCategory
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.desc.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="space-y-8 pb-20">
            <div className={cn("flex flex-col md:flex-row justify-between items-end gap-6 border-b pb-8", isLight ? "border-slate-200" : "border-slate-800")}>
                <div>
                    <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Teacher Tools</h1>
                    <p className={cn("text-lg", isLight ? "text-slate-600 font-medium" : "text-slate-400")}>Discover 80+ AI-powered tools to save time and enhance instruction.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors border",
                        isLight
                            ? "bg-white text-slate-700 hover:bg-slate-50 border-slate-200 shadow-sm"
                            : "bg-white/5 text-slate-300 hover:bg-white/10 border-white/10"
                    )}>
                        <Filter className="w-4 h-4" />
                        <span className="text-sm font-medium">Filters</span>
                    </button>
                </div>
            </div>

            {/* Controls */}
            <div className={cn(
                "flex flex-col md:flex-row gap-4 items-center justify-between sticky top-16 z-30 py-4 backdrop-blur-xl -mx-6 px-6 md:mx-0 md:px-0 transition-all rounded-xl",
                isLight
                    ? "bg-slate-50/80 border border-slate-200/50"
                    : "bg-slate-950/80 border border-white/5"
            )}>
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border",
                                activeCategory === cat.id
                                    ? "bg-violet-600 text-white border-violet-600 shadow-lg shadow-violet-500/25"
                                    : isLight
                                        ? "bg-white text-slate-600 border-slate-200 hover:border-violet-300 hover:text-violet-600"
                                        : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search tools..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={cn(
                            "w-full pl-10 pr-4 py-2.5 rounded-full text-sm outline-none border transition-all",
                            isLight
                                ? "bg-white border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 text-slate-900 placeholder:text-slate-400 shadow-sm"
                                : "bg-white/5 border-white/10 focus:border-violet-500/50 focus:bg-white/10 text-white placeholder:text-slate-500"
                        )}
                    />
                </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredTools.map((tool, index) => {
                    const favorited = isFavorite(tool.id)
                    return (
                        <Link
                            key={tool.id}
                            href={`/app/tool/${tool.id}`}
                            className="block"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.03 }}
                                className={cn(
                                    "group relative rounded-2xl p-5 hover:-translate-y-1 transition-all duration-200 h-full flex flex-col justify-between",
                                    isLight
                                        ? "bg-white border-2 border-slate-200 shadow-sm hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10"
                                        : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/50"
                                )}
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={cn(
                                            "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3",
                                            tool.color
                                        )}>
                                            <tool.icon className="w-6 h-6" />
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                e.stopPropagation()
                                                toggleFavorite(tool.id)
                                            }}
                                            className={cn(
                                                "p-2 rounded-full transition-all active:scale-95",
                                                favorited
                                                    ? "text-amber-400 hover:text-amber-300 bg-amber-400/10"
                                                    : "text-slate-300 hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-white/10"
                                            )}
                                        >
                                            <Star className={cn("w-5 h-5 transition-transform hover:scale-110", favorited ? "fill-current" : "")} />
                                        </button>
                                    </div>

                                    <h3 className={cn("text-lg font-bold mb-2 transition-colors", isLight ? "text-slate-900 group-hover:text-violet-700" : "text-white group-hover:text-violet-300")}>
                                        {tool.name}
                                    </h3>
                                    <p className={cn("text-sm leading-relaxed mb-4 line-clamp-2", isLight ? "text-slate-600 font-medium" : "text-slate-400")}>
                                        {tool.desc}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-dashed border-slate-200 dark:border-white/10">
                                    {(tool.new || tool.plus) && (
                                        <div className="flex gap-2">
                                            {tool.new && (
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30">
                                                    NEW
                                                </span>
                                            )}
                                            {tool.plus && (
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30 flex items-center gap-1">
                                                    <Sparkles className="w-2.5 h-2.5" /> PLUS
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
