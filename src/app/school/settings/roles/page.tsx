"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Check, X, Shield } from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"

export default function SchoolRolesPage() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    const roles = ["Admin", "Teacher", "Student"]
    const permissions = [
        { name: "View Reports", access: [true, true, false] },
        { name: "Manage Users", access: [true, false, false] },
        { name: "Create Content", access: [true, true, true] },
        { name: "Delete Content", access: [true, true, false] },
        { name: "Access Billing", access: [true, false, false] },
    ]

    return (
        <div className="space-y-8">
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Roles & Permissions</h1>
                <p className={isLight ? "text-slate-600" : "text-slate-400"}>Configure access levels for your district.</p>
            </div>

            <SettingsSection title="Permission Matrix" variant={isLight ? "default" : "slate"}>
                <SettingsCard variant={isLight ? "default" : "slate"} className="overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className={cn(
                                    "border-b",
                                    isLight
                                        ? "border-slate-200 bg-slate-50"
                                        : "border-slate-800 bg-slate-900/50"
                                )}>
                                    <th className={cn("p-4 font-bold", isLight ? "text-slate-700" : "text-slate-300")}>Permission</th>
                                    {roles.map(role => (
                                        <th key={role} className={cn("p-4 font-bold", isLight ? "text-slate-900" : "text-white")}>{role}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className={cn("divide-y", isLight ? "divide-slate-200" : "divide-slate-800")}>
                                {permissions.map((perm, i) => (
                                    <tr key={i} className={cn(
                                        "transition-colors",
                                        isLight ? "hover:bg-slate-50" : "hover:bg-slate-800/30"
                                    )}>
                                        <td className={cn("p-4 font-medium", isLight ? "text-slate-600" : "text-slate-400")}>{perm.name}</td>
                                        {perm.access.map((hasAccess, j) => (
                                            <td key={j} className="p-4">
                                                {hasAccess
                                                    ? <Check className="w-5 h-5 text-green-500" />
                                                    : <X className={cn("w-5 h-5", isLight ? "text-slate-300" : "text-slate-700")} />
                                                }
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </SettingsCard>
                <div className="flex justify-end pt-4">
                    <Button variant="outline" className={cn(
                        isLight
                            ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                            : "border-slate-700 text-slate-300"
                    )}>
                        Reset to Defaults
                    </Button>
                </div>
            </SettingsSection>
        </div>
    )
}
