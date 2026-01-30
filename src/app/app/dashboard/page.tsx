"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
    Sparkles,
    ArrowRight,
    Clock,
    ChevronRight,
    TrendingUp,
    FileText,
    Presentation,
    CheckCircle,
    MessageSquare,
    Users,
    Zap,
    Globe
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/providers/ThemeContext"

const recentTools = [
    { id: 1, name: "Lesson Plan Generator", icon: FileText, color: "bg-blue-500", time: "2 hours ago" },
    { id: 2, name: "Rubric Maker", icon: CheckCircle, color: "bg-emerald-500", time: "Yesterday" },
    { id: 3, name: "Parent Email Writer", icon: MessageSquare, color: "bg-purple-500", time: "2 days ago" },
    { id: 4, name: "Text Leveler", icon: Zap, color: "bg-amber-500", time: "3 days ago" },
]

const popularTools = [
    { name: "Lesson Plan Generator", icon: FileText, color: "bg-blue-500", desc: "Create detailed 5E lesson plans instantly." },
    { name: "Presentation Generator", icon: Presentation, color: "bg-orange-500", desc: "Generate slide decks for any topic." },
    { name: "YoutTube Video Question Generator", icon: Globe, color: "bg-red-500", desc: "Get questions from any YouTube video URL." },
    { name: "Math Spiral Review", icon: Zap, color: "bg-teal-500", desc: "Create spiral review problem sets." },
    { name: "IEP Generator", icon: Users, color: "bg-indigo-500", desc: "Draft IEP goals and accommodations." },
    { name: "Writing Feedback", icon: MessageSquare, color: "bg-pink-500", desc: "Give instant feedback on student writing." },
]

const categories = [
    { name: "Planning", count: 25, icon: FileText, color: "from-blue-500 to-cyan-500" },
    { name: "Assessment", count: 18, icon: CheckCircle, color: "from-emerald-500 to-green-500" },
    { name: "Communication", count: 12, icon: MessageSquare, color: "from-purple-500 to-fuchsia-500" },
    { name: "Student Support", count: 15, icon: Users, color: "from-orange-500 to-amber-500" },
]

export default function TeacherDashboard() {
    const time = new Date().getHours()
    const greeting = time < 12 ? "Good morning" : time < 18 ? "Good afternoon" : "Good evening"
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
            >
                <div>
                    <h1 className={cn("text-3xl md:text-4xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>
                        {greeting}, Jane!
                    </h1>
                    <p className={cn("text-lg", isLight ? "text-slate-600 font-medium" : "text-slate-400")}>
                        What would you like to create for your students today?
                    </p>
                </div>

                <div className="flex gap-3">
                    <div className={cn("rounded-2xl p-4 flex items-center gap-3 border", isLight ? "bg-white border-slate-200 shadow-sm" : "bg-slate-800/50 border-slate-700")}>
                        <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                            <p className={cn("text-xs font-medium uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Hours Saved</p>
                            <p className={cn("text-xl font-bold", isLight ? "text-slate-900" : "text-white")}>12.5 hrs</p>
                        </div>
                    </div>
                    <div className={cn("rounded-2xl p-4 flex items-center gap-3 border", isLight ? "bg-white border-slate-200 shadow-sm" : "bg-slate-800/50 border-slate-700")}>
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <Zap className="w-5 h-5" />
                        </div>
                        <div>
                            <p className={cn("text-xs font-medium uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Generations</p>
                            <p className={cn("text-xl font-bold", isLight ? "text-slate-900" : "text-white")}>48</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Jump Back In */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className={cn("text-xl font-bold flex items-center gap-2", isLight ? "text-slate-900" : "text-white")}>
                        <Clock className="w-5 h-5 text-slate-500" />
                        Jump Back In
                    </h2>
                    <Link href="/app/history" className={cn("text-sm transition-colors", isLight ? "text-violet-600 hover:text-violet-800 font-medium" : "text-violet-400 hover:text-violet-300")}>
                        View History
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {recentTools.map((tool) => (
                        <Link
                            key={tool.id}
                            href={`/app/tool/${tool.id}`}
                            className={cn(
                                "group p-4 rounded-xl border transition-all duration-200",
                                isLight
                                    ? "bg-white border-slate-200 hover:border-violet-300 hover:shadow-md"
                                    : "bg-slate-800/50 border-slate-700/50 hover:border-violet-500/30 hover:bg-slate-800"
                            )}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg", tool.color)}>
                                    <tool.icon className="w-5 h-5" />
                                </div>
                                <span className="text-xs text-slate-500">{tool.time}</span>
                            </div>
                            <h3 className={cn("font-semibold transition-colors", isLight ? "text-slate-900 group-hover:text-violet-700" : "text-slate-200 group-hover:text-white")}>{tool.name}</h3>
                        </Link>
                    ))}
                </div>
            </motion.section>

            {/* Popular Tools */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className={cn("text-xl font-bold flex items-center gap-2", isLight ? "text-slate-900" : "text-white")}>
                        <TrendingUp className="w-5 h-5 text-amber-500" />
                        Popular This Week
                    </h2>
                    <Link href="/app/tools" className={cn("flex items-center gap-1 text-sm transition-colors", isLight ? "text-slate-600 hover:text-black font-medium" : "text-slate-400 hover:text-white")}>
                        View all 80+ tools <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {popularTools.map((tool, i) => (
                        <Link
                            key={i}
                            href="/app/tools"
                            className={cn(
                                "group relative p-5 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl",
                                isLight
                                    ? "bg-white border-slate-200 shadow-sm hover:border-violet-200"
                                    : "bg-slate-900 border-slate-800 hover:border-slate-700"
                            )}
                        >
                            <div className="flex items-start gap-4">
                                <div className={cn("w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-lg", tool.color)}>
                                    <tool.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className={cn("text-lg font-bold transition-colors mb-1", isLight ? "text-slate-900 group-hover:text-violet-700" : "text-slate-100 group-hover:text-violet-400")}>
                                        {tool.name}
                                    </h3>
                                    <p className={cn("text-sm line-clamp-2", isLight ? "text-slate-600 font-medium" : "text-slate-500")}>
                                        {tool.desc}
                                    </p>
                                </div>
                            </div>
                            <div className={cn("absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none transition-all", isLight ? "group-hover:border-violet-500/10" : "group-hover:border-violet-500/10")} />
                        </Link>
                    ))}
                </div>
            </motion.section>

            {/* Explore Categories */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h2 className={cn("text-xl font-bold mb-6", isLight ? "text-slate-900" : "text-white")}>Explore by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((cat, i) => (
                        <Link
                            key={i}
                            href="/app/tools"
                            className={cn(
                                "group relative overflow-hidden rounded-2xl aspect-[4/3] flex flex-col items-center justify-center p-6 border transition-all",
                                isLight
                                    ? "bg-white border-slate-200 shadow-sm hover:border-violet-300 hover:shadow-md"
                                    : "bg-slate-800 border-slate-700 hover:border-slate-600"
                            )}
                        >
                            <div className={cn(
                                "w-12 h-12 rounded-full mb-3 flex items-center justify-center text-white bg-gradient-to-br shadow-lg group-hover:scale-110 transition-transform",
                                cat.color
                            )}>
                                <cat.icon className="w-6 h-6" />
                            </div>
                            <h3 className={cn("font-bold", isLight ? "text-slate-900" : "text-slate-200")}>{cat.name}</h3>
                            <p className="text-xs text-slate-500 mt-1">{cat.count} tools</p>
                        </Link>
                    ))}
                </div>
            </motion.section>
        </div>
    )
}
