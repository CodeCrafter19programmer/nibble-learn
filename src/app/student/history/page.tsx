"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Clock, FileText, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
// Use student theme context if available, otherwise fallback or replicate logic
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { studentHistoryItems } from "@/lib/data/student-history-data"

export default function StudentHistoryPage() {
    const { theme } = useStudentTheme()
    const router = useRouter()
    const isLight = theme === 'light'

    return (
        <div className="space-y-8 max-w-6xl mx-auto p-6">
            <div className={cn("border-b pb-8", isLight ? "border-slate-200" : "border-slate-800")}>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>My Work History</h1>
                <p className={cn("text-lg", isLight ? "text-slate-600 font-medium" : "text-slate-400")}>
                    Pick up where you left off. Access your previous AI outputs.
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
                                <th className="p-4 font-medium text-xs uppercase tracking-wider">Type</th>
                                <th className="p-4 font-medium text-xs uppercase tracking-wider text-right pr-6">Open</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                            {studentHistoryItems.map((item, i) => (
                                <motion.tr
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => router.push(`/app/student/tools/${item.toolId}?historyId=${item.id}`)}
                                    className={cn(
                                        "group transition-colors cursor-pointer",
                                        isLight ? "hover:bg-slate-50" : "hover:bg-white/5"
                                    )}
                                >
                                    <td className="p-4 pl-6">
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                "w-10 h-10 rounded-lg flex items-center justify-center",
                                                isLight ? "bg-blue-50 text-blue-600" : "bg-blue-500/10 text-blue-400"
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
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    router.push(`/app/student/tools/${item.toolId}?historyId=${item.id}`)
                                                }}
                                                className={cn("p-2 rounded-lg transition-colors", isLight ? "hover:bg-slate-200 text-slate-500" : "hover:bg-white/10 text-slate-400")}
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {studentHistoryItems.length === 0 && (
                    <div className={cn("p-8 text-center", isLight ? "text-slate-500" : "text-slate-400")}>
                        No history yet. Try using a tool!
                    </div>
                )}
            </div>
        </div>
    )
}
