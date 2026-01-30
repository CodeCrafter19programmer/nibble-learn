"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Check, Plus } from "lucide-react"

export default function TeacherIntegrationsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">Integrations</h1>
                <p className="text-slate-400">Connect MagicSchool with your favorite tools.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {/* Google Classroom (Connected) */}
                <SettingsCard variant="slate" className="border-l-4 border-l-green-500">
                    <SettingsCardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200">
                                {/* Mock Google Logo */}
                                <span className="font-bold text-xl text-slate-800">G</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-lg text-white">Google Classroom</h3>
                                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium flex items-center gap-1">
                                        <Check className="w-3 h-3" /> Connected
                                    </span>
                                </div>
                                <p className="text-slate-400 text-sm">Sync rosters and export assignments.</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">Configure</Button>
                            <Button variant="ghost" className="text-slate-500 hover:text-red-400">Disconnect</Button>
                        </div>
                    </SettingsCardContent>
                </SettingsCard>

                {/* Canvas (Not Connected) */}
                <SettingsCard variant="slate" className="border-l-4 border-l-slate-700">
                    <SettingsCardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">
                                <span className="font-bold text-xl">C</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white">Canvas LMS</h3>
                                <p className="text-slate-400 text-sm">Export content directly to your courses.</p>
                            </div>
                        </div>
                        <Button className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">
                            <Plus className="w-4 h-4 mr-2" /> Connect Canvas
                        </Button>
                    </SettingsCardContent>
                </SettingsCard>
            </div>
        </div>
    )
}
