"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { LayoutGrid, Key } from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"

export default function SchoolSecurityPage() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <div className="space-y-8">
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Security & Authentication</h1>
                <p className={isLight ? "text-slate-600" : "text-slate-400"}>Manage Single Sign-On (SSO) and access policies.</p>
            </div>

            <SettingsSection title="Single Sign-On (SSO)" variant={isLight ? "default" : "slate"}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SettingsCard variant={isLight ? "default" : "slate"} className="border-l-4 border-l-blue-500">
                        <SettingsCardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <LayoutGrid className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <span className={cn("font-bold", isLight ? "text-slate-900" : "text-white")}>Clever</span>
                                </div>
                                <Switch />
                            </div>
                            <p className={cn("text-sm", isLight ? "text-slate-600" : "text-slate-400")}>Allow users to sign in with their district Clever account.</p>
                            <Button variant="outline" size="sm" className={cn(
                                "w-full",
                                isLight
                                    ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                                    : "bg-transparent border-slate-700 text-white hover:bg-slate-800 hover:text-white"
                            )}>
                                Configure
                            </Button>
                        </SettingsCardContent>
                    </SettingsCard>

                    <SettingsCard variant={isLight ? "default" : "slate"} className="border-l-4 border-l-orange-500">
                        <SettingsCardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                        <Key className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <span className={cn("font-bold", isLight ? "text-slate-900" : "text-white")}>ClassLink</span>
                                </div>
                                <Switch />
                            </div>
                            <p className={cn("text-sm", isLight ? "text-slate-600" : "text-slate-400")}>Allow users to sign in with ClassLink LaunchPad.</p>
                            <Button variant="outline" size="sm" className={cn(
                                "w-full",
                                isLight
                                    ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                                    : "bg-transparent border-slate-700 text-white hover:bg-slate-800 hover:text-white"
                            )}>
                                Configure
                            </Button>
                        </SettingsCardContent>
                    </SettingsCard>
                </div>
            </SettingsSection>
        </div>
    )
}
