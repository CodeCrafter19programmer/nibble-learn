"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Search, Star, Filter, Sparkles, FileText, CheckCircle, MessageSquare, Users, Globe, Zap, Presentation, PenTool, Layout, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/providers/ThemeContext"

const categories = [
    { id: "all", label: "All Tools" },
    { id: "planning", label: "Planning" },
    { id: "assessment", label: "Assessment" },
    { id: "communication", label: "Communication" },
    { id: "support", label: "Student Support" },
    { id: "productivity", label: "Productivity" },
]

const tools = [
    { id: 1, name: "Lesson Plan Generator", category: "planning", icon: FileText, color: "bg-blue-500", desc: "Generate 5E, Madeline Hunter, or custom lesson plans.", new: false, plus: false },
    { id: 2, name: "Rubric Generator", category: "assessment", icon: CheckCircle, color: "bg-emerald-500", desc: "Create standards-aligned rubrics in table format.", new: false, plus: false },
    { id: 3, name: "Report Card Comments", category: "communication", icon: MessageSquare, color: "bg-purple-500", desc: "Write professional comments based on student traits.", new: false, plus: true },
    { id: 4, name: "IEP Draft Generator", category: "support", icon: Users, color: "bg-orange-500", desc: "Draft IEP goals, accommodations, and present levels.", new: false, plus: true },
    { id: 5, name: "Text Leveler", category: "support", icon: Zap, color: "bg-amber-500", desc: "Adapt text reading levels for different students.", new: false, plus: false },
    { id: 6, name: "Presentation Generator", category: "planning", icon: Presentation, color: "bg-pink-500", desc: "Create an outline and content for slide decks.", new: true, plus: true },
    { id: 7, name: "YouTube Question Generator", category: "assessment", icon: Globe, color: "bg-red-500", desc: "Get questions from any educational video URL.", new: false, plus: false },
    { id: 8, name: "Email Responder", category: "communication", icon: MessageSquare, color: "bg-indigo-500", desc: "Draft professional responses to parent emails.", new: false, plus: false },
    { id: 9, name: "Worksheet Generator", category: "assessment", icon: Layout, color: "bg-teal-500", desc: "Create matching, multiple choice, or cloze worksheets.", new: true, plus: false },
    { id: 10, name: "Unit Plan Generator", category: "planning", icon: Calendar, color: "bg-cyan-500", desc: "Plan out a 4-week unit with objectives and activities.", new: false, plus: true },
    { id: 11, name: "Writing Feedback", category: "assessment", icon: PenTool, color: "bg-violet-500", desc: "Give instant feedback on student essays.", new: false, plus: false },
    { id: 12, name: "Class Newsletter", category: "communication", icon: Sparkles, color: "bg-fuchsia-500", desc: "Write engaging weekly updates for families.", new: false, plus: false },
]

export default function TeacherToolsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const { theme } = useTheme()
    const isLight = theme === 'light'

    const filteredTools = tools.filter(tool => {
        const matchesCategory = activeCategory === "all" || tool.category === activeCategory
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.desc.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="space-y-8">
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
                            : "bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700"
                    )}>
                        <Filter className="w-4 h-4" />
                        <span className="text-sm font-medium">Filters</span>
                    </button>
                </div>
            </div>

            {/* Controls */}
            <div className={cn(
                "flex flex-col md:flex-row gap-4 items-center justify-between sticky top-16 z-30 py-4 backdrop-blur-xl -mx-6 px-6 md:mx-0 md:px-0 transition-all",
                isLight
                    ? "bg-slate-50/90 border-b border-transparent"
                    : "bg-slate-950/80"
            )}>
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                                activeCategory === cat.id
                                    ? isLight
                                        ? "bg-violet-600 text-white shadow-md shadow-violet-200"
                                        : "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                                    : isLight
                                        ? "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-violet-700"
                                        : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-72">
                    <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4", isLight ? "text-slate-500" : "text-slate-500")} />
                    <input
                        type="text"
                        placeholder="Search tools..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={cn(
                            "w-full pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 transition-all",
                            isLight
                                ? "bg-white border border-slate-300 text-black placeholder:text-slate-500 focus:ring-violet-500"
                                : "bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:ring-violet-500/50 focus:bg-slate-900"
                        )}
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredTools.map((tool, index) => (
                    <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.03 }}
                        className={cn(
                            "group relative rounded-2xl p-5 hover:-translate-y-1 transition-all duration-200",
                            isLight
                                ? "bg-white border-2 border-slate-200 shadow-md hover:border-violet-300 hover:shadow-lg"
                                : "bg-slate-900 border border-slate-800 hover:border-slate-700"
                        )}
                    >
                        {/* Top Row */}
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg",
                                tool.color
                            )}>
                                <tool.icon className="w-6 h-6" />
                            </div>
                            <button className={cn("transition-colors", isLight ? "text-slate-400 hover:text-amber-500" : "text-slate-600 hover:text-amber-400")}>
                                <Star className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <h3 className={cn("text-lg font-bold mb-2 transition-colors", isLight ? "text-slate-900 group-hover:text-violet-700" : "text-slate-100 group-hover:text-violet-400")}>
                            {tool.name}
                        </h3>
                        <p className={cn("text-sm leading-relaxed mb-8", isLight ? "text-slate-600 font-medium" : "text-slate-400")}>
                            {tool.desc}
                        </p>

                        {/* Badges */}
                        <div className="absolute bottom-5 left-5 flex gap-2">
                            {tool.new && (
                                <span className={cn(
                                    "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border",
                                    isLight
                                        ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                                        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                )}>
                                    New
                                </span>
                            )}
                            {tool.plus && (
                                <span className={cn(
                                    "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border flex items-center gap-1",
                                    isLight
                                        ? "bg-amber-50 text-amber-600 border-amber-200"
                                        : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                )}>
                                    <Sparkles className="w-3 h-3" /> Plus
                                </span>
                            )}
                        </div>

                        {/* Hover Effect Border */}
                        <div className={cn("absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none transition-all", isLight ? "group-hover:border-violet-500/10" : "group-hover:border-violet-500/10")} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
