"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Search, Sparkles, BookOpen, PenTool, Calculator, MessageSquare, Music, Video, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useStudentTheme } from "@/components/student/StudentThemeContext"

const categories = [
    { id: "all", label: "All Tools" },
    { id: "writing", label: "Writing" },
    { id: "reading", label: "Reading" },
    { id: "math", label: "Math" },
    { id: "creative", label: "Creative" },
]

const tools = [
    { id: 1, name: "Essay Outliner", category: "writing", icon: PenTool, color: "bg-pink-500", desc: "Create a plan for your essay" },
    { id: 2, name: "Paragraph Writer", category: "writing", icon: PenTool, color: "bg-pink-400", desc: "Turn loose ideas into paragraphs" },
    { id: 3, name: "Grammar Check", category: "writing", icon: MessageSquare, color: "bg-pink-600", desc: "Fix spelling and grammar mistakes" },
    { id: 4, name: "Math Tutor", category: "math", icon: Calculator, color: "bg-blue-500", desc: "Get help with math problems" },
    { id: 5, name: "Word Problems", category: "math", icon: Calculator, color: "bg-blue-400", desc: "Understand tricky word problems" },
    { id: 6, name: "Text Summarizer", category: "reading", icon: BookOpen, color: "bg-emerald-500", desc: "Make long texts shorter" },
    { id: 7, name: "Vocab builder", category: "reading", icon: BookOpen, color: "bg-emerald-400", desc: "Learn new words and meanings" },
    { id: 8, name: "Story Generator", category: "creative", icon: Sparkles, color: "bg-purple-500", desc: "Write a fun story from ideas" },
    { id: 9, name: "Poem Writer", category: "creative", icon: Music, color: "bg-purple-400", desc: "Create rhymes and poems" },
    { id: 10, name: "Presentation Helper", category: "creative", icon: Video, color: "bg-purple-600", desc: "Plan slides for your project" },
]

export default function StudentToolsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const { theme } = useStudentTheme()
    const isLight = theme === 'light'

    const filteredTools = tools.filter(tool => {
        const matchesCategory = activeCategory === "all" || tool.category === activeCategory
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.desc.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl"
            >
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-black" : "text-white")}>My Tools</h1>
                <p className={isLight ? "text-slate-700 font-medium" : "text-blue-200"}>Select a tool to start creating, learning, and exploring.</p>
            </motion.div>

            {/* Controls */}
            <div className={cn(
                "flex flex-col md:flex-row gap-4 items-center justify-between sticky top-16 md:top-0 z-40 py-4 -mx-4 px-4 md:mx-0 md:px-0 transition-all",
                isLight
                    ? "bg-slate-50/95 backdrop-blur-xl"
                    : "bg-gradient-to-r from-blue-800/80 to-slate-900/80 backdrop-blur-xl md:bg-transparent"
            )}>
                {/* Categories */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                                activeCategory === cat.id
                                    ? isLight
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                                        : "bg-white text-blue-900 shadow-lg shadow-white/10"
                                    : isLight
                                        ? "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                                        : "bg-white/5 text-blue-200 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full md:w-72">
                    <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4", isLight ? "text-slate-500" : "text-blue-300")} />
                    <input
                        type="text"
                        placeholder="Search tools..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={cn(
                            "w-full pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 transition-all",
                            isLight
                                ? "bg-white border border-slate-300 text-black placeholder:text-slate-500 focus:ring-blue-500"
                                : "bg-white/10 border border-white/20 text-white placeholder:text-blue-300 focus:ring-teal-400 focus:bg-white/20"
                        )}
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredTools.map((tool, index) => (
                    <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className={cn(
                            "group relative rounded-2xl p-5 border transition-all cursor-pointer overflow-hidden",
                            isLight
                                ? "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300"
                                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                        )}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shadow-lg", tool.color)}>
                                <tool.icon className="w-6 h-6 text-white" />
                            </div>
                            <button className={cn("transition-colors", isLight ? "text-slate-300 hover:text-yellow-500" : "text-white/20 hover:text-yellow-400")}>
                                <Star className="w-5 h-5" />
                            </button>
                        </div>

                        <h3 className={cn("text-lg font-bold mb-2 transition-colors", isLight ? "text-black group-hover:text-blue-700" : "text-white group-hover:text-teal-200")}>
                            {tool.name}
                        </h3>
                        <p className={cn("text-sm leading-relaxed", isLight ? "text-slate-700 font-medium" : "text-blue-200")}>
                            {tool.desc}
                        </p>

                        <div className={cn(
                            "absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none transition-colors",
                            isLight ? "group-hover:border-blue-500/10" : "group-hover:border-teal-400/20"
                        )} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
