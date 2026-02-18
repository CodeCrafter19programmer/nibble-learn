"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, FileText, CheckCircle, Zap, ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/providers/ThemeContext"

const historyItems = [
    { id: 1, tool: "Lesson Plan Generator", title: "Photosynthesis Grade 5", date: "2 hours ago", type: "Planning" },
    { id: 2, tool: "Math Story Problem", title: "Fractions & Pizza", date: "5 hours ago", type: "Math" },
    { id: 3, tool: "Rubric Generator", title: "History Essay Rubric", date: "Yesterday", type: "Assessment" },
    { id: 4, tool: "Writing Feedback", title: "Sarah's Essay Review", date: "Yesterday", type: "Feedback" },
    { id: 5, tool: "5E Model Science Lesson", title: "Water Cycle Unit", date: "2 days ago", type: "Science" },
    { id: 6, tool: "Email Writer", title: "Parent Conference Request", date: "3 days ago", type: "Communication" },
    { id: 7, tool: "Quiz Generator", title: "Geography Capes Quiz", date: "Last Week", type: "Assessment" },
    { id: 8, tool: "Class Syllabus", title: "Fall 2024 Geometry", date: "Last Week", type: "Planning" },
]

export default function HistoryPage() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <div className="space-y-8">
            <div className={cn("border-b pb-8", isLight ? "border-slate-200" : "border-slate-800")}>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Output History</h1>
                <p className={cn("text-lg", isLight ? "text-slate-600 font-medium" : "text-slate-400")}>
                    Access and manage your previously generated content.
                </p>
            </div>

            <div className={cn("rounded-2xl border overflow-hidden", isLight ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900 border-slate-800")}>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className={cn("border-b", isLight ? "bg-slate-50 border-slate-100 text-slate-500" : "bg-white/5 border-white/5 text-slate-400")}>
                            <tr>
                                <th className="p-4 font-medium text-xs uppercase tracking-wider pl-6">Title</th>
                                <th className="p-4 font-medium text-xs uppercase tracking-wider">Tool Used</th>
                                <th className="p-4 font-medium text-xs uppercase tracking-wider">Date</th>
                                <th className="p-4 font-medium text-xs uppercase tracking-wider">Category</th>
                                <th className="p-4 font-medium text-xs uppercase tracking-wider text-right pr-6">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                            {historyItems.map((item, i) => (
                                <motion.tr
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={cn(
                                        "group transition-colors cursor-pointer",
                                        isLight ? "hover:bg-slate-50" : "hover:bg-white/5"
                                    )}
                                >
                                    <td className="p-4 pl-6">
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                "w-10 h-10 rounded-lg flex items-center justify-center",
                                                isLight ? "bg-violet-50 text-violet-600" : "bg-violet-500/10 text-violet-400"
                                            )}>
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <span className={cn("font-medium", isLight ? "text-slate-900" : "text-white")}>{item.title}</span>
                                        </div>
                                    </td>
                                    <td className={cn("p-4 text-sm", isLight ? "text-slate-600" : "text-slate-400")}>
                                        {item.tool}
                                    </td>
                                    <td className={cn("p-4 text-sm whitespace-nowrap", isLight ? "text-slate-500" : "text-slate-400")}>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3.5 h-3.5" />
                                            {item.date}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={cn(
                                            "inline-flex px-2.5 py-1 rounded-full text-xs font-medium border",
                                            isLight
                                                ? "bg-slate-100 text-slate-600 border-slate-200"
                                                : "bg-white/5 text-slate-300 border-white/10"
                                        )}>
                                            {item.type}
                                        </span>
                                    </td>
                                    <td className="p-4 pr-6 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className={cn("p-2 rounded-lg transition-colors", isLight ? "hover:bg-slate-200 text-slate-500" : "hover:bg-white/10 text-slate-400")}>
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={cn("p-4 border-t text-center", isLight ? "bg-slate-50 border-slate-100" : "bg-white/5 border-white/5")}>
                    <button className={cn("text-sm font-medium hover:underline", isLight ? "text-violet-600" : "text-violet-400")}>
                        Load more history
                    </button>
                </div>
            </div>
        </div>
    )
}
