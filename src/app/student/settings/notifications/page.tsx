"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { cn } from "@/lib/utils"

export default function StudentNotificationsPage() {
    const { theme } = useStudentTheme()
    const variant = theme === 'light' ? 'default' : 'glass'
    const isLight = theme === 'light'

    return (
        <div className="space-y-8">
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Notifications</h1>
                <p className={isLight ? "text-slate-500" : "text-white/60"}>Choose what updates you want to receive.</p>
            </div>

            <SettingsSection title="Email Notifications" variant={variant}>
                <SettingsCard variant={variant}>
                    <SettingsCardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className={cn("text-base", isLight ? "text-slate-900" : "text-white")}>Teacher Messages</Label>
                                <p className={cn("text-sm", isLight ? "text-slate-500" : "text-white/50")}>Get an email when your teacher sends instructions.</p>
                            </div>
                            <Switch defaultChecked className={isLight ? "data-[state=checked]:bg-blue-600" : ""} />
                        </div>
                        <div className={cn("flex items-center justify-between border-t pt-6", isLight ? "border-slate-100" : "border-white/5")}>
                            <div className="space-y-0.5">
                                <Label className={cn("text-base", isLight ? "text-slate-900" : "text-white")}>Weekly Progress</Label>
                                <p className={cn("text-sm", isLight ? "text-slate-500" : "text-white/50")}>A summary of your learning activity.</p>
                            </div>
                            <Switch defaultChecked className={isLight ? "data-[state=checked]:bg-blue-600" : ""} />
                        </div>
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
