"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { LayoutGrid, Key } from "lucide-react"

export default function SchoolSecurityPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">Security & Authentication</h1>
                <p className="text-slate-400">Manage Single Sign-On (SSO) and access policies.</p>
            </div>

            <SettingsSection title="Single Sign-On (SSO)" variant="slate">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SettingsCard variant="slate" className="border-l-4 border-l-blue-500">
                        <SettingsCardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <LayoutGrid className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <span className="font-bold text-white">Clever</span>
                                </div>
                                <Switch />
                            </div>
                            <p className="text-sm text-slate-400">Allow users to sign in with their district Clever account.</p>
                            <Button variant="outline" size="sm" className="w-full border-slate-700 text-slate-300">Configure</Button>
                        </SettingsCardContent>
                    </SettingsCard>

                    <SettingsCard variant="slate" className="border-l-4 border-l-orange-500">
                        <SettingsCardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                        <Key className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <span className="font-bold text-white">ClassLink</span>
                                </div>
                                <Switch />
                            </div>
                            <p className="text-sm text-slate-400">Allow users to sign in with ClassLink LaunchPad.</p>
                            <Button variant="outline" size="sm" className="w-full border-slate-700 text-slate-300">Configure</Button>
                        </SettingsCardContent>
                    </SettingsCard>
                </div>
            </SettingsSection>
        </div>
    )
}
