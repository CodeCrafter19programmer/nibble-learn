"use client"

import React, { useState } from "react"
import { Search, Filter, MoreHorizontal, UserPlus, Download } from "lucide-react"

const users = [
    { id: 1, name: "Sarah Johnson", email: "sarah.j@school.edu", role: "Teacher", status: "Active", lastActive: "2 mins ago" },
    { id: 2, name: "Mark Davis", email: "m.davis@school.edu", role: "Teacher", status: "Active", lastActive: "15 mins ago" },
    { id: 3, name: "Jessica Taylor", email: "jessica.t@school.edu", role: "Teacher", status: "Inactive", lastActive: "3 days ago" },
    { id: 4, name: "David Wilson", email: "dwilson@school.edu", role: "Admin", status: "Active", lastActive: "1 hour ago" },
    { id: 5, name: "Emily Chen", email: "e.chen@school.edu", role: "Teacher", status: "Active", lastActive: "4 hours ago" },
    { id: 6, name: "Michael Brown", email: "m.brown@school.edu", role: "Teacher", status: "Active", lastActive: "Yesterday" },
    { id: 7, name: "Jennifer Wu", email: "j.wu@school.edu", role: "Teacher", status: "Pending", lastActive: "Never" },
]

export default function UserManagementPage() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-1">User Management</h1>
                    <p className="text-slate-400 text-sm">Manage access and roles for your school.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700 transition-colors text-sm">
                        <Download className="w-4 h-4" /> Export
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-lg shadow-indigo-500/20 transition-colors text-sm font-medium">
                        <UserPlus className="w-4 h-4" /> Add User
                    </button>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-200 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-none">
                        <select className="w-full bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-lg pl-3 pr-8 py-2 focus:ring-1 focus:ring-indigo-500 outline-none appearance-none cursor-pointer">
                            <option>All Roles</option>
                            <option>Teacher</option>
                            <option>Admin</option>
                            <option>Student</option>
                        </select>
                        <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500 pointer-events-none" />
                    </div>
                    <div className="relative flex-1 sm:flex-none">
                        <select className="w-full bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-lg pl-3 pr-8 py-2 focus:ring-1 focus:ring-indigo-500 outline-none appearance-none cursor-pointer">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Pending</option>
                        </select>
                        <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="bg-slate-950/50 border-b border-slate-800 text-slate-400 font-medium">
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Last Active</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-800/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div>
                                            <div className="font-medium text-slate-200">{user.name}</div>
                                            <div className="text-xs text-slate-500">{user.email}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${user.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                                user.status === 'Inactive' ? 'bg-slate-800 text-slate-500 border-slate-700' :
                                                    'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                            }`}>
                                            {user.status === 'Active' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />}
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-400">
                                        {user.lastActive}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition-colors">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Mock */}
                <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between text-sm text-slate-500">
                    <div>Showing 1-7 of 1,247</div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 text-slate-300 transition-colors">Previous</button>
                        <button className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 text-slate-300 transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
