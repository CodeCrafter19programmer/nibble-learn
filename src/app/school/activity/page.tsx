"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
    ArrowLeft,
    Search,
    Filter,
    Users,
    BookOpen,
    GraduationCap,
    Settings,
    Download,
    RefreshCw,
    ChevronLeft,
    ChevronRight,
    Circle
} from "lucide-react"
import Link from "next/link"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"

type Role = "Teacher" | "Student" | "System" | "All"

const allActivity = [
    { id: 1, user: "Sarah Johnson", role: "Teacher" as const, action: "Generated a Lesson Plan", tool: "Lesson Plan Generator", time: "2 mins ago", date: "2026-02-23" },
    { id: 2, user: "Mark Davis", role: "Student" as const, action: "Completed 'Algebra Basics' quiz", tool: "Multiple Choice Quiz", time: "15 mins ago", date: "2026-02-23" },
    { id: 3, user: "Admin", role: "System" as const, action: "Added 24 students to Grade 10", tool: "System", time: "1 hour ago", date: "2026-02-23" },
    { id: 4, user: "David Wilson", role: "Teacher" as const, action: "Generated Report Card Comments", tool: "Report Card Comments", time: "1 hour ago", date: "2026-02-23" },
    { id: 5, user: "Jessica Taylor", role: "Student" as const, action: "Completed writing assignment", tool: "Essay Outliner", time: "2 hours ago", date: "2026-02-23" },
    { id: 6, user: "Linda Green", role: "Teacher" as const, action: "Created a Rubric for Science project", tool: "Rubric Generator", time: "3 hours ago", date: "2026-02-23" },
    { id: 7, user: "Kevin Brown", role: "Student" as const, action: "Used AI Tutor for Math help", tool: "AI Tutor", time: "3 hours ago", date: "2026-02-23" },
    { id: 8, user: "Rachel Adams", role: "Teacher" as const, action: "Generated a Presentation on Climate Change", tool: "Presentation Generator", time: "4 hours ago", date: "2026-02-23" },
    { id: 9, user: "Admin", role: "System" as const, action: "System backup completed", tool: "System", time: "4 hours ago", date: "2026-02-23" },
    { id: 10, user: "Emily Carter", role: "Student" as const, action: "Submitted Research Summary", tool: "Research Assistant", time: "5 hours ago", date: "2026-02-23" },
    { id: 11, user: "Tom Harris", role: "Teacher" as const, action: "Generated Accommodation Suggestions", tool: "Accommodation Suggestions", time: "Yesterday", date: "2026-02-22" },
    { id: 12, user: "Anna Scott", role: "Student" as const, action: "Completed Reading Quiz", tool: "Multiple Choice Quiz", time: "Yesterday", date: "2026-02-22" },
    { id: 13, user: "James Martin", role: "Teacher" as const, action: "Created a Unit Plan for English", tool: "Unit Plan Generator", time: "Yesterday", date: "2026-02-22" },
    { id: 14, user: "Sophie Lee", role: "Student" as const, action: "Generated Essay Draft", tool: "Paragraph Generator", time: "Yesterday", date: "2026-02-22" },
    { id: 15, user: "Admin", role: "System" as const, action: "New teacher accounts created (5)", tool: "System", time: "2 days ago", date: "2026-02-21" },
]

const roleColors: Record<string, { dot: string; badge: string }> = {
    Teacher: { dot: "bg-blue-500", badge: "bg-blue-50 text-blue-700 border border-blue-100" },
    Student: { dot: "bg-violet-500", badge: "bg-violet-50 text-violet-700 border border-violet-100" },
    System: { dot: "bg-slate-400", badge: "bg-slate-50 text-slate-600 border border-slate-200" },
}

const ITEMS_PER_PAGE = 10

