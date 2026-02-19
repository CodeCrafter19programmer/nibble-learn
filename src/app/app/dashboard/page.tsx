"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
    Sparkles,
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

const recentTools = [
    { id: "lesson-plan", name: "Lesson Plan Generator", icon: FileText, color: "bg-blue-500", time: "2 hours ago" },
    { id: "unit-plan", name: "Unit Plan Generator", icon: CheckCircle, color: "bg-purple-500", time: "Yesterday" },
    { id: "text-leveler", name: "Text Leveler", icon: Zap, color: "bg-rose-500", time: "2 days ago" },
    { id: "presentation-generator", name: "Presentation Generator", icon: Presentation, color: "bg-orange-500", time: "3 days ago" },
]

const popularTools = [
    { id: "lesson-plan", name: "Lesson Plan Generator", icon: FileText, color: "bg-blue-500", desc: "Generate 5E, Madeline Hunter, or custom lesson plans." },
    { id: "5e-model-science", name: "5E Model Science Lesson", icon: Zap, color: "bg-emerald-500", desc: "Design a science lesson using the 5E instructional model." },
    { id: "accommodation-suggestions", name: "Accommodation Suggestions", icon: Users, color: "bg-teal-500", desc: "Get ideas for accommodating students with diverse needs." },
    { id: "vocabulary-scaffolder", name: "Vocabulary Scaffolder", icon: Globe, color: "bg-fuchsia-500", desc: "Create tiered vocabulary lists with student-friendly definitions." },
    { id: "lesson-hook", name: "Lesson Hook Generator", icon: Sparkles, color: "bg-yellow-500", desc: "Create an engaging hook to start your lesson and grab student attention." },
    { id: "standards-unpacker", name: "Standards Unpacker", icon: FileText, color: "bg-indigo-500", desc: "Break down standards into student-friendly language." },
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
    const [firstName, setFirstName] = useState("Jane")

    useEffect(() => {
        const saved = localStorage.getItem("userProfile")
        if (saved) {
            try {
                const profile = JSON.parse(saved)
                if (profile.firstName) {
                    setFirstName(profile.firstName)
                }
            } catch (e) { }
        }
    }, [])

    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
            >
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900 dark:text-white">
                        {greeting}, {firstName}! <span className="inline-block animate-bounce">👋</span>
                    </h1>
                    <p className="text-lg text-slate-600 font-medium dark:text-slate-400">
                        What would you like to create for your students today?
                    </p>
                </div>

                <div className="flex gap-3">
                    <div className="rounded-2xl p-4 flex items-center gap-3 border transition-colors bg-white border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none">
                        <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">Hours Saved</p>
                            <p className="text-xl font-bold text-slate-900 dark:text-white">12.5 hrs</p>
                        </div>
                    </div>
                    <div className="rounded-2xl p-4 flex items-center gap-3 border transition-colors bg-white border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <Zap className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">Generations</p>
                            <p className="text-xl font-bold text-slate-900 dark:text-white">48</p>
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
                    <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                        <Clock className="w-5 h-5 text-slate-500" />
                        Jump Back In
                    </h2>
                    <Link href="/app/history" className="text-sm transition-colors text-violet-600 hover:text-violet-800 font-medium dark:text-violet-400 dark:hover:text-white">
                        View History
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {recentTools.map((tool) => (
                        <Link
                            key={tool.id}
                            href={`/app/tool/${tool.id}`}
                            className="group p-4 rounded-xl border transition-all duration-200 block bg-white border-slate-200 hover:border-violet-300 hover:shadow-md dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-white/20 dark:shadow-none"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg", tool.color)}>
                                    <tool.icon className="w-5 h-5" />
                                </div>
                                <span className="text-xs text-slate-500 dark:text-slate-400">{tool.time}</span>
                            </div>
                            <h3 className="font-semibold transition-colors truncate text-slate-900 group-hover:text-violet-700 dark:text-white dark:group-hover:text-white">{tool.name}</h3>
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
                    <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                        <TrendingUp className="w-5 h-5 text-amber-500" />
                        Popular This Week
                    </h2>
                    <Link href="/app/tools" className="flex items-center gap-1 text-sm transition-colors text-slate-600 hover:text-black font-medium dark:text-slate-400 dark:hover:text-white">
                        View all 80+ tools <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {popularTools.map((tool) => (
                        <Link
                            key={tool.id}
                            href={`/app/tool/${tool.id}`}
                            className="group relative p-5 rounded-2xl border transition-all hover:-translate-y-1 block bg-white border-slate-200 shadow-sm hover:border-violet-300 hover:shadow-lg dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-white/20 dark:shadow-none"
                        >
                            <div className="flex items-start gap-4">
                                <div className={cn("w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110", tool.color)}>
                                    <tool.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold transition-colors mb-1 text-slate-900 group-hover:text-violet-700 dark:text-white dark:group-hover:text-violet-300">
                                        {tool.name}
                                    </h3>
                                    <p className="text-sm line-clamp-2 leading-relaxed text-slate-600 font-medium dark:text-slate-400">
                                        {tool.desc}
                                    </p>
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none transition-all group-hover:border-violet-500/10" />
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
                <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Explore by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((cat, i) => (
                        <Link
                            key={i}
                            href="/app/tools"
                            className="group relative overflow-hidden rounded-2xl aspect-[4/3] flex flex-col items-center justify-center p-6 border transition-all bg-white border-slate-200 shadow-sm hover:border-violet-300 hover:shadow-md dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-white/20 dark:shadow-none"
                        >
                            <div className={cn(
                                "w-12 h-12 rounded-full mb-3 flex items-center justify-center text-white bg-gradient-to-br shadow-lg group-hover:scale-110 transition-transform",
                                cat.color
                            )}>
                                <cat.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold transition-colors text-slate-900 group-hover:text-violet-700 dark:text-white dark:group-hover:text-violet-300">{cat.name}</h3>
                            <p className="text-xs mt-1 text-slate-500 dark:text-slate-400">{cat.count} tools</p>
                        </Link>
                    ))}
                </div>
            </motion.section>
        </div>
    )
}
