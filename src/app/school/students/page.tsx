"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
    Search,
    Plus,
    Upload,
    Download,
    MoreHorizontal,
    Filter,
    Trash2,
    RefreshCw,
    Edit2
} from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"

// Mock Data
const students = [
    { id: 1, name: "Alice Freeman", code: "ST-2024-001", grade: "10th", status: "Active", lastLogin: "2 hours ago" },
    { id: 2, name: "Bob Smith", code: "ST-2024-002", grade: "10th", status: "Active", lastLogin: "1 day ago" },
    { id: 3, name: "Charlie Brown", code: "ST-2024-003", grade: "11th", status: "Inactive", lastLogin: "Never" },
    { id: 4, name: "Diana Prince", code: "ST-2024-004", grade: "12th", status: "Active", lastLogin: "5 mins ago" },
    { id: 5, name: "Evan Wright", code: "ST-2024-005", grade: "9th", status: "Active", lastLogin: "3 days ago" },
    { id: 6, name: "Fiona Gallagher", code: "ST-2024-006", grade: "11th", status: "Suspended", lastLogin: "1 week ago" },
]

export default function StudentManagement() {
    const { theme } = useTheme()
    const isLight = theme === 'light'
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className={cn("text-2xl font-bold", isLight ? "text-slate-900" : "text-white")}>Student Management</h1>
                    <p className={cn("text-sm", isLight ? "text-slate-500" : "text-slate-400")}>Manage student accounts, codes, and access.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors border",
                        isLight
                            ? "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                            : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                    )}>
                        <Upload className="w-4 h-4" />
                        Bulk Import
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20">
                        <Plus className="w-4 h-4" />
                        Add Student
                    </button>
                </div>
            </div>

            {/* Filters & Search */}
            <div className={cn(
                "p-4 rounded-xl border flex flex-col sm:flex-row gap-4 justify-between items-center",
                isLight ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900 border-slate-800"
            )}>
                <div className="relative w-full sm:w-96">
                    <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4", isLight ? "text-slate-400" : "text-slate-500")} />
                    <input
                        type="text"
                        placeholder="Search by name or code..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={cn(
                            "w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none border transition-all",
                            isLight
                                ? "bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                : "bg-slate-950 border-slate-800 focus:border-blue-500 text-slate-200"
                        )}
                    />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm border font-medium",
                        isLight ? "border-slate-200 text-slate-600 hover:bg-slate-50" : "border-slate-800 text-slate-400 hover:bg-slate-800"
                    )}>
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <button className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm border font-medium",
                        isLight ? "border-slate-200 text-slate-600 hover:bg-slate-50" : "border-slate-800 text-slate-400 hover:bg-slate-800"
                    )}>
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className={cn(
                "border rounded-xl overflow-hidden",
                isLight ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900 border-slate-800"
            )}>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className={cn(
                            "text-xs uppercase font-semibold",
                            isLight ? "bg-slate-50 text-slate-600 border-b border-slate-200" : "bg-slate-950 text-slate-400 border-b border-slate-800"
                        )}>
                            <tr>
                                <th className="px-6 py-4">Student Name</th>
                                <th className="px-6 py-4">Access Code</th>
                                <th className="px-6 py-4">Grade</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Last Login</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {students.map((student) => (
                                <tr key={student.id} className={cn(
                                    "transition-colors",
                                    isLight ? "hover:bg-slate-50" : "hover:bg-slate-800/50"
                                )}>
                                    <td className="px-6 py-4 font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center text-xs text-white font-bold">
                                                {student.name.charAt(0)}
                                            </div>
                                            <span className={isLight ? "text-slate-900" : "text-white"}>{student.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-xs text-slate-500">{student.code}</td>
                                    <td className="px-6 py-4 text-slate-500">{student.grade}</td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "px-2 py-1 rounded-full text-xs font-semibold",
                                            student.status === "Active" && (isLight ? "bg-green-100 text-green-700" : "bg-green-900/30 text-green-400"),
                                            student.status === "Inactive" && (isLight ? "bg-slate-100 text-slate-600" : "bg-slate-800 text-slate-400"),
                                            student.status === "Suspended" && (isLight ? "bg-red-100 text-red-700" : "bg-red-900/30 text-red-400"),
                                        )}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500">{student.lastLogin}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className={cn("p-1.5 rounded-md transition-colors", isLight ? "text-slate-400 hover:text-blue-600 hover:bg-blue-50" : "text-slate-500 hover:text-blue-400 hover:bg-slate-800")} title="Edit">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className={cn("p-1.5 rounded-md transition-colors", isLight ? "text-slate-400 hover:text-amber-600 hover:bg-amber-50" : "text-slate-500 hover:text-amber-400 hover:bg-slate-800")} title="Reset Code">
                                                <RefreshCw className="w-4 h-4" />
                                            </button>
                                            <button className={cn("p-1.5 rounded-md transition-colors", isLight ? "text-slate-400 hover:text-red-600 hover:bg-red-50" : "text-slate-500 hover:text-red-400 hover:bg-slate-800")} title="Delete">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination (Mock) */}
                <div className={cn(
                    "px-6 py-4 border-t flex items-center justify-between",
                    isLight ? "border-slate-200 bg-slate-50" : "border-slate-800 bg-slate-950"
                )}>
                    <p className={cn("text-xs", isLight ? "text-slate-500" : "text-slate-400")}>Showing 1-6 of 240 students</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs font-medium rounded border disabled:opacity-50">Previous</button>
                        <button className="px-3 py-1 text-xs font-medium rounded border bg-white text-black">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
