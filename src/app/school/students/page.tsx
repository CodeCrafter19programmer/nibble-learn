"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Search,
    Plus,
    Upload,
    Download,
    Filter,
    Trash2,
    Edit2,
    X,
    CheckCircle,
    AlertTriangle,
    ChevronLeft,
    ChevronRight
} from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"

type Student = {
    id: number
    firstName: string
    lastName: string
    code: string
    status: "Active" | "Inactive" | "Suspended"
    isNew: boolean
}

const initialStudents: Student[] = [
    { id: 1, firstName: "Alice", lastName: "Freeman", code: "ST-2024-001", status: "Active", isNew: false },
    { id: 2, firstName: "Bob", lastName: "Smith", code: "ST-2024-002", status: "Active", isNew: false },
    { id: 3, firstName: "Charlie", lastName: "Brown", code: "ST-2024-003", status: "Inactive", isNew: false },
    { id: 4, firstName: "Diana", lastName: "Prince", code: "ST-2024-004", status: "Active", isNew: false },
    { id: 5, firstName: "Evan", lastName: "Wright", code: "ST-2024-005", status: "Active", isNew: false },
    { id: 6, firstName: "Fiona", lastName: "Gallagher", code: "ST-2024-006", status: "Suspended", isNew: false },
]

function generateCode(existingCount: number) {
    const next = existingCount + 1
    return `ST-2024-${String(next).padStart(3, '0')}`
}

const PAGE_SIZE = 5

