"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Search, Star, Filter, Sparkles, FileText, CheckCircle, MessageSquare, Users, Globe, Zap, Presentation, PenTool, Layout, Calendar, Target, Calculator, RotateCw, ListTodo, LayoutGrid, Layers, MessageCircle as MessageCircleIcon, CalendarDays, Grid, Heart } from "lucide-react"
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
    { id: "lesson-plan", name: "Lesson Plan Generator", category: "planning", icon: FileText, color: "bg-blue-500", desc: "Generate a lesson plan for a topic or objective you're teaching.", new: false, plus: false },
    { id: "unit-plan", name: "Unit Plan Generator", category: "planning", icon: Calendar, color: "bg-purple-500", desc: "Create a multi-lesson unit plan on any topic.", new: false, plus: true },
    { id: "5e-model-science", name: "5E Model Science Lesson", category: "planning", icon: Zap, color: "bg-emerald-500", desc: "Design a science lesson using the 5E instructional model.", new: false, plus: false },
    { id: "presentation-generator", name: "Presentation Generator", category: "planning", icon: Presentation, color: "bg-orange-500", desc: "Generate exportable slides based on any topic.", new: true, plus: true },
    { id: "lesson-hook", name: "Lesson Hook Generator", category: "planning", icon: Sparkles, color: "bg-yellow-500", desc: "Create an engaging hook to start your lesson.", new: false, plus: false },
    { id: "standards-unpacker", name: "Standards Unpacker", category: "planning", icon: Search, color: "bg-indigo-500", desc: "Break down standards into student-friendly language.", new: false, plus: false },
    { id: "accommodation-suggestions", name: "Accommodation Suggestions", category: "planning", icon: Users, color: "bg-teal-500", desc: "Get ideas for accommodating students with diverse needs.", new: false, plus: false },
    { id: "assignment-scaffolder", name: "Assignment Scaffolder", category: "planning", icon: Layout, color: "bg-cyan-500", desc: "Break down complex assignments into manageable steps.", new: false, plus: false },
    { id: "text-leveler", name: "Text Leveler", category: "planning", icon: PenTool, color: "bg-rose-500", desc: "Rewrite any text at different reading levels.", new: false, plus: false },
    { id: "vocabulary-scaffolder", name: "Vocabulary Scaffolder", category: "planning", icon: Globe, color: "bg-fuchsia-500", desc: "Create tiered vocabulary lists with definitions.", new: false, plus: false },
    { id: "make-it-relevant", name: "Make It Relevant", category: "planning", icon: Target, color: "bg-red-500", desc: "Adapt content to connect with student interests and backgrounds.", new: false, plus: false },
    { id: "math-story-problem", name: "Math Story Problem", category: "planning", icon: Calculator, color: "bg-blue-600", desc: "Create word problems for any math concept with real-world context.", new: false, plus: false },
    { id: "math-spiral-review", name: "Math Spiral Review", category: "planning", icon: RotateCw, color: "bg-indigo-500", desc: "Generate practice problems that review multiple concepts.", new: false, plus: true },
    { id: "project-outline", name: "Project Outline Generator", category: "planning", icon: ListTodo, color: "bg-orange-600", desc: "Create a structured outline and timeline for student projects.", new: true, plus: false },
    { id: "choice-board", name: "Choice Board Generator", category: "planning", icon: LayoutGrid, color: "bg-pink-500", desc: "Create a choice board with differentiated activity options.", new: false, plus: true },
    { id: "dok-questions", name: "DOK Questions Generator", category: "planning", icon: Layers, color: "bg-purple-600", desc: "Generate questions at different Depth of Knowledge (DOK) levels.", new: false, plus: false },
    { id: "discussion-questions", name: "Discussion Questions", category: "planning", icon: MessageCircleIcon, color: "bg-teal-600", desc: "Create thought-provoking discussion questions for class.", new: false, plus: false },
    { id: "class-syllabus", name: "Class Syllabus Generator", category: "planning", icon: FileText, color: "bg-slate-700", desc: "Generate a comprehensive course syllabus.", new: false, plus: false },
    { id: "weekly-agenda", name: "Weekly Agenda Generator", category: "planning", icon: CalendarDays, color: "bg-green-600", desc: "Create a structured weekly class agenda.", new: false, plus: false },
    { id: "learning-stations", name: "Learning Station Activities", category: "planning", icon: Grid, color: "bg-yellow-600", desc: "Design activities for rotation learning stations/centers.", new: false, plus: false },
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
                                    ? isLight
                                        ? "bg-violet-600 text-white shadow-md shadow-violet-200 border-violet-600"
                                        : "bg-violet-600 text-white shadow-lg shadow-violet-500/25 border-violet-500"
                                    : isLight
                                        ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-violet-700"
                                        : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
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
                                : "bg-black/20 border border-white/10 text-white placeholder:text-slate-500 focus:ring-violet-500/50 focus:bg-black/40"
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
                            "group relative rounded-2xl p-5 hover:-translate-y-1 transition-all duration-200 cursor-pointer block",
                            isLight
                                ? "bg-white border-2 border-slate-200 shadow-md hover:border-violet-300 hover:shadow-lg"
                                : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                        )}
                        onClick={() => window.location.href = `/app/tool/${tool.id}`}
                    >
                        {/* Top Row */}
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110",
                                tool.color
                            )}>
                                <tool.icon className="w-6 h-6" />
                            </div>
                            <button className={cn("transition-colors", isLight ? "text-slate-400 hover:text-amber-500" : "text-slate-600 hover:text-amber-400")}>
                                <Star className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <h3 className={cn("text-lg font-bold mb-2 transition-colors", isLight ? "text-slate-900 group-hover:text-violet-700" : "text-white group-hover:text-violet-300")}>
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
