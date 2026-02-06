"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Users,
    GraduationCap,
    BookOpen,
    Zap,
    TrendingUp,
    ArrowUpRight,
    MoreHorizontal,
    Activity
} from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"

const metrics = [
    { label: "Total Students", value: "3,420", trend: "+12%", trendUp: true, icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Total Teachers", value: "148", trend: "+4%", trendUp: true, icon: BookOpen, color: "text-indigo-600", bg: "bg-indigo-100" },
    { label: "AI Usage Limit", value: "78%", subLabel: "45k / 60k Tokens", trend: "Warning", trendUp: false, icon: Zap, color: "text-amber-600", bg: "bg-amber-100" },
    { label: "Active Users", value: "2,840", trend: "82% Active", trendUp: true, icon: Activity, color: "text-emerald-600", bg: "bg-emerald-100" },
]

const recentActivity = [
    { user: "Sarah Johnson", role: "Teacher", action: "generated a Lesson Plan", time: "2 mins ago" },
    { user: "Mark Davis", role: "Student", action: "took 'Algebra Basics' quiz", time: "15 mins ago" },
    { user: "Admin", role: "System", action: "added 24 students to Grade 10", time: "1 hour ago" },
    { user: "David Wilson", role: "Teacher", action: "logged in", time: "1 hour ago" },
    { user: "Jessica Taylor", role: "Student", action: "completed assignment", time: "2 hours ago" },
]

export default function SchoolDashboard() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className={cn("text-2xl font-bold mb-1", isLight ? "text-slate-900" : "text-white")}>School Overview</h1>
                <p className={cn("text-sm", isLight ? "text-slate-600 font-medium" : "text-slate-400")}>
                    Welcome back, Administrator. Current Plan: <span className="text-blue-600 font-bold">Standard School Pkg</span>
                </p>
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
                            "border p-6 rounded-xl transition-all shadow-sm",
                            isLight
                                ? "bg-white border-slate-100 shadow-slate-200/50 hover:shadow-md hover:border-blue-100"
                                : "bg-slate-900 border-slate-800 hover:border-slate-700"
                        )}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn("p-3 rounded-xl", metric.bg, metric.color)}>
                                <metric.icon className="w-6 h-6" />
                            </div>
                            <span className={cn(
                                "text-xs font-bold px-2.5 py-1 rounded-full",
                                isLight ? "bg-slate-50 border border-slate-100" : "bg-slate-800",
                                metric.trend === "Warning" ? "text-amber-600 bg-amber-50" : "text-green-600 bg-green-50"
                            )}>
                                {metric.trend}
                            </span>
                        </div>
                        <h3 className={cn("text-3xl font-bold mb-1 tracking-tight", isLight ? "text-slate-900" : "text-white")}>{metric.value}</h3>
                        <p className={cn("text-sm font-medium", isLight ? "text-slate-500" : "text-slate-500")}>
                            {metric.label}
                            {metric.subLabel && <span className="block text-xs font-normal opacity-80 mt-1">{metric.subLabel}</span>}
                        </p>
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
                        "md:col-span-2 border rounded-xl p-6 relative overflow-hidden",
                        isLight ? "bg-white border-slate-100 shadow-sm" : "bg-slate-900 border-slate-800"
                    )}
                >
                    <div className="flex justify-between items-center mb-8 relative z-10">
                        <div>
                            <h3 className={cn("font-bold text-lg", isLight ? "text-slate-900" : "text-white")}>Platform Usage Trends</h3>
                            <p className={cn("text-xs font-medium", isLight ? "text-slate-500" : "text-slate-400")}>Student vs Teacher activity over time</p>
                        </div>
                        <select className={cn(
                            "text-xs font-medium p-1.5 rounded-lg border outline-none",
                            isLight
                                ? "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                                : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                        )}>
                            <option>Last 30 Days</option>
                            <option>Last 7 Days</option>
                            <option>Last 90 Days</option>
                        </select>
                    </div>

                    <div className="h-48 flex items-end justify-between gap-2 relative z-10 pl-2">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between -z-10 text-[10px] text-slate-400 font-medium">
                            <div className="w-full border-b border-dashed border-slate-200 dark:border-slate-800" />
                            <div className="w-full border-b border-dashed border-slate-200 dark:border-slate-800" />
                            <div className="w-full border-b border-dashed border-slate-200 dark:border-slate-800" />
                            <div className="w-full border-b border-dashed border-slate-200 dark:border-slate-800" />
                        </div>

                        {[
                            { d: "Mon", s: 65, t: 30 },
                            { d: "Tue", s: 80, t: 45 },
                            { d: "Wed", s: 95, t: 60 },
                            { d: "Thu", s: 50, t: 25 },
                            { d: "Fri", s: 85, t: 50 },
                            { d: "Sat", s: 30, t: 15 },
                            { d: "Sun", s: 20, t: 10 },
                            { d: "Mon", s: 75, t: 40 },
                            { d: "Tue", s: 90, t: 65 },
                            { d: "Wed", s: 88, t: 55 },
                            { d: "Thu", s: 60, t: 35 },
                            { d: "Fri", s: 92, t: 70 },
                            { d: "Sat", s: 40, t: 20 },
                            { d: "Sun", s: 25, t: 12 }
                        ].map((day, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end gap-1 h-full group relative">
                                {/* Tooltip */}
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                                    <div className="font-bold">{day.d}</div>
                                    <div>Students: {day.s}%</div>
                                    <div>Teachers: {day.t}%</div>
                                </div>

                                {/* Bars */}
                                <div
                                    className="w-full bg-blue-500/80 rounded-t-sm hover:bg-blue-500 transition-colors cursor-pointer"
                                    style={{ height: `${day.s * 0.7}%` }}
                                />
                                <div
                                    className="w-full bg-indigo-400/50 rounded-t-sm hover:bg-indigo-400 transition-colors cursor-pointer"
                                    style={{ height: `${day.t * 0.5}%` }}
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Live Activity Feed */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={cn(
                        "border rounded-xl p-6 relative overflow-hidden",
                        isLight ? "bg-white border-slate-100 shadow-sm" : "bg-slate-900 border-slate-800"
                    )}
                >
                    <div className="flex justify-between items-center mb-6 relative z-10">
                        <h3 className={cn("font-bold text-lg", isLight ? "text-slate-900" : "text-white")}>Recent Activity</h3>
                        <button className={cn("transition-colors p-1 rounded-md", isLight ? "text-slate-400 hover:bg-slate-50 hover:text-black" : "text-slate-500 hover:text-white")}>
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-6 relative z-10">
                        {recentActivity.map((item, i) => (
                            <div key={i} className="flex gap-4 relative pb-2 group">
                                <div className={cn(
                                    "w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 z-10 shadow-sm",
                                    isLight ? "bg-white border-slate-100" : "bg-slate-800 border-slate-700"
                                )}>
                                    <div className={cn("w-2.5 h-2.5 rounded-full", i === 0 ? "bg-blue-500 animate-pulse" : "bg-slate-300 dark:bg-slate-600")} />
                                </div>
                                <div className="flex-1">
                                    <p className={cn("text-sm leading-snug", isLight ? "text-slate-600" : "text-slate-300")}>
                                        <span className={cn("font-semibold block", isLight ? "text-slate-900" : "text-white")}>{item.user} <span className="text-xs font-normal text-slate-400 ml-1">({item.role})</span></span>
                                        {item.action}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1 font-medium">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button className={cn(
                            "w-full py-2.5 text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 group",
                            isLight
                                ? "text-blue-600 hover:bg-blue-50"
                                : "text-blue-400 hover:bg-blue-500/10"
                        )}>
                            View All Activity
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