export default function StudentManagement() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    const [studentsData, setStudentsData] = useState<Student[]>(initialStudents)
    const [searchTerm, setSearchTerm] = useState("")
    const [filterStatus, setFilterStatus] = useState("All")
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [page, setPage] = useState(1)

    // Add Modal
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [newStudent, setNewStudent] = useState({ firstName: "", lastName: "", status: "Active" as Student["status"] })

    // Bulk Import Modal
    const [isImportOpen, setIsImportOpen] = useState(false)
    const [importFile, setImportFile] = useState<File | null>(null)

    // Edit Modal
    const [editStudent, setEditStudent] = useState<Student | null>(null)

    // Delete Confirm
    const [deleteTarget, setDeleteTarget] = useState<Student | null>(null)

    // Toast
    const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null)

    const showToast = (msg: string, type: "success" | "error" = "success") => {
        setToast({ msg, type })
        setTimeout(() => setToast(null), 3000)
    }

    const filteredStudents = studentsData.filter(s => {
        const fullName = `${s.firstName} ${s.lastName}`.toLowerCase()
        const matchesSearch = fullName.includes(searchTerm.toLowerCase()) ||
            s.code.toLowerCase().includes(searchTerm.toLowerCase())

        let matchesFilter = true
        if (filterStatus === "New") matchesFilter = s.isNew
        else if (filterStatus === "Old") matchesFilter = !s.isNew
        else if (filterStatus !== "All") matchesFilter = s.status === filterStatus

        return matchesSearch && matchesFilter
    })

    const totalPages = Math.max(1, Math.ceil(filteredStudents.length / PAGE_SIZE))
    const safePage = Math.min(page, totalPages)
    const paginated = filteredStudents.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

    const resetPage = () => setPage(1)

    // --- Add ---
    const handleAddStudent = () => {
        if (!newStudent.firstName.trim() || !newStudent.lastName.trim()) return
        const student: Student = {
            id: Date.now(),
            firstName: newStudent.firstName.trim(),
            lastName: newStudent.lastName.trim(),
            code: generateCode(studentsData.length),
            status: newStudent.status,
            isNew: true
        }
        setStudentsData(prev => [...prev, student])
        setNewStudent({ firstName: "", lastName: "", status: "Active" })
        setIsAddOpen(false)
        showToast(`Student "${student.firstName} ${student.lastName}" added.`)
    }

    // --- Bulk Import ---
    const handleImport = async () => {
        if (!importFile) return
        try {
            const text = await importFile.text()
            const lines = text.split("\n").map(l => l.trim()).filter(Boolean)
            if (lines.length <= 1) { // Assuming header + at least 1 row
                showToast("CSV is empty or invalid.", "error")
                return
            }

            const newStudents: Student[] = []

            lines.slice(1).forEach((line, idx) => {
                const parts = line.split(",").map(p => p.trim())
                if (parts.length >= 2 && parts[0] && parts[1]) {
                    newStudents.push({
                        id: Date.now() + idx,
                        firstName: parts[0],
                        lastName: parts[1],
                        // Using current dataset length + current index of new element for unique sequential code
                        code: generateCode(studentsData.length + newStudents.length),
                        status: "Active",
                        isNew: true
                    })
                }
            })

            if (newStudents.length > 0) {
                setStudentsData(p => [...p, ...newStudents])
                showToast(`Imported ${newStudents.length} students successfully.`)
            } else {
                showToast("No valid student records found.", "error")
            }
        } catch (e) {
            showToast("Failed to parse the file.", "error")
        } finally {
            setIsImportOpen(false)
            setImportFile(null)
            resetPage()
        }
    }

    // --- Edit ---
    const openEdit = (s: Student) => {
        setEditStudent({ ...s })
    }

    const handleSaveEdit = () => {
        if (!editStudent || !editStudent.firstName.trim() || !editStudent.lastName.trim()) return
        setStudentsData(prev => prev.map(s => s.id === editStudent.id ?
            { ...editStudent, firstName: editStudent.firstName.trim(), lastName: editStudent.lastName.trim() } : s))
        showToast(`Student "${editStudent.firstName} ${editStudent.lastName}" updated.`)
        setEditStudent(null)
    }

    // --- Delete ---
    const handleConfirmDelete = () => {
        if (!deleteTarget) return
        setStudentsData(prev => prev.filter(s => s.id !== deleteTarget.id))
        showToast(`Student "${deleteTarget.firstName} ${deleteTarget.lastName}" deleted.`, "error")
        setDeleteTarget(null)
    }

    // --- Export ---
    const handleExport = () => {
        const csv = ["First Name,Last Name,Access Code,Status,Flag", ...filteredStudents.map(s => `${s.firstName},${s.lastName},${s.code},${s.status},${s.isNew ? "New" : "Old"}`)].join("\n")
        const blob = new Blob([csv], { type: "text/csv" })
        const link = document.createElement("a")
        link.href = URL.createObjectURL(blob)
        link.download = "students_export.csv"
        link.click()
    }

    const inputCls = cn(
        "w-full px-3 py-2.5 rounded-lg border text-sm outline-none transition-all",
        isLight
            ? "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            : "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
    )

    const modalCardCls = cn("w-full max-w-md rounded-2xl p-6 shadow-2xl border", isLight ? "bg-white border-slate-100" : "bg-slate-900 border-slate-800")

    return (
        <div className="space-y-6 relative pb-10">

            {/* Toast */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={cn(
                            "fixed top-6 right-6 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl text-sm font-medium",
                            toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
                        )}
                    >
                        <CheckCircle className="w-4 h-4 shrink-0" />
                        {toast.msg}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── ADD STUDENT MODAL ── */}
            <AnimatePresence>
                {isAddOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className={modalCardCls}>
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <h2 className={cn("text-lg font-bold", isLight ? "text-slate-900" : "text-white")}>Add New Student</h2>
                                    <p className={cn("text-xs mt-0.5", isLight ? "text-slate-500" : "text-slate-400")}>Access code will be generated automatically.</p>
                                </div>
                                <button onClick={() => setIsAddOpen(false)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className={cn("text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>First Name *</label>
                                    <input
                                        className={inputCls}
                                        placeholder="e.g. Jane"
                                        value={newStudent.firstName}
                                        onChange={e => setNewStudent(p => ({ ...p, firstName: e.target.value }))}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className={cn("text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Last Name *</label>
                                    <input
                                        className={inputCls}
                                        placeholder="e.g. Doe"
                                        value={newStudent.lastName}
                                        onChange={e => setNewStudent(p => ({ ...p, lastName: e.target.value }))}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className={cn("text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Status</label>
                                    <select
                                        className={inputCls}
                                        value={newStudent.status}
                                        onChange={e => setNewStudent(p => ({ ...p, status: e.target.value as Student["status"] }))}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                        <option value="Suspended">Suspended</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button onClick={() => setIsAddOpen(false)} className={cn("px-4 py-2 text-sm font-medium rounded-lg transition-colors", isLight ? "hover:bg-slate-100 text-slate-600" : "hover:bg-slate-800 text-slate-300")}>Cancel</button>
                                <button
                                    onClick={handleAddStudent}
                                    disabled={!newStudent.firstName.trim() || !newStudent.lastName.trim()}
                                    className="px-5 py-2 text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Add Student
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* ── IMPORT MODAL ── */}
            <AnimatePresence>
                {isImportOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className={modalCardCls}>
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <h2 className={cn("text-lg font-bold", isLight ? "text-slate-900" : "text-white")}>Bulk Import Students</h2>
                                    <p className={cn("text-xs mt-0.5", isLight ? "text-slate-500" : "text-slate-400")}>Upload a CSV file with student names.</p>
                                </div>
                                <button onClick={() => { setIsImportOpen(false); setImportFile(null) }} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div className={cn("border-2 border-dashed rounded-xl p-8 text-center flex flex-col items-center justify-center",
                                    isLight ? "border-slate-300 bg-slate-50 hover:bg-slate-100" : "border-slate-700 bg-slate-950/50 hover:bg-slate-900")}>
                                    <Upload className="w-8 h-8 text-slate-400 mb-3" />
                                    <p className={cn("text-sm font-medium mb-1", isLight ? "text-slate-700" : "text-slate-300")}>
                                        {importFile ? importFile.name : "Select a CSV file to upload"}
                                    </p>
                                    <p className="text-xs text-slate-500 mb-4">CSV should contain columns: First Name, Last Name</p>
                                    <label className="cursor-pointer">
                                        <input
                                            type="file"
                                            accept=".csv"
                                            className="hidden"
                                            onChange={e => {
                                                if (e.target.files && e.target.files.length > 0) setImportFile(e.target.files[0])
                                            }}
                                        />
                                        <span className={cn(
                                            "px-4 py-2 text-sm font-bold rounded-lg transition-colors inline-block",
                                            isLight ? "bg-blue-100 text-blue-700 hover:bg-blue-200" : "bg-blue-900/30 text-blue-400 hover:bg-blue-900/50"
                                        )}>
                                            Browse Files
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button onClick={() => { setIsImportOpen(false); setImportFile(null) }} className={cn("px-4 py-2 text-sm font-medium rounded-lg transition-colors", isLight ? "hover:bg-slate-100 text-slate-600" : "hover:bg-slate-800 text-slate-300")}>Cancel</button>
                                <button
                                    onClick={handleImport}
                                    disabled={!importFile}
                                    className="px-5 py-2 text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                                >
                                    <Upload className="w-4 h-4" />
                                    Import
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* ── EDIT STUDENT MODAL ── */}
            <AnimatePresence>
                {editStudent && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className={modalCardCls}>
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <h2 className={cn("text-lg font-bold", isLight ? "text-slate-900" : "text-white")}>Edit Student</h2>
                                    <p className={cn("text-xs mt-0.5", isLight ? "text-slate-500" : "text-slate-400")}>Update the student's name or status.</p>
                                </div>
                                <button onClick={() => setEditStudent(null)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className={cn("text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>First Name *</label>
                                    <input
                                        className={inputCls}
                                        value={editStudent.firstName}
                                        onChange={e => setEditStudent(p => p ? { ...p, firstName: e.target.value } : null)}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className={cn("text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Last Name *</label>
                                    <input
                                        className={inputCls}
                                        value={editStudent.lastName}
                                        onChange={e => setEditStudent(p => p ? { ...p, lastName: e.target.value } : null)}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className={cn("text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Status</label>
                                    <select
                                        className={inputCls}
                                        value={editStudent.status}
                                        onChange={e => setEditStudent(p => p ? { ...p, status: e.target.value as Student["status"] } : null)}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                        <option value="Suspended">Suspended</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button onClick={() => setEditStudent(null)} className={cn("px-4 py-2 text-sm font-medium rounded-lg transition-colors", isLight ? "hover:bg-slate-100 text-slate-600" : "hover:bg-slate-800 text-slate-300")}>Cancel</button>
                                <button
                                    onClick={handleSaveEdit}
                                    disabled={!editStudent.firstName.trim() || !editStudent.lastName.trim()}
                                    className="px-5 py-2 text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
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
                            <h2 className={cn("text-lg font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Delete Student?</h2>
                            <p className={cn("text-sm mb-6", isLight ? "text-slate-500" : "text-slate-400")}>
                                Are you sure you want to delete <span className="font-semibold text-red-600">{deleteTarget.firstName} {deleteTarget.lastName}</span>? This action cannot be undone.
                            </p>
                            <div className="flex gap-3 justify-center">
                                <button onClick={() => setDeleteTarget(null)} className={cn("flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors", isLight ? "hover:bg-slate-100 text-slate-600" : "hover:bg-slate-800 text-slate-300")}>Cancel</button>
                                <button onClick={handleConfirmDelete} className="flex-1 px-4 py-2 text-sm font-bold bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Delete</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* ── PAGE HEADER ── */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className={cn("text-2xl font-bold", isLight ? "text-slate-900" : "text-white")}>Student Management</h1>
                    <p className={cn("text-sm mt-0.5", isLight ? "text-slate-500" : "text-slate-400")}>Manage student accounts, codes, and access.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsImportOpen(true)}
                        className={cn("flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors border shadow-sm", isLight ? "bg-white border-slate-200 text-slate-700 hover:bg-slate-50" : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800")}
                    >
                        <Upload className="w-4 h-4" />
                        Bulk Import
                    </button>
                    <button
                        onClick={() => setIsAddOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20"
                    >
                        <Plus className="w-4 h-4" />
                        Add Student
                    </button>
                    <button
                        onClick={handleExport}
                        className={cn("flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors border shadow-sm", isLight ? "bg-white border-slate-200 text-slate-700 hover:bg-slate-50" : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800")}
                    >
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                </div>
            </div>

            {/* ── SEARCH + FILTER ── */}
            <div className={cn("p-4 rounded-xl border flex flex-col sm:flex-row gap-4 justify-between items-center", isLight ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900 border-slate-800")}>
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by name or code..."
                        value={searchTerm}
                        onChange={e => { setSearchTerm(e.target.value); resetPage() }}
                        className={cn("w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none border transition-all", isLight ? "bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" : "bg-slate-950 border-slate-800 focus:border-blue-500 text-slate-200")}
                    />
                </div>
                <div className="relative">
                    <button
                        onClick={() => setIsFilterOpen(p => !p)}
                        className={cn("flex items-center gap-2 px-3 py-2 rounded-lg text-sm border font-medium", isLight ? "border-slate-200 text-slate-600 hover:bg-slate-50" : "border-slate-800 text-slate-400 hover:bg-slate-800")}
                    >
                        <Filter className="w-4 h-4" />
                        {filterStatus === "All" ? "Filter" : filterStatus}
                    </button>
                    {isFilterOpen && (
                        <div className={cn("absolute right-0 top-full mt-2 w-40 rounded-xl shadow-xl border z-20 p-1.5", isLight ? "bg-white border-slate-200" : "bg-slate-900 border-slate-800")}>
                            {["All", "Active", "Inactive", "Suspended", "New", "Old"].map(s => (
                                <button key={s} onClick={() => { setFilterStatus(s); setIsFilterOpen(false); resetPage() }}
                                    className={cn("w-full text-left px-3 py-2 text-sm rounded-lg transition-colors", filterStatus === s ? "bg-blue-50 text-blue-600 font-semibold" : isLight ? "hover:bg-slate-50 text-slate-600" : "hover:bg-slate-800 text-slate-300")}
                                >
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
                                <th className="px-6 py-4">Student Name</th>
                                <th className="px-6 py-4">Access Code</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Flag</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className={cn("divide-y", isLight ? "divide-slate-100" : "divide-slate-800")}>
                            {paginated.length > 0 ? (
                                paginated.map((student, i) => (
                                    <motion.tr
                                        key={student.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.04 }}
                                        className={cn("transition-colors", isLight ? "hover:bg-slate-50" : "hover:bg-slate-800/50")}
                                    >
                                        {/* Name */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-xs text-white font-bold shadow-sm shrink-0">
                                                    {student.firstName.charAt(0)}{student.lastName.charAt(0)}
                                                </div>
                                                <span className={cn("font-semibold", isLight ? "text-slate-900" : "text-white")}>
                                                    {student.firstName} {student.lastName}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Code */}
                                        <td className="px-6 py-4">
                                            <span className={cn("font-mono text-xs px-2.5 py-1.5 rounded-lg border", isLight ? "bg-slate-50 border-slate-200 text-slate-600" : "bg-slate-800 border-slate-700 text-slate-300")}>
                                                {student.code}
                                            </span>
                                        </td>

                                        {/* Status */}
                                        <td className="px-6 py-4">
                                            <span className={cn("px-2.5 py-1 rounded-full text-xs font-bold",
                                                student.status === "Active" && (isLight ? "bg-green-100 text-green-700" : "bg-green-900/30 text-green-400"),
                                                student.status === "Inactive" && (isLight ? "bg-slate-100 text-slate-600" : "bg-slate-800 text-slate-400"),
                                                student.status === "Suspended" && (isLight ? "bg-red-100 text-red-700" : "bg-red-900/30 text-red-400"),
                                            )}>
                                                {student.status}
                                            </span>
                                        </td>

                                        {/* Flag */}
                                        <td className="px-6 py-4">
                                            <span className={cn("px-2.5 py-1 rounded-full text-xs font-bold",
                                                student.isNew
                                                    ? (isLight ? "bg-amber-100 text-amber-700" : "bg-amber-900/30 text-amber-400")
                                                    : (isLight ? "bg-slate-100 text-slate-600" : "bg-slate-800 text-slate-400")
                                            )}>
                                                {student.isNew ? "New" : "Old"}
                                            </span>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1.5">
                                                <button
                                                    onClick={() => openEdit(student)}
                                                    title="Edit student"
                                                    className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors", isLight ? "border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700" : "border-slate-700 text-slate-400 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400")}
                                                >
                                                    <Edit2 className="w-3.5 h-3.5" />
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => setDeleteTarget(student)}
                                                    title="Delete student"
                                                    className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors", isLight ? "border-slate-200 text-slate-600 hover:border-red-300 hover:bg-red-50 hover:text-red-700" : "border-slate-700 text-slate-400 hover:border-red-500 hover:bg-red-500/10 hover:text-red-400")}
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-16 text-center text-slate-400 text-sm">
                                        No students found matching your filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* ── PAGINATION FOOTER ── */}
                <div className={cn("px-6 py-3 border-t flex items-center justify-between gap-4", isLight ? "border-slate-100 bg-slate-50" : "border-slate-800 bg-slate-950")}>
                    <p className={cn("text-xs", isLight ? "text-slate-500" : "text-slate-400")}>
                        Showing {filteredStudents.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filteredStudents.length)} of {filteredStudents.length} students
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
                                        ? "bg-blue-600 text-white border-blue-600"
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
