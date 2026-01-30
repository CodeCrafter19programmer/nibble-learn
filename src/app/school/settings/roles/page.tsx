"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Check, X, Shield } from "lucide-react"

export default function SchoolRolesPage() {
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
                <h1 className="text-3xl font-bold mb-2">Roles & Permissions</h1>
                <p className="text-slate-400">Configure access levels for your district.</p>
            </div>

            <SettingsSection title="Permission Matrix" variant="slate">
                <SettingsCard variant="slate" className="overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-slate-800 bg-slate-900/50">
                                    <th className="p-4 font-medium text-slate-300">Permission</th>
                                    {roles.map(role => (
                                        <th key={role} className="p-4 font-medium text-white">{role}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {permissions.map((perm, i) => (
                                    <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                                        <td className="p-4 text-slate-400 font-medium">{perm.name}</td>
                                        {perm.access.map((hasAccess, j) => (
                                            <td key={j} className="p-4">
                                                {hasAccess
                                                    ? <Check className="w-5 h-5 text-green-500" />
                                                    : <X className="w-5 h-5 text-slate-700" />
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
                    <Button variant="outline" className="border-slate-700 text-slate-300">Reset to Defaults</Button>
                </div>
            </SettingsSection>
        </div>
    )
}
