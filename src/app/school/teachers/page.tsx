"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Search,
    Download,
    Filter,
    Trash2,
    Edit2,
    Send,
    UserPlus,
    X,
    CheckCircle,
    AlertTriangle,
    ChevronLeft,
    ChevronRight
} from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"

type TeacherStatus = "Active" | "Inactive" | "Suspended"

type Teacher = {
    id: number
    name: string
    email: string
    subject: string
    status: TeacherStatus
}

const initialTeachers: Teacher[] = [
    { id: 1, name: "Sarah Johnson", email: "sarah.j@school.edu", subject: "Mathematics", status: "Active" },
    { id: 2, name: "David Wilson", email: "david.w@school.edu", subject: "History", status: "Active" },
    { id: 3, name: "Emily Chen", email: "emily.c@school.edu", subject: "Science", status: "Active" },
    { id: 4, name: "Michael Brown", email: "m.brown@school.edu", subject: "English", status: "Inactive" },
    { id: 5, name: "Jessica Taylor", email: "j.taylor@school.edu", subject: "Art", status: "Active" },
    { id: 6, name: "Kevin Adams", email: "k.adams@school.edu", subject: "PE", status: "Active" },
    { id: 7, name: "Linda Moore", email: "l.moore@school.edu", subject: "Biology", status: "Inactive" },
    { id: 8, name: "Tom Harris", email: "t.harris@school.edu", subject: "Geography", status: "Active" },
]

const PAGE_SIZE = 5

