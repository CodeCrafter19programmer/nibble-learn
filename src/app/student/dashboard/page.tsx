"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
    Sparkles,
    ArrowRight,
    BookOpen,
    Calculator,
    PenTool,
    Clock,
    MoreHorizontal
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useStudentProfile } from "@/components/student/StudentProfileContext"
import { studentHistoryItems } from "@/lib/data/student-history-data"

const recommendedTools = [
    {
        id: "1",
        name: "Essay Outliner",
        icon: PenTool,
        color: "bg-pink-500",
        desc: "Help with structure and ideas"
    },
    {
        id: "2",
        name: "Paragraph Generator",
        icon: Calculator,
        color: "bg-blue-500",
        desc: "Step-by-step paragraphs"
    },
    {
        id: "3",
        name: "Research Assistant",
        icon: BookOpen,
        color: "bg-emerald-500",
        desc: "Find and summarize facts"
    },
]

export default function StudentDashboard() {
    const { profile } = useStudentProfile()
    const time = new Date().getHours()
    const greeting = time < 12 ? "Good morning" : time < 18 ? "Good afternoon" : "Good evening"

    return (
        <div className="space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
            >
                <div>
                    <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
                        {greeting}, {profile.firstName}! <span className="inline-block animate-bounce">👋</span>
                    </h1>
                    <p className="text-lg text-slate-700 font-medium dark:text-slate-400">
                        Ready to learn something new today?
                    </p>
                </div>

                <div className="px-4 py-2 rounded-full border text-sm font-medium flex items-center gap-2 bg-teal-50 border-teal-200 text-teal-800 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-300">
                    <Sparkles className="w-4 h-4" />
                    <span>You've completed 3 tasks this week!</span>
                </div>
            </motion.div>

            {/* Active Room Card - Keeping Colorful High Contrast */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="border rounded-3xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 border-indigo-200 shadow-xl shadow-indigo-200/50 dark:shadow-none dark:from-blue-900/40 dark:to-indigo-900/40 dark:border-blue-700/30"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-indigo-100 text-xs font-bold uppercase tracking-wider">
                                Current Class
                            </span>
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Ms. Johnson's Science Room</h2>
                        <p className="text-indigo-100 max-w-xl font-medium">
                            Today's focus: Understanding the solar system and planetary orbits. Use the Essay Assistant to draft your report.
                        </p>
                    </div>
                    <button className="px-6 py-3 bg-white text-indigo-900 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-indigo-500/20 active:scale-95 whitespace-nowrap dark:shadow-none">
                        Enter Room →
                    </button>
                </div>
            </motion.section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recommended Tools */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 space-y-6"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-black dark:text-white">Recommended Tools</h2>
                        <Link href="/student/tools" className="text-sm transition-colors text-blue-600 hover:text-blue-800 font-medium dark:text-blue-400 dark:hover:text-blue-300">
                            View all
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {recommendedTools.map((tool, i) => (
                            <Link
                                key={i}
                                href={`/student/tools/${tool.id}`}
                                className="group p-5 border rounded-2xl transition-all duration-300 hover:-translate-y-1 block bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 dark:bg-slate-900/50 dark:border-slate-800 dark:hover:bg-slate-800/80 dark:hover:border-blue-500/50 dark:shadow-none"
                            >
                                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", tool.color)}>
                                    <tool.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">{tool.name}</h3>
                                <p className="text-sm leading-snug text-slate-600 dark:text-slate-400">{tool.desc}</p>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Recent Work */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                >
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="text-xl font-bold text-black dark:text-white">Your Recent Work</h2>
                        <Link href="/student/history" className="p-2 rounded-lg transition-colors text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-blue-300 dark:hover:bg-slate-800/50">
                            <MoreHorizontal className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="border rounded-2xl overflow-hidden backdrop-blur-md bg-white border-slate-200 shadow-sm dark:bg-slate-900/50 dark:border-slate-800">
                        {studentHistoryItems.slice(0, 3).map((work, i) => (
                            <Link
                                href={`/student/tools/${work.toolId}?historyId=${work.id}`}
                                key={work.id}
                                className="block p-4 border-b last:border-0 transition-colors group cursor-pointer border-slate-100 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                            >
                                <div className="flex items-start justify-between mb-1">
                                    <h4 className="font-bold transition-colors text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">{work.title}</h4>
                                    <ArrowRight className="w-4 h-4 transition-all group-hover:translate-x-1 text-slate-400 group-hover:text-blue-600 dark:text-white/30 dark:group-hover:text-white" />
                                </div>
                                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                                    <span className="flex items-center gap-1 font-medium">
                                        <Sparkles className="w-3 h-3" /> {work.toolName}
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {work.date}
                                    </span>
                                </div>
                            </Link>
                        ))}
                        <Link
                            href="/student/history"
                            className="block p-4 text-center text-sm font-medium transition-colors text-blue-600 hover:text-blue-800 hover:bg-slate-50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-slate-800/50"
                        >
                            View all history
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
