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

    const [studentsData, setStudentsData] = useState(students)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isImportModalOpen, setIsImportModalOpen] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [filterStatus, setFilterStatus] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")

    const [newStudent, setNewStudent] = useState({
        name: "",
        code: "",
        grade: "",
        status: "Active"
    })

    const filteredStudents = studentsData.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.code.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesFilter = filterStatus === "All" || student.status === filterStatus
        return matchesSearch && matchesFilter
    })

    const handleAddStudent = () => {
        const id = studentsData.length + 1
        const student = {
            id,
            ...newStudent,
            code: newStudent.code || `ST-2024-${String(id).padStart(3, '0')}`,
            lastLogin: "Never"
        }
        setStudentsData([...studentsData, student])
        setNewStudent({ name: "", code: "", grade: "", status: "Active" })
        setIsAddModalOpen(false)
    }

    const handleImport = () => {
        // Simulate import
        setTimeout(() => {
            const newStudents = [
                { id: studentsData.length + 1, name: "Imported Student 1", code: `ST-2024-${String(studentsData.length + 1).padStart(3, '0')}`, grade: "9th", status: "Active", lastLogin: "Never" },
                { id: studentsData.length + 2, name: "Imported Student 2", code: `ST-2024-${String(studentsData.length + 2).padStart(3, '0')}`, grade: "10th", status: "Active", lastLogin: "Never" }
            ]
            setStudentsData([...studentsData, ...newStudents])
            setIsImportModalOpen(false)
        }, 1000)
    }

    const handleExport = () => {
        const headers = ["Name", "Access Code", "Grade", "Status", "Last Login"]
        const csvContent = [
            headers.join(","),
            ...filteredStudents.map(s => `${s.name},${s.code},${s.grade},${s.status},${s.lastLogin}`)
        ].join("\n")

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
        const link = document.createElement("a")
        link.href = URL.createObjectURL(blob)
        link.download = "students_export.csv"
        link.click()
    }

    return (
        <div className="space-y-6 relative">
            {/* Add Student Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className={cn("w-full max-w-md rounded-xl p-6 shadow-2xl", isLight ? "bg-white" : "bg-slate-900 border border-slate-800")}>
                        <h2 className={cn("text-lg font-bold mb-4", isLight ? "text-slate-900" : "text-white")}>Add New Student</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium mb-1 block">Full Name</label>
                                <input
                                    type="text"
                                    className={cn("w-full p-2 rounded-lg border", isLight ? "bg-slate-50 border-slate-200" : "bg-slate-800 border-slate-700")}
                                    value={newStudent.name}
                                    onChange={e => setNewStudent({ ...newStudent, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Grade</label>
                                <select
                                    className={cn("w-full p-2 rounded-lg border", isLight ? "bg-slate-50 border-slate-200" : "bg-slate-800 border-slate-700")}
                                    value={newStudent.grade}
                                    onChange={e => setNewStudent({ ...newStudent, grade: e.target.value })}
                                >
                                    <option value="">Select Grade</option>
                                    <option value="9th">9th Grade</option>
                                    <option value="10th">10th Grade</option>
                                    <option value="11th">11th Grade</option>
                                    <option value="12th">12th Grade</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-2 mt-6">
                                <button onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Cancel</button>
                                <button onClick={handleAddStudent} className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Add Student</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Import Modal */}
            {isImportModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className={cn("w-full max-w-md rounded-xl p-6 shadow-2xl", isLight ? "bg-white" : "bg-slate-900 border border-slate-800")}>
                        <h2 className={cn("text-lg font-bold mb-4", isLight ? "text-slate-900" : "text-white")}>Bulk Import Students</h2>
                        <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 text-center space-y-2">
                            <Upload className="w-8 h-8 mx-auto text-slate-400" />
                            <p className="text-sm text-slate-500">Drag and drop a CSV file here, or click to browse</p>
                        </div>
                        <div className="flex justify-end gap-2 mt-6">
                            <button onClick={() => setIsImportModalOpen(false)} className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Cancel</button>
                            <button onClick={handleImport} className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Import Data</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className={cn("text-2xl font-bold", isLight ? "text-slate-900" : "text-white")}>Student Management</h1>
                    <p className={cn("text-sm", isLight ? "text-slate-500" : "text-slate-400")}>Manage student accounts, codes, and access.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsImportModalOpen(true)}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors border",
                            isLight
                                ? "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                                : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                        )}>
                        <Upload className="w-4 h-4" />
                        Bulk Import
                    </button>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20">
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
                                {["All", "Active", "Inactive", "Suspended"].map(status => (
                                    <button
                                        key={status}
                                        onClick={() => {
                                            setFilterStatus(status)
                                            setIsFilterOpen(false)
                                        }}
                                        className={cn(
                                            "w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
                                            filterStatus === status
                                                ? (isLight ? "bg-blue-50 text-blue-600" : "bg-blue-900/20 text-blue-400")
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
                                <th className="px-6 py-4">Student Name</th>
                                <th className="px-6 py-4">Access Code</th>
                                <th className="px-6 py-4">Grade</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Last Login</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((student) => (
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
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                                        No students found matching your filters.
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
                        Showing {filteredStudents.length > 0 ? 1 : 0}-{filteredStudents.length} of {filteredStudents.length} students
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
