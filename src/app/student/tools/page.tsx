"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
    Search, Sparkles, BookOpen, PenTool, Calculator, MessageSquare, Music, Video, Star,
    FileText, AlignLeft, Quote, Target, ArrowRight, CheckCircle, PenLine, Check, Minimize2,
    RefreshCw, Zap, Mail, Scale, FileSearch, Link as LinkIcon, BookA, BookOpenCheck, Volume2, ArrowDown,
    Focus, UserSearch, Lightbulb, BrainCircuit, PieChart, Triangle, Sigma,
    Bot, Users, ClipboardCheck, Layers, FileInput, FileMinus, ClipboardList, Brain,
    Book, Feather, Image as ImageIcon, Presentation, UserPlus, Terminal, Hourglass,
    CloudLightning, Languages, ShieldCheck, StickyNote, LifeBuoy, Calendar, MessageSquarePlus,
    Filter, ChevronDown, Flame, TrendingUp, X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useStudentTheme } from "@/components/student/StudentThemeContext"

import { useStudentFavorites } from "@/components/student/StudentFavoritesContext"
import { categories, studentTools as tools } from "@/lib/data/student-tools-list"

export default function StudentToolsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
    const { favorites, toggleFavorite, isFavorite } = useStudentFavorites()
    const [isMounted, setIsMounted] = useState(false)
    const { theme } = useStudentTheme()
    const isLight = theme === 'light'

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Skeletons removed for performance optimization directly aligned to teacher tools view

    const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    const [isSearchFocused, setIsSearchFocused] = useState(false)

    // Get trending tools (mock logic: take first 5 hot tools)
    const trendingTools = tools.filter(t => t.isHot).slice(0, 5)

    const handleToggleFavorite = (e: React.MouseEvent, id: number) => {
        e.stopPropagation()
        e.preventDefault()
        toggleFavorite(id)
    }

    const filteredTools = tools.filter(tool => {
        const matchesCategory = activeCategory === "all" || tool.category === activeCategory
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.desc.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesFavorites = !showFavoritesOnly || isFavorite(tool.id)

        return matchesCategory && matchesSearch && matchesFavorites
    })

    const selectedCategoryLabel = categories.find(c => c.id === activeCategory)?.label || "All Tools"

    return (
        <div className="space-y-8 pb-20">
            {/* Header Area */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 text-center max-w-3xl mx-auto pt-6"
            >
                <h1 className={cn("text-3xl font-bold", isLight ? "text-slate-900" : "text-white")}>
                    Student Tools
                </h1>

                {/* Large Search Bar */}
                {/* Large Search Bar - Glass Input */}
                <div className="relative max-w-xl mx-auto group z-50">
                    <div className={cn(
                        "relative flex items-center w-full transition-all duration-300",
                        isSearchFocused && "scale-[1.02]"
                    )}>
                        <Search className={cn("absolute left-5 w-5 h-5 transition-colors z-10", isLight ? "text-[#2563EB]" : "text-blue-300")} />
                        <input
                            type="text"
                            placeholder="Search all tools..."
                            value={searchQuery}
                            onFocus={() => setIsSearchFocused(true)}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={cn(
                                "w-full pl-14 pr-6 py-4 rounded-full text-base transition-all outline-none border-2",
                                isLight
                                    ? "bg-white/80 backdrop-blur-xl border-slate-200 text-[#334155] placeholder:text-slate-400 shadow-[0_8px_30px_rgba(0,0,0,0.08)] focus:border-blue-500 focus:shadow-[0_12px_40px_rgba(37,99,235,0.15)]"
                                    : "bg-slate-900/80 backdrop-blur-xl border-slate-800 text-white placeholder:text-slate-500 focus:bg-slate-800 focus:border-blue-500/50"
                            )}
                        />
                        {isSearchFocused && (
                            <button
                                onClick={() => setIsSearchFocused(false)}
                                className="absolute right-4 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 z-10"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Search Dropdown */}
                    <AnimatePresence>
                        {isSearchFocused && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                className={cn(
                                    "absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-2xl border overflow-hidden backdrop-blur-2xl p-2",
                                    isLight
                                        ? "bg-white/95 border-slate-100 ring-1 ring-slate-200"
                                        : "bg-slate-900/95 border-slate-800 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
                                )}
                            >
                                <div className="p-2">
                                    <h3 className={cn("text-xs font-semibold mb-2 uppercase tracking-wider px-2", isLight ? "text-slate-500" : "text-slate-400")}>Trending</h3>
                                    <div className="space-y-1">
                                        {trendingTools.map(tool => (
                                            <button
                                                key={tool.id}
                                                className={cn(
                                                    "w-full flex items-center justify-between p-3 rounded-xl transition-colors group text-left",
                                                    isLight
                                                        ? "hover:bg-blue-50/80 text-slate-700 hover:text-blue-700"
                                                        : "hover:bg-slate-800 text-slate-400 hover:text-white"
                                                )}
                                                onClick={() => {
                                                    setSearchQuery(tool.name)
                                                    setIsSearchFocused(false)
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <TrendingUp className={cn("w-4 h-4", isLight ? "text-slate-400 group-hover:text-blue-500" : "text-slate-500 group-hover:text-blue-300")} />
                                                    <span className="font-medium">{tool.name}</span>
                                                </div>
                                                <div className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold flex items-center gap-1">
                                                    <Flame className="w-3 h-3 fill-current" /> Hot
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Backdrop to close search */}
                    {isSearchFocused && (
                        <div
                            className="fixed inset-0 z-[-1]"
                            onClick={() => setIsSearchFocused(false)}
                        />
                    )}
                </div>
            </motion.div>

            {/* Most Loved / Hot Tools Banner (Optional - kept straightforward to match request structure) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={cn(
                    "rounded-2xl p-6 relative overflow-hidden flex items-center justify-between backdrop-blur-xl",
                    isLight
                        ? "bg-white/60 border border-white/60 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
                        : "bg-slate-900/50 border border-slate-800 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
                )}
            >
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-5 h-5 text-purple-500" />
                        <h2 className={cn("font-bold text-lg", isLight ? "text-slate-900" : "text-white")}>Try one of our most loved tools</h2>
                    </div>
                </div>
                <button className={cn("text-sm font-medium hover:underline", isLight ? "text-slate-600" : "text-slate-400")}>Show</button>
            </motion.div>

            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <span className={cn("font-semibold", isLight ? "text-slate-700" : "text-slate-300")}>Filter by</span>

                {/* Custom Category Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all min-w-[160px] justify-between backdrop-blur-md",
                            isLight
                                ? "bg-white/70 border border-slate-200/90 text-[#334155] hover:bg-white/90 shadow-sm"
                                : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:bg-slate-800"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            {/* <Filter className="w-4 h-4" /> */}
                            {selectedCategoryLabel}
                        </div>
                        <ChevronDown className={cn("w-4 h-4 transition-transform", isCategoryOpen ? "rotate-180" : "")} />
                    </button>

                    <AnimatePresence>
                        {isCategoryOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                className={cn(
                                    "absolute top-full left-0 mt-2 w-56 rounded-xl shadow-xl border z-50 overflow-hidden py-1 backdrop-blur-xl",
                                    isLight ? "bg-white/80 border-slate-100" : "bg-slate-900/90 border-slate-800 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
                                )}
                            >
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => {
                                            setActiveCategory(cat.id)
                                            setIsCategoryOpen(false)
                                        }}
                                        className={cn(
                                            "w-full text-left px-4 py-2.5 text-sm font-medium transition-colors",
                                            activeCategory === cat.id
                                                ? (isLight ? "bg-blue-50 text-[#2563EB]" : "bg-slate-800 text-blue-400")
                                                : (isLight ? "text-[#334155] hover:bg-slate-50" : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200")
                                        )}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Favorites Filter */}
                <button
                    onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all backdrop-blur-md",
                        showFavoritesOnly
                            ? "border-yellow-400 bg-yellow-50/50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-600/50"
                            : (isLight
                                ? "bg-white/70 border-slate-200/90 text-[#334155] hover:bg-white/90 shadow-sm"
                                : "bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800")
                    )}
                >
                    <Star className={cn("w-4 h-4", showFavoritesOnly ? "fill-current" : "")} />
                    Favorites
                </button>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredTools.map((tool, index) => (
                    <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: Math.min(index * 0.03, 0.5) }} // Cap delay for many items
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
                            <div className="absolute top-4 right-12 px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] uppercase font-bold tracking-wider flex items-center gap-1">
                                <Flame className="w-3 h-3 fill-current" /> Hot
                            </div>
                        )}

                        {/* Favorite Button */}
                        <button
                            onClick={(e) => handleToggleFavorite(e, tool.id)}
                            className={cn(
                                "absolute top-4 right-4 p-1.5 rounded-lg transition-all",
                                isFavorite(tool.id)
                                    ? "text-yellow-400 hover:text-yellow-500"
                                    : (isLight ? "text-slate-300 hover:bg-slate-100 hover:text-slate-400" : "text-slate-600 hover:text-slate-400")
                            )}
                        >
                            <Star className={cn("w-5 h-5", isFavorite(tool.id) ? "fill-current scale-110" : "")} />
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
            </div>

            {filteredTools.length === 0 && (
                <div className="text-center py-20">
                    <p className={cn("text-lg", isLight ? "text-slate-500" : "text-slate-400")}>No tools found matching your criteria.</p>
                    <button
                        onClick={() => {
                            setSearchQuery("")
                            setActiveCategory("all")
                            setShowFavoritesOnly(false)
                        }}
                        className="mt-4 text-blue-500 hover:underline font-medium"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
    )
}
