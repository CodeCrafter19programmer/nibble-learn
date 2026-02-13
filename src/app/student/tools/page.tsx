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

// Categories
const categories = [
    { id: "all", label: "All Tools" },
    { id: "writing", label: "Writing & Research" },
    { id: "reading", label: "Reading & Learning" },
    { id: "math", label: "Math Help" },
    { id: "study", label: "Study Tools" },
    { id: "creative", label: "Creative Tools" },
    { id: "ai", label: "AI Literacy" },
]

// Tools Data
const tools = [
    // Writing & Research
    { id: 1, name: "Essay Outliner", category: "writing", icon: FileText, color: "bg-blue-100 text-blue-600", desc: "Create an outline for your essay with main points." },
    { id: 2, name: "Paragraph Generator", category: "writing", icon: AlignLeft, color: "bg-blue-100 text-blue-600", desc: "Generate a paragraph to help you get started." },
    { id: 3, name: "Research Assistant", category: "writing", icon: FileSearch, color: "bg-blue-100 text-blue-600", desc: "Find information and sources for your project." },
    { id: 4, name: "Citation Helper", category: "writing", icon: Quote, color: "bg-blue-100 text-blue-600", desc: "Create citations in MLA or APA format." },
    { id: 5, name: "Thesis Statement", category: "writing", icon: Target, color: "bg-blue-100 text-blue-600", desc: "Create a strong thesis statement for your essay." },
    { id: 6, name: "Intro Writer", category: "writing", icon: ArrowRight, color: "bg-blue-100 text-blue-600", desc: "Generate an engaging introduction." },
    { id: 7, name: "Conclusion Writer", category: "writing", icon: CheckCircle, color: "bg-blue-100 text-blue-600", desc: "Write a strong conclusion for your essay." },
    { id: 8, name: "Sentence Starter", category: "writing", icon: PenLine, color: "bg-blue-100 text-blue-600", desc: "Get ideas for starting your sentences." },
    { id: 9, name: "Grammar Check", category: "writing", icon: Check, color: "bg-blue-100 text-blue-600", desc: "Check your writing for simple mistakes." },
    { id: 10, name: "Writing Feedback", category: "writing", icon: MessageSquare, color: "bg-blue-100 text-blue-600", desc: "Get feedback on your writing.", isHot: true },
    { id: 11, name: "Text Summarizer", category: "writing", icon: Minimize2, color: "bg-blue-100 text-blue-600", desc: "Summarize long texts to understand main ideas." },
    { id: 12, name: "Text Rewriter", category: "writing", icon: RefreshCw, color: "bg-blue-100 text-blue-600", desc: "Rewrite text in your own words." },
    { id: 13, name: "Word Choice", category: "writing", icon: Zap, color: "bg-blue-100 text-blue-600", desc: "Find better words to make writing stronger." },
    { id: 14, name: "Email Writer", category: "writing", icon: Mail, color: "bg-blue-100 text-blue-600", desc: "Write a professional email to your teacher." },
    { id: 15, name: "Counter-Argument", category: "writing", icon: Scale, color: "bg-blue-100 text-blue-600", desc: "Find opposing views for your essay." },
    { id: 16, name: "Evidence Finder", category: "writing", icon: FileSearch, color: "bg-blue-100 text-blue-600", desc: "Get ideas for evidence to support claims." },
    { id: 17, name: "Transition Words", category: "writing", icon: LinkIcon, color: "bg-blue-100 text-blue-600", desc: "Find words to connect your ideas." },
    { id: 18, name: "Vocabulary Builder", category: "writing", icon: BookA, color: "bg-blue-100 text-blue-600", desc: "Learn new words related to your topic." },

    // Reading & Learning
    { id: 19, name: "Reading Comp.", category: "reading", icon: BookOpenCheck, color: "bg-emerald-100 text-emerald-600", desc: "Answer questions to check understanding." },
    { id: 20, name: "Text-to-Speech", category: "reading", icon: Volume2, color: "bg-emerald-100 text-emerald-600", desc: "Listen to text read aloud." },
    { id: 21, name: "Text Simplifier", category: "reading", icon: ArrowDown, color: "bg-emerald-100 text-emerald-600", desc: "Make difficult text easier to understand." },
    { id: 22, name: "Main Idea Finder", category: "reading", icon: Focus, color: "bg-emerald-100 text-emerald-600", desc: "Identify the main idea of a text." },
    { id: 23, name: "Character Analysis", category: "reading", icon: UserSearch, color: "bg-emerald-100 text-emerald-600", desc: "Analyze characters from stories." },
    { id: 24, name: "Theme Identifier", category: "reading", icon: Lightbulb, color: "bg-emerald-100 text-emerald-600", desc: "Find themes in stories and texts." },
    { id: 25, name: "Figurative Lang.", category: "reading", icon: Sparkles, color: "bg-emerald-100 text-emerald-600", desc: "Identify metaphors and similes." },
    { id: 26, name: "Context Clues", category: "reading", icon: Search, color: "bg-emerald-100 text-emerald-600", desc: "Figure out word meanings from context." },

    // Math Help
    { id: 27, name: "Math Tutor", category: "math", icon: Calculator, color: "bg-orange-100 text-orange-600", desc: "Get help solving math problems step-by-step." },
    { id: 28, name: "Word Problems", category: "math", icon: FileText, color: "bg-orange-100 text-orange-600", desc: "Understand and solve math word problems." },
    { id: 29, name: "Concept Explainer", category: "math", icon: BrainCircuit, color: "bg-orange-100 text-orange-600", desc: "Understand difficult math concepts." },
    { id: 30, name: "Fraction Helper", category: "math", icon: PieChart, color: "bg-orange-100 text-orange-600", desc: "Work with fractions easily." },
    { id: 31, name: "Geometry Helper", category: "math", icon: Triangle, color: "bg-orange-100 text-orange-600", desc: "Calculate area, perimeter, and volume." },
    { id: 32, name: "Formula Ref.", category: "math", icon: Sigma, color: "bg-orange-100 text-orange-600", desc: "Look up math formulas you need." },

    // Study Tools
    { id: 33, name: "AI Tutor", category: "study", icon: Bot, color: "bg-violet-100 text-violet-600", desc: "Ask questions on any subject.", isHot: true },
    { id: 34, name: "Study Partner", category: "study", icon: Users, color: "bg-violet-100 text-violet-600", desc: "Use AI as a study buddy." },
    { id: 35, name: "Quiz Yourself", category: "study", icon: ClipboardCheck, color: "bg-violet-100 text-violet-600", desc: "Create a practice quiz on any topic." },
    { id: 36, name: "Flashcards", category: "study", icon: Layers, color: "bg-violet-100 text-violet-600", desc: "Make flashcards to help you study." },
    { id: 37, name: "Study Guide", category: "study", icon: FileInput, color: "bg-violet-100 text-violet-600", desc: "Create a study guide for your test." },
    { id: 38, name: "Note Summarizer", category: "study", icon: FileMinus, color: "bg-violet-100 text-violet-600", desc: "Turn notes into a quick summary." },
    { id: 39, name: "Test Prep", category: "study", icon: ClipboardList, color: "bg-violet-100 text-violet-600", desc: "Practice questions for upcoming tests." },
    { id: 40, name: "Memory Tricks", category: "study", icon: Brain, color: "bg-violet-100 text-violet-600", desc: "Get ideas for remembering information." },

    // Creative Tools
    { id: 41, name: "Story Generator", category: "creative", icon: Book, color: "bg-pink-100 text-pink-600", desc: "Create creative stories with AI." },
    { id: 42, name: "Poem Writer", category: "creative", icon: Feather, color: "bg-pink-100 text-pink-600", desc: "Write poems about any topic." },
    { id: 43, name: "Image Generator", category: "creative", icon: ImageIcon, color: "bg-pink-100 text-pink-600", desc: "Create images regarding your prompt.", isHot: true },
    { id: 44, name: "Project Ideas", category: "creative", icon: Lightbulb, color: "bg-pink-100 text-pink-600", desc: "Get ideas for school projects." },
    { id: 45, name: "Slides Helper", category: "creative", icon: Presentation, color: "bg-pink-100 text-pink-600", desc: "Create an outline for your presentation." },
    { id: 46, name: "Writing Prompts", category: "creative", icon: PenTool, color: "bg-pink-100 text-pink-600", desc: "Get ideas for creative writing." },
    { id: 47, name: "Character Creator", category: "creative", icon: UserPlus, color: "bg-pink-100 text-pink-600", desc: "Develop characters for your stories." },
    { id: 48, name: "Rhyme Finder", category: "creative", icon: Music, color: "bg-pink-100 text-pink-600", desc: "Find words that rhyme." },

    // AI Literacy
    { id: 49, name: "Ask About AI", category: "ai", icon: Bot, color: "bg-indigo-100 text-indigo-600", desc: "Learn how AI works." },
    { id: 50, name: "Prompt Helper", category: "ai", icon: Terminal, color: "bg-indigo-100 text-indigo-600", desc: "Learn to write better prompts." },
    { id: 52, name: "Character Chat", category: "ai", icon: MessageSquarePlus, color: "bg-indigo-100 text-indigo-600", desc: "Chat with a book character.", isHot: true },
    { id: 53, name: "Custom Chatbot", category: "ai", icon: Bot, color: "bg-indigo-100 text-indigo-600", desc: "Build a chatbot on any topic.", isHot: true },
    { id: 54, name: "Idea Generator", category: "ai", icon: CloudLightning, color: "bg-indigo-100 text-indigo-600", desc: "Brainstorm ideas on any topic." },
    { id: 55, name: "Translator", category: "ai", icon: Languages, color: "bg-indigo-100 text-indigo-600", desc: "Translate text to other languages." },
    { id: 56, name: "Source Eval", category: "ai", icon: ShieldCheck, color: "bg-indigo-100 text-indigo-600", desc: "Learn if a source is reliable." },
    { id: 57, name: "Note Template", category: "ai", icon: StickyNote, color: "bg-indigo-100 text-indigo-600", desc: "Organize your notes better." },
    { id: 58, name: "Homework Helper", category: "ai", icon: LifeBuoy, color: "bg-indigo-100 text-indigo-600", desc: "Get help understanding homework." },
    { id: 59, name: "Time Planner", category: "ai", icon: Calendar, color: "bg-indigo-100 text-indigo-600", desc: "Plan your study time." },
    { id: 60, name: "Peer Feedback", category: "ai", icon: MessageSquarePlus, color: "bg-indigo-100 text-indigo-600", desc: "Give helpful feedback to classmates." },
]