export default function TeacherManagement() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    const [teachersData, setTeachersData] = useState<Teacher[]>(initialTeachers)
    const [searchTerm, setSearchTerm] = useState("")
    const [filterStatus, setFilterStatus] = useState("All")
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [page, setPage] = useState(1)

    // Invite modal
    const [isInviteOpen, setIsInviteOpen] = useState(false)
    const [inviteForm, setInviteForm] = useState({ name: "", email: "", subject: "" })

    // Edit modal
    const [editTeacher, setEditTeacher] = useState<Teacher | null>(null)

    // Delete confirm
    const [deleteTarget, setDeleteTarget] = useState<Teacher | null>(null)

    // Toast
    const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null)
    const showToast = (msg: string, type: "success" | "error" = "success") => {
        setToast({ msg, type })
        setTimeout(() => setToast(null), 3000)
    }

    // ── Derived filtered + paginated list ──
    const filtered = teachersData.filter(t => {
        const matchSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.email.toLowerCase().includes(searchTerm.toLowerCase())
        const matchFilter = filterStatus === "All" || t.status === filterStatus
        return matchSearch && matchFilter
    })

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
    const safePage = Math.min(page, totalPages)
    const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

    const resetPage = () => setPage(1)

    // ── Invite ──
    const handleInvite = () => {
        if (!inviteForm.name.trim() || !inviteForm.email.trim()) return
        const newTeacher: Teacher = {
            id: Date.now(),
            name: inviteForm.name.trim(),
            email: inviteForm.email.trim(),
            subject: inviteForm.subject.trim() || "General",
            status: "Active",
        }
        setTeachersData(p => [...p, newTeacher])
        setInviteForm({ name: "", email: "", subject: "" })
        setIsInviteOpen(false)
        showToast(`Invite sent to ${newTeacher.name}.`)
    }

    // ── Edit ──
    const handleSaveEdit = () => {
        if (!editTeacher || !editTeacher.name.trim() || !editTeacher.email.trim()) return
        setTeachersData(p => p.map(t => t.id === editTeacher.id ? { ...editTeacher } : t))
        showToast(`"${editTeacher.name}" updated successfully.`)
        setEditTeacher(null)
    }

    // ── Delete ──
    const handleConfirmDelete = () => {
        if (!deleteTarget) return
        setTeachersData(p => p.filter(t => t.id !== deleteTarget.id))
        showToast(`"${deleteTarget.name}" deleted.`, "error")
        setDeleteTarget(null)
    }

    // ── Export ──
    const handleExport = () => {
        const csv = ["Name,Email,Subject,Status", ...filtered.map(t => `${t.name},${t.email},${t.subject},${t.status}`)].join("\n")
        const blob = new Blob([csv], { type: "text/csv" })
        const link = document.createElement("a")
        link.href = URL.createObjectURL(blob)
        link.download = "teachers_export.csv"
        link.click()
    }

    // ── Shared input style ──
    const inputCls = cn(
        "w-full px-3 py-2.5 rounded-lg border text-sm outline-none transition-all",
        isLight
            ? "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            : "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500"
    )

    const modalCard = cn(
        "w-full max-w-md rounded-2xl p-6 shadow-2xl border",
        isLight ? "bg-white border-slate-100" : "bg-slate-900 border-slate-800"
    )

    return (
        <div className="space-y-6 relative">

            {/* ── Toast ── */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={cn(
                            "fixed top-6 right-6 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl text-sm font-medium",
                            toast.type === "success" ? "bg-indigo-600 text-white" : "bg-red-600 text-white"
                        )}
                    >
                        <CheckCircle className="w-4 h-4 shrink-0" />
                        {toast.msg}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── INVITE MODAL ── */}
            <AnimatePresence>
                {isInviteOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className={modalCard}>
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <h2 className={cn("text-lg font-bold", isLight ? "text-slate-900" : "text-white")}>Invite New Teacher</h2>
                                    <p className={cn("text-xs mt-0.5", isLight ? "text-slate-500" : "text-slate-400")}>An invitation email will be sent to them.</p>
                                </div>
                                <button onClick={() => setIsInviteOpen(false)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors"><X className="w-5 h-5" /></button>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className={cn("text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Full Name *</label>
                                    <input className={inputCls} placeholder="e.g. Jane Doe" value={inviteForm.name} onChange={e => setInviteForm(p => ({ ...p, name: e.target.value }))} />
                                </div>
                                <div className="space-y-1.5">
                                    <label className={cn("text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Email Address *</label>
                                    <input className={inputCls} type="email" placeholder="e.g. jane@school.edu" value={inviteForm.email} onChange={e => setInviteForm(p => ({ ...p, email: e.target.value }))} />
                                </div>
                                <div className="space-y-1.5">
                                    <label className={cn("text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Subject</label>
                                    <input className={inputCls} placeholder="e.g. Mathematics" value={inviteForm.subject} onChange={e => setInviteForm(p => ({ ...p, subject: e.target.value }))} />
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button onClick={() => setIsInviteOpen(false)} className={cn("px-4 py-2 text-sm font-medium rounded-lg transition-colors", isLight ? "hover:bg-slate-100 text-slate-600" : "hover:bg-slate-800 text-slate-300")}>Cancel</button>
                                <button onClick={handleInvite} disabled={!inviteForm.name.trim() || !inviteForm.email.trim()} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                    <Send className="w-4 h-4" /> Send Invite
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* ── EDIT MODAL ── */}
            <AnimatePresence>
                {editTeacher && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className={modalCard}>
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <h2 className={cn("text-lg font-bold", isLight ? "text-slate-900" : "text-white")}>Edit Teacher</h2>
                                    <p className={cn("text-xs mt-0.5", isLight ? "text-slate-500" : "text-slate-400")}>Update the teacher's name, email, or status.</p>
                                </div>
                                <button onClick={() => setEditTeacher(null)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors"><X className="w-5 h-5" /></button>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className={cn("text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Full Name *</label>
                                    <input className={inputCls} value={editTeacher.name} onChange={e => setEditTeacher(p => p ? { ...p, name: e.target.value } : null)} />
                                </div>
                                <div className="space-y-1.5">
                                    <label className={cn("text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Email Address *</label>
                                    <input className={inputCls} type="email" value={editTeacher.email} onChange={e => setEditTeacher(p => p ? { ...p, email: e.target.value } : null)} />
                                </div>
                                <div className="space-y-1.5">
                                    <label className={cn("text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Subject</label>
                                    <input className={inputCls} value={editTeacher.subject} onChange={e => setEditTeacher(p => p ? { ...p, subject: e.target.value } : null)} />
                                </div>
                                <div className="space-y-1.5">
                                    <label className={cn("text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Status</label>
                                    <select className={inputCls} value={editTeacher.status} onChange={e => setEditTeacher(p => p ? { ...p, status: e.target.value as TeacherStatus } : null)}>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                        <option value="Suspended">Suspended</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button onClick={() => setEditTeacher(null)} className={cn("px-4 py-2 text-sm font-medium rounded-lg transition-colors", isLight ? "hover:bg-slate-100 text-slate-600" : "hover:bg-slate-800 text-slate-300")}>Cancel</button>
                                <button onClick={handleSaveEdit} disabled={!editTeacher.name.trim() || !editTeacher.email.trim()} className="px-5 py-2 text-sm font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* ── DELETE CONFIRM MODAL ── */}
            <AnimatePresence>
                {deleteTarget && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className={cn("w-full max-w-sm rounded-2xl p-6 shadow-2xl border text-center", isLight ? "bg-white border-slate-100" : "bg-slate-900 border-slate-800")}>
                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                                <AlertTriangle className="w-6 h-6 text-red-600" />
                            </div>
                            <h2 className={cn("text-lg font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Remove Teacher?</h2>
                            <p className={cn("text-sm mb-6", isLight ? "text-slate-500" : "text-slate-400")}>
                                Are you sure you want to remove <span className="font-semibold text-red-600">{deleteTarget.name}</span>? This cannot be undone.
                            </p>
                            <div className="flex gap-3 justify-center">
                                <button onClick={() => setDeleteTarget(null)} className={cn("flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors", isLight ? "hover:bg-slate-100 text-slate-600" : "hover:bg-slate-800 text-slate-300")}>Cancel</button>
                                <button onClick={handleConfirmDelete} className="flex-1 px-4 py-2 text-sm font-bold bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Remove</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* ── PAGE HEADER ── */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className={cn("text-2xl font-bold", isLight ? "text-slate-900" : "text-white")}>Teacher Management</h1>
                    <p className={cn("text-sm mt-0.5", isLight ? "text-slate-500" : "text-slate-400")}>Manage teacher accounts, subjects, and access.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => setIsInviteOpen(true)} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 active:scale-95">
                        <UserPlus className="w-4 h-4" /> Invite Teacher
                    </button>
                    <button onClick={handleExport} className={cn("flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors", isLight ? "bg-white border-slate-200 text-slate-700 hover:bg-slate-50" : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800")}>
                        <Download className="w-4 h-4" /> Export
                    </button>
                </div>
            </div>

            {/* ── SEARCH + FILTER ── */}
            <div className={cn("p-4 rounded-xl border flex flex-col sm:flex-row gap-4 justify-between items-center", isLight ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900 border-slate-800")}>
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={e => { setSearchTerm(e.target.value); resetPage() }}
                        className={cn("w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none border transition-all", isLight ? "bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" : "bg-slate-950 border-slate-800 focus:border-indigo-500 text-slate-200")}
                    />
                </div>
                <div className="relative">
                    <button onClick={() => setIsFilterOpen(p => !p)} className={cn("flex items-center gap-2 px-3 py-2 rounded-lg text-sm border font-medium", isLight ? "border-slate-200 text-slate-600 hover:bg-slate-50" : "border-slate-800 text-slate-400 hover:bg-slate-800")}>
                        <Filter className="w-4 h-4" />
                        {filterStatus === "All" ? "Filter" : filterStatus}
                    </button>
                    {isFilterOpen && (
                        <div className={cn("absolute right-0 top-full mt-2 w-40 rounded-xl shadow-xl border z-20 p-1.5", isLight ? "bg-white border-slate-200" : "bg-slate-900 border-slate-800")}>
                            {["All", "Active", "Inactive", "Suspended"].map(s => (
                                <button key={s} onClick={() => { setFilterStatus(s); setIsFilterOpen(false); resetPage() }}
                                    className={cn("w-full text-left px-3 py-2 text-sm rounded-lg transition-colors", filterStatus === s ? "bg-indigo-50 text-indigo-600 font-semibold" : isLight ? "hover:bg-slate-50 text-slate-600" : "hover:bg-slate-800 text-slate-300")}>
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* ── TABLE ── */}
            <div className={cn("border rounded-xl overflow-hidden", isLight ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900 border-slate-800")}>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className={cn("text-xs uppercase font-semibold tracking-wider", isLight ? "bg-slate-50 text-slate-500 border-b border-slate-200" : "bg-slate-950 text-slate-400 border-b border-slate-800")}>
                            <tr>
                                <th className="px-6 py-4">Teacher Name</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Subject</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className={cn("divide-y", isLight ? "divide-slate-100" : "divide-slate-800")}>
                            {paginated.length > 0 ? (
                                paginated.map((teacher, i) => (
                                    <motion.tr
                                        key={teacher.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.04 }}
                                        className={cn("transition-colors", isLight ? "hover:bg-slate-50" : "hover:bg-slate-800/50")}
                                    >
                                        {/* Name */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs text-white font-bold shadow-sm shrink-0">
                                                    {teacher.name.charAt(0)}
                                                </div>
                                                <span className={cn("font-semibold", isLight ? "text-slate-900" : "text-white")}>{teacher.name}</span>
                                            </div>
                                        </td>

                                        {/* Email */}
                                        <td className="px-6 py-4">
                                            <span className={cn("text-sm", isLight ? "text-slate-500" : "text-slate-400")}>{teacher.email}</span>
                                        </td>

                                        {/* Subject */}
                                        <td className="px-6 py-4">
                                            <span className={cn("text-sm", isLight ? "text-slate-600" : "text-slate-300")}>{teacher.subject}</span>
                                        </td>

                                        {/* Status */}
                                        <td className="px-6 py-4">
                                            <span className={cn("px-2.5 py-1 rounded-full text-xs font-bold",
                                                teacher.status === "Active" && (isLight ? "bg-green-100 text-green-700" : "bg-green-900/30 text-green-400"),
                                                teacher.status === "Inactive" && (isLight ? "bg-slate-100 text-slate-600" : "bg-slate-800 text-slate-400"),
                                                teacher.status === "Suspended" && (isLight ? "bg-red-100 text-red-700" : "bg-red-900/30 text-red-400"),
                                            )}>
                                                {teacher.status}
                                            </span>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1.5">
                                                <button
                                                    onClick={() => setEditTeacher({ ...teacher })}
                                                    className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors", isLight ? "border-slate-200 text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700" : "border-slate-700 text-slate-400 hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-indigo-400")}
                                                >
                                                    <Edit2 className="w-3.5 h-3.5" /> Edit
                                                </button>
                                                <button
                                                    onClick={() => setDeleteTarget(teacher)}
                                                    className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors", isLight ? "border-slate-200 text-slate-600 hover:border-red-300 hover:bg-red-50 hover:text-red-700" : "border-slate-700 text-slate-400 hover:border-red-500 hover:bg-red-500/10 hover:text-red-400")}
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" /> Remove
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-16 text-center text-slate-400 text-sm">
                                        No teachers found matching your filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* ── PAGINATION FOOTER ── */}
                <div className={cn("px-6 py-3 border-t flex items-center justify-between gap-4", isLight ? "border-slate-100 bg-slate-50" : "border-slate-800 bg-slate-950")}>
                    <p className={cn("text-xs", isLight ? "text-slate-500" : "text-slate-400")}>
                        Showing {filtered.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filtered.length)} of {filtered.length} teachers
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={safePage === 1}
                            className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                                isLight ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700")}
                        >
                            <ChevronLeft className="w-3.5 h-3.5" /> Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                            <button
                                key={n}
                                onClick={() => setPage(n)}
                                className={cn("w-8 h-8 rounded-lg text-xs font-bold border transition-colors",
                                    safePage === n
                                        ? "bg-indigo-600 text-white border-indigo-600"
                                        : isLight ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700")}
                            >
                                {n}
                            </button>
                        ))}

                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={safePage === totalPages}
                            className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                                isLight ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700")}
                        >
                            Next <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