export default function SchoolActivityPage() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    const [search, setSearch] = useState("")
    const [roleFilter, setRoleFilter] = useState<Role>("All")
    const [page, setPage] = useState(1)

    const filtered = allActivity.filter(item => {
        const matchesSearch =
            item.user.toLowerCase().includes(search.toLowerCase()) ||
            item.action.toLowerCase().includes(search.toLowerCase()) ||
            item.tool.toLowerCase().includes(search.toLowerCase())
        const matchesRole = roleFilter === "All" || item.role === roleFilter
        return matchesSearch && matchesRole
    })

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
    const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

    const stats = {
        total: allActivity.length,
        teachers: allActivity.filter(a => a.role === "Teacher").length,
        students: allActivity.filter(a => a.role === "Student").length,
        system: allActivity.filter(a => a.role === "System").length,
    }

    return (
        <div className="space-y-6 pb-20">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    href="/school/dashboard"
                    className={cn(
                        "p-2 rounded-lg transition-colors border",
                        isLight ? "bg-white border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200" : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                    )}
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className={cn("text-2xl font-bold", isLight ? "text-slate-900" : "text-white")}>All Activity</h1>
                    <p className={cn("text-sm", isLight ? "text-slate-500" : "text-slate-400")}>Full audit log of all platform actions</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <button className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm border transition-colors",
                        isLight ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                    )}>
                        <RefreshCw className="w-4 h-4" />
                        Refresh
                    </button>
                    <button className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm border transition-colors",
                        isLight ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                    )}>
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                    { label: "Total Actions", value: stats.total, icon: Users, color: "text-slate-600", bg: "bg-slate-100" },
                    { label: "By Teachers", value: stats.teachers, icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "By Students", value: stats.students, icon: GraduationCap, color: "text-violet-600", bg: "bg-violet-50" },
                    { label: "System Events", value: stats.system, icon: Settings, color: "text-slate-500", bg: "bg-slate-50" },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={cn(
                            "border rounded-xl p-4 flex items-center gap-4",
                            isLight ? "bg-white border-slate-100 shadow-sm" : "bg-slate-900 border-slate-800"
                        )}
                    >
                        <div className={cn("p-2.5 rounded-lg", stat.bg, stat.color)}>
                            <stat.icon className="w-5 h-5" />
                        </div>
                        <div>
                            <p className={cn("text-2xl font-bold", isLight ? "text-slate-900" : "text-white")}>{stat.value}</p>
                            <p className={cn("text-xs font-medium", isLight ? "text-slate-500" : "text-slate-400")}>{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Filter Bar */}
            <div className={cn(
                "border rounded-xl p-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center",
                isLight ? "bg-white border-slate-100 shadow-sm" : "bg-slate-900 border-slate-800"
            )}>
                {/* Search */}
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by user, action, or tool..."
                        value={search}
                        onChange={e => { setSearch(e.target.value); setPage(1) }}
                        className={cn(
                            "w-full pl-10 pr-4 py-2 rounded-lg text-sm border outline-none transition-all",
                            isLight
                                ? "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                : "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                        )}
                    />
                </div>

                {/* Role Filter */}
                <div className="flex items-center gap-2 shrink-0">
                    <Filter className="w-4 h-4 text-slate-400" />
                    <span className={cn("text-sm font-medium", isLight ? "text-slate-500" : "text-slate-400")}>Filter:</span>
                    {(["All", "Teacher", "Student", "System"] as Role[]).map(r => (
                        <button
                            key={r}
                            onClick={() => { setRoleFilter(r); setPage(1) }}
                            className={cn(
                                "px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all",
                                roleFilter === r
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : isLight
                                        ? "bg-white border-slate-200 text-slate-600 hover:border-blue-300"
                                        : "bg-slate-800 border-slate-700 text-slate-300 hover:border-blue-500"
                            )}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            </div>

            {/* Activity Table */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={cn(
                    "border rounded-xl overflow-hidden",
                    isLight ? "bg-white border-slate-100 shadow-sm" : "bg-slate-900 border-slate-800"
                )}
            >
                {/* Table Header */}
                <div className={cn(
                    "grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold uppercase tracking-wider border-b",
                    isLight ? "bg-slate-50 text-slate-500 border-slate-100" : "bg-slate-800/50 text-slate-500 border-slate-800"
                )}>
                    <div className="col-span-3">User</div>
                    <div className="col-span-2">Role</div>
                    <div className="col-span-4">Action</div>
                    <div className="col-span-2">Tool Used</div>
                    <div className="col-span-1 text-right">When</div>
                </div>

                {/* Rows */}
                {paginated.length === 0 ? (
                    <div className="py-16 text-center">
                        <p className={cn("text-sm", isLight ? "text-slate-400" : "text-slate-500")}>No activity found matching your filters.</p>
                    </div>
                ) : (
                    paginated.map((item, i) => (
                        <div
                            key={item.id}
                            className={cn(
                                "grid grid-cols-12 gap-4 px-6 py-4 items-center transition-colors border-b last:border-0",
                                isLight
                                    ? "border-slate-50 hover:bg-slate-50"
                                    : "border-slate-800 hover:bg-slate-800/40"
                            )}
                        >
                            {/* User */}
                            <div className="col-span-3 flex items-center gap-3">
                                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm", {
                                    "bg-blue-500": item.role === "Teacher",
                                    "bg-violet-500": item.role === "Student",
                                    "bg-slate-400": item.role === "System",
                                })}>
                                    {item.user.charAt(0)}
                                </div>
                                <span className={cn("font-semibold text-sm truncate", isLight ? "text-slate-900" : "text-white")}>
                                    {item.user}
                                </span>
                            </div>

                            {/* Role Badge */}
                            <div className="col-span-2">
                                <span className={cn("px-2.5 py-1 rounded-full text-[11px] font-bold", roleColors[item.role]?.badge)}>
                                    {item.role}
                                </span>
                            </div>

                            {/* Action */}
                            <div className="col-span-4">
                                <p className={cn("text-sm leading-snug", isLight ? "text-slate-700" : "text-slate-300")}>
                                    {item.action}
                                </p>
                            </div>

                            {/* Tool */}
                            <div className="col-span-2">
                                <span className={cn("text-xs font-medium px-2 py-0.5 rounded border", isLight ? "text-slate-500 border-slate-200 bg-slate-50" : "text-slate-400 border-slate-700 bg-slate-800")}>
                                    {item.tool}
                                </span>
                            </div>

                            {/* Time */}
                            <div className="col-span-1 text-right">
                                <span className={cn("text-xs font-medium whitespace-nowrap", isLight ? "text-slate-400" : "text-slate-500")}>
                                    {item.time}
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between">
                    <p className={cn("text-sm", isLight ? "text-slate-500" : "text-slate-400")}>
                        Showing {(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} events
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className={cn(
                                "p-2 rounded-lg border transition-colors disabled:opacity-40",
                                isLight ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                            )}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                            <button
                                key={n}
                                onClick={() => setPage(n)}
                                className={cn(
                                    "w-8 h-8 rounded-lg text-sm font-semibold border transition-colors",
                                    page === n
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : isLight ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-slate-800 border-slate-700 text-slate-300"
                                )}
                            >
                                {n}
                            </button>
                        ))}
                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className={cn(
                                "p-2 rounded-lg border transition-colors disabled:opacity-40",
                                isLight ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                            )}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