export default function StudentToolsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
    const [favorites, setFavorites] = useState<number[]>([10, 33, 43]) // Default mock favorites
    const [isMounted, setIsMounted] = useState(false)
    const { theme } = useStudentTheme()
    const isLight = theme === 'light'

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const SkeletonCard = () => (
        <div className={cn(
            "rounded-[20px] p-5 border h-[240px] animate-pulse",
            isLight ? "bg-white/60 border-slate-200" : "bg-white/5 border-white/10"
        )}>
            <div className={cn("w-12 h-12 rounded-[14px] mb-4", isLight ? "bg-slate-200" : "bg-white/10")} />
            <div className={cn("h-6 w-3/4 rounded mb-3", isLight ? "bg-slate-200" : "bg-white/10")} />
            <div className={cn("h-4 w-full rounded mb-2", isLight ? "bg-slate-200/60" : "bg-white/5")} />
            <div className={cn("h-4 w-2/3 rounded", isLight ? "bg-slate-200/60" : "bg-white/5")} />
        </div>
    )
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    const [isSearchFocused, setIsSearchFocused] = useState(false)

    // Get trending tools (mock logic: take first 5 hot tools)
    const trendingTools = tools.filter(t => t.isHot).slice(0, 5)

    // Toggle Favorite
    const toggleFavorite = (e: React.MouseEvent, id: number) => {
        e.stopPropagation()
        e.preventDefault()
        if (favorites.includes(id)) {
            setFavorites(favorites.filter(fav => fav !== id))
        } else {
            setFavorites([...favorites, id])
        }
    }

    const filteredTools = tools.filter(tool => {
        const matchesCategory = activeCategory === "all" || tool.category === activeCategory
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.desc.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesFavorites = !showFavoritesOnly || favorites.includes(tool.id)

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
                                    : "bg-white/[0.08] backdrop-blur-xl border-white/[0.15] text-white placeholder:text-slate-400 focus:bg-white/[0.12] focus:border-blue-400/50"
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
                                        : "bg-[#0F172A]/95 border-white/10"
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
                                                        : "hover:bg-white/10 text-slate-300 hover:text-white"
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
                        : "bg-white/[0.08] border border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
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
                                : "bg-white/[0.08] border border-white/[0.15] text-slate-200 hover:bg-white/[0.12]"
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
                                    isLight ? "bg-white/80 border-slate-100" : "bg-[#0A1A3A]/90 border-white/[0.15]"
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
                                                ? (isLight ? "bg-blue-50 text-[#2563EB]" : "bg-blue-900/40 text-blue-300")
                                                : (isLight ? "text-[#334155] hover:bg-slate-50" : "text-slate-300 hover:bg-white/[0.08]")
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
                                : "bg-white/[0.08] border-white/[0.15] text-slate-200 hover:bg-white/[0.12]")
                    )}
                >
                    <Star className={cn("w-4 h-4", showFavoritesOnly ? "fill-current" : "")} />
                    Favorites
                </button>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <AnimatePresence mode="popLayout">
                    {!isMounted && Array.from({ length: 8 }).map((_, i) => (
                        <motion.div key={`skel-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <SkeletonCard />
                        </motion.div>
                    ))}
                    {isMounted && filteredTools.map((tool, index) => (
                        <motion.div
                            // layout // Removed for performance
                            key={tool.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={cn(
                                "group relative rounded-[20px] p-5 border transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-xl",
                                isLight
                                    ? "bg-white/60 border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-blue-50/40 hover:border-blue-200 hover:-translate-y-[4px] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] ring-1 ring-slate-900/5"
                                    : "bg-white/[0.08] border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:bg-white/[0.12] hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(30,78,216,0.35)]"
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
                                onClick={(e) => toggleFavorite(e, tool.id)}
                                className={cn(
                                    "absolute top-4 right-4 p-1.5 rounded-lg transition-all",
                                    favorites.includes(tool.id)
                                        ? "text-yellow-400 hover:text-yellow-500"
                                        : (isLight ? "text-slate-300 hover:bg-slate-100 hover:text-slate-400" : "text-slate-600 hover:text-slate-400")
                                )}
                            >
                                <Star className={cn("w-5 h-5", favorites.includes(tool.id) ? "fill-current scale-110" : "")} />
                            </button>

                            <div className="flex flex-col gap-4">
                                <div className={cn(
                                    "w-12 h-12 rounded-[14px] flex items-center justify-center backdrop-blur-md",
                                    isLight
                                        ? "bg-blue-500/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_6px_16px_rgba(37,99,235,0.15)]"
                                        : "bg-white/[0.15] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_16px_rgba(0,0,0,0.3)]"
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
