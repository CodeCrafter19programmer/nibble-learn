"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Users,
    FileText,
    Clock,
    TrendingUp,
    ArrowUpRight,
    MoreHorizontal
} from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"

const metrics = [
    { label: "Active Teachers", value: "1,247", trend: "+12%", trendUp: true, icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Total Outputs", value: "15,234", trend: "+8%", trendUp: true, icon: FileText, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { label: "Hours Saved", value: "3,450", trend: "Est.", trendUp: true, icon: Clock, color: "text-purple-400", bg: "bg-purple-500/10" },
    { label: "Adoption Rate", value: "78%", trend: "+2%", trendUp: true, icon: TrendingUp, color: "text-amber-400", bg: "bg-amber-500/10" },
]

const recentActivity = [
    { user: "Sarah Johnson", action: "generated a Lesson Plan", time: "2 mins ago" },
    { user: "Mark Davis", action: "exported 3 Rubrics", time: "15 mins ago" },
    { user: "Emily Chen", action: "added 24 students to Room 101", time: "1 hour ago" },
    { user: "David Wilson", action: "logged in", time: "1 hour ago" },
    { user: "Jessica Taylor", action: "created a new Collection", time: "2 hours ago" },
]

export default function SchoolDashboard() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className={cn("text-2xl font-bold mb-1", isLight ? "text-slate-900" : "text-white")}>School Overview</h1>
                <p className={cn("text-sm", isLight ? "text-slate-600 font-medium" : "text-slate-400")}>Welcome back, Administrator. Here's what's happening today.</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={cn(
                            "border p-5 rounded-xl transition-colors",
                            isLight
                                ? "bg-white border-slate-200 shadow-sm hover:border-indigo-200"
                                : "bg-slate-900 border-slate-800 hover:border-slate-700"
                        )}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn("p-2 rounded-lg", metric.bg, metric.color)}>
                                <metric.icon className="w-5 h-5" />
                            </div>
                            <span className={cn("text-xs font-medium px-2 py-1 rounded", isLight ? "bg-slate-100" : "bg-slate-800", metric.trendUp ? "text-green-500" : "text-red-500")}>
                                {metric.trend}
                            </span>
                        </div>
                        <h3 className={cn("text-3xl font-bold mb-1", isLight ? "text-slate-900" : "text-white")}>{metric.value}</h3>
                        <p className={cn("text-sm font-medium", isLight ? "text-slate-600" : "text-slate-500")}>{metric.label}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={cn(
                        "lg:col-span-2 border rounded-xl p-6",
                        isLight ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900 border-slate-800"
                    )}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className={cn("font-bold", isLight ? "text-slate-900" : "text-white")}>Platform Usage Trends</h3>
                        <select className={cn(
                            "text-sm rounded-lg px-2 py-1 focus:ring-1 focus:ring-indigo-500 outline-none border",
                            isLight
                                ? "bg-slate-50 border-slate-200 text-black"
                                : "bg-slate-800 border-slate-700 text-slate-300"
                        )}>
                            <option>Last 30 Days</option>
                            <option>Last 7 Days</option>
                            <option>Year to Date</option>
                        </select>
                    </div>

                    {/* Mock Chart Visual */}
                    <div className="h-64 w-full flex items-end justify-between gap-2 px-2">
                        {[40, 65, 45, 70, 55, 80, 60, 90, 75, 85, 95, 100].map((h, i) => (
                            <div key={i} className={cn("w-full rounded-t-sm relative group", isLight ? "bg-slate-100" : "bg-slate-800")}>
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-colors rounded-t-sm"
                                    style={{ height: `${h}%` }}
                                />
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-600 to-violet-500 opacity-60 rounded-t-sm"
                                    style={{ height: `${h * 0.6}%` }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-slate-500 uppercase font-medium">
                        <span>Week 1</span>
                        <span>Week 2</span>
                        <span>Week 3</span>
                        <span>Week 4</span>
                    </div>
                </motion.div>

                {/* Live Activity Feed */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={cn(
                        "border rounded-xl p-6",
                        isLight ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900 border-slate-800"
                    )}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className={cn("font-bold", isLight ? "text-slate-900" : "text-white")}>Recent Activity</h3>
                        <button className={cn("transition-colors", isLight ? "text-slate-400 hover:text-black" : "text-slate-500 hover:text-white")}>
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {recentActivity.map((item, i) => (
                            <div key={i} className="flex gap-3 relative pb-6 last:pb-0">
                                {/* Timeline Line */}
                                {i !== recentActivity.length - 1 && (
                                    <div className={cn("absolute top-8 left-2.5 bottom-0 w-px", isLight ? "bg-slate-200" : "bg-slate-800")} />
                                )}

                                <div className={cn(
                                    "w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 z-10 mt-0.5",
                                    isLight ? "bg-white border-slate-200" : "bg-slate-800 border-slate-700"
                                )}>
                                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                </div>
                                <div>
                                    <p className={cn("text-sm", isLight ? "text-slate-600" : "text-slate-300")}>
                                        <span className={cn("font-semibold cursor-pointer transition-colors", isLight ? "text-slate-900 hover:text-indigo-600" : "text-white hover:text-indigo-400")}>{item.user}</span> {item.action}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className={cn(
                        "w-full mt-6 py-2 text-sm rounded-lg transition-colors border",
                        isLight
                            ? "text-slate-600 hover:text-black hover:bg-slate-50 border-transparent hover:border-slate-200"
                            : "text-slate-400 hover:text-white hover:bg-slate-800 border-transparent hover:border-slate-700"
                    )}>
                        View All Activity
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
