"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
    Search,
    Plus,
    Upload,
    Download,
    Filter,
    Trash2,
    RefreshCw,
    Edit2,
    Edit2,
    Mail,
    Send,
    UserPlus
} from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"

// Mock Data
const teachers = [
    { id: 1, name: "Sarah Johnson", email: "sarah.j@school.edu", subject: "Mathematics", status: "Active", students: 120, lastLogin: "1 hour ago" },
    { id: 2, name: "David Wilson", email: "david.w@school.edu", subject: "History", status: "Active", students: 95, lastLogin: "3 hours ago" },
    { id: 3, name: "Emily Chen", email: "emily.c@school.edu", subject: "Science", status: "Active", students: 110, lastLogin: "Yesterday" },
    { id: 4, name: "Michael Brown", email: "m.brown@school.edu", subject: "English", status: "Inactive", students: 0, lastLogin: "1 week ago" },
    { id: 5, name: "Jessica Taylor", email: "j.taylor@school.edu", subject: "Art", status: "Active", students: 85, lastLogin: "2 days ago" },
]

export default function TeacherManagement() {
    const { theme } = useTheme()
    const isLight = theme === 'light'
    const [teachersData, setTeachersData] = useState(teachers)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [filterStatus, setFilterStatus] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")

    const [inviteForm, setInviteForm] = useState({
        name: "",
        email: "",
        role: "",
        department: ""
    })

    const filteredTeachers = teachersData.filter(teacher => {
        const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.email.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesFilter = filterStatus === "All" || teacher.status === filterStatus
        return matchesSearch && matchesFilter
    })

    const handleInvite = () => {
        // Simulate sending email
        console.log(`Sending invite to ${inviteForm.email}...`)

        setTimeout(() => {
            const id = teachersData.length + 1
            const newTeacher = {
                id,
                name: inviteForm.name,
                email: inviteForm.email,
                subject: inviteForm.department, // Mapping department to subject for now as per table structure
                status: "Active", // Or "Invited"
                students: 0,
                lastLogin: "Never"
            }
            setTeachersData([...teachersData, newTeacher])
            setInviteForm({ name: "", email: "", role: "", department: "" })
            setIsInviteModalOpen(false)
            // Ideally show a toast here
            alert(`Invite sent to ${inviteForm.name}!`)
        }, 1000)
    }



    const handleExport = () => {
        const headers = ["Name", "Email", "Subject", "Status", "Last Login"]
        const csvContent = [
            headers.join(","),
            ...filteredTeachers.map(t => `${t.name},${t.email},${t.subject},${t.status},${t.lastLogin}`)
        ].join("\n")

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
        const link = document.createElement("a")
        link.href = URL.createObjectURL(blob)
        link.download = "teachers_export.csv"
        link.click()
    }

    return (
        <div className="space-y-6 relative">
            {/* Invite Teacher Modal */}
            {isInviteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className={cn("w-full max-w-md rounded-xl p-6 shadow-2xl", isLight ? "bg-white" : "bg-slate-900 border border-slate-800")}>
                        <h2 className={cn("text-lg font-bold mb-4", isLight ? "text-slate-900" : "text-white")}>Invite New Teacher</h2>
                        <p className={cn("text-sm mb-6", isLight ? "text-slate-500" : "text-slate-400")}>
                            Enter the teacher's details below. An invitation email will be sent to them to join the school.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <label className={cn("text-xs font-bold uppercase tracking-wider mb-1 block", isLight ? "text-slate-500" : "text-slate-400")}>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Jane Doe"
                                    className={cn("w-full p-2.5 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500/20 transition-all", isLight ? "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-800" : "bg-slate-800 border-slate-700 focus:border-blue-500 text-white")}
                                    value={inviteForm.name}
                                    onChange={e => setInviteForm({ ...inviteForm, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className={cn("text-xs font-bold uppercase tracking-wider mb-1 block", isLight ? "text-slate-500" : "text-slate-400")}>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="e.g. jane@school.edu"
                                    className={cn("w-full p-2.5 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500/20 transition-all", isLight ? "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-800" : "bg-slate-800 border-slate-700 focus:border-blue-500 text-white")}
                                    value={inviteForm.email}
                                    onChange={e => setInviteForm({ ...inviteForm, email: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={cn("text-xs font-bold uppercase tracking-wider mb-1 block", isLight ? "text-slate-500" : "text-slate-400")}>Role / Title</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Math Teacher"
                                        className={cn("w-full p-2.5 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500/20 transition-all", isLight ? "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-800" : "bg-slate-800 border-slate-700 focus:border-blue-500 text-white")}
                                        value={inviteForm.role}
                                        onChange={e => setInviteForm({ ...inviteForm, role: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className={cn("text-xs font-bold uppercase tracking-wider mb-1 block", isLight ? "text-slate-500" : "text-slate-400")}>Department</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Mathematics"
                                        className={cn("w-full p-2.5 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500/20 transition-all", isLight ? "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-800" : "bg-slate-800 border-slate-700 focus:border-blue-500 text-white")}
                                        value={inviteForm.department}
                                        onChange={e => setInviteForm({ ...inviteForm, department: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-8">
                            <button onClick={() => setIsInviteModalOpen(false)} className={cn("px-4 py-2.5 text-sm font-medium rounded-lg transition-colors", isLight ? "hover:bg-slate-100 text-slate-600" : "hover:bg-slate-800 text-slate-300")}>Cancel</button>
                            <button onClick={handleInvite} className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all active:scale-95">
                                <Send className="w-4 h-4" /> Send Invite
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className={cn("text-2xl font-bold", isLight ? "text-slate-900" : "text-white")}>Teacher Management</h1>
                    <p className={cn("text-sm", isLight ? "text-slate-500" : "text-slate-400")}>Manage teacher accounts, subjects, and assignments.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsInviteModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 active:scale-95">
                        <UserPlus className="w-4 h-4" />
                        Invite Teacher
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
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={cn(
                            "w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none border transition-all",
                            isLight
                                ? "bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                                : "bg-slate-950 border-slate-800 focus:border-indigo-500 text-slate-200"
                        )}
                    />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto relative">
                    <div className="relative">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className={cn(
                                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm border font-medium",
                                isLight ? "border-slate-200 text-slate-600 hover:bg-slate-50" : "border-slate-800 text-slate-400 hover:bg-slate-800"
                            )}>
                            <Filter className="w-4 h-4" />
                            Filter
                        </button>
                        {isFilterOpen && (
                            <div className={cn(
                                "absolute right-0 top-full mt-2 w-48 rounded-lg shadow-xl border z-20 p-2",
                                isLight ? "bg-white border-slate-200" : "bg-slate-900 border-slate-800"
                            )}>
                                {["All", "Active", "Inactive"].map(status => (
                                    <button
                                        key={status}
                                        onClick={() => {
                                            setFilterStatus(status)
                                            setIsFilterOpen(false)
                                        }}
                                        className={cn(
                                            "w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
                                            filterStatus === status
                                                ? (isLight ? "bg-indigo-50 text-indigo-600" : "bg-indigo-900/20 text-indigo-400")
                                                : (isLight ? "hover:bg-slate-50 text-slate-600" : "hover:bg-slate-800 text-slate-300")
                                        )}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={handleExport}
                        className={cn(
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
                                <th className="px-6 py-4">Teacher Name</th>
                                <th className="px-6 py-4">Subject</th>
                                <th className="px-6 py-4">Total Students</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Last Login</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {filteredTeachers.length > 0 ? (
                                filteredTeachers.map((teacher) => (
                                    <tr key={teacher.id} className={cn(
                                        "transition-colors",
                                        isLight ? "hover:bg-slate-50" : "hover:bg-slate-800/50"
                                    )}>
                                        <td className="px-6 py-4 font-medium">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs text-white font-bold">
                                                    {teacher.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className={isLight ? "text-slate-900" : "text-white"}>{teacher.name}</div>
                                                    <div className="text-xs text-slate-500 font-normal">{teacher.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500">{teacher.subject}</td>
                                        <td className="px-6 py-4 text-slate-500">{teacher.students}</td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "px-2 py-1 rounded-full text-xs font-semibold",
                                                teacher.status === "Active" && (isLight ? "bg-green-100 text-green-700" : "bg-green-900/30 text-green-400"),
                                                teacher.status === "Inactive" && (isLight ? "bg-slate-100 text-slate-600" : "bg-slate-800 text-slate-400"),
                                            )}>
                                                {teacher.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500">{teacher.lastLogin}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className={cn("p-1.5 rounded-md transition-colors", isLight ? "text-slate-400 hover:text-indigo-600 hover:bg-indigo-50" : "text-slate-500 hover:text-indigo-400 hover:bg-slate-800")} title="Edit">
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button className={cn("p-1.5 rounded-md transition-colors", isLight ? "text-slate-400 hover:text-blue-600 hover:bg-blue-50" : "text-slate-500 hover:text-blue-400 hover:bg-slate-800")} title="Email Reset">
                                                    <Mail className="w-4 h-4" />
                                                </button>
                                                <button className={cn("p-1.5 rounded-md transition-colors", isLight ? "text-slate-400 hover:text-red-600 hover:bg-red-50" : "text-slate-500 hover:text-red-400 hover:bg-slate-800")} title="Delete">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                                        No teachers found matching your filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination (Mock) */}
                <div className={cn(
                    "px-6 py-4 border-t flex items-center justify-between",
                    isLight ? "border-slate-200 bg-slate-50" : "border-slate-800 bg-slate-950"
                )}>
                    <p className={cn("text-xs", isLight ? "text-slate-500" : "text-slate-400")}>
                        Showing {filteredTeachers.length > 0 ? 1 : 0}-{filteredTeachers.length} of {filteredTeachers.length} teachers
                    </p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs font-medium rounded border disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 text-xs font-medium rounded border bg-white text-black" disabled>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
