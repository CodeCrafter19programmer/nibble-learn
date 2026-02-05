"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Building2, Users } from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"

export default function SchoolBillingPage() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <div className="space-y-8">
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Billing & Licenses</h1>
                <p className={isLight ? "text-slate-600" : "text-slate-400"}>Manage district-wide subscription.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <SettingsCard variant={isLight ? "default" : "slate"} className={cn(
                    isLight
                        ? "bg-indigo-50 border-indigo-200"
                        : "bg-indigo-900/10 border-indigo-500/30"
                )}>
                    <SettingsCardContent className="space-y-2">
                        <h4 className={cn("text-sm font-medium uppercase tracking-wider", isLight ? "text-indigo-600" : "text-indigo-400")}>Plan Type</h4>
                        <div className={cn("text-2xl font-bold flex items-center gap-2", isLight ? "text-indigo-900" : "text-white")}>
                            <Building2 className="w-6 h-6" /> Enterprise
                        </div>
                        <p className={cn("text-xs", isLight ? "text-indigo-700" : "text-slate-400")}>District-wide License</p>
                    </SettingsCardContent>
                </SettingsCard>

                <SettingsCard variant={isLight ? "default" : "slate"}>
                    <SettingsCardContent className="space-y-2">
                        <h4 className={cn("text-sm font-medium uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Total Licenses</h4>
                        <div className={cn("text-2xl font-bold", isLight ? "text-slate-900" : "text-white")}>500 Seats</div>
                        <p className={cn("text-xs", isLight ? "text-slate-500" : "text-slate-500")}>Contract ends June 30, 2026</p>
                    </SettingsCardContent>
                </SettingsCard>

                <SettingsCard variant={isLight ? "default" : "slate"}>
                    <SettingsCardContent className="space-y-2">
                        <h4 className={cn("text-sm font-medium uppercase tracking-wider", isLight ? "text-slate-500" : "text-slate-400")}>Utilization</h4>
                        <div className={cn("text-2xl font-bold flex items-center gap-2", isLight ? "text-slate-900" : "text-white")}>
                            <Users className={cn("w-6 h-6", isLight ? "text-green-600" : "text-green-400")} /> 84%
                        </div>
                        <p className={cn("text-xs", isLight ? "text-slate-500" : "text-slate-500")}>423 Active Users</p>
                    </SettingsCardContent>
                </SettingsCard>
            </div>

            <SettingsSection title="License Allocation" variant={isLight ? "default" : "slate"}>
                <SettingsCard variant={isLight ? "default" : "slate"}>
                    <SettingsCardContent>
                        <div className="p-8 text-center space-y-4">
                            <p className={isLight ? "text-slate-600" : "text-slate-400"}>Detailed license management is available in the User Management dashboard.</p>
                            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white">Manage Allocations</Button>
                        </div>
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
