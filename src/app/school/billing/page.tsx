"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    CreditCard,
    CheckCircle2,
    AlertTriangle,
    ArrowRight,
    FileText,
    Zap,
    Users,
    Download
} from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function BillingOverview() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    // Mock Data & Logic for Backend Implementation
    // TODO: Replace with actual data from backend
    const creditsUsedPercentage = 85 // Example: 85% used means 15% remaining
    const showTopUp = creditsUsedPercentage >= 80 // Show Top Up if less than 20% credits remaining (i.e., usage >= 80%)

    // TODO: Implement date check logic for backend
    // Only allow upgrade if within X days of billing cycle end or if billing cycle has ended
    const isBillingCycleEnd = true // Mocked as true for demonstration
    const showUpgrade = isBillingCycleEnd

    return (
        <div className="space-y-6">
            <div>
                <h1 className={cn("text-2xl font-bold", isLight ? "text-slate-900" : "text-white")}>Billing & Subscription</h1>
                <p className={cn("text-sm", isLight ? "text-slate-500" : "text-slate-400")}>Manage your school's plan, billing details, and invoices.</p>
            </div>

            {/* Current Plan Card */}
            <div className={cn(
                "p-6 rounded-2xl border relative overflow-hidden",
                isLight
                    ? "bg-white border-slate-200 shadow-sm"
                    : "bg-slate-900 border-slate-700"
            )}>
                <div className="absolute top-0 right-0 p-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">Active</span>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mb-1">Current Plan</p>
                        <h2 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Standard School Package</h2>
                        <p className={cn("text-sm max-w-md", isLight ? "text-slate-500" : "text-slate-400")}>
                            Perfect for mid-sized schools. Includes advanced AI features and up to 150 teachers.
                        </p>
                    </div>

                    <div className="flex-1 w-full md:w-auto flex flex-col gap-4">
                        {/* Usage Bars */}
                        <div className="space-y-3">
                            <div>
                                <div className="flex justify-between text-xs font-medium mb-1.5">
                                    <span className={isLight ? "text-slate-700" : "text-slate-300"}>Student Accounts</span>
                                    <span className={isLight ? "text-slate-500" : "text-slate-400"}>3,420 / 5,000</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[68%] rounded-full" />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-medium mb-1.5">
                                    <span className={isLight ? "text-slate-700" : "text-slate-300"}>Credits Usage</span>
                                    <span className={cn("font-bold", creditsUsedPercentage >= 80 ? "text-red-500" : "text-amber-600")}>{creditsUsedPercentage}% Used</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div
                                        className={cn("h-full rounded-full", creditsUsedPercentage >= 80 ? "bg-red-500" : "bg-amber-500")}
                                        style={{ width: `${creditsUsedPercentage}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 justify-between items-center">
                    <div className="text-sm">
                        <span className={isLight ? "text-slate-500" : "text-slate-400"}>Next billing date: </span>
                        <span className={cn("font-medium", isLight ? "text-slate-900" : "text-white")}>March 1, 2026</span>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex gap-3">
                            {/* Top Up Button - Only appears when credits are low (< 20% remaining) */}
                            {showTopUp && (
                                <button className="px-4 py-2 rounded-lg text-sm font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-500/20 flex items-center gap-2">
                                    <Zap className="w-4 h-4" />
                                    Top Up Credits
                                </button>
                            )}

                            <Link href="/school/billing/invoices">
                                <button className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium border transition-colors",
                                    isLight
                                        ? "border-slate-200 text-slate-600 hover:bg-slate-50"
                                        : "border-slate-700 text-slate-300 hover:bg-slate-800"
                                )}>
                                    View Invoices
                                </button>
                            </Link>

                            {/* Upgrade Plan - Only appears at end of billing cycle */}
                            {showUpgrade && (
                                <Link href="/school/billing/plans">
                                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20">
                                        Upgrade Plan
                                    </button>
                                </Link>
                            )}
                        </div>

                        {/* Invoices Preview */}
                        <div className={cn(
                            "border rounded-xl overflow-hidden",
                            isLight ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900 border-slate-800"
                        )}>
                            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                <h3 className={cn("font-bold", isLight ? "text-slate-900" : "text-white")}>Recent Invoices</h3>
                                <Link href="/school/billing/invoices" className="text-xs text-blue-600 font-medium hover:underline">See All</Link>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                {[
                                    { id: "INV-001", date: "Feb 1, 2026", amount: "$499.00", status: "Paid" },
                                    { id: "INV-002", date: "Jan 1, 2026", amount: "$499.00", status: "Paid" },
                                    { id: "INV-003", date: "Dec 1, 2025", amount: "$499.00", status: "Paid" },
                                ].map((inv) => (
                                    <div key={inv.id} className="p-4 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className={cn("p-2 rounded-lg", isLight ? "bg-slate-100 text-slate-500" : "bg-slate-800 text-slate-400")}>
                                                <FileText className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className={cn("text-sm font-medium", isLight ? "text-slate-900" : "text-white")}>{inv.id}</p>
                                                <p className="text-xs text-slate-500">{inv.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-right flex items-center gap-4">
                                            <span className={cn("text-sm font-semibold", isLight ? "text-slate-900" : "text-white")}>{inv.amount}</span>
                                            <span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-green-100 text-green-700">Paid</span>
                                            <button className="text-slate-400 hover:text-blue-600">
                                                <Download className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    )
}
