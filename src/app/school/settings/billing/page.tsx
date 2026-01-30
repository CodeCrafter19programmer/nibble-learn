"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Building2, Users } from "lucide-react"

export default function SchoolBillingPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">Billing & Licenses</h1>
                <p className="text-slate-400">Manage district-wide subscription.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <SettingsCard variant="slate" className="bg-indigo-900/10 border-indigo-500/30">
                    <SettingsCardContent className="space-y-2">
                        <h4 className="text-sm font-medium text-indigo-400 uppercase tracking-wider">Plan Type</h4>
                        <div className="text-2xl font-bold text-white flex items-center gap-2">
                            <Building2 className="w-6 h-6" /> Enterprise
                        </div>
                        <p className="text-xs text-slate-400">District-wide License</p>
                    </SettingsCardContent>
                </SettingsCard>

                <SettingsCard variant="slate" className="bg-slate-900/50">
                    <SettingsCardContent className="space-y-2">
                        <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Total Licenses</h4>
                        <div className="text-2xl font-bold text-white">500 Seats</div>
                        <p className="text-xs text-slate-500">Contract ends June 30, 2026</p>
                    </SettingsCardContent>
                </SettingsCard>

                <SettingsCard variant="slate" className="bg-slate-900/50">
                    <SettingsCardContent className="space-y-2">
                        <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Utilization</h4>
                        <div className="text-2xl font-bold text-white flex items-center gap-2">
                            <Users className="w-6 h-6 text-green-400" /> 84%
                        </div>
                        <p className="text-xs text-slate-500">423 Active Users</p>
                    </SettingsCardContent>
                </SettingsCard>
            </div>

            <SettingsSection title="License Allocation" variant="slate">
                <SettingsCard variant="slate">
                    <SettingsCardContent>
                        <div className="p-8 text-center space-y-4">
                            <p className="text-slate-400">Detailed license management is available in the User Management dashboard.</p>
                            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white">Manage Allocations</Button>
                        </div>
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
