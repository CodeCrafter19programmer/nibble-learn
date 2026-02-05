"use client"

import React from "react"
import {
    FileText,
    Download,
    ArrowLeft,
    Search,
    Filter
} from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"
import Link from "next/link"

const invoices = [
    { id: "INV-2024-001", date: "Feb 1, 2026", plan: "Standard School Pkg", amount: "$499.00", status: "Paid" },
    { id: "INV-2024-002", date: "Jan 1, 2026", plan: "Standard School Pkg", amount: "$499.00", status: "Paid" },
    { id: "INV-2023-012", date: "Dec 1, 2025", plan: "Standard School Pkg", amount: "$499.00", status: "Paid" },
    { id: "INV-2023-011", date: "Nov 1, 2025", plan: "Basic School Pkg", amount: "$199.00", status: "Paid" },
    { id: "INV-2023-010", date: "Oct 1, 2025", plan: "Basic School Pkg", amount: "$199.00", status: "Paid" },
    { id: "INV-2023-009", date: "Sep 1, 2025", plan: "Basic School Pkg", amount: "$199.00", status: "Paid" },
]

export default function Invoices() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/school/billing">
                    <button className={cn(
                        "p-2 rounded-lg transition-colors border",
                        isLight ? "border-slate-200 text-slate-500 hover:text-black hover:bg-white" : "border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                    )}>
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                </Link>
                <div>
                    <h1 className={cn("text-2xl font-bold", isLight ? "text-slate-900" : "text-white")}>Invoice History</h1>
                    <p className={cn("text-sm", isLight ? "text-slate-500" : "text-slate-400")}>View and download your past payment records.</p>
                </div>
            </div>

            {/* Filters */}
            <div className={cn(
                "p-4 rounded-xl border flex flex-col sm:flex-row gap-4 justify-between items-center",
                isLight ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900 border-slate-800"
            )}>
                <div className="relative w-full sm:w-96">
                    <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4", isLight ? "text-slate-400" : "text-slate-500")} />
                    <input
                        type="text"
                        placeholder="Search invoices..."
                        className={cn(
                            "w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none border transition-all",
                            isLight
                                ? "bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                : "bg-slate-950 border-slate-800 focus:border-blue-500 text-slate-200"
                        )}
                    />
                </div>
                <button className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm border font-medium w-full sm:w-auto justify-center",
                    isLight ? "border-slate-200 text-slate-600 hover:bg-slate-50" : "border-slate-800 text-slate-400 hover:bg-slate-800"
                )}>
                    <Filter className="w-4 h-4" />
                    Filter by Date
                </button>
            </div>

            {/* Invoices List */}
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
                                <th className="px-6 py-4">Invoice ID</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Plan</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {invoices.map((inv) => (
                                <tr key={inv.id} className={cn(
                                    "transition-colors",
                                    isLight ? "hover:bg-slate-50" : "hover:bg-slate-800/50"
                                )}>
                                    <td className="px-6 py-4 font-mono font-medium text-xs">{inv.id}</td>
                                    <td className="px-6 py-4 text-slate-500">{inv.date}</td>
                                    <td className="px-6 py-4 text-slate-500">{inv.plan}</td>
                                    <td className={cn("px-6 py-4 font-semibold", isLight ? "text-slate-900" : "text-white")}>{inv.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-green-100 text-green-700">
                                            {inv.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className={cn(
                                            "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border",
                                            isLight
                                                ? "border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                                                : "border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-blue-400"
                                        )}>
                                            <Download className="w-3.5 h-3.5" />
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
