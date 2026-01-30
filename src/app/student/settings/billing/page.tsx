"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { CreditCard, Star, Download } from "lucide-react"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { cn } from "@/lib/utils"

export default function StudentBillingPage() {
    const { theme } = useStudentTheme()
    const variant = theme === 'light' ? 'default' : 'glass'
    const isLight = theme === 'light'

    // Styles for high contrast light mode
    const lightCardStyles = "bg-white border-2 border-slate-300 shadow-md"
    const lightTextMain = "text-black"
    const lightTextSecondary = "text-slate-800"

    return (
        <div className="space-y-8">
            <div>
                <h1 className={cn("text-3xl font-extrabold mb-2", isLight ? "text-black" : "text-white")}>Billing & Subscription</h1>
                <p className={cn("font-medium", isLight ? "text-slate-700" : "text-white/60")}>Manage your student plan and payment methods.</p>
            </div>

            {/* Current Plan - Always distinct */}
            <div className={cn(
                "relative overflow-hidden rounded-2xl p-8 text-white shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-600",
                isLight && "border-4 border-blue-100 shadow-blue-200/50" // Extra pop in light mode
            )}>
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Star className="w-64 h-64 rotate-12" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white border border-white/30 text-xs font-black uppercase tracking-wider mb-4">
                            Pro Student
                        </div>
                        <h2 className="text-3xl font-bold mb-2">Unleash Your Potential</h2>
                        <p className="text-white/90 font-medium max-w-md">
                            You have access to all premium tools, unlimited hints, and advanced AI tutor help.
                        </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <div className="text-right">
                            <div className="text-sm text-white/80 font-medium">Next billing date</div>
                            <div className="font-mono font-bold text-lg">May 21, 2026</div>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="secondary" className="bg-white text-blue-700 hover:bg-white/90 font-bold border-0 shadow-lg">
                                Upgrade Plan
                            </Button>
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <SettingsSection title="Payment Method" variant={variant}>
                <SettingsCard variant={variant} className={cn(isLight && lightCardStyles)}>
                    <SettingsCardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                            <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center border-2",
                                isLight ? "bg-slate-50 border-slate-300" : "bg-white/10 border-white/10"
                            )}>
                                <CreditCard className={cn("w-6 h-6", isLight ? "text-black" : "text-white")} />
                            </div>
                            <div>
                                <h3 className={cn("font-bold text-lg", isLight ? "text-black" : "text-white")}>Visa ending in 4242</h3>
                                <p className={cn("text-sm font-medium", isLight ? lightTextSecondary : "text-white/50")}>Expires 12/28</p>
                            </div>
                        </div>
                        <Button variant="outline" className={cn("font-medium", isLight ? "border-slate-300 text-black hover:bg-slate-50" : "border-white/20 text-white hover:bg-white/10")}>Edit</Button>
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>

            <SettingsSection title="Billing History" variant={variant}>
                <SettingsCard variant={variant} className={cn(isLight && lightCardStyles)}>
                    <SettingsCardContent>
                        <table className={cn("w-full text-left text-sm", isLight ? "text-black" : "text-white/70")}>
                            <thead>
                                <tr className={isLight ? "border-b-2 border-slate-200" : "border-b border-white/10"}>
                                    <th className={cn("pb-3 font-bold text-base", isLight ? "text-black" : "text-white")}>Date</th>
                                    <th className={cn("pb-3 font-bold text-base", isLight ? "text-black" : "text-white")}>Description</th>
                                    <th className={cn("pb-3 font-bold text-base", isLight ? "text-black" : "text-white")}>Amount</th>
                                    <th className={cn("pb-3 font-bold text-base", isLight ? "text-black" : "text-white")}>Invoice</th>
                                </tr>
                            </thead>
                            <tbody className={isLight ? "divide-y divide-slate-200" : "divide-y divide-white/5"}>
                                {[
                                    { date: "Apr 21, 2026", desc: "Pro Student - Monthly", amount: "$9.00" },
                                    { date: "Mar 21, 2026", desc: "Pro Student - Monthly", amount: "$9.00" },
                                    { date: "Feb 21, 2026", desc: "Pro Student - Monthly", amount: "$9.00" },
                                ].map((row, i) => (
                                    <tr key={i} className={isLight ? "hover:bg-slate-50/50" : ""}>
                                        <td className="py-4 font-medium">{row.date}</td>
                                        <td className={cn("py-4 font-bold", isLight ? "text-black" : "text-white")}>{row.desc}</td>
                                        <td className="py-4 font-medium">{row.amount}</td>
                                        <td className="py-4">
                                            <div className={cn("flex items-center gap-2 font-bold cursor-pointer hover:underline", isLight ? "text-blue-700" : "text-blue-300 hover:text-white")}>
                                                <Download className="w-4 h-4" /> Download
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
